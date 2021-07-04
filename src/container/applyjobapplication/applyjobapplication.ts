import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';



/**
 * Generated class for the ApplyjobapplicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-applyjobapplication',
  templateUrl: 'applyjobapplication.html',

})
export class ApplyjobapplicationPage {

  url: string = "jobApplication";
  applyJobUrl: string = 'applyRequisition';
  jobDetails: Array<any> = [];
  selectedJobCode: any;
  associateDetails: Array<any> = [];
  linkedInUrl: string = '';
  associateSummary: string = '';
  wholeData: any;


  constructor(private navCtrl: NavController, private navParams: NavParams, private httpProvider: HttpProvider, private utility: CommonUtilities) {
    this.selectedJobCode = this.navParams.get('data');
  }

  ionViewDidLoad() {
    this.getJobApplicationDetails();
  }
  getJobApplicationDetails() {
    this.utility.updateLoader(true)
    let params = {
      url: this.url,
      data: {
        "jobCode": this.selectedJobCode.selectedJobCode
      },
      ijp: true
    }
    this.httpProvider.http.commonService(params).subscribe((res: any) => {
      if (res && res.details) {
        // this.jobDetails = res.details.jobDetails;
        // this.associateDetails = res.details.associateDetails;
        this.wholeData = res.details;


      }
      this.utility.updateLoader(false)
    },
      error => {
        this.utility.updateLoader(false);
      })
  }

  submitForm() {
    this.wholeData.associateDetails.filter(item => {
      if (item.bindWith == "linkedInUrl") {
        if (item.titleValue != '' && item.titleValue != null) {
          this.linkedInUrl = item.titleValue
        }
      }
      if (item.bindWith == "additionalDetails") {
        if (item.titleValue != '' && item.titleValue != null) {
          this.associateSummary = item.titleValue
        }
      }
    })


    this.utility.updateLoader(true);
    let formData = {
      url: this.applyJobUrl,
      data: {
        "jobCode": this.selectedJobCode.selectedJobCode,
        "linkedInUrl": this.linkedInUrl,
        "associateSummary": this.associateSummary
      },
      ijp: true
    }

    this.httpProvider.http.commonService(formData).subscribe((response: any) => {
      this.utility.updateLoader(false)
      if (response) {
        if (response.status.statusCode == 1) {
          this.utility.presentAlert("Congratulations!<br> You have successfully applied for this job.You will receive email notifications for the next steps.").then(() => {

            // this.store.dispatch(new fromStore.GetInternalJobPostingAction(this.internalJobPostingurl, params));

            this.navCtrl.push('InternalJobPostingPage');
            this.navCtrl.remove(this.navCtrl.getActive().index - 2, 3)


          })
        }
      }
    },
      error => {
        this.utility.updateLoader(false)
      }

    )
  }

  showLinkdinProfile() {
    this.wholeData.associateDetails.filter(item => {
      if (item.bindWith == "linkedInUrl") {
        if (item.titleValue != '' && item.titleValue != null) {
          this.utility.openWithSystemBrowser(item.titleValue)
        }
      }
    })


  }

}
