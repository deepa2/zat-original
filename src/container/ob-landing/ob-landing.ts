import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Subscription } from "rxjs/Subscription";
import * as fromStore from "@app/store";
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { Data } from '../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-ob-landing',
  templateUrl: 'ob-landing.html',
})
export class ObLandingPage {

  loading$: Observable<any>;
  private _ObLandingListner: Subscription = new Subscription();
  private _submitLoadingListener: Subscription = new Subscription();
  private _addSuccessListener: Subscription = new Subscription();
  welcomeMessage: any;
  url: string = "getHTMLParagraph";
  landingType: any;
  finalSubmit: boolean = false;
  submit: boolean = false;

  constructor(private navCtrl: NavController, private navParams: NavParams, private store: Store<fromStore.AppState>, private utility: CommonUtilities,
    private popoverCtrl: PopoverController, private dataService: Data) {
  }

  ngOnInit() {
    // this.dataService.getData('loginDetails').then((data: any) => {
    //   console.log(data);
     
    // })
    this.landingType = this.navParams.get('landingType');
    this.getObWelcomeData();
    this.loading$ = this.store.select<any>(fromStore.getObWelcomeLanding);

    this._submitLoadingListener = this.store.select<any>(fromStore.getObFinalSubmitLoading).subscribe(state => {
      this.utility.updateLoader(state);
    });

    this._addSuccessListener = this.store.select<any>(fromStore.getObWElcomeState).subscribe(data => {

      if (data.finalData) {
        this.store.dispatch(new fromStore.ObFinalSubmitResetAction());
        this.utility.presentAlert('Submitted successfully').then(() => {
          this.navCtrl.pop();
        });
      }

    });


  }

  getObWelcomeData() {

    let param;

    if (!this.landingType) {
      param = {
        'type': 'onboarding_welcome'
      }
    } else {
      param = {
        'type': 'onboarding_legal_consent'
      }
      this.finalSubmit = true;
    }


    this.store.dispatch(new fromStore.GetObWelcomeAction(this.url, param))

    return new Promise(resolve => {
      this._ObLandingListner = this.store.select<any>(fromStore.getObWElcomeState)
        .subscribe(response => {
          this.welcomeMessage = response.data;
          resolve();
        }, error => {
        })
    })
  }

  goToOBDashboard() {
    this.store.dispatch(new fromStore.GetObLandingStatusAction('changeFirstLoginStatus'))
    this.dataService.getData('loginDetails').then((data: any) => {
      
      data.details.userDetails.isFirstTimeLogin = false;
      this.dataService.saveData('loginDetails',data);
    })
    this.navCtrl.setRoot('ObDashboardPage');
  }

  presentOptions(myEvent) {
    let popover = this.popoverCtrl.create('PopoverPage', {
      'type': 'obLanding'
    });
    popover.present({ ev: myEvent });

  }

  ionViewWillLeave() {
    this._ObLandingListner.unsubscribe();
    this._submitLoadingListener.unsubscribe();
    this._addSuccessListener.unsubscribe();
  }

  completeOnboarding() {
    this.store.dispatch(new fromStore.ObFinalSubmitAction('onboardingFinalSubmit'));
  }

}
