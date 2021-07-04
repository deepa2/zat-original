import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, AlertController } from 'ionic-angular';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import { Observable } from "rxjs";
import { Subscription } from 'rxjs/Subscription';
import { Data } from '../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-rejected-documents',
  templateUrl: 'rejected-documents.html',
})
export class RejectedDocumentsPage {

  url: string = "getRejectedDocumentDashboard";
  rejectedDocsList: Array<any>;
  loading$: Observable<any>;
  payload: any;
  type: any;
  referenceId: any;
  rejectionStatus: any;
  private _DocumentListener: Subscription = new Subscription();
  isAvailableForFinalSubmit: boolean = false;
  private _addSuccessListener: Subscription = new Subscription();

  constructor(private navCtrl: NavController, private navParams: NavParams, private popoverCtrl: PopoverController,
    private utility: CommonUtilities, private store: Store<fromStore.AppState>, private dataService: Data, private alertCtrl:AlertController ) {
  }

  ionViewDidLoad() {

    this.loading$ = this.store.select<any>(fromStore.getRejectedDocsLoader);


  }

  presentOptions(myEvent) {
    let popover = this.popoverCtrl.create('PopoverPage', {
      'type': 'rejectedDocuments'
    });
    popover.present({ ev: myEvent });

  }
  ionViewWillEnter() {
    this.getRejectedDocuments();
  }



  getRejectedDocuments() {
    this.store.dispatch(new fromStore.RejectedDocsAction(this.url))

    this._DocumentListener = this.store.select<any>(fromStore.getRejectedDocsState).subscribe((response) => {
      if (response.data) {
        this.store.dispatch(new fromStore.RejectedDocsResetAction());
        this.rejectedDocsList = response.data.details.responseList.rejectDocumentsList;
        this.isAvailableForFinalSubmit = response.data.details.responseList.isAvailableForFinalSubmit;

        //  this.isAvailableForSubmit= true;

      }
    });

  }

  /* ngOnDestroy() {
    this._DocumentListener.unsubscribe();
    this._addSuccessListener.unsubscribe();
  } */

  gotoEditPage(type, Id) {
    let data = {
      "type": type,
      "referenceId": Id,
      'section': 'onboarding',
      'isRejected': true
    }

    this.navCtrl.push("ObAddDetailsPage", { 'selectedField': data });

  }

  finalSubmit() {
    let alert = this.alertCtrl.create({
      message: 'Do you want to save the data ?',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'No',
          role: 'no',
          handler: () => {
          }

        },
        {
          text: 'Yes',
          handler: () => {
            this.store.dispatch(new fromStore.ObFinalSubmitAction('onboardingFinalSubmit'));
            this._addSuccessListener = this.store.select<any>(fromStore.getObWElcomeState).subscribe(data => {
              if (data.finalData) {
                this.utility.presentAlert('Submitted successfully').then(() => {
                  // this.navCtrl.pop();
                  this.navCtrl.setRoot("ObDashboardPage");
                  //this.store.dispatch(new fromStore.ObFinalSubmitResetAction());
                })
              }
            });


          }
        }
      ],

    });

    alert.present();


  }

  getBorderColor(rejectionStatus) {

    if (rejectionStatus == 'Pending') {
      return 'green';
    }

    else if (rejectionStatus == 'Reject') {
      return 'red';
    }
  }

  ionViewWillLeave() {
    this._DocumentListener.unsubscribe();
    this._addSuccessListener.unsubscribe();
  }

}
