import { Component } from '@angular/core';
import { ViewController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { NavController } from 'ionic-angular/navigation/nav-controller';
/**
 * Generated class for the KraConsentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'kra-consent',
  templateUrl: 'kra-consent.html'
})
export class KraConsentComponent {

  consentType: any;
  private url: string = "appraisalConsent";
  private consentUrlForGoals: string = "kraConsent";
  private cmmtData: string = "";
  private userID: any;
  private processType: any;
  private appraiserDiscussion: any
  private reviewerDiscussion: any
  private reviewerRequiredDiscussion: any
  showBtnForGoalspage: boolean = false
  private userRole: any
  private year: any

  constructor(private navCtrl: NavController, private navParams: NavParams, private httpProvider: HttpProvider, private popoverCtrl: PopoverController,
    private modalCtrl: ModalController, private utilitiy: CommonUtilities, private viewCtrl: ViewController) {
    /**
     * getting params from preview page
     */
    this.consentType = this.navParams.get('data').typeOfConsent
    this.userID = this.navParams.get('data').userID
    this.processType = this.navParams.get('data').processType
    this.appraiserDiscussion = this.navParams.get('data').appraiserDiscussion
    this.reviewerDiscussion = this.navParams.get('data').reviewerDiscussion
    this.reviewerRequiredDiscussion = this.navParams.get('data').reviewerRequiredDiscussion

    this.showBtnForGoalspage = this.navParams.get('data').isGoalsConsent
    this.userRole = this.navParams.get('data').userRole
    this.year = this.navParams.get('data').krayear


  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

  submit(comment, consent) {


    this.cmmtData = comment;

    if (this.utilitiy.isEmptyOrNullOrUndefined(this.cmmtData)) {
      this.utilitiy.presentAlert("Please fill the comments")
      return
    }
    this.utilitiy.updateLoader(true)

    let data = {
      // zenDeavorURL: this.url
      url: this.url,
      zenDeavorURL: true,
      data: {
        "consentRemark": this.cmmtData,
        "consentId": consent,
        // "appraiserDiscussion": 1,
        "userId": this.userID,
        "processType": this.processType,
        "appraiserDiscussion": 0,
        "reviewerDiscussion": 0,
        "reviewerRequiredDiscussion": 0
      }
    }

    this.httpProvider.http.commonService(data).subscribe((res) => {
      this.utilitiy.updateLoader(false)
      this.utilitiy.presentAlert(res['status'].statusMessage).then(()=>{
        this.dismiss('DATA_SUBMITTED');
      })
     
    }, (err) => {
      this.utilitiy.updateLoader(false)
    })
  }

  submitConsentForGoals(comment, consentType) {
    this.cmmtData = comment;
    if (this.utilitiy.isEmptyOrNullOrUndefined(this.cmmtData)) {
      this.utilitiy.presentAlert("Please fill the comments")
      return
    }

    this.utilitiy.updateLoader(true)


    let data = {
      // zenDeavorURL: this.url
      url: this.consentUrlForGoals,
      zenDeavorURL: true,
      data: {
        "consentRemark": this.cmmtData,
        "consentId": consentType,
        // "appraiserDiscussion": 1,
        "userId": this.userID,
        "year": this.year,
        "role": this.userRole,
        "appraiserDiscussion": 0,
        // "reviewerDiscussion": 0,
        // "reviewerRequiredDiscussion":0
      }
    }



    this.httpProvider.http.commonService(data).subscribe((res) => {
      this.utilitiy.updateLoader(false)
      this.utilitiy.presentAlert(res['status'].statusMessage).then(()=>{
        this.dismiss('DATA_SUBMITTED');
      })
      
    }, (err) => {
      this.utilitiy.updateLoader(false)
    })

  }
}
