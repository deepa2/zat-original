import { Component, } from "@angular/core";
import { IonicPage, NavParams, Events,App, Platform,NavController } from "ionic-angular";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { HttpProvider } from '../../providers/http/http';
import { Subscription } from "rxjs/Subscription";
import { AppVersion } from "@ionic-native/app-version";
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'
import { Constants } from "@app/constants";
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

@IonicPage()
@Component({
  selector: "page-about-taz",
  templateUrl: "about-taz.html"
})
export class AboutTazPage {
  loading$: Observable<any>;
  private about: any;
  // private url: string = "getHTMLParagraph";
  private appName: string = "";
  private versionNumber: any = "";
  private pageType: string;
  private mainData;
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
  constructor(
    private navParams: NavParams,
    private navCtrl: NavController,
    private appVersion: AppVersion,
    private utility: CommonUtilities,
    private app: App,
    private httpProvider: HttpProvider,
      private streamingMedia: StreamingMedia,
    private inappbrowser: InAppBrowser,
    private events: Events
  ) { }

  //on Page load, ionic executes this function and all the initialization methods executes here
  ionViewDidLoad() {
    this.getData();
  }

  //get about data from server  
  getData() {
    this.utility.updateLoader(true);
    const url: string = "aboutTAZ";
    const data: any = {};
    this.httpProvider.http
      .commonService({ url, data,miscellaneous:true})
      .subscribe(
        (res: any) => {
          //console.log(res)
          this.mainData = res.details;
         
          this.utility.updateLoader(false);
        })
  }

  goTopage(abtItem){
    if(abtItem.type=='text'){
      if(abtItem.title=='About Talent@Zensar'){
        this.app.getRootNav().push('AboutPage', { 'type': 'zenhelp_about' })
      }
      else if(abtItem.title=='History'){
        this.navCtrl.push("VersionHistoryPage")
      }

    }
    else if(abtItem.type=='video'){
      this.openVideo(abtItem.multimediaUrl)
    }
    else if(abtItem.type=='pdf'){
      this.openInappBrowerFile(abtItem.multimediaUrl) 
    }
    else if(abtItem.type=='website'){
      this.utility.openBrowserTab(abtItem.multimediaUrl)
    }
  }

  //Function for open about page
  
  goToVersionHistory(){
    this.navCtrl.push("VersionHistoryPage")
  }
  // function to open video
  openVideo(url) {
    console.log("video Called")
    let videoUrl = url;
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'portrait',
      shouldAutoClose: true,
      controls: true
    };

     this.streamingMedia.playVideo(videoUrl, options);
  }

  
  
  openInappBrowerFile(url) {
    let encodedUrl = encodeURI(url);
    let target = "_system";
    const browser = this.inappbrowser.create(encodedUrl, target, this.options);
  }
  isAppAvailable(webUrl) {
    const weboptions: InAppBrowserOptions = {
      location: 'yes',//Or 'no' 
      hidden: 'no', //Or  'yes'
      clearcache: 'yes',
      clearsessioncache: 'yes',
      zoom: 'yes',//Android only ,shows browser zoom controls 
      hardwareback: 'yes',
      mediaPlaybackRequiresUserAction: 'yes',
      shouldPauseOnSuspend: 'yes', //Android only 
      disallowoverscroll: 'no', //iOS only 
      toolbar: 'yes', //iOS only 
      enableViewportScale: 'no', //iOS only 
      allowInlineMediaPlayback: 'yes',//iOS only 
      presentationstyle: 'fullscreen',//iOS only 
      fullscreen: 'yes',//Windows only,
      toolbarposition: 'top',
      toolbarcolor: '#1cb7c9',
      closebuttoncolor: 'white',
    };

    const target = "_self";

    const url = webUrl;

    const browser = this.inappbrowser.create(url, target, weboptions);
  }
}
