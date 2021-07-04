import { Download } from './../../../providers/download/download';
import { ModalController, Navbar, Platform } from 'ionic-angular';
import { NgZone, ChangeDetectorRef, ViewChild } from '@angular/core';
import { SpeechRecognitionUtility } from './../../../providers/speechRecognition/speechRecognition';
import { HttpProvider } from './../../../providers/http/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpAngularProvider } from './../../../providers/http-angular/http-angular';
import { CommonUtilities } from './../../../providers/commonUtilities/commonUtilities';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Constants } from "@app/constants";
import { Attachment } from '../../../providers/attachment/attachment'
import { File } from '@ionic-native/file'
import { PerformanceMeasuretextAreaComponent } from '../../../components/performance-measuretext-area/performance-measuretext-area';
import { Keyboard } from '@ionic-native/keyboard'


/**
 * Generated class for the ZendeavorAddSubKrasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zendeavor-add-sub-kras',
  templateUrl: 'zendeavor-add-sub-kras.html',
})
export class ZendeavorAddSubKrasPage
{
  private KRADetailsUrl: string = "getKraData"
  private saveKRAUrl: string = "saveSubKraData"
  private addKRAUrl: string = 'addKra'
  private deleteKraUrl: string = 'removeKra'
  private userRole: any
  private kraType: any
  private KRADetails: any = {}
  private userID: any
  private goalsDetails: any;
  GoalsForm: FormGroup
  private showMidEndTermValues: any = false;
  // private selectedGoalYear: any
  private isServiceCallOn: boolean = false
  private formDetails: any = []
  private midTermDetails: any;
  private midtermfloorData: any
  private midtermTargetData: any
  private endTermDetails: any;
  private endtermfloorData: any
  private endtermTargetData: any
  private submitted = false;
  private submitGoalsUrl = 'submitKra'
  private kraTypeValue: any
  private associateRoleStatus: any
  // private kraWeightageValue: any;
  private kraFormsTitle: any;
  private performanceMeasureValue: any
  private milestoneDate: any;
  private tooltipEvent: 'click' | 'press' = 'click'
  private subKRAList: any
  private KRAyear: any
  private showLoader = false;
  private showMic = true;
  private performancetext = '';
  private prevtext = '';
  private newSubKralist: any
  private isNewSubKra: boolean = false
  private isMidtermDisabled: any
  private showCustomTitleInput: any
  private subTitleValue: string = ''
  private saveDetails: any
  @ViewChild(Navbar) navBar: Navbar;
  private isMandatoryKra: any
  private actualSubKras: any
  private disableLoaderOnClk: any
  private midtermInfo: any
  private endtermInfo: any
  private showSaveKRA: any
  private processType: any
  private attachmentList: any = []
  private uploadKRADetailsUrl: any = "uploadKraDetail"
  private deleteAttachmentUrl: any = "deleteAttachment"
  private isManagerOption: any
  private selfAppraisal: string
  private criticalIncident: string
  private managerSelfRating: any;
  private managerComments: string
  private achievement: any;
  private saveSubKraMidterm: any
  private saveSubKRAMidtermUrl: any = 'saveSubKraDetails';
  private reviewerOption: any;
  private reviewerRating: any;
  private reviewerComments: any;








  constructor(private navCtrl: NavController, private navParams: NavParams, private httpProvider: HttpProvider,
    private utility: CommonUtilities, private httpAngularProvider: HttpAngularProvider,
    private formBuilder: FormBuilder, private alertCtrl: AlertController,
    private speechRecognitionUtility: SpeechRecognitionUtility, private zone: NgZone, private cdr: ChangeDetectorRef,
    private platform: Platform, private attachment: Attachment, private file: File, private download: Download, private modalCtrl: ModalController, private keyBoard: Keyboard)
  {
    this.userRole = this.navParams.get('userRole')
    this.userID = this.navParams.get('userID')
    this.subKRAList = this.navParams.get('subKRAList')
    this.KRAyear = this.navParams.get('kraYear')
    this.isNewSubKra = this.navParams.get('isNewSubKra')
    this.isMandatoryKra = this.navParams.get('isMandatoryKra')
    this.showSaveKRA = this.navParams.get('showSaveKRA')
    console.log(this.showSaveKRA);
    this.processType = this.navParams.get('processType')
    this.reviewerOption = this.navParams.get('isReviewerOption');

    console.log(this.reviewerOption);
    //this.processType = 'Mid-Term';
    console.log("process type", this.processType)
    this.isManagerOption = this.navParams.get('isManagerOption')
    console.log("isManagerOption", this.isManagerOption)

    platform.registerBackButtonAction(() =>
    {
      if (this.isMandatoryKra && this.processType == 'Annual')
      {
        this.saveSubKra()
        this.disableLoaderOnClk = true
      }
      else
      {
        this.navCtrl.pop();

      }
    })


  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad ZendeavorAddSubKrasPage');
    this.GoalsForm = this.formBuilder.group({
      title: [{ value: '', disabled: false }, Validators.required],
      milestoneDate: [{ value: '', disabled: false }, Validators.required],
      KRAtype: [{ value: '', disabled: false }, Validators.required],
      midTermFloor: [{ value: '', disabled: true }],
      midTermTarget: [{ value: '', disabled: true }],
      endTermFloor: [{ value: '', disabled: true }, Validators.required],
      endTermTarget: [{ value: '', disabled: true }, Validators.required],
      performanceMeasure: ['', Validators.required],
      subTitle: ['']
    }, { validator: this.formValidator });
    // this.getKRADetails(1)
    this.setKRAdetails(this.subKRAList)
    this.cdr.detectChanges();



    this.navBar.backButtonClick = (e: UIEvent) =>
    {   /// add this event
      // this.navCtrl.getPrevious().data.submitStatus = 'false'
      // this.navCtrl.getPrevious().data.title = 'Preview'
      // this.navCtrl.getPrevious().data.kraId = '-1'
      console.log("back btn clicked")
      if (this.isMandatoryKra)
      {
        this.saveSubKra()
        this.disableLoaderOnClk = true
      } else
      {
        this.navCtrl.pop();

      }
    };



  }

  setKRAdetails(selectedKraItem)
  {
    // if(this.subKRAList)
    this.utility.updateLoader(true)
    if (this.isNewSubKra)
    {
      this.newSubKralist = this.subKRAList[0]
      console.log("newSubKralist", this.newSubKralist)
      this.KRADetails = this.newSubKralist
      this.formDetails = this.newSubKralist.subKraFieldList
    }
    else
    {
      this.newSubKralist = selectedKraItem
      console.log("newSubKralist", this.newSubKralist)
      this.KRADetails = this.newSubKralist
      console.log(this.KRADetails);
      console.log(this.KRADetails.associatesFeildList)

      this.formDetails = this.newSubKralist.subKraFieldList
    }

    if (this.processType == 'Mid-Term' || this.processType == 'Annual')
    {
      this.attachmentList = this.KRADetails.attachment
    }
    this.formDetails.forEach(field =>
    {
      // if (field.bindWith == 'year' && field.fieldType == 'label') {
      //   this.selectedGoalYear = field.titleValue
      // }
      if (field.bindWith == "title")
      {
        this.kraFormsTitle = field.titleValue
      }

      if (field.bindWith == 'milestoneDate')
      {
        this.milestoneDate = field.titleValue
      }
      if (field.bindWith == 'midTerm' && !this.utility.isEmptyOrNullOrUndefined(field.midTermFieldList))
      {
        this.midTermDetails = field.midTermFieldList
        this.midtermInfo = field
      }
      if (field.bindWith == "annual" && !this.utility.isEmptyOrNullOrUndefined(field.annualFielList))
      {
        this.endTermDetails = field.annualFielList
        this.endtermInfo = field
      }
      if (field.bindWith == "kraType")
      {
        console.log('kra type', field.titleValue)
        this.kraTypeValue = field.titleValue
      }


      if (field.bindWith == 'performanceMeasure')
      {
        this.performanceMeasureValue = field.titleValue
      }
      if (field.bindWith == 'subTitle')
      {
        this.subTitleValue = field.titleValue
      }
    });
    if (!this.utility.isEmptyOrNullOrUndefined(this.midTermDetails))
    {
      this.midtermfloorData = this.midTermDetails[0]
      this.midtermTargetData = this.midTermDetails[1]
      console.log("midtermfloorData", this.midtermfloorData)

    }
    if (!this.utility.isEmptyOrNullOrUndefined(this.endTermDetails))
    {
      this.endtermfloorData = this.endTermDetails[0]
      this.endtermTargetData = this.endTermDetails[1]
      console.log("midtermfloorData", this.endTermDetails)

    }


    if (!this.utility.isEmptyOrNullOrUndefined(this.kraTypeValue) && this.kraTypeValue == 'Qualitative')
    {
      // this.isMidtermDisabled = true
      // this.isEndTermDisabled = true
      this.showMidEndTermValues = true

      // this.GoalsForm.controls.midTermFloor.disable();
      // this.GoalsForm.controls.midTermTarget.disable();
      // this.GoalsForm.controls.endTermFloor.disable();
      // this.GoalsForm.controls.endTermTarget.disable();
    }
    else if (this.utility.isEmptyOrNullOrUndefined(this.kraTypeValue))
    {
      // this.GoalsForm.controls.midTermFloor.disable();
      // this.GoalsForm.controls.midTermTarget.disable();
      // this.GoalsForm.controls.endTermFloor.disable();
      // this.GoalsForm.controls.endTermTarget.disable();
      this.showMidEndTermValues = false

    }
    // incase of Quantitative
    else
    {
      // this.GoalsForm.controls.midTermFloor.enable();
      // this.GoalsForm.controls.midTermTarget.enable();
      // this.GoalsForm.controls.endTermFloor.enable();
      // this.GoalsForm.controls.endTermTarget.enable();
      this.showMidEndTermValues = true
    }
    if (this.kraFormsTitle == "Others")
    {
      this.GoalsForm.get('subTitle').setValidators([Validators.required])
      this.GoalsForm.get('subTitle').updateValueAndValidity()
    }
    else
    {
      this.GoalsForm.get('subTitle').clearValidators()
      this.GoalsForm.get('subTitle').updateValueAndValidity()

    }
    console.log("midterm info", this.midtermInfo)
    console.log("end info", this.endtermInfo)
    if (this.midtermInfo.isEditable)
    {
      this.GoalsForm.controls.midTermFloor.enable();
      this.GoalsForm.controls.midTermTarget.enable();
    }
    if (this.endtermInfo.isEditable)
    {
      this.GoalsForm.controls.endTermFloor.enable();
      this.GoalsForm.controls.endTermTarget.enable();
    }
    if (!this.midtermInfo.isEditable)
    {
      this.GoalsForm.controls.midTermFloor.disable();
      this.GoalsForm.controls.midTermTarget.disable();
    }
    if (!this.endtermInfo.isEditable)
    {
      this.GoalsForm.controls.endTermFloor.disable();
      this.GoalsForm.controls.endTermTarget.disable();
    }
    this.cdr.detectChanges()
    this.GoalsForm.setValue({
      title: this.kraFormsTitle,
      milestoneDate: this.milestoneDate,
      KRAtype: this.kraTypeValue,
      midTermFloor: this.midtermfloorData.titleValue,
      midTermTarget: this.midtermTargetData.titleValue,
      endTermFloor: this.endtermfloorData.titleValue,
      endTermTarget: this.endtermTargetData.titleValue,
      performanceMeasure: this.performanceMeasureValue,
      subTitle: this.subTitleValue
    })
    this.utility.updateLoader(false)
    console.log("this.GoalsForm", this.GoalsForm)

  }

  formValidator(group: FormGroup): any
  {
    if (group)
    {
      // console.log(group)
      let midtermFloor = group.get("midTermFloor").value
      let midtermTarget = group.get("midTermTarget").value
      let endTermFloor = group.get("endTermFloor").value
      let endTermTarget = group.get("endTermTarget").value


      if (midtermFloor)
      {
        if (midtermTarget == '')
        {
          return { midtermTargetIsempty: true }
        }
      }
      if (midtermTarget)
      {
        if (midtermFloor == '')
        {
          return { midtermFloorIsempty: true }
        }
      }


      if (midtermFloor == midtermTarget && midtermFloor != '' && midtermTarget != '')
      {
        // if (group.get("midTermFloor").value !== group.get("midTermTarget").value) {
        return { midTermMatching: true };
      }
      // }
      if (endTermFloor == endTermTarget && endTermFloor != '' && endTermTarget != '')
      {
        // if (group.get("midTermFloor").value !== group.get("midTermTarget").value) {
        return { endTermMatching: true };
      }

    }

    return null;
  }

  onSelectChange(selectedKRAtype)
  {
    console.log("event", selectedKRAtype)
    this.kraTypeValue = selectedKRAtype
    // this.GoalsForm.controls.midTermFloor.disable();
    // this.GoalsForm.controls.midTermTarget.disable();
    console.log("Goals form controls", this.GoalsForm.controls)

    if (selectedKRAtype == 'Qualitative' && !this.utility.isEmptyOrNullOrUndefined(selectedKRAtype))
    {
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
      this.GoalsForm.get('midTermFloor').updateValueAndValidity()
      this.GoalsForm.get('midTermTarget').updateValueAndValidity()
      this.GoalsForm.get('endTermFloor').updateValueAndValidity()
      this.GoalsForm.get('endTermTarget').updateValueAndValidity()
      // this.cdr.detectChanges();



    }
    else if (!this.utility.isEmptyOrNullOrUndefined(selectedKRAtype))
    {
      this.GoalsForm.controls.midTermFloor.enable();
      this.GoalsForm.controls.midTermTarget.enable();
      this.GoalsForm.controls.endTermFloor.enable();
      this.GoalsForm.controls.endTermTarget.enable();
      this.showMidEndTermValues = true
      this.GoalsForm.get('midTermFloor').updateValueAndValidity()
      this.GoalsForm.get('midTermTarget').updateValueAndValidity()
      this.GoalsForm.get('endTermFloor').updateValueAndValidity()
      this.GoalsForm.get('endTermTarget').updateValueAndValidity()
      // this.isMidtermDisabled = true
      // this.cdr.detectChanges();


    }

  }


  // resetForm(kraId) {

  //   this.GoalsForm.reset()

  // }
  resetForm(kraId)
  {

    this.formDetails.forEach(formField =>
    {
      if (formField.isEditable && formField.bindWith == 'title')
      {
        this.GoalsForm.get('title').reset()
      }
      if (formField.isEditable && formField.bindWith == 'subTitle')
      {
        this.GoalsForm.get('subTitle').reset()
      }
      if (formField.isEditable && formField.bindWith == 'milestoneDate')
      {
        this.GoalsForm.get('milestoneDate').reset()
      }
      if (formField.isEditable && formField.bindWith == 'kraType')
      {
        this.GoalsForm.get('KRAtype').reset()
      }
      if (this.midtermfloorData.isEditable && formField.bindWith == 'midTerm')
      {
        this.GoalsForm.get('midTermFloor').reset()
      }
      if (this.midtermTargetData.isEditable && formField.bindWith == 'midTerm')
      {
        this.GoalsForm.get('midTermTarget').reset()
      }
      if (this.endtermfloorData.isEditable && formField.bindWith == 'annual')
      {
        this.GoalsForm.get('endTermFloor').reset()
      }
      if (this.endtermTargetData.isEditable && formField.bindWith == 'annual')
      {
        this.GoalsForm.get('endTermTarget').reset()
      }
      if (formField.isEditable && formField.bindWith == 'performanceMeasure')
      {
        this.GoalsForm.get('performanceMeasure').reset()
      }
    });

  }

  onTitleChange(selectedOption)
  {
    console.log(selectedOption)
    // this.kraFormsTitle = selectedOption
    let selectKRAItem;
    if (!this.utility.isEmptyOrNullOrUndefined(selectedOption))
    {
      // if (!this.utility.isEmptyOrNullOrUndefined(this.subKRAList)){
      this.subKRAList.forEach(subKraItem =>
      {
        if (subKraItem.title == selectedOption)
        {
          console.log(subKraItem)
          selectKRAItem = subKraItem


        }

      });

    }
    // if (selectKRAItem.titleKey == '27')
    //   this.showCustomTitleInput = true
    this.isNewSubKra = false
    this.setKRAdetails(selectKRAItem)
  }
  startSpeech()
  {
    // this.prevtext = this.performancetext;
    // this.prevtext = this.performancetext;
    this.prevtext = this.GoalsForm.get('performanceMeasure').value


    this.showMic = false;
    this.showLoader = true
    this.speechRecognitionUtility.startListening().subscribe((value: string) =>
    {
      if (this.utility.platformAvailable)
      {
        // this.showMic = false;
        // this.showLoader = true;
        console.log("value", value)
        this.performancetext = this.prevtext + ' ' + value;
        this.performancetext.trim();
        this.GoalsForm.get('performanceMeasure').setValue(this.performancetext);

      }
      this.zone.run(() =>
      {
        this.showLoader = false;
        this.showMic = true;
      })
    }, (error) =>
    {
      this.zone.run(() =>
      {
        this.showLoader = false;
        this.showMic = true;
      })

    })
  }


  saveSubKra()
  {
    if (this.GoalsForm.invalid)
    {
      // this.utility.presentAlert("Please fill all the fields")
      this.submitted = true;
      return;
    }

    console.log("save kra details", this.KRADetails)
    this.saveDetails = {
      url: this.saveKRAUrl,
      data: {
        "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
        "year": this.KRAyear || '',
        // "role": this.userRole,
        // "kraId": this.kraId,
        "subKraNumber": this.KRADetails.subKraId,
        "title": this.KRADetails.titleKey,
        "subTitle": this.GoalsForm.get('subTitle').value,
        // "milestoneDate": this.GoalsForm.get('milestoneDate').value,
        "annualTarget": this.GoalsForm.get('endTermTarget').value,
        "annualFloor": this.GoalsForm.get('endTermFloor').value,
        "midtermFloor": this.GoalsForm.get('midTermFloor').value,
        "midtermTarget": this.GoalsForm.get('midTermTarget').value,
        "performanceMeasure": this.GoalsForm.get('performanceMeasure').value,
        "kraType": this.kraTypeValue == 'Quantitative' ? '1' : '2',
        "totalSubKra": this.KRADetails.totalSubKra
      },
      zenDeavorURL: true
    }
    this.utility.updateLoader(true)
    this.httpProvider.http.commonService(this.saveDetails).subscribe((response) =>
    {

      if (response)
      {
        this.utility.updateLoader(false)
        if (response['status'] && response['status'].statusCode == '1')
        {
          let statusMessage = response['status'].statusMessage
          this.submitted = false
          if (this.disableLoaderOnClk)
          {
            this.navCtrl.pop()

          }
          else
          {
            this.utility.presentAlert(statusMessage).then((res) =>
            {
              this.navCtrl.pop()
            })
          }




        }
      }

    }, (err) =>
    {
      this.utility.updateLoader(false)
      this.utility.showAlert('Goal Setting', Constants["Server_Error_Message"])
    })

  }

  saveSubKraForMidterm()
  {
    console.log("associatesFeildList", this.KRADetails.associatesFeildList)
    console.log("managerFeildList", this.KRADetails.managerFeildList)
    /**
     * this iterates the fields of the form and stores the value entered by the associate.
     */
    if (this.KRADetails.associatesFeildList != null)
    {
      this.KRADetails.associatesFeildList.filter((item) =>
      {
        if (item.bindWith == 'achievement')
          this.achievement = item.titleValue

        if (item.bindWith == 'selfAppraisal')
          this.selfAppraisal = item.titleValue

        if (item.bindWith == 'criticalIncident')
          this.criticalIncident = item.titleValue

      })
    }

    /**
   * this iterates the fields of the form and stores the value entered by the 1-Up manager.
   */
    if (this.KRADetails.managerFeildList != null)
    {
      this.KRADetails.managerFeildList.filter((managerItem) =>
      {
        //console.log("manager", this.KRADetails.managerFeildList)
        if (managerItem.bindWith == 'appraiserRating')
        {
          this.managerSelfRating = managerItem.titleValue
        }
        if (managerItem.bindWith == 'appraiserComment')
        {
          this.managerComments = managerItem.titleValue
        }
      })
    }

    /**
   * this iterates the fields of the form and stores the value entered by the reviewer.
   */

    if (this.KRADetails.reviewerFieldList != null)
    {
      this.KRADetails.reviewerFieldList.filter((reviewer) =>
      {
        //console.log("manager", this.KRADetails.managerFeildList)
        if (reviewer.bindWith == 'reviewerRating')
        {
          this.reviewerRating = reviewer.titleValue
        }
        if (reviewer.bindWith == 'reviewerComment')
        {
          this.reviewerComments = reviewer.titleValue
        }
      })
    }

    this.saveSubKraMidterm = {
      url: this.saveSubKRAMidtermUrl,
      data: {
        "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
        "kraId": this.KRADetails.kraId,
        "subKraId": this.KRADetails.subKraId,//ask
        "role": this.KRADetails.role,//ask
        "achievement": this.achievement,
        "criticalIncident": this.criticalIncident,
        "selfAppraisal": this.selfAppraisal,
        "appraiserRating": this.managerSelfRating,
        "appraiserComment": this.managerComments,
        "processType": this.processType,
        "reviewerRating": this.reviewerRating,
        "reviewerComment": this.reviewerComments,
        "maxTxn": this.KRADetails.tx_key,
      },
      zenDeavorURL: true
    }


    /**
     * A check is being applied on the fields of associate and manager to validate if any of these fields are empty then 
     * display a popup to alert the user about it.
     */
    if (this.KRADetails.associatesFeildList != null && this.userRole == '1')
    {
      if (this.achievement == '' || this.selfAppraisal == '' || this.criticalIncident == '')
      {
        // this.nameInputRef.setFocus();
        this.utility.presentAlert("Please fill all the mandatory fields.")
        return
      }
    } if (this.KRADetails.managerFeildList != null && this.userRole == '2')
    {
      if (this.managerSelfRating == '' || this.managerComments == '')
      {
        this.utility.presentAlert("Please fill all the mandatory fields.")
        return
      }
    }
    this.utility.updateLoader(true)

    this.httpProvider.http.commonService(this.saveSubKraMidterm).subscribe((response) =>
    {
      if (response)
      {
        this.utility.updateLoader(false)
        if (!this.utility.isEmptyOrNullOrUndefined(response['status']) && response['status'].statusCode == 1)
        {
          this.utility.presentAlert(response['status'].statusMessage).then(res =>
          {
            this.navCtrl.pop()
          })
        }
        else
        {
          this.utility.presentAlert(response['status'].statusMessage)
        }
      }

    },
      error =>
      {
        this.utility.updateLoader(false)
      });
  }
  pickFile(event)
  {
    this.attachment.openDocument('').then((response) =>
    {
      this.uploadFile(response)
    }).catch((error) =>
    {
    })
  }
  /**
  * Upload document service integration.
  * Associate upload the document as  supporting document while filling  KRAs. 
  */
  uploadFile(fileURI)
  {

    this.utility.updateLoader(true)

    let formData = new FormData()

    let uploadDocs = {
      url: this.uploadKRADetailsUrl,
      data: formData,
      zenDeavorURL: true
    }

    this.file.resolveLocalFilesystemUrl(fileURI).then((entry: any) =>
    {
      entry.file((file) =>
      {
        let s = this.getFileSize(file.size)
        if (s <= 5.00)
        {
          const fileReader = new FileReader()
          fileReader.readAsArrayBuffer(file)
          fileReader.onloadend = ev =>
          {
            let fileType = file.type

            if (fileType != "image/gif" && fileType != 'video/mp4')
            {
              let imgBlob = new Blob([fileReader.result], { type: fileType })
              let fileExt = fileType.substring(fileType.indexOf('/') + 1)
              if (fileType == "application/msword")
              {
                fileExt = "doc"
              }
              else if (fileType == "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
              {
                fileExt = "docx"
              }
              else if (fileType == "application/pdf")
              {
                fileExt = "pdf"
              }
              else if (fileType == "application/vnd.oasis.opendocument.text")
              {
                fileExt = "odt"
              }
              else if (fileType == "application/vnd.ms-excel")
              {
                fileExt = "xls"
              }
              else if (fileType == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
              {
                fileExt = "xlsx"
              }
              else if (fileType == "text/plain")
              {
                fileExt = "txt"
              }

              let fileName = new Date().getTime()
              formData.append("file", imgBlob, `${fileName}.${fileExt}`)
              formData.append("kraId", this.KRADetails.kraId)
              formData.append("subKraId", this.KRADetails.subKraId)
              formData.append("userId", this.userID)
              formData.append("processType", this.processType)


              /**
               * Upload documents service call : UploadKRADatials
               */
              this.httpAngularProvider.multimediaService(uploadDocs).subscribe((response: any) =>
              {
                this.utility.updateLoader(false)
                if (response)
                {
                  if (response.status.statusCode == 1)
                  {
                    this.utility.presentAlert("File uploaded successfully.")
                  }
                  if (response.details)
                  {
                    if (response.details.attachment)
                      this.attachmentList = response.details.attachment
                    console.log("response", response.details.attachment)
                    console.log("attachmentList", this.attachmentList)
                  }
                }
              })
            } else
            {
              this.utility.presentAlert("Please upload a photograph/file.")
              this.utility.updateLoader(false)
            }
          }
        } else
        {
          this.utility.presentAlert("Please upload a photograph less than 5mb.")
          this.utility.imageLoader(false)
        }
      })
    }).catch((error) =>
    {
      this.utility.updateLoader(false)
    })

  }

  /**
   * delete service call integration.
   * associates can delete the document uploaded by them.
   */
  deleteUploadedAttachment(attachements: any)
  {
    this.utility.presentConfirmation('Are you sure you want to delete this attachment ?', 'Confirmation').then(() =>
    {
      let deleteDocuments = {
        url: this.deleteAttachmentUrl,
        zenDeavorURL: true,
        data: {
          "userId": this.userID,
          "kraId": this.KRADetails.kraId,
          "subKraId": this.KRADetails.subKraId,
          "attachmentId": attachements.attachmentId,
          "processType": this.processType

        }
      }
      console.log("delete attachment", deleteDocuments)
      this.httpProvider.http.commonService(deleteDocuments).subscribe((response: any) =>
      {
        this.attachmentList = response.details.attachment
        console.log("response", response.details.attachment)
        console.log("attachmentList", this.attachmentList)
      })

    })
  }
  /**
 * this function opens the document which got uploaded
 * @param uploadKRADetailsUrl
 */
  openAsset(uploadKRADetailsUrl)
  {
    console.log("open asset", uploadKRADetailsUrl)
    this.utility.openAsset(uploadKRADetailsUrl)
    // if(this.platform.is('ios')){
    //   this.utility.openBrowserTab(uploadKRADetailsUrl)
    // }
    // else{
    //   this.download.downloadDocument(uploadKRADetailsUrl)
    // }
  }

  resetMidTermForm()
  {
    if (this.KRADetails.associatesFeildList != null && this.isManagerOption == false)
    {
      this.KRADetails.associatesFeildList.filter((item) =>
      {
        if (item.isShow)
          item.titleValue = ''
      })

      // this.attachmentList = ''
      if (this.attachmentList.length > 0)
      {
        for (let i = 0; i < this.KRADetails.attachment.length; i++)
        {

          this.resetAttachments(this.attachmentList[i]);
        }
      }
    }

    else if (this.KRADetails.managerFeildList != null && this.isManagerOption == true)
    {
      this.KRADetails.managerFeildList.filter((item) =>
      {
        item.titleValue = ''
      })

    }


  }
  resetAttachments(attachements)
  {
    let deleteDocuments = {
      url: this.deleteAttachmentUrl,
      zenDeavorURL: true,
      data: {

        "userId": this.userID,
        "kraId": this.KRADetails.kraId,
        "subKraId": this.KRADetails.subKraId,
        "attachmentId": attachements.attachmentId,
        "processType": this.processType

      }
    }
    this.httpProvider.http.commonService(deleteDocuments).subscribe((response: any) =>
    {
      this.attachmentList = response.details.attachment
    })
  }

  expandTextArea(pageTitle, val, index, sel, updateValue)
  {

    try
    {
      this.keyBoard.hide();
    } catch (e)
    {
      console.log('Keyboard will not close', e)
    }
    console.log(val, index, sel, updateValue)
    let modal = this.modalCtrl.create(PerformanceMeasuretextAreaComponent, {
      'data': {
        performanceData: val,
        pageTitle: pageTitle,
      }
    }, { cssClass: '' })
    modal.onDidDismiss(data =>
    {
      if (data != null || data != undefined)
      {
        console.log("Updated value", data, this.KRADetails);
        this.KRADetails[sel].map((res, i) =>
        {
          if (i == index)
          {
            res[updateValue] = data;
          }
        })
      }
    });
    modal.present()
  }

  gotoperformanceMeasure(fieldTitle)
  {
    console.log("fieldTitle", fieldTitle)
    let modal = this.modalCtrl.create(PerformanceMeasuretextAreaComponent, {
      'data': {
        performanceData: this.GoalsForm.get('performanceMeasure').value,
        pageTitle: fieldTitle
      }
    }, { cssClass: '' })
    modal.onDidDismiss(data =>
    {
      if (data != null || data != undefined)
      {
        this.GoalsForm.get('performanceMeasure').setValue(data);
        this.GoalsForm.get('performanceMeasure').markAsDirty()
        this.cdr.detectChanges()
      }



    });
    modal.present()
  }

  getFileSize(bytes)
  {
    if (bytes == 0) return 'n/a'
    else
    {
      let num = (bytes / (1024 ** 2)).toFixed(2);

      return parseFloat(num)
    }

  }
}

