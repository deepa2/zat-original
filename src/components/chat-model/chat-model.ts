import { Component, NgZone } from '@angular/core';
import { NavParams, NavController, ViewController, App } from "ionic-angular"
import { SpeechRecognitionUtility } from "../../providers/speechRecognition/speechRecognition";
import { CommonUtilities } from "../../providers/commonUtilities/commonUtilities";
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the ChatModelComponent component.
 *
 */
@Component({
  selector: 'chat-model',
  templateUrl: 'chat-model.html'
})
export class ChatModelComponent {

  title: string;
  data: any;
  chatbotSuggestions: any
  userDetails;
  userName;
  listening: boolean;
  private suggestionList: any = {
    suggestionsList: [],
    newFeaturesList: []
  };
  constructor(private httpProvider: HttpProvider, private navCtrl: NavController, private viewctl: ViewController, private speechRecognition: SpeechRecognitionUtility, private navParam: NavParams, private zone: NgZone, private utilities: CommonUtilities, private app: App) {
    this.userDetails = this.navParam.get("userDetails");
    this.userName = "Hi " + this.userDetails.employeeName.substring(0, this.userDetails.employeeName.indexOf(" ")) + ", how may I help you?";
    this._getSuggestionListFromServer(`getSuggestionList`, {
      "actionId": 0
    });

    if (this.utilities.platformAvailable())
      this.speechRecognition.textToSpeech(this.userName);
  }

  goToChatBot(data) {
    let dismissData = { data: "", moveToChatDetails: false }
    dismissData.data = data
    dismissData.moveToChatDetails = true
    this.dismissModel(dismissData)
  }

  dismissModel(data) {
    this.viewctl.dismiss(data)
  }

  _startListening() {
    this.listening = true
    this.speechRecognition.startListening().subscribe((value: string) => {
      this.goToChatBot(value);
      this.zone.run(() => {
        this.listening = false
      })
    }, (error) => {
      this.zone.run(() => {
        this.listening = false
      })

    })
  }

  _getSuggestionListFromServer(url: string, params: object) {
    let data = {
      url: url,
      data: params,
      chatBotInfoList: true
    }
    this.httpProvider.http.commonService(data).subscribe((response: any) => {
      if (response.details) {
        this.suggestionList.suggestionsList = response.details.responseList.suggestionsList.split(",");
        if (response.details.responseList.newFeaturesList.length > 0)
          this.suggestionList.newFeaturesList = response.details.responseList.newFeaturesList.split(",");
        else
          this.suggestionList.newFeaturesList = []
      }

    },
      error => {
      })
  }
}




