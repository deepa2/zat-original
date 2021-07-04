import { Component } from "@angular/core";
import {
  App,
  IonicPage,
  ViewController,
  NavController,
  NavParams,
  AlertController,
  ModalController,
} from "ionic-angular";
import { Data } from "../../providers/data/data";
import { CommonUtilities } from "../../providers/commonUtilities/commonUtilities";
import { Store } from "@ngrx/store";
import * as fromStore from "@app/store";
import { Subscription } from "rxjs/Subscription";
import { Constants } from "@app/constants";
import { AddDriverModelPage } from "../../container/zen-admin/add-new-driver-model/add-new-driver-model";

@IonicPage()
@Component({
  selector: "page-popover",
  templateUrl: "popover.html",
})
export class PopoverPage {
  private type: string;
  private isSelected: string;
  private filterType: string;
  private contactUrl: string = Constants.contactUs;
  private appName: string = Constants.appName;
  private userId: string;
  private selectedRole: string;
  private filterArray: Array<any> = [];
  private userType: any;
  private _roleListener: Subscription = new Subscription();
  private selectedVlearn: boolean;
  private selectedclassroom: boolean;
  private selectedonline: boolean;
  private dapType: string;
  private filteredCourseList: Array<any> = [];
  private dapfilterArray: Array<any> = [];
  private dapData: any;
  private monthsArrays: any = [];
  private monthFilter: any = [];
  role: any = {
    isAdmin: false,
    isHr: false,
    isAssociate: false,
  };
  private monthsData: any = [];
  private selectedMonth: any;
  private showEdit: any;
  private showDelete: any;
  private costDetails:any;

  constructor(
    private viewCtrl: ViewController,
    private utilitiy: CommonUtilities,
    private dataService: Data,
    private navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private appCtrl: App,
    private modalCtrl: ModalController,
    private store: Store<fromStore.Login>
  ) {
    this.type = this.navParams.get("type");
    this.isSelected = this.navParams.get("isSelected");
    this.filterType = this.navParams.get("value");
    this.userType = this.navParams.get("userType");
    this.dapData = this.navParams.get("data");
    this.monthsArrays = this.navParams.get("monthsData");
    this.selectedMonth = this.navParams.get("selectedMonth");
    this.monthFilter = this.navParams.get("monthFilter");
    this.showEdit = this.navParams.get("showEdit");
    this.showDelete = this.navParams.get("showDelete");
    

    //this.filteredCourseList = data.filteredData;
    if (this.dapData) {
      this.dapType = this.dapData.type;
    }
  }

  ngOnInit() {
    this.getUserId();
    this.getMiscData();
    if (this.dapType && this.dapData.filteredData.filteredValues) {
      this.dapfilterArray = this.dapData.filteredData.filteredValues;
    } else {
      this.dapfilterArray = [
        {
          value: "V Learn",
          checked: false,
        },
        {
          value: "Classroom",
          checked: false,
        },
        {
          value: "Online",
          checked: false,
        },
      ];
    }
    if (this.monthsArrays && this.monthsArrays.length > 0) {
      let checked;
      this.monthsData = this.monthsArrays.map((value) => {
        let new_array: any = {};
        if (value == this.selectedMonth) {
          checked = true;
          new_array.month = value;
          new_array.checked = checked;
        } else {
          checked = false;
          new_array.month = value;
          new_array.checked = checked;
        }
        return new_array;
      });
      //console.log(this.monthsData);
    }
    if(this.type=='passCharges' && !this.utilitiy.isEmptyOrNullOrUndefined(this.navParams.get("data"))){
      console.log('data',this.navParams.get("data"))
      this.costDetails=this.navParams.get("data")
    }
  }

  close() {
    this.viewCtrl.dismiss();
  }

  selectFilter() {
    this.viewCtrl.dismiss(this.filterType);
  }

  selectAttach(option) {
    this.viewCtrl.dismiss(option);
  }

  logout() {
    this.close();

    let alert = this.alertCtrl.create({
      // title: 'Confirmation',
      message: "Do you want to logout?",
      buttons: [
        {
          text: "No",
          role: "no",
          handler: () => { },
        },
        {
          text: "Yes",
          handler: () => {
            this.dataService.getData("loginDetails").then((result: any) => {
              this.store.dispatch(new fromStore.Logout(result));
            });
            this.dataService.clearData();
            this.goToPage("LoginPage", null);
          },
        },
      ],
      cssClass: "alertCustomCss",
    });
    alert.present();
  }

  goToBackdoorEntry() {
    this.dataService.getData("loginDetails").then((result: any) => {
      this.store.dispatch(new fromStore.Logout(result));
    });
    this.dataService.clearData();
    this.goToPage("BackdoorEntryPage", null);
  }

  contact() {
    this.utilitiy.openEmailClient(this.contactUrl);
  }

  goToPage(pageName, type) {
    this.viewCtrl.dismiss();
    if (pageName == " NewProfilePage") {
      this.appCtrl
        .getRootNav()
        .push(pageName, { userId: this.userId, profileType: "userProfile" });
    } else if (pageName == "AddPage") {
      this.appCtrl.getRootNav().push(pageName, {
        type: "addAnnouncement",
        questionId: null,
        answerType: null,
      });
    } else if (pageName == "WhatsNewPage") {
      this.appCtrl
        .getRootNav()
        .push("AboutPage", { type: "zenhelp_whats_new" });
    } else if (pageName == "AboutPage" && type == "onBoarding") {
      this.appCtrl
        .getRootNav()
        .push("AboutTazPage", { type: "zentalent_onboarding_about" });
    } else if (pageName == "AboutPage" && type != "onBoarding") {
      this.appCtrl.getRootNav().push("AboutTazPage", { type: "zenhelp_about" });
    } else if (
      pageName == "HomePage" ||
      pageName == "LoginPage" ||
      pageName == "BackdoorEntryPage" ||
      pageName == "NewHomePage"
    ) {
      // const root = this.appCtrl.getRootNav();
      // root.popToRoot();
      this.appCtrl.getRootNav().setRoot(pageName);
    } else {
      this.appCtrl.getRootNav().push(pageName);
    }
  }

  getUserId() {
    this.dataService.getData("loginDetails").then((res: any) => {
      if (res) {
        if (res.userRolesDetails) {
          if (res.userRolesDetails && res.userRolesDetails.userDetails) {
            this.userId = res.userRolesDetails.userDetails.userId;
          }
        }
      }
    });
  }

  changeRole(role) {
    this.viewCtrl.dismiss(role);
  }

  getMiscData() {
    this.dataService.getData("miscData").then((res: any) => {
      if (res) {
        this.role = res.role;
        this._roleListener = this.store
          .select<any>(fromStore.getRole)
          .subscribe((selectedRole) => {
            this.selectedRole = selectedRole;
            if (selectedRole == "associate") {
              this.filterArray = res.associatesQuestionStatusList;
            } else if (selectedRole == "admin") {
              this.filterArray = res.adminQuestionStatusList;
            } else if (selectedRole == "hr") {
              this.filterArray = res.hrQuestionStatusList;
            } else {
              this.filterArray = res.questionStatusList;
            }
          });
      }
    });
  }

  selectAll() {
    this.viewCtrl.dismiss("select");
  }

  sendReminder() {
    this.viewCtrl.dismiss("sendReminder");
  }

  ionViewWillLeave() {
    this._roleListener.unsubscribe();
  }

  redirect() {
    this.viewCtrl.dismiss("redirect");
  }

  chatBotFeedBack(data) {
    this.viewCtrl.dismiss(data);
  }
  consult() {
    this.viewCtrl.dismiss("consult");
  }
  directSubmitKra() {
    this.viewCtrl.dismiss("directSubmit");
  }
  updateValue(data) {
    //console.log(this.selectedVlearn)
    //console.log(this.selectedclassroom)
    //console.log(this.selectedonline)
  }

  applyfilter() {
    //console.log()
    this.viewCtrl.dismiss({ filteredValues: this.dapfilterArray });
  }

  getSelectedMonth(data) {
    this.viewCtrl.dismiss(data);
  }

  selectMonth(month) {
    //console.log(month);
    this.viewCtrl.dismiss(month);
  }

  editSubKra(actionType) {
    this.viewCtrl.dismiss(actionType);
  }
  copyCode(copyName) {
    this.viewCtrl.dismiss(copyName);
  }
  export() {
    this.viewCtrl.dismiss();
  }

  // Admin bus functionality
  busEdit() {
    this.editNewDriverModel();
  }

  busDelete() {
    this.viewCtrl.dismiss("delete");
  }
  editNewDriverModel() {
    let reportModel = this.modalCtrl.create(
      AddDriverModelPage,
      { isEdit: true, driverDetails: this.navParams.get("driverDetails") },
      { cssClass: "add-driver-model" }
    );
    reportModel.onDidDismiss((data) => {
      this.viewCtrl.dismiss("edit");
    });
    reportModel.present();
  }
  pickupPt(type) {
    this.viewCtrl.dismiss(type);
  }
// Dismiss Popover 
  gotoFaq(){
     this.viewCtrl.dismiss('faq');
  }
}
