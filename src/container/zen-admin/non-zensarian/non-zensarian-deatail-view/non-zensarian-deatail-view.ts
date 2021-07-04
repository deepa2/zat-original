import { Component } from "@angular/core";
import { IonicPage, ModalController, NavController, NavParams, } from "ionic-angular";
import { CommonUtilities } from "../../../../providers/commonUtilities/commonUtilities";
import { HttpProvider } from "../../../../providers/http/http";

/**
 * Generated class for the NonZensarianDeatailViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-non-zensarian-deatail-view",
  templateUrl: "non-zensarian-deatail-view.html",
})
export class NonZensarianDeatailViewPage
{

  public taskView = "details";
  public busDetails;
  private userId;
  private userData: any;
  private userDetailsData: any;

  constructor(private navCtrl: NavController, private navParams: NavParams, private utility: CommonUtilities,
    private httpProvider: HttpProvider, private modalCtrl: ModalController)
  {

    this.userId = this.navParams.get("userId");

  }

  ionViewDidEnter()
  {
    this.getPageData();
  }

  // Call serivce to get intial data
  getPageData()
  {
    this.utility.updateLoader(true)

    this.httpProvider.http.commonService({ url: "getAdminNonZensarianDetailData", data: { nzUserId: this.userId }, isZenAdmin: true }).subscribe((response: any) =>
    {
      this.utility.updateLoader(false);
      if (response)
      {
        if (!this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1")
        {
          this.busDetails = response["data"].busPassDOs;
          this.userData = response["data"].nonZensarianDO;
          this.userDetailsData = response["data"].nonZensarianDODetails;
        }
      }
    }, (error) =>
    {
      this.utility.updateLoader(false);
      this.utility.showAlert("Zenadmin", error.status);
    });
  }

  goToBusDetail(busData)
  {
    this.navCtrl.push("NonZensarianPassDetailPage", {
      busId: busData.busPassId,
      nzUserId: this.userData.userId,
    });
  }

  // Update User
  updateUser()
  {
    let modal = this.modalCtrl.create("AddNonZensarianPage", {
      userData: { ...this.userData, ...this.userDetailsData },
      isEdit: true,
    });
    modal.onDidDismiss((res) =>
    {
      if (res == "add")
      {
        this.getPageData();
      }
    });
    modal.present();
  }

  // Redirecting to new Bus Pass
  addNewBusPass()
  {
    this.navCtrl.push("AddNewPassPage", {
      isNonZensarian: true,
      passReqType: "bus",
      nonZensarianID: this.userData.userId
    });
  }

  call(number)
  {
    this.utility.callNumber(number);
  }
}
