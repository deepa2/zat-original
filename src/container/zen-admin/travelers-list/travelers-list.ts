import { CancelBuspassModalComponent } from "./../../../components/zenadmin/cancel-buspass-modal/cancel-buspass-modal";
import { HttpProvider } from "./../../../providers/http/http";
import { CommonUtilities } from "./../../../providers/commonUtilities/commonUtilities";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
} from "ionic-angular";

/**
 * Generated class for the TravelersListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-travelers-list",
  templateUrl: "travelers-list.html",
})
export class TravelersListPage {
  private bookingStatus: any = "All";
  private inchargeDetails: any;
  private showNoPassPage: boolean = false;

  private busDetails: any = [
    // {
    //   "currDate": "14 Feb, 2021", "currDay": "Sunday",
    //   "busPassDetailDOs": [{
    //     "monthYear": "Mar, 21", "busPassDetailDOs":
    //       [{
    //         "routeName": "Vijaya Nagar <-> Kharadi", "pickupPointName": "MANIK BAUG", "arrivalTime": "07:32:00", "busPassId": "66", "passType": "Daily", "busPassValidity": "12 Mar - 12 Mar, 2021", "isApproved": true, "isPending": false,
    //         "isRejected": false, "isCancelled": false
    //       }
    //       ]
    //   }
    //   ]
    // }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private utility: CommonUtilities,
    private httpProvider: HttpProvider
  ) { }

  ionViewDidLoad() {
    console.log("ionViewDidLoad TravelersListPage", this.busDetails);
    this.getBusInchargeHistoryDetails();
  }

  onSelectChange(data) {
    this.getBusInchargeHistoryDetails();
  }
  getBusInchargeHistoryDetails() {
    this.utility.updateLoader(true);
    let home = {
      url: "getBusInchargeHistoryDetails",
      data: {
        approvalStatus: this.bookingStatus,
      },
      isZenAdmin: true,
    };

    this.httpProvider.http.commonService(home).subscribe(
      (response:any) => {
        if (response) {
          this.utility.updateLoader(false);
          if (
            !this.utility.isEmptyOrNullOrUndefined(response["data"]) &&
            response.status["statusCode"] == "1"
          ) {
            this.busDetails = response["data"];
            console.log("busDetails", this.busDetails);
            this.inchargeDetails = response["data"].busInchargeTravellerDOs;
            console.log("inchargeDetails", this.inchargeDetails);
            this.showNoPassPage = false;
          }
          else {
            // no data available
            this.showNoPassPage = true;
            // this.passDetails = response['data'];
          }
        }
      },
      (error) => {
        this.utility.updateLoader(false);
      }
    );
  }
  call(number) {
    this.utility.callNumber(number);
  }
  gotoDetailsPage(data) {
    this.navCtrl.push("TravelerListDetailsPage", {
      busInchagreHistoryId: data.busInchagreHistoryId,
    });
  }
  raiseComplaintReq() {
    let modal = this.modalCtrl.create(
      CancelBuspassModalComponent,
      {
        passID: this.busDetails.busPassId,
        passType: this.busDetails.passType,
        passValidity: this.busDetails.busPassValidity,
        requestType: "raiseComplaint",
      },
      {
        cssClass: "cancel-pass-modal",
      }
    );

    modal.present();
    modal.onDidDismiss((res) => {
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
}
