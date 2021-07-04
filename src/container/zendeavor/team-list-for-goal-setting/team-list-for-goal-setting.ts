import { HttpProvider } from './../../../providers/http/http';
import { CommonUtilities } from './../../../providers/commonUtilities/commonUtilities';
import { Component, ViewChild } from '@angular/core'
import { IonicPage, NavController, NavParams, PopoverController, ModalController, Content } from 'ionic-angular'


/**
 * Generated class for the TeamListForGoalSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-list-for-goal-setting',
  templateUrl: 'team-list-for-goal-setting.html',
})
export class TeamListForGoalSettingPage {

  private url: any = "associateListForGoalSetting"
  private statusModel: string = 'inProgress'
  private submitAllurl: string = 'submitAll'
  private teamlListData: any = []
  private approvedList: any = []
  private submittedList: any = []
  private pendingList: any = []
  private teamListResData: any = []
  private userID: any
  private kraType: any;
  private userRole: any
  private selectedSegmentName: string
  private showHeaderButton: boolean = true
  private sendReminderUrl: string = "sendReminderForKRA"
  private inSelectionMode: boolean = false
  private pendingListCount: number = 0
  private submittedListCount: number = 0
  private approvedListCount: number = 0

  @ViewChild(Content) content: Content;



  constructor(private navCtrl: NavController, private navParams: NavParams, private httpProvider: HttpProvider, private popoverCtrl: PopoverController,
    private modalCtrl: ModalController, private utilitiy: CommonUtilities) {

    this.userID = this.navParams.get('userID') || null
    this.userRole = this.navParams.get('userRole') || null
    this.kraType = this.navParams.get('kraType') || null
    // this.selectedItem = this.navParams.get('selectedItem') || null
    // this.showGoalSettingList = this.navParams.get('selectedOffering') || false
    console.log("this.kraType ", this.kraType)
    // this.getAssociateData()


  }

  ionViewDidLoad() {
    // this.utilitiy.updateLoader(true)
    // this.getAssociateData()
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter ');

    this.getAssociateData();
  }

  /**
   * Api call for associate team list
   */
  getAssociateData() {
    this.utilitiy.updateLoader(true)
    let teamListUrl = {
      // zenDeavorURL: this.url
      url: this.url,
      zenDeavorURL: true,
      data: {
        "userId": this.userID,
        "role": this.userRole,
        // "processType": this.kraType,
        // "isTeamList": false
      }
    }

    this.httpProvider.http.commonService(teamListUrl).subscribe((res) => {
      this.utilitiy.updateLoader(false)
      this.teamListResData = res['details']
      this.pendingList = this.teamListResData['pendingList']
      this.submittedList = this.teamListResData['submittedList']
      // this.userRole = res['details'].role
      // this.submitAllStatus = this.teamListResData['isSubmitAll']
      // this.submitAllmsg = this.teamListResData['message']
      // this.isAppraisalDateExpired = this.teamListResData.isExpired
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

      this.approvedList = this.teamListResData['approvedList']
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
      // if (this.selectedSegmentName == 'moderation')
      // this.content.resize();
      console.log("content", this.content)
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
          // "processType": this.kraType,
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

  openReviewPage(userData) {
    this.navCtrl.push('ReviewGoalsPage', {
      userID: userData.employeeId,
      userRole: this.userRole,
      kraYear: userData.year,
      isDirectApprove: userData.isDirectApprove
    })
    console.log('details sent to review page', userData)
  }

}

// check for hard coded dates