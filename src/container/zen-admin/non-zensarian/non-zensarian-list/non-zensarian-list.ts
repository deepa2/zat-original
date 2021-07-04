import { Component } from "@angular/core";
import
{
  IonicPage,
  ModalController,
  NavController,
  NavParams,
} from "ionic-angular";
import { CommonUtilities } from "../../../../providers/commonUtilities/commonUtilities";
import { HttpProvider } from "../../../../providers/http/http";

/**
 * Generated class for the NonZensarianListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-non-zensarian-list",
  templateUrl: "non-zensarian-list.html",
})
export class NonZensarianListPage
{

  // Variable declrations

  private homepageUrl: string = "getAdminNonZensarianDetailList"
  private userList: any = []
  public headerData;
  private userStatus = "All";
  private resultPending: boolean = true;
  private limits: any = {
    limit: 20,
    offset: 0
  }

  constructor(public navCtrl: NavController, private utility: CommonUtilities, private httpProvider: HttpProvider, private modalCtrl: ModalController)
  {

  }

  ionViewWillEnter()
  {
    this.userList=[];
    this.limits={
      limit: 20,
      offset: 0
    };
    this.getPageData();
  }

  redirectToDetailPage(id)
  {
    this.navCtrl.push("NonZensarianDeatailViewPage", { userId: id });
  }

  statusChange()
  {
    this.userList = [];
    this.headerData = [];
    this.limits.offset = 0
    this.getPageData()
  }

  // Call serivce to get intial data
  getPageData()
  {

    this.utility.updateLoader(true);
    this.httpProvider.http.commonService({
      url: this.homepageUrl,
      data: {
        approvalStatus: this.userStatus,
        limit: this.limits.limit,
        offset: this.limits.offset,
      },
      isZenAdmin: true,
    }).subscribe((response: any) =>
    {
      this.utility.updateLoader(false);
      if (response)
      {
        if (!this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1")
        {
          this.headerData = response["data"];
          if (this.userList.length <= 0)
            this.userList = response["data"].nonZensarianDOs;
          else
            this.userList = this.userList.concat(response["data"].nonZensarianDOs)

          if (!this.utility.isEmptyOrNullOrUndefined(response["data"].nonZensarianDOs) && response["data"].nonZensarianDOs.length <= 0)
          {
            this.resultPending = false
          }
        }
      }
    }, (error) =>
    {
      this.utility.updateLoader(false);
      this.utility.showAlert("Zenadmin", error.status);
    });
  }

  call(event, data)
  {
    event.stopPropagation()
    this.utility.callNumber(data)
  }

  addNewUser()
  {
    let modal = this.modalCtrl.create("AddNonZensarianPage", {});
    modal.onDidDismiss((res) =>
    {
      if (res == "add")
      {
        this.userList=[]
        this.userStatus = "All";
        this.getPageData();
      }
    });
    modal.present();
  }

  loadData(infiniteScroll)
  {
    if (this.resultPending)
    {
      setTimeout(() =>
      {
        this.limits.limit = 20
        this.limits.offset = this.limits.offset + 20;
        this.getPageData()
        infiniteScroll.complete();
      }, 1000);
    } else
    {
      infiniteScroll.enable(false);
    }
  }

}
