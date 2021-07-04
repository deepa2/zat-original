import { ViewController } from 'ionic-angular/navigation/view-controller';
import { NavParams } from 'ionic-angular';
import { HttpProvider } from './../../providers/http/http';
import { CommonUtilities } from './../../providers/commonUtilities/commonUtilities';
import { Component } from '@angular/core';
import * as moment from 'moment';


/**
 * Generated class for the SouthAfricaImmigrationComplianceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'south-africa-immigration-compliance',
  templateUrl: 'south-africa-immigration-compliance.html'
})
export class SouthAfricaImmigrationComplianceComponent {

  private text: string;
  private checkBoxValue: boolean = false;
  private requestUrl: string = "getSaAgreement";
  private userDetails: any
  private detailList: any = []
  private submitAgreementUrl: string = 'submitSaAgreement';
  private htmlData: any;
  private submittedDateTime: any;
  private userName: any
  private agreementDate: any
  private leavePageOnBackbtn: boolean = false;



  constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private navParams: NavParams, private viewCtrl: ViewController) {
    this.userDetails = this.navParams.get('userDetails')
    if (!this.utility.isEmptyOrNullOrUndefined(this.userDetails)) {
      this.userName = this.userDetails.employeeName
    }
    this.getSaAgreementDetails();

  }
  checkboxParentClicked() {
    console.log(this.checkBoxValue)
    this.checkBoxValue = !this.checkBoxValue;
    console.log(this.checkBoxValue)

  }
  getSaAgreementDetails() {
    this.utility.updateLoader(true)
    let assetData = {
      url: this.requestUrl,
      miscellaneous: true,
      data: {},
    }
    this.httpProvider.http.commonService(assetData).subscribe((response: any) => {

      if (response) {
        this.utility.updateLoader(false)

        if (response && response['details']) {
          this.detailList = response['details'];
          console.log("detailList", this.detailList);
          this.htmlData = this.detailList.htmlContent;
          this.agreementDate = this.detailList.agreementDate;
          if (!this.utility.isEmptyOrNullOrUndefined(this.agreementDate)) {
            this.submittedDateTime = moment(this.detailList.agreementDate).format('DD-MMM-YYYY, h:mm a');
          }


        }
      }
    }, (err) => {
      this.utility.updateLoader(false)
      this.utility.showAlert('SAImmigration', "Something went wrong; \n please try again later")
    })

  }
  submitAgreement() {
    this.utility.updateLoader(true)
    let assetData = {
      url: this.submitAgreementUrl,
      miscellaneous: true,
      data: {},
    }
    this.httpProvider.http.commonService(assetData).subscribe((response: any) => {

      if (response) {
        this.utility.updateLoader(false)

        if (response && response.status && response.status.statusCode == 1) {
          this.utility.presentAlert("Thank you for submitting your response").then(() => {
            this.leavePageOnBackbtn = true;
            this.viewCtrl.dismiss('dismiss');
          })

        }
      }
    }, (err) => {
      this.utility.updateLoader(false)
      this.utility.showAlert('SAImmigration', "Something went wrong; \n please try again later")
    })

  }
  ionViewCanLeave() {

    return this.leavePageOnBackbtn

  }
}
