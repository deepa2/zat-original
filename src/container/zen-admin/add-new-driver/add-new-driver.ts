import { Component } from "@angular/core";
import {
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  PopoverController,
} from "ionic-angular";
import { HttpProvider } from "./../../../providers/http/http";
import { CommonUtilities } from "./../../../providers/commonUtilities/commonUtilities";
import { AddDriverModelPage } from "../add-new-driver-model/add-new-driver-model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpAngularProvider } from './../../../providers/http-angular/http-angular';

/**
 * Generated class for the AddNewDriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-add-new-driver",
  templateUrl: "add-new-driver.html",
})
export class AddNewDriverPage {

  // Nav Params
  private actionType: any
  private routeId: any = ''

  private showNoPasstxt: boolean
  private responseList: any
  /**
   *  It can hold Bus Incharge list as well as drivers List
   */
  private listToDisplay: any
  private list: any
  private user: FormGroup
  private isEditNew: boolean
  private driverScreenOn: boolean = true

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpProvider: HttpProvider,
    public utility: CommonUtilities,
    private modalCtrl: ModalController,
    private popoverCtrl: PopoverController,
    private formBuilder: FormBuilder,
    private httpAngularProvider: HttpAngularProvider) {

    this.isEditNew = this.navParams.get("isEditNew");
    this.user = this.formBuilder.group({
      username: ["", Validators.required],
      number: ["", Validators.required],
    });

    if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get('title')))
      this.actionType = this.navParams.get('title')
    if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get('routeId')))
      this.routeId = this.navParams.get('routeId')

    if (!this.utility.isEmptyOrNullOrUndefined(this.actionType) && this.actionType.toLowerCase().indexOf("driver") >= 0) {
      this.driverScreenOn = true
    } else {
      this.driverScreenOn = false
    }

  }

  ngOnInit() {
    if (this.driverScreenOn)
      this.getDriverList()
    else
      this.getBusIncharge(this.routeId)
  }

  /**
   *
   * @param event popover for edit and delete
   */
  popOverMenu(event, driverDetails,index) {

    event.stopPropagation();

    let popover = this.popoverCtrl.create("PopoverPage", {
      type: "adminBus",
      driverDetails: driverDetails,
      showEdit: true,
      showDelete: true,
    });

    popover.present({ ev: event });

    popover.onDidDismiss((data) => {
      if (data == "edit") {
        this.getDriverList();
      } else if (data == "delete") {
        this.utility.presentConfirmation("Do you want to delete driver", "Are you sure?").then((res) => {
          this.deleteRecord(driverDetails.driverId,index);
        }, (err) => {
          console.log(err)
        })
      }
    });
  }

  // service for get Bus Incharge list
  getBusIncharge(busRouteId) {
    this.utility.updateLoader(true);
    let getAdminBusInchargeList = {
      url: "getAdminBusInchargeList",
      data: {
        // "busRouteId": busRouteId
      },
      isZenAdmin: true,
    };

    this.httpProvider.http.commonService(getAdminBusInchargeList).subscribe((response:any) => {
      if (response) {
        this.showNoPasstxt = false;
        if (!this.utility.isEmptyOrNullOrUndefined(response["data"])) {
          this.responseList = response["data"]
          this.listToDisplay = this.responseList.busInchargeDetailDOs
        }
        if (response.status["statusCode"] == "16") {
          this.showNoPasstxt = true;
        }
      }
      this.utility.updateLoader(false);
    }, (error) => {
      this.utility.updateLoader(false);
    });
  }

  // service for get drivers list
  getDriverList() {
    this.utility.updateLoader(true);
    let getAdminDriverDetailList = {
      url: "getAdminDriverDetailList",
      data: {},
      isZenAdmin: true,
    };

    this.httpProvider.http.commonService(getAdminDriverDetailList).subscribe((response:any) => {
      if (response) {
        this.showNoPasstxt = false;
        if (!this.utility.isEmptyOrNullOrUndefined(response["data"])) {
          this.responseList = response["data"]
          this.listToDisplay = this.responseList.driverDetailDOs
        }
        if (response.status["statusCode"] == "16") {
          this.showNoPasstxt = true;
        }
      }
      this.utility.updateLoader(false);
    }, (error) => {
      this.utility.updateLoader(false);
    });
  }

  // For Delete perticular record
  deleteRecord(driverId,index) {
    // this.responseList.splice(val.driverId,1)
    console.log("index",index)
    this.utility.updateLoader(true);
    let formData = new FormData();
    formData.append("driverId", driverId)
    formData.append("updationType", "delete")
    let home = {
      url: "getAdminAddUpdateDriverDetails",
      data: formData,
      isZenAdmin: true,
    };
   
    this.httpAngularProvider.multimediaService(home).subscribe((response:any) => {
      if (response) {
        if (!this.utility.isEmptyOrNullOrUndefined(response.status["statusCode"]) && response.status["statusCode"] == 1) {
          this.listToDisplay.splice(index, 1);
        }
      }
      this.utility.updateLoader(false);
    }, (error) => {
      this.utility.updateLoader(false);
    });
  }

  // // model function calling
  addNewDriverModel() {
    let reportModel = this.modalCtrl.create(AddDriverModelPage, { isAddNew: true }, { cssClass: "add-driver-model" });

    reportModel.onDidDismiss((data) => {
      if (data == "add") {
        this.getDriverList();
      }
    });
    reportModel.present();
  }

  editNewDriverModel() {
    let reportModel = this.modalCtrl.create(AddDriverModelPage, { isEdit: true }, { cssClass: "add-driver-model" });
    reportModel.present();
  }

  /**
   * Sending Selected/Updated Dirver or BusIncharge Details to previous page
   * @param item Selected Driver or Bus Incharge
   */
  selectedItem(item: any) {
    if (this.driverScreenOn)
      this.navCtrl.getPrevious().data.selectedDriver = item
    else
      this.navCtrl.getPrevious().data.selectedBusIncharge = item
    this.navCtrl.popTo('AddBusPage')
  }
}
