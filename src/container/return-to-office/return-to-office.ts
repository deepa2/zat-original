import { Component, NgZone, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform, AlertController } from 'ionic-angular';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../providers/http/http';
import { TermsConditionsComponent } from '../../components/terms-conditions/terms-conditions';
import { getValueFromFormat } from 'ionic-angular/umd/util/datetime-util';

import { BrowserTab } from '@ionic-native/browser-tab';
import { GatePassCheckComponent } from '../../components/gatepass-check/gatepass-check';
import { SearchAssociatesConsultationModalComponent } from 'components/search-associates-consultation-modal/search-associates-consultation-modal';
declare var window;

/**
 * Generated class for the ReturnToOfficePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-return-to-office',
  templateUrl: 'return-to-office.html',
})
export class ReturnToOfficePage {

  private showfooter: boolean = false;
  private userData: any;
  private userId;
  private isShowCheck;
  private checkBoxValue: boolean;
  private checkboxStatus: boolean = false;
  private submittedDateTime: any;
  private isAndroid: boolean = false;
  private recordAgreementUrl = "recordAgreement"
  @ViewChild('myVideo') myVideo: ElementRef;

  constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private navParam: NavParams, private navCtrl: NavController, private zone: NgZone, private modalCtrl: ModalController,
    private browserTab: BrowserTab, private platform: Platform, private alertCtrl: AlertController) {

    if (this.platform.is('android')) {
      this.isAndroid = true;
    }
    this.userId = this.navParam.get('userid');
    this.userData = this.navParam.get('userDetails');
    this.checkBoxValue = this.userData.isSignAgreement;
    this.checkboxStatus = this.checkBoxValue;
    //////console.log(this.userData)

  }

  ionViewDidLoad() {


  }
  chnageCheckBoxStatus(status) {

    this.checkBoxValue = status;
  }

  encodeURI(url) {
    return window.encodeURI(url);
  }
  // Video Play event 
  VideoEventInit() {
    if (!this.userData.isSignAgreement) {
      this.showfooter = true;
    }
    let param = {
      url: 'setEngagementData',
      data: {
        type: 'vedio'
      },
      miscellaneous: true

    }
    this.httpProvider.http.commonService(param).subscribe((response: any) => {
      ////console.log(response)
    }, error => {
      //console.log(error);
    })

  }

  goToTermsConditions() {
    let modal = this.modalCtrl.create(TermsConditionsComponent, {}, {
      cssClass: 'infoModal'
    });
    modal.present();
  }
  goToTermsGuidelines() {
    this.myVideo.nativeElement.pause();

    let modal = this.modalCtrl.create(GatePassCheckComponent, { 'userDetails': this.userData }, {
      cssClass: 'guidelinesModal'
    });
    modal.present();
  }
  openPDF(data) {
    if (this.platform.is('ios')) {
      this.browserTab.isAvailable().then(isAvailable => {
        if (isAvailable) {
          this.browserTab.openUrl(data)
        } else {
          this.utility.openWithSystemBrowser(data)
        }

      })
        .catch(() => {
          this.utility.openWithSystemBrowser(data)
        })
    } else {
      this.utility.openAsset(data)
    }
    let param = {
      url: 'setEngagementData',
      data: {
        type: 'file'
      },
      miscellaneous: true

    }
    this.httpProvider.http.commonService(param).subscribe((response: any) => {
      ////console.log(response)
    }, error => {
      //console.log(error);
    })

  }

  submitServey() {
    this.utility.updateLoader(true)
    let params = {
      "userId": this.userId.toString()
    }
    let data = {
      url: this.recordAgreementUrl, data: params, miscellaneous: true
    }
    return new Promise<void>(resolve => {
      this.httpProvider.http.commonService(data).subscribe((res: any) => {

        if (res) {
          this.utility.updateLoader(false);
          if (this.userData.isUKLocation) {
            this.utility.presentAlert("Thank-you for submitting the Return to Office (RTO) Declaration. <br>Please adhere to the Covid-19 Policy, Workplace Plan and obligations in the Declaration, to ensure a safe working environment for yourself and your colleagues.").then(() => {
              this.navCtrl.pop();
            }).catch(() => { })
          } else if (this.userData.isUSLocation) {
            if (this.userData.isEligibleForUSQuestionnaires) {
              this.presentConfirmation("Are you going to office ?").then(() => {
                this.navCtrl.push('RtoQuestionnariesPage');
              }).catch(() => {
                //this.navCtrl.pop();
                this.utility.presentAlert("Thank-you for submitting the Return to Office (RTO) Declaration & policy agreement. <br>Please adhere to the RTO policy and obligations in the Declaration, to ensure a safe working environment for yourself and your colleagues.").then(() => {
                  this.navCtrl.pop();
                }).catch(() => { })
              })
            } else {
              this.utility.presentAlert("Thank-you for submitting the Return to Office (RTO) Declaration & policy agreement. <br>Please adhere to the RTO policy and obligations in the Declaration, to ensure a safe working environment for yourself and your colleagues.").then(() => {
                this.navCtrl.pop();
              }).catch(() => { })
            }

          } else if (!this.userData.isUKLocation && !this.userData.isUSLocation) {
            this.userData.isSignAgreement = true;
            // this.userData.isBackButtonEnable = false;
            this.navCtrl.push("GatePassPage", { 'userDetails': this.userData })
            this.navCtrl.remove(this.navCtrl.getActive().index, 1);
          }


          resolve();

        }
      },
        error => {
          this.utility.updateLoader(false);
        })
    })
  }
  private presentConfirmation(message, title = '') {

    return new Promise<void>((resolve, reject) => {
      let alert = this.alertCtrl.create({
        enableBackdropDismiss: false,
        title: title,
        subTitle: message,
        buttons: [
          {
            text: 'No',
            handler: () => {
              reject();
            }
          },
          {
            text: 'Yes',
            handler: () => {
              resolve();
            }
          }
        ]
      });
      alert.present();
    })

  }


}
