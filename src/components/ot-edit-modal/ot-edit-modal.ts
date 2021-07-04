import { CommonUtilities } from './../../providers/commonUtilities/commonUtilities';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ViewController, NavParams } from 'ionic-angular';
/**
 * Generated class for the OtEditModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ot-edit-modal',
  templateUrl: 'ot-edit-modal.html'
})
export class OtEditModalComponent implements OnInit {

  private editTimesheetForm: FormGroup;
  private addHrsTaskObj: any = null;
  private billabiltyArray: Array<any> = [];
  private flag = {
    isSubmitted: false
  }

  constructor(private fb: FormBuilder, private navParams: NavParams, private utility: CommonUtilities,
    private viewCtrl: ViewController) {
    this.editTimesheetForm = this.fb.group({
      billability: ["", Validators.required],
      remarks: [""],
      efforts: ["00:00"]
    });
  }

  ngOnInit() {

    this.addHrsTaskObj = this.navParams.get('taskObj');
    if (this.addHrsTaskObj) {

      let efforts = this.utility.convertTime(this.addHrsTaskObj.totalEfforts, 2);
      this.editTimesheetForm.get('efforts').setValue(efforts);
      this.editTimesheetForm.get('remarks').setValue(this.addHrsTaskObj.comments);
      if (this.addHrsTaskObj.billabilityFlag == 'YES') {
        this.billabiltyArray.push({ name: 'Billable', value: 'YES' });
      } else if (this.addHrsTaskObj.billabilityFlag == 'NO') {
        this.billabiltyArray.push({ name: 'Non-Billable', value: 'NO' });
      }
      if (this.billabiltyArray.length == 1) {
        this.editTimesheetForm.get('billability').setValue(this.billabiltyArray[0].value);
      }
    }
  }

  saveTimesheet() {
    if (this.addHrsTaskObj.approvalStatus == '3' && !this.editTimesheetForm.get('remarks').value) {
      this.editTimesheetForm.get('remarks').setValidators(Validators.required);
      this.editTimesheetForm.get('remarks').updateValueAndValidity();
    }
    this.flag.isSubmitted = true;
    if (!this.editTimesheetForm.valid) {
      return false;
    } else {
      //code to save additional hours timesheet  
      this.viewCtrl.dismiss(this.editTimesheetForm.value);
    }
  }

  onBillabilityChange(e) {
  }

}
