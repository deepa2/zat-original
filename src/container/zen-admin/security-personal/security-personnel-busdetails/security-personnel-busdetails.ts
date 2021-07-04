import { CancelBuspassModalComponent } from './../../../../components/zenadmin/cancel-buspass-modal/cancel-buspass-modal';
import { CommonUtilities } from './../../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from './../../../../providers/http/http';
import { Component } from '@angular/core';
import { IonicPage, NavParams, ModalController } from 'ionic-angular';
import * as moment from 'moment';


/**
 * Generated class for the SecurityPersonnelBusdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-security-personnel-busdetails',
  templateUrl: 'security-personnel-busdetails.html',
})
export class SecurityPersonnelBusdetailsPage
{

  public segmentModel: string = 'bus-details';
  public selectOptions: any;
  private responseList: any = [];
  public bookingStatus: any = "All";
  public driverDetails: any;
  public busInchargeDetails: any;
  public busDetails: any;
  public pickupPointsList: any = [];
  public coTravellerList: any = [];
  private busID: any;
  public responseData: any;

  constructor(public navParams: NavParams, private utility: CommonUtilities, private httpProvider: HttpProvider, private modalCtrl: ModalController)
  {
    this.selectOptions = {
      title: 'Filter',
    };
    if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get('busId')))
      this.busID = this.navParams.get('busId')
  }

  ionViewDidLoad()
  {
    this.getSecurityPersonnelBusDetail();
  }

  call(number)
  {
    this.utility.callNumber(number);
  }

  raiseComplaintReq()
  {
    let modal = this.modalCtrl.create(CancelBuspassModalComponent, {
      requestType: "raiseComplaint",
      busInchargeDetails: this.responseList,
      complainerType: "Security Personnel",
    }, {
      cssClass: 'cancel-pass-modal',
    });

    modal.present();
    modal.onDidDismiss((res) => { })
  }

  getSecurityPersonnelBusDetail()
  {
    this.utility.updateLoader(true);
    this.httpProvider.http.commonService({
      url: "getSecurityPersonnelBusDetail",
      data: {
        busId: this.busID,
      },
      isZenAdmin: true,
    }).subscribe((response: any) =>
    {
      this.utility.updateLoader(false);
      if (response)
      {
        if (!this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1")
        {
          this.responseList = response["data"];
          this.busDetails = this.responseList.busDetailDO
          this.busInchargeDetails = this.responseList.busInchargeDetailDO
          this.pickupPointsList = this.responseList.pickupPointsDOs
          this.coTravellerList = this.responseList.coTravellersDetail
          this.driverDetails = this.responseList.driverDetailDO
        }
      }
    }, (error) =>
    {
      this.utility.updateLoader(false);
    });
  }

  onTimeChange(time, busId, typeOfTime, otherTime)
  {
    let newTime = otherTime.toLowerCase()
    let formattedTime = moment(time);
    let updatedTime = formattedTime.format("hh:mm A")
    if (newTime.indexOf('am' || 'pm') == -1)
    {
      otherTime = moment(otherTime, 'HHmmss').format("hh:mm A")
    }
    this.updateInOutTime(updatedTime, busId, typeOfTime, otherTime)
  }

  updateInOutTime(updatedTime, busId, typeOfTime, otherTime)
  {

    this.utility.updateLoader(true);
    this.httpProvider.http.commonService({
      url: "addUpdateBusInOutTime",
      data: {
        busId: busId,
        inTime: typeOfTime == 'inTime' ? updatedTime : otherTime,
        outTime: typeOfTime == 'outTime' ? updatedTime : otherTime,
      },
      isZenAdmin: true,
    }).subscribe((response: any) =>
    {
      this.utility.updateLoader(false);
      if (response)
      {
        if (!this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1")
        {
          this.responseData = response["data"]
        }
      }
    }, (error) =>
    {
      this.utility.updateLoader(false);
    });
  }
}
