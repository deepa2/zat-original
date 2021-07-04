import { ZendeavorReviewerListPage } from './../zendeavor-reviewer-list/zendeavor-reviewer-list';
import { ZendeavorTeamMeanModalComponent } from './../../components/zendeavor-team-mean-modal/zendeavor-team-mean-modal';
import { Component, ViewChild } from '@angular/core'
import { IonicPage, NavController, NavParams, PopoverController, ModalController, Content } from 'ionic-angular'
import { HttpProvider } from '../../providers/http/http'
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'
import { RedirectKraComponent } from '../../components/redirect-kra/redirect-kra'
import { SearchAssociatesConsultationModalComponent } from '../../components/search-associates-consultation-modal/search-associates-consultation-modal';
import { ZendeavorSendConsultationModalComponent } from '../../components/zendeavor-send-consultation-modal/zendeavor-send-consultation-modal';


@IonicPage()
@Component({
  selector: 'page-zendeavor-team-list',
  templateUrl: 'zendeavor-team-list.html',
})
export class ZendeavorTeamListPage {

  private url: any = "getAssociateList"
  private statusModel: string = 'inProgress'
  private submitAllurl: string = 'submitAll'
  private teamlListData: any = []
  private approvedList: any = []
  private submittedList: any = []
  private pendingList: any = []
  private teamListResData: any = []
  private pendingListCount: number = 0
  private submittedListCount: number = 0
  private approvedListCount: number = 0
  private originalList: any = []
  private pendinglistToFilter: any = []
  private submittedlistToFilter: any = []
  private approvedlistToFilter: any = []
  private selectedSegmentName: string
  private showHeaderButton: boolean = true
  private sendReminderUrl: string = "sendReminder"
  private inSelectionMode: boolean = false
  private userRole: any
  private submitTeamlist: any;
  private getTeamListData: any;
  private moderationList: any;
  private userID: any
  private kraType: any;
  private selectedItem: string = '';
  private submitAllRes = []
  private reviewersList = []
  private submitAllStatus: boolean = false
  private submitAllmsg: string = ''
  private tooltipEvent: 'click' | 'press' = 'click'
  @ViewChild(Content) content: Content;
  private isAppraisalDateExpired: boolean = false



  constructor(private navCtrl: NavController, private navParams: NavParams, private httpProvider: HttpProvider, private popoverCtrl: PopoverController,
    private modalCtrl: ModalController, private utilitiy: CommonUtilities) {

    this.selectedSegmentName = this.statusModel
    this.submitTeamlist = this.navParams.get('submitStatus') || null
    this.userID = this.navParams.get('userID') || null
    this.userRole = this.navParams.get('userRole') || null
    this.kraType = this.navParams.get('kraType') || null
    this.selectedItem = this.navParams.get('selectedItem') || null
    console.log("this.kraType ", this.kraType)

  }

  ionViewDidLoad() {

  }

  ionViewWillEnter() {
    this.utilitiy.updateLoader(true)
    this.getAssociateData()

  }

  /**
   * Api call for associate team list
   */
  getAssociateData() {
    // this.utilities.hideLoading()
    let teamListUrl = {
      // zenDeavorURL: this.url
      url: this.url,
      zenDeavorURL: true,
      data: {
        "userId": this.userID,
        "role": this.userRole,
        "processType": this.kraType,
        "isTeamList": false
      }
    }

    this.httpProvider.http.commonService(teamListUrl).subscribe((res) => {
      this.utilitiy.updateLoader(false)
      this.getTeamListData = res['details']
      this.teamListResData = res['details']
      this.pendingList = this.getTeamListData['pendingList']
      this.submittedList = this.getTeamListData['submittedList']
      this.moderationList = this.getTeamListData['moderationList']
      this.reviewersList = this.getTeamListData['reviewerList']
      this.userRole = res['details'].role
      this.submitAllStatus = this.teamListResData['isSubmitAll']
      this.submitAllmsg = this.teamListResData['message']
      this.isAppraisalDateExpired = this.teamListResData.isExpired
      if (!this.utilitiy.isEmptyOrNullOrUndefined(this.pendingList)) {
        this.pendingList.filter((item) => {
          if (item.isSelected == undefined) {
            item.isSelected = true
          }
        })



        // this.pendinglistToFilter = this.pendingList
        // this.submittedlistToFilter = this.submittedList
        // this.approvedlistToFilter = this.approvedList

      }

      this.approvedList = this.getTeamListData['approvedList']
      // getting count of pendingList
      this.pendingListCount = this.pendingList.length
      this.submittedListCount = this.submittedList.length
      this.approvedListCount = this.approvedList.length



    }, (err) => {
      this.utilitiy.updateLoader(false)
    })
  }

  segmentChanged(event, currentSegment) {
    this.selectedSegmentName = currentSegment
    if (this.selectedSegmentName == 'inProgress') {
      this.showHeaderButton = true
    } else {
      this.showHeaderButton = false
      if (this.selectedSegmentName == 'moderation')
        this.content.resize();
      //console.log("content", this.content)
    }
  }

  presentOptions(myEvent) {
    let popover = this
      .popoverCtrl
      .create('PopoverPage', { type: 'ZenDeavour', isSelected: this.inSelectionMode ? 'true' : 'false' })
    popover.present({ ev: myEvent })
    popover.onDidDismiss((res) => {
      this.selectAll(res)
    })
  }

  selectAll(type) {
    if (type == "select") {
      if (this.inSelectionMode)
        this.inSelectionMode = false
      else
        this.inSelectionMode = true
      // this.sendReminder()
    }
  }

  /**
    * Method for sending reminder to users
    */
  sendReminder() {
    let selectedIds
    selectedIds = this.pendingList.filter((item) => {
      if (item.isSelected == true) {
        return item
      }
    })
    let userIDArray = []

    selectedIds.forEach(element => {
      userIDArray.push({ "user_id": element.employeeId })
    })

    if (this.inSelectionMode && selectedIds != "") {
      this.utilitiy.updateLoader(true)

      // this.utilities.hideLoading()
      let reminderDetails = {
        // zenDeavorURL: this.url
        url: this.sendReminderUrl,
        zenDeavorURL: true,

        data: {
          "processType": this.kraType,
          'userDetailList': userIDArray
        }

      }

      this.httpProvider.http.commonService(reminderDetails).subscribe((res) => {
        this.utilitiy.updateLoader(false)
        let msg = res['status'].statusMessage
        this.utilitiy.presentAlert(msg)
        this.inSelectionMode = false
        this.getAssociateData()
      }, (err) => {
        this.utilitiy.updateLoader(false)
        // this.utilities.hideLoading()
      })
    } else {
      this.utilitiy.presentAlert("Please select associates");
    }

  }

  // open preview modal
  openPreview(selectedUser) {
    //console.log("selectedUser", selectedUser)
    this.navCtrl.push("ZendeavorPreviewPage", {
      userID: selectedUser.employeeId,
      userRole: this.userRole,
      userName: selectedUser.employeeName,
      kraType: this.kraType,
      showUsername: true,
      isTeamList: true,
      isAppraisalDateExpired: this.isAppraisalDateExpired

    })
    // let feedbackModal = this.modalCtrl.create(ZendeavorKraReviewModalComponent, {})
    // feedbackModal.onDidDismiss((status) => {
    //   if (status) {
    //     let currentIndex = this.navCtrl.getActive().index
    //     this.navCtrl.remove(currentIndex, 2)
    //   }
    // })
    // feedbackModal.present().then(() => {
    // })
  }

  selectCard(userData, index) {
    if (this.inSelectionMode) {
      this.pendingList.filter((item) => {
        if (item.employeeId == userData.employeeId) {
          item.isSelected = !item.isSelected
        }
      })
    }
    // else {
    //   this.navCtrl.push("ZenDeavorKraPage")
    // }
  }

  openPopover(event, data) {
    event.stopPropagation()
    let popover;
    if (this.kraType == 'Mid-Term') {
      popover = this
        .popoverCtrl
        .create('PopoverPage', { type: 'MidtermRedirect' })
      popover.present({ ev: event })
    }
    else {
      popover = this
        .popoverCtrl
        .create('PopoverPage', { type: 'Redirect' })
      popover.present({ ev: event })
    }


    popover.onDidDismiss((res) => {
      if (res == 'redirect') {
        this.redirect(data)
      }
      else if (res == 'consult') {
        //console.log("consult")
        this.modalCtrl.create(ZendeavorSendConsultationModalComponent, {
          userData: data,
          processType: this.kraType,
          role: this.userRole
        }, {
            cssClass: 'sendConsultation-modalCss',
            enableBackdropDismiss: true
          }).present();
      }
    })
  }

  redirect(userID: any) {
    let modal = this.modalCtrl.create(RedirectKraComponent, {
      'data': {
        userData: userID,
        processType: this.kraType
      }
    }, { cssClass: 'kra-training-modal' })
    modal.onDidDismiss(data => {
      if (data === "SUBMITTED_DATA_SUCCESSFULLY") {
        // this.navCtrl.pop()
        this.getAssociateData();
      }
    });
    modal.present()
  }

  openKRAPage(submittedItem: any) {
    //console.log("submittedItem", submittedItem)
    if (this.isAppraisalDateExpired) {
      this.openPreview(submittedItem)
    }
    else {
      this.navCtrl.push('ZenDeavorKraPage', {
        role: this.userRole,
        kraType: this.kraType,
        userID: submittedItem.employeeId,
        comingFromManager:true
      })
    }

  }


  sendReminderPopover(event, userid) {

    let popover1 = this
      .popoverCtrl
      .create('PopoverPage', { type: 'sendReminder' })
    popover1.present({ ev: event })

    popover1.onDidDismiss((res) => {
      if (res == 'sendReminder') {
        this.sendReminderToOneUser(userid)

      }
    })
  }


  sendReminderToOneUser(userID) {
    this.utilitiy.updateLoader(true)

    // this.utilities.hideLoading()
    let reminderDetails = {
      // zenDeavorURL: this.url
      url: this.sendReminderUrl,
      "processType": this.kraType,
      zenDeavorURL: true,
      data: {
        "processType": this.kraType,

        userDetailList: [
          {
            "user_id": userID
          },
        ]
      }

    }

    this.httpProvider.http.commonService(reminderDetails).subscribe((res) => {
      this.utilitiy.updateLoader(false)
      if (res) {
        let msg = res['status'].statusMessage
        this.utilitiy.presentAlert(msg)
        this.inSelectionMode = false
        this.getAssociateData()
      }

    }, (err) => {
      this.utilitiy.updateLoader(false)
      // this.utilities.hideLoading()
    })

  }

  openTeamMeanModal() {
    this.modalCtrl.create(ZendeavorTeamMeanModalComponent, {
      'data': {
        applicableMean: this.teamListResData.applicableMean,
        permissibleLimit: this.teamListResData.permissibleLimit,
        actualMean: this.teamListResData.actualMean,
        managerName: this.teamListResData.name,
        toolTipData: this.teamListResData.toolTipForMean
      }
    }, { cssClass: 'team-mean-modalCSS' }).present();

    // this.navCtrl.push('ZendeavorReviewerListPage')
  }

  openSearch() {
    this.modalCtrl.create(SearchAssociatesConsultationModalComponent, {
      // 'data': {
      //   userData: userID
      // }
    }, {}).present();
  }

  openReviewersTeamList(key, selectedMean, employeeId) {
    // if (selectedMean.value == 0) {
    //   alert("No Team Members present")
    //   return
    // }
    //console.log("key", key)
    //console.log("selectedMean", selectedMean)
    if (key == 'Team List') {
      this.navCtrl.push('ZendeavorReviewerListPage', {
        userID: employeeId,
        userRole: this.userRole,
        kraType: this.kraType,
      })
    }
    else {
      this.modalCtrl.create(ZendeavorTeamMeanModalComponent, {
        'data': {
          applicableMean: selectedMean.applicableMean,
          permissibleLimit: selectedMean.permissibleLimit,
          actualMean: selectedMean.actualMean,
          managerName: selectedMean.userName,
          toolTipData: this.teamListResData.toolTipForMean
        }
      }, { cssClass: 'team-mean-modalCSS' }).present();

    }

  }


  submitAllKra() {
    if (this.submitAllStatus) {
      this.utilitiy.updateLoader(true)
      let submitAllparams = {
        // zenDeavorURL: this.url
        url: this.submitAllurl,
        zenDeavorURL: true,
        data: {
          "userId": this.userID,
          "role": this.userRole,
          "processType": this.kraType
        }
      }

      this.httpProvider.http.commonService(submitAllparams).subscribe((res) => {
        this.utilitiy.updateLoader(false)
        this.submitAllRes = res['status'];
        //console.log("submitAllRes list", res['status'])
        let submitMsg = this.submitAllRes['statusMessage']
        // this.pendingList=this.reviewerListData['pendingList']
        // this.submittedList=this.reviewerListData['submittedList']
        // this.approvedList=this.reviewerListData['approvedList']
        // //console.log(this.pendingList)
        if (this.submitAllRes['statusCode'] == 1) {
          this.utilitiy.presentAlert(submitMsg)
          this.navCtrl.pop()
        }

      }, (err) => {
        this.utilitiy.updateLoader(false)
      })
    }
    else {
      //console.log("submit all", this.submitAllmsg)
      this.utilitiy.presentAlert(this.submitAllmsg)
    }

  }

  redirectModerator(associateData) {
    if (associateData.associateStatus == "Submitted") {
      this.openKRAPage(associateData)

    }
    else if (associateData.associateStatus == "Approved") {
      this.openPreview(associateData)
    }
    // else {
    //   this.openPreview(associateData)
    // }
  }
}
