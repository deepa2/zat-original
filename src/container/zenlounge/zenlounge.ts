import { Component } from '@angular/core';
import { IonicPage,NavParams,PopoverController } from 'ionic-angular';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../providers/http/http';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { HttpAngularProvider } from '../../providers/http-angular/http-angular';
import { ModalController } from 'ionic-angular';
import { ImagePreviewComponent } from '../../components/image-preview/image-preview';

declare var window;
@IonicPage()
@Component({
  selector: 'page-zenlounge',
  templateUrl: 'zenlounge.html',
})
export class ZenloungePage {
  currentPlayingVideo: HTMLVideoElement;
  private startList: number = 0;
  private endList: number = 10;
  private infiniteScroll: any = '';
  private zenloungeData: any = [];
  private infiniteListData: any = [];
  public zenloungeBaseUrl = "https://zenloungeplus.zensar.com";
  private pageTitle:any = '';
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
    private utility: CommonUtilities,
    private inappbrowser: InAppBrowser,
    private httpProvider: HttpProvider,
    public modalCtrl: ModalController,
    private httpAngularProvider: HttpAngularProvider,private navParam:NavParams,private popoverCtrl:PopoverController) {
      // Function Call getting zenlounge data 
    this.getZenloungeData(this.startList, this.endList);
    this.pageTitle = this.navParam.get('pageTitle');
    setTimeout(()=>{
      this.VideoEventInit();
    },2000)
  }
  
  ionViewDidLoad(){
    //console.log('View loaded')
  }
// **************Encode Url**************
  encodeURI(url){
    return window.encodeURI(url);
  }
  //********************** Function for retriving Zenloungeplus post data **********************
  getZenloungeData(startList, endList) {
    if(this.infiniteListData.length == 0){
      this.utility.updateLoader(true)
    }
    
    let params = {
      "start": startList,
      "end": endList,
    }
    let body = {
      url: 'getCommunicationPost', data: params, isZenlounge: true
    }
    
      this.httpAngularProvider.commonService(body).subscribe((res: any) => {
        //console.log(res)
        if (res) {
          this.infiniteListData = res.details;
          this.zenloungeData = this.zenloungeData.concat(this.infiniteListData);
          // this.zenloungeData = res.details;

          //console.log(this.zenloungeData)
          this.utility.updateLoader(false);
        }
        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          this.infiniteScroll = "";
        }
        else {
          this.utility.updateLoader(false)
        }
       
      },
        error => {
          this.utility.updateLoader(false);
        })
    
  }
  // ************ Method for Image length calculation ************* 
  calculateLength(data){
    let dataLength = data.filter((value)=>{
      return (value.mimeType =='image/jpeg' || value.mimeType =='image/png')
    })
    ////console.log(dataLength)
    return dataLength.length;
  }
  // ************Open Image Modaal**********************
  presentImageModal(imgData,index) {
    const modal = this.modalCtrl.create(ImagePreviewComponent,{'imagesData':imgData,'currentIndex':index});
    modal.present();
  }
 
  //***********function for infinite scroll****************************** 
  loadData(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    this.startList = this.endList;
    this.endList += 10;
    this.getZenloungeData(this.startList, this.endList);
    
  }
  // **********************open pdf in inappbrowser*****************************************
  openPdfFile(url) {
    let encodedUrl  = encodeURI(url);
    let target = "_system";
    const browser = this.inappbrowser.create(this.zenloungeBaseUrl + encodedUrl, target, this.options);
  }

  presentPopover(myEvent) {

    let popover = this
      .popoverCtrl
      .create('PopoverPage', { 'type': 'others' });

    popover.present({ ev: myEvent });
  }

  // Video Play event 
  VideoEventInit() {
    var _video = document.getElementsByTagName("video");
    for(let i=0;i<_video.length;i++){
      _video[i].addEventListener("play", (e)=>{
        for(let j=0;j<_video.length;j++){
          if(j!==i){
            _video[j].pause();
          }
          }
      }, false);
    }
  }
  getPostAttachMnetLength(data){
let actualImgata = data.filter(item=>{
  return (item.mimeType =='image/jpeg' || item.mimeType =='image/png')
  })
  return actualImgata.length - 5
  }
}
