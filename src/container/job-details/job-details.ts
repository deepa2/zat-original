import { Component, ViewChild, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, Content } from 'ionic-angular';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'
import { HttpProvider } from '../../providers/http/http';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-job-details',
  templateUrl: 'job-details.html',
})
export class JobDetailsPage {
  private jobsData:any={};
  private jobsDataDetail;
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
    this.jobsData = navParams.get("jobItem");
   this.jobsDataDetail = this.jobsData.jobDetails
  }

  goToApplicantsPage(appliedData){
    this.navCtrl.push("JobApplicantsPage",{'appliedData':appliedData})
  }
  previewDesc(){
    //console.log("pdf opener")
    let url = "https://zenloungeplus.zensar.com/documents/110907/386167485/ba_job_description_apr_17.pdf/8b79adff-f14e-aded-dd63-ab36cbd44243?t=1587889071800"
    let encodedUrl  = encodeURI(url);
    let target = "_system";
    const browser = this.inappbrowser.create(encodedUrl, target, this.options);
  }
}
