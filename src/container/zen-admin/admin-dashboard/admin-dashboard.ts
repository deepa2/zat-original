import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { NotificationPage } from "../notification/notification";
import { ReportPage } from "../reports/reports";
import { HttpProvider } from "./../../../providers/http/http";
import { CommonUtilities } from "./../../../providers/commonUtilities/commonUtilities";

/**
 * Generated class for the AdminDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-admin-dashboard",
  templateUrl: "admin-dashboard.html",
})
export class AdminDashboardPage {

  private graphData: any;
  private responseData: any;
  private transportModel: string = 'bus/shuttle';
  private selectOptions: any;
  private occupancyRateTotal: any;
  private occupancyRateBus: any;
  private occupancyRateShuttle: any;
  private occupancyRate: any

  // Menu options for admin
  private adminMenus: any = [
    {
      logo: "assets/zenAdmin/bus-img.svg",
      label: "Buses",
      pageName: "Buses",
    },
    {
      logo: "assets/zenAdmin/shuttles-imge.svg",
      label: "Shuttles",
      pageName: "Shuttles",
    },
    {
      logo: "assets/zenAdmin/non-zensarien-img.svg",
      label: "Non-Zensarian",
      pageName: "Non-Zensarien",
    },
    {
      logo: "assets/zenAdmin/notifications-announcment-img.svg",
      label: "Notification / Announcements",
      pageName: "Notification",
    },
    {
      logo: "assets/zenAdmin/reports-img.svg",
      label: "Reports",
      pageName: "Reports",
    },
    {
      logo: "",
      label: "",
      pageName: "",
    },
  ];

  // graph dource data
  dataSource: any = {
    chart: {
      palettecolors: "FCC9A9,20D939,279CFB",
      plottooltext: "$label: <b>$dataValue</b>",
      divLineColor: "#FFFFFF",
      bgColor: "#FFFFFF",
      showBorder: "0",
      borderColor: "#FFFFFF",
      borderThickness: "0",
      showAlternateHGridColor: "1",
      interactiveLegend: "0",
      theme: "fusion"
    },
    categories: [],
    dataset: []
  }

  constructor(public navCtrl: NavController, private utility: CommonUtilities, private httpProvider: HttpProvider) {
    this.selectOptions = {
      title: 'Select',
    };
  }

  ionViewDidLoad() {
    this.getDashboardData()
  }

  ngOnInit() {
  }

  // Redirect to respective pages 
  goToPage(title) {
    switch (title) {
      case "Non-Zensarien":
        this.redirectToPage("NonZensarianListPage");
        break;
      case "Buses":
        this.redirectToPage("BusSearchPage");
        break;
      case "Shuttles":
        this.redirectToPage("ShuttlesListPage");
        break;
      case "Notification":
        this.redirectToPage(NotificationPage);
        break;
      case "Reports":
        this.redirectToPage(ReportPage);
        break;
      case "Security":
        this.redirectToPage("SecurityPersonnelBuseslistPage");
        break;
      default:
        break;
    }
  }

  /**
   * Method to push to particular page.
   * @param pageName name of page to be redirected
   */
  redirectToPage(pageName) {
    this.navCtrl.push(pageName, { role: "Associate" });
  }

  /**
   * Service call to get admin dashboard data
   */
  getDashboardData() {
    this.utility.updateLoader(true);
    let home = {
      url: "getAdminBusGraphData",
      data: {},
      isZenAdmin: true,
    };

    this.httpProvider.http.commonService(home).subscribe((response: any) => {
      if (response) {
        this.utility.updateLoader(false);
        if (!this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1") {
          this.responseData = response["data"];
          this.graphData = response["data"].graphData
          this.dataSource.categories = this.graphData.categories;
          this.dataSource.dataset = this.graphData.dataset;
          this.occupancyRateTotal = this.responseData.occupancyRate
          this.occupancyRateBus = this.responseData.occupancyRateBus
          this.occupancyRateShuttle = this.responseData.occupancyRateShuttle
          this.onOccupancyChange()

        }
      }
    }, (error) => {
      this.utility.updateLoader(false);
    });
  }
  // called when user changes occupancy rate
  onOccupancyChange() {
    if (this.transportModel == 'bus')
      this.occupancyRate = this.occupancyRateBus
    else if (this.transportModel == 'shuttle')
      this.occupancyRate = this.occupancyRateShuttle
    else
      this.occupancyRate = this.occupancyRateTotal
  }
}
