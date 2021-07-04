import { Component, ViewChild, NgZone } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams, ModalController, PopoverController, AlertController } from 'ionic-angular';

import { HttpProvider } from '../../providers/http/http';
import { HttpAngularProvider } from '../../providers/http-angular/http-angular'
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import * as fromStore from "@app/store";
import { Store } from '@ngrx/store';
import { File } from '@ionic-native/file';
import { Attachment } from '../../providers/attachment/attachment';
import { AddCompetancyComponent } from '../../components/add-competency/add-competency';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { ZenrichStarPointsComponent } from '../../components/zenrich-star-points/zenrich-star-points';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-referral-details',
  templateUrl: 'referral-details.html',
})

export class ReferralDetailsPage {
  private mainData: any = {};
  private formdata: { [k: string]: any } = {}
  private attachmentList: any = []
  private srfNo;
  private candidateProfileId;
  private showAdditionalInfo = false;
  private competencies: any;
  private fromsaved;
  private createNew;
  private compdata;
  private step1Validate: boolean = false;
  private step2Validate: boolean;
  private compValidate: boolean = true;
  private selectedFile = ""
  private selectedFileResponce;
  private isProfileDetails: boolean;
  private isCominFromProfile: boolean;
  private contenue: boolean = true;
  private comCount = 0;
  private maxDate;
  private fileExt;
  private shownext: boolean = false
  private showfooter: boolean = true
  private showoldDoc: boolean = true;
  private err;
  private diableSave: boolean = false;
  // private mainData.competencies =[]
  formData: FormData;
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
  paramsFromChatBot: any;

  @ViewChild('createReferral') form;
  constructor(public navCtrl: NavController, public navParams: NavParams, private inappbrowser: InAppBrowser,
    private httpProvider: HttpProvider, private modalCtrl: ModalController, private popoverctr: PopoverController,
    private alertCtrl: AlertController, private platform: Platform, private httpAngularProvider: HttpAngularProvider, private ngZone: NgZone, private attachment: Attachment, private file: File, private utility: CommonUtilities) {
    this.candidateProfileId = this.navParams.get('candidateProfileId');
    this.createNew = this.navParams.get('createNew');
    this.isProfileDetails = this.navParams.get('isComingFromProfileDetails');
    this.isCominFromProfile = this.navParams.get('isCominFromProfile');
    this.paramsFromChatBot = this.navParams.get('paramsFromChatBot');
    // console.log(this.navParams.get('paramsFromChatBot').createNew)
    if (this.paramsFromChatBot && this.paramsFromChatBot.createNew) {
      this.createNew = this.paramsFromChatBot.createNew;
      this.candidateProfileId = this.paramsFromChatBot.candidateProfileId
    }

    if (this.createNew) {
      this.fromsaved = true
    } else {
      this.fromsaved = false
    }
    this.srfNo = this.navParams.get('srfNo');
    this.getReferralData();
    this.formData = new FormData();
    this.getMaxDate()
    let self = this;
    window.addEventListener('native.keyboardshow', keyboardShowHandler);

    function keyboardShowHandler(e) {
      self.showfooter = false;
    }
    window.addEventListener('native.keyboardhide', keyboardHideHandler);
    function keyboardHideHandler(e) {
      self.showfooter = true;
    }

    platform.ready().then(() => {
      platform.registerBackButtonAction(() => {
        this.navCtrl.pop();
      })
    })

  }
  ionViewCanLeave() {
    if (this.step2Validate == false) {
      return new Promise((resolve, reject) => {
        let alert = this.alertCtrl.create({
          // title: 'Delete Skills',
          message: 'All changes will discard',
          cssClass: 'discard-alert',
          buttons: [
            {
              text: 'Ok',
              handler: resolve
            },
            {
              text: 'Cancel',
              role: 'cancel',
              handler: reject
            }

          ]
        }).present();
      });
    }

  }

  ionViewDidEnter() {
    this.showAdditionalInfo = false;
  }

  checkValidity() {
    this.formdata = this.form.value;
    if (!this.showAdditionalInfo) {
      this.validateStep1(this.formdata);
      this.utility.updateLoader(false);
    }
    else {
      this.validateStep2(this.formdata);
      this.utility.updateLoader(false);
    }
  }
  changeFlag() {
    this.step1Validate = false;
    this.step2Validate = false;
    this.shownext = false
  }
  getReferralData() {
    this.utility.updateLoader(true);
    const url: string = "getCandidateProfile";
    const data: any = { "candidateProfileId": this.candidateProfileId, "srfNumber": this.srfNo };
    this.utility.updateLoader(true);
    this.httpProvider.http
      .commonService({ url, data, zenRich: true })
      .subscribe(
        (res: any) => {
          //console.log(res)
          this.mainData = res.details;
          //console.log(this.mainData);
          setTimeout(() => {
            if (this.candidateProfileId != 0) {
              this.checkValidity();
              this.utility.updateLoader(false);
            }
          }, 100);

          this.utility.updateLoader(false);
        })
  }

  saveReferral(clickedFrom) {
    this.shownext = false
    this.diableSave = true;

    this.contenue = true;
    this.comCount = 0;
    this.utility.updateLoader(true);
    const url: string = "saveCandidateProfile";
    this.formdata = this.form.value;
    if (this.form.value.title != null) {
      let title = this.mainData.titleLov.filter(value => {
        return value.key == this.form.value.title;
      })

      this.mainData.titleValue = title[0].value;
    }
    if (this.form.value.gender != null) {
      let gender = this.mainData.genderLov.filter(value => {
        return value.key == this.form.value.gender;
      })
      this.mainData.genderValue = gender[0].value;
    }


    if (!this.showAdditionalInfo) {
      this.validateStep1(this.formdata);

    }
    else {
      this.validateStep2(this.formdata);
    }



    if (!this.showAdditionalInfo) {
      this.formdata.competencies = null;
      this.formdata.stepCount = 1;
    }
    else {
      this.competencies = this.mainData

      if (this.competencies.competencies == null) {
        this.formdata.competencies = [{
          "skillId": this.form.value.skillId,
          "proficiency": this.form.value.proficiency,
          "experience": this.form.value.proexperience,
          "lastUsed": this.form.value.lastUsed,
          "interest": this.form.value.interest
        }];
      } else {
        this.formdata.competencies = this.competencies.competencies;
      }

      this.formdata.stepCount = 2;
      if (this.step1Validate && this.step2Validate) {
        this.formdata.competencies.forEach((value) => {
          let item = [];
          item[0] = value;
          this.comCount += 1
          if (this.contenue == true) {
            this.competencyValidate(item)
          }


        })

      }
    }

    if (this.candidateProfileId != 0) {
      this.formdata.candidateProfileId = this.candidateProfileId;
    }
    if (this.srfNo != null) {
      this.formdata.srfNumber = this.srfNo;
    }
    if (this.step1Validate && this.step2Validate && this.compValidate) {
      this.formdata.panCard = this.formdata.panCard.toUpperCase()
      const data: any = this.formdata;
      //console.log(data)
      this.httpProvider.http
        .commonService({ url, data, zenRich: true })
        .subscribe(
          (res: any) => {
            //console.log(res)
            this.utility.showToast("Referral saved successfully.")

            this.candidateProfileId = res.details.candidateProfileId;
            this.shownext = true
            this.diableSave = false;
            console.log(this.candidateProfileId)
            // if(res.details.earnedPoints){
            //   this.openStarModal(res.details.earnedPointsMessage)
            // }
            // console.log(this.mainData);
            if (this.showAdditionalInfo && this.formdata.stepCount == 2 && !this.fromsaved && clickedFrom == 'next2') {
              this.goToReferralInfo()
            }
            else if (this.showAdditionalInfo && this.fromsaved && this.formdata.stepCount == 2 && this.isProfileDetails) {
              //this.goToprofilePage()
              this.navCtrl.pop();
            }
            else if (this.showAdditionalInfo && this.fromsaved && this.formdata.stepCount == 2 && this.isCominFromProfile) {
              this.navCtrl.pop();
              this.goToprofilePage();

            }
            if (clickedFrom == 'next') {

              this.showAdditional()

            }
            this.utility.updateLoader(false);
          }, error => {
            //console.log(error);
            this.utility.updateLoader(false);
          })
    }
    this.utility.updateLoader(false);
  }

  uploadDoc() {

    this.attachment.openDocument('').then((response) => {
      this.selectedFileResponce = response;
      this.uploadFile(this.selectedFileResponce)
    }).catch((error) => {
    })
  }

  getFileSize(bytes) {
    if (bytes == 0) return 'n/a'
    else {
      let num = (bytes / (1024 ** 2)).toFixed(2);

      return parseFloat(num)
    }

  }
  /**
   * Upload document service integration.
   * Associate upload the document as  supporting document while filling  KRAs. 
   */

  uploadFile(Uri) {
    let fileURI = Uri
    this.utility.updateLoader(true)

    let formData = new FormData()

    let uploadDocs = {
      url: "uploadDocument",
      data: formData,
      zenRich: true
    }

    this.file.resolveLocalFilesystemUrl(fileURI).then((entry: any) => {
      entry.file((file) => {

        const fileReader = new FileReader()
        fileReader.readAsArrayBuffer(file)
        fileReader.onloadend = ev => {
          let fileType = file.type
          let fileExt = fileURI.substring(fileURI.lastIndexOf('.') + 1)
          if (fileType == "application/msword") {
            fileExt = "doc"
          }
          else if (fileType == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
            fileExt = "docx"
          }
          else if (fileType == "application/pdf") {
            fileExt = "pdf"
          }
          else if (fileType == "application/vnd.oasis.opendocument.text") {
            fileExt = "odt"
          }

          if (fileType == "application/pdf" || fileExt == "doc" || fileExt == "odt" || fileExt == "docx" || fileType == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
            let fileSize = this.getFileSize(file.size)
            if (fileSize <= 3.00) {
              let imgBlob = new Blob([fileReader.result], { type: fileType })

              let fileName = new Date().getTime()
              formData.append("file", imgBlob, `${fileName}.${fileExt}`)
              formData.append("candidateProfileId", this.candidateProfileId)
              formData.append("type", "resume")

              /**
               * Upload documents service call : UploadKRADatials
               */
              this.httpAngularProvider.multimediaService(uploadDocs).subscribe((response: any) => {
                this.utility.updateLoader(false)
                if (response) {
                  if (response.status.statusCode == 1) {
                    this.utility.showToast("File uploaded successfully.")
                    // this.selectedFile = file.localURL.substring(file.localURL.lastIndexOf('/') + 1)



                    this.ngZone.run(() => {
                      this.showoldDoc = true;
                      this.mainData.candidateDocuments = [{}]
                      this.selectedFile = response.details.docUrl;
                      let fileName = this.selectedFile.substr(this.selectedFile.lastIndexOf('/') + 1);
                      this.fileExt = fileName.substr(fileName.lastIndexOf('.') + 1);
                      let document = {
                        "documentName": fileName,
                        "documentUrl": this.selectedFile
                      }
                      this.mainData.candidateDocuments[0] = document;

                    });

                  }
                }
              })
            }
            else {
              this.utility.updateLoader(false)
              this.utility.presentAlert("Please upload a resume less than 3mb.");
            }
          }
          else {
            this.utility.presentAlert("Please upload a valid file.")
            this.utility.updateLoader(false)
          }
        }

      })
    }).catch((error) => {
      this.utility.updateLoader(false)
    })

  }
  validateStep1(formdata) {
    this.utility.updateLoader(true);
    this.step1Validate = false;

    if (formdata.title == "" || formdata.title == null) {
      this.utility.presentAlert("Please enter title");
      this.diableSave = false;
      return;
    }
    if (formdata.firstName == "" || formdata.firstName == null) {
      this.utility.presentAlert("Please enter first name");
      this.diableSave = false;
      return;
    }
    else if (formdata.lastName == "" || formdata.lastName == null) {
      this.utility.presentAlert("Please enter last name");
      this.diableSave = false;
      return;
    }
    else if (formdata.emailAddress == "" || formdata.emailAddress == null) {
      this.utility.presentAlert("Please enter email address");
      this.diableSave = false;
      return;
    }

    else if (formdata.gender == "" || formdata.gender == null) {
      this.utility.presentAlert("Please enter gender");
      this.diableSave = false;
      return;
    }
    else if (formdata.dateOfBirth == "" || formdata.dateOfBirth == null) {
      this.utility.presentAlert("Please enter date of birth");
      this.diableSave = false;
      return;
    }
    else if (formdata.cellularNumber == "" || formdata.cellularNumber == null) {
      this.utility.presentAlert("Please enter cellular number");
      this.diableSave = false;
      return;
    }

    else if (formdata.panCard == "" || formdata.panCard == null) {
      this.utility.presentAlert("Please enter PAN number");
      this.diableSave = false;
      return;
    }
    else if (formdata.city == "" || formdata.city == null) {
      this.utility.presentAlert("Please enter city");
      this.diableSave = false;
      return;
    }
    else if (formdata.aboutCandidate == "" || formdata.aboutCandidate == null || formdata.aboutCandidate.length < 20) {
      this.utility.presentAlert("About candidate information must be at least 20 characters long");
      this.diableSave = false;
      return;
    }

    if (formdata.firstName != "" || formdata.firstName != null || formdata.lastName != "" || formdata.lastName != null) {
      var regex = /^[a-zA-Z, ]+$/;
      if (!regex.test(formdata.firstName) || !regex.test(formdata.lastName)) {
        this.utility.presentAlert("Please enter first name or last name in alphabet only");
        this.diableSave = false;
        return false;
      }


    }

    if (formdata.emailAddress != "" || formdata.emailAddress != null) {
      //previous regular expression taking ..before com
      //var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;

      var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(formdata.emailAddress)) {
        this.utility.presentAlert("This is not a valid email address");
        this.diableSave = false;
        return false;
      }
    }

    if (formdata.panCard != "" || formdata.panCard != null) {

      var regex = /[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}/;
      if (!regex.test(formdata.panCard)) {
        this.utility.presentAlert("This is not a valid PAN number");
        this.diableSave = false;
        return false;
      }
    }



    this.diableSave = false;
    this.step1Validate = true;

    this.step2Validate = true;
  }
  validateStep2(formdata) {
    this.utility.updateLoader(true);
    this.step2Validate = false;

    if (formdata.experience == "" || formdata.experience == null) {
      this.utility.presentAlert("Please select experience");
      return;
    }
    else if (formdata.noticePeriod == "" || formdata.noticePeriod == null) {
      this.utility.presentAlert("Please select notice period");
      return;
    }
    this.step1Validate = true;
    this.step2Validate = true;
  }

  competencyValidate(competencies) {
    this.compValidate = false;
    if (competencies[0].skillId == undefined || competencies[0].skillId == null) {
      this.utility.presentAlert("Please add competency");
      this.contenue = false;
      return;
    } else {
      if (competencies[0].skillId == undefined || competencies[0].skillId == null) {
        this.utility.presentAlert("Please select programing language");
        return;
      }
      else if (competencies[0].proficiency == undefined || competencies[0].proficiency == null) {
        this.utility.presentAlert("Please select proficiency of " + competencies[0].skillDesc);
        this.contenue = false;
        return;
      }
      else if (competencies[0].experience == undefined || competencies[0].experience == null) {
        this.utility.presentAlert("Please select experience of " + competencies[0].skillDesc);
        this.contenue = false;
        return;
      }
      else if (competencies[0].lastUsed == undefined || competencies[0].lastUsed == null) {
        this.utility.presentAlert("Please select last used of " + competencies[0].skillDesc);
        this.contenue = false;
        return;
      }
      else if (competencies[0].interest == undefined || competencies[0].interest == null) {
        this.utility.presentAlert("Please select interest of " + competencies[0].skillDesc);
        this.contenue = false;
        return;
      }
      else if (this.mainData.candidateDocuments == null) {
        this.utility.presentAlert("Please upload the resume");
        this.contenue = false;
        return;
      }
    }
    if (this.comCount == this.mainData.competencies.length) {
      this.compValidate = true;
    }


  }
  getMaxDate() {
    this.maxDate = new Date((new Date().getFullYear() - 18), new Date().getMonth(), new Date().getDate());
    this.maxDate = moment(this.maxDate).format("YYYY-MM-DD");
    //console.log(this.maxDate)

  }
  presentskillsConfirm(skillId, index) {
    if (this.mainData.competencies.length == 1) {
      this.utility.presentAlert("Atleast one competency is required");
    } else {
      let alert = this.alertCtrl.create({
        title: 'Delete Skills',
        message: 'Do you want to delete skills?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              //console.log('Cancel clicked');
            }
          },
          {
            text: 'Delete',
            handler: () => {
              this.deleteSkills(skillId, index);
              //console.log('delete clicked');
            }
          }
        ]
      });
      alert.present();
    }
  }
  presentsResumeConfirm(skillId, index) {
    let alert = this.alertCtrl.create({
      title: 'Delete Resume',
      message: 'Do you want to delete this resume?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteDocument();
            //console.log('delete clicked');
          }
        }
      ]
    });
    alert.present();
  }
  deleteDocument() {
    this.utility.updateLoader(true);
    const url: string = "deleteDocument";
    const data: any = { "type": "resume", "candidateProfileId": this.candidateProfileId };
    this.httpProvider.http
      .commonService({ url, data, zenRich: true })
      .subscribe(
        (res: any) => {
          //console.log(res)
          this.mainData.candidateDocuments = null;
          this.showoldDoc = false;
          this.utility.updateLoader(false);
          this.utility.showToast("Resume deleted successfully.")
        })
  }

  // Delete Skills
  deleteSkills(skillId, index) {
    this.utility.updateLoader(true);

    const url: string = "deleteSkill";
    const data: any = { "skillId": skillId, "candidateProfileId": this.candidateProfileId };
    this.httpProvider.http
      .commonService({ url, data, zenRich: true })
      .subscribe(
        (res: any) => {
          //console.log(res)
          this.mainData.competencies.splice(index, 1);
          this.utility.updateLoader(false);
          this.utility.showToast("Competency deleted successfully.")
        })


  }
  // **********************open pdf in inappbrowser*****************************************
  openPdfFile(url) {
    let encodedUrl = encodeURI(url);
    let target = "_system";
    const browser = this.inappbrowser.create(encodedUrl, target, this.options);
  }
  openStarModal(points) {
    let modal = this.modalCtrl.create(ZenrichStarPointsComponent, { "points": points }, {
      cssClass: 'starModal'
    });
    modal.present();
  }
  showAdditional() {
    this.showAdditionalInfo = true
  }
  goToBack() {
    this.showAdditionalInfo = false
  }
  goToReferralInfo() {
    this.navCtrl.push("ReferralInfoPage", { "ReferralInfo": this.formdata, "candidateProfileId": this.candidateProfileId, 'srfNo': this.srfNo, 'title': this.mainData.titleValue, "gender": this.mainData.genderValue })
  }
  goToprofilePage() {
    this.navCtrl.push("ZenrichProfilePage")
  }
  presentpopover(myEvent) {
    let popover = this
      .popoverctr
      .create('PopoverPage', { 'type': 'others' });
    popover.present({ ev: myEvent });
  }
  openCompetency(compItem, index, proLangLov, proficiencyLov, experienceLov, lastUsedLov, interestLov) {
    this.compdata = {
      "compItem": compItem,
      "prolangLov": proLangLov,
      "proficiencyLov": proficiencyLov,
      "experienceLov": experienceLov,
      "lastUsedLov": lastUsedLov,
      "interestLov": interestLov,
      "index": index
    }
    let modal = this.modalCtrl.create(AddCompetancyComponent, { "compdata": this.compdata }, {
      cssClass: 'competencyModal'
    });

    modal.onDidDismiss(changedata => {
      //console.log(changedata);
      if (changedata != undefined && changedata.index >= 0) {
        this.mainData.competencies[changedata.index] = changedata.data

      }
      else if (changedata != undefined && changedata.index < 0) {
        this.ngZone.run(() => {
          if (this.mainData.competencies != null) {
            this.mainData.competencies.push(changedata.data)
          }
          else {
            this.mainData.competencies = []
            this.mainData.competencies.push(changedata.data)
          }

        });

      }
    });
    modal.present();
  }
}
