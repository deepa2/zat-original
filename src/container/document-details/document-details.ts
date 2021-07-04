import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs/Subscription";
import * as fromStore from "@app/store";
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'
import { Download } from '../../providers/download/download';


@IonicPage()
@Component({
  selector: 'page-document-details',
  templateUrl: 'document-details.html',
})
export class DocumentDetailsPage {

  url: string = "documentDashboard";
  type: Array<any> = [];
  selectedIndex: any;
  private _documentDataListner: Subscription = new Subscription();
  personalDocs: Array<any> = [];
  educationaldocs: Array<any> = [];
  professionalDocs: Array<any> = [];
  items: Array<any> = []

  constructor(private navCtrl: NavController, private navParams: NavParams, private store: Store<fromStore.AppState>,
    private utils: CommonUtilities, private download: Download, private popoverCtrl: PopoverController) {
    this.selectedIndex = this.navParams.get("docIndex");
  }

  ionViewDidLoad() {
    this.getDocumentData();
  }

  getDocumentData() {
    this.store.dispatch(new fromStore.getDocumentDetailsAction(this.url))

    return new Promise(resolve => {
      this._documentDataListner = this.store.select<any>(fromStore.getDocumentDetailsData).subscribe(response => {
        if (response) {

          this.type = response;
          /* 
                    for (let i = 0; i < this.type.length; i++) {
                      if (this.type[i].type == "Personal") {
                        this.personalDocs = this.type[i].documentsList;
                      }
                      if (this.type[i].type == "Educational") {
                        this.educationaldocs = this.type[i].documentsList;
                      }
                      if (this.type[i].type == "Professional") {
                        this.professionalDocs = this.type[i].documentsList;
                      }
                    } */
        }
      })

    })
  }

  selectTab(selectedTab) {
    this.selectedIndex = selectedTab;
  }

  viewDocument(item) {
    this.utils.openAsset(item);

  }
  downloadDocument(url) {
    this.download.downloadDocument(url);
  }


  presentOptions(myEvent) {
    let popover = this.popoverCtrl.create('PopoverPage', {
      'type': 'obDocumentDetails'
    });

    popover.present({ ev: myEvent });

  }

  ionViewWillLeave() {
    this._documentDataListner.unsubscribe();
  }



}
