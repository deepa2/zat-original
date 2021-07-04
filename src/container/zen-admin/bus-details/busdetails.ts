import { AdminAddPickupPointsComponent } from "./../../../components/zenadmin/admin-add-pickup-points/admin-add-pickup-points";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  PopoverController,
} from "ionic-angular";
import { HttpProvider } from "./../../../providers/http/http";
import { CommonUtilities } from "./../../../providers/commonUtilities/commonUtilities";
import { Subscription } from 'rxjs';


/**
 * Generated class for the BusdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-busdetails",
  templateUrl: "busdetails.html",
})
export class BusdetailsPage {
  private details: any;
  private details2: any;
  private segmentModel: string = "bus-details";

  private busDetails: any;
  private showNoPasstxt: boolean;
  private responseList: any;
  private userID: any;
  private busDetailsIncharge: any;
  private driverDetails: any;
  private busId: any;
  private pickupPointsList: any;
  private subscription: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpProvider: HttpProvider,
    public utility: CommonUtilities, private modalCtrl: ModalController, private popoverCtrl: PopoverController) {

    if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get("busID")))
      this.busId = this.navParams.get("busID");
  }

  ionViewDidEnter() {
    this.getBusDetails();
    // if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get('isModified'))) {
    //   if (this.navParams.get('isModified')) {
    //     this.getBusDetails();
    //   }
    // }
  }

  ngOnInit() {
  }

  // Bus Details Service
  getBusDetails() {
    this.utility.updateLoader(true);
    let getAdminBusDetailData = {
      url: "getAdminBusDetailData",
      data: {
        busId: this.busId,
      },
      isZenAdmin: true,
    };

     this.subscription = this.httpProvider.http.commonService(getAdminBusDetailData).subscribe((response: any) => {
      if (response) {
        this.showNoPasstxt = false;
        this.utility.updateLoader(false)
        if (!this.utility.isEmptyOrNullOrUndefined(response["data"])) {
          this.responseList = response["data"]
          this.busDetails = this.responseList.busDetailDO
          this.busDetailsIncharge = this.responseList.busInchargeDetailDO
          this.driverDetails = this.responseList.driverDetailDO
          this.pickupPointsList = this.responseList.pickupPointsDOs
        }
        if (response.status["statusCode"] == "16") {
          // no pass available
          this.showNoPasstxt = true;
          // this.routeList = []
        }
      }
    }, (error) => {
      this.utility.updateLoader(false);
    });
  }

  navToBusRoute() {
    this.navCtrl.push("SearchRoutePage");
  }

  navToAddBusPage(busData) {
    this.navCtrl.push("AddBusPage", { isNewBus: false, busData: busData, busInchargeDetails: this.busDetailsIncharge, driverDetails: this.driverDetails });
  }

  openpickupPtsModal(isnewPickup, pickupPointsList) {
    // let modal = this.modalCtrl.create(AdminAddPickupPointsComponent, {
    //   pickupPointList: !isnewPickup ? pickupPointsList : null,
    //   isUpdatePickupPts: true,
    //   busDetails: this.busDetails,
    //   isNewPickup: isnewPickup
    // }, {
    //   cssClass: "",
    // });
    // modal.onDidDismiss((data) => {
    //   if (data == "add") {
    //     this.getBusDetails();
    //   }
    // });
    // modal.present();
    this.navCtrl.push(AdminAddPickupPointsComponent, {
      pickupPointList: !isnewPickup ? pickupPointsList : null,
      isUpdatePickupPts: true,
      busDetails: this.busDetails,
      isNewPickup: isnewPickup
    })

  }

  // Call to user number
  call(contactNumber) {
    this.utility.callNumber(contactNumber);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
