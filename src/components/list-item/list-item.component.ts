import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { DateTime } from 'ionic-angular';

@Component({
  selector: 'app-list-item',
  templateUrl: 'list-item.component.html',
})
export class ListItemComponent implements OnInit
{

  @Input() type: String;
  @Input() taskData: any;
  @Input() timesheetData: any;
  @Input() isTimesheetEditable: String;
  @Input() projIndex: number;
  @Input() isPayrollToBeFilledZeroHours: boolean = false;

  @Input() item: any;

  @Output() open: EventEmitter<string> = new EventEmitter();
  @Output() edit: EventEmitter<string> = new EventEmitter();
  @Output() delete: EventEmitter<string> = new EventEmitter();
  @Output() refresh: EventEmitter<string> = new EventEmitter();

  @ViewChild('dateTime') dateTimePicker: DateTime;

  // status: string = null;
  // milestoneList: Array<any> = null;
  private billabilityList: Array<any> = [];
  private data = {
    taskName: null,
    iconName: null,
    editEfforts: false
  }
  private editedData: any = {
    billability: null,
    billabilityName: 'Not Selected',
    efforts: "00:00",
    milestoneName: null,
    bapPaymentScheduleKey: null,
    defaultBillability: null
  }
  private milestoneMismatchFlag: boolean = false;

  constructor(private utility: CommonUtilities)
  {
  }

  ngOnInit()
  {
  }

  ngOnChanges()
  {
    if (this.taskData)
    {
      this.editedData.defaultBillability = this.timesheetData.billability;
      this.billabilityList = this.utility.checkBillability(this.timesheetData.billability);
      if (this.billabilityList.length == 1)
      {
        this.editedData.billability = this.billabilityList[0].value;
        this.editedData.billabilityName = this.billabilityList[0].name;
      } else if (this.taskData.approvalStatus !== '0')
      {
        this.editedData.billability = this.taskData.billablityFlag;
        this.editedData.billabilityName = this.taskData.billablityFlag == 'YES' ? 'Billable' : 'Non-Billable';
      }
      if (this.taskData.callWaitingFlag == "YES")
      {
        this.data.editEfforts = true;
      } else
      {
        this.data.editEfforts = false;
      }
      this.editedData.efforts = this.utility.convertTime(this.taskData.totalEfforts, 2);
      // this.status = this.taskData.timesheetStatus;
      this.data.taskName = this.utility.toCapitalize(this.taskData.taskName);
      this.data.iconName = this.getStatusIcon(this.taskData.approvalStatus);
    }

    //show milestone name if the project is fixed bid project
    if (this.timesheetData)
    {
      if (this.timesheetData.isFixedBidProject == 'YES')
      {
        if (this.taskData && this.taskData.zenCoreMigrated && this.timesheetData.milestoneDetails && this.timesheetData.milestoneDetails.length > 0)
        {
          let matchFlag = false;
          this.timesheetData.milestoneDetails.map((item: any) =>
          {
            if (this.taskData.bapPaymentScheduleKey == item.pdZenCoreMilestoneKey)
            {
              matchFlag = true;
              this.editedData.milestoneName = item.milestoneName;
              this.editedData.bapPaymentScheduleKey = item.currentBapPaymentScheduleKey;
            }
          })
          this.milestoneMismatchFlag = matchFlag ? false : true;
        } else if (this.taskData && !this.taskData.zenCoreMigrated && this.timesheetData.milestoneDetails && this.timesheetData.milestoneDetails.length > 0)
        {
          if (this.taskData.bapPaymentScheduleKey)
          {
            this.timesheetData.milestoneDetails.map(obj =>
            {
              if (obj.bapPaymentScheduleKey == this.taskData.bapPaymentScheduleKey)
              {
                this.editedData.milestoneName = obj.milestoneName;
                this.editedData.bapPaymentScheduleKey = obj.bapPaymentScheduleKey;
              }
            })
          } else if (this.timesheetData.milestoneDetails && this.timesheetData.milestoneDetails.length >= 1)
          {
            this.editedData.milestoneName = this.timesheetData.milestoneDetails[0].milestoneName;
            this.editedData.bapPaymentScheduleKey = this.timesheetData.milestoneDetails[0].bapPaymentScheduleKey;
          }
          // this.milestoneList = this.timesheetData.milestoneDetails;
        }
      }
    }
  }

  //invokes on billability change
  onBillabilityChange(value: any)
  {
    if (this.milestoneMismatchFlag)
    {
      this.utility.presentAlert("Your allocation on milestone for " + this.timesheetData.title + " and task assignment on milestone for same project in ZenCORE is not matching.Kindly contact your project manager.");
      this.refresh.emit();
    } else if (this.taskData.approvalStatus == '3' && this.taskData.tsRejected && !this.taskData.comments)
    {
      this.utility.presentAlert('Please add remarks').then(() =>
      {
        this.open.emit();
        this.refresh.emit();
      });
    }
    else if (!this.data.editEfforts && !this.isPayrollToBeFilledZeroHours && this.editedData.efforts == '00:00')
    {
      this.utility.presentAlert('Please select valid hours').then(() =>
      {
        this.refresh.emit();
      });
    } else if (this.isPayrollToBeFilledZeroHours && this.editedData.efforts == '00:00' && !this.taskData.comments)
    {
      this.utility.presentAlert('Please add remarks').then(() =>
      {
        this.open.emit();
        this.refresh.emit();
      })
    }
    else
    {
      this.edit.emit(this.editedData);
    }
  }

  openEditModal()
  {
    this.open.emit();
  }

  // comments
  onEffortsChange(e)
  {
    if (this.milestoneMismatchFlag)
    {
      this.utility.presentAlert("Your allocation on milestone for " + this.timesheetData.title + " and task assignment on milestone for same project in ZenCORE is not matching.Kindly contact your project manager.");
      this.refresh.emit();
    } else if (this.taskData.approvalStatus == '3' && this.taskData.tsRejected && !this.taskData.comments)
    {
      this.utility.presentAlert('Please add remarks').then(() =>
      {
        this.refresh.emit();
      });
    }
    else if (!this.isPayrollToBeFilledZeroHours && this.editedData.efforts == '00:00')
    {
      this.utility.presentAlert('Please select valid hours').then(() =>
      {
        this.refresh.emit();
      });
    } else if (this.isPayrollToBeFilledZeroHours && this.editedData.efforts == '00:00' && !this.taskData.comments)
    {
      this.utility.presentAlert('Please add remarks').then(() =>
      {
        this.refresh.emit();
      })
    }
    else
    {
      this.edit.emit(this.editedData);
    }
  }

  showDeleteConfirmAlert()
  {
    let alert = this.utility.presentConfirmation('Are you sure you want to delete this timesheet ?');
    alert.then(() =>
    {
      this.delete.emit();
    });
  }

  /**
   * Returns icon name as per the status
   * @param status 
   */
  getStatusIcon(status)
  {
    switch (status)
    {
      case '0': return 'ts-task-icon';
      case '-1': return 'ts-saved-icon';
      case '2': return 'ts-submitted-icon';
      case '3': return 'ts-rejected-icon';
      case '1': return 'ts-approved-icon';
      default: return 'ts-task-icon';
    }
  }

}
