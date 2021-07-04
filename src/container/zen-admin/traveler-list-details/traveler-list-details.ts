import { HttpProvider } from './../../../providers/http/http';
import { CommonUtilities } from './../../../providers/commonUtilities/commonUtilities';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CancelBuspassModalComponent } from "./../../../components/zenadmin/cancel-buspass-modal/cancel-buspass-modal";


/**
 * Generated class for the TravelerListDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-traveler-list-details',
  templateUrl: 'traveler-list-details.html',
})
export class TravelerListDetailsPage
{
  private inchargeDetails: any;
  private busDetails: any = [];
  private coTravellerList: any = []
  private bookingStatus: any = "All";


  constructor(public navCtrl: NavController, public navParams: NavParams, private utility: CommonUtilities, private httpProvider: HttpProvider, private modalCtrl: ModalController)
  {
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad TravelerListDetailsPage');
    this.getBusInchargeCompleteDetails()
  }
  getBusInchargeCompleteDetails()
  {
    this.utility.updateLoader(true)
    let home = {
      url: 'getBusInchargeCompleteDetails',
      data: {
        // busId: 1
        // coTravellerFilter: "Rejected"
      },
      isZenAdmin: true
    }

    this.httpProvider.http.commonService(home).subscribe((response:any) =>
    {
      if (response)
      {
        this.utility.updateLoader(false);
        if (!this.utility.isEmptyOrNullOrUndefined(response['data']) && response.status["statusCode"] == '1')
        {
          this.busDetails = response['data'];
          console.log("busDetails", this.busDetails);
          this.inchargeDetails = response['data'].busInchargeDetailDO
          console.log("inchargeDetails", this.inchargeDetails);
          this.coTravellerList = this.inchargeDetails.coTravellerList;
          // this.showNoPassPage = false;
        }
        // if (response.status["statusCode"] == '16' && !this.utility.isEmptyOrNullOrUndefined(response['data']))
        // {
        //   // no pass available
        //   // this.showNoPassPage = true;
        //   // this.passDetails = response['data'];
        // }

      }

    }, error =>
    {
      this.utility.updateLoader(false);
    });
  }
  call(number)
  {
    this.utility.callNumber(number);
  }

  raiseComplaintReq()
  {
    let modal = this.modalCtrl.create(
      CancelBuspassModalComponent,
      {
        passID: this.busDetails.busPassId,
        passType: this.busDetails.passType,
        passValidity: this.busDetails.busPassValidity,
        requestType: "raiseComplaint",
        busInchargeDetails: this.busDetails,
        complainerType: "Bus Incharge",
      },
      {
        cssClass: "cancel-pass-modal",
      }
    );

    modal.present();
    modal.onDidDismiss((res) =>
    {
      // console.log("response", res);
      // this.utility.updateLoader(true)
      // if (res) {
      //   if (res.key == 'passCancelled') {
      //     this.utility.updateLoader(false)
      //     // this.isPassCancelled = true;
      //     console.log("cancelled data", res.cancelledData);
      //     // this.busDetails = ''
      //     // this.cancelBusDetails = res.cancelledData
      //     this.cancelMsg = res.cancelledData.busPassStatusMessageDetails
      //     console.log("cancelMsg", this.cancelMsg);
      //     console.log("cancelBusDetails", this.cancelBusDetails.userName);
      //   }
      // }
      // else {
      //   this.utility.updateLoader(false)
      // }
    });
  }
  onSelectChange(data)
  {
    if (!this.utility.isEmptyOrNullOrUndefined(data))
    {
      this.getBusInchargeCompleteDetails()
    }

  }
}
