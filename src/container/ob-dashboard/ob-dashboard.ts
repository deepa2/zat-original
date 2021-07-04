import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Subscription } from "rxjs/Subscription";
import * as fromStore from "@app/store";
import { Data } from '../../providers/data/data';
import { AppVersion } from "@ionic-native/app-version";



@IonicPage()
@Component({
  selector: 'page-ob-dashboard',
  templateUrl: 'ob-dashboard.html',
})
export class ObDashboardPage {

  url: string = "getOnboardingStatusDetails";
  url1: string = "getRejectedDocumentDashboard";

  param: any = {
    "type": "all"
  }

  formData: Array<any> = [];
  userDetails: any = {};
  loading$: Observable<any>;
  private _obDashboardListner: Subscription = new Subscription();
  private _DashBoardDocs: Subscription = new Subscription();
  selectedData: any = {};
  isAvailableForFinalSubmit: boolean = false;
  miscData: any = {};
  private _homeData: Subscription = new Subscription();
  offeringListDetails: any = {};
  showAddOption: boolean = false;
  rejectedDocsList: Array<any>;
  payload: any;
  type: any;
  referenceId: any;
  submitButtonValue:any;
  versionNo:any;



  constructor(private navCtrl: NavController, private navParams: NavParams, private store: Store<fromStore.AppState>, private popoverCtrl: PopoverController,
    private data: Data,private appVersion:AppVersion) {
      this.appVersion.getVersionNumber().then(response => { 
        this.versionNo = response;
      })
  }

  ionViewWillEnter() {
    //this.getObUserData();
    this.loading$ = this.store.select<any>(fromStore.getRejectedDocsLoader);
    this.getRejectedDocuments();
    this.getHomeData();
    this.setRole();
  }
  
  getObUserData() {
    this.store.dispatch(new fromStore.obDashboardAction(this.url, this.param))
    this.loading$ = this.store.select<any>(fromStore.getObDashboardLoading);
    return new Promise(resolve => {
      this._obDashboardListner = this.store.select<any>(fromStore.getObDashboardState).subscribe(response => {
        if (response.data) {
          this.userDetails = response.data.userDetails;
          this.formData = response.data.onboardingDetails;
          this.isAvailableForFinalSubmit = response.data.isAvailableForFinalSubmit;
          this.showAddOption = true;
         this.submitButtonValue = response.data.submitButtonKeyValue;

        }
        resolve();
      }, err => {
      })
    })
  }

  goToMyPage(data, index) {
    this.selectedData = {
      selectedValue: data,
      index: index,
      showAddButton: this.isAvailableForFinalSubmit
    }
    this.navCtrl.push('ObDetailsPage', { selectedValue: this.selectedData });
  }

  presentOptions(myEvent) {
    let popover = this.popoverCtrl.create('PopoverPage', { 'type': 'obDashboard' });
    popover.present({ ev: myEvent });
  }

  goToDocuments(index) {
    this.navCtrl.push('DocumentDetailsPage', {
      'docIndex': index
    });
  }

  add() {
    this.navCtrl.push('AddPage', { 'type': 'addQuestion', 'questionId': null, 'answerType': null });
  }

  ionViewWillLeave() {
    this._obDashboardListner.unsubscribe();
    this._homeData.unsubscribe();
    this._DashBoardDocs.unsubscribe();
  }

  finalSubmit() {
    this.navCtrl.push('ObLandingPage', {
      'landingType': 'final'
    });
  }

  setRole() {
    this.store.dispatch(new fromStore.SetRole('associates'));
  }

  getHomeData() {
    let param = {
      "versionNo":this.versionNo
    }
    this.store.dispatch(new fromStore.GetMiscDataAction('getAllTimeUseData',param));
    return new Promise(resolve => {
      this._homeData = this.store.select<any>(fromStore.getMiscData).subscribe(response => {
        if (response && response.offeringList) {
          this.miscData = response;

          this.data.saveData('miscData', response);
          this.offeringListDetails = response.offeringList[0];
         // this.setCurrentModule(this.offeringListDetails)
          resolve();
        }
      }, err => {
      })
    })
  }

  setCurrentModule(data) {
    this.store.dispatch(new fromStore.SetCurrentModule(data.homePageConfigrationName));
    this._homeData.unsubscribe();
  }

  getRejectedDocuments() {
    this.store.dispatch(new fromStore.RejectedDocsAction(this.url1))

    this._DashBoardDocs = this.store.select<any>(fromStore.getRejectedDocsState).subscribe((response) => {
      if (response.data) {
        if (response.data.details) {
          this.store.dispatch(new fromStore.RejectedDocsResetAction());
          if (response.data.details.responseList.rejectDocumentsList.length > 0) {
            // this._DocumentListener.unsubscribe();
            this.navCtrl.push("RejectedDocumentsPage");
           
          }
        } else {
          this.getObUserData();
        }
        // this.rejectedDocsList = response.data.details.responseList;
      }

     
    });

  }

}
