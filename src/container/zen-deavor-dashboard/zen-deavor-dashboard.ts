import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'
import { Data } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-zen-deavor-dashboard',
  templateUrl: 'zen-deavor-dashboard.html',
})

export class ZenDeavorDashboardPage {

  private url: any = "dashboard";
  //  offeringList: any = [];
  private responseList: any = [];
  private finalStatus: any
  private userID: any = ''
  private selectedCourse: any

  constructor(private navCtrl: NavController, private httpProvider: HttpProvider,
    private utility: CommonUtilities, private dataService: Data, private modalCtrl: ModalController) {

    this.dataService.getData("loginDetails").then((result: any) => {
      this.userID = result.details.userDetails.userId
      //console.log("user id", this.userID)

    })
  }

  ionViewDidLoad() {
  }

  ngOnInit() {

  }
  ionViewWillEnter() {
    // this.checkKRAEligibility()
    this.getDashboardData()
  }

  /**
    * checkKRAEligibility() : method to check whether the user is eligible for appraisal process or not.
    */
  checkKRAEligibility() {
    var eligibiltyURL = "checkApprisalEligibility";
    this.utility.updateLoader(true)
    this.dataService.getData("loginDetails").then((result: any) => {
      this.userID = result.details.userDetails.userId
      this.httpProvider.http.commonService({ url: eligibiltyURL, zenDeavorURL: true, data: { "userId": this.userID } }).subscribe((res) => {
        this.utility.updateLoader(false)
        if (res) {
          let eligiblityStatus = res['details'].isEligible;
          if (eligiblityStatus != "Yes") {
            this.utility.presentAlert(res['status'].statusMessage)
          }
          this.getDashboardData()
        }
      }, (err) => {
        // this.utilities.hideLoading();
      })
    })
  }

  /**
   * First service integration of zenDeavor module:  Dashboard service
   * which offers us 4 steps of KRA procedure.
   */
  getDashboardData() {
    this.utility.updateLoader(true)
    let DeavorUrl = {
      url: this.url,
      zenDeavorURL: true,
      data: {}
    }

    this.httpProvider.http.commonService(DeavorUrl).subscribe((response) => {
      if (response) {
        this.responseList = response['details'].dashboardList
        this.finalStatus = response['details'].finalStatus
        this.utility.updateLoader(false)
      } else {
        this.utility.updateLoader(false)
      }
    }, error => {
      this.utility.updateLoader(false)
    });
  }

  /**
   * On clicking KRA this redirects to home page for KRA filling procedure
   * where the actual KRAs can be found
   */
  goToKRA(selectedItem, role, data, selectedOffering) {
    console.log("selectedOffering", selectedItem);
    console.log("data", data);

    // if (data.isEligible) {
    if (selectedItem == '2' && data.isEligible) {

      if (this.userID) {
        if (!data.isReadOnly) {
          this.navCtrl.push("ZenDeavorKraPage", {
            // 'pageTitle':,
            userID: this.userID,
            role: role,
            finalStatus: this.finalStatus,
            kraType: data.value
          })
        } else {
          this.navCtrl.push("ZendeavorPreviewPage", {
            userID: this.userID,
            userRole: role,
            kraType: data.value,
            isAppraisalDateExpired: data.isEligible,
            isExpired:data.isExpired
          })
        }
      }
    } else if (selectedItem == '3') {
      //console.log
      if (data.dashboardSpecificationId == "17") {
        this.navCtrl.push('TeamListForGoalSettingPage', {
          userID: this.userID,
          userRole: role,
          isGoalsetting: true
          // kraType: data.value
        })
      }

      else {
        this.navCtrl.push("ZendeavorTeamListPage", {
          userID: this.userID,
          userRole: role,
          kraType: data.value
        })
      }

    }
    else if (selectedItem == '4') {
      this.navCtrl.push('ZendeavorTeamListPage', {
        userID: this.userID,
        userRole: role,
        kraType: data.value,
        selectedItem: 'Reviewer'
      })
    }
    else if (selectedItem == '5') {
      this.navCtrl.push('ZendeavorAssociateListForConsultationPage', {
        userID: this.userID,
        userRole: role,
        kraType: data.value,
      })
      // this.navCtrl.push('ZendeavorSendConsultationPage')
      // this.modalCtrl.create(SearchAssociatesConsultationModalComponent, {
      //   // 'data': {
      //   //   userData: userID
      //   // }
      // }, {}).present();
      // this.modalCtrl.create(ZendeavorSendConsultationModalComponent, {
      // }, {}).present();
    }
    else if (selectedItem == '1' && data.dashboardSpecificationId == "1" && data.isEligible) {
      if (!data.isReadOnly) {
        this.navCtrl.push('ZendeavorGoalSettingPage', {
          userID: this.userID,
          userRole: role,
          kraYear: data.year
          // selectedItem: 'Reviewer'
        })
      }
      else if (data.isReadOnly && data.status == '7') {
        this.navCtrl.push('ZendeavorGoalSettingPage', {
          userID: this.userID,
          userRole: role,
          kraYear: data.year
          // selectedItem: 'Reviewer'
        })
      }
      else {
        this.navCtrl.push("ReviewGoalsPage", {
          userID: this.userID,
          userRole: role,
          kraYear: data.year
        })
      }
      // this.navCtrl.push('ReviewGoalsPage', {
      //   userID: this.userID,
      //   userRole: role,
      //   kraType: data.value,
      //   // selectedItem: 'Reviewer'
      // })
    }
    else if (selectedItem == '1' && data.dashboardSpecificationId == "2") {
      if (data.isShowKraPreviewPage) {
        this.navCtrl.push("ReviewGoalsPage", {
          userID: this.userID,
          userRole: role,
          kraYear: data.year,
          hideConsentOnKraStatus: true
        })
      }
      else {
        if (!data.isEligible) {
          this.utility.presentAlert(data.message)
        }
        else {
          this.utility.presentAlert(data.previewPageAlert)

        }
      }

    }

    else {
      this.utility.presentAlert(data.message)
    }

  }

  // goToTeamList() {

  //   this.navCtrl.push("ZendeavorTeamListPage")ZendeavorReviewerListPage
  // }


  allOffering(selectedCourse: any) {
    let showAllFilters: boolean = true
    if (this.utility.isEmptyOrNullOrUndefined(selectedCourse)) {
      selectedCourse = this.selectedCourse;
      showAllFilters = false
    }
  }
}

  // gotoReviewerPage() {
  //   this.navCtrl.push('ZendeavorReviewerListPage')
  // }

