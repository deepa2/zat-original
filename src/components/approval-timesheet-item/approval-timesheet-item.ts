import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the ApprovalTimesheetItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'approval-timesheet-item',
  templateUrl: 'approval-timesheet-item.html'
})
export class ApprovalTimesheetItemComponent {

  @Input() item: any;
  @Input() type: any;

  @Output() open: EventEmitter<string> = new EventEmitter();
  @Output() openApprovalPendingTS: EventEmitter<string> = new EventEmitter();
  @Output() onApprovalApproveClicked: EventEmitter<string> = new EventEmitter();
  @Output() onApprovalRejectClicked: EventEmitter<string> = new EventEmitter();
  @Output() toggleCheck: EventEmitter<any> = new EventEmitter();

  constructor() {}

  openApprovalApproveDetailModal() {
    this.open.emit();
  }

  openApprovalPendingDetailModal() {
    this.openApprovalPendingTS.emit();
  }

  onApproved() {
    this.onApprovalApproveClicked.emit();
  }

  onReject() {
    this.onApprovalRejectClicked.emit();
  }

  toggleSelection(obj){
    this.toggleCheck.emit(obj);
  }
}
