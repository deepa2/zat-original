import { NavParams } from 'ionic-angular/navigation/nav-params';
import { CommonUtilities } from './../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from './../../../providers/http/http';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component } from '@angular/core';
import { ModalController, PopoverController, NavController } from 'ionic-angular';
import { AddNewPickupPtModalComponent } from '../add-new-pickup-pt-modal/add-new-pickup-pt-modal';

/**
 * Generated class for the AdminAddPickupPointsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'admin-add-pickup-points',
  templateUrl: 'admin-add-pickup-points.html'
})
export class AdminAddPickupPointsComponent {

  private pickupPtList: any = [];
  private responseData: any;
  private infiniteScroll: any = '';
  private startList: number = 0;
  private endList: number = 50;
  private pickupLists: any;
  private isUpdatePickup: any;
  private busDetails: any;

  constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private viewCtrl: ViewController,
    private modalCtrl: ModalController, private navparams: NavParams, private popoverCtrl: PopoverController, public navCtrl: NavController) {

    if (!this.utility.isEmptyOrNullOrUndefined(this.navparams.get('isUpdatePickupPts')))
      this.isUpdatePickup = this.navparams.get('isUpdatePickupPts')
    if (this.isUpdatePickup) {
      if (!this.utility.isEmptyOrNullOrUndefined(this.navparams.get('pickupPointList'))) {
        this.pickupPtList = this.navparams.get('pickupPointList')
      }
      this.busDetails = this.navparams.get('busDetails')
    } else
      this.getAdminPickupPointList()
  }

  dismiss() {
    this.viewCtrl.dismiss()
  }

  reorderItems(indexes) {
    let element = this.pickupPtList[indexes.from]
    this.pickupPtList.splice(indexes.from, 1)
    this.pickupPtList.splice(indexes.to, 0, element)
  }

  gotoAddNewpickUpPt() {
    let modal = this.modalCtrl.create(AddNewPickupPtModalComponent, {
      busRouteID: this.busDetails.busRouteId
    }, {
        cssClass: 'addNew-pickupPt-modal',
      });

    modal.present();
    modal.onDidDismiss((res) => {
      if (res) {
        if (res.key == 'pickptAdded') {
          if (res.key == "pickptAdded") {
            if (!this.utility.isEmptyOrNullOrUndefined(res.newpickupData)) {
              let newpickupPoint = res.newpickupData.routePickupPointsDO
              this.pickupPtList.unshift(newpickupPoint)
            }
          }
        }
      }
    })
  }

  getAdminPickupPointList() {
    this.utility.updateLoader(true);
    let home = {
      url: 'getAdminPickupPointList',
      data: {},
      isZenAdmin: true,
    };

    this.httpProvider.http.commonService(home).subscribe((response: any) => {
      if (response) {
        this.utility.updateLoader(false);
        if (!this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1") {
          this.responseData = response["data"]
          this.pickupPtList = response["data"].pickupPointsDOs
        }

        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          this.infiniteScroll = "";
        }
      }
    }, (error) => {
      this.utility.updateLoader(false);
      this.utility.showAlert("Zenadmin", error.status);
    });
  }

  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll
    this.startList = this.endList;
    this.endList = this.startList + 50;
  }

  saveDetails() {
    // this.viewCtrl.dismiss()
    this.pickupPtList.filter(element => {
      let indexOfElement = this.pickupPtList.indexOf(element);
      element.seqNumber = indexOfElement + 1
    });

    this.utility.updateLoader(true);
    let home = {
      url: 'getAdminAddUpdatePickupPointsInRoute',
      data: {
        "busId": this.busDetails.busId,
        "busRouteId": this.busDetails.busRouteId,
        "routeName": this.busDetails.routeName,
        "updationType": "update",
        "pickupPointsSequenceList": this.pickupPtList,
      },
      isZenAdmin: true,
    };

    this.httpProvider.http.commonService(home).subscribe((response: any) => {
      if (response) {
        this.utility.updateLoader(false)
        if (!this.utility.isEmptyOrNullOrUndefined(response["data"])) {
          this.utility.presentAlert(response.status["statusMessage"]).then((res) => {
            // this.viewCtrl.dismiss('add')
            // this.navCtrl.getPrevious().data.isModified = true
            this.navCtrl.popTo('BusdetailsPage')
          })
        }
      }
    }, (error) => {
      this.utility.updateLoader(false);
      // this.utility.showAlert("Zenadmin", error.status);
    });
  }

  popOverMenu(event, pickupData, index) {

    event.stopPropagation();

    let popover = this.popoverCtrl.create("PopoverPage", {
      type: "adminpickuppt",
      showEdit: true,
      showDelete: true,
    });
    popover.present({
      ev: event,
    });

    popover.onDidDismiss((res) => {
      if (res == 'edit') {
        let modal = this.modalCtrl.create(AddNewPickupPtModalComponent, {
          pickupDetails: pickupData,
          actionType: "edit"
        }, {
            cssClass: 'addNew-pickupPt-modal',
          });

        modal.present();

        modal.onDidDismiss((res) => {
          if (res) {
            if (res.key == "pickptAdded") {
              if (!this.utility.isEmptyOrNullOrUndefined(res.newpickupData)) {
                this.pickupPtList[index] = res.newpickupData.routePickupPointsDO
              }
            }
          }
        })
      } else if (res == 'delete') {
        this.utility.presentConfirmation("Do you want to delete pickup point", "Are you sure?").then((res) => {
          this.deletePickupPt(pickupData, index)
        }, (err) => {
          console.log(err)
        })
      }
    })
  }

  // For deleting particular pickup point
  deletePickupPt(pickupData, index) {

    this.utility.updateLoader(true);
    let home = {
      url: "getAdminAddUpdatePickUpPoint",
      data: {
        "pickupPointId": pickupData.pickUpPointId,
        "updationType": "delete",
        "busRouteId": pickupData.busRouteId
      },
      isZenAdmin: true,
    };

    this.httpProvider.http.commonService(home).subscribe((response: any) => {
      if (response) {
        if (!this.utility.isEmptyOrNullOrUndefined(response.status["statusCode"]) && response.status["statusCode"] == 1) {
          this.pickupPtList.splice(index, 1);
        }
      }
      this.utility.updateLoader(false);
    }, (error) => {
      this.utility.updateLoader(false);
    });
  }
}
