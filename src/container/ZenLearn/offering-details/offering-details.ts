import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../../providers/http/http';
import { Constants } from '@app/constants';
import { AlertController } from 'ionic-angular';
import { ZenLearnDashboardPage } from '../zen-learn-dashboard/zen-learn-dashboard';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { MoveToPageService } from '../../../container/chat-bot-new/chat-bot-new-services/moveToPage.service';

/**
 * Generated class for the OfferingDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offering-details',
  templateUrl: 'offering-details.html',
})
export class OfferingDetailsPage {
  private selectedTab: string;
  private offeringDetails: any;
  private errorMsg: string;
  private offeringDetailsData: any
  private offeringRatingData: any;
  private isDataNotAvailable: boolean = false;
  private wholeData: any;
  private isServiceCallRequired: boolean = false;
  private isComingFromHistoryCourses: boolean = false;

  constructor(private moveToPageService: MoveToPageService, private events2: Events, public navCtrl: NavController, public navParams: NavParams, private inappbrowser: InAppBrowser, private utility: CommonUtilities, private httpProvider: HttpProvider, public alertCtrl: AlertController) {
    this.offeringDetails = this.navParams.get("selectedCourse");
    // console.log(this.offeringDetails);
    this.selectedTab = 'Details';
    if (this.navParams.get('isHistoryData')) {
      this.isComingFromHistoryCourses = this.navParams.get('isHistoryData');
    }

    // console.log(this.offeringDetails)
    // if (this.offeringDetails.type == 'Behavioural' || this.offeringDetails.type == 'Technical') {
    //   this.selectedTab = 'Rating/Review'
    // } else {
    //   this.selectedTab = 'Details'
    // }


  }

  ionViewWillEnter() {
    this.getOfferingDetails();
  }

  getOfferingDetails() {
    const url: string = "getCoursesDetails";
    let data: any = {};
    if (!this.utility.isEmptyOrNullOrUndefined(this.offeringDetails)) {
      data.scheduleOfferingId = this.offeringDetails.scheduleOfferingId;
      data.itemId = this.offeringDetails.itemId;
    }
    this.utility.updateLoader(true);
    this.httpProvider.http.commonService({ url, data, zenLearn: true })
      .subscribe(
        (res: any) => {
          if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details.responseList)) {
            this.wholeData = res.details;

            this.offeringDetailsData = res.details.responseList.details
            this.offeringRatingData = res.details.responseList.ratings
            this.isDataNotAvailable = false;
            this.utility.updateLoader(false);

          } else {
            this.utility.updateLoader(false);
            this.isDataNotAvailable = true;
            // this.errorMsg = Constants["erroMessageFor No Data"]
            this.utility.showAlert('Offering Detail', Constants["erroMessageFor No Data"])
          }
        },
        err => {
          this.utility.updateLoader(false);
          this.utility.showAlert('Offering Detail', Constants["erroMessageFor No Data"])
          // this.errorMsg = Constants["erroMessageFor No Data"]
        }
      );
  }

  getEnrolled(status, statusId) {
    const url: string = "enrollNow";
    let ststusMsg;
    let data: any =
    {
      "scheduleOfferingId": this.offeringDetails.scheduleOfferingId,
      "action": status,
    }


    // this.enrollmentStatusID = "ENROLL"
    this.utility.updateLoader(true);
    this.httpProvider.http.commonService({ url, data, zenLearn: true })
      .subscribe(
        (res: any) => {
          if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details)) {

            this.utility.updateLoader(false);
            this.utility.presentAlert(res.details.responseList, "Enrollment Status")
            this.isServiceCallRequired = true;
            this.getOfferingDetails();

          }
        },
        err => {
          this.utility.updateLoader(false);
          this.errorMsg = Constants["erroMessageFor No Data"]
        }
      );

  }
  _segmentChanged(ev: any) {
    this.selectedTab = ev._value;
    //console.log(this.selectedTab)
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      // title: 'Are You Sure',
      message: 'This link will direct you to SuccessFactor Learning search. Please open this link in your browser and search for the above program. You can then ENROLL yourself for the respective program.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.utility.openWithSystemBrowser('https://performancemanager8.successfactors.com/sf/learning?destUrl=https%3a%2f%2frpgenterprises%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dCATALOG%5fSIMPLE%5fSEARCH%26fromSF%3dY&company=C0014469929P')
            //  this.getEnrolled(status,statusId);
            // this.navCtrl.popTo("ZenLearnDashboardPage",{enrollmentStatusID:"ENROLL"})
            //this.handleClick()
            //this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
          }
        }
      ]
    });
    confirm.present();
  }
  handleClick() {
    {
      this.events2.publish('selecetedItem', 'Enrolled');
    }
  }
  getRating(courseData: any) {
    this.navCtrl.push("ZenLearnRatingPage", { courseData: courseData })
  }
  goToSuccess(webUrl) {
    const weboptions: InAppBrowserOptions = {
      location: 'yes',//Or 'no' 
      hidden: 'no', //Or  'yes'
      clearcache: 'yes',
      clearsessioncache: 'yes',
      zoom: 'yes',//Android only ,shows browser zoom controls 
      hardwareback: 'yes',
      mediaPlaybackRequiresUserAction: 'yes',
      shouldPauseOnSuspend: 'yes', //Android only 
      disallowoverscroll: 'no', //iOS only 
      toolbar: 'yes', //iOS only 
      enableViewportScale: 'no', //iOS only 
      allowInlineMediaPlayback: 'yes',//iOS only 
      presentationstyle: 'fullscreen',//iOS only 
      fullscreen: 'yes',//Windows only,
      toolbarposition: 'top',
      toolbarcolor: '#1cb7c9',
      closebuttoncolor: 'white',
    };

    const target = "_system";

    const url = webUrl;

    const browser = this.inappbrowser.create(url, target, weboptions);
  }

  ionViewWillLeave() {
    if (this.isServiceCallRequired) {
      this.moveToPageService.withDrawCourse.next();
      this.navCtrl.getPrevious().data.isServiceCallRequired = this.isServiceCallRequired;
    }

  }

}
