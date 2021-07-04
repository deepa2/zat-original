import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { HttpProvider } from "./../../../providers/http/http";
import { CommonUtilities } from "./../../../providers/commonUtilities/commonUtilities";
import { NavParams, ModalController } from "ionic-angular";
import { ViewController } from "ionic-angular/navigation/view-controller";
import { Component } from "@angular/core";
import { BusRulesModalComponent } from "../../../components/zenadmin/bus-rules-modal/bus-rules-modal";

/**
 * Generated class for the CancelBuspassModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "cancel-buspass-modal",
  templateUrl: "cancel-buspass-modal.html",
})
export class CancelBuspassModalComponent {

  text: string;
  private busPassID: any;
  private passtype: any;
  private passValidity: any;
  private transportType: any;
  private isNonZensarian: any = false;
  private checkBoxValue: boolean = false;
  private responseList: any;
  private requestType: string;
  private complaintForm: FormGroup;
  private busInchargeDetails: any;
  private employeeIDs: any;
  private cotravellersInfo: any;
  private reasonList: any;
  private complainerType: any;
  private submitted: boolean = false;

  constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private viewCtrl: ViewController, private navparams: NavParams, private formBuilder: FormBuilder, private modalCtrl: ModalController) {

    this.complaintForm = this.formBuilder.group({
      employid: [{ value: "", disabled: false }, [Validators.required, Validators.pattern("^[0-9]*$")]],
      routeName: [{ value: "", disabled: true }, Validators.required],
      busNo: [{ value: "", disabled: true, }, Validators.required],
      reason: [{ value: '', disabled: false }, Validators.required]

    });

    if (!this.utility.isEmptyOrNullOrUndefined(this.navparams.get('requestType')))
      this.requestType = this.navparams.get('requestType')

    if (!this.utility.isEmptyOrNullOrUndefined(this.navparams.get('passID')))
      this.busPassID = this.navparams.get('passID')

    if (!this.utility.isEmptyOrNullOrUndefined(this.navparams.get('passType')))
      this.passtype = this.navparams.get('passType')

    if (!this.utility.isEmptyOrNullOrUndefined(this.navparams.get('passValidity')))
      this.passValidity = this.navparams.get('passValidity')

    if (!this.utility.isEmptyOrNullOrUndefined(this.navparams.get('busInchargeDetails')))
      this.busInchargeDetails = this.navparams.get('busInchargeDetails')

    if (!this.utility.isEmptyOrNullOrUndefined(this.navparams.get('complainerType')))
      this.complainerType = this.navparams.get('complainerType')

    if (this.requestType == 'raiseComplaint' && this.complainerType == 'Bus Incharge') {
      this.getComplaintReasonList()
      this.cotravellersInfo = this.busInchargeDetails.busInchargeDetailDO.coTravellerList
      let routeName = this.busInchargeDetails.busInchargeDetailDO.busRouteName
      let busNumber = this.busInchargeDetails.busInchargeDetailDO.busNumber
      this.complaintForm.get('routeName').setValue(routeName);
      this.complaintForm.get('busNo').setValue(busNumber);
    }

    if (this.requestType == 'raiseComplaint' && this.complainerType == 'Security Personnel') {
      this.getComplaintReasonList()
      this.cotravellersInfo = this.busInchargeDetails.coTravellersDetail
      let routeName = this.busInchargeDetails.busDetailDO.routeName
      let busNumber = this.busInchargeDetails.busDetailDO.busNumber
      this.complaintForm.get('routeName').setValue(routeName);
      this.complaintForm.get('busNo').setValue(busNumber);
    }

    // New code added
    if (!this.utility.isEmptyOrNullOrUndefined(this.navparams.get("transportType")))
      this.transportType = this.navparams.get("transportType")


    if (!this.utility.isEmptyOrNullOrUndefined(this.navparams.get("isNonZensarian")))
      this.isNonZensarian = this.navparams.get("isNonZensarian")
  }

  // Close the modal
  dismiss() {
    this.viewCtrl.dismiss();
  }
  /**
   * Checks whether form is invalid for cancel pass request type else  shows alert message.
   * For raise complaint request type-shows confirm alert box before calling api for raise complaint.
   */
  confirmCancelAlert() {
    let msg;

    if (this.complaintForm.invalid && this.requestType == "raiseComplaint") {
      this.utility.presentAlert("Kindly fill all the details");
      this.submitted = true;
      return;
    }

    if (this.requestType == "cancelPass")
      msg = "Do you want to cancel pass?";
    else if (this.requestType == "raiseComplaint")
      msg = "Do you want to raise complaint?";

    this.utility.presentConfirmation(msg).then((res) => {
      if (this.requestType == "cancelPass")
        this.cancelPassApi();
      else if (this.requestType == "raiseComplaint")
        this.submitComplain();
    }, (err) => { });

  }

  /**
   * Service call for cancel pass 
   */
  cancelPassApi() {
    this.utility.updateLoader(true);
    this.httpProvider.http.commonService({ url: "cancelBusPass", isZenAdmin: true, data: { busPassId: parseInt(this.busPassID), transportType: this.transportType, isNonZensarian: this.isNonZensarian }, }).subscribe((response: any) => {
      this.utility.updateLoader(false);
      if (!this.utility.isEmptyOrNullOrUndefined(response) && !this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1") {
        this.responseList = response["data"];
        let successMsg = this.responseList.busPassStatusMessageDetails;
        this.utility.presentAlert(successMsg.displayText).then(() => {
          this.viewCtrl.dismiss({
            key: "passCancelled",
            cancelledData: this.responseList,
          });
        });
      } else {
        this.utility.presentAlert(response.status["statusMessage"], "Cancel Pass");
      }
    }, (err) => {
      this.utility.updateLoader(false);
    });
  }

  // Opens bus rules modal
  openRulesModal() {
    this.modalCtrl.create(BusRulesModalComponent, { dataParams: {} }, { cssClass: "" }).present();
  }

  /**
  * Service call for getting list of complaint reason list---For raise complaint request type
  */
  getComplaintReasonList() {

    this.utility.updateLoader(true)
    this.httpProvider.http.commonService({ url: "getComplaintReasonList", isZenAdmin: true, data: {} }).subscribe((response: any) => {
      this.utility.updateLoader(false)
      if (!this.utility.isEmptyOrNullOrUndefined(response) && !this.utility.isEmptyOrNullOrUndefined(response['data']) && response.status["statusCode"] == '1') {
        this.reasonList = response['data']
      }
    }, (err) => {
      this.utility.updateLoader(false)
    })
  }

  /**
 * Service call for submit complain
 */
  submitComplain() {

    this.utility.updateLoader(true)
    this.httpProvider.http.commonService({
      url: "raiseComplaint",
      isZenAdmin: true,
      data: {
        "userId": parseInt(this.complaintForm.get("employid").value),
        "routeName": this.complaintForm.get("routeName").value,
        "busNumber": this.complaintForm.get("busNo").value,
        "complaintReason": this.complaintForm.get("reason").value,
        "complainerType": this.complainerType,
        "busTravelDate": this.busInchargeDetails.reqDate
      }
    }).subscribe((response: any) => {
      this.utility.updateLoader(false)
      if (!this.utility.isEmptyOrNullOrUndefined(response) && !this.utility.isEmptyOrNullOrUndefined(response['data']) && response.status["statusCode"] == '1') {
        this.submitted = false
        let responseList = response['data']
        this.utility.presentAlert("Request processed successfully").then((res) => {
          this.viewCtrl.dismiss()
        })
      }
    }, (err) => {
      this.utility.updateLoader(false)
    })

  }
}
