import { Component, ViewChild } from '@angular/core'
import { IonicPage, NavController, NavParams, ViewController, PopoverController, ModalController, AlertController, Navbar } from 'ionic-angular'
import { HttpProvider } from '../../providers/http/http'
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'
import { KraConsentComponent } from '../../components/kra-consent/kra-consent'

import { PromotionDetailsComponent } from '../../components/promotion-details/promotion-details';

/**
 * Generated class for the ZendeavorPreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-zendeavor-preview',
    templateUrl: 'zendeavor-preview.html',
})
export class ZendeavorPreviewPage
{

    @ViewChild(Navbar) navBar: Navbar; // add this line

    private text: string
    private previewUrl: string = "getApprisalDeatils"
    private previewResponse: any
    private kraListDetails: any = []
    private finalStatus: string = ''
    private managerComments: any
    private scoreList: any
    private buttonColor: any
    private isapprove: any = "true"
    private userID: any
    private consentStatus: any
    private isAvailableForFinalSubmit: boolean = true
    private submitUrl: string = "submitAppraisal"
    private cmmtData: string = ""
    private userRole: any
    private agreeConsentUrl: string = "appraisalConsent"
    private kraType: any;
    private processType: any;
    private userName: any;
    private isDirectApproveStatus: any = 'false';
    private showUsername: any;
    private isTeamlist: any
    private appraiserDiscussionmodel: boolean = true;
    private reviewerdiscusionReqmodel: boolean = false;
    private reviewerDiscussionModel: boolean = false;
    private isAppraisalDateExpired: boolean = false;
    private isExpired: boolean;


    constructor(private httpProvider: HttpProvider, private popoverCtrl: PopoverController, private navCtrl: NavController,
        private utilitiy: CommonUtilities, private navParams: NavParams,
        private modalCtrl: ModalController, private alertCtrl: AlertController)
    {

        this.utilitiy.updateLoader(true)
        this.userID = this.navParams.get('userID')
        //console.log("id", this.userID);
        this.userRole = this.navParams.get('userRole')
        this.processType = this.navParams.get('kraType')
        this.userName = this.navParams.get('userName')
        this.isDirectApproveStatus = this.navParams.get('isDirectApprove') || false
        this.showUsername = this.navParams.get('showUsername') || false
        this.isTeamlist = this.navParams.get('isTeamList') || false
        this.isAppraisalDateExpired = this.navParams.get('isAppraisalDateExpired') || false;
        this.isExpired = this.navParams.get('isExpired');

        //console.log("processType", this.processType);
        //console.log("showUsername", this.showUsername)
        this.getPreviewDetails();
    }

    ionViewDidLoad()
    {
        this.navBar.backButtonClick = (e: UIEvent) =>
        {   /// add this event
            this.navCtrl.getPrevious().data.submitStatus = 'false'
            this.navCtrl.getPrevious().data.title = 'Preview'
            this.navCtrl.getPrevious().data.kraId = '-1'
            this.navCtrl.pop();
        };


    }
    // ionViewWillEnter() {

    //     if (!this.utilitiy.isEmptyOrNullOrUndefined(this.navParams.get('submitStatus')) && this.navParams.get('submitStatus') == 'true' && this.userRole == '3') {
    //         // this.navCtrl.remove(3,1);
    //         this.navCtrl.popTo('ZendeavorReviewerListPage');
    //     }
    // }

    ionViewWillExit()
    {
    }

    /**
     * Api call for REVIEW DETAILS i.e appraisal details
     */
    getPreviewDetails()
    {
        let previewData = {
            url: this.previewUrl,
            zenDeavorURL: true,
            data: {
                "userId": this.userID,
                "role": this.userRole,
                "processType": this.processType,
                "isDirectApprove": this.isDirectApproveStatus
            }
        }

        this.httpProvider.http.commonService(previewData).subscribe((res: any) =>
        {
            this.utilitiy.updateLoader(false)
            this.previewResponse = res.details
            this.kraListDetails = res.details.kraList
            this.finalStatus = res.details.finalStatus
            this.managerComments = res.details.managerComment
            this.scoreList = this.previewResponse.scoreList
            this.consentStatus = this.previewResponse.isConsetPending
            this.cmmtData = this.managerComments
        }, (err) =>
        {
            this.utilitiy.updateLoader(false)
        })
    }

    selectConsent(type, status)
    {
        if (this.finalStatus == 'PENDING FOR TWO UP CONSENT')
        {
            this.appraiserDiscussionmodel = false
            this.reviewerdiscusionReqmodel = false

        }
        this.isapprove = status
        if (type == 'agree')
        {
            this.presentConfirm(type)
        } else
        {
            this.openConsentModal(type)
        }
    }

    openConsentModal(type: any)
    {
        let kraConsentModal = this.modalCtrl.create(KraConsentComponent, {
            'data': {
                typeOfConsent: type,
                userID: this.userID,
                processType: this.processType,
                appraiserDiscussion: this.appraiserDiscussionmodel == true ? 1 : 0,
                reviewerDiscussion: this.reviewerDiscussionModel == true ? 1 : 0,
                reviewerRequiredDiscussion: this.reviewerdiscusionReqmodel == true ? 1 : 0


            }
        }, { cssClass: 'kra-training-modal' })
        kraConsentModal.onDidDismiss((response: any) =>
        {
            if (!this.utilitiy.isEmptyOrNullOrUndefined(response) && response == 'DATA_SUBMITTED')
            {
                this.navCtrl.pop()
            }
        })

        kraConsentModal.present()
    }

    editKra(clickedKra)
    {
        if (this.isTeamlist)
        {
            this.editKraforReviewer(clickedKra)
        }
        else
        {
            this.navCtrl.getPrevious().data.submitStatus = 'false'
            this.navCtrl.getPrevious().data.kraId = clickedKra.kraId
            if (clickedKra.kraId == '-2')
            {
                this.navCtrl.getPrevious().data.title = clickedKra.kraTitle
            }
            else
            {
                this.navCtrl.getPrevious().data.title = 'KRA'
            }
            this.navCtrl.pop()
        }

    }

    /**
    * Api call for submit Appraisal
    */
    submitAppraisal()
    {
        this.utilitiy.updateLoader(true)
        let submitData = {
            // zenDeavorURL: this.url
            url: this.submitUrl,
            zenDeavorURL: true,
            data: {
                "userId": this.userID,
                "role": this.userRole,
                "performanceDetail": this.cmmtData,
                "processType": this.processType,
                "isDirectApprove": this.isDirectApproveStatus
            }
        }

        this.httpProvider.http.commonService(submitData).subscribe((res: any) =>
        {
            this.utilitiy.updateLoader(false)
            if (!this.utilitiy.isEmptyOrNullOrUndefined(res) && !this.utilitiy.isEmptyOrNullOrUndefined(res.status)
                && !this.utilitiy.isEmptyOrNullOrUndefined(res.status.statusCode) && res.status.statusCode == 1)
            {
                this.navCtrl.getPrevious().data.submitStatus = "true";
                this.navCtrl.pop();
                // this.utilitiy.presentAlert("Thank you for submitting your appraisal.").then(()=>{
                //     this.navCtrl.pop();
                // })

            }
        }, (err) =>
        {
            this.utilitiy.updateLoader(false)
        })
    }

    presentConfirm(type)
    {
        var buttonsArray = [{
            text: 'No',
            role: 'cancel',
            handler: () =>
            {
            }
        }, {
            text: 'Yes',
            handler: () =>
            {
                if (type == 'agree')
                {
                    this.agreeConsent()
                } else
                {
                    this.submitAppraisal()
                }
            }
        }];

        if (this.userRole == '2' || this.userRole == '3')
        {
            if (this.cmmtData == '' || this.cmmtData == null || this.cmmtData == undefined)
            {
                this.utilitiy.presentAlert('Please fill the comments')
                return
            }
        }

        if (this.userRole == '2')
        {
            let appraiserScore = parseInt(this.previewResponse.appraiserScore);

            if (appraiserScore < 60)
            {
                let alert = this.alertCtrl.create({
                    subTitle: 'Are you sure you want to submit?',
                    message: 'PIP will be initiated through the system if the final score of the associate is below 60.',
                    buttons: buttonsArray
                })
                alert.present()
            } else
            {
                let alert = this.alertCtrl.create({
                    message: 'Are you sure you want to submit?',
                    buttons: buttonsArray
                })
                alert.present()
            }
        } else
        {
            let alert = this.alertCtrl.create({
                message: 'Are you sure you want to submit?',
                buttons: buttonsArray
            })
            alert.present()
        }
    }

    /**
     * submit Consent------Agree
     * called when agree is clicked
     */
    agreeConsent()
    {


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
                "processType": this.processType,
                // "reviewerDiscussion": "",
                "appraiserDiscussion": this.appraiserDiscussionmodel == true ? 1 : 0,
                "reviewerDiscussion": this.reviewerDiscussionModel == true ? 1 : 0,
                "reviewerRequiredDiscussion": this.reviewerdiscusionReqmodel == true ? 1 : 0

            }
        }

        this.httpProvider.http.commonService(data).subscribe((res: any) =>
        {
            this.utilitiy.updateLoader(false)
            this.utilitiy.presentAlert(res['status'].statusMessage).then(response =>
            {
                if (!this.utilitiy.isEmptyOrNullOrUndefined(res) && !this.utilitiy.isEmptyOrNullOrUndefined(res.status)
                    && !this.utilitiy.isEmptyOrNullOrUndefined(res.status.statusCode) && res.status.statusCode == 1)
                {
                    if (this.userRole == '1')
                    {
                        this.navCtrl.pop();
                    }
                }
            })
        }, (err) =>
        {
            this.utilitiy.updateLoader(false)
        })
    }

    showSubmitEditForEmp()
    {
        return !this.consentStatus && this.userRole == '1' && (this.finalStatus == 'PENDING TO SUBMIT'
            || this.finalStatus == 'REDIRECT BY APPRAISER') && !this.isAppraisalDateExpired;
    }

    showSubmitEditForMgr()
    {
        return !this.consentStatus && this.userRole == '2' && (this.finalStatus == 'PENDING AT APPRAISER' || this.finalStatus == 'Pending With 1up For Moderation') && !this.isAppraisalDateExpired;
    }

    showSubmitEditForReviewer()
    {
        return !this.consentStatus && this.userRole == '3' && (this.finalStatus == 'PENDING AT REVIEWER' || this.finalStatus == 'Pending With 2up For Moderation') && !this.isAppraisalDateExpired;
    }

    editKraforReviewer(item)
    {
        //console.log("editKraforReviewer item", item)
        let KRAtitle
        if (item.kraId == '-2')
            KRAtitle = item.kraTitle
        else
            KRAtitle = 'KRA'
        this.navCtrl.pop()
        // if (this.isDirectApproveStatus) {
        this.navCtrl.push('ZenDeavorKraPage', {
            role: this.userRole,
            kraType: this.processType,
            userID: this.userID,
            kraId: item.kraId,
            title: KRAtitle,
            submitStatus: 'false'
            // showWhenData:true,
            // isDirectApprove:true

            // userId: "51424",
            // kraId: "-2",
            // subKraId: "1432011",


        })
        // }
        // else {
        //     this.navCtrl.push('ZenDeavorKraPage', {
        //         role: this.userRole,
        //         kraType: this.processType,
        //         userID: this.userID,
        //         kraId: item.kraId,
        //         title: KRAtitle,
        //         submitStatus: 'false'

        //     })
        // }
    }


    // updateCheckbox(selectedvalue) {
    //     console.log("selectedvalue", selectedvalue)
    //     this.appraiserDiscussionmodel = selectedvalue == true ? true : false
    // }

    hideFooter()
    {
        // return this.finalStatus == 'CLOSED' || this.finalStatus == 'COMPLETED' || this.userRole == '1' && (this.finalStatus == 'Pending With 2up For Moderation' 
        // ||this.finalStatus =='Pending With 1up For Moderation' || this.finalStatus== 'PENDING AT APPRAISER')
        if (this.finalStatus == 'CLOSED' || this.finalStatus == 'COMPLETED')
            return true
        else if (this.userRole == '1')
        {
            if (this.isExpired || this.finalStatus == 'Pending With 2up For Moderation' || this.finalStatus == 'Pending With 1up For Moderation' || this.finalStatus == 'PENDING AT APPRAISER' || this.finalStatus == 'PENDING AT REVIEWER' || this.finalStatus == 'PENDING FOR CLOSE')
                return true
        }
        else
            return false

    }

    openDetails(data)
    {
        console.log(data);
        let modalCtrl = this.modalCtrl.create(PromotionDetailsComponent, { 'promotionDetails': data, 'isComingfromPreview': true }, {
            cssClass: 'infoModal',
            enableBackdropDismiss: true,
            showBackdrop: true,
        })
        modalCtrl.present();
    }

}
