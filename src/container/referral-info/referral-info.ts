import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import * as fromStore from "@app/store";
import { Store } from '@ngrx/store';
import { File } from '@ionic-native/file';
import { Subscription } from 'rxjs';
import { Attachment } from '../../providers/attachment/attachment';
import { SubmitReferralComponent } from '../../components/submit-referral/submit-referral';
import { ZenrichTermsConditionsComponent } from '../../components/zenrich-terms-conditions/zenrich-terms-conditions';

@IonicPage()
@Component({
  selector: 'page-referral-info',
  templateUrl: 'referral-info.html',
})

export class ReferralInfoPage {
  private referralInfo;
  private srfNo;
  private candidateProfileId;
  private submitResponce;
  private title;
  private gender;
  checkBoxValue: boolean = false;
  checkboxStatus: boolean = false;
  @ViewChild('createReferral') form;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private httpProvider: HttpProvider, private modalCtrl: ModalController, private popoverctr: PopoverController,
    private attachment: Attachment, private file: File, private utility: CommonUtilities) {
    this.referralInfo = this.navParams.get('ReferralInfo');
    this.title = this.navParams.get('title');
    this.gender = this.navParams.get('gender');
    this.candidateProfileId = this.navParams.get('candidateProfileId');
    this.srfNo = this.navParams.get('srfNo');

  }
  submitReferral(ev) {

    this.utility.updateLoader(true);
    const url: string = "submitReferral"

    const data: any = {
      "srfNumber": this.srfNo,
      "candidateProfileId": this.candidateProfileId
    }
    //////console.log(data)
    this.httpProvider.http
      .commonService({ url, data, zenRich: true })
      .subscribe(
        (res: any) => {
          //////console.log(res);
          this.submitResponce = res
          this.utility.updateLoader(false);
          if (this.submitResponce != undefined) {
            if (this.submitResponce.status.statusCode == 1) {
              this.utility.showToast("Referral saved successfully.")
              this.presentOptions()
            }
          }


        }, error => {
          //////console.log(error);
          // this.submitResponce = error
          this.utility.updateLoader(false);
          // this.presentOptions(ev)
        })
  }
  presentOptions() {
    let modal = this.modalCtrl.create(SubmitReferralComponent, { "response": this.submitResponce}, {
      cssClass: 'submitModal'
    });
    modal.present();
    modal.onDidDismiss((data) => {
      if (data && data == 'home') {
        let getIndex = this.navCtrl.getViews();
        //////console.log(getIndex);
        this.navCtrl.push('ZenRichLandingPage');
        //////console.log(this.navCtrl.getActive().index)
        let pagesToRemove = this.navCtrl.getActive().index;
        let pushOnIndex = this.navCtrl.getActive().index - 1;
        this.navCtrl.remove(pagesToRemove - pushOnIndex, pagesToRemove)
      } else if (data && data == 'myReferrals') {
        let getIndex = this.navCtrl.getViews();
        //////console.log(this.navCtrl.getActive().index);
        //////console.log(getIndex);
        // 
        let data = {
            'icon': "https://zentalentapp.zensar.com/fileviewer-zenhelp/zentalent/Icon/UserProfileIcons/Location.svg",
            'key': "My Referrals",
            'parameter': "MY_REFERRALS",
            'type': null,
            'value': "My Referrals"
          }
          let index = this.navCtrl.getActive().index-1;
          let removeCount = this.navCtrl.getActive().index - 2
          this.navCtrl.push('ZenrichPage', {
            'getData': data
          }).then(()=>{
            this.navCtrl.remove(2, index)
          })
        }
      })
  }
  editInformation() {
    this.navCtrl.pop();
  }
  goToTermsConditions() {
    let modal = this.modalCtrl.create(ZenrichTermsConditionsComponent, {}, {
      cssClass: 'zenrichinfoModal'
    });
    modal.present();
  }
 
}
