import { Component, EventEmitter, Input, Output, SimpleChanges } from "@angular/core";
import { Screenshot } from "@ionic-native/screenshot/ngx";
import { NavController, PopoverController } from "ionic-angular";
import { GetterSetter } from "../../../../providers/getterSetter/getterSetter";
import { ChatBotServices } from "../../../../container/chat-bot-new/chat-bot-new-services/chat-bot-new.services";

/**
 * Generated class for the CreateTaskComponent component.
 */
@Component({
  selector: 'feedback-componenet',
  templateUrl: 'feedback-componenet.html',
})

export class FeedbackComponent {

  @Input() feedbackDetails: any;
  @Input() currentActionId: any;
  @Input() currentQueryId: any;
  @Input() chatList: any;
  @Input() userDetails: any;
  @Input() queryListenFromFeedback: any;
  @Input() showQueryBox: any;

  @Output() sendNegativeFeedback: EventEmitter<any> = new EventEmitter();
  @Output() submitFeedback: EventEmitter<any> = new EventEmitter();
  @Output() tts: EventEmitter<any> = new EventEmitter();
  @Output() scrollToBottom: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();


  private negativeFeedbackMessage: any;
  private feedbackMessage: string = "Helpful ?";

  constructor(private chatBotServices: ChatBotServices,
    private screenshot: Screenshot,
    private popoverCtrl: PopoverController,
    private navCtrl: NavController,
    private getterSetter: GetterSetter
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.showQueryBox.currentValue)
      this.scrollToBottom.emit();
  }

  _sendNegativeFeedback(chatListItem: any, negativeFeedbackMessage: any) {
    if (negativeFeedbackMessage) {
      if (chatListItem.actionName == 'investment' || chatListItem.actionName == 'salary_discrepency' || chatListItem.actionName == 'pf_faq_yes' || chatListItem.actionName == 'pf_faq' || chatListItem.actionName == 'visaPolicy' || chatListItem.actionName == 'salaryLetter') {
        let params = {
          "actionName": chatListItem.actionName,
          "body": negativeFeedbackMessage,
          "actionId": this.currentActionId
        }
        var url = chatListItem.restApi;
        let serviceParams = {
          url: url,
          data: {
            params: params,
          },
          payrollQuery: true
        }

        this.getterSetter.setUserChatListData(this.chatList);
        this.chatBotServices._payRollServiceDetails(serviceParams).then((response: any) => {
          this.sendNegativeFeedback.emit({ chatList: response.data })
        });

        this.negativeFeedbackMessage = '';
      } else {
        let queryId
        if (!chatListItem.queryId) {
          queryId = this.currentQueryId
        } else {
          queryId = chatListItem.queryId
        }
        let params = {
          "userId": this.userDetails.userId,
          "queryId": queryId,
          "feedbackValue": -1,
          "feedbackComment": negativeFeedbackMessage,
          "actionId": this.currentActionId
        }

        let serviceParams = {
          url: "",
          data: {
            params: params,
          },
          chatBotFeedback: true
        }

        this.getterSetter.setUserChatListData(this.chatList)
        this.chatBotServices._submitFeedBack(serviceParams).then((response: any) => {
          this.sendNegativeFeedback.emit({ chatList: response.data })
        });
        this.negativeFeedbackMessage = '';
      }
    }
    this.scrollToBottom.emit();

  }

  _submitFeedback(flag: string, chatListItem: any, myevent: any) {
    this.tts.emit();

    let queryId
    if (!chatListItem.queryId) {
      queryId = this.currentQueryId
    } else {
      queryId = chatListItem.queryId
    }
    if (flag == 'Positive') {
      let params = {
        "userId": this.userDetails.userId,
        "queryId": queryId,
        "feedbackValue": 1,
        "feedbackComment": "",
        "actionId": this.currentActionId
      }
      let serviceParams = {
        url: "",
        data: {
          params: params,
        },
        chatBotFeedback: true
      }

      this.getterSetter.setUserChatListData(this.chatList)
      this.chatBotServices._submitFeedBack(serviceParams).then((response: any) => {
        this.submitFeedback.emit({ chatList: response.data })
      });

    } else if (flag == 'Negative') {
      let popover = this.popoverCtrl.create('PopoverPage', { 'type': 'chatBot' })
      popover.present({ ev: myevent });
      popover.onDidDismiss((data) => {
        if (data == 'askquestion') {
          chatListItem.negativeFeedback = false;
          this.screenshot.save('png', 80, queryId.toString()).then((response) => {
            if (response) {
              this.navCtrl.push('PostQuestionPage', {
                "screenShotPath": {
                  queryId: queryId,
                  userId: this.userDetails.userId,
                  screenshot: response
                }
              })
            }
          }, error => {
          })
        } else if (data == 'feedback') {
          this.showQueryBox = true
          chatListItem.negativeFeedback = !chatListItem.negativeFeedback;
          this.scrollToBottom.emit();

        }
      })
    }

  }

  _cancel() {
    this.showQueryBox = false;
    this.cancel.emit();
  }

}