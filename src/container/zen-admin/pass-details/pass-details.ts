import { ModalController } from "ionic-angular";
import { HttpProvider } from "./../../../providers/http/http";
import { CommonUtilities } from "./../../../providers/commonUtilities/commonUtilities";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CancelBuspassModalComponent } from "../../../components/zenadmin/cancel-buspass-modal/cancel-buspass-modal";

/**
 * Generated class for the PassDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-pass-details",
  templateUrl: "pass-details.html",
})
export class PassDetailsPage {
  private busDetails: any;
  private responseList: any;
  private otherDetails: any;
  private passId: any;
  private cancelledPassData: any;
  private isPassCancelled: boolean = false;
  private cancelMsg: any;
  private noDataMsg: any;
  private showNoDataMsg: boolean = false;
  private isCancelAvailable: boolean = false;
  private cancelBusDetails: any;
  private passReqType: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private utility: CommonUtilities, private httpProvider: HttpProvider,
    private modalCtrl: ModalController) {

    this.passId = this.navParams.get("busId")
    if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get("passReqType"))) {
      this.passReqType = this.navParams.get("passReqType")
    }
  }

  ionViewDidLoad() {
    if (!this.utility.isEmptyOrNullOrUndefined(this.passId)) {
      this.getPassDetails()
    }
  }

  /**
 * Service call for pass details.
 * Retrieves all the bus pass related date for particular bus id.
 */
  getPassDetails() {
    this.utility.updateLoader(true);
    this.httpProvider.http.commonService({
      url: "getBusPassCompleteDetail",
      data: { busPassId: this.passId, transportType: this.passReqType == "shuttle" ? "shuttle" : "bus", },
      isZenAdmin: true
    }).subscribe((response: any) => {
      if (response) {
        this.utility.updateLoader(false)
        if (!this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1") {
          if (!this.utility.isEmptyOrNullOrUndefined(response["data"].busPassDetailDO)) {
            this.responseList = response["data"]
            this.busDetails = this.responseList.busPassDetailDO
            this.otherDetails = this.responseList.busPassDetailSubDO
            this.isCancelAvailable = this.busDetails.isCancelAvailable
          } else {
            this.responseList = response["data"];
            this.noDataMsg = response.status["statusMessage"];
            this.showNoDataMsg = true;
          }
        }
      }
    }, (error) => {
      this.utility.updateLoader(false);
    });
  }

  /**
  * Opens cancel-pass modal
  *
  */
  cancelPassReq() {
    let modal = this.modalCtrl.create(CancelBuspassModalComponent, {
      passID: this.passId,
      passType: this.busDetails.passType,
      passValidity: this.busDetails.busPassValidity,
      requestType: "cancelPass",
      transportType: this.passReqType,
      isNonZensarian: false,
    }, { cssClass: "cancel-pass-modal", }
    );

    modal.present();
    modal.onDidDismiss((res) => {
      this.utility.updateLoader(true);
      if (res) {
        if (res.key == "passCancelled") {
          this.utility.updateLoader(false)
          this.isPassCancelled = true
          this.cancelBusDetails = res.cancelledData
          this.cancelMsg = res.cancelledData.busPassStatusMessageDetails
        }
      } else {
        this.utility.updateLoader(false);
      }
    });
  }

  // Call to user number
  call(number) {
    this.utility.callNumber(number);
  }
}
