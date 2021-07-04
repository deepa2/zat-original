import { Directive, OnInit, Input } from '@angular/core';
 
@Directive({
  selector: '[img-preloader]',
  host: {
    '[attr.src]': 'finalImage'
  }
})
export class ImagePreloaderDirective implements OnInit {
 
  constructor() { }
  @Input('img-preloader') targetSource: string;
 
  downloadingImage: any;
  finalImage: any;
 
  @Input('defaultImage') defaultImage: string;
  @Input('onErrorImage') errorImgSource: string;
  ngOnInit() {
    this.finalImage = this.defaultImage;
 
    this.downloadingImage = new Image();
    this.downloadingImage.onload = () => {
      this.finalImage = this.targetSource;
    }
    this.downloadingImage.onerror = () => {
      this.finalImage = this.errorImgSource;
    }
    this.downloadingImage.src = this.targetSource;
  }
 
}