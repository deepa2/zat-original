import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';
import { Download } from '../../providers/download/download';

@Component({
  selector: 'multimedia',
  templateUrl: 'multimedia.html'
})
export class MultimediaComponent implements OnChanges {
  private photos: any[] = [];
  @Input() multimediaItems = []; 
  @Input() type = '';
  @Output() remove: EventEmitter<number> = new EventEmitter();
  

  constructor(private modalCtrl: ModalController, private navCtrl: NavController, private download: Download) {
  }

  ngOnChanges() {
    this.createPhotos();  
  }

  private createPhotos() {
    this.photos = [];
    this.multimediaItems.forEach(item => {
      //console.log(item);
      this.photos.push({ url: item.multimediaUrl || item.attachmentURL || item })
    }); 
  }

  openModal(index) {
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.photos,
      initialSlide:index,
    },{
      cssClass: 'gallery-modal',
    }
    );
    modal.present(); 
  }

  // (FaqDetail, {
  //   item: item
  // }, {
  //     // cssClass: 'faq-modal'
  //     cssClass: 'modalCss',
  //   });

  downloadImage(item) {
    this.download.downloadDocument(item.multimediaUrl || item.attachmentURL || item)
  }

  removeImage(id:number){
    this.remove.emit(id)
  }

  getFileName(item){
    return item.substring(item.lastIndexOf('/')+1); 
  }

}
