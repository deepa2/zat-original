import { HttpProvider } from "./../../../providers/http/http";
import { CommonUtilities } from "./../../../providers/commonUtilities/commonUtilities";
import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { Data } from "../../../providers/data/data";

/**
 * Generated class for the ShuttleServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-shuttle-service",
  templateUrl: "shuttle-service.html",
})
export class ShuttleServicePage {
  private bookingStatus: any = "All";
  private busDetails: any;
  private responseList: any;
  private userDetails: any;
  private userID: any;
  private selectOptions: any;
  private showNoPasstxt: boolean;

  constructor(private data: Data, public navCtrl: NavController, private utility: CommonUtilities, private httpProvider: HttpProvider) {

  }

  ngOnInit() {
    this.selectOptions = {
      title: "Bus Pass Filter",
      // subTitle: 'Select your toppings',
      // mode: 'md'
    };
  }

  ionViewWillEnter() {
    this.data.getData("loginDetails").then((userInfo: any) => {
      this.userDetails = userInfo.details.userDetails;
      this.userID = this.userDetails.userId;
      if (!this.utility.isEmptyOrNullOrUndefined(this.userID)) {
        this.getPassHistory();
      }
    });
  }

  addNewPass(type) {
    if (type == "shuttle") {
      this.navCtrl.push("AddNewPassPage", { passReqType: type });
    }
  }

  getPassHistory() {
    this.utility.updateLoader(true);
    let home = {
      url: "getBusPassHistoryDetails",
      data: {
        associateId: this.userID,
        transportType: "shuttle",
        approvalStatus: this.bookingStatus,
      },
      isZenAdmin: true,
    };

    this.httpProvider.http.commonService(home).subscribe((response: any) => {
      if (response) {
        this.showNoPasstxt = false;
        this.utility.updateLoader(false);
        if (!this.utility.isEmptyOrNullOrUndefined(response["data"]) && !this.utility.isEmptyOrNullOrUndefined(response["status"]["statusCode"])
          && response["status"]["statusCode"] == 1) {
          this.responseList = response["data"]
          this.busDetails = this.responseList.busPassDetailDOs
          if (!this.busDetails || this.busDetails.length <= 0) {
            this.showNoPasstxt = true
          }
        } else {
          this.showNoPasstxt = true
          this.utility.showAlert(response["status"]["statusMessage"], '')
        }
      }
    }, (error) => {
      this.utility.updateLoader(false);
    });
  }

  moveToPassDetails(buspassId) {
    this.navCtrl.push("PassDetailsPage", {
      busId: buspassId,
      passReqType: "shuttle",
    });
  }
}
