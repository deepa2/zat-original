import { PopoverController } from 'ionic-angular';
import { ZendeavorTeamMeanModalComponent } from './../../components/zendeavor-team-mean-modal/zendeavor-team-mean-modal';
import { HttpProvider } from './../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the ZendeavorReviewerListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zendeavor-reviewer-list',
  templateUrl: 'zendeavor-reviewer-list.html',
})
export class ZendeavorReviewerListPage {
  private reviewerUrl: any = "getAssociateList"
  private segmentModel: string = 'inProgress'
  private reviewerListData: any = []
  private userID: any = ''
  private kraType: any
  private userRole: any
  private pendingList: any = []
  private approvedList: any = []
  private submittedList: any = []
  private tooltipActualMean: any = "hello tooltip";
  private tooltipEvent: 'click' | 'press' = 'click'
  private isAppraisalDateExpired: boolean = false




  constructor(public navCtrl: NavController, public navParams: NavParams, private utilitiy: CommonUtilities, private httpProvider: HttpProvider, private modalCtrl: ModalController, private popoverCtrl: PopoverController) {
    this.userID = this.navParams.get('userID') || null
    this.userRole = this.navParams.get('userRole') || null
    this.kraType = this.navParams.get('kraType') || null

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ZendeavorReviewerListPage');

  }
  ionViewWillEnter() {
    this.utilitiy.updateLoader(true)
    this.getReviewerlistData()
  }


  /**
 * Api call to retrieve 2UP's team list
 */
  getReviewerlistData() {
    let reviewerParams = {
      // zenDeavorURL: this.url
      url: this.reviewerUrl,
      zenDeavorURL: true,
      data: {
        "userId": this.userID,
        "role": '3',
        "processType": this.kraType,
        "isTeamList": true
      }
    }

    this.httpProvider.http.commonService(reviewerParams).subscribe((res) => {
      this.utilitiy.updateLoader(false)
      this.reviewerListData = res['details'];
      //console.log("reviewer list", res['details'])
      this.pendingList = this.reviewerListData['pendingList']
      this.submittedList = this.reviewerListData['submittedList']
      this.approvedList = this.reviewerListData['approvedList']
      //console.log(this.pendingList)
      this.isAppraisalDateExpired = this.reviewerListData.isExpired

      // this.approvedList=[
      //  {
      //   "employeeId ": "46186",
      //   "employeeName" : "Ashish Malvi",
      //   "employeeProfilePic":"",
      //   "":
      //  }
      // ]

    }, (err) => {
      this.utilitiy.updateLoader(false)
    })

  }

  openTeamMeanModal() {
    this.modalCtrl.create(ZendeavorTeamMeanModalComponent, {
      'data': {
        applicableMean: this.reviewerListData.applicableMean,
        permissibleLimit: this.reviewerListData.permissibleLimit,
        actualMean: this.reviewerListData.actualMean,
        managerName: this.reviewerListData.name,
        toolTipData: this.reviewerListData.toolTipForMean
      }
    }, { cssClass: 'team-mean-modalCSS' }).present();


  }

  // open preview modal
  openPreview(selectedUser) {
    //console.log("selectedUser", selectedUser)


    if(selectedUser.isRedirectToHomePage && !this.isAppraisalDateExpired){
      this.navCtrl.push("ZenDeavorKraPage", {
        userID: selectedUser.employeeId,
        role: this.userRole,
        userName: selectedUser.employeeName,
        kraType: this.kraType,
        showUsername: true,
        isTeamList: true,
        isAppraisalDateExpired:this.isAppraisalDateExpired,
        
  
      })
    }else{
      this.navCtrl.push("ZendeavorPreviewPage", {
        userID: selectedUser.employeeId,
        userRole: this.userRole,
        userName: selectedUser.employeeName,
        kraType: this.kraType,
        showUsername: true,
        isTeamList: true,
        isAppraisalDateExpired:this.isAppraisalDateExpired
  
      })
    }
    

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

  openPopover(event, data) {
    //console.log("data ", data)
    //console.log("kraType ", this.kraType)

    event.stopPropagation()
    let popover = this
      .popoverCtrl
      .create('PopoverPage', { type: 'direct-submit' })
    popover.present({ ev: event })

    popover.onDidDismiss((res) => {
      if (res == 'directSubmit') {
        if (data.isEligibileForDirectApprove && !this.utilitiy.isEmptyOrNullOrUndefined(data)) {
          if (data.isPromotionEligibility) {
            this.navCtrl.push('ZenDeavorKraPage', {
              role: this.userRole,
              kraType: this.kraType,
              userID: data.employeeId,
              kraId: "-2",
              // title: 'Summary',
              showWhenData: true,
              isDirectApprove: true,
              showUsername: true
              // userId: "51424",
              // kraId: "-2",
              // subKraId: "1432011",

            })
          }
          else {
            //console.log("userid", data.employeeId)
            //console.log("userRole", this.userRole)
            //console.log("kraType", this.kraType)

            this.navCtrl.push("ZendeavorPreviewPage", {
              userID: data.employeeId,
              userRole: this.userRole,
              userName: data.employeeName,
              kraType: this.kraType,
              isDirectApprove: true,
              showUsername: true,
              isTeamList: true


            })
          }
        }
        else {
          this.utilitiy.presentAlert(data.directApproveAlert)
        }


      }
      // else if(res=='consult'){
      //   console.log("consult")
      // }
    })
  }

}
