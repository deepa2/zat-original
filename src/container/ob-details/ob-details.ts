import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs/Subscription";
import * as fromStore from "@app/store";

@IonicPage()
@Component({
  selector: 'page-ob-details',
  templateUrl: 'ob-details.html',
})
export class ObDetailsPage {
  selectedTab: number;
  getData: any;
  tabIndex: number;
  detailTypes: Array<any> = [];
  private _obDetailListner: Subscription = new Subscription();
  selectedFormFields: Array<any> = [];
  personalType: any = {};
  educationalType: any = {};
  professionalType: any = {};
  tabArray: Array<any> = [];

  url: string = "getOnboardingStatusDetails";

  param: any = {
    "type": "all"
  }

  constructor(private navCtrl: NavController, private navParams: NavParams, private store: Store<fromStore.AppState>,
    private popoverCtrl: PopoverController, ) {
    this.getData = this.navParams.get('selectedValue');

  }

  ionViewWillEnter() {
    this.store.dispatch(new fromStore.obDashboardAction(this.url, this.param));
  }

  ionViewDidLoad() {
    this.obDetail();
    this.selectedTab = this.getData.index;

  }

  selectTab(num: number) {
    this.selectedTab = num;
    this.getTitle();
  }

  getTitle() {

    if (this.detailTypes.length > 0) {

      let selectedItem = this.detailTypes.filter((item, i) => {
        if (this.selectedTab == i) {
          return item;
        }
      })

      if (selectedItem.length > 0) {
        return selectedItem[0]['title'];
      }

    }

  }

  obDetail() {
    return new Promise(resolve => {
      this._obDetailListner = this.store.select<any>(fromStore.getObDashboardState).subscribe(response => {
        if (response) {
          if (response.data) {
            this.detailTypes = response.data.onboardingDetails;
            this.getTitle();
          }
          resolve();
        }
      },
        err => {
        })
    })
  }

  goToAddDetails(data) {


    if (data) {
      let selectedfield = {
        "title": data.hasOwnProperty('title') ? data.title : '',
        'type': data.type,
        'referenceId': data.referenceId,
        'selectedTab': this.selectedTab,
        'section': 'onboarding',
        'formMessage': data.reasonForRejection,
        'isAvailableForSubmit': data.isAvailableForSubmit
      }
      this.navCtrl.push('ObAddDetailsPage', { 'selectedField': selectedfield });

    } else {

      let selectedObj = this.detailTypes[this.selectedTab];

      let selectedfield = {
        "title": 'Add ' + selectedObj.title,
        "type": selectedObj.type,
        "referenceId": 0,
        "mode": "add",
        "addReferenceId": selectedObj.dataList == null ? 0 : selectedObj.dataList[selectedObj.dataList.length - 1].referenceId,
        'selectedTab': this.selectedTab,
        'section': 'onboarding',
        'isAvailableForSubmit': selectedObj.dataList == null ? true : selectedObj.dataList[selectedObj.dataList.length - 1].isAvailableForSubmit
      }

      this.navCtrl.push('ObAddDetailsPage', { 'selectedField': selectedfield });

    }

  }

  getColor(status: string) {
    if (status.toLowerCase() == 'completed') {
      return 'green';
    } else {
      // return '#e9bbbb';
      return '#8264ff';
    }
  }

  presentOptions(myEvent) {
    let popover = this.popoverCtrl.create('PopoverPage', {
      'type': 'obAddDetails'
    });
    popover.present({ ev: myEvent });

  }

}
