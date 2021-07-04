
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component } from '@angular/core';
import { CommonUtilities } from './../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from './../../../providers/http/http';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { AlertController, NavParams } from 'ionic-angular';
import * as moment from "moment";


/**
 * Generated class for the AddNewPickupPtModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-new-pickup-pt-modal',
  templateUrl: 'add-new-pickup-pt-modal.html'
})
export class AddNewPickupPtModalComponent {


  private pickupPtform: FormGroup;
  private submitted = false;
  private passOptions: any = ['Daily', 'Monthly', 'Weekly'];
  private actionType: any;
  private pickupPointData: any;
  private busRouteID:any;


  constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private viewCtrl: ViewController, private formBuilder: FormBuilder, private alertCtrl: AlertController,
    private navParams: NavParams) {

    this.pickupPtform = this.formBuilder.group({

      arrivalTime: [{ value: '', disabled: false }, Validators.required],
      pickupPt: [{ value: '', disabled: false }, Validators.required],
      cost: [{ value: '', disabled: false }, Validators.required],
      // routeSeqNo: [{ value: '', disabled: false }, Validators.required],
      passType: [{ value: '', disabled: false }, Validators.required]
    });
    if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get('actionType')))
      this.actionType = this.navParams.get('actionType')

    if (this.actionType == 'edit') {
      if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get('pickupDetails'))) {
        this.pickupPointData = this.navParams.get('pickupDetails')
        let newTime=moment( this.pickupPointData.arrivalTime, ["h:mm A"])
        console.log("otherTime", newTime);
        // let formattedTime = moment(time);
        // let updatedTime = formattedTime.format("hh:mm A")
        // console.log(updatedTime);
       
        this.pickupPtform.setValue({
          arrivalTime: newTime.format("HH:mm"),
          pickupPt: this.pickupPointData.stopName,
          cost: this.pickupPointData.cost,
          // routeSeqNo: this.pickupPointData.pickUpPointId,
          passType: this.pickupPointData.busPassType 
        })
      }
    }
    if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get('busRouteID')))
      this.busRouteID = this.navParams.get('busRouteID')
  }

  dismiss() {
    this.viewCtrl.dismiss()
  }
  onDateChange(date) {

  }
  onPassTypeChange(passType) {
    // if (this.pickupPtform.get('routeName').enabled) {
    if (!this.utility.isEmptyOrNullOrUndefined(this.pickupPtform.get('cost').value)) {
      this.pickupPtform.get('cost').reset()

    }
    // this.pickupPtform.get('routeName').reset()
    // this.pickupPtform.get('arrivalTime').reset()
    // this.routeList=null
    // this.pickupPointNames = []
    // }
  }
  verifyAddDetails() {

    if (this.pickupPtform.invalid) {
      this.submitted = true;
      return;
    }
    else {
      let msg: string;
      msg = this.actionType == "edit" ? "Do you want to update pickup point?" : "Do you want to add new pickup point?"
      this.utility.presentConfirmation(msg).then(
        (res) => {
          this.addNewPickupPt()
        },
        (err) => { }
      );
    }

  }
  addNewPickupPt() {

    this.utility.updateLoader(true)
    // pickupPointId check for add new pickup point
    let home = {
      url: 'getAdminAddUpdatePickUpPoint',
      data: {
        pickupPointName: this.pickupPtform.get('pickupPt').value,
        cost: this.pickupPtform.get('cost').value,
        busPassType: this.pickupPtform.get('passType').value,
        // routeSequence: this.pickupPtform.get('routeSeqNo').value,
        arrivalTime: this.pickupPtform.get('arrivalTime').value,
        updationType: this.actionType == 'edit' ? "update" : "add",
        pickupPointId: this.actionType == 'edit' ? this.pickupPointData.pickUpPointId : null,
        busRouteId:this.actionType == 'edit' ? this.pickupPointData.busRouteId : this.busRouteID,
      },
      isZenAdmin: true
    }
    console.log("params", home)

    this.httpProvider.http.commonService(home).subscribe((response:any) => {
      if (response) {
        this.submitted = false;
        this.utility.updateLoader(false);
        if (!this.utility.isEmptyOrNullOrUndefined(response['data'])) {
          if (response.status["statusCode"] == '1') {
            this.utility.presentAlert(response.status["statusMessage"]).then((res) => {
              this.viewCtrl.dismiss({ key: "pickptAdded", newpickupData: response['data'] })
            })
          }
        }
      }
    }, error => {
      this.utility.updateLoader(false);
    });
  }
}
