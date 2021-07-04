import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBase } from '../../classes/form-base';
import * as moment from 'moment';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { FormArray, FormBuilder } from '@angular/forms';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ModalController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { DateTime } from 'ionic-angular';
import { FormControlService } from '../../providers/formService/form-control.service';
import { SkillModalComponent } from '../../components/skill-modal/skill-modal';


@Component({
  selector: 'form-field',
  templateUrl: 'form-field.html'
})
export class FormFieldComponent
{
  @Input() type;
  @Input() typeObject;
  @Input() info: FormBase<any>;
  @Input() form: FormGroup;
  @Input() mode;
  @Input() highlightField: string = null;
  @Output() startFileUpload: EventEmitter<object> = new EventEmitter<object>();
  @Output() dropDownListChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() focusSkillEvent: EventEmitter<any> = new EventEmitter<any>();
  selectOptions: any;
  minDate: string;
  maxDate: string;
  formKey: string;
  formLabel: string;
  checkboxValue: any;
  childList: Array<FormBase<any>>;
  degreeStyle;
  childFieldList: any;
  copychildFieldList: any;
  tooltipEvent: 'click' | 'press' = 'click';
  showArrow: boolean = true;
  duration: number = 5500;
  isChecked: boolean = false;
  activeToolTip: boolean = false
  @ViewChildren(DateTime) datePicker: QueryList<DateTime>;
  validateExperience: boolean = false;
  skillUpdate: any;


  constructor(private modalCtrl: ModalController, private fb: FormBuilder, private utility: CommonUtilities, private httpProvider: HttpProvider, private formControlService: FormControlService)
  {

    this.selectOptions = {
      title: 'Please select'
    };
    this.degreeStyle = 'rotate(' + -45 + 'deg)';

  }

  openCalendar(j)
  {
    this.datePicker.toArray();
    this.datePicker.toArray()[j].open();
  }

  getValue(control, formKey)
  {
    return control.value[formKey].titleValue || '';
  }

  isChildRequired(j, field)
  {
    let childItemFormArray = this.form.controls[this.formKey] as FormArray;
    let childItemFormControl = childItemFormArray.controls[j + 1] as FormArray;
    let control = childItemFormControl.controls[field];
    return (!control.valid && control.touched && control.hasError('required'));

  }

  isChildPattern(j, field)
  {
    let childItemFormArray = this.form.controls[this.formKey] as FormArray;
    let childItemFormControl = childItemFormArray.controls[j + 1] as FormArray;
    let control = childItemFormControl.controls[field];
    return (!control.valid && control.touched && control.hasError('pattern'));
  }

  isChildInvalidDate(j, field)
  {
    let childItemFormArray = this.form.controls[this.formKey] as FormArray;
    let childItemFormControl = childItemFormArray.controls[j + 1] as FormArray;
    let control = childItemFormControl.controls[field];
    return (!control.valid && control.touched && control.hasError('invalidDate'));
  }

  isChildFieldValid(controls, field)
  {
    if (field.isShow && field.isRequired)
    {
      return (!controls.valid && controls.touched);
    }
  }

  isRequired(controls, field)
  {

    if (this.info.isShow && this.info.isRequired && controls)
    {
      return (!controls.valid && controls.touched && controls.hasError('required'));
    }
  }

  isPattern(controls, field)
  {

    if (this.info.isShow && controls)
    {
      return (!controls.valid && controls.touched && controls.hasError('pattern'));
    }
  }

  isInvalidDate(controls, field)
  {
    if (this.info.isShow && this.info.isRequired && controls)
    {
      return (!controls.valid && controls.touched && controls.hasError('invalidDate'));
    }
  }

  ngOnInit()
  {
    this.maxDate = moment.utc().add(100, 'y').format('YYYY-MM-DD');
    this.minDate = moment.utc().subtract(58, 'years').format('YYYY-MM-DD');
    this.formKey = this.info.personal_Type || this.info.bindWith;
    this.formLabel = this.info.personal_Type || this.info.title;

    if (this.info.isChildRequired)
    {
      this.childFieldList = this.info.child;
    }
    else if (this.info.fieldType == 'dropdown')
    {

      let optionObj = this.info.lov.filter(item =>
      {
        if (item.key == this.info.titleValue)
        {
          return item;
        }
      });

      if (optionObj.length > 0)
      {
        this.childFieldList = this.info[optionObj[0].value];
      }

    }
    else if (this.info.fieldType == 'checkbox')
    {

      //will take child list according to true or false

      if (this.utility.convertToBoolean(this.info.titleValue))
      {
        this.childFieldList = this.info['Yes'];
        this.isChecked = true
      } else
      {
        this.childFieldList = this.info['No'];
        this.isChecked = false
      }

    }

    if (this.childFieldList)
    {
      this.copychildFieldList = JSON.parse(JSON.stringify(this.childFieldList));
    }

    //
    if (this.childFieldList)
    {

      let index = this.childFieldList.findIndex(item => item.bindWith == "employer_Name");

      //previous code

      /*  this.childFieldList.forEach(i => {
         if (i.isChildRequired) {
           this.childFieldList.splice(index + 1, 0, ...i.child)
         }
       }); */

      //remove one field from checkbox in experience tab 

      if (this.type == 'experience')
      {
        this.childFieldList.forEach(i =>
        {
          if (i.isChildRequired)
          {
            this.childFieldList.splice(index + 1, 0, ...i.child)
          }
        });
      }


      this.childFieldList.forEach(i =>
      {
        if (i)
        {
          this.addField(i);
        }
      });

      this.addValidator();

    }
    // when a gender value changes it is called automatically

    if (this.form.get("gender") != null)
      this.form.get("gender").valueChanges.subscribe(val =>
      {

        if (this.form.get("title") != null)
        {
          let formArray = this.form.get("title") as FormArray;
          let titleValue = formArray.controls[0].get("title").value;

          if (titleValue != "")
          {
            formArray.controls[0].patchValue({ title: "" })
          }
        }

      })

  }


  fileUpload(bindWidth, docType, j = '')
  {




    if (this.type == 'experience')
    {

      let values = this.form.get(this.formKey).value
      values = Object.assign({}, ...values.flat());
      let experienceId = values.experienceId;
      let employer_Name = values.employer_Name;

      if (employer_Name)
      {
        let referenceId = experienceId, referenceValue = employer_Name;
        this.startFileUpload.emit({ type: bindWidth, referenceId, referenceValue, docType });
      } else
      {
        let formArray = this.form.get(this.formKey) as FormArray;
        formArray.controls[j].get('employer_Name').touched = true;
      }

    } else if (this.type == 'onboarding')
    {
      let referenceId = this.typeObject.referenceId, referenceValue = '';
      this.startFileUpload.emit({ type: bindWidth, referenceId, referenceValue, docType });
    } else if (this.type == 'skills')
    {

      let formArray = this.form.get("skillId") as FormArray;

      let skillId = formArray.controls[0].get("skillId").value;
      if (skillId != '')
      {
        this.startFileUpload.emit({ skillId: skillId })
      } else
      {
        this.utility.presentAlert("Please select skill first");
        return;
      }


    } else
    {
      this.startFileUpload.emit({ type: bindWidth, docType });
    }

  }

  getAssetValue(bindWith)
  {
    if (bindWith)
    {
      let arrayValues = this.form.get(this.formKey).value;
      let values = Object.assign({}, ...arrayValues);
      return values[bindWith];
    }
  }

  openAsset(url)
  {


    this.utility.openAsset(url);
  }

  /* showToolTips(){
    if(this.info.toolTipMsg){
    
      this.activeToolTip = true;
      
    }
  } */

  clickOption(value)
  {


    if (this.type == 'skills' && value.bindWith == "experienceInMonths")
    {
      this.focusSkillEvent.emit(false);
      this.validateExperience = false;
      let formData = this.form.get('experienceInMonths') as FormArray;
      let formDataValue = formData.controls[0].get('experienceInMonths').value;
      //console.log(formDataValue);
      //console.log(formData);
      if (formDataValue != '' && formDataValue > 0)
      {
        this.utility.validateLoader(true);
        let param = {
          'experienceInMonths': formDataValue
        }
        this.httpProvider.http.commonService({ url: 'vaildateExpInMonths', data: param, associate: true }).subscribe((response: any) =>
        {
          //console.log(response);
          if (response && response.details)
          {
            if (response.details.isValidExp)
            {
              this.utility.validateLoader(false);
              this.validateExperience = true;
              return true;
            } else
            {
              this.validateExperience = false;
              this.utility.validateLoader(false);
              this.utility.presentAlert(response.details.errMsg).then(() =>
              {
                formData.controls[0].patchValue({ experienceInMonths: "" });
              })
            }
          }
        }, error =>
        {
          this.utility.validateLoader(false);
        })
      }
    }
    if (value.isChildRequiredOnChange)
    {

      this.childFieldList = this.info.child;

      if (this.childFieldList)
      {
        this.childFieldList.forEach(i =>
        {
          this.addField(i);
        });
        this.addValidator();

      }
    }

  }

  checkFocus(value)
  {
    if (this.type == 'skills' && value.bindWith == "experienceInMonths")
    {
      this.focusSkillEvent.emit(true);
    }
  }

  onChildSelect(event: {
    component: IonicSelectableComponent,
    item: any,
    isSelected: boolean
  }, info, j)
  {


    let dropDownValue = event.item;

    if (info.child)
    {

      if (dropDownValue.isChildRequired)
      {

        this.childFieldList = JSON.parse(JSON.stringify(this.copychildFieldList));

        this.childFieldList[j].titleValue = event.item.value;

        this.childFieldList.splice(j + 1, 0, ...info.child);

        const formArray = <FormArray>this.form.controls[this.formKey];
        let initialLength = formArray.controls.length - 1;
        for (let i = 0; i < initialLength; i++)
        {
          formArray.removeAt(1);
        }

        this.childFieldList.forEach(item =>
        {
          formArray.push(this.formControlService.toFormControl(item));
        });


      }
      else
      {



        this.childFieldList = JSON.parse(JSON.stringify(this.copychildFieldList));

        this.childFieldList[j].titleValue = event.item.value;

        const formArray = <FormArray>this.form.controls[this.formKey];
        let initialLength = formArray.controls.length - 1;
        for (let i = 0; i < initialLength; i++)
        {
          formArray.removeAt(1);
        }

        this.childFieldList.forEach(item =>
        {
          formArray.push(this.formControlService.toFormControl(item));
        });

      }
    }

    if (info.isServiceCallRequired)
    {
      let changedValue: Array<any> = [];
      let params = {
        "type": info.bindWith,
        "referenceValue": dropDownValue.value
      };

      this.httpProvider.http.commonService({ url: 'getDropdownList', data: params, onboarding: true }).subscribe((success: any) =>
      {

        let bindWith = success.details.responseList.bindWith;
        let dropDownValue = success.details.responseList.dropdownValue;
        let isChecked = this.isChecked;
        this.dropDownListChange.emit({ bindWith, dropDownValue, isChecked });
      })

      let formArray = this.form.get(this.formKey) as FormArray;


      if (formArray.controls[j + 1].get('country') != null)
      {
        formArray.controls[j + 1].get('country').valueChanges.subscribe(val =>
        {

          if (formArray.controls[j + 2].get('state') != null)
          {
            let stateValue = formArray.controls[j + 2].get('state').value

            if (stateValue != "")
            {
              formArray.controls[j + 2].patchValue({ state: "" });
            }
          }
        })
      }


    }



  }

  onSelect(event: {
    component: IonicSelectableComponent,
    item: any,
    isSelected: boolean
  }, info)
  {



    let dropDownValue = event.item;


    if (info.isServiceCallRequired)
    {

      if (this.type == 'skills')
      {
        let skillsdropDownValue = event.item.key;
        if (this.formKey == 'skillTypeId')
        {
          let params = {
            "skillTypeId": skillsdropDownValue
          };
          this.utility.updateLoader(true)
          this.httpProvider.http.commonService({ url: 'getSkillFamilyDetails', data: params, associate: true }).subscribe((success: any) =>
          {

            if (success)
            {
              if (success.details)
              {
                let bindWith = success.details.bindWith
                let dropDownValue = success.details.lov;

                this.utility.updateLoader(false)
                if (dropDownValue != null && dropDownValue != undefined)
                {
                  this.dropDownListChange.emit({ bindWith, dropDownValue });
                }
              }
            } else
            {
              this.utility.updateLoader(false);
            }
          })


        } else
        {
          let params = {
            "skillFamilyCode": skillsdropDownValue,
            "mode": this.mode
          };
          this.utility.updateLoader(true)
          this.httpProvider.http.commonService({ url: 'getAdditionalSkillDetails', data: params, associate: true }).subscribe((success: any) =>
          {
            if (success)
            {
              if (success.details.length > 0)
              {
                for (let i = 0; i < success.details.length; i++)
                {
                  let bindWith = success.details[i].bindWith
                  let dropDownValue = success.details[i].lov;
                  this.dropDownListChange.emit({ bindWith, dropDownValue });
                }
                this.utility.updateLoader(false)
              }
            } else
            {
              this.utility.updateLoader(false)
            }
          })
        }
        if (this.form.get("skillTypeId") != null)
        {
          this.form.get("skillTypeId").valueChanges.subscribe(val =>
          {
            if (this.form.get("skillFamilyCode") != null && this.form.get("skillId") != null)
            {
              let skillFamilyArray = this.form.get("skillFamilyCode") as FormArray;
              let skillIdArray = this.form.get("skillId") as FormArray;
              let skillFamilyValue = skillFamilyArray.controls[0].get('skillFamilyCode').value;
              let skillValue = skillIdArray.controls[0].get('skillId').value;
              if (skillFamilyValue != "")
              {
                skillFamilyArray.controls[0].patchValue({ skillFamilyCode: "" })
              }
              if (skillValue != "")
              {
                skillIdArray.controls[0].patchValue({ skillId: "" })
              }

            }
          })
        }

      } else
      {
        let params = {
          "type": info.bindWith,
          "referenceValue": dropDownValue.value
        };

        this.httpProvider.http.commonService({ url: 'getDropdownList', data: params, onboarding: true }).subscribe((success: any) =>
        {

          let bindWith = success.details.responseList.bindWith;
          let dropDownValue = success.details.responseList.dropdownValue;
          this.dropDownListChange.emit({ bindWith, dropDownValue });
        })

      }
      if (this.form.get("eduCountry") != null)
      {
        this.form.get("eduCountry").valueChanges.subscribe(val =>
        {

          if (this.form.get("eduState") != null && this.form.get("university") != null)
          {
            let eduArray = this.form.get("eduState") as FormArray;
            let universityArray = this.form.get("university") as FormArray;
            let eduStateValue = eduArray.controls[0].get('eduState').value;
            let universityValue = universityArray.controls[0].get('university').value;
            if (eduStateValue != "")
            {
              eduArray.controls[0].patchValue({ eduState: "" })
            }
            if (universityValue != "")
            {
              universityArray.controls[0].patchValue({ university: "" })
            }

          }

        })
      }
      if (this.form.get("eduState") != null)
      {
        this.form.get("eduState").valueChanges.subscribe(val =>
        {

          if (this.form.get("university") != null)
          {
            let universityArray = this.form.get("university") as FormArray;
            let universityValue = universityArray.controls[0].get('university').value;
            if (universityValue != "")
            {
              universityArray.controls[0].patchValue({ university: "" })
            }

          }

        })
      }
    } else
    {

      if (dropDownValue.value == 'Yes')
      {

        const formArrayYes = <FormArray>this.form.controls[this.formKey];

        let initialLength = formArrayYes.controls.length - 1;

        for (let i = 0; i <= initialLength; i++)
        {
          formArrayYes.removeAt(1);
        }

        this.childFieldList = info[dropDownValue.value];

        this.childFieldList.forEach(i =>
        {
          this.addField(i);
        });

      } else if (dropDownValue.value == 'No')
      {

        this.childFieldList = info[dropDownValue.value];

        const formArrayNo = <FormArray>this.form.controls[this.formKey];

        let initialLength = formArrayNo.controls.length - 1;

        for (let i = 0; i <= initialLength; i++)
        {
          formArrayNo.removeAt(1);

        }

        this.childFieldList.forEach(i =>
        {
          this.addField(i);
        });

      } else
      {
        if (info.child)
        {
          if (dropDownValue.isChildRequired)
          {

            this.childFieldList = info.child;

            this.childFieldList.forEach(i =>
            {
              this.addField(i);
            });

          } else
          {

            const formArray = <FormArray>this.form.controls[this.formKey];

            let initialLength = formArray.controls.length - 1;

            for (let i = 0; i <= initialLength; i++)
            {
              formArray.removeAt(1);

            }

          }
        }
      }

    }

  }

  checkboxToggle(info, checkboxEvent)
  {



    if (checkboxEvent.checked)
    {

      this.childFieldList = info['Yes'];
      this.isChecked = true;

      const formArrayYes = <FormArray>this.form.controls[this.formKey];

      let initialLength = formArrayYes.controls.length - 1;

      for (let i = 0; i <= initialLength; i++)
      {
        formArrayYes.removeAt(1);
      }

      let index = this.childFieldList.findIndex(item => item.bindWith == "employer_Name");
      let childIndex = this.childFieldList.findIndex(item => item.bindWith == "other_Employer");


      if (childIndex == -1)
      {
        this.childFieldList.forEach(i =>
        {
          if (i.isChildRequired)
          {
            this.childFieldList.splice(index + 1, 0, ...i.child)
          }
        });
      }


      this.childFieldList.forEach(i =>
      {
        this.addField(i);
      });

    } else
    {

      this.childFieldList = info['No'];
      this.isChecked = false;

      const formArrayNo = <FormArray>this.form.controls[this.formKey];

      let initialLength = formArrayNo.controls.length - 1;

      for (let i = 0; i <= initialLength; i++)
      {
        formArrayNo.removeAt(1);
      }

      let index = this.childFieldList.findIndex(item => item.bindWith == "employer_Name");

      /* this.childFieldList.forEach(i => {
        if (i.isChildRequired) {
          this.childFieldList.splice(index + 1, 1, ...i.child)
        }
      }); */

      this.childFieldList.forEach(i =>
      {
        this.addField(i);
      });


    }

  }

  addField(item)
  {
    if (item)
    {
      const control = <FormArray>this.form.controls[this.formKey];
      control.push(this.formControlService.toFormControl(item));
    }

  }

  addValidator()
  {
    const control = <FormArray>this.form.controls[this.formKey];
    control.setValidators(this.formControlService.childDateLessThan('startDate', 'endDate'))
  }

  removeField()
  {
    const control = <FormArray>this.form.controls[this.formKey];
    control.removeAt(1);
  }

  // Skill Modal added
  openSkillModal(formData: any)
  {
    let skillModal = this.modalCtrl.create(SkillModalComponent, { skillTypeId: formData.value.skillTypeId[0].skillTypeId });
    skillModal.onDidDismiss((data: any) =>
    {
      // 
      if (data)
      {
        let skillIdArray = this.form.get("skillId") as FormArray;
        this.skillUpdate = data.skillName;
        // skillIdArray.controls[0].patchValue({ skillId: `${data.skillName}|${data.skillId}` });
        skillIdArray.controls[0].patchValue({ skillId: data.skillId });
        this.getSkillDetails(data.skillId)
      }
    })
    skillModal.present();
  }

  // Service call on skill update
  getSkillDetails(skillId)
  {
    let params = {
      skillFamilyCode: "",
      skillId: skillId,
      mode: this.mode
    };
    this.utility.updateLoader(true)
    this.httpProvider.http.commonService({ url: 'getAdditionalSkillDetails', data: params, associate: true }).subscribe((success: any) =>
    {
      if (success)
      {
        if (success.details.length > 0)
        {
          for (let i = 0; i < success.details.length; i++)
          {
            let bindWith = success.details[i].bindWith
            let dropDownValue = success.details[i].lov;
            this.dropDownListChange.emit({ bindWith, dropDownValue });
          }
          this.utility.updateLoader(false)
        }
      } else
      {
        this.utility.updateLoader(false)
      }
    })
  }

}
