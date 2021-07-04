import { AlertController, ModalController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { HttpProvider } from './../../../providers/http/http';
import { CommonUtilities } from './../../../providers/commonUtilities/commonUtilities';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnChanges } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddNewRouteModalComponent } from '../../../components/zenadmin/add-new-route-modal/add-new-route-modal';


/**
 * Generated class for the AddBusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-bus',
  templateUrl: 'add-bus.html',
})
export class AddBusPage {

  private addBusForm: FormGroup;
  private routeList: any;
  private submitted = false;
  private isNewBus: boolean = false;
  private busDetails: any;
  private busInchargeDetails: any;
  private driverDetails: any;
  private busRouteIndex: any;
  // private pattern="(([A-Za-z]){2,3}(|-)(?:[0-9]){1,2}(|-)(?:[A-Za-z]){2}(|-)([0-9]){1,4})|(([A-Za-z]){2,3}(|-)([0-9]){1,4})"


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private utility: CommonUtilities, private httpProvider: HttpProvider, private viewCtrl: ViewController, private alertCtrl: AlertController, private modalCtrl: ModalController) {

    this.addBusForm = this.formBuilder.group({
      routeName: [{ value: '', disabled: false }, Validators.required],
      totalSeats: [{ value: '', disabled: false }, [Validators.required, Validators.min(1), Validators.max(50)]],
      busNumber: [{ value: '', disabled: false }, [Validators.required]],
    });

    this.isNewBus = this.navParams.get('isNewBus')
    if (!this.isNewBus) {
      this.busDetails = this.navParams.get('busData');
      if (!(this.utility.isEmptyOrNullOrUndefined(this.navParams.get('busInchargeDetails'))))
        this.busInchargeDetails = this.navParams.get('busInchargeDetails');
      if (!(this.utility.isEmptyOrNullOrUndefined(this.navParams.get('driverDetails'))))
        this.driverDetails = this.navParams.get('driverDetails');

      if (!this.utility.isEmptyOrNullOrUndefined(this.busDetails)) {
        this.addBusForm.setValue({
          routeName: this.busDetails.routeName,
          totalSeats: this.busDetails.totalSeats,
          busNumber: this.busDetails.busNumber
        })
        // this.busRouteIndex = this.busDetails.busRouteId;
      }

    }


    this.getAddBusDetailData()
  }

  ionViewWillEnter() {
    if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get("selectedDriver")))
      this.driverDetails = this.navParams.get("selectedDriver")
    if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get("selectedBusIncharge")))
      this.busInchargeDetails = this.navParams.get("selectedBusIncharge")


  }

  gotoAddNewDriver(actionType) {
    this.navCtrl.push('AddNewDriverPage',
      {
        title: actionType,
        routeId: this.utility.isEmptyOrNullOrUndefined(this.busRouteIndex) ? '' : this.busRouteIndex
      }
    )
  }

  getAddBusDetailData() {

    this.utility.updateLoader(true)

    let getAdminAddBusDetailData = {
      url: 'getAdminAddBusDetailData',
      data: {},
      isZenAdmin: true
    }

    this.httpProvider.http.commonService(getAdminAddBusDetailData).subscribe((response: any) => {
      if (response) {
        this.utility.updateLoader(false);
        if (!this.utility.isEmptyOrNullOrUndefined(response['data'])) {
          this.routeList = response['data'].busRouteList
          if (!this.isNewBus) {
            this.getRouteId(this.busDetails.routeName)
          }
        }
      }
      if (response.status["statusCode"] == '16') {
        // this.showNoPassPage = true;
        this.utility.presentAlert(response.status["statusMessage"]);
      }
    }, (error) => {
      this.utility.updateLoader(false);
    });
  }

  verifySubmitDetails() {
    if (this.addBusForm.invalid) {
      this.submitted = true
      // this.utility.presentAlert("Kindly select all the fields")
      return;
    } else {
      this.utility.presentConfirmation(this.isNewBus ? "Do you want to add new bus?" : "Do you want to update bus details?").then((res) => {
        this.addUpdateBus()
      }, (err) => { });
    }
  }

  addUpdateBus() {
    this.utility.updateLoader(true);
    let getAdminAddUpdateBusRouteMapping;
    if (!this.isNewBus) {
      getAdminAddUpdateBusRouteMapping = {
        url: 'getAdminAddUpdateBusDetailsData',
        data: {
          "busId": this.busDetails.busId,
          "busRouteId": this.busRouteIndex,
          "driverId": this.driverDetails.driverId,
          "busInchargeId": this.busInchargeDetails.busInchargeId,
          "busInchargeContactNumber": this.busInchargeDetails.busInchargeContactNumber,
          "updationType": 'update',
          "busNumber": this.addBusForm.get("busNumber").value,
          "totalSeats": this.addBusForm.get("totalSeats").value,

        },
        isZenAdmin: true
      }
    } else {
      getAdminAddUpdateBusRouteMapping = {
        url: 'getAdminAddUpdateBusDetailsData',
        data: {
          "busInchargeId": this.busInchargeDetails ? this.busInchargeDetails.busInchargeId : '',
          "updationType": 'add',
          "busNumber": this.addBusForm.get("busNumber").value,
          "totalSeats": this.addBusForm.get("totalSeats").value,
          "busRouteId": this.busRouteIndex,
          "driverId": this.driverDetails ? this.driverDetails.driverId : '',
        },
        isZenAdmin: true
      }
    }

    this.httpProvider.http.commonService(getAdminAddUpdateBusRouteMapping).subscribe((response: any) => {
      if (response) {
        this.submitted = false;
        this.utility.updateLoader(false);
        if (!this.utility.isEmptyOrNullOrUndefined(response['data']) && [1, 23, 24].includes(response.status["statusCode"])) {
          this.utility.presentAlert(response.status["statusMessage"]).then((res) => {
            this.navCtrl.pop()
          })
        }
        //  else {
        //   this.utility.presentAlert(response.status["statusMessage"])
        // }
      }
    }, error => {
      this.utility.updateLoader(false);
    });
  }

  onRouteChange(routeName) {
    this.getRouteId(routeName)
  }

  getRouteId(routeName) {
    this.routeList.map((val) => {
      if (val.routeName == routeName) {
        this.busRouteIndex = val.busRouteId;
      }
    })
  }
  gotoAddNewRouteModal(fieldTitle) {
    console.log("fieldTitle", fieldTitle)
    let modal = this.modalCtrl.create(AddNewRouteModalComponent, {
      'data': {
        routeList: this.routeList,
        // redirectGoals: true,
        // year: this.kraYear
        // performanceData: this.GoalsForm.get('performanceMeasure').value,
        // pageTitle: fieldTitle
      }
    }, { cssClass: '' })
    modal.onDidDismiss(data => {
      // if (data === "SUBMITTED_DATA_SUCCESSFULLY") {
      //   this.navCtrl.pop()
      //   this.navCtrl.getPrevious().data.submitStatus = "true"
      //   // this.getAssociateData();
      // }

      console.log("data", data)
      if (data != null || data != undefined) {
        let routeData = data['routeDetail'];
        console.log("routeData", data['routeDetail'])
        if (data['routeDetail']) {
          this.addBusForm.get('routeName').setValue(routeData.routeName);
          this.busRouteIndex = routeData.busRouteId

        }
        else {
          this.addBusForm.get('routeName').setValue(data);
          this.getRouteIdForNewRoute(data)
        }

        
        // this.routeName.get('performanceMeasure').markAsDirty()
        // this.cdr.detectChanges()
      }



    });
    modal.present()
  }

  getRouteIdForNewRoute(routeName) {

    this.httpProvider.http.commonService({ url: "getAdminAddUpdateRoute", isZenAdmin: true, data: { "routeName": routeName ,"updationType": "add"} })
      .subscribe((response: any) => {
        if (!this.utility.isEmptyOrNullOrUndefined(response) && !this.utility.isEmptyOrNullOrUndefined(response['data']) && response.status["statusCode"] == '1') {
          // this.busRouteIndex = routeData.busRouteId
        console.log("response",response)
        let responseData=response['data'].busRouteDetailDO;
        this.busRouteIndex=responseData.busRouteId
        }
        
      }, (err) => {
        this.utility.updateLoader(false)
      })
  }
}
