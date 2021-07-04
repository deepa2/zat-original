import { HttpProvider } from "./../../../providers/http/http";
import { CommonUtilities } from "./../../../providers/commonUtilities/commonUtilities";
import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { Data } from "../../../providers/data/data";

/**
 * Generated class for the BusPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-bus-pass",
  templateUrl: "bus-pass.html",
})
export class BusPassPage {

  private bookingStatus: any = "All";
  private busDetails: any;
  private responseList: any;
  private userDetails: any;
  private userID: any;
  private selectOptions: any;
  private showNoPasstxt: boolean;
  private isFilterApplied: boolean = false;

  constructor(private data: Data, public navCtrl: NavController, private utility: CommonUtilities, private httpProvider: HttpProvider) {

  }

  ngOnInit() {
    this.selectOptions = {
      title: "Bus Pass Filter"
    };
  }

  ionViewWillEnter() {
    // get loginDetails from storage
    this.data.getData("loginDetails").then((userInfo: any) => {
      this.userDetails = userInfo.details.userDetails
      this.userID = this.userDetails.userId
      if (!this.utility.isEmptyOrNullOrUndefined(this.userID)) {
        this.getPassHistory()
      }
    })
  }

  /**
   *Moves to add new pass page
   * @param type type of pass to be created(bus,shuttle)
   */
  addNewPass(type) {
    if (type == "bus") {
      this.navCtrl.push("AddNewPassPage", { passReqType: type });
    }
  }

  /**
   * Service call for pass history.
   * Retrieves all the bus pass related date.
   */
  getPassHistory() {
    this.utility.updateLoader(true)

    this.httpProvider.http.commonService({
      url: "getBusPassHistoryDetails", data: { associateId: this.userID, transportType: "bus", approvalStatus: this.bookingStatus }, isZenAdmin: true,
    }).subscribe((response) => {
      if (response) {
        this.showNoPasstxt = false
        this.utility.updateLoader(false)
        if (!this.utility.isEmptyOrNullOrUndefined(response["data"])) {
          this.responseList = response["data"]
          if (!this.utility.isEmptyOrNullOrUndefined(response["data"].busPassDetailDOs)) {
            this.busDetails = this.responseList.busPassDetailDOs
          } else {
            this.showNoPasstxt = true
          }
        }
      }
    }, (error) => {
      this.utility.updateLoader(false)
    })
  }

  /**
    *Moves to selected pass details page
    * @param buspassId selected buspass id 
    */
  moveToPassDetails(buspassId) {
    this.navCtrl.push("PassDetailsPage", { busId: buspassId, passReqType: "bus" })
  }
  /**
   * Handles filter change event
   */
  onFilterChange() {
    this.getPassHistory()
    if (this.bookingStatus != 'All') {
      this.isFilterApplied = true
    }
    else{
      this.isFilterApplied = false
    }
  }
}
