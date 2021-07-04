import { Component, EventEmitter, Input, Output } from "@angular/core";
import { version } from "@app/env";
import { GetterSetter } from "../../../../providers/getterSetter/getterSetter";
import { ChatBotServices } from "../../../../container/chat-bot-new/chat-bot-new-services/chat-bot-new.services";
import { CommonUtilities } from "../../../../providers/commonUtilities/commonUtilities";

/**
 * Generated class for the CreateTaskComponent component.
 */
@Component({
  selector: 'timeentry-detail',
  templateUrl: 'timeentry-detail.html',
})

export class TimeentryDetailComponent {


  @Input() chatListItem: any;
  @Input() chatList: any;
  @Input() parentIndex: any;
  @Input() timesheetRestApi: any;
  @Input() tsSelectedDateObj: any;
  @Input() prevQueryID: any;
  @Input() pendingDates: any;
  @Input() selectedDateForCT: any;

  @Output() sendDataToChatBotResponseSuccess: EventEmitter<any> = new EventEmitter();
  private i: any;

  constructor(private utilities: CommonUtilities, private chatBotServices: ChatBotServices, private getterSetter: GetterSetter) { }

  ngOnInit() {
    this.i = this.parentIndex;
  }
  showSubmitConfirmAlert(taskAndTimesheetDetails: Array<any>, queryId, chatListIndex) {
    if (chatListIndex == (this.chatList.length - 1)) {
      let alert = this.utilities.presentConfirmation('Are you sure you want to submit this timesheet ?');
      alert.then(() => {
        this.submitTimesheet(taskAndTimesheetDetails, queryId);
      });
    }
  }

  /**
  * 
  * Method to Perform Submit Action
  */
  submitTimesheet(taskAndTimesheetDetails: Array<any>, queryId) {
    let rejectedTimesheetFlag: boolean = false;
    let rejectedTaskName: string = null;

    let sortedTimesheetList: Array<any> = [];
    if (taskAndTimesheetDetails && taskAndTimesheetDetails.length > 0) {
      taskAndTimesheetDetails.map(item => {
        if (item.taskList.length > 0) {
          item.taskList.map(task => {
            if (task.approvalStatus !== '0') {
              //comments mandatory while submitting rejected timesheet
              if (task.approvalStatus == '3' && task.tsRejected && !task.comments && !rejectedTimesheetFlag) {
                rejectedTimesheetFlag = true;
                rejectedTaskName = task.taskName;
              }
              sortedTimesheetList.push(task);
            }
          })
        }
      })
    }

    if (sortedTimesheetList.length > 0 && !rejectedTimesheetFlag) {

      const url = this.timesheetRestApi[3];   //submit timesheet url
      const params: any = {
        "versions": version,
        "selectedDate": this.tsSelectedDateObj.date,
        "timesheetList": sortedTimesheetList
      }

      if (!queryId) {
        queryId = this.prevQueryID
      }

      let extraParams = {
        "actionName": "submitTimesheet",
        "lifespan": '1',
        "queryId": queryId,
        "pendingDates": this.pendingDates,
        "dateObjForSubmission": this.tsSelectedDateObj
      }
      this.selectedDateForCT.dateSelected.date = '';

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
    else if (rejectedTimesheetFlag) {
      this.utilities.presentAlert('Please add remarks for rejected timesheets');
    }

  }

}