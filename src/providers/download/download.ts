import { Injectable, NgZone } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { LoadingController, Platform } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
import { Toast } from '@ionic-native/toast';
import { AndroidPermissions } from '@ionic-native/android-permissions';


import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
declare var cordova: any;


@Injectable()
export class Download
{

  progessPercent: any = 0;
  loaderContent: any;
  options: InAppBrowserOptions = {
    location: 'no',//Or 'no' 
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls 
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only 
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'yes', //iOS only 
    enableViewportScale: 'yes', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    presentationstyle: 'pagesheet',//iOS only 
    fullscreen: 'yes',//Windows only    
  };

  constructor(private platform: Platform,
    private transfer: FileTransfer,
    private file: File,
    private fileOpener: FileOpener,
    private loading: LoadingController,
    private dialogs: Dialogs,
    private toast: Toast,
    private iab: InAppBrowser,
    private androidPermisiion: AndroidPermissions,
    private zone: NgZone,
    private sanitizer: DomSanitizer,

  ) { }

  downloadDocument(url, openDoc?: any)
  {
    if (openDoc)
      this.getPermissions(url, openDoc);
    else
      this.getPermissions(url, false);
  }

  saveImage(url)
  {
    cordova.plugins.imagesaver.saveImageToGallery(url, () =>
    {
      this.toast.show(`Saved`, 'short', 'bottom').subscribe(
        toast => { }
      );
    }, () =>
    {
      this.toast.show(`Failed`, 'short', 'bottom').subscribe(
        toast => { }
      );
    });
  }

  viewDocument(url, fileExt)
  {
    let ext = this.getExt(fileExt)
    this.fileOpener.open(url, ext)
      .then(() => { })
      .catch(e => { });
  }

  getPermissions(url, openDoc: any)
  {
    if (this.platform.is('ios'))
    {
      this.downloadDocIos(url, openDoc);
    } else
    {
      this.androidPermisiion.checkPermission(this.androidPermisiion.PERMISSION.WRITE_EXTERNAL_STORAGE).then(result =>
      {
        if (!(result.hasPermission))
        {
          this.androidPermisiion.requestPermission(this.androidPermisiion.PERMISSION.WRITE_EXTERNAL_STORAGE).then(response =>
          {
            this.downloadDoc(url, openDoc)
          })
        } else
        {
          this.downloadDoc(url, openDoc)
        }
      })
    }
  }

  // downloadDoc(url, openDoc) {
  //   url = encodeURI(url);
  //   let fileExt = url.substring(url.lastIndexOf('.') + 1);
  //   let fileName = url.substring(url.lastIndexOf("/") + 1)
  //   const fileTransfer: FileTransferObject = this.transfer.create();
  //   let loader = this.loading.create({
  //     content: 'Downloading'
  //   });
  //   loader.present();
  //   let fileLocation = this.file.externalRootDirectory + '/Download/' + fileName
  //   this.platform.ready().then(() => {
  //     fileTransfer.download(url, fileLocation).then((entry) => {
  //       let downloadUrl = entry.toURL();
  //       if (downloadUrl.substring(downloadUrl.lastIndexOf('.') + 1) === 'pdf' || downloadUrl.substring(downloadUrl.lastIndexOf('.') + 1) === 'docx' || downloadUrl.substring(downloadUrl.lastIndexOf('.') + 1) === 'doc' || downloadUrl.substring(downloadUrl.lastIndexOf('.') + 1) === 'xlsx' || downloadUrl.substring(downloadUrl.lastIndexOf('.') + 1) === 'apk') {
  //         //alert('File downloaded to Downloads folder')
  //         // this.toast.show(`Downloaded`, 'short', 'bottom').subscribe(toast => {});
  //         if (downloadUrl.substring(downloadUrl.lastIndexOf('.') + 1) === 'apk') {
  //           this.openApkFile(downloadUrl)
  //         } else {
  //           this.viewDocument(fileLocation)
  //         }
  //       } else {
  //         this.saveImage(downloadUrl);
  //       }

  //       loader.dismiss();

  //     }, (error) => {

  //       loader.dismiss();
  //       this.dialogs.alert('Error downloading')
  //         .then(() => { })
  //         .catch(e => { });
  //     });
  //   });
  // }

  downloadDoc(url, openDoc)
  {
    try
    {
      url = encodeURI(url);

      let fileName = url.substring(url.lastIndexOf("/") + 1)
      let fileExt = url.substring(url.lastIndexOf('.') + 1);
      const fileTransfer: FileTransferObject = this.transfer.create();

      if (fileExt == 'apk')
      {
        fileTransfer.onProgress((progesssEevnt) =>
        {
          this.zone.run(() =>
          {
            this.progessPercent = Math.floor(progesssEevnt.loaded / progesssEevnt.total * 100);
            let data = '<div class="loaderDisplay"><img src="assets/imgs/downloadProgress.png"><div class="loaderProgress"><div class="loader-progress-outer"> <div class="loader-progress-inner" style="width:' + this.progessPercent + '%">' + this.progessPercent + '%</div></div><span class="loaderText">Downloading Updates....</span></div></div>';
            this.loaderContent = this.sanitizer.bypassSecurityTrustHtml(data);
            loader.data.content = this.loaderContent;
          })
        })
      }

      let loader;
      if (fileExt == 'apk')
      {
        loader = this.loading.create({
          spinner: 'hide',
          content: '<img src="assets/imgs/downloadProgress.png">',
          cssClass: 'app-downloing'
        });

      } else
      {
        loader = this.loading.create({
          content: 'Downloading'
        });
      }
      let fileLocation = this.file.externalRootDirectory + '/Download/' + fileName;
      loader.present();
      this.platform.ready().then(() =>
      {
        fileTransfer.download(url, fileLocation).then((entry) =>
        {
          let downloadUrl = entry.toURL();
          let fileExtension = downloadUrl.substring(downloadUrl.lastIndexOf('.') + 1)
          if (fileExtension === 'pdf' || fileExtension === 'docx' || fileExtension === 'doc' || fileExtension === 'xlsx' || fileExtension === 'pptx')
          {
            // alert('File downloaded to Downloads folder')
            this.toast.show(`Document has been Downloaded`, 'short', 'bottom').subscribe(toast => { });
            this.viewDocument(fileLocation, fileExtension)
          } else if (fileExtension === 'apk' && this.progessPercent == 100)
          {
            this.openApkFile(downloadUrl)
          } else
          {
            this.saveImage(downloadUrl);
          }
          loader.dismiss();
        }, (error) =>
        {
          loader.dismiss();
          // this.dialogs.alert(JSON.stringify(error))
          this.dialogs.alert('Error downloading').then(() => { }).catch(e => { });
        });
      });
    } catch (error)
    {
      let target = "_system";
      this.iab.create(url, target, this.options)
    }
  }

  downloadDocIos(url, openDoc: any)
  {

    url = encodeURI(url);
    let fileExt = url.substring(url.lastIndexOf('.') + 1);
    let fileName = url.substring(url.lastIndexOf("/") + 1)

    const fileTransfer: FileTransferObject = this.transfer.create();

    let loader = this.loading.create({
      content: 'Downloading'
    });

    loader.present();
    fileTransfer.download(url, this.file.syncedDataDirectory + fileName).then((entry) =>
    {
      let downloadUrl = entry.toURL();

      if (downloadUrl.substring(downloadUrl.lastIndexOf('.') + 1) === 'pdf' || downloadUrl.substring(downloadUrl.lastIndexOf('.') + 1) === 'docx' || downloadUrl.substring(downloadUrl.lastIndexOf('.') + 1) === 'doc' || downloadUrl.substring(downloadUrl.lastIndexOf('.') + 1) === 'apk')
      {
        // alert('File downloaded to Downloads folder')
        this.toast.show(`Downloaded`, 'short', 'bottom').subscribe(toast => { });
        if (openDoc)
        {
          this.openWithBrowser(entry.toURL())
        }
      } else
      {
        this.saveImage(downloadUrl);
      }
      loader.dismiss();
    }, (error) =>
    {
      loader.dismiss();
      this.dialogs.alert('Error downloading').then(() => { }).catch(e => { });
    });
  }

  openApkFile(url)
  {
    this.fileOpener.open(url, 'application/vnd.android.package-archive').then(success =>
    {

    }, (error) =>
    {
    })
  }

  openWithBrowser(url: string)
  {
    let target = "_blank";
    this.iab.create(url, target, this.options)
  }

  getExt(extn)
  {
    let ext = extn.toLowerCase();
    let MIMETypes = {
      'txt': 'text/plain',
      'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'doc': 'application/msword',
      'pdf': 'application/pdf',
      'jpg': 'image/jpeg',
      'bmp': 'image/bmp',
      'png': 'image/png',
      'xls': 'application/vnd.ms-excel',
      'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'rtf': 'application/rtf',
      'ppt': 'application/vnd.ms-powerpoint',
      'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    }
    return MIMETypes[ext];
  }
}
