import { CommonUtilities } from './../../providers/commonUtilities/commonUtilities';
import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the AdditionalHourListItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'additional-hour-list-item',
  templateUrl: 'additional-hour-list-item.html'
})
export class AdditionalHourListItemComponent {

  @Input() addHrsTaskData: any;
  @Input() projIndex: number;
  @Output() edit: EventEmitter<string> = new EventEmitter();
  @Output() open: EventEmitter<string> = new EventEmitter();
  @Output() delete: EventEmitter<string> = new EventEmitter();
  @Output() refresh: EventEmitter<string> = new EventEmitter();

  // status: string = null;
  private data = {
    taskName: null,
    iconName: null
  }
  private editedData: any = {
    billability: null,
    billabilityName: 'Not Selected',
    efforts: "00:00"
  }
  private billabilityList: Array<any> = [];
  constructor(private utility: CommonUtilities) {
  }

  ngOnChanges() {
    if (this.addHrsTaskData) {
      this.data.taskName = this.utility.toCapitalize(this.addHrsTaskData.taskName);
      // this.status = this.addHrsTaskData.timesheetStatus;
      //select default billable
      if (this.addHrsTaskData.billabilityFlag == 'YES') {
        this.billabilityList.push({ name: 'Billable', value: 'YES' });
      } else if (this.addHrsTaskData.billabilityFlag == 'NO') {
        this.billabilityList.push({ name: 'Non-Billable', value: 'NO' });
      }
      if (this.billabilityList.length == 1) {
        this.editedData.billability = this.billabilityList[0].value;
        this.editedData.billabilityName = this.billabilityList[0].name;
      }
      this.editedData.efforts = this.utility.convertTime(this.addHrsTaskData.totalEfforts, 2);
      this.data.iconName = this.getStatusIcon(this.addHrsTaskData.approvalStatus);
    }
  }

  onEffortsChange(e) {
    // && this.addHrsTaskData.tsRejected
    if (this.addHrsTaskData.approvalStatus == '3' && !this.addHrsTaskData.comments) {
      this.utility.presentAlert('Please add remarks').then(() => {
        this.refresh.emit();
      });
    } else {
      this.edit.emit(this.editedData);
    }
  }

  onBillabilityChange(e) {
    this.edit.emit(this.editedData);
  }

  openEditModal() {
    this.open.emit();
  }

  showDeleteConfirmAlert() {
    let alert = this.utility.presentConfirmation('Are you sure you want to delete this timesheet ?');
    alert.then(() => {
      this.delete.emit();
    });
  }

  /**
  * Returns icon name as per the status
  * @param status 
  */
  getStatusIcon(status) {
    switch (status) {
      case '0': return 'ts-task-icon';
      case '-1': return 'ts-saved-icon';
      case '2': return 'ts-submitted-icon';
      case '3': return 'ts-rejected-icon';
      case '1': return 'ts-approved-icon';
      default: return 'ts-task-icon';
    }
  }

}
