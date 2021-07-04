import { Component, Renderer } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'

/**
 * Generated class for the ApprovalTimesheetPendingModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'approval-timesheet-pending-modal',
  templateUrl: 'approval-timesheet-pending-modal.html'
})
export class ApprovalTimesheetPendingModalComponent {

  // sactionUrl: String = "/api/dashboard/zents-dashboard-service/v1/sanctiontimesheets";
  private selectedItem: any;
  private commentText: String = "";
  private flags = {
    isCommentRequired : false,
    fromRejectTs : false
  }

  constructor(public params: NavParams, private viewCtrl: ViewController, private httpProvider: HttpProvider, private utility: CommonUtilities, private renderer: Renderer) {
    this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'bottom-sheet', true);
    this.selectedItem = params.get("selectedItem");
    this.flags.fromRejectTs = params.get("fromReject");
  }

  closeModal(data: any) {
    this.viewCtrl.dismiss(data);
  }

  onApproveClicked() {
    this.utility.updateLoader(true);
    this.selectedItem.comments = "" + this.commentText.trim()
    const params = {
      "approvalStatus": "1", // 1- Approved , 2 - pending , 3 - Rejected 
      "comments": this.commentText.trim(),
      "timesheetList": [
        this.selectedItem
      ]
    }
    this.httpProvider.http.zentsCommonService({ url: "/v1/sanctiontimesheets", data: params, dashboard: true }).subscribe((res: any) => {
      
      this.utility.updateLoader(false);
      if (res) {
        this.closeModal({ "result": "approved-success", "msg": "Timesheet approved successfully."  });
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })
  }


  onRejectClicked() {

    this.selectedItem.comments = "" + this.commentText.trim()
    // const params = {
    //   "approvalStatus": "1", // 1- Approved , 2 - pending , 3 - Rejected 
    //   "comments": this.commentText.trim(),
    //   "timesheetList": [
    //     this.selectedItem
    //   ]
    // }
    if (this.commentText.trim()) {
      this.flags.isCommentRequired = false;
      this.utility.updateLoader(true);
      this.selectedItem.comments = "" + this.commentText.trim()
      const params = {
        "approvalStatus": "3", // 1- Approved , 2 - pending , 3 - Rejected 
        "timesheetList": [
          this.selectedItem
        ]
      }
      this.httpProvider.http.zentsCommonService({ url: "/v1/sanctiontimesheets", data: params, dashboard: true }).subscribe((res: any) => {
        this.utility.updateLoader(false);
        if (res) {
          this.closeModal({ "result": "success" , "msg": "Timesheet rejected successfully." });
        }
      }, (err) => {
        this.utility.updateLoader(false);
      })
    } else {
      this.flags.isCommentRequired = true;
    }

  }

  omit_special_char(event) {
    var k;
    k = event.charCode;  //         k = event.keyCode;  (Both can be used)
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
  }

}
