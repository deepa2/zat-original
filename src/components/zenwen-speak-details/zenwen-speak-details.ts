import { Component } from '@angular/core';
import { NavParams,ViewController } from 'ionic-angular';
import * as env from '@app/env';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

/**
 * Generated class for the ZenwenSpeakDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'zenwen-speak-details',
  templateUrl: 'zenwen-speak-details.html'
})
export class ZenwenSpeakDetailsComponent {
  private speakObj: any = null;
  private safetyObj: any = null;
  private imgUrl:string = null;
  private type:string = null;
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

  constructor(private navParams:NavParams,private viewCtrl:ViewController,
    private inappbrowser:InAppBrowser) {

    this.imgUrl = env.zenwenImgUrl;
    this.type = navParams.get('type');

    if(this.type == 'speak'){
      this.speakObj = navParams.get('speakObj');
    }else if(this.type == 'safety'){
      this.safetyObj = navParams.get('safetyObj');
    }
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  openPdfFile() {
    let encodedUrl  = encodeURI(this.safetyObj.lstZenappRelatedAssetMediaModel.fileUrl );
    let target = "_system";
    const browser = this.inappbrowser.create(this.imgUrl + encodedUrl, target, this.options);
  }
}
