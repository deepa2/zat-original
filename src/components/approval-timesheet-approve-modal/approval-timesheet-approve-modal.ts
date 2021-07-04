import { Component, Renderer } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
/**
 * Generated class for the ApprovalTimesheetApproveModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'approval-timesheet-approve-modal',
  templateUrl: 'approval-timesheet-approve-modal.html'
})
export class ApprovalTimesheetApproveModalComponent {
  private data ={
    selectedItem: null
  }

  constructor(public params: NavParams, private viewCtrl: ViewController, private renderer: Renderer) {
    this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'bottom-sheet', true);
    
    this.data.selectedItem = params.get("selectedItem");
  }

  ngOnChanges() {
  }

  closeModal() {
    this.viewCtrl.dismiss()
  }

}
