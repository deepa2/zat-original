import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular'
import { HttpProvider } from '../../providers/http/http'
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'
import * as moment from 'moment';


/**
 * Generated class for the ZendeavorAssociateListForConsultationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zendeavor-associate-list-for-consultation',
  templateUrl: 'zendeavor-associate-list-for-consultation.html',
})
export class ZendeavorAssociateListForConsultationPage {
  private statusModel: string = 'requested'
  private url: any = "consultationList"
  private requestedList: any = []
  private submittedList: any = []
  private userID: any
  private kraType: any
  private userRole: any
  private consultationRespList: any = []
  private consultationList: any = []
  private requestedListCount: any = 0
  private submittedListCount: any = 0
  private showNoDataMsg: boolean = false
  private isReadonly: boolean = false


  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider, private popoverCtrl: PopoverController,
    private modalCtrl: ModalController, private utilitiy: CommonUtilities) {
    this.userID = this.navParams.get('userID') || null
    this.userRole = this.navParams.get('userRole') || null
    this.kraType = this.navParams.get('kraType') || null
  }

  ionViewDidLoad() {

  }

  ionViewWillEnter() {
    // this.utilitiy.updateLoader(true)
    this.getConsultationList()

  }



  /**
 * Api call to  retrieve consultation list data
 */
  getConsultationList() {
    this.utilitiy.updateLoader(true)
    let teamListUrl = {
      // zenDeavorURL: this.url
      url: this.url,
      zenDeavorURL: true,
      data: {
        "userId": this.userID,
        "role": this.userRole,
        "processType": this.kraType,
        // "isTeamList": false
      }
    }

    this.httpProvider.http.commonService(teamListUrl).subscribe((res) => {
      this.utilitiy.updateLoader(false)

      if (!this.utilitiy.isEmptyOrNullOrUndefined(res['details'])) {
        this.consultationRespList = res['details']
        this.submittedList = this.consultationRespList['submittedList']
        this.requestedList = this.consultationRespList['requestedList']
        this.requestedListCount = 0
        this.submittedListCount = 0
        if (this.statusModel == 'requested')
          this.consultationList = this.requestedList
        else
          this.consultationList = this.submittedList
        if (!this.utilitiy.isEmptyOrNullOrUndefined(this.requestedList))
          this.requestedListCount = this.requestedList.length
        if (!this.utilitiy.isEmptyOrNullOrUndefined(this.submittedList))
          this.submittedListCount = this.submittedList.length
      }

    }, (err) => {
      this.utilitiy.updateLoader(false)
    })
  }

  openConsultationDetail(userDetails) {
    if (this.statusModel == 'submitted')
      this.isReadonly = true

    this.navCtrl.push('ZendeavorConsultationRequestDetailPage', {
      userID: userDetails.employeeId,
      userRole: this.userRole,
      kraType: this.kraType,
      main_key: userDetails.main_key,
      isReadonly: this.isReadonly
    })

  }
  onSegmentChanged(event, segmentName) {
    if (segmentName == 'requested')
      this.consultationList = this.requestedList
    else
      this.consultationList = this.submittedList
  }

  dateConversion(input) {
    let date = moment(input).format('D MMM YYYY');
    return date;
  }
}
