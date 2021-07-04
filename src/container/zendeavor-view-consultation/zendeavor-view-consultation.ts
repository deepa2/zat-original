import { ViewChild, ViewChildren, QueryList } from '@angular/core';
import { PopoverController, TextInput } from 'ionic-angular';
import { CommonUtilities } from './../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from './../../providers/http/http';
import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import * as moment from 'moment';


/**
 * Generated class for the ZendeavorViewConsultationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zendeavor-view-consultation',
  templateUrl: 'zendeavor-view-consultation.html',
})
export class ZendeavorViewConsultationPage {
  private viewonsultUrl = 'viewConsultation'
  private userID: any
  private kraType: any
  private userRole: any
  private consultFrom: any
  private conversationList: any = []
  private userDetails: any
  private loggedInUserID: any
  private mainKey: any
  private consultTo: any
  private submitConsultUrl = 'submitConsultation'
  private submitResponse: any
  private showLoader: any = true
  @ViewChildren('feedbackTextRef') feedbackTextRef: QueryList<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider, private popoverCtrl: PopoverController,
    private modalCtrl: ModalController, private utilitiy: CommonUtilities, private data: Data, public element: ElementRef) {
    this.userID = this.navParams.get('userID') || null
    this.userRole = this.navParams.get('userRole') || null
    this.kraType = this.navParams.get('kraType') || null
    this.consultFrom = this.navParams.get('main_key') || null
    this.mainKey = this.navParams.get('main_key') || null




    this.data.getData('loginDetails').then((userInfo: any) => {
      this.userDetails = userInfo.details.userDetails
      //console.log("userdetails", this.userDetails)
      //console.log("userdetails", userInfo)
      this.loggedInUserID = this.userDetails.userId
      //console.log("loggedInUserID", this.loggedInUserID)
      if (!this.utilitiy.isEmptyOrNullOrUndefined(this.loggedInUserID))
        this.getConsultationDetails()

    })
  }

  ionViewDidLoad() {
    // this.getConsultationDetails()
    //console.log('ionViewDidLoad ZendeavorViewConsultationPage');
  }


  getConsultationDetails() {
    if (this.showLoader)
      this.utilitiy.updateLoader(true)
    let teamListUrl = {

      url: this.viewonsultUrl,
      zenDeavorURL: true,
      data: {
        "userId": this.userID,
        "role": this.userRole,
        "processType": this.kraType,
        // "consultFrom": 53538
      }
    }

    this.httpProvider.http.commonService(teamListUrl).subscribe((res) => {
      if (this.showLoader)
        this.utilitiy.updateLoader(false)
      if (!this.utilitiy.isEmptyOrNullOrUndefined(res['details'])) {
        this.conversationList = res['details']['consultFromList']

        //console.log("conversationList", this.conversationList)
      }

    }, (err) => {
      this.utilitiy.updateLoader(false)
    })
  }


  adjustHeight(event, reference) {
    for (let index = 0; index < this.conversationList.length; index++) {
      // const element = array[index];
      const textArea = this.element.nativeElement.getElementsByTagName('textarea')[index];
      // //console.log(this.element.nativeElement)
      // //console.log("reference", reference.value)

      textArea.style.overflow = 'hidden';
      textArea.style.height = 'auto';
      textArea.style.height = textArea.scrollHeight + 'px';

    }

  }

  submitConsultation(message, chatDetail) {
    //console.log("feedback", this.feedbackTextRef.toArray())

    // // this.feedbackTextRef = message
    // for (let index = 0; index < this.conversationList.length; index++) {
    //   const textArea = this.feedbackTextRef[index].value;
    //   console.log(textArea)
    //   // textArea.feedbackTextRef=""
    // }

    if (this.utilitiy.isEmptyOrNullOrUndefined(message)) {
      this.utilitiy.presentAlert("Please enter the message")
      return

    }
    this.utilitiy.updateLoader(true)
    let submitParams = {

      url: this.submitConsultUrl,
      zenDeavorURL: true,
      data: {
        "userId": this.userID,
        "main_key": chatDetail.main_key,
        "processType": this.kraType,
        "consultTo": chatDetail.consultTo,
        "role": this.userRole,
        "consultationReqMessage": message,
        "request_type": "requested"
      }
    }

    this.httpProvider.http.commonService(submitParams).subscribe((res) => {
      this.utilitiy.updateLoader(false)
      this.submitResponse = res['status']
      if (this.submitResponse.statusCode == '1' && !this.utilitiy.isEmptyOrNullOrUndefined(this.submitResponse)) {
        // this.feedbackTextRef['value'] = ''
        let array = this.feedbackTextRef.toArray()
        array.forEach(element => {
          element.value = ''
        });
        this.utilitiy.presentAlert(this.submitResponse.statusMessage)
        this.showLoader = false
        this.getConsultationDetails()
      }
      // this.submittedList = this.consultationList['submittedList']

    }, (err) => {
      this.utilitiy.updateLoader(false)
    })
  }


  dateConversion(input) {
    let date = moment(input).format('D MMM YYYY h:mma');
    return date;
  }
}
