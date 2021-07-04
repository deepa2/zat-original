import { PerformanceMeasuretextAreaComponent } from './../../../components/performance-measuretext-area/performance-measuretext-area';
import { PopoverController } from 'ionic-angular';
import { SpeechRecognitionUtility } from './../../../providers/speechRecognition/speechRecognition';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { FormControlService } from './../../../providers/formService/form-control.service';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { HttpAngularProvider } from './../../../providers/http-angular/http-angular';
import { CommonUtilities } from './../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from './../../../providers/http/http';
import { Component, OnInit, ViewChild, ElementRef, NgZone, ChangeDetectorRef } from '@angular/core'
import { IonicPage, NavController, ModalController, Navbar, Content, AlertController } from 'ionic-angular'
import { NavParams } from 'ionic-angular/navigation/nav-params'
import { ActionSheetController } from 'ionic-angular'
import { Constants } from "@app/constants";
import { group } from '@angular/animations';


/**
 * Generated class for the ZendeavorGoalSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zendeavor-goal-setting',
  templateUrl: 'zendeavor-goal-setting.html',
})
export class ZendeavorGoalSettingPage {
  private KRADetailsUrl: string = "getKraData"
  private saveKRAUrl: string = "saveKraData"
  private addKRAUrl: string = 'addKra'
  private deleteKraUrl: string = 'removeKra'
  private userRole: any
  private kraType: any
  private KRADetails: any = {}
  private userID: any
  private goalsDetails: any;
  private kraId: string = '0'
  private isServiceCallOn: boolean = false
  private associateRoleStatus: any
  private finalStatus: any
  private formDetails: any = []
  // private KRAFormGroup: FormGroup
  private formValues: any
  private saveDetails: any
  private selectedGoalYear: any
  GoalsForm: FormGroup
  private milestoneDate: any;
  private tooltipEvent: 'click' | 'press' = 'click'
  private midTermDetails: any;
  private midtermfloorData: any
  private midtermTargetData: any
  private endTermDetails: any;
  private endtermfloorData: any
  private endtermTargetData: any
  private submitted = false;
  private submitGoalsUrl = 'submitKra'
  private kraTypeValue: any
  private formInitialValues: any;
  private kraWeightageValue: any;
  private kraFormsTitle: any;
  private performanceMeasureValue: any
  private isMidtermDisabled: any = true
  private isEndTermDisabled: any = true
  private reviewedKRACheckbx: any = false
  private isDirectApprove: boolean
  private previouskraId: any
  private currentKraId: any
  private showMidEndTermValues: any = false;
  private options: InAppBrowserOptions = {
    location: 'yes',//Or 'no' 
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls 
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'yes',
    shouldPauseOnSuspend: 'yes', //Android only 
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'yes', //iOS only 
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'yes',//iOS only 
    presentationstyle: 'pagesheet',//iOS only 
    fullscreen: 'yes',//Windows only,
  };
  private performancetext = '';
  private prevtext = '';
  private showLoader = false;
  private showMic = true;
  // @ViewChild('performanceMeasure')  inputRef:ElementRef; 
  private deleteDetails: any
  private deleteSubKraUrl: string = 'removeSubKra'
  private midtermInfo: any
  private endtermInfo: any
  private milestoneEndDate: any
  private maxEndDateArray = []
  private maxYear;
  private maxMonth;
  private invalidMilestoneDate: any = false






  constructor(private navCtrl: NavController, private navParams: NavParams, private httpProvider: HttpProvider,
    private utility: CommonUtilities, private modalCtrl: ModalController,
    private httpAngularProvider: HttpAngularProvider, private zone: NgZone, private actionSheetCtrl: ActionSheetController, private formBuilder: FormBuilder,
    private formCtrlService: FormControlService, private alertCtrl: AlertController, private cdr: ChangeDetectorRef, private inappbrowser: InAppBrowser, private speechRecognitionUtility: SpeechRecognitionUtility, private popoverCtrl: PopoverController) {
    this.userRole = this.navParams.get('userRole')
    this.userID = this.navParams.get('userID')
    this.selectedGoalYear = this.navParams.get('kraYear')
    this.isDirectApprove = this.navParams.get('isDirectApprove')
    console.log('isDirectApprove', this.isDirectApprove)


  }

  ionViewWillEnter() {
    let isSubmitted = this.navParams.get('submitStatus')
    let kraId = this.navParams.get('kraId')
    let title = this.navParams.get('title')
    if (!this.utility.isEmptyOrNullOrUndefined(isSubmitted) && isSubmitted == 'false' && this.userRole == '1') {
      this.kraId = kraId
      this.getKRADetails(this.kraId)

    }
    /**
       * If the status of the KRA is submitted and the userRole is manager then user should redirected to Goals TeamList page.
       */
    if (!this.utility.isEmptyOrNullOrUndefined(isSubmitted) && isSubmitted == 'true' && this.userRole == '2') {
      this.navCtrl.popTo('TeamListForGoalSettingPage');
    }

    else if (!this.utility.isEmptyOrNullOrUndefined(isSubmitted) && isSubmitted == 'false' && this.userRole == '2') {
      this.kraId = kraId
      this.getKRADetails(this.kraId)

    }
    else {
      this.getKRADetails(this.kraId)
    }

    // this.KRAFormGroup.valueChanges

    this.GoalsForm.valueChanges.subscribe((response) => {
      console.log("response", response)

      console.log("this.GoalsForm.controls", this.GoalsForm.controls)
    })

  }
  ngOnInit() {


    this.GoalsForm = this.formBuilder.group({
      title: ['', Validators.required],
      milestoneDate: [{ value: '', disabled: false }, Validators.required],
      weightage: [{ value: '', disabled: false }, Validators.required],
      KRAtype: [{ value: '', disabled: false }, Validators.required],
      midTermFloor: [{ value: '', disabled: true }],
      midTermTarget: [{ value: '', disabled: true }],
      endTermFloor: [{ value: '', disabled: true }, Validators.required],
      endTermTarget: [{ value: '', disabled: true }, Validators.required],
      performanceMeasure: ['', Validators.required]
    }, { validator: this.formValidator });
    // this.GoalsForm.controls.midTermFloor.disable();
    // this.GoalsForm.controls.midTermTarget.disable();
    // this.GoalsForm.controls.endTermFloor.disable();
    // this.GoalsForm.controls.endTermTarget.disable();
    // this.GoalsForm.get('midTermFloor').disable()
    // this.GoalsForm.get('midTermTarget').disable()
    // this.GoalsForm.get('endTermFloor').disable()
    // this.GoalsForm.get('endTermTarget').disable()
    // this.GoalsForm.get('midTermFloor').updateValueAndValidity()
    // this.GoalsForm.get('midTermTarget').updateValueAndValidity()
    // this.GoalsForm.get('endTermFloor').updateValueAndValidity()
    // this.GoalsForm.get('endTermTarget').updateValueAndValidity()
    // this.formInitialValues = this.GoalsForm.value

    // setTimeout(() => this.GoalsForm.disable(), 2000);
    // this.GoalsForm.statusChanges.subscribe((res) => {
    //   console.log("msdjs", this.GoalsForm)
    // })

  }

  getKRADetails(kraId) {
    this.utility.updateLoader(true)
    let kraDetails = {
      url: this.KRADetailsUrl,
      data: {
        "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
        "kraId": kraId,
        // "subKraId": "1432011",
        "role": this.userRole,
        "year": this.selectedGoalYear || '',
        // "processType": "Annual",
        "isDirectApprove": this.isDirectApprove
      },
      zenDeavorURL: true
    }
    this.isServiceCallOn = true

    this.httpProvider.http.commonService(kraDetails).subscribe((response) => {
      this.isServiceCallOn = false

      if (response) {
        this.showMidEndTermValues = false

        this.utility.updateLoader(false)
        this.GoalsForm.reset()

        if (response['details']) {
          this.KRADetails = response['details']
          this.formDetails = response['details'].fieldDetails

          this.userID = this.KRADetails.userId
          this.goalsDetails = this.KRADetails.goalsDetails
          this.finalStatus = this.KRADetails.finalStatus
          this.milestoneEndDate = this.KRADetails.maxDate
          if (!this.utility.isEmptyOrNullOrUndefined(this.milestoneEndDate)) {
            this.maxEndDateArray = this.milestoneEndDate.split('-')
            this.maxYear = this.maxEndDateArray[0]
            this.maxMonth = this.maxEndDateArray[1]
          }
          // this.GoalsForm.get('milestoneDate').valueChanges.subscribe(
          //   milesDate => {
          //     console.log('Username changed:' + milesDate);
          //     if (!this.utility.isEmptyOrNullOrUndefined(milesDate)) {
          //       this.GoalsForm.get('milestoneDate').setValidators([this.maxDateValidator])
          //       // this.GoalsForm.get('milestoneDate').updateValueAndValidity()

          //     }
          //   }
          // );
          // console.log("fromDetails", this.formDetails)
          // this.isEndTermReadonly = false
          if (this.kraId != '-1') {

            this.formDetails.forEach(field => {
              if (field.bindWith == 'year' && field.fieldType == 'label') {
                this.selectedGoalYear = field.titleValue
              }
              if (field.bindWith == 'contributor' && this.kraId == '0') {
                this.associateRoleStatus = field.titleValue
              }
              if (field.bindWith == 'milestoneDate') {
                this.milestoneDate = field.titleValue
              }
              if (field.bindWith == 'midTerm' && !this.utility.isEmptyOrNullOrUndefined(field.midTermFieldList)) {
                this.midTermDetails = field.midTermFieldList
                this.midtermInfo = field

              }
              if (field.bindWith == "annual" && !this.utility.isEmptyOrNullOrUndefined(field.annualFielList)) {
                this.endTermDetails = field.annualFielList
                this.endtermInfo = field
              }
              if (field.bindWith == "kraType") {
                // console.log('kra type', field.titleValue)
                this.kraTypeValue = field.titleValue
              }
              if (field.bindWith == "weightage") {
                this.kraWeightageValue = field.titleValue
              }
              if (field.bindWith == "title") {
                this.kraFormsTitle = field.titleValue
              }
              if (field.bindWith == 'performanceMeasure') {
                this.performanceMeasureValue = field.titleValue
              }
            });
            // console.log("midTermDetails", this.midTermDetails)
            if (!this.utility.isEmptyOrNullOrUndefined(this.midTermDetails)) {
              this.midtermfloorData = this.midTermDetails[0]
              this.midtermTargetData = this.midTermDetails[1]
              // console.log("midtermfloorData", this.midtermfloorData)

            }
            if (!this.utility.isEmptyOrNullOrUndefined(this.endTermDetails)) {
              this.endtermfloorData = this.endTermDetails[0]
              this.endtermTargetData = this.endTermDetails[1]
              // console.log("midtermfloorData", this.endTermDetails)

            }



          }
          if (this.kraId != '-1' && this.kraId != '0') {
            this.GoalsForm.setValue({
              title: this.kraFormsTitle,
              milestoneDate: this.milestoneDate,
              weightage: this.kraWeightageValue,
              KRAtype: this.kraTypeValue,
              midTermFloor: this.midtermfloorData.titleValue,
              midTermTarget: this.midtermTargetData.titleValue,
              endTermFloor: this.endtermfloorData.titleValue,
              endTermTarget: this.endtermTargetData.titleValue,
              performanceMeasure: this.performanceMeasureValue
            })
            this.cdr.detectChanges()

            // console.log("this.midtermfloorData.titleValue", this.midtermfloorData.titleValue)
            // console.log("this.midtermTargetData.titleValue", this.midtermTargetData.titleValue)
            // console.log(" this.endtermfloorData.titleValue", this.endtermfloorData.titleValue)
            // console.log("this.endtermTargetData.titleValue", this.endtermTargetData.titleValue)
            if (!this.utility.isEmptyOrNullOrUndefined(this.kraTypeValue) && this.kraTypeValue == 'Qualitative') {
              // this.isMidtermDisabled = true
              // this.isEndTermDisabled = true
              this.showMidEndTermValues = true

              // this.GoalsForm.controls.midTermFloor.disable();
              // this.GoalsForm.controls.midTermTarget.disable();
              // this.GoalsForm.controls.endTermFloor.disable();
              // this.GoalsForm.controls.endTermTarget.disable();
            }
            else if (this.utility.isEmptyOrNullOrUndefined(this.kraTypeValue)) {
              // this.GoalsForm.controls.midTermFloor.disable();
              // this.GoalsForm.controls.midTermTarget.disable();
              // this.GoalsForm.controls.endTermFloor.disable();
              // this.GoalsForm.controls.endTermTarget.disable();
              this.showMidEndTermValues = false

            }
            // incase of Quantitative
            else {
              // this.GoalsForm.controls.midTermFloor.enable();
              // this.GoalsForm.controls.midTermTarget.enable();
              // this.GoalsForm.controls.endTermFloor.enable();
              // this.GoalsForm.controls.endTermTarget.enable();
              this.showMidEndTermValues = true
            }

            if (this.midtermInfo.isEditable) {
              this.GoalsForm.controls.midTermFloor.enable();
              this.GoalsForm.controls.midTermTarget.enable();
            }
            if (this.endtermInfo.isEditable) {
              this.GoalsForm.controls.endTermFloor.enable();
              this.GoalsForm.controls.endTermTarget.enable();
            }

            if (!this.midtermInfo.isEditable) {
              this.GoalsForm.controls.midTermFloor.disable();
              this.GoalsForm.controls.midTermTarget.disable();
            }
            if (!this.endtermInfo.isEditable) {
              this.GoalsForm.controls.endTermFloor.disable();
              this.GoalsForm.controls.endTermTarget.disable();
            }
            this.cdr.detectChanges()

          }

          // console.log("GoalsForm.setValue", this.GoalsForm.value)

        }
        // this.GoalsForm.patchValue({
        //   "milestoneDate": this.milestoneDate
        // })
        // changed from uncommented
        // this.GoalsForm.get('milestoneDate').setValue(this.milestoneDate);

        // this.GoalsForm.get('KRAtype').setValue(this.kraTypeValue);
        // changed from uncommented
        // console.log("after setting values form", this.GoalsForm.value)

      }


    }, (err) => {
      this.utility.updateLoader(false)
      this.utility.showAlert('Goal Setting', Constants["Server_Error_Message"])
    })


  }



  saveKRA(gotonextStatus, form, btnType) {
    // console.log("GoalsForm", form)
    // console.log("btnType", btnType)
    this.submitted = true
    // let tempvalue = this.GoalsForm.get('milestoneDate').setValidators([this.maxDateValidator])
    // let tempvalue=this.GoalsForm.get('milestoneDate').setValidators([this.maxDateValidator])
    // console.log("tempvalue", tempvalue)
    if (this.invalidMilestoneDate) {
      this.submitted = true;
      return;
    }
    if (this.GoalsForm.invalid && this.kraId != '0') {
      // this.utility.presentAlert("Please fill all the fields")
      this.submitted = true;
      return;
    }
    if (this.kraId == '1' && this.KRADetails.isSubKraIncomplete) {
      let alertMsg = this.KRADetails.subKraErrorAlert
      this.utility.presentAlert(alertMsg)
      return
    }

    if (this.kraId == '0') {
      if (this.utility.isEmptyOrNullOrUndefined(this.selectedGoalYear)) {
        this.utility.presentAlert('Please select year')
        return;
      }
      if (this.utility.isEmptyOrNullOrUndefined(this.associateRoleStatus)) {
        this.utility.presentAlert('Please select Role')
        return;
      }

      if (this.utility.isEmptyOrNullOrUndefined(this.selectedGoalYear) && (this.utility.isEmptyOrNullOrUndefined(this.associateRoleStatus))) {
        this.utility.presentAlert('Please select year and Role')
        return;
      }
      if (this.KRADetails.isNewKra) {
        // this.utility.presentAlert('New KRA')
        this.showAlertForNewGoalSetting().then((response => {
          // console.log("response", response)
          if (true) {
            this.savekraForHomePage()
            this.gotoNextButton()
          }

        }))
        return

      }
      this.saveDetails = {
        url: this.saveKRAUrl,
        data: {
          "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
          "role": this.userRole,
          "kraId": 0,
          "year": this.selectedGoalYear,
          "contributor": this.associateRoleStatus == 'Individual Contributor' ? 1 : 2,
          "isNew": true,
          "finalStatus": this.finalStatus
        },
        zenDeavorURL: true
      }
    }
    else {
      // this.GoalsForm.get('midTermFloor').setValidators(this.passwordMatchValidator)
      // this.GoalsForm.get('midTermFloor').updateValueAndValidity()
      // this.GoalsForm.get('midTermTarget').value,
      // let kratypeNumber = this.GoalsForm.get('KRAtype').value == 'Qualitative' ? '1' : '2'
      // console.log('kratype number', kratypeNumber)
      this.saveDetails = {
        url: this.saveKRAUrl,
        data: {
          "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
          "year": this.selectedGoalYear || '',
          "role": this.userRole,
          "kraId": this.kraId,
          "title": this.GoalsForm.get('title').value,
          "weightage": this.GoalsForm.get('weightage').value,
          "milestoneDate": this.GoalsForm.get('milestoneDate').value,
          "annualTarget": this.GoalsForm.get('endTermTarget').value,
          "annualFloor": this.GoalsForm.get('endTermFloor').value,
          "midtermFloor": this.GoalsForm.get('midTermFloor').value,
          "midtermTarget": this.GoalsForm.get('midTermTarget').value,
          "performanceMeasure": this.GoalsForm.get('performanceMeasure').value,
          "kraType": this.kraTypeValue == 'Quantitative' ? '1' : '2',
          "totalKra": this.KRADetails.totalKra
        },
        zenDeavorURL: true
      }
    }

    this.utility.updateLoader(true)

    this.httpProvider.http.commonService(this.saveDetails).subscribe((response) => {

      if (response) {
        this.utility.updateLoader(false)
        if (response['status'] && response['status'].statusCode == '1') {
          let statusMessage = response['status'].statusMessage
          this.submitted = false

          this.utility.presentAlert(statusMessage).then((res) => {
            if (gotonextStatus && btnType == 'saveOnFooterClick') {
              // this.GoalsForm.reset()
              this.gotoNextButton()

            }
            else if (btnType == 'saveOnHeaderClick') {
              // this.getKRADetails(this.currentKraId)
              // this.gotoNextButton()
              this.gotoSelectedKRA()


            }
            // else{

            // }

          })


        }
      }

    }, (err) => {
      this.utility.updateLoader(false)
      this.utility.showAlert('Goal Setting', Constants["Server_Error_Message"])
    })



  }

  goToQuestion() {
    // this.navCtrl.push("QuestionsPage")
    this.navCtrl.push('AddPage', { 'type': 'addQuestion', 'questionId': null, 'answerType': null });
  }


  /**
   * Toggle the  button for selection
   * @param kraId contain the selceted KRA no.(unique)
   * @param subKraId contain the subKRA no. (unique)
   * @param kraTitle contain the selected KRA Name
   * @param kraWeightage contain the weightage of selceted KRA
   */
  _getSelectedData(kraId: string, kraTitle: string, kraWeightage: string) {
    // console.log("hello id", this.kraId);
    // console.log("this.GoalsForm.dirty", this.GoalsForm.dirty);
    this.submitted = false;
    this.previouskraId = this.kraId
    this.currentKraId = kraId
    if (this.previouskraId == '-1' || this.previouskraId == '0') {
      this.kraId = kraId
      if (this.previouskraId == '0')
        this.savekraForHomePage()
      this.getKRADetails(kraId)
    }
    else {
      if (this.GoalsForm.dirty && this.GoalsForm.touched)
        this.saveDataOnNextAlert(this.kraId)
      else {
        this.kraId = kraId
        this.getKRADetails(kraId)

      }

    }
    // this.kraId = previouskraId
    // if (this.GoalsForm.touched) {
    //   this.presentConfirmAlert(kraId)
    // } else {
    // this.submitted = false;
    // this.getKRADetails(kraId)
    // }
    // let alert = this.utility.presentConfirmation("You have made some changes.Do you want to save changes", 'Save changes?')
    // alert.then((res) => {
    //   console.log("response", res)
    //   // this.onApproveAllClicked();

    // })
    // this.kraId = kraId
    // this.showWhenData = kraTitle
    // this.kraWeightage = kraWeightage

    // if (kraTitle == 'Preview')
    //   this.KRADetailsUrl = 'getKraDetails'

    // this.getKRADetails(kraId)
    // this.resetKraScore(this.kraId);
    // if (!this.utility.isEmptyOrNullOrUndefined(this.achievement))
    //   this.displayScore(event, this.achievement)

  }



  urlify(text) {
    if (text != undefined) {

      var newText = text.replace(/\n/g, "<br/>");
      // console.log(newText)
      return newText;
    }
  }


  onRoleSelected(roleValue) {
    this.associateRoleStatus = roleValue
    // console.log("this.associateRoleStatus", this.associateRoleStatus)
  }

  /**
  * clicked on next button to move to next section
  */
  gotoNextButton() {
    for (let i = 0; i < this.KRADetails.kraStatusList.length; i++) {
      if (this.KRADetails.kraStatusList[i].kraId == this.kraId) {
        let count = (i != this.KRADetails.kraStatusList.length - 1) ? (i + 1) : i
        // this.showWhenData = this.KRADetails.kraStatusList[count].title
        this.kraId = this.KRADetails.kraStatusList[count].kraId
        break
      }
    }
    this.getKRADetails(this.kraId);
    // console.log("this.kraId", this.kraId);
    // this.resetKraScore(this.kraId);
  }


  gotoSelectedKRA() {
    // for (let i = 0; i < this.KRADetails.kraStatusList.length; i++) {
    //   if (this.KRADetails.kraStatusList[i].kraId == this.kraId) {
    //     // let count = (i != this.KRADetails.kraStatusList.length - 1) ? (i + 1) : i
    //     // this.showWhenData = this.KRADetails.kraStatusList[count].title
    //     this.kraId = this.KRADetails.kraStatusList[i].kraId
    //     break
    //   }
    // }
    this.kraId = this.currentKraId
    this.getKRADetails(this.kraId);
    // console.log("this.kraId", this.kraId);
    // this.resetKraScore(this.kraId);
  }
  onSelectChange(selectedKRAtype) {
    // console.log("event", selectedKRAtype)
    this.kraTypeValue = selectedKRAtype
    // this.KRAFormGroup.patchValue({
    //   "Mid Term Floor": "100"
    // }) endTermFloor: [{ value: '', disabled: true }, Validators.required],
    // console.log("GoalsForm", this.GoalsForm)
    // this.GoalsForm.controls.midTermFloor.enable();
    // this.GoalsForm.controls.midTermTarget.enable();
    // this.GoalsForm.controls.endTermFloor.enable();
    // this.GoalsForm.controls.endTermTarget.enable();
    // this.GoalsForm.get('midTermFloor').enable()
    // this.GoalsForm.get('midTermTarget').enable()
    // this.GoalsForm.get('endTermFloor').enable()
    // this.GoalsForm.get('endTermTarget').enable()
    // this.GoalsForm.controls['midTermFloor'].enable();
    // console.log("GoalsForm", this.GoalsForm)

    // if(this.utility.isEmptyOrNullOrUndefined())

    // this.GoalsForm.get('midTermFloor').updateValueAndValidity()
    // this.GoalsForm.get('midTermTarget').updateValueAndValidity()
    // this.GoalsForm.get('endTermFloor').updateValueAndValidity()
    // this.GoalsForm.get('endTermTarget').updateValueAndValidity()
    // this.cdr.detectChanges()
    // this.isMidtermDisabled = false
    // this.isEndTermDisabled = false
    if (selectedKRAtype == 'Qualitative' && !this.utility.isEmptyOrNullOrUndefined(selectedKRAtype)) {
      this.showMidEndTermValues = true
      this.GoalsForm.controls.midTermFloor.disable();
      this.GoalsForm.controls.midTermTarget.disable();
      this.GoalsForm.controls.endTermFloor.disable();
      this.GoalsForm.controls.endTermTarget.disable();
      this.GoalsForm.get('endTermFloor').setValue('0');
      this.GoalsForm.get('endTermTarget').setValue('10');
      this.GoalsForm.get('midTermFloor').setValue('0');
      this.GoalsForm.get('midTermTarget').setValue('10');
      // this.isEndTermDisabled = true
      // this.isMidtermDisabled = true
      this.cdr.detectChanges()



    }
    else if (!this.utility.isEmptyOrNullOrUndefined(selectedKRAtype)) {
      this.GoalsForm.controls.midTermFloor.enable();
      this.GoalsForm.controls.midTermTarget.enable();
      this.GoalsForm.controls.endTermFloor.enable();
      this.GoalsForm.controls.endTermTarget.enable();
      this.showMidEndTermValues = true
      this.cdr.detectChanges()

    }

  }

  onWeightageChange(event) {

  }

  addNewKRA(kraid) {
    if (kraid == '5')
      kraid = '6'
    else
      kraid = '7'

    this.utility.updateLoader(true)
    let kraDetails = {
      url: this.addKRAUrl,
      data: {
        "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
        "kraId": kraid,
        // "subKraId": "1432011",
        "role": this.userRole,
        "year": this.selectedGoalYear
        // "processType": "Annual",
        // "isDirectApprove": this.isDirectApproveStatus
      },
      zenDeavorURL: true
    }
    // this.isServiceCallOn = true

    this.httpProvider.http.commonService(kraDetails).subscribe((response) => {
      this.isServiceCallOn = false

      if (response) {
        this.utility.updateLoader(false)
        if (response['status']) {
          this.kraId = kraid
          this.getKRADetails(kraid)



        }
      }

    }, (err) => {
      this.utility.updateLoader(false)
      this.utility.showAlert('Goal Setting', Constants["Server_Error_Message"])
    })


  }

  deleteKra(kraid) {
    // console.log("kraid on delte", kraid)
    this.utility.updateLoader(true)
    let kraDetails = {
      url: this.deleteKraUrl,
      data: {
        "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
        "kraId": kraid,
        // "subKraId": "1432011",
        "role": this.userRole,
        "year": this.selectedGoalYear
        // "processType": "Annual",
        // "isDirectApprove": this.isDirectApproveStatus
      },
      zenDeavorURL: true
    }
    // this.isServiceCallOn = true

    this.httpProvider.http.commonService(kraDetails).subscribe((response) => {
      this.isServiceCallOn = false

      if (response) {
        this.utility.updateLoader(false)
        if (response['status'] && response['status'].statusCode == '1') {
          if (kraid == '6')
            this.kraId = '5'
          else if (kraid == '7')
            this.kraId = '6'


          this.getKRADetails(this.kraId)



        }
      }

    }, (err) => {
      this.utility.updateLoader(false)
      this.utility.showAlert('Goal Setting', Constants["Server_Error_Message"])
    })


  }

  /**
  * Open Summary / Review Page
  */
  openReview() {


    this.navCtrl.push('ReviewGoalsPage', {
      userID: this.userID,
      // userID: this.KRADetails.userId,
      userRole: this.userRole,
      kraYear: this.selectedGoalYear,
      isDirectApprove: this.isDirectApprove
    })
  }


  // "You have made some changes.Do you want to save changes", 'Save changes?'
  presentConfirmAlert() {

    return new Promise((resolve, reject) => {
      let alert = this.alertCtrl.create({
        // title: 'Submit KRA',
        message: 'Are you sure you want to submit?',
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
              // reject(false);
              // return 
              // reject();
            }
          },
          {
            text: 'Submit',
            handler: () => {
              resolve(true);
              // return 


            }
          }
        ]
      });
      alert.present();
    })







  }

  /**
   *Final submit kra 
   */
  submitkra() {
    // if (!this.isDirectApproveStatus) {
    for (let i = 0; i < this.KRADetails.kraStatusList.length; i++) {

      if (this.KRADetails.kraStatusList.kraId != '0' && this.KRADetails.kraStatusList.kraId != '-1') {
        if (this.KRADetails.kraStatusList[i].status == "incomplete") {
          this.utility.presentAlert("Please fill all the KRAs")
          return
        }
      }
    }
    if (!this.reviewedKRACheckbx) {
      this.utility.presentAlert("Please select the check-box for final submission")
      return
    }
    if (!this.KRADetails.isWeightageCorrect) {
      this.utility.presentAlert(this.KRADetails.weightageAlert)
      return
    }

    this.presentConfirmAlert().then((userResponse) => {
      if (!this.utility.isEmptyOrNullOrUndefined(userResponse) && userResponse) {



        this.utility.updateLoader(true)
        let kraDetails = {
          url: this.submitGoalsUrl,
          data: {
            "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
            // "kraId": ,
            // "subKraId": "1432011",
            "role": this.userRole,
            "year": this.selectedGoalYear,
            // "processType": "Annual",
            "isDirectApprove": this.isDirectApprove
          },
          zenDeavorURL: true
        }
        // this.isServiceCallOn = true

        this.httpProvider.http.commonService(kraDetails).subscribe((response) => {
          this.isServiceCallOn = false

          if (response) {
            this.utility.updateLoader(false)
            if (response['status'] && response['status'].statusCode == '1') {
              let statusMessage = response['status'].statusMessage
              this.utility.presentAlert(statusMessage).then((res) => {
                this.getKRADetails('-1')
              })
            }
          }

        }, (err) => {
          this.utility.updateLoader(false)
          this.utility.showAlert('Goal Setting', Constants["Server_Error_Message"])
        })

      }

    })

  }

  resetForm(kraId) {
    this.formDetails.forEach(formField => {
      if (formField.isEditable && formField.bindWith == 'title') {
        this.GoalsForm.get('title').reset()
      }
      if (formField.isEditable && formField.bindWith == 'weightage') {
        this.GoalsForm.get('weightage').reset()
      }
      if (formField.isEditable && formField.bindWith == 'milestoneDate') {
        this.GoalsForm.get('milestoneDate').reset()
      }
      if (formField.isEditable && formField.bindWith == 'kraType') {
        this.GoalsForm.get('KRAtype').reset()
      }
      if (this.midtermfloorData.isEditable && formField.bindWith == 'midTerm') {
        this.GoalsForm.get('midTermFloor').reset()
      }
      if (this.midtermTargetData.isEditable && formField.bindWith == 'midTerm') {
        this.GoalsForm.get('midTermTarget').reset()
      }
      if (this.endtermfloorData.isEditable && formField.bindWith == 'annual') {
        this.GoalsForm.get('endTermFloor').reset()
      }
      if (this.endtermTargetData.isEditable && formField.bindWith == 'annual') {
        this.GoalsForm.get('endTermTarget').reset()
      }
      if (formField.isEditable && formField.bindWith == 'performanceMeasure') {
        this.GoalsForm.get('performanceMeasure').reset()
      }
    });

    // this.GoalsForm.reset()
    // if (kraId == '1') {
    //   if (this.kraTypeValue == 'Quantitative') {
    //     this.GoalsForm.patchValue({
    //       KRAtype: '',
    //       midTermFloor: '',
    //       midTermTarget: '',
    //       endTermFloor: '',
    //       endTermTarget: ''
    //     })
    //   }
    //   else if (this.kraTypeValue == 'Qualitative') {
    //     this.GoalsForm.patchValue({
    //       KRAtype: '',
    //     })
    //   }

    // }
    // else {
    //   this.GoalsForm.reset()

    // }
  }

  goToDashboard() {
    this.navCtrl.pop()
  }

  formValidator(group: FormGroup): any {
    if (group) {
      console.log(group)
      let midtermFloor = group.get("midTermFloor").value
      let midtermTarget = group.get("midTermTarget").value
      let endTermFloor = group.get("endTermFloor").value
      let endTermTarget = group.get("endTermTarget").value





      if (midtermFloor) {
        if (midtermTarget == '') {
          return { midtermTargetIsempty: true }
        }
      }
      if (midtermTarget) {
        if (midtermFloor == '') {
          return { midtermFloorIsempty: true }
        }
      }


      if (midtermFloor == midtermTarget && midtermFloor != '' && midtermTarget != '') {
        // if (group.get("midTermFloor").value !== group.get("midTermTarget").value) {
        return { midTermMatching: true };
      }
      // }
      if (endTermFloor == endTermTarget && endTermFloor != '' && endTermTarget != '') {
        // if (group.get("midTermFloor").value !== group.get("midTermTarget").value) {
        return { endTermMatching: true };
      }
      // if (milestoneDateVal != '' && this.milestoneEndDate != "") {
      //   let datesArray = milestoneDateVal.split('-')
      //   // ["2021", "03", "31"]
      //   console.log("datesArray", datesArray)
      //   if (datesArray[0] == this.maxYear) {
      //     console.log("in 2021")
      //     if (datesArray[1] > this.maxMonth) {
      //       console.log(">03", datesArray[1] > '03')
      //       return { invalidMilestoneDate: true };
      //     }
      //   }
      // }

    }

    return null;
  }

  openRedirectCommentsModal(commentData, redirectType) {
    let alert = this.alertCtrl.create({
      title: 'Appraiser Comments :' + redirectType,
      message: commentData,
      // header: 'Response Pending',
      mode: 'md',
      cssClass: 'redirectedCommentsAlert',
      // message: 'Ur msg',
      buttons: [
        // {
        //   text: 'Cancel',
        //   role: 'cancel',
        //   handler: () => {
        //     console.log('Cancel clicked');
        //     this.getKRADetails(kraid)

        //   }
        // },
        {
          text: 'OK',
          role: 'cancel',
          // cssClass: 'btnround btncancel',
          handler: () => {
            // console.log('Buy clicked');
            // this.saveKRA(true, this.GoalsForm, 'saveOnHeaderClick')
            // this.getKRADetails(this.kraId)
          }
        }
      ]
    });
    alert.present();
  }

  saveDataOnNextAlert(kraId) {
    let alert = this.alertCtrl.create({
      title: 'Save ',
      message: 'Do you want to Save/Discard.',
      // header: 'Response Pending',
      mode: 'md',
      cssClass: 'redirectedCommentsAlert',
      // message: 'Ur msg',
      buttons: [
        {
          text: 'Discard',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.kraId = this.currentKraId
            this.getKRADetails(this.kraId)
            // this.gotoNextButton()

          }
        },
        {
          text: 'Save',
          // role: 'cancel',
          // cssClass: 'btnround btncancel',
          handler: () => {
            this.kraId = kraId
            this.saveKRA(true, this.GoalsForm, 'saveOnHeaderClick')
            // this.getKRADetails(kraId)
          }
        }
      ]
    });
    alert.present();
  }


  savekraForHomePage() {
    // if (this.utility.isEmptyOrNullOrUndefined(this.selectedGoalYear)) {
    //   this.utility.presentAlert('Please select year')
    //   return;
    // }
    // if (this.utility.isEmptyOrNullOrUndefined(this.associateRoleStatus)) {
    //   this.utility.presentAlert('Please select Role')
    //   return;
    // }

    // if (this.utility.isEmptyOrNullOrUndefined(this.selectedGoalYear) && (this.utility.isEmptyOrNullOrUndefined(this.associateRoleStatus))) {
    //   this.utility.presentAlert('Please select year and Role')
    //   return;
    // }
    if (this.userRole == '1') {
      this.saveDetails = {
        url: this.saveKRAUrl,
        data: {
          "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
          "role": this.userRole,
          "kraId": 0,
          "year": this.selectedGoalYear,
          "contributor": this.associateRoleStatus == 'Individual Contributor' ? 1 : 2,
          "isNew": true,
          "finalStatus": this.finalStatus
        },
        zenDeavorURL: true
      }


      this.utility.updateLoader(true)

      this.httpProvider.http.commonService(this.saveDetails).subscribe((response) => {

        if (response) {
          this.utility.updateLoader(false)
          if (response['status'] && response['status'].statusCode == '1') {
            // let statusMessage = response['status'].statusMessage
            this.submitted = false

            // this.utility.presentAlert(statusMessage).then((res) => {
            // if () {
            // this.GoalsForm.reset()
            // this.gotoNextButton()

            // }

            // else{

            // }

            // })


          }
        }

      }, (err) => {
        this.utility.updateLoader(false)
        this.utility.showAlert('Goal Setting', Constants["Server_Error_Message"])
      })
    }
  }


  openGuidelinesPdf() {
    let encodedUrl = encodeURI(this.KRADetails.kraGuideLinesPdfUrl);
    let target = "_system";
    const browser = this.inappbrowser.create(encodedUrl, target, this.options);
  }

  startSpeech() {
    // this.prevtext = this.performancetext;
    // this.prevtext = this.performancetext;
    this.prevtext = this.GoalsForm.get('performanceMeasure').value


    this.showMic = false;
    this.showLoader = true
    this.speechRecognitionUtility.startListening().subscribe((value: string) => {
      if (this.utility.platformAvailable) {
        // this.showMic = false;
        // this.showLoader = true;
        // console.log("value", value)
        this.performancetext = this.prevtext + ' ' + value;
        this.performancetext.trim();
        this.GoalsForm.get('performanceMeasure').setValue(this.performancetext);

      }
      this.zone.run(() => {
        this.showLoader = false;
        this.showMic = true;
      })
    }, (error) => {
      this.zone.run(() => {
        this.showLoader = false;
        this.showMic = true;
      })

    })
  }

  gotoAddSubKra(subKRAList, isNewKra) {
    // console.log("subKRAList", subKRAList)
    if (this.KRADetails.isMaxLimitReached) {
      this.utility.presentAlert(this.KRADetails.maxLimitAlert)
      return
    }
    this.navCtrl.push('ZendeavorAddSubKrasPage', {
      userID: this.userID,
      // userID: this.KRADetails.userId,
      userRole: this.userRole,
      kraYear: this.selectedGoalYear,
      isDirectApprove: this.isDirectApprove,
      subKRAList: subKRAList,
      isNewSubKra: isNewKra
    })
  }

  showAlertForNewGoalSetting() {

    return new Promise((resolve, reject) => {
      let alert = this.alertCtrl.create({
        // title: 'Submit KRA',
        message: this.KRADetails.newKraAlertMessage,
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
              // reject(false);
              // return 
              // reject();
            }
          },
          {
            text: 'OK',
            handler: () => {
              resolve(true);
              // return 


            }
          }
        ]
      });
      alert.present();
    })
  }
  gotoperformanceMeasure(fieldTitle) {
    console.log("fieldTitle", fieldTitle)
    let modal = this.modalCtrl.create(PerformanceMeasuretextAreaComponent, {
      'data': {
        // userData: this.userID,
        // redirectGoals: true,
        // year: this.kraYear
        performanceData: this.GoalsForm.get('performanceMeasure').value,
        pageTitle: fieldTitle
      }
    }, { cssClass: '' })
    modal.onDidDismiss(data => {
      // if (data === "SUBMITTED_DATA_SUCCESSFULLY") {
      //   this.navCtrl.pop()
      //   this.navCtrl.getPrevious().data.submitStatus = "true"
      //   // this.getAssociateData();
      // }

      console.log("data", data)
      if (data != null || data != undefined) {
        this.GoalsForm.get('performanceMeasure').setValue(data);
        this.GoalsForm.get('performanceMeasure').markAsDirty()
        this.cdr.detectChanges()
      }



    });
    modal.present()
  }

  editSubKRA(event, subKraItem, isNewKra) {
    // this.showEditButton(subKraItem.isMandatory,subKraItem.isEditable)
    // showEdit: subKraItem.isMandatory && subKraItem.isEditable ? true : false

    // this.showEditButton(subKraItem.isMandatory, subKraItem.isEditable)
    let popover = this
      .popoverCtrl
      .create('PopoverPage', {
        type: 'editSubKra', showEdit: this.showEditButton(subKraItem.isMandatory, subKraItem.isEditable), showDelete: this.showDeleteBtn(subKraItem.isMandatory, subKraItem.isEditable)

      })
    popover.present({ ev: event })

    popover.onDidDismiss((res) => {
      console.log('response', res)
      if (res == 'edit') {
        this.navCtrl.push('ZendeavorAddSubKrasPage', {
          userID: this.userID,
          // userID: this.KRADetails.userId,
          userRole: this.userRole,
          kraYear: this.selectedGoalYear,
          isDirectApprove: this.isDirectApprove,
          subKRAList: subKraItem.subKraFieldList,
          isNewSubKra: isNewKra,
          showSaveKRA: true,
          processType: 'Annual'

        })
      }
      if (res == 'delete') {
        this.deleteSubKra(subKraItem)
      }
    })
  }

  showEditButton(isMandatory, isEditable) {
    if (isMandatory && isEditable)
      return true
    else if (!isMandatory)
      return true
    else
      return false
  }
  showDeleteBtn(isMandatory, isEditable) {
    if (isMandatory)
      return false
    else
      return true
  }
  showMoreOptions(subkraItem) {
    if (subkraItem.isMandatory && !subkraItem.isEditable)
      return false
    else
      return true
  }

  deleteSubKra(kraItem) {

    // if (this.userRole == '1') {
    this.deleteDetails = {
      url: this.deleteSubKraUrl,
      data: {
        "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
        "subKraNumber": kraItem.subKraId,
        "titleKey": kraItem.titleKey,
        // "role": this.userRole,
        // "kraId": 0,
        "year": this.selectedGoalYear,
        // "contributor": this.associateRoleStatus == 'Individual Contributor' ? 1 : 2,
        // "isNew": true,
        // "finalStatus": this.finalStatus
      },
      zenDeavorURL: true
    }


    this.utility.updateLoader(true)

    this.httpProvider.http.commonService(this.deleteDetails).subscribe((response) => {

      if (response) {
        this.utility.updateLoader(false)
        if (response['status'] && response['status'].statusCode == '1') {
          let statusMessage = response['status'].statusMessage

          this.utility.presentAlert(statusMessage).then((res) => {
            // if () {
            // this.GoalsForm.reset()
            // this.gotoNextButton()

            // }

            // else{

            // }
            this.getKRADetails(1)

          })


        }
      }

    }, (err) => {
      this.utility.updateLoader(false)
      this.utility.showAlert('Goal Setting', Constants["Server_Error_Message"])
    })

    // }
  }

  viewSubKra(subKRAList, isNewKra, isMandatoryKra) {
    this.navCtrl.push('ZendeavorAddSubKrasPage', {
      userID: this.userID,
      // userID: this.KRADetails.userId,
      userRole: this.userRole,
      kraYear: this.selectedGoalYear,
      isDirectApprove: this.isDirectApprove,
      subKRAList: subKRAList,
      isNewSubKra: isNewKra,
      isMandatoryKra: isMandatoryKra,
      showSaveKRA: true,
      processType: 'Annual'
    })
  }

  maxDateValidator() {
    let enteredmilestoneDate = this.GoalsForm.get('milestoneDate').value


    if (!this.utility.isEmptyOrNullOrUndefined(enteredmilestoneDate)) {
      console.log("milestone validator value", enteredmilestoneDate)
      let datesArray = enteredmilestoneDate.split('-')
      if (datesArray[0] == this.maxYear) {
        console.log("in 2021")
        if (datesArray[1] > this.maxMonth) {
          console.log(">03", datesArray[1] > '03')
          this.invalidMilestoneDate = true
          // return { invalidMilestoneDate: true };
        }
        else {
          this.invalidMilestoneDate = false
        }
      }

      // let midtermFloor = group.get("midTermFloor").value
      // let midtermTarget = group.get("midTermTarget").value
      // let endTermFloor = group.get("endTermFloor").value
      // let endTermTarget = group.get("endTermTarget").value
      // let milestoneDateVal = group.get("milestoneDate").value
      // let milestoneDateVal = group.value

      // if (milestoneDateVal != '' && this.milestoneEndDate != "") {
      //   let datesArray = milestoneDateVal.split('-')
      //   // ["2021", "03", "31"]
      //   console.log("datesArray", datesArray)
      //   if (datesArray[0] == this.maxYear) {
      //     console.log("in 2021")
      //     if (datesArray[1] > this.maxMonth) {
      //       console.log(">03", datesArray[1] > '03')
      //       return { invalidMilestoneDate: true };
      //     }
      //   }
      // }








    }

    // return null;
  }

}


