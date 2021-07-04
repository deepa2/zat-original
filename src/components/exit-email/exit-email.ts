import { Component } from '@angular/core';
import { ViewController, Platform, NavParams } from 'ionic-angular'
import { HttpAngularProvider } from '../../providers/http-angular/http-angular';
import { Attachment } from '../../providers/attachment/attachment';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { Download } from '../../providers/download/download';
import { Data } from '../../providers/data/data';
import { File } from '@ionic-native/file';

/**
 * Generated class for the ExitEmailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'exit-email',
  templateUrl: 'exit-email.html',
  providers: [Attachment]
})
export class ExitEmailComponent
{

  subject;
  content;
  formData = new FormData();
  managersDetails: any;
  loggedInUser: any;

  constructor(private viewCtrl: ViewController, private httpAngular: HttpAngularProvider, private attachment: Attachment, private platform: Platform, private utility: CommonUtilities,
    private download: Download, private file: File, private navpraram: NavParams, private data: Data)
  {
    this.data.getData('loginDetails').then((userDetails: any) =>
    {
      this.loggedInUser = userDetails.details.userDetails.emailId;
    })

    this.managersDetails = this.navpraram.get('data')
  }

  dismiss()
  {
    this.viewCtrl.dismiss();
  }

  send()
  {
    this.utility.updateLoader(true);
    let data = {
      url: 'sendEmailForClearance',
      data: {
        email: true,
        to: this.managersDetails.contactPersonEmailId,
        from: this.loggedInUser,
        subject: this.subject,
        content: this.content,
        contactInfoId: this.managersDetails.contactId,
        'uploadFile': this.formData
      },
      zenExit: true
    }

    this.httpAngular.commonService(data).subscribe((response: any) =>
    {

      this.utility.updateLoader(false);
      if (response && response.status.statusCode == 1)
      {
        this.utility.presentAlert("Email sent successfully");
        this.viewCtrl.dismiss();
      }
    },
      error =>
      {
        this.utility.updateLoader(false);
      })
  }

  uploadDoc()
  {
    this.attachment.openDocument('').then((response) =>
    {

      this.uploadFile(response)
    }).catch((error) =>
    {
    })
  }

  uploadFile(Uri)
  {
    let fileURI = Uri
    this.utility.updateLoader(true)





    this.file.resolveLocalFilesystemUrl(fileURI).then((entry: any) =>
    {
      entry.file((file) =>
      {

        const fileReader = new FileReader()
        fileReader.readAsArrayBuffer(file)
        fileReader.onloadend = ev =>
        {
          let fileType = file.type
          let fileExt = fileURI.substring(fileURI.lastIndexOf('.') + 1)
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

          if (fileType == "application/pdf" || fileExt == "doc" || fileExt == "odt" || fileExt == "docx" || fileType == "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
          {
            let fileSize = this.getFileSize(file.size)
            if (fileSize <= 5.00)
            {
              let imgBlob = new Blob([fileReader.result], { type: fileType })

              let fileName = new Date().getTime()
              this.formData.append("uploadFile", imgBlob, `${fileName}.${fileExt}`);
              this.utility.updateLoader(false);
              this.utility.showToast("File attached successfully")
              /**
               * Upload documents service call : upload annexture file
               */
              // this.httpAngularProvider.multimediaService(uploadDocs).subscribe((response: any) => {
              //   this.utility.updateLoader(false)
              //   if (response) {
              //     if (response.status.statusCode == 1) {
              //       this.utility.presentAlert("File uploaded successfully.")
              //       if (response && response.details) {
              //         this.uploadedDocumentUrl = response.details.uploadedDocumentUrl;
              //       }
              //       // this.selectedFile = file.localURL.substring(file.localURL.lastIndexOf('/') + 1
              //     }
              //   }
              // },
              //   error => {
              //     this.utility.updateLoader(false);
              //   })
            }
            else
            {
              this.utility.updateLoader(false)
              this.utility.presentAlert("Please upload a file less than 5mb.");
            }
          }
          else
          {
            this.utility.presentAlert("Please upload a valid file.")
            this.utility.updateLoader(false)
          }
        }

      })
    }).catch((error) =>
    {
      this.utility.updateLoader(false)
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
  downloadDoc(url)
  {
    if (this.platform.is('android'))
    {
      this.download.downloadDocument(url, true);
    } else
    {
      this.utility.openBrowserTab(url);
    }
  }
}
