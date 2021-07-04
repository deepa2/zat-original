import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';
import * as environment from '@app/env';
import * as moment from 'moment';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';

/**
 * Generated class for the ZenwenDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// declare var window;
@IonicPage()
@Component({
  selector: 'page-zenwen-dashboard',
  templateUrl: 'zenwen-dashboard.html',
})
export class ZenwenDashboardPage {
  private events: string = "upcoming";
  private worldOfWomen: string = "wallOfFame";
  private upcomingEvents: Array<any> = [];
  private pastEvents: Array<any> = [];
  private zenwenSpeaks: Array<any> = [];
  private headersMenuList: Array<any> = [];
  private imgUrl: string;
  private wallOFameList: Array<any> = [];
  private headerMenuColorList: Array<any> = ['#b7eccf', '#f9d0da', '#c3ecff', '#d7bbf7'];
  private headerMenuImgList: Array<any> = ["infoCenter", 'safetyAtZensar', 'vision'];
  private adminList: Array<any> = [];
  private smsOptions = {
    replaceLineBreaks: false, // true to replace \n by a new line, false by default
    android: {
      intent: 'INTENT'  // send SMS with the native android SMS messaging
      //intent: '' // send SMS without open any other app
    }
  };
  private message: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private httpProvider: HttpProvider, private utility: CommonUtilities,
   ) {
    this.imgUrl = environment.zenwenImgUrl;
  }

  ionViewDidLoad() {
    this.getDashboardData();
    // this.getGeolocationDetails().then((geoLink: any) => {
    //   // console.log('this.geoLink: ', geoLink);

    //   this.dataStorage.getData('zenwenLoginDetails').then((res: any) => {
    //     if (res) {
    //       this.message = 'Below associate has raised SOS - Panic button. Kindly get in touch with the associate immediately and following are the associate details.';
    //       this.message += '\nAssociate Name:: ' + res.firstName + " " + res.lastName;
    //       this.message += '\nAssociate ID:: ' + res.employeeId;
    //       this.message += '\n Associate Email Id::' + res.emailAddress;
    //       this.message += '\n Geolocation link::' + geoLink;
    //     }
    //   })
    // }, (err) => {
    //   console.log(err);
    //   this.dataStorage.getData('zenwenLoginDetails').then((res: any) => {
    //     if (res) {
    //       this.message = 'Below associate has raised SOS - Panic button. Kindly get in touch with the associate immediately and following are the associate details.';
    //       this.message += '\nAssociate Name:: ' + res.firstName + " " + res.lastName;
    //       this.message += '\nAssociate ID:: ' + res.employeeId;
    //       this.message += '\n Associate Email Id::' + res.emailAddress;
    //       this.message += '\n Geolocation link::' + '';
    //     }
    //   })
    // });

  }
  // getGeolocationDetails() {
  //   return new Promise((resolve, reject) => {
  //     // let positionOptions = {
  //     //   enableHighAccuracy : true
  //     // }
  //     this.geolocation.getCurrentPosition().then((resp) => {
  //       // resp.coords.latitude
  //       // resp.coords.longitude
  //       if (resp.coords.latitude && resp.coords.longitude) {
  //         let geoLink = "http://maps.google.com/maps?q=" + resp.coords.latitude + "," + resp.coords.longitude + "&ll=" + resp.coords.latitude + "," + resp.coords.longitude + "&z=" + 22;
  //         resolve(geoLink);
  //       }
  //     }).catch((error) => {
  //       reject(error);
  //       console.log('Error getting location', error);
  //     });
  //   })
  // }

  getDashboardData() {
    this.utility.updateLoader(true);
    let url = "dashboardList";
    let params = {};
    this.httpProvider.http.zenwenCommonGETService({ url, params, headermenu: true }).subscribe((res: any) => {
      this.utility.updateLoader(false);
      if (res.model) {
        let dashboardData = res.model;
        // this.isArray(dashboardData.upcomingEvents) ? this.upcomingEvents = dashboardData.upcomingEvents : this.upcomingEvents.push(dashboardData.upcomingEvents);
        this.upcomingEvents = dashboardData.upcomingEvents ? (Array.isArray(dashboardData.upcomingEvents) ? dashboardData.upcomingEvents : [...this.upcomingEvents, dashboardData.upcomingEvents]) : [];
        this.pastEvents = dashboardData.pastEvents ? (Array.isArray(dashboardData.pastEvents) ? dashboardData.pastEvents : [...this.pastEvents, dashboardData.pastEvents]) : [];
        this.wallOFameList = dashboardData.wallOFameMenu ? (Array.isArray(dashboardData.wallOFameMenu) ? dashboardData.wallOFameMenu : [...this.wallOFameList, dashboardData.wallOFameMenu]) : [];
        this.zenwenSpeaks = dashboardData.zenWenSpeakMenu ? (Array.isArray(dashboardData.zenWenSpeakMenu) ? dashboardData.zenWenSpeakMenu : [...this.zenwenSpeaks, dashboardData.zenWenSpeakMenu]) : [];
        this.headersMenuList = dashboardData.lstHeadersMenu ? (Array.isArray(dashboardData.lstHeadersMenu) ? dashboardData.lstHeadersMenu : [...this.headersMenuList, dashboardData.lstHeadersMenu]) : [];
        if (this.headersMenuList.length > 0) {
          this.headersMenuList.map((item, i) => {
            item.image = this.headerMenuImgList[i]
          })
          // console.log('this.headersMenuList: ', this.headersMenuList);
        }
      }
    })
  }


  dateConversion(val) {
    let date = moment(val);
    let day = moment(date).format('DD') + " " + moment(date).format('MMM');
    return day;
  }

  redirectToZenWENEvent(tabname) {
    this.navCtrl.push("ZenwenEventPage", { tabname });
  }

  getColor(i) {
    return this.headerMenuColorList.find((item, index) => {
      if (i == index) {
        return item;
      }
    })
  }

  redirectToWOW(tabname,speakdata) {
    let wallOfFameParams = {
      groupId: this.wallOFameList[0].groupId,
      folderId: this.wallOFameList[0].folderId
    }
    let zenwenSpeakParams = {
      groupId: this.zenwenSpeaks[0].groupId,
      folderId: this.zenwenSpeaks[0].folderId
    }
    this.navCtrl.push('WowPage', { wallOfFameParams, zenwenSpeakParams,'tabname': tabname, 'speakdata': speakdata});
  }

  goToPage(menu: any) {
    if (menu.groupId == 31474) {
      this.navCtrl.push('SafetyZensarPage', {
        groupId: menu.groupId,
        folderId: menu.lstSubMenu.folderId
      });
    } else if (menu.groupId == 31469) {
      this.navCtrl.push('InformationCenterPage', {
        groupId: menu.groupId,
        lstSubMenu: menu.lstSubMenu
      });
    } else if (menu.groupId == 31449) {
      this.navCtrl.push('VisionPage', {
        groupId: menu.groupId,
        lstSubMenu: menu.lstSubMenu
      });
    }
  }

  // confirmSOS() {
  //   let alert = this.utility.presentConfirmation('Are you sure you want to submit your request ?');
  //   alert.then(() => {
  //     this.sosAction();
  //   });
  // }

  // sosAction() {
  //   let url = 'SOS';
  //   let params = {
  //     "groupName": "S_Zenwen"
  //   }

  //   this.callAdminNumber(environment.SOS_EMERGENCY_NUMBER);

  //   this.httpProvider.http.zenwenCommonGETService({ url, params, user: true }).subscribe((res: any) => {
  //     if (res && res.list) {
  //       this.adminList = [];
  //       this.adminList = Array.isArray(res.list) ? res.list : [...this.adminList, res.list];
  //       if (this.message) {
  //         this.adminList.map((item) => {
  //           this.sms.send(item.contactNumber, this.message, this.smsOptions);
  //         })
  //       }
  //     }
  //   })

  //   // this.sms.send("8233082645", this.message, this.smsOptions);
  // }

  // callAdminNumber(phoneNumber) {
  //   this.callNumber.callNumber(phoneNumber, true)
  //     .then(res => console.log('Launched dialer!', res))
  //     .catch(err => console.log('Error launching dialer', err));
  // }
}
