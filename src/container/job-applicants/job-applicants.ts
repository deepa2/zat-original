import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
@IonicPage()
@Component({
  selector: 'job-applicants',
  templateUrl: 'job-applicants.html',
})
export class JobApplicantsPage {

  private appliedCount;
  private applicantsData;
  private applicantsallData;
  
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
  constructor(private navCtrl: NavController, private navParams: NavParams,private inappbrowser: InAppBrowser) {
    this.applicantsallData = navParams.get("appliedData");
    this.appliedCount=this.applicantsallData.applicants;
    this.applicantsData= this.applicantsallData.applicantDetails;
  }
  goToprofilePage(userId) {
    this.navCtrl.push('NewProfilePage', {
      'userId': userId,
      'profileType': 'zencontacts'
    });
  }
  previewCV(){
    //console.log("pdf opener")
    let url = "https://zenloungeplus.zensar.com/documents/110907/386167485/Generic+CV.pdf/d371df88-5d2d-4b27-0dd3-cf96e6c94475?t=1587889076872"
    let encodedUrl  = encodeURI(url);
    let target = "_system";
    const browser = this.inappbrowser.create(encodedUrl, target, this.options);
  }
  getfilledColor(value){
    let filcolor
    if(value <= 40){
      filcolor = "#e41515";
    }
    else if(value > 40 && value <= 75){
      filcolor = "#ff9800";
    }
    else if(value >  75){
      filcolor = "#149219";
    }
    return filcolor;
  }
}
