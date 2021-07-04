import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { Download } from '../../../providers/download/download';
import { Attachment } from '../../../providers/attachment/attachment';
import { File } from '@ionic-native/file';
import { HttpAngularProvider } from '../../../providers/http-angular/http-angular';
import { Data } from '../../../providers/data/data';

/**
 * Generated class for the PersonalDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-details',
  templateUrl: 'personal-details.html',
})
export class PersonalDetailsPage {
  personalDetailedData: any;
  uploadedDocumentUrl: string = '';
  profileData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider, private utility: CommonUtilities,
    private download: Download, private attachment: Attachment, private platform: Platform, private file: File, private httpAngularProvider: HttpAngularProvider, private data: Data) {
    this.personalDetailedData = this.navParams.get('peronalDetails');
    this.data.getData('loginDetails').then((details:any) => {
      console.log(details);
      this.profileData = details.details.userDetails.profilePic;
    })

  }

  ionViewDidLoad() {
    if(!this.personalDetailedData.isExitUserEntry){
      this.utility.presentAlert(this.personalDetailedData.userProfileAlert);
    }
    if (this.personalDetailedData.uploadedDocumentUrl) {
      this.uploadedDocumentUrl = this.personalDetailedData.uploadedDocumentUrl;
    }
  }

  uploadDoc() {
    this.attachment.openDocument('').then((response) => {

      this.uploadFile(response)
    }).catch((error) => {
    })
  }

  uploadFile(Uri) {
    let fileURI = Uri
    this.utility.updateLoader(true)

    let formData = new FormData()

    let uploadDocs = {
      url: "uploadAnnexure",
      data: formData,
      zenExit: true
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
            if (fileSize <= 5.00) {
              let imgBlob = new Blob([fileReader.result], { type: fileType })

              let fileName = new Date().getTime()
              formData.append("uploadFile", imgBlob, `${fileName}.${fileExt}`)
              console.log("uploadFile", imgBlob, `${fileName}.${fileExt}`)

              /**
               * Upload documents service call : upload annexture file
               */
              this.httpAngularProvider.multimediaService(uploadDocs).subscribe((response: any) => {
                this.utility.updateLoader(false)
                if (response) {
                  if (response.status.statusCode == 1) {
                    this.utility.presentAlert("Annexure uploaded and submitted successfully.")
                    if (response && response.details) {
                      this.uploadedDocumentUrl = response.details.uploadedDocumentUrl;
                    }
                    // this.selectedFile = file.localURL.substring(file.localURL.lastIndexOf('/') + 1
                  }
                }
              },
                error => {
                  this.utility.updateLoader(false);
                })
            }
            else {
              this.utility.updateLoader(false)
              this.utility.presentAlert("Please upload a file less than 5mb.");
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

  getFileSize(bytes) {
    if (bytes == 0) return 'n/a'
    else {
      let num = (bytes / (1024 ** 2)).toFixed(2);

      return parseFloat(num)
    }

  }
  downloadDoc(url) {
    if (this.platform.is('android')) {
      this.download.downloadDocument(url, true);
    } else {
      this.utility.openBrowserTab(url);
    }
  }

  removeDoc() {
    this.utility.presentConfirmation("Do you want to delete the file ?").then(() => {
      let param = {
        url: 'deleteDocument',
        data: {},
        zenExit: true
      }
      this.httpProvider.http.commonService(param).subscribe((response: any) => {
        if (response && response.status.statusCode == 1) {
          this.uploadedDocumentUrl = '';
        }
      })

    }).catch(() => { })


  }

}
