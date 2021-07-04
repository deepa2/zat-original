import { Content, PopoverController } from "ionic-angular";
import { HttpProvider } from "./../../../providers/http/http";
import { CommonUtilities } from "./../../../providers/commonUtilities/commonUtilities";
import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, ModalController } from "ionic-angular";
import { ZenadminCalenderComponent } from "../../../components/zenadmin/zenadmin-calender/zenadmin-calender";
import { FaqPage } from "../../../container/faq/faq";

/**
 * Generated class for the ZenadminHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-zenadmin-home",
  templateUrl: "zenadmin-home.html",
})
export class ZenadminHomePage {
  @ViewChild(Content) content: Content;
  private showNoPassPage: boolean = false;
  private passDetails: any;
  private busDetails: any;
  private slideData: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private utility: CommonUtilities,
    private httpProvider: HttpProvider,
    private popoverCtrl: PopoverController
  ) { }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
    this.getHomePageData();
  }
  /**
   * Opens calendar modal component
   */
  openCalendarModal() {
    let modal = this.modalCtrl.create(
      ZenadminCalenderComponent,
      {
        dataParams: {
          year: this.passDetails.currDate,
        },
      },
      {
        cssClass: "zenadmin-calender-css",
      }
    );

    modal.present();
  }

  /**
   * Moves to the different pages based on the pageTitle passed.
   * @param pageTitle title to the next Page.
   * 
   */
  goToDetailPage(pageTitle) {
    if (pageTitle == "Search Route") {
      this.navCtrl.push("SearchRoutePage", { role: "Associate" });
    } else if (pageTitle == "Bus Pass") {
      this.navCtrl.push("BusPassPage", { role: "Associate" });
    } else if (pageTitle == "Bus Incharge") {
      this.navCtrl.push("TravelersListPage", { role: "Associate" });
    } else if (pageTitle == "Shuttle Service") {
      this.navCtrl.push("ShuttleServicePage", { role: "Associate" });
    } else if (pageTitle == "Admin") {
      this.navCtrl.push("AdminDashboardPage", { role: "Associate" });
    } else if (pageTitle == "Security Personnel") {
      this.navCtrl.push("SecurityPersonnelBuseslistPage", {
        role: "Associate",
      });
    }
  }

  /**
    * Service call for Home page Details
    */
  getHomePageData() {
    this.utility.updateLoader(true);
    this.httpProvider.http.commonService({ url: 'getZenAdminHomepage', data: {}, isZenAdmin: true }).subscribe(
      (response: any) => {
        if (response) {
          this.content.resize();
          this.utility.updateLoader(false);
          if (!this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1") {
            this.passDetails = response["data"];
            this.slideData = this.passDetails.slideData;
            this.content.resize();
            if (!this.utility.isEmptyOrNullOrUndefined(response["data"].busPassDetailDO)) {
              this.busDetails = response["data"].busPassDetailDO;
              this.showNoPassPage = false;
            } else {
              this.showNoPassPage = true;
            }
          }
        }
      },
      (error) => {
        this.utility.updateLoader(false);
      }
    );
  }

  /**
    * Moves to AddNewPassPage if user wants to create new pass 
    */
  moveToAddnewpass() {
    this.navCtrl.push("AddNewPassPage", { passReqType: "bus" });
  }

  // Call to user number
  call(number) {
    this.utility.callNumber(number);
  }
  // Open Popover For FAQ
  openPopOverMenu(event) {
    let popover = this.popoverCtrl.create("PopoverPage", {
      type: "zenAdminFaq"
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
