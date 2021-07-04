import { Component, NgZone, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, ModalController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Platform } from 'ionic-angular/platform/platform';
import * as fromStore from "@app/store";
import { SpeechRecognitionUtility } from '../../providers/speechRecognition/speechRecognition';
import { Data } from '../../providers/data/data';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { Subscription } from 'rxjs';
import { File } from '@ionic-native/file';
import { Constants } from '../../constants/constants'
import { GalleryModal } from 'ionic-gallery-modal';
import { HttpAngularProvider } from '../../providers/http-angular/http-angular';

/**
 * Generated class for the PostQuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-question',
  templateUrl: 'post-question.html',
})
export class PostQuestionPage {

  @ViewChild(Navbar) navBar: Navbar;

  private askedQuestion: string = "";
  private mute: boolean = false
  private listening: boolean = false
  formData: FormData;
  navType: string;
  questionId: string;
  currentURL: string = null;
  // role: string;
  answerType: string
  title: string
  btnTitle: string
  private getData: any;
  private maxLength = Constants.maxLength;
  private remainingCharacters;
  private warning: string = ''
  private lessThanZero = false
  private confirmation = "Do you want to post or cancel?";
  private imgList: any;
  photo: Array<any> = [];

  constructor(private platform: Platform, private navParams: NavParams, private store: Store<fromStore.AppState>, private data: Data,
    private navCtrl: NavController, private utilities: CommonUtilities, private zone: NgZone, private speechRecognitionUtility: SpeechRecognitionUtility,
    private file: File, private modalCtrl: ModalController, private httpAngularProvider: HttpAngularProvider) {

    this.getData = this.navParams.get('screenShotPath');
    this.remainingCharacters = this.maxLength
    this.warning = "Question should be less than " + this.maxLength + " characters";

    this.platform.registerBackButtonAction(() => this.backButtonClick, 2)
    this.formData = new FormData();
  }

  backButtonClick() {
    this.navCtrl.getPrevious().data.questionPosted = false;
    this.navCtrl.pop()
  }

  ionViewDidLoad() {

    this.navBar.backButtonClick = this.backButtonClick;

    if (this.utilities.platformAvailable())
      this._startListening()

    if (this.getData) {
      //console.log(this.getData.screenshot.filePath)
      let filepath = `file://${this.getData.screenshot.filePath}`;
      this.imgList = filepath;
      this.photo.push({ url: this.imgList })

      this.file.resolveLocalFilesystemUrl(filepath).then((entry: any) => {
        entry.file((file) => {

          const fileReader = new FileReader();
          fileReader.readAsArrayBuffer(file);
          fileReader.onload = ev => {

            let imgBlob = new Blob([fileReader.result], { type: file.type });
            this.formData.append('file', imgBlob, file.name);
            // this.store.dispatch(new fromStore.AddMultimediaAction("addQuestion", this.formData, "addQuestion"));
          }
        })
      })
    }
  }

  _startListening() {
    this.listening = true
    this.speechRecognitionUtility.startListening().subscribe((value: string) => {

      if (value.toLowerCase() == 'post') {
        this.send()
      } else if (value.toLowerCase() == 'cancel') {
        this.cancel()
      } else {
        // this.askedQuestion = value
        this._inputUpdate(value);
        this._tts('Do you want to post or cancel')
      }
      this.zone.run(() => {
        this.listening = false
      })
    }, (error) => {
      this.zone.run(() => {
        this.listening = false
      })

    })
  }

  _tts(text) {
    if (!this.mute) {
      this.speechRecognitionUtility.textToSpeech(text);
    }
  }

  send() {
    let message: string = null;
    message = 'Do you want to submit ?';
    this.btnTitle = "Submit";
    this.currentURL = 'addQuestionUsingZeno';
    this.formData.append('question', this.askedQuestion);

    this.utilities.updateLoader(true)

    this.httpAngularProvider.multimediaService({ url: this.currentURL, data: this.formData }).subscribe((response: any) => {
      this.utilities.updateLoader(false)
      if (response && response.status && response.status.statusCode && response.status.statusCode == 1) {
        this.submitHrChatBotFeedback(response)
      }
    });
    // this.store.dispatch(new fromStore.AddMultimediaAction(this.currentURL, this.formData, 'addQuestion'));
  }

  submitHrChatBotFeedback(response) {
    if (this.getData) {
      let params = {
        "userId": this.getData.userId,
        "queryId": this.getData.queryId,
        "feedbackValue": 2,
        "feedbackComment": this.askedQuestion
      }
      // this.store.dispatch(new fromStore.GetHrChatBotSubmitFeedbackAction("", params));
      this.httpAngularProvider.commonService({ url: "", data: params, chatBotFeedback: true }).subscribe((response: any) => {
        this.utilities.updateLoader(false)
        if (response && response.status && response.status.statusCode && response.status.statusCode == 1) {

          // state.data[state.data.length - 1].response.responseList.feedbackSent = true;

          let feedbackResponse: any = ""

          if (response.details.responseList.feedbackValue == -1) {
            feedbackResponse = "Thanks for your feedback"
            response.responseList = {
              actionName: 'negativeFeedbackres',
              feedbackResponse: feedbackResponse,
              suggestionsList: response.details.responseList.suggestionsList,
              suggestionPhrase: response.details.responseList.suggestionPhrase,
              feedbackLoader: true
              // lifespan: 1,
              // actionIncomplete: false
            }
          } else if (response.details.responseList.feedbackValue == 1) {
            feedbackResponse = "Thanks for your feedback"
            response.responseList = {
              actionName: 'receivedFeedbackRes',
              feedbackResponse: feedbackResponse,
              suggestionsList: response.details.responseList.suggestionsList,
              suggestionPhrase: response.details.responseList.suggestionPhrase,
              feedbackLoader: true
              // lifespan: 1,
              // actionIncomplete: false
            }

          } else if (response.details.responseList.feedbackValue == 2) {

            response.responseList = {
              actionName: 'postQuestionFeedBack',
              feedbackResponse: null,
              suggestionsList: response.details.responseList.suggestionsList,
              suggestionPhrase: response.details.responseList.suggestionPhrase,
              feedbackLoader: true
              // lifespan: 1,
              // actionIncomplete: false
            }
          }

          this.navCtrl.getPrevious().data.questionPosted = true;
          this.navCtrl.getPrevious().data.feedbackResponse = response;
          this.navCtrl.pop();
        }
      });
    }
  }

  cancel() {
    this.askedQuestion = '';
    this.navCtrl.getPrevious().data.questionPosted = false;
    this.navCtrl.pop()
  }

  _inputUpdate(value) {
    this.askedQuestion = value
    this.remainingCharacters = Constants.maxLength - String(this.askedQuestion).length;
    if (this.remainingCharacters > -1) {
      this.lessThanZero = false;
    } else {
      this.lessThanZero = true;
    }
  }

  ionViewWillLeave() {
    this.store.dispatch(new fromStore.AddResetAction());
  }

  getFileName(item) {
    return item.substring(item.lastIndexOf('/') + 1);
  }

  openModal(data) {
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.photo
    }, {
      cssClass: 'gallery-modal',
    })
    modal.present();
  }

  removeImg() {
    this.formData.delete('file');
    this.imgList = undefined;
  }

}

