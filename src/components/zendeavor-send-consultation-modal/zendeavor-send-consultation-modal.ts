import { NavParams, ViewController } from 'ionic-angular';
import { HttpProvider } from './../../providers/http/http';
import { CommonUtilities } from './../../providers/commonUtilities/commonUtilities';
import { ModalController } from 'ionic-angular';
import { Component } from '@angular/core';
import { SearchAssociatesConsultationModalComponent } from '../../components/search-associates-consultation-modal/search-associates-consultation-modal';

/**
 * Generated class for the ZendeavorSendConsultationModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'zendeavor-send-consultation-modal',
  templateUrl: 'zendeavor-send-consultation-modal.html'
})
export class ZendeavorSendConsultationModalComponent {

  private associateDetailsList: any = []
  private consultationMessage: string = ''
  private consultationUrl: string = 'submitConsultation'
  private userID: any
  private processType: any
  private role: any

  constructor(private modalCtrl: ModalController, private utility: CommonUtilities, private httpProvider: HttpProvider, private navParams: NavParams, private viewCtrl: ViewController) {
    if (!this.utility.isEmptyOrNullOrUndefined(this.navParams)) {
      this.userID = this.navParams.get('userData')
      this.processType = this.navParams.get('processType')
      this.role = this.navParams.get('role')
    }

  }

  openAssociateSearchModal() {
    let associateSearchModal = this.modalCtrl.create(SearchAssociatesConsultationModalComponent, {
    }, {});
    associateSearchModal.present()
    associateSearchModal.onDidDismiss((response: any) => {
      if (!this.utility.isEmptyOrNullOrUndefined(response)) {
        console.log("associateData", response)
        this.associateDetailsList=[]
        this.associateDetailsList.push(response);
      }
    })
  }

  deleteAssociate(associateData, index) {
    console.log(associateData)
    console.log(index)
    if (!this.utility.isEmptyOrNullOrUndefined(associateData)) {
      this.associateDetailsList.splice(index, 1)
      this.utility.presentToast("Associate deleted successfully")

    }

  }

  checkMsgAndAsscociateData() {
    if (this.utility.isEmptyOrNullOrUndefined(this.consultationMessage)) {
      this.utility.presentAlert("Please enter the message")
      return
    }

    else if (this.utility.isEmptyOrNullOrUndefined(this.associateDetailsList)) {
      this.utility.presentAlert("Please select associate for consultation")
      return
    }

    else {
      this.sendConsultationService()
    }
  }

  sendConsultationService() {
    this.utility.updateLoader(true)

    let userIDArray = []

    this.associateDetailsList.forEach(userItem => {
      userIDArray = userItem.employeeId
    })
    console.log("associate id", userIDArray)
    let reviewerParams = {
      // zenDeavorURL: this.url
      url: this.consultationUrl,
      zenDeavorURL: true,
      data: {
        "processType": this.processType,
        "userId": this.userID,
        "consultTo": userIDArray,
        "role": this.role,
        "consultationReqMessage": this.consultationMessage,
        "main_key":"",
        "request_type":"requested"
      }
    }

    this.httpProvider.http.commonService(reviewerParams).subscribe((res) => {
      this.utility.updateLoader(false)

      console.log(res)
      if (!this.utility.isEmptyOrNullOrUndefined(res)) {
        if (res['status']['statusCode'] == 1) {
          this.utility.presentAlert(res['status'].statusMessage).then((res) => {
            this.viewCtrl.dismiss()

          })
        }
      }
    }, (err) => {
      this.utility.updateLoader(false)
    })

  }
}
