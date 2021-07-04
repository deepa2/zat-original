import { Component } from '@angular/core';
import { HttpProvider } from '../../providers/http/http';
import { PopoverController, ViewController } from 'ionic-angular';


/**
 * Generated class for the ZendeavorKraReviewModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'zendeavor-kra-review-modal',
  templateUrl: 'zendeavor-kra-review-modal.html'
})
export class ZendeavorKraReviewModalComponent {

  userID: string
  previewUrl: string = "getApprisalDeatils";
  previewResponse: any;
  kraListDetails: any = [];

  constructor(private httpProvider: HttpProvider, private popoverCtrl: PopoverController, private viewCtrl: ViewController) {
    this.getPreviewDetails();
  }

  /**
   * Api call for REVIEW DETAILS i.e appraisal details
   */
  getPreviewDetails() {
    // this.utilities.hideLoading();
    let previewData = {
      // zenDeavorURL: this.url
      url: this.previewUrl,
      zenDeavorURL: true,
      data: {
        "userId": this.userID
      }
    }

    this.httpProvider.http.commonService(previewData).subscribe((res) => {
      this.previewResponse = res['details']
      this.kraListDetails = res['details'].kraList
    }, (err) => {
      // this.utilities.hideLoading();
    })
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
