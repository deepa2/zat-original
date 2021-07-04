import { HttpProvider } from './../../../providers/http/http';
import { CommonUtilities } from './../../../providers/commonUtilities/commonUtilities';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { Subscription } from 'rxjs';

/**
 * Generated class for the ZenadminRouteDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zenadmin-route-details',
  templateUrl: 'zenadmin-route-details.html',
})
export class ZenadminRouteDetailsPage {

  private responseList: any = [];
  private busRouteId: any;
  private busDetails: any;
  private pickupPointsList: any = [];
  private isShuttle: boolean;
  private subscription: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private utility: CommonUtilities, private httpProvider: HttpProvider,private popoverCtrl:PopoverController) {

    this.busRouteId = this.navParams.get('busRouteId');
    this.busDetails = this.navParams.get('busDetailsData');
    this.isShuttle = this.busDetails ? this.busDetails.isShuttleRoute : false;
  }

  ionViewDidLoad() {
    if (!this.utility.isEmptyOrNullOrUndefined(this.busRouteId)) {
      this.getRouteDetails()
    }
  }

  /**
  * Service call for route details-Returns list of pickup points for particular route
  */
  getRouteDetails() {
    this.utility.updateLoader(true)
    this.subscription = this.httpProvider.http.commonService({ url: "getBusRouteDetails", isZenAdmin: true, data: { "busRouteId": this.busRouteId } })
      .subscribe((res) => {
        this.utility.updateLoader(false)
        if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res['data'])) {
          this.responseList = res['data']
          this.pickupPointsList = this.responseList.pickupPointsDOs
        }
      }, (err) => {
        this.utility.updateLoader(false)
      })
  }
  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
   // Open Popover 
   openPopOverMenu(event,item) {
    let popover = this.popoverCtrl.create("PopoverPage", {
      type: "passCharges",
      data:{
        monthly:item.monthlyCost,
        daily:item.dailyCost,
        weekly:item.weeklyCost
      }
    });

    popover.present({
      ev: event,
    });

    popover.onDidDismiss((res) => {
      if (res == 'faq') {
        this.navCtrl.push("FaqPage", {
          "pageTitle": "FAQs"
        });

      }

    })
  }
}
