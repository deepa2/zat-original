import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ModalController, NavParams, ViewController } from 'ionic-angular';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
/**
 * Generated class for the TsEditModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ts-edit-modal',
  templateUrl: 'ts-edit-modal.html'
})
export class TsEditModalComponent implements OnInit {
  isSubmitted: boolean = false;
  private editTimesheetForm: FormGroup;
  private billabiltyArray: Array<any> = [];
  private isPayrollToBeFilledZeroHours: boolean = false;
  private taskObj: any = null;
  private isFixedBidProject: string = null;
  private milestoneDetails: any = null;
  private flag = {
    isTimesheetEditable: null
  }
  // selectedDate: string = null;
  // milestoneList: any = null;


  constructor(private fb: FormBuilder, public modalCtrl: ModalController,
    private navParams: NavParams, private utility: CommonUtilities, private viewCtrl: ViewController) {
    this.editTimesheetForm = this.fb.group({
      milestone: ["", Validators.required],
      billability: ["", Validators.required],
      remarks: [""],
      time: ["00:00"]
    })
  }

  ngOnInit() {
    this.isPayrollToBeFilledZeroHours = this.navParams.get('isPayrollToBeFilledZeroHours');
    this.isFixedBidProject = this.navParams.get('isFixedBidProject');
    this.milestoneDetails = this.navParams.get('milestoneDetails');
    this.flag.isTimesheetEditable = this.navParams.get('isTimesheetEditable');

    // this.selectedDate = this.navParams.get('selectedDate');
    this.taskObj = this.navParams.get('taskObj');
    if (this.taskObj) {
      if (this.taskObj.callWaitingFlag == 'YES') {
        this.editTimesheetForm.get('time').disable();
        this.editTimesheetForm.get('remarks').setValidators(Validators.required);
        this.editTimesheetForm.get('remarks').updateValueAndValidity();
      } else {
        this.editTimesheetForm.get('time').enable();
        this.editTimesheetForm.get('remarks').clearValidators();
        this.editTimesheetForm.get('remarks').updateValueAndValidity();
      }
      let efforts = this.utility.convertTime(this.taskObj.totalEfforts, 2);
      this.editTimesheetForm.get('time').setValue(efforts);
      this.editTimesheetForm.get('remarks').setValue(this.taskObj.comments);
      this.billabiltyArray = this.utility.checkBillability(this.navParams.get('billability'));
      if (this.billabiltyArray.length == 1) {
        this.editTimesheetForm.get('billability').setValue(this.billabiltyArray[0].value);
      } else if (this.taskObj.approvalStatus !== '0') {
        this.editTimesheetForm.get('billability').setValue(this.taskObj.billablityFlag);
      }
    }
    if (this.isFixedBidProject == 'YES') {
      if (this.taskObj && this.taskObj.zenCoreMigrated && this.milestoneDetails && this.milestoneDetails.length > 0) {

        this.milestoneDetails.map(item => {
          if (this.taskObj.bapPaymentScheduleKey == item.pdZenCoreMilestoneKey) {
            this.editTimesheetForm.get('milestone').setValue(item);
            this.editTimesheetForm.get('milestone').disable();
          }
        })
      } else if (this.taskObj && !this.taskObj.zenCoreMigrated && this.milestoneDetails && this.milestoneDetails.length > 0) {
        if (this.taskObj.bapPaymentScheduleKey) {
          this.milestoneDetails.map(obj=>{
            if(obj.bapPaymentScheduleKey == this.taskObj.bapPaymentScheduleKey){
              this.editTimesheetForm.get('milestone').setValue(obj);
            }
          })
        } else if (this.milestoneDetails && this.milestoneDetails.length >= 1) {
          this.editTimesheetForm.get('milestone').setValue(this.milestoneDetails[0]);
        }
        // this.milestoneList = this.milestoneDetails;
      }
      // this.editTimesheetForm.get('milestoneName').clearValidators();
    } else if (this.isFixedBidProject == 'NO') {
      this.editTimesheetForm.get('milestone').clearValidators();
    }

    //IF timesheet appproved already then disabled everything.
    if (this.taskObj.approvalStatus == 1) {
      this.editTimesheetForm.get('time').disable();
      this.editTimesheetForm.get('billability').disable();
      this.editTimesheetForm.get('remarks').disable();
    }

  }


  onSubmit() {

    if (this.taskObj.approvalStatus == '3' && this.taskObj.tsRejected && !this.editTimesheetForm.get('remarks').value) {
      this.editTimesheetForm.get('remarks').setValidators(Validators.required);
      this.editTimesheetForm.get('remarks').updateValueAndValidity();
    } else if (!(this.isPayrollToBeFilledZeroHours) && this.editTimesheetForm.get('time').value == '00:00') {
      this.editTimesheetForm.get('time').setValidators(Validators.min(1));
      this.editTimesheetForm.get('time').updateValueAndValidity();
    } else if ((this.isPayrollToBeFilledZeroHours) && this.editTimesheetForm.get('time').value == '00:00' && !this.editTimesheetForm.get('remarks').value) {
      this.editTimesheetForm.get('remarks').setValidators(Validators.required);
      this.editTimesheetForm.get('remarks').updateValueAndValidity();
    } else {
      this.editTimesheetForm.get('remarks').clearValidators();
      this.editTimesheetForm.get('remarks').updateValueAndValidity();
    }
    this.isSubmitted = true;
    if (!this.editTimesheetForm.valid) {
      return false;
    } else {
      let milestoneObj = this.editTimesheetForm.get('milestone').value;
      let data: any = {
        billability: this.editTimesheetForm.get('billability').value,
        efforts: this.editTimesheetForm.get('time').value,
        milestoneName: milestoneObj.milestoneName,
        bapPaymentScheduleKey: milestoneObj.currentBapPaymentScheduleKey,
        comments: this.editTimesheetForm.get('remarks').value
      }
      this.viewCtrl.dismiss(data);
    }
  }

  onBillabilityChange(e) {
  }

  onMilestoneChange(e) {
  }

}
