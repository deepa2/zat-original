import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities';
import { ReadMorePopup } from '../read-more-popup/read-more-popup';


@Component({
  selector: 'read-more',
  templateUrl: 'read-more.html'
})
export class ReadMoreComponent implements OnInit {

  @Input() desc: any;
  @Input() showToggle: boolean = true;
  @Input() UpdateProfileLinkData: any;
  @Input() moveToPage: boolean = false;
  @Input() actionName: string = '';
  @Input() parentIndex: any;

  @Output() updateProfile: EventEmitter<any> = new EventEmitter();
  @Output() moveToPageAllow: EventEmitter<any> = new EventEmitter();
  @Output() scrollToBottom: EventEmitter<any> = new EventEmitter();

  truncateLength: number = 150;
  maxLength: number = this.truncateLength;
  text: any;
  originalStringLength: any;
  showMoreSection: boolean = false;
  readMore: boolean = false;

  constructor(private navCtrl: NavController, private utility: CommonUtilities, private modalController: ModalController) { }

  ngOnInit() {
    if (this.desc) {
      var myString = this.urlify(this.desc);
      var truncatedString = myString.slice(0, 200);
      if (this.desc.length >= truncatedString.length) {
        var originalString = myString.slice(0, this.desc.length)
        if (originalString.length > truncatedString.length) {
          this.showMoreSection = true;
          this.readMore = true;
          this.text = truncatedString + '...';
        } else {
          this.showMoreSection = false;
          this.text = truncatedString;
        }
      } else {
        this.showMoreSection = false;
        this.text = myString;
      }
    }
  }

  showMore(descLength) {
    let readMoreModal = this.modalController.create(ReadMorePopup, {
      desc: this.urlify(this.desc),
      UpdateProfileLinkData: this.UpdateProfileLinkData,
      actionName: this.actionName,
      parentIndex: this.parentIndex

    },
      {
        showBackdrop: true,
        enableBackdropDismiss: true,
        cssClass: "read-more-modal"
      }
    );

    readMoreModal.present();
    readMoreModal.onDidDismiss((move) => {
    })
  }

  showLess(descLength) {
    this.readMore = true;
    this.maxLength = descLength;
    var myString = this.urlify(this.desc);
    var truncatedString = myString.slice(0, 200);
    this.text = truncatedString + '...';

  }

  toggleRead() {
    if (this.showMoreSection && this.showToggle) {
      if (this.readMore) {
        this.showMore(this.desc.length);
      } else {
        this.showLess(this.maxLength);
      }
    }
  }

  preventClick(event) {
    let tagName = event.srcElement.tagName;
    if (tagName === 'A') {
      event.stopPropagation();
    }
  }

  urlify(text) {
    if (text != undefined) {
      //;
      var newText = text.replace(/\n/g, "<br/>");
      var urlRegex = /(https?:\/\/[^\s]+)/g;
      return newText.replace(urlRegex, function (url) {
        // ;
        return '<a class="linkline">' + url + '</a>';
      })

    }
  }

  update(dataObj) {
    if (dataObj)
      this.updateProfile.emit(dataObj);
  }
  _moveToPage() {
    this.moveToPageAllow.emit('moveToPage');
  }

  checkLink(data) {
    this.utility.consoleLog(data);
    let url = data.match(/\bhttps?:\/\/\S+/gi);
    this.utility.consoleLog(url);
    if (url && url[0]) {
      this.utility.consoleLog(url[0]);
      let urlValue = url[0].replace(/(<([^>]+)>)/ig, '');
      this.utility.consoleLog(urlValue);
      this.utility.openWithSystemBrowser(urlValue);
    }

  }

}
