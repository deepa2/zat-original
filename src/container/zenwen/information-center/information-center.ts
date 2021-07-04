import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';
import * as environment from '@app/env';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
/**
 * Generated class for the InformationCenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var window;
@IonicPage()
@Component({
  selector: 'page-information-center',
  templateUrl: 'information-center.html',
})
export class InformationCenterPage {
  private infoTab: string = "documents";
  private lstSubMenu: Array<any> = [];
  private docList: Array<any> = [];
  private videoList: Array<any> = [];
  private imgUrl: string = null;
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private httpProvider: HttpProvider, private inappbrowser: InAppBrowser,
    private utility: CommonUtilities) {
    this.lstSubMenu = navParams.get('lstSubMenu');
    this.imgUrl = environment.zenwenImgUrl;
  }

  ionViewDidLoad() {
    if (this.lstSubMenu) {
      this.getInfoCenterDetails(this.lstSubMenu[0].folderId);
      this.getInfoCenterDetails(this.lstSubMenu[1].folderId);
      this.getInfoCenterDetails(this.lstSubMenu[2].folderId);
    }
  }

  getInfoCenterDetails(folderId) {
    this.utility.updateLoader(true);
    let url = "mediaDataByAssets";
    let params = {
      "start": "-1",
      "end": "-1",
      "folderId": folderId.toString(),
      "groupId": this.navParams.get('groupId').toString()
    }
    this.httpProvider.http.zenwenCommonGETService({ url, params, media: true }).subscribe((res: any) => {
      this.utility.updateLoader(false);
      if (res && res.list) {
        if (res.folderName == 'DOC') {
          this.docList = res.list;
        }
        if (res.folderName == 'PDF') {
          this.docList = this.docList.concat(res.list);
        }
        if (res.folderName == 'VIDEO') {
          this.videoList = res.list
        }
      }
    })
  }

  convertFileExtn(size) {
    if (isNaN(size))
      size = 0;

    if (size < 1024)
      return size + ' Bytes';

    size /= 1024;

    if (size < 1024)
      return size.toFixed(2) + ' Kb';

    size /= 1024;

    if (size < 1024)
      return size.toFixed(2) + ' Mb';

    size /= 1024;

    if (size < 1024)
      return size.toFixed(2) + ' Gb';

    size /= 1024;

    return size.toFixed(2) + ' Tb';
  }

  openFile(url) {
    let encodedUrl = encodeURI(url);
    let target = "_system";
    const browser = this.inappbrowser.create(this.imgUrl + encodedUrl, target, this.options);
  }

  encodeURI(url) {
    return window.encodeURI(url);
  }

  // Video Play event 
  VideoEventInit() {
    var _video = document.getElementsByTagName("video");
    for (let i = 0; i < _video.length; i++) {
      _video[i].addEventListener("play", (e) => {
        for (let j = 0; j < _video.length; j++) {
          if (j !== i) {
            _video[j].pause();
          }
        }
      }, false);
    }
  }

}
