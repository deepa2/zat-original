import { ModalController } from "ionic-angular";
import { HttpProvider } from "../../../../providers/http/http";
import { CommonUtilities } from "../../../../providers/commonUtilities/commonUtilities";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CancelBuspassModalComponent } from "../../../../components/zenadmin/cancel-buspass-modal/cancel-buspass-modal";

/**
 * Generated class for the NonZensarianPassDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-non-zensarian-pass-detail",
  templateUrl: "non-zensarian-pass-detail.html",
})
export class NonZensarianPassDetailPage
{
  private busDetails: any;
  private responseList: any;
  private otherDetails: any;
  private passId: any;
  private cancelledPassData: any;
  private isPassCancelled: boolean = false;
  private cancelMsg: any;
  private noDataMsg: any;
  private showNoDataMsg: boolean = false;
  private isCancelAvailable: boolean = false;
  private cancelBusDetails: any;
  private nzUserId: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private utility: CommonUtilities,
    private httpProvider: HttpProvider,
    private modalCtrl: ModalController
  )
  {
    this.passId = this.navParams.get("busId");
    this.nzUserId = this.navParams.get("nzUserId");
  }

  ionViewDidLoad()
  {
    console.log("ionViewDidLoad PassDetailsPage");
    this.getPassDetails();
  }

  getPassDetails()
  {
    this.utility.updateLoader(true);
    let home = {
      url: "getAdminNonZensarianBusPassDetailData",
      data: {
        busPassId: this.passId,
        nzUserId: this.nzUserId,
      },
      isZenAdmin: true,
    };

    this.httpProvider.http.commonService(home).subscribe(
      (response: any) =>
      {
        if (response)
        {
          console.log("Bus pass details:::", response);
          this.utility.updateLoader(false);
          if (
            !this.utility.isEmptyOrNullOrUndefined(response["data"]) &&
            response.status["statusCode"] == "1"
          )
          {
            this.responseList = response["data"];
            this.busDetails = this.responseList.busPassDetailDO;
            this.otherDetails = this.responseList.busPassDetailSubDO;
            this.isCancelAvailable = this.busDetails.isCancelAvailable;
          } else
          {
            this.noDataMsg = response.status["statusMessage"];
            this.showNoDataMsg = true;
          }
        }
      },
      (error) =>
      {
        this.utility.updateLoader(false);
      }
    );
  }
  cancelPassReq()
  {
    let modal = this.modalCtrl.create(
      CancelBuspassModalComponent,
      {
        passID: this.busDetails.busPassId,
        isNonZensarian: true,
        transportType: "Bus",
        requestType: "cancelPass",
      },
      {
        cssClass: "cancel-pass-modal",
      }
    );

    modal.present();
    modal.onDidDismiss((res) =>
    {
      console.log("response", res);
      this.utility.updateLoader(true);
      if (res)
      {
        if (res.key == "passCancelled")
        {
          this.utility.updateLoader(false);

          this.isPassCancelled = true;
          console.log("cancelled data", res.cancelledData);
          // this.busDetails = ''
          this.cancelBusDetails = res.cancelledData;
          this.cancelMsg = res.cancelledData.busPassStatusMessageDetails;
          console.log("cancelMsg", this.cancelMsg);
          console.log("cancelBusDetails", this.cancelBusDetails.userName);

          // this.isCancelAvailable = this.busDetails.isCancelAvailable;
        }
      } else
      {
        this.utility.updateLoader(false);
      }
    });
  }
  call(number)
  {
    this.utility.callNumber(number);
  }
}
