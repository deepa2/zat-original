import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../providers/http/http';
import * as moment from 'moment';

/**
 * Generated class for the ZenlearnOnTheJobComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'zenlearn-on-the-job',
  templateUrl: 'zenlearn-on-the-job.html'
})
export class ZenlearnOnTheJobComponent {

  text: string;
  onTheJobData: any;
  dapId;
  role;
  comments: string;
  dapStatus: string;

  constructor(private viewCtrl: ViewController, private navParams: NavParams, private utilities: CommonUtilities, private http: HttpProvider) {
    let wholeDapDetails = this.navParams.get('zenLearnData')
    console.log(wholeDapDetails);
    this.onTheJobData = wholeDapDetails.dapDetails;
    this.dapId = wholeDapDetails.selectedDapId;
    this.role = wholeDapDetails.role;
    this.dapStatus = wholeDapDetails.dapStatus;
    console.log(this.onTheJobData);
  }

  close() {
    this.viewCtrl.dismiss();
  }

  markComplete() {
    let data = {
      url: 'getMarkComplete',
      data: {
        role: this.role,
        category: this.onTheJobData.sectionTitle,
        dapId: this.dapId,
        userComment: this.comments,
        isRejected: false
      },
      zenLearn: true
    }
    this.utilities.updateLoader(true);
    this.http.http.commonService(data).subscribe((response: any) => {
      console.log(response)
      this.utilities.updateLoader(false);
      if (response && response.status) {
        if (response.status.statusCode == 1) {
          this.utilities.presentAlert("On the job submitted. Completion status is dependent on manager's approval").then(() => {
            this.viewCtrl.dismiss();
          })

        }
      }
    },
      error => {
        this.utilities.updateLoader(false);
      })
  }

  approveReject(type) {
    if (this.comments) {
      let message: string;
      if (type) {
        message = 'Rejected Successfully'
      } else {
        message = 'Approved Successfully'
      }
      this.utilities.updateLoader(true);
      let data = {
        url: 'getMarkComplete',
        data: {
          role: this.role,
          category: this.onTheJobData.sectionTitle,
          dapId: this.dapId,
          userComment: this.comments,
          isReject: type
        },
        zenLearn: true
      }
      this.http.http.commonService(data).subscribe((response: any) => {
        console.log(response)
        this.utilities.updateLoader(false);
        if (response && response.status) {
          if (response.status.statusCode == 1) {
            this.utilities.presentAlert(message).then(() => {

              this.viewCtrl.dismiss(type);
            })

          }
        }
      }, error => {
        this.utilities.updateLoader(false);
      })
    } else {
      this.utilities.presentAlert("Please enter comments");
    }

  }

  getStatus(item, data) {
    let statusValue = data.lov.filter((dataObj) => {
      if (dataObj.key == item)
        return dataObj;
    });
    return statusValue[0].value;
  }

  dateConversion(input) {
    let date = moment(input).format('D-MMM-YYYY');
    return date;
  }
}
