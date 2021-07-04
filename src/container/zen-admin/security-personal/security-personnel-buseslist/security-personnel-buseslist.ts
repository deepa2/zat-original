import { HttpProvider } from './../../../../providers/http/http';
import { CommonUtilities } from './../../../../providers/commonUtilities/commonUtilities';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import * as moment from 'moment';

/**
 * Generated class for the SecurityPersonnelBuseslistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-security-personnel-buseslist',
  templateUrl: 'security-personnel-buseslist.html',
})
export class SecurityPersonnelBuseslistPage {
  public busList = [];
  private responseList: any = [];
  public inTimeDate: any;
  public responseData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private utility: CommonUtilities,
    private httpProvider: HttpProvider,
    private popoverCtrl: PopoverController
  ) { }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
    this.getSPBusDetails()
  }

  gotoBusDetails(busId) {
    this.navCtrl.push('SecurityPersonnelBusdetailsPage', {
      busId: busId,
    })
  }
  getSPBusDetails() {
    this.utility.updateLoader(true);
    this.httpProvider.http.commonService({
      url: "getAdminBusInOutDetailList",
      data: {},
      isZenAdmin: true,
    }).subscribe(
      (response: any) => {
        this.utility.updateLoader(false);
        if (response) {
          if (!this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1") {
            this.responseList = response["data"];
            this.busList = this.responseList.busDetailDOs;
          }
        }
      },
      (error) => {
        this.utility.updateLoader(false);
      }
    );
  }
  onTimeChange(time, busId, typeOfTime, otherTime) {
    let newTime = otherTime.toLowerCase()
    let formattedTime = moment(time);
    let updatedTime = formattedTime.format("hh:mm A")
    if (newTime.indexOf('am' || 'pm') == -1) {
      otherTime = moment(otherTime, 'HHmmss').format("hh:mm A")
    }

    this.updateInOutTime(updatedTime, busId, typeOfTime, otherTime)
  }
  updateInOutTime(updatedTime, busId, typeOfTime, otherTime) {
    this.utility.updateLoader(true);
    this.httpProvider.http.commonService({
      url: "addUpdateBusInOutTime",
      data: {
        "busId": busId,
        "inTime": typeOfTime == 'inTime' ? updatedTime : otherTime,
        "outTime": typeOfTime == 'outTime' ? updatedTime : otherTime,
      },
      isZenAdmin: true,
    }).subscribe(
      (response: any) => {
        this.utility.updateLoader(false);
        if (response) {
          if (!this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1") {
            this.responseData = response["data"];
          }
        }
      },
      (error) => {
        this.utility.updateLoader(false);
      }
    );
  }
  presentOptions(myEvent) {
    let popover = this.popoverCtrl.create('PopoverPage', {
      'type': 'obLanding'
    });
    popover.present({ ev: myEvent });

  }
}
