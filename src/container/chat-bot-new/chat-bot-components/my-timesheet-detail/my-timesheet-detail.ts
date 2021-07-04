import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ChatBotServices } from "../../../../container/chat-bot-new/chat-bot-new-services/chat-bot-new.services";
import { NavController } from "ionic-angular";
import { GetterSetter } from "../../../../providers/getterSetter/getterSetter";

/**
 * Generated class for the CreateTaskComponent component.
 */
@Component({
  selector: 'my-timesheet-detail',
  templateUrl: 'my-timesheet-detail.html',
})

export class MyTimesheetDetailComponent {

  @Input() chatList: any
  @Input() chatListItem: any;
  @Input() parentIndex: any;

  @Output() sendDataToChatBotResponseSuccess: EventEmitter<any> = new EventEmitter();


  private showMoreArrow: boolean = false;
  private showMoreArrowForMyTimesheetList: boolean = false;

  constructor(private navCtrl: NavController, private getterSetter: GetterSetter, private chatBotServices: ChatBotServices) { }

  onlastSlideUpdateEmpContactList(dataList) {
    this.showMoreArrow = dataList.length == 7 ? true : false;
  }

  onlastSlideUpdateMyTimesheetList(dataList) {
    this.showMoreArrowForMyTimesheetList = dataList.length > 5 ? true : false;
  }

  getApproverStatusBoxType(status: any) {
    // -1 - saved
    // 1 - approved
    // 2 - submited
    // 3 - rejected
    return {
      'statustype-box-saved': status == -1 ? true : false,
      'statustype-box-approved': status == 1 ? true : false,
      'statustype-box-submited': status == 2 ? true : false,
      'statustype-box-rejected': status == 3 ? true : false,
    }
  }

  getTimesheetTypeIcon(status: any) {
    // -1 - saved
    // 1 - approved
    // 2 - submited
    // 3 - rejected
    switch (status) {
      case '-1': return 'assets/zents-imgs/ts-saved-icon.svg';
      case '1': return 'assets/zents-imgs/ts-approved-icon.svg';
      case '2': return 'assets/zents-imgs/ts-submitted-icon.svg';
      case '3': return 'assets/zents-imgs/ts-rejected-icon.svg';
      default: return 'assets/zents-imgs/ts-saved-icon.svg';
    }

  }

  goToMyTimesheetsPage(dataList) {
    new Promise((resolve, reject) => {
      this.navCtrl.push('MyTimesheetsPage', {
        type: 'chat-bot',
        dataList,
        resolve: resolve
      })
    }).then(() => {
      if (this.chatList[this.chatList.length - 1].response.responseList.actionName == "getMyTimesheetDetails") {
        this.chatList[this.chatList.length - 1].response.responseList.noSpeech = true;
      }
      this.getterSetter.setUserChatListData(this.chatList)
      this.chatBotServices._hrChatBotSetChatList().then((response: any) => {
        this.chatList = response.data;
        this.sendDataToChatBotResponseSuccess.emit({ chatList: this.chatList });
      });
    })
  }
}