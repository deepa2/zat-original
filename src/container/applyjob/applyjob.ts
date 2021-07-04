import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, PopoverController, Platform } from 'ionic-angular';
import * as fromStore from "@app/store";
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Data } from '../../providers/data/data';
import { Attachment } from '../../providers/attachment/attachment';
import { File } from '@ionic-native/file';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { Download } from '../../providers/download/download';

/**
 * Generated class for the ApplyjobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-applyjob',
  templateUrl: 'applyjob.html',
})
export class ApplyjobPage {

  type: any;
  userDetails: any
  personalDetails: Array<any> = [];
  applySelectedJob: any
  loading$: Observable<any>
  data: any;
  formData: FormData;
  userId: any;
  isDataAvailable: boolean = false
  internalJobPostingurl: string = "getAllOpenSRF";
  private _homeDataListner: Subscription = new Subscription();
  private _uploadResumeListner: Subscription = new Subscription();
  private _uploadResumeData: Subscription = new Subscription();
  private _submitResumeListner: Subscription = new Subscription();
  private _submitResumeData: Subscription = new Subscription();
  private _profileDataListner: Subscription = new Subscription();
  isResumeUploaded: boolean = false;
  addText = '';
  showDownload: boolean = true;

  constructor(private navCtrl: NavController, private navParams: NavParams, private store: Store<fromStore.AppState>,
    data: Data, private attachment: Attachment,
    private file: File, private platform: Platform,
    private utility: CommonUtilities, private alertCtrl: AlertController, private download: Download, private popoverCtrl: PopoverController) {
    this.utility.updateLoader(true)

    this.formData = new FormData();
    this.applySelectedJob = this.navParams.get('jobDetails')

  }

  ionViewDidLoad() {
    if (this.platform.is('ios')) {
      this.showDownload = false;
    }
    this.getHomeData();
    this.loading$ = this.store.select<any>(fromStore.getApplyJobLoading);
    let params = {
      'userId': this.userId,
      'type': 'ijp',
      'role': 'associate'
    }
    this.store.dispatch(new fromStore.GetApplyJobAction("getUserProfile", params))
    this.utility.updateLoader(false)
    this._profileDataListner = this.store.select<any>(fromStore.getApplyJobData).subscribe(response => {
      if (response) {
        if (response.details) {
          if (response.details.userProfiledetails) {
            this.isDataAvailable = true;
            this.userDetails = response.details
            this.type = this.userDetails.userProfiledetails[0].key;
            this.personalDetails = this.userDetails.userProfiledetails[0].value
          }
        }
      }
    })
  }

  getHomeData() {
    //);
    this._homeDataListner = this.store.select<any>(fromStore.getMiscData).subscribe(response => {
      if (response && response.userDetails && response.userDetails.employeeId)
        this.userId = response.userDetails.employeeId;
    })
  }

  submitForm() {

    if (!this.isResumeUploaded) {
      this.utility.presentAlert("Please upload your resume.")
    } else if (this.isResumeUploaded) {

      let alert = this.alertCtrl.create({
        message: 'Do you want to apply this job ?',
        enableBackdropDismiss: false,
        buttons: [
          {
            text: 'No',
            role: 'no',
            handler: () => { }

          },
          {
            text: 'Yes',
            handler: () => {
              this.applyJob();
            }
          }
        ],
      });
      alert.present();
    }
  }

  uploadDoc() {
    this.attachment.openWordDocument().then(response => {
      if (response) {
        this.startUpload(response)
      }
    })

  }

  startUpload(docFile) {

    this.file.resolveLocalFilesystemUrl(docFile).then((entry: any) => {
      entry.file((file) => {

        this.utility.showDebugLog(file);

        if (file.type != "image/jpeg" && file.type != "image/png" && file.type != "application/pdf") {
          /* let fileType = file.localURL;
          let fileExtn = fileType.substring(fileType.lastIndexOf('.') + 1);

          this.utility.showDebugLog(fileExtn);

          if (fileExtn == 'docx' || fileExtn == 'doc') {
 */
          const fileReader = new FileReader();
          fileReader.readAsArrayBuffer(file);

          fileReader.onload = ev => {
            let typeofFile = file.type;
            let imgBlob = new Blob([fileReader.result], { type: file.type });
            let fileExt = typeofFile.substring(typeofFile.indexOf('/') + 1);
            let fileName = new Date().getTime();
            this.formData.append('file', imgBlob, `${fileName}.${fileExt}`);
            this.formData.append('srfNo', this.applySelectedJob.requisitionNo)
            this.uploadResume();
            //this.store.dispatch(new fromStore.UploadResumeAction('resumeUplaod', this.formData))
          }

          /*   } else {
              this.utility.presentAlert("Please upload a resume of doc type.");
            } */
        } else {
          this.utility.presentAlert("Please upload a resume of doc type.");
        }
      })
    })

  }

  uploadResume() {
    this.store.dispatch(new fromStore.UploadResumeAction('resumeUplaod', this.formData))

    this._uploadResumeListner = this.store.select<any>(fromStore.getUploadResumePending).subscribe(loading => {
      this.utility.updateLoader(loading);
    })

    this._uploadResumeData = this.store.select<any>(fromStore.getUploadResumeData).subscribe(data => {
      if (data) {
        if (data.status) {
          if (data.status.statusCode == 1) {
            this.store.dispatch(new fromStore.UploadResumeReset());
            this.isResumeUploaded = true;
            this.utility.presentAlert("Resume uploaded successfully.")
            this._uploadResumeData.unsubscribe();
            this._uploadResumeListner.unsubscribe();
          }
        } else {
          this.store.dispatch(new fromStore.UploadResumeReset());
          this._uploadResumeData.unsubscribe();
          this._uploadResumeListner.unsubscribe();
        }
      }
    })
  }

  applyJob() {

    let params = {
      'srfNo': this.applySelectedJob.requisitionNo,
      'associateDescription': this.addText
    }
    this.store.dispatch(new fromStore.GetSubmitApplyFormAction("appliedJob", params))


    this._submitResumeListner = this.store.select<any>(fromStore.getSubmitApplyFormLoading).subscribe(loading => {
      this.utility.updateLoader(loading);
    })

    this._submitResumeData = this.store.select<any>(fromStore.getSubmitApplyFormData).subscribe(data => {

      if (data) {
        if (data.status) {
          this.store.dispatch(new fromStore.SubmitApplyFormReset());
          if (data.status.statusCode == 1) {
            this.utility.presentAlert("Congratulations!<br> You have successfully applied for this job.").then(() => {

              // this.store.dispatch(new fromStore.GetInternalJobPostingAction(this.internalJobPostingurl, params));

              this.navCtrl.push('InternalJobPostingPage');
              this.navCtrl.remove(this.navCtrl.getActive().index - 2, 3)


            })

          }
        }
      }

    })

  }

  downloadResume() {
    if (this.userDetails.resumeUrl)
      this.download.downloadDocument(this.userDetails.resumeUrl, true)
  }

  ionViewWillLeave() {
    this._homeDataListner.unsubscribe();
    this._submitResumeData.unsubscribe();
    this._submitResumeListner.unsubscribe();
    this._uploadResumeData.unsubscribe();
    this._uploadResumeListner.unsubscribe();
    this._profileDataListner.unsubscribe();
  }

  presentOptions(myEvent) {

    let popover = this
      .popoverCtrl
      .create('PopoverPage', { 'type': 'others' });

    popover.present({ ev: myEvent });
  }
}
