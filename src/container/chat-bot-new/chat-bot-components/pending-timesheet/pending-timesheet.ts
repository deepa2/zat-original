import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Screenshot } from "@ionic-native/screenshot/ngx";
import { PendingTimesheetListModalComponent } from "../../../../components/pending-timesheet-list-modal/pending-timesheet-list-modal";
import { ModalController, NavController, PopoverController } from "ionic-angular";
import { GetterSetter } from "../../../../providers/getterSetter/getterSetter";
import { ChatBotServices } from "../../chat-bot-new-services/chat-bot-new.services";

/**
 * Generated class for the CreateTaskComponent component.
 */
@Component({
  selector: 'pending-timesheet',
  templateUrl: 'pending-timesheet.html',
})

export class PendingTimesheetComponent {


  @Input() chatListItem: any;
  @Input() chatList: any;
  @Input() timesheetRestApi: any;
  @Input() parentIndex: any;

  @Output() sendDataToChatBotResponseSuccess: EventEmitter<any> = new EventEmitter();

  constructor(private chatBotServices: ChatBotServices, private modalCtrl: ModalController, private getterSetter: GetterSetter) { }

  ngOnInit() {
  }

  _openPendingTimesheetListModal(list, parentIndex) {
    if (parentIndex == this.chatList.length - 1) {
      let pendingListModal = this.modalCtrl.create(PendingTimesheetListModalComponent, {
        dataList: list,
        selectedList: this.chatList[this.chatList.length - 1].response.responseList.selectedPendingTimesheetList ? this.chatList[this.chatList.length - 1].response.responseList.selectedPendingTimesheetList : []
      }, {
        cssClass: 'pendingTimesheetListModal',
      });

      pendingListModal.present();
      pendingListModal.onDidDismiss((res) => {
        if (res && res.length > 0) {
          this.chatList[this.chatList.length - 1].response.responseList.selectedPendingTimesheetList = res;
        }
      })
    }
  }

  _approveAllPendingTimesheets(responseList, parentIndex) {
    if (parentIndex == this.chatList.length - 1) {
      let showApproveText = responseList.selectedPendingTimesheetList && responseList.selectedPendingTimesheetList.length > 0 && responseList.selectedPendingTimesheetList.length !== responseList.pendingList.length ? "Approve Selected" : "Approve All";
      this.chatList.concat({ "from": "me", "query": showApproveText });
      this.getterSetter.setUserChatListData(this.chatList)
      this.chatBotServices._hrChatBotSetChatList({ "from": "me", "query": showApproveText }).then((response: any) => {
        this.chatList = response.data;
        this.sendDataToChatBotResponseSuccess.emit({ chatList: this.chatList });
      });
      let url = this.timesheetRestApi[2];
      const params = {
        "approvalStatus": "1", // 1- Approved , 2 - pending , 3 - Rejected 
        "comments": "",
        "timesheetList": responseList.selectedPendingTimesheetList ? responseList.selectedPendingTimesheetList : responseList.pendingList
      }

      let extraParams = {
        "actionName": 'approveAllTimesheets',
        "lifespan": responseList.lifespan,
        "queryId": responseList.queryId,
        "speech": "Timesheet approved successfully"
      }

      let serviceParams = {
        url: url,
        data: {
          params: params,
          extraParams: extraParams
        },
        timesheet: true
      }

      this.getterSetter.setUserChatListData(this.chatList)
      this.chatBotServices._timeSheetService(serviceParams).then((response: any) => {
        this.chatList = response.data;
        this.sendDataToChatBotResponseSuccess.emit({ chatList: this.chatList });
      });

    }
  }

}