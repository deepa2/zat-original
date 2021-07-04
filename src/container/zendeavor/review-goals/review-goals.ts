import { KraConsentComponent } from './../../../components/kra-consent/kra-consent';
import { Content } from 'ionic-angular';
import { ZendeavorGoalSettingPage } from './../zendeavor-goal-setting/zendeavor-goal-setting';
import { RedirectKraComponent } from './../../../components/redirect-kra/redirect-kra';
import { CommonUtilities } from './../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from './../../../providers/http/http';
import { Component, ViewChild } from '@angular/core'
import { IonicPage, NavController, NavParams, ViewController, PopoverController, ModalController, AlertController, Navbar } from 'ionic-angular'
import { Constants } from "@app/constants";
import { TeamListForGoalSettingPage } from '../team-list-for-goal-setting/team-list-for-goal-setting';

/**
 * Generated class for the ReviewGoalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review-goals',
  templateUrl: 'review-goals.html',
})
export class ReviewGoalsPage {
  private previewUrl: string = "kraPreviewDeatils"
  private approveKraUrl: string = 'submitKra'
  private agreeConsentUrl: string = "kraConsent"
  private submitGoalsUrl = 'submitKra'
  private enableEditKraUrl: string = 'enableEditKra'
  private userRole: any
  private userID: any
  private kraYear: any
  private reviewResponse: any
  private kraListDetails: any = []
  private consentStatus: any
  private finalStatus: string = ''
  @ViewChild(Content) content: Content;
  private isapprove: any = "true"
  private appraiserDiscussionmodel: boolean = true
  private reviewerdiscusionReqmodel: boolean = false
  private reviewerDiscussionModel: boolean = false
  private isAppraisalDateExpired: boolean = false
  private isDirectApprove: boolean;
  private hideConsentOnKraStatus: boolean








  constructor(private httpProvider: HttpProvider, private popoverCtrl: PopoverController, private navCtrl: NavController,
    private utilitiy: CommonUtilities, private navParams: NavParams,
    private modalCtrl: ModalController, private alertCtrl: AlertController) {
    this.kraYear = this.navParams.get('kraYear')
    this.userID = this.navParams.get('userID')
    console.log("id", this.userID);
    this.userRole = this.navParams.get('userRole')

    this.isDirectApprove = this.navParams.get('isDirectApprove')
    console.log("kra", this.kraYear);
    console.log("isDirectApprove", this.isDirectApprove);
    console.log("userRole", this.userRole)
    this.hideConsentOnKraStatus = this.navParams.get('hideConsentOnKraStatus')
    console.log("hideConsentOnKraStatus", this.hideConsentOnKraStatus)
  }
  // ngDoCheck() {
  //   this.getReviewDetails();

  // }
  ionViewCanEnter() {
    console.log('ionViewCanEnter ReviewGoalsPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewGoalsPage');
    // this.getReviewDetails();
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter ');

    this.getReviewDetails();
  }

  ngOnInit() {
    console.log('ngOnInit ');

  }


  /**
 * Api call for REVIEW DETAILS i.e appraisal details
 */
  getReviewDetails() {
    this.utilitiy.updateLoader(true)
    let previewData = {
      url: this.previewUrl,
      zenDeavorURL: true,
      data: {
        "userId": this.userID,
        "role": this.userRole,
        "isDirectApprove": this.isDirectApprove,
        "year": this.kraYear
      }
    }

    this.httpProvider.http.commonService(previewData).subscribe((res: any) => {
      this.utilitiy.updateLoader(false)
      this.reviewResponse = res.details
      this.kraListDetails = res.details.kraList
      this.finalStatus = res.details.finalStatus
      console.log("kra list",this.kraListDetails.kradetailList)
      // this.managerComments = res.details.managerComment
      // this.scoreList = this.previewResponse.scoreList
      // let kradetailslist=this.kraListDetails[1].kradetailList[2].subKraDetailList
      // console.log("kra list",kradetailslist)

      this.consentStatus = this.reviewResponse.isConsetPending
      // this.cmmtData = this.managerComments
      if (this.finalStatus == 'REDIRECT BY APPRAISER' || this.finalStatus == 'PENDING FOR CONSENT') {
        this.content.resize();

      }
      console.log("kraListDetails", this.kraListDetails)
    }, (err) => {
      this.utilitiy.updateLoader(false)
    })
  }


  showSubmitEditForEmp() {
    return !this.consentStatus && this.userRole == '1' && (this.finalStatus == 'PENDING TO SUBMIT' || this.finalStatus == 'REDIRECT BY APPRAISER');
  }

  presentConfirm(type) {

    console.log("sdshdh", type)
    // if (type == 'approve') {
    //   this.approveKRA()
    // } else {
    //   this.redirectKRA(this.userID)
    // }


    let alert = this.alertCtrl.create({
      // title: 'Confirm purchase',
      message: 'Are you sure you want to submit?',
      buttons: [{
        text: 'No',
        role: 'cancel',
        handler: () => {
        }
      }, {
        text: 'Yes',
        handler: () => {
          if (type == 'agree') {
            this.agreeConsent()
          }
          else {
            this.submitAppraisal()
          }
        }
      }]
    })
    alert.present()
  }


  redirectKRA() {
    let modal = this.modalCtrl.create(RedirectKraComponent, {
      'data': {
        userData: this.userID,
        redirectGoals: true,
        year: this.kraYear
      }
    }, { cssClass: 'kra-training-modal' })
    modal.onDidDismiss(data => {
      if (data === "SUBMITTED_DATA_SUCCESSFULLY") {
        this.navCtrl.pop()
        this.navCtrl.getPrevious().data.submitStatus = "true"
        // this.getAssociateData();
      }
    });
    modal.present()
  }

  approveKRA() {
    this.utilitiy.updateLoader(true)
    let approveData = {
      url: this.approveKraUrl,
      zenDeavorURL: true,
      data: {
        "userId": this.userID,
        "role": this.userRole,

        "year": this.kraYear,

        "isDirectApprove": this.isDirectApprove
      }
    }

    this.httpProvider.http.commonService(approveData).subscribe((res: any) => {
      this.utilitiy.updateLoader(false)
      if (!this.utilitiy.isEmptyOrNullOrUndefined(res) && !this.utilitiy.isEmptyOrNullOrUndefined(res.status)
        && !this.utilitiy.isEmptyOrNullOrUndefined(res.status.statusCode) && res.status.statusCode == 1) {
        this.navCtrl.getPrevious().data.submitStatus = "true"
        this.navCtrl.pop();
      }

    }, (err) => {
      this.utilitiy.updateLoader(false)
      this.utilitiy.showAlert('Review Goals', Constants["Server_Error_Message"])

    })

  }

  editKra(clickedKra) {
    console.log(clickedKra)
    // if (this.isTeamlist) {
    //     this.editKraforReviewer(clickedKra)
    // }
    // else {
    // this.navCtrl.getPrevious().data.submitStatus = 'false'
    // this.navCtrl.getPrevious().data.kraId = clickedKra.kraId
    // if (clickedKra.kraId == '-2') {
    //     this.navCtrl.getPrevious().data.title = clickedKra.kraTitle
    // }
    // else {
    //     this.navCtrl.getPrevious().data.title = 'KRA'
    // }
    // this.navCtrl.pop()
    // }
    if (this.userRole == '2') {
      if (this.isDirectApprove) {
        this.presentConfirmForDirectApprove().then((res) => {
          if (!this.utilitiy.isEmptyOrNullOrUndefined(res) && res) {
            console.log("res", res)
            this.enableEditKra(clickedKra)



          }
        })
      }
      else {
        this.navCtrl.pop()
        this.navCtrl.push('ZendeavorGoalSettingPage', {
          userRole: this.userRole,
          userID: this.userID,
          kraId: clickedKra.kraId,
          submitStatus: 'false',
          kraYear: this.kraYear,
          isDirectApprove: this.isDirectApprove



        })

      }


    }
    if (this.userRole == '1') {
      this.navCtrl.getPrevious().data.submitStatus = 'false'
      this.navCtrl.getPrevious().data.kraId = clickedKra.kraId
      // if (clickedKra.kraId == '-2') {
      //     this.navCtrl.getPrevious().data.title = clickedKra.kraTitle
      // }
      // else {
      //     this.navCtrl.getPrevious().data.title = 'KRA'
      // }
      this.navCtrl.pop()
    }
  }

  closeReviewPage() {
    this.navCtrl.getPrevious().data.submitStatus = 'false'
    this.navCtrl.getPrevious().data.kraId = '-1'
    this.navCtrl.pop()
  }

  showSubmitEditForMgr() {
    return this.userRole == '2' && this.finalStatus == 'PENDING AT APPRAISER'
  }

  selectConsent(type, status) {
    // if (this.finalStatus == 'PENDING FOR TWO UP CONSENT') {
    //   this.appraiserDiscussionmodel = false
    //   this.reviewerdiscusionReqmodel = false

    // }
    if (!this.reviewerdiscusionReqmodel) {
      this.utilitiy.presentAlert('Please select the checkbox')
      return;
    }
    this.isapprove = status
    if (type == 'agree') {
      this.presentConfirm(type)

    } else {
      this.openConsentModal(type)
    }
  }

  openConsentModal(type: any) {
    let kraConsentModal = this.modalCtrl.create(KraConsentComponent, {
      'data': {
        typeOfConsent: type,
        userID: this.userID,
        isGoalsConsent: true,
        userRole: this.userRole,
        krayear: this.kraYear,
        appraiserDiscussion: 1,
        // reviewerDiscussion: this.reviewerDiscussionModel == true ? 1 : 0,
        // reviewerRequiredDiscussion: this.reviewerdiscusionReqmodel == true ? 1 : 0


      }
    }, { cssClass: 'kra-training-modal' })
    kraConsentModal.onDidDismiss((response: any) => {
      if (!this.utilitiy.isEmptyOrNullOrUndefined(response) && response == 'DATA_SUBMITTED') {
        this.navCtrl.pop()
      }
    })

    kraConsentModal.present()
  }

  /**
   * submit Consent------Agree
   * called when agree is clicked
   */
  agreeConsent() {


    this.utilitiy.updateLoader(true)
    let data = {
      // zenDeavorURL: this.url
      url: this.agreeConsentUrl,
      zenDeavorURL: true,
      data: {
        "consentRemark": "",
        "consentId": 1,
        // "appraiserDiscussion": 1,
        "userId": this.userID,
        "year": this.kraYear,
        "role": this.userRole,
        // "reviewerDiscussion": "",
        "appraiserDiscussion": 1


      }



    }

    this.httpProvider.http.commonService(data).subscribe((res: any) => {
      this.utilitiy.updateLoader(false)
      this.utilitiy.presentAlert(res['status'].statusMessage).then(response => {
        if (!this.utilitiy.isEmptyOrNullOrUndefined(res) && !this.utilitiy.isEmptyOrNullOrUndefined(res.status)
          && !this.utilitiy.isEmptyOrNullOrUndefined(res.status.statusCode) && res.status.statusCode == 1) {
          if (this.userRole == '1') {
            this.navCtrl.pop();
          }
        }
      })
    }, (err) => {
      this.utilitiy.updateLoader(false)
    })
  }

  /**
  *Final submit kra 
  */
  submitAppraisal() {

    if (!this.reviewResponse.isWeightageCorrect) {
      this.utilitiy.presentAlert(this.reviewResponse.weightageAlert)
      return
    }
    this.utilitiy.updateLoader(true)
    let kraDetails = {
      url: this.submitGoalsUrl,
      data: {
        "userId": !this.utilitiy.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
        // "kraId": ,
        // "subKraId": "1432011",
        "role": this.userRole,
        "year": this.kraYear,
        // "processType": "Annual",
        "isDirectApprove": this.isDirectApprove
      },
      zenDeavorURL: true
    }
    // this.isServiceCallOn = true

    this.httpProvider.http.commonService(kraDetails).subscribe((response) => {
      // this.isServiceCallOn = false

      if (response) {
        this.utilitiy.updateLoader(false)
        if (response['status'] && response['status'].statusCode == '1') {
          let statusMessage = response['status'].statusMessage
          this.utilitiy.presentAlert(statusMessage).then((res) => {
            this.navCtrl.getPrevious().data.submitStatus = "true"
            this.navCtrl.pop()
          })
        }
      }

    }, (err) => {
      this.utilitiy.updateLoader(false)
      this.utilitiy.showAlert('Goal Setting', Constants["Server_Error_Message"])
    })

  }



  presentConfirmForDirectApprove() {

    return new Promise((resolve, reject) => {
      let alert = this.alertCtrl.create({
        enableBackdropDismiss: false,
        title: 'Are you sure',
        // message: 'You will not be able to do direct approve . Are you sure you want to edit Kra.',
        // subTitle: 'You will not be able to do Direct approve . Are you sure you want to edit KRA.',

        message: 'Approve option will be disabled, in case you choose to edit KRAs. Do you want to continue?',

        buttons: [

          {
            text: 'Yes',
            handler: () => {
              resolve(true);
              // return 

            }
          },
          {
            text: 'No',
            handler: () => {
              // reject(false);
              // return 
              // reject();
            }
          }
        ]
      });
      alert.present();
    })
  }

  enableEditKra(clickedKra) {
    this.utilitiy.updateLoader(true)
    let kraDetails = {
      url: this.enableEditKraUrl,
      data: {
        "userId": !this.utilitiy.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
        // "kraId": ,
        // "subKraId": "1432011",
        // "role": this.userRole,
        "year": this.kraYear,
        // "processType": "Annual",
        // "isDirectApprove": false
      },
      zenDeavorURL: true
    }
    // this.isServiceCallOn = true

    this.httpProvider.http.commonService(kraDetails).subscribe((response) => {
      // this.isServiceCallOn = false

      if (response) {
        this.utilitiy.updateLoader(false)
        if (response['details']) {
          let responseData = response['details']
          this.isDirectApprove = responseData.isDirectApprove
          this.navCtrl.pop().then(() => {
            this.navCtrl.push('ZendeavorGoalSettingPage', {
              userRole: this.userRole,
              userID: this.userID,
              kraId: clickedKra.kraId,
              submitStatus: 'false',
              kraYear: this.kraYear,
              isDirectApprove: this.isDirectApprove



            })
          })

        }
      }

    }, (err) => {
      this.utilitiy.updateLoader(false)
      this.utilitiy.showAlert('Goal Setting', Constants["Server_Error_Message"])
    })


  }
}
