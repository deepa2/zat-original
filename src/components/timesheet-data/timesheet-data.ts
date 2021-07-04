import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
/**
 * Generated class for the TimesheetDataComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'timesheet-data',
  templateUrl: 'timesheet-data.html'
})
export class TimesheetDataComponent {
  @Input() dateObj: any;
  @Input() timesheetData: any;
  @Input() taskData: any;
  @Input() type: string;
  @Input() isTimesheetEditable: String;
  @Input() isPayrollToBeFilledZeroHours: boolean = false;
  @Input() selData: any;
  @Input() childIndex: any;
  @Input() parentIndex: any;
  @Input() chatListIndex: any;
  @Input() indexToToggleForm: any;
  @Input() updateStatus: any;
  @Input() chatListIndexForDate: any;
  @Input() indexToShowDot: any;
  @Input() dateIndex: any;
  @Input() chatListLength: any;
  // @Input() statusToUpdateIcon: string;


  @Output() onDateChange: EventEmitter<string> = new EventEmitter();
  @Output() edit: EventEmitter<string> = new EventEmitter();
  @Output() refresh: EventEmitter<string> = new EventEmitter();
  @Output() setSuggestionList: EventEmitter<any> = new EventEmitter();
  @Output() setIndexTOUpdate: EventEmitter<any> = new EventEmitter();
  @Output() setIndexTOUpdateSelDate: EventEmitter<any> = new EventEmitter();

  private editedData: any = {
    billability: null,
    billabilityName: 'Not Selected',
    efforts: "00:00",
    milestoneName: null,
    bapPaymentScheduleKey: null,
    defaultBillability: null
  }
  private data = {
    taskName: null,
    editEfforts: false,
    iconName: null,
    taskId: null
  }
  private billabilityList: Array<any> = [];
  private milestoneMismatchFlag: boolean = false;
  private efforts = {
    hourValues: [
      '00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
      '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
      '20', '21', '22', '23'
    ],
    minuteValues: [
      '00', '15', '30', '45'
    ]
  }
  private selEfforts = {
    hour: '00',
    minute: '00'
  }
  private editTimesheetForm: FormGroup;

  private showEditForm: boolean = false;
  private isSubmitted: boolean = false;

  constructor(private utility: CommonUtilities, private fb: FormBuilder) {
    this.editTimesheetForm = this.fb.group({
      milestone: ["", Validators.required],
      milestoneObj: [""],
      billability: [""],
      billabilityName: ["", Validators.required],
      remarks: [""],
      hour: ["00"],
      minute: ["00"]
    })
  }

  ngOnChanges() {
    if (this.taskData && !this.selData) {
      this.editedData.defaultBillability = this.timesheetData.billability;
      this.billabilityList = this.utility.checkBillability(this.timesheetData.billability);
      if (this.billabilityList.length == 1) {
        this.editedData.billability = this.billabilityList[0].value;
        this.editedData.billabilityName = this.billabilityList[0].name;
        //form billability
        this.editTimesheetForm.get('billability').setValue(this.billabilityList[0].value);
        this.editTimesheetForm.get('billabilityName').setValue(this.billabilityList[0].name);
      } else if (this.taskData.approvalStatus !== '0') {
        this.editedData.billability = this.taskData.billablityFlag;
        this.editedData.billabilityName = this.taskData.billablityFlag == 'YES' ? 'Billable' : 'Non-Billable';
        //form billability
        this.editTimesheetForm.get('billability').setValue(this.taskData.billablityFlag);
        this.editTimesheetForm.get('billabilityName').setValue(this.editedData.billabilityName);
      }
      if (this.taskData.callWaitingFlag == "YES") {
        this.data.editEfforts = true;
      } else {
        this.data.editEfforts = false;
      }
      this.editedData.efforts = this.utility.convertTime(this.taskData.totalEfforts, 2);
      this.getEffortsValue(this.editedData.efforts);
      this.data.taskName = this.utility.toCapitalize(this.taskData.taskName);
      this.data.iconName = this.getStatusIcon(this.taskData.approvalStatus);

      //Form checks
      if (this.taskData.callWaitingFlag == 'YES') {
        this.editTimesheetForm.get('hour').disable();
        this.editTimesheetForm.get('minute').disable();
        this.editTimesheetForm.get('remarks').setValidators(Validators.required);
        this.editTimesheetForm.get('remarks').updateValueAndValidity();
      } else {
        this.editTimesheetForm.get('hour').enable();
        this.editTimesheetForm.get('minute').enable();
        this.editTimesheetForm.get('remarks').clearValidators();
        this.editTimesheetForm.get('remarks').updateValueAndValidity();
      }
      let efforts = this.editedData.efforts.split(':');
      this.editTimesheetForm.get('hour').setValue(efforts[0]);
      this.editTimesheetForm.get('minute').setValue(efforts[1]);
      this.editTimesheetForm.get('remarks').setValue(this.taskData.comments);

      //IF timesheet appproved already then disabled everything.
      if (this.taskData.approvalStatus == 1) {
        this.editTimesheetForm.get('hour').disable();
        this.editTimesheetForm.get('minute').disable();
        this.editTimesheetForm.get('milestone').disable();
        this.editTimesheetForm.get('billabilityName').disable();
        this.editTimesheetForm.get('remarks').disable();
      }
    }

    //show milestone name if the project is fixed bid project
    if (this.timesheetData && !this.selData) {
      if (this.timesheetData.isFixedBidProject == 'YES') {
        if (this.taskData && this.taskData.zenCoreMigrated && this.timesheetData.milestoneDetails && this.timesheetData.milestoneDetails.length > 0) {
          let matchFlag = false;
          this.timesheetData.milestoneDetails.map((item: any) => {
            if (this.taskData.bapPaymentScheduleKey == item.pdZenCoreMilestoneKey) {
              matchFlag = true;
              this.editedData.milestoneName = item.milestoneName;
              this.editedData.bapPaymentScheduleKey = item.currentBapPaymentScheduleKey;
              //Form Milestone data set
              this.editTimesheetForm.get('milestoneObj').setValue(item);
              this.editTimesheetForm.get('milestone').setValue(item.milestoneName);
              this.editTimesheetForm.get('milestone').disable();
            }
          })
          this.milestoneMismatchFlag = matchFlag ? false : true;
        } else if (this.taskData && !this.taskData.zenCoreMigrated && this.timesheetData.milestoneDetails && this.timesheetData.milestoneDetails.length > 0) {
          if (this.taskData.bapPaymentScheduleKey) {
            this.timesheetData.milestoneDetails.map(obj => {
              if (obj.bapPaymentScheduleKey == this.taskData.bapPaymentScheduleKey) {
                this.editedData.milestoneName = obj.milestoneName;
                this.editedData.bapPaymentScheduleKey = obj.bapPaymentScheduleKey;
                //Form Milestone data set
                this.editTimesheetForm.get('milestoneObj').setValue(obj);
                this.editTimesheetForm.get('milestone').setValue(obj.milestoneName);
              }
            })
          } else if (this.timesheetData.milestoneDetails && this.timesheetData.milestoneDetails.length >= 1) {
            this.editedData.milestoneName = this.timesheetData.milestoneDetails[0].milestoneName;
            this.editedData.bapPaymentScheduleKey = this.timesheetData.milestoneDetails[0].bapPaymentScheduleKey;
            //Form Milestone data set
            this.editTimesheetForm.get('milestoneObj').setValue(this.timesheetData.milestoneDetails[0]);
            this.editTimesheetForm.get('milestone').setValue(this.timesheetData.milestoneDetails[0].milestoneName);
          }
        }
      } else if (this.timesheetData.isFixedBidProject == 'NO') {
        this.editTimesheetForm.get('milestone').clearValidators();
      }
    }

    if (this.selData && (this.selData.taskId == this.taskData.taskId)) {
      if (this.selData.s_type == 'billability') {
        this.editedData.billability = this.selData.data.value;
        this.editedData.billabilityName = this.selData.data.name;
        this.onDataChange();
      } else if (this.selData.s_type == 'hour') {
        this.selEfforts.hour = this.selData.data;
        this.editedData.efforts = this.selEfforts.hour + ':' + this.selEfforts.minute;
        this.onDataChange();
      } else if (this.selData.s_type == 'minute') {
        this.selEfforts.minute = this.selData.data;
        this.editedData.efforts = this.selEfforts.hour + ':' + this.selEfforts.minute;
        this.onDataChange();
      } else if (this.selData.s_type == 'formBillability') {
        this.editTimesheetForm.get('billability').setValue(this.selData.data.value);
        this.editTimesheetForm.get('billabilityName').setValue(this.selData.data.name);
      } else if (this.selData.s_type == 'formHour') {
        this.editTimesheetForm.get('hour').setValue(this.selData.data);
      } else if (this.selData.s_type == 'formMinute') {
        this.editTimesheetForm.get('minute').setValue(this.selData.data);
      } else if (this.selData.s_type == 'formMilestone') {
        this.editTimesheetForm.get('milestoneObj').setValue(this.selData.data);
        this.editTimesheetForm.get('milestone').setValue(this.selData.data.milestoneName);
      }
    }

    if (this.updateStatus && this.updateStatus.date && this.updateStatus.status) {
      this.dateObj.status = this.dateObj.date == this.updateStatus.date ? this.updateStatus.status : this.dateObj.status;
      // this.taskData.approvalStatus = this.updateStatus.status == 'Submitted' ? '2' : this.taskData.approvalStatus;
    }

    // if(this.statusToUpdateIcon){
    //   this.data.iconName = this.getStatusIcon(this.statusToUpdateIcon);
    // }

  }

  dateSelected(chatListIndexForDate,dateIndex) {
    let data={
      chatListIndexForDateToUpdate : chatListIndexForDate,
      dateIndexToUpdate: dateIndex
    }
    this.setIndexTOUpdateSelDate.emit(data);
    this.onDateChange.emit();
  }

  onDataChange() {
    this.selData = null;
    // //console.log("Modified-Data for save===================", this.editedData);
    if (this.milestoneMismatchFlag) {
      this.utility.presentAlert("Your allocation on milestone for " + this.timesheetData.title + " and task assignment on milestone for same project in ZenCORE is not matching.Kindly contact your project manager.");
      this.refresh.emit();
    } else if (this.taskData.approvalStatus == '3' && this.taskData.tsRejected && !this.taskData.comments) {
      this.utility.presentAlert('Please add remarks').then(() => {
        this.refresh.emit();
      });
    } else if (!this.data.editEfforts && !this.isPayrollToBeFilledZeroHours && this.editedData.efforts == '00:00') {
      this.utility.presentAlert('Please select valid hours').then(() => {
        this.refresh.emit();
      });
    } else if (this.isPayrollToBeFilledZeroHours && this.editedData.efforts == '00:00' && !this.taskData.comments) {
      this.utility.presentAlert('Please add remarks').then(() => {

        this.refresh.emit();
      })
    }
    else {
      this.edit.emit(this.editedData);
    }
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

  setList(dataList, type,selValue) {
    if((type == 'hour' || type == 'minute' || type == 'formHour' || type == 'formMinute') && (this.isTimesheetEditable == 'NO' || this.data.editEfforts)){
      return false;
    }
    if((type == 'billability' || type == 'formBillability') && this.isTimesheetEditable == 'NO'){
      return false;
    }
    if (type == 'formMilestone' && this.editTimesheetForm.get('milestone').disabled) {
      return false;
    }

    let data = {
      type,
      dataList,
      taskId: this.taskData.taskId,
      selValue : selValue ? selValue : null
    }

    this.setSuggestionList.emit(data);
  }

  getEffortsValue(value) {
    this.selEfforts.hour = value.split(':')[0];
    this.selEfforts.minute = value.split(':')[1];
  }

  openEditForm(chatListIndex, parentIndex, childIndex) {
    let index = {
      chatListIndexToUpdate: chatListIndex,
      parentIndexToUpdate: parentIndex,
      childIndexToUpdate: childIndex
    }
    this.setIndexTOUpdate.emit(index);
  }

  onSubmit() {

    if (this.taskData.approvalStatus == '3' && this.taskData.tsRejected && !this.editTimesheetForm.get('remarks').value) {
      this.editTimesheetForm.get('remarks').setValidators(Validators.required);
      this.editTimesheetForm.get('remarks').updateValueAndValidity();
    } else if (!(this.isPayrollToBeFilledZeroHours) && (this.editTimesheetForm.get('hour').value == '00' && this.editTimesheetForm.get('minute').value == '00')) {
      this.editTimesheetForm.get('hour').setValidators(Validators.min(1));
      this.editTimesheetForm.get('hour').updateValueAndValidity();
      this.editTimesheetForm.get('minute').setValidators(Validators.min(15));
      this.editTimesheetForm.get('minute').updateValueAndValidity();
    } else if (this.isPayrollToBeFilledZeroHours && this.editTimesheetForm.get('hour').value == '00' && this.editTimesheetForm.get('minute').value == '00' && !this.editTimesheetForm.get('remarks').value) {
      this.editTimesheetForm.get('remarks').setValidators(Validators.required);
      this.editTimesheetForm.get('remarks').updateValueAndValidity();
    } else {
      this.editTimesheetForm.get('hour').clearValidators();
      this.editTimesheetForm.get('hour').updateValueAndValidity();
      this.editTimesheetForm.get('minute').clearValidators();
      this.editTimesheetForm.get('minute').updateValueAndValidity();
      this.editTimesheetForm.get('remarks').clearValidators();
      this.editTimesheetForm.get('remarks').updateValueAndValidity();
    }
    this.isSubmitted = true;
    if (!this.editTimesheetForm.valid) {
      return false;
    } else {
      let milestoneObj = this.editTimesheetForm.get('milestoneObj').value;
      let data: any = {
        billability: this.editTimesheetForm.get('billability').value,
        efforts: this.editTimesheetForm.get('hour').value + ':' + this.editTimesheetForm.get('minute').value,
        milestoneName: milestoneObj.milestoneName,
        bapPaymentScheduleKey: milestoneObj.currentBapPaymentScheduleKey,
        comments: this.editTimesheetForm.get('remarks').value
      }
      this.edit.emit(data);
    }
  }

}
