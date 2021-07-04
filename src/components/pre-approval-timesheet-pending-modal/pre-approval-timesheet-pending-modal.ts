import { Component, Input, Renderer } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'

/**
 * Generated class for the PreApprovalTimesheetPendingModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pre-approval-timesheet-pending-modal',
  templateUrl: 'pre-approval-timesheet-pending-modal.html'
})
export class PreApprovalTimesheetPendingModalComponent {

  @Input() selectedItem: any;
  private commentText: String = "";
  private flags = {
    commentRequired: false,
    fromReject: false
  }
  private type : string = "";


  constructor(public params: NavParams, private viewCtrl: ViewController, private httpProvider: HttpProvider, private utility: CommonUtilities, private renderer: Renderer) {
    this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'bottom-sheet', true);
    this.selectedItem = params.get("selectedItem");
    this.flags.fromReject = params.get("fromReject");
    this.type = params.get("type")
  }

  closeModal(data: any) {
    this.viewCtrl.dismiss(data);
  }


  onApproveClicked() {
    this.utility.updateLoader(true);
    this.selectedItem.comments = "" + this.commentText.trim()
    const params = {
      "apprmasterId": this.selectedItem.apprmasterId,
      "comments": this.commentText
    }
    this.httpProvider.http.zentsCommonService({ url: "approveovertimetask", data: params, overtime: true }).subscribe((res: any) => {
      
      this.utility.updateLoader(false);
      if (res) {
        this.closeModal({ "result": "approved-success" , "msg" : "Timesheet approved successfully." });
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })
  }


  onRejectClicked() {

    if (this.commentText.trim()) {
      this.flags.commentRequired = false;
      this.utility.updateLoader(true);
      const params = {
        "apprmasterId": this.selectedItem.apprmasterId,
        "comments": this.commentText,
      }
      this.httpProvider.http.zentsCommonService({ url: "rejectovertimetask", data: params, overtime: true }).subscribe((res: any) => {
        this.utility.updateLoader(false);
        if (res) {
          this.closeModal({ "result": "success", "msg" : "Timesheet rejected successfully." });
        }
      }, (err) => {
        this.utility.updateLoader(false);
      })
    } else {
      this.flags.commentRequired = true;
    }

  }

  omit_special_char(event) {
    var k;
    k = event.charCode;  //         k = event.keyCode;  (Both can be used)
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
  }


}
