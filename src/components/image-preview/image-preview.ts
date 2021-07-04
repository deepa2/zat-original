import { CommonUtilities } from './../../providers/commonUtilities/commonUtilities';
import { Component,ViewChild} from '@angular/core';
import { Slides } from 'ionic-angular';
import { ModalController,ViewController,NavParams } from 'ionic-angular';
declare var window;
/**
 * Generated class for the ImagePreviewComponent component.
 **/
@Component({
  selector: 'image-preview',
  templateUrl: 'image-preview.html'
})
export class ImagePreviewComponent {
private imageData;
private imgIndex;
zenloungeBaseUrl = "https://zenloungeplus.zensar.com/"
@ViewChild('slides') slides;


  constructor(private utility: CommonUtilities,
    public modalCtrl: ModalController,
    public ViewCtr : ViewController,
    private params : NavParams) {
      this.imageData = params.get('imagesData')
      this.imgIndex = params.get('currentIndex')
      
  }
  ionViewDidLoad() {
    
    this.goToSlide(this.imgIndex)
  }

  // ************Closing Modal******************
  dismiss() {
    this.ViewCtr.dismiss();
  }

  //************** Post Image Slider*******************
  goToSlide(index) {
    setTimeout(() => {
      this.slides.slideTo(index, 500);
    }, 500);
  }
// **************Encode Url**************
encodeURI(url){
  return window.encodeURI(url);
}
}
