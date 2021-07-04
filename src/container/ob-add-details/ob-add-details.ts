import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, Navbar, AlertController } from 'ionic-angular';
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import { Observable } from "rxjs";
import { Subscription } from 'rxjs/Subscription';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FormControlService } from '../../providers/formService/form-control.service';
import { Attachment } from '../../providers/attachment/attachment';
import { File } from '@ionic-native/file';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';


@IonicPage()
@Component({
  selector: 'page-ob-add-details',
  templateUrl: 'ob-add-details.html',
})
export class ObAddDetailsPage
{
  data: any = {};
  loading$: Observable<any>;
  loader: Loading;
  AddDetailsForm: FormGroup = this.formBuilder.group({});
  AddDetailsArray: FormGroup;
  obGroup: FormGroup = this.formBuilder.group({});
  wholeDetails: Array<any> = [];
  fieldArray: any;
  private _getobData: Subscription = new Subscription();
  private _getobUploadData: Subscription = new Subscription();
  private _getAddDetailsSubscription: Subscription = new Subscription();
  private _addLoadingListener: Subscription = new Subscription();
  private _uploadLoadingListener: Subscription = new Subscription();
  private _addSuccessListener: Subscription = new Subscription();
  showForm: boolean = false;
  docList: any;
  formData: FormData;
  showAddOptions: boolean = false;
  @ViewChild(Navbar) navBar: Navbar;
  section: string;
  formMessage: any;
  isAvailableForSubmit: boolean = false;
  isUserProfile: boolean = false;
  presonalSaveBtn: boolean;
  isSkillDataAvaliable: boolean;
  isComingFromProfile: boolean = false;
  expLabel: any;
  expValue: any;
  private highlightField: string = null;
  private resolve: Function;
  isImageLoading: boolean = false
  btnDisabled: boolean = false;

  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private store: Store<fromStore.AppState>,
    private formBuilder: FormBuilder,
    private formCtrlService: FormControlService,
    private attachment: Attachment,
    private file: File,
    private utility: CommonUtilities,
    private alertCtrl: AlertController)
  {
    this.formData = new FormData();
  }

  ionViewDidLoad()
  {
    this.data = this.navParams.get('selectedField');
    console.log('Skill Data', this.data)
    this.resolve = this.navParams.get('resolve');
    this.highlightField = this.navParams.get('highlightField');
    setTimeout(() =>
    {
      this.highlightField = null;
    }, 5000);
    this.section = this.data.section;

    this.formMessage = this.data.formMessage;
    this.isAvailableForSubmit = this.data.isAvailableForSubmit;


    if (this.section == 'onboarding')
    {
      if (this.data && this.data.mode != 'add')
      {
        if (this.data.selectedTab != 0)
        {
          this.showAddOptions = true;
        }
      } else
      {
        this.showAddOptions = false;
      }

    }

    if (this.section == "personal" || this.section == "experience")
    {
      this.isUserProfile = this.data.isAvailableForFinalSubmit;

    }

    if (this.section == 'skills')
    {
      if (this.data.mode != 'add')
      {
        this.showAddOptions = true;
      } else
      {
        this.showAddOptions = false;
      }
      this.isSkillDataAvaliable = this.data.isSkillAvailableForSubmit;

    }

    //for showing expeience

    if (this.data.experienceData)
    {
      this.expLabel = this.data.experienceData.key;
      this.expValue = this.data.experienceData.value;
    }



    this.loading$ = this.store.select<any>(fromStore.getObAddDetailLoading);

    this._addLoadingListener = this.store.select<any>(fromStore.ObAddDetailsSubmitLoading).subscribe(state =>
    {
      this.utility.updateLoader(state);
    });

    this._uploadLoadingListener = this.store.select<any>(fromStore.getObAddDetailsUploadLoading).subscribe(state =>
    {
      this.utility.updateLoader(state);
    });

    this._addSuccessListener = this.store.select<any>(fromStore.getObAddDetailState).subscribe(data =>
    {

      if (data.submitData)
      {
        this.store.dispatch(new fromStore.ObAddDetailsResetAction());
        this.utility.presentAlert('Saved successfully').then(() =>
        {
          this.navCtrl.pop();
        });
      }

      if (data.deleteData)
      {
        this.store.dispatch(new fromStore.ObAddDetailsResetAction());
        this.utility.presentAlert('Deleted successfully').then(() =>
        {
          this.navCtrl.pop();
        });
      }

    });

    this.getData();
    this.setBackButtonAction();
  }

  setBackButtonAction()
  {
    this.navBar.backButtonClick = () =>
    {

      if (this.obGroup.dirty)
      {

        this.utility.presentConfirmation('Do you want to discard your changes?').then(() =>
        {
          this.store.dispatch(new fromStore.ObAddDetailsResetAction());
          this.navCtrl.pop();
        }).catch(() =>
        {

        })

      } else
      {
        this.navCtrl.pop();
      }
    }
  }

  get obDetails()
  {
    return this.obGroup.controls['myprofile'] as FormArray;
  }

  getData()
  {

    let url, data;

    if (this.section == 'onboarding')
    {
      url = 'getTypeSpecificAllDetails';
      data = this.data;
    } else if (this.section == 'experience')
    {
      url = "getAssociateSingleExperienceData";
      data = this.data;
    } if (this.section == 'personal')
    {
      url = 'getAssociatePersonalData';
      data = {};
    } if (this.section == 'skills')
    {
      url = 'getAssociateSingleSkillDetails';
      data = this.data;
    }

    this.store.dispatch(new fromStore.GetObAddDetailAction(url, this.section, data));

    this._getobData = this.store.select<any>(fromStore.getObAddDetailEditData).subscribe(response =>
    {



      if (response)
      {

        if (this.section == "personal")
        {
          this.fieldArray = response.persnalInfoDetails;
          this.presonalSaveBtn = response.showSubmit;

        }
        if (this.section == 'experience')
        {
          this.fieldArray = response.responseList;

        }
        if (this.section == 'onboarding')
        {
          this.fieldArray = response.responseList;
        }
        if (this.section == 'skills')
        {
          this.fieldArray = response;
        }




        this.obGroup = this.formBuilder.group({
          myprofile: this.formBuilder.array([])
        })

        this.obDetails.push(this.formCtrlService.toFormGroup(this.fieldArray))



        this.showForm = true;


      }

    })

    this._getobUploadData = this.store.select<any>(fromStore.getObAddDetailsUploadData).subscribe(response =>
    {

      if (response)
      {
        if (response.details.responseList)
        {


          let uploadData = response.details.responseList;


          let parentKey = uploadData.parentBindWith;

          if (!parentKey)
          {

            let key = uploadData.bindWith;
            let profile_formArray = this.obDetails;
            let file_formArray = profile_formArray.controls[0].get(key) as FormArray;
            file_formArray.controls[0].patchValue({ [key]: uploadData.docURL })


          } else
          {

            let key = uploadData.bindWith;
            let profile_formArray = this.obDetails;
            let file_formArray = profile_formArray.controls[0].get(parentKey) as FormArray;
            let controls = file_formArray.controls;

            controls.forEach(control =>
            {

              if (control.get(key))
              {

                control.get(key).setValue(uploadData.docURL)
              }

            })

          }
          if (response.status.statusCode == 1)
          {
            this.isImageLoading = false;
            this.utility.presentAlert("File uploaded successfully").then(() =>
            {
              this.store.dispatch(new fromStore.ObUploadDocumentActionReset());
            })
          }
        }
      }

    })

  }

  dropDownListChange(dropObject)
  {

    // if(this.fieldArray.)

    if (this.fieldArray[0].fieldType == "checkbox")
    {
      if (dropObject.isChecked)
      {
        this.fieldArray[0]['Yes'].map((item) =>
        {
          if (item.bindWith == dropObject.bindWith)
          {
            //item.lov = dropObject.dropDownValue;

            item.lov = dropObject.dropDownValue;

          }
        })
      } else
      {
        this.fieldArray[0]['No'].map((item) =>
        {
          if (item.bindWith == dropObject.bindWith)
          {
            //item.lov = dropObject.dropDownValue;

            item.lov = dropObject.dropDownValue;

          }
        })
      }

    } else
    {
      this.fieldArray.map((item) =>
      {
        if (item.bindWith == dropObject.bindWith)
        {
          item.lov = dropObject.dropDownValue;
        }
        if (dropObject.bindWith == "skillFamilyCode" && item.bindWith == 'skillId')
        {
          item.lov = [];
        }
      })
    }


  }

  startFileUpload(event)
  {

    if (this.data.mode == 'add')
    {
      let referenceId = parseInt(this.data.addReferenceId) + 1;
      event.referenceId = referenceId.toString();
    } else
    {
      event.referenceId = parseInt(this.data.referenceId);
    }



    this.attachment.openDocument(event.docType).then((response) =>
    {

      this.docList = response;

      this.uploadFile(event);

    }).catch((error) =>
    {

    })
  }

  uploadFile(params)
  {

    this.utility.imageLoader(true);
    let uploadURL;

    if (this.section == 'onboarding')
    {
      uploadURL = 'uploadAttachment';
    } else if (this.section == 'experience')
    {
      uploadURL = 'uploadExperienceDocuments';
    } if (this.section == 'personal')
    {
      uploadURL = 'uploadPersonalDocuments';
    }
    if (this.section == 'skills')
    {
      uploadURL = 'uploadSkillDocuments';
    }
    this.formData = new FormData();

    for (let [key, value] of Object.entries(params))
    {
      let objValue: any = value;
      //if(objValue){

      this.formData.append(key, objValue);
      //}
    }



    this.file.resolveLocalFilesystemUrl(this.docList).then((entry: any) =>
    {
      entry.file((file) =>
      {

        let s = this.getFileSize(file.size);

        if (s <= 5.00)
        {
          const fileReader = new FileReader();

          fileReader.readAsArrayBuffer(file);
          fileReader.onloadend = ev =>
          {
            let fileType = file.type;


            if (fileType != "image/gif" && fileType != 'video/mp4')
            {
              let imgBlob = new Blob([fileReader.result], { type: fileType });
              let fileExt = fileType.substring(fileType.indexOf('/') + 1);
              let fileName = new Date().getTime();

              this.formData.append('file', imgBlob, `${fileName}.${fileExt}`);
              this.utility.imageLoader(false);
              this.isImageLoading = true;
              this.store.dispatch(new fromStore.ObUploadDocumentAction(uploadURL, this.section, this.formData));
            } else
            {
              this.isImageLoading = false;
              this.utility.presentAlert("Please upload a photograph/file.");
              this.utility.imageLoader(false);
            }

          }
        } else
        {
          this.isImageLoading = false;
          this.utility.presentAlert("Please upload a photograph less than 5mb.");
          this.utility.imageLoader(false);
        }


      })
    }).catch((error) =>
    {
      this.isImageLoading = false;
    });

  }

  private markFormGroupTouched(formGroup: FormGroup)
  {

    (<any>Object).values(formGroup.controls).forEach(control =>
    {
      control.markAsTouched();
    });
  }

  save(form)
  {



    let url, overallItems: any = [], overallObject;


    Object.keys(form.controls)
      .forEach(key =>
      {
        let currentControl = form.controls[key].controls;
        currentControl.forEach((item) =>
        {

          (<any>Object).values(item.controls).forEach(fromArray =>
          {
            // if (fromArray.controls[0].status != 'DISABLED') {

            if (this.section == 'personal' && fromArray.controls[0].dirty && fromArray.controls[0].status != 'DISABLED')
            {
              overallItems.push(fromArray.controls[0].value);
            }

            let formControls = fromArray.controls;
            formControls.forEach((item, j) =>
            {
              this.markFormGroupTouched(fromArray.controls[j]);

              if (this.section != 'personal')
              {
                overallItems.push(fromArray.controls[j].value);
              }

            })
            // }
          })


          overallObject = Object.assign({}, ...overallItems.flat());


        })
      });



    if (form.valid)
    {



      if (this.section == 'onboarding')
      {

        url = 'submitOnboardingDetails';

        if (this.data && this.data.mode == 'add')
        {
          overallObject.referenceId = parseInt(this.data.addReferenceId) + 1;
        } else
        {
          overallObject.referenceId = this.data.referenceId;
        }

        overallObject.type = this.data.type;

      } else if (this.section == 'experience')
      {

        url = "updateAssociateExperienceData";

        if (this.data && this.data.mode == 'add')
        {
          overallObject.experienceId = parseInt(this.data.addReferenceId) + 1;
        } else
        {
          overallObject.experienceId = this.data.experienceId;
        }

      } if (this.section == 'personal')
      {

        url = 'updateAssociatePersonalData';

      }

      if (this.section == 'skills')
      {

        url = 'updateAssociateSkills';

      }



      if (Object.keys(overallObject).length > 0)
      {
        let alert = this.alertCtrl.create({
          message: 'Do you want to save the data ?',
          enableBackdropDismiss: false,
          buttons: [
            {
              text: 'No',
              role: 'no',
              handler: () =>
              {

              }

            },
            {
              text: 'Yes',
              handler: () =>
              {

                // previously only one service call for submitting the data
                this.store.dispatch(new fromStore.ObAddDataAction(url, this.section, overallObject));
                // this.navCtrl.pop();
                //two apis called on save click for saving details through rejected documents.
                /* let  urlRejected: string = "getRejectedDocumentDashboard";
                this.store.dispatch(new fromStore.RejectedDocsAction(urlRejected)) */



              }
            }
          ],

        });

        alert.present();
      } else
      {
        this.utility.presentAlert("Please update your details to save the form.")
      }



      /*  this.store.dispatch(new fromStore.ObAddDataAction(url, this.section, overallObject)); */
    }

  }

  ionViewWillLeave()
  {
    this._getobData.unsubscribe();
    this._getobUploadData.unsubscribe();
    this._addSuccessListener.unsubscribe();
    this._addLoadingListener.unsubscribe();
    this._getAddDetailsSubscription.unsubscribe();
    this._uploadLoadingListener.unsubscribe();
    if (this.resolve)
    {
      this.resolve();
    }
  }

  removeItem()
  {
    this.utility.presentConfirmation('Do you want to delete?', 'Confirmation').then(() =>
    {


      let url = 'deleteInfo';

      let params = {
        "type": this.data.type,
        "referenceId": this.data.referenceId
      };

      if (this.data.mode == 'add')
      {
        params.referenceId = parseInt(this.data.addReferenceId) + 1;
      } else
      {
        params.referenceId = this.data.referenceId;
      }

      this.store.dispatch(new fromStore.ObDeleteDataAction(url, params));


    })
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


  removeSkilss(form)
  {
    let overallItems: any = [], overallObject;
    let url = 'updateAssociateSkills';
    let profile_formArray = this.obDetails;
    let file_formArray = profile_formArray.controls[0].get('hrmsStatus') as FormArray;
    file_formArray.controls[0].patchValue({ 'hrmsStatus': "Delete" })



    Object.keys(form.controls)
      .forEach(key =>
      {
        let currentControl = form.controls[key].controls;
        currentControl.forEach((item) =>
        {

          (<any>Object).values(item.controls).forEach(fromArray =>
          {
            //if (fromArray.controls[0].status != 'DISABLED') {

            if (this.section == 'personal' && fromArray.controls[0].dirty)
            {
              overallItems.push(fromArray.controls[0].value);
            }

            let formControls = fromArray.controls;
            formControls.forEach((item, j) =>
            {
              //this.markFormGroupTouched(fromArray.controls[j]);

              if (this.section != 'personal')
              {
                overallItems.push(fromArray.controls[j].value);
              }

            })
            // }
          })


          overallObject = Object.assign({}, ...overallItems.flat());


          let alert = this.alertCtrl.create({
            message: 'Do you want to delete your skill data ?',
            enableBackdropDismiss: false,
            buttons: [
              {
                text: 'No',
                role: 'no',
                handler: () =>
                {

                }
              },
              {
                text: 'Yes',
                handler: () =>
                {

                  this.store.dispatch(new fromStore.ObAddDataAction(url, this.section, overallObject));
                }
              }
            ],

          });

          alert.present();

        })
      });


  }

  toggleBtn(value)
  {
    console.log(value);
    this.btnDisabled = value;
  }
  /**
   *New method for total experience click navigation */
  goToEditExp()
  {
    this.navCtrl.push('EditProfilePage', {
      'type': this.data.experienceData.type,
      'hasRequested': this.data.experienceData.hasRequested,
      'hasRequestedShowMsg': this.data.experienceData.hasRequestedShowMsg
    });
  }
  ionViewCanLeave()
  {

    return !this.isImageLoading;
  }

}
