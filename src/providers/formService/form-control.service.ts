import { Injectable } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormBase } from '../../classes/form-base';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';

@Injectable()
export class FormControlService {
  constructor(private fb: FormBuilder, private utility: CommonUtilities) { }

  dateLessThan(from: string, to: string) {
    return (group: FormGroup): { [key: string]: any } => {

      let f = group.controls[from];
      let t = group.controls[to];

      if (f && t) {

        let endValue = t.value[0][to];
        let startValue = f.value[0][from];

        //if somewhere start and end date breaks use commented code otherwise use below code

        /* if (startValue && endValue && startValue >= endValue) {
          f['controls'][0].controls[from].setErrors({ invalidDate: true })
        } else {
          f['controls'][0].controls[from].setErrors(null)
        } */

        if (startValue != "" && endValue != "") {
          if (startValue && endValue && startValue >= endValue) {
            f['controls'][0].controls[from].setErrors({ invalidDate: true })
          } else {
            f['controls'][0].controls[from].setErrors(null)
          }
        }

      }
      return;
    }
  }

  childDateLessThan(from: string, to: string) {

    return (group: FormGroup): { [key: string]: any } => {

      let childControls: any = group.controls;
      let startDateControl, endDateControl;

      if (childControls) {

        childControls.forEach((control, i) => {

          if (control && control.get(from)) {
            startDateControl = control.get(from);
          }

          if (control && control.get(to)) {
            endDateControl = control.get(to);
          }

        })

        if (startDateControl && endDateControl) {

          let endValue = endDateControl.value;
          let startValue = startDateControl.value;

          //if somewhere start and end date breaks use commented code otherwise use below code

          /* if (startValue && endValue && startValue >= endValue) {
            startDateControl.setErrors({ invalidDate: true })
          } else {
            startDateControl.setErrors(null)
          } */

          if (startValue != "" && endValue != "") {

            if (startValue && endValue && startValue >= endValue) {
              startDateControl.setErrors({ invalidDate: true })
            } else {
              startDateControl.setErrors(null)
            }
          }

        }

      }

      return;
    }
  }

  fcControl(data) {

    let formValue = { value: data.new_Value || data.titleValue || '', disabled: !data.isEditable };
    let regex = new RegExp(data.regularExpression);
    let formKey = data.bindWith;
    let fc: any;

    if (data.fieldType == 'checkbox') {
      let checkboxValue = this.utility.convertToBoolean(formValue.value);
      formValue = { ...formValue, value: checkboxValue }
    }

    if (data.isRequired && data.regularExpression) {
      fc = new FormControl(formValue, [Validators.required, Validators.pattern(regex)]);
    }
    else if (!data.isRequired && data.regularExpression) {
      fc = new FormControl(formValue, [Validators.pattern(regex)]);
    }
    else if (data.isRequired && !data.regularExpression) {
      fc = new FormControl(formValue, [Validators.required]);
    }
    else {
      fc = new FormControl(formValue)
    }

    return fc;
  }

  toFormControl(data) {

    let formKey = data.bindWith;

    return this.fb.group({
      [formKey]: this.fcControl(data)
    });

  }

  toFormGroup(items: any) {

    let group: any = {};

    items.forEach(data => {

      let formKey = data.personal_Type || data.bindWith;

      if (formKey) {
        group[formKey] = this.fb.array([
          this.toFormControl(data)
        ]);
      }

    });

    return this.fb.group(group, { validator: this.dateLessThan('startDate', 'endDate') });

  }

}

