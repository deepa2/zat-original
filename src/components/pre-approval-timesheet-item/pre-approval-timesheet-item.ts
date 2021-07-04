import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the PreApprovalTimesheetItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pre-approval-timesheet-item',
  templateUrl: 'pre-approval-timesheet-item.html'
})
export class PreApprovalTimesheetItemComponent {

  @Input() item: any;
  @Input() type: any;

  @Output() openPreApprovalPendingTS: EventEmitter<string> = new EventEmitter();
  @Output() onApproveClicked: EventEmitter<string> = new EventEmitter();
  @Output() onRejectClicked: EventEmitter<string> = new EventEmitter();


  constructor() {}

  openPreApprovalPendingModal() {
    this.openPreApprovalPendingTS.emit();
  }


  onApproved() {
    this.onApproveClicked.emit();
  }

  onReject() {
    this.onRejectClicked.emit();
  }

}
