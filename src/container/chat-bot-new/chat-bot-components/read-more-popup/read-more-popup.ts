import { Component, OnInit } from '@angular/core';
import { MoveToPageService } from '../../../../container/chat-bot-new/chat-bot-new-services/moveToPage.service';
import { NavParams, ViewController } from 'ionic-angular';
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities';


@Component({
  selector: 'read-more-popup',
  templateUrl: 'read-more-popup.html'
})
export class ReadMorePopup {

  private text: any;
  private desc: any;
  UpdateProfileLinkData: any;
  moveToPage: boolean = false;
  actionName: string = '';
  parentIndex: any;

  constructor(private utility: CommonUtilities, private navParams: NavParams, private viewCtrl: ViewController, private moveToPageService: MoveToPageService) {
    this.text = this.desc = this.navParams.get("desc");
    this.UpdateProfileLinkData = this.navParams.get("UpdateProfileLinkData");
    this.moveToPage = this.navParams.get("moveToPage");
    this.actionName = this.navParams.get("actionName");
    this.parentIndex = this.navParams.get("parentIndex");
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  _moveToPage() {
    this.dismiss();
    this.moveToPageService.moveToPage.next();
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

  update(dataObj) {
    if (dataObj) {
      this.dismiss();
      this.moveToPageService._updateProfile(dataObj, this.parentIndex);
    }
  }
}
