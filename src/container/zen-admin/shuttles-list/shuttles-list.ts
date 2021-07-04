import { Component,ChangeDetectorRef } from "@angular/core";
import { IonicPage, NavController, NavParams,PopoverController } from "ionic-angular";
import { CommonUtilities } from "../../../providers/commonUtilities/commonUtilities";
import { HttpProvider } from "../../../providers/http/http";


/**
 * Generated class for the ShuttlesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-shuttles-list",
  templateUrl: "shuttles-list.html",
})
// export class ShuttlesListPage {

//   private shuttleList: any = []
//   private searchInputText: string = ""

//   private showNoPasstxt: boolean
//   private searchOn: boolean = false
//   private isLoaderOn: boolean = false

//   constructor(public navCtrl: NavController, public navParams: NavParams, private utility: CommonUtilities, private httpProvider: HttpProvider) {
//     this.getShuttleList()
//   }

//   // ionViewDidLoad() {
//   // }

//   // ngOnInit() {
//   // }

//   searchClick() {
//     this.searchOn = !this.searchOn
//   }

//   getShuttleList() {
//     this.isLoaderOn = true
//     this.utility.updateLoader(this.isLoaderOn)
//     this.httpProvider.http.commonService({ url: "getShuttleList", data: {}, isZenAdmin: true }).subscribe((response: any) => {
//       this.isLoaderOn = false
//       this.utility.updateLoader(this.isLoaderOn)
//       if (response && !this.utility.isEmptyOrNullOrUndefined(response.status)
//         && !this.utility.isEmptyOrNullOrUndefined(response.status.statusCode) && response.status.statusCode == 1) {
//         if (!this.utility.isEmptyOrNullOrUndefined(response["data"])) {
//           this.shuttleList = response["data"];
//         }
//       }
//     }, (error) => {
//       this.isLoaderOn = false
//       this.utility.updateLoader(this.isLoaderOn);
//     });
//   }
// }
export class ShuttlesListPage
{

  details: any;
  busDetails: any;
  showNoPasstxt: boolean;
  searchInputText: string = ""
  private responseList: any;
  userID: any;
  private searchOn: boolean = false

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private utility: CommonUtilities,
    private httpProvider: HttpProvider,
    private popoverCtrl: PopoverController,
    private cdr: ChangeDetectorRef
  ) { }

  ionViewDidLoad() { }

  ngAfterViewChecked()
  {
    this.cdr.detectChanges();
  }

  ionViewWillEnter()
  {
    this.busSearchService()
  }

  searchClick()
  {
    this.searchOn = !this.searchOn
  }

  popOverMenu(event, busData)
  {
    event.stopPropagation();
    let popover = this.popoverCtrl.create("PopoverPage", {
      type: "adminpickuppt",
      showEdit: false,
      showDelete: true,
    });

    popover.present({
      ev: event,
    });

    popover.onDidDismiss((res) =>
    {
      if (res == 'delete')
      {
        this.utility.presentConfirmation("Do you want to delete bus details?").then((res) =>
        {
          this.deleteBusApi(busData)
        }, (err) =>
        {
        });
      }

    })
  }

  ngOnInit()
  {
  }

  gotoBusDetails(selectedBusId)
  {
    // to navigate from bus-Search page to bus details page
    this.navCtrl.push("BusdetailsPage", { busID: selectedBusId });
  }

  busSearchService()
  {
    this.utility.updateLoader(true);
    let home = {
      url: "getAdminBusDetailList",
      data: {},
      isZenAdmin: true,
    };

    this.httpProvider.http.commonService(home).subscribe((response: any) =>
    {
      if (response)
      {
        this.showNoPasstxt = false;
        this.utility.updateLoader(false);
        if (!this.utility.isEmptyOrNullOrUndefined(response["data"]))
        {
          this.responseList = response["data"]
          this.busDetails = this.responseList.busDetailDOs
        }
        if (response.status["statusCode"] == "16")
        {
          // no pass available
          this.showNoPasstxt = true;
          // this.routeList = []
        }
      }
    }, (error) =>
    {
      this.utility.updateLoader(false);
    });
  }

  addBusDetails()
  {
    this.navCtrl.push("AddBusPage", { isNewBus: true });
  }

  deleteBusApi(busData)
  {
    this.utility.updateLoader(true);
    let home = {
      url: "getAdminAddUpdateBusDetailsData",
      data: {
        "busId": busData.busId,
        "updationType": "delete"
      },
      isZenAdmin: true,
    };

    this.httpProvider.http.commonService(home).subscribe((response: any) =>
    {
      if (response)
      {
        this.utility.updateLoader(false);
        if (response.status["statusCode"] == "1")
        {
          this.utility.presentAlert(response.status["statusMessage"]).then((res) =>
          {
            this.busSearchService()
          })

        }
      }
    }, (error) =>
    {
      this.utility.updateLoader(false);
    });
  }

}