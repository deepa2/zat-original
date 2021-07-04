import { Data } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular'
import { HttpProvider } from '../../providers/http/http'
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'
import { ZenDeavorDashboardPage } from '../zen-deavor-dashboard/zen-deavor-dashboard';
import * as moment from 'moment';


/**
 * Generated class for the ZendeavorConsultationRequestDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zendeavor-consultation-request-detail',
  templateUrl: 'zendeavor-consultation-request-detail.html',
})
export class ZendeavorConsultationRequestDetailPage {
  private userID: any
  private kraType: any
  private userRole: any
  private url: string = 'consultationDetails'
  private consultationDetails: any = []
  private mainKey: any
  private submitConsultUrl = 'submitConsultation'
  private feedbackMsg: string = ''
  private consultTo: any
  private userDetails: any
  private loggedInUserID: any
  private isReadOnly: any
  private submitResponse: any
  private showSuccessMsg: boolean = false


  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider, private popoverCtrl: PopoverController,
    private modalCtrl: ModalController, private utilitiy: CommonUtilities, private data: Data) {
    this.userID = this.navParams.get('userID') || null
    this.userRole = this.navParams.get('userRole') || null
    this.kraType = this.navParams.get('kraType') || null
    this.mainKey = this.navParams.get('main_key') || null
    this.isReadOnly = this.navParams.get('isReadonly') || false

    this.data.getData('loginDetails').then((userInfo: any) => {
      this.userDetails = userInfo.details.userDetails
      ////console.log("userdetails", this.userDetails)
      //console.log("userdetails", userInfo)
      this.loggedInUserID = this.userDetails.userId
      //console.log("loggedInUserID", this.loggedInUserID)
      if (!this.utilitiy.isEmptyOrNullOrUndefined(this.loggedInUserID))
        this.getConsultationDetails()

    })
  }

  ionViewDidLoad() {
    // this.getConsultationDetails()
  }

  getConsultationDetails() {
    this.utilitiy.updateLoader(true)
    let consultparams = {
      // zenDeavorURL: this.url
      url: this.url,
      zenDeavorURL: true,
      data: {
        "userId": this.userID,
        "main_key": this.mainKey,
        "processType": this.kraType,
        // "isTeamList": false
      }
    }

    this.httpProvider.http.commonService(consultparams).subscribe((res) => {
      this.utilitiy.updateLoader(false)
      if (!this.utilitiy.isEmptyOrNullOrUndefined(res['details'])) {
        this.consultationDetails = res['details']
        // this.submittedList = this.consultationList['submittedList']
        this.consultTo = this.consultationDetails['consultTo']

      }

    }, (err) => {
      this.utilitiy.updateLoader(false)
    })
  }


  submitConsultation() {
    if (this.utilitiy.isEmptyOrNullOrUndefined(this.feedbackMsg)) {
      this.utilitiy.presentAlert("Please enter the message")
      return

    }
    this.utilitiy.updateLoader(true)
    let submitParams = {
      // zenDeavorURL: this.url
      url: this.submitConsultUrl,
      zenDeavorURL: true,
      data: {
        "userId": this.userID,
        "main_key": this.mainKey,
        "processType": this.kraType,
        "consultTo": this.consultTo,
        "role": this.userRole,
        "consultationReqMessage": this.feedbackMsg,
        "request_type": "responded"
      }
    }

    this.httpProvider.http.commonService(submitParams).subscribe((res) => {
      this.utilitiy.updateLoader(false)
      this.submitResponse = res['status']
      if (this.submitResponse.statusCode == '1' && !this.utilitiy.isEmptyOrNullOrUndefined(this.submitResponse)) {
        this.utilitiy.presentAlert(this.submitResponse.statusMessage).then(res => {
          this.navCtrl.pop()
        })
        // this.showSuccessMsg = true
      }
      // this.submittedList = this.consultationList['submittedList']

    }, (err) => {
      this.utilitiy.updateLoader(false)
    })
  }

  gotoDashboard() {
    this.navCtrl.pop()
    this.navCtrl.push('ZenDeavorDashboardPage')
  }

  dateConversion(input) {
    let date = moment(input).format('D MMM YYYY h:mma');
    return date;
  }
}
