import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the RtoQuestionnariesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rto-questionnaries',
  templateUrl: 'rto-questionnaries.html',
})
export class RtoQuestionnariesPage {

  private questionsList: any;
  private answerList = [];
  private isDisabled: boolean = true;
  private isEligibleForOffice: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider, private utilities: CommonUtilities,private alertCtrl:AlertController) {

  }

  ionViewDidLoad() {
    this.utilities.updateLoader(true);
    let data = {
      url: 'covidSurveyQuestions',
      data: {},
      miscellaneous: true
    }

    this.httpProvider.http.commonService(data).subscribe((response: any) => {
      this.utilities.consoleLog(response);
      if (response && response.details) {
        this.utilities.updateLoader(false);
        this.questionsList = response.details.questionDOList;
      }
    },
      error => {
        this.utilities.updateLoader(false);
      })

  }

  selectAnswer(wholedata, answers) {

    if (this.answerList.length == 0) {
      wholedata.selectedAnswer = answers
      this.answerList.push(wholedata);
    } else {
      if (this.answerList.indexOf(wholedata) == -1) {
        wholedata.selectedAnswer = answers
        this.answerList.push(wholedata);
      } else if (this.answerList.indexOf(wholedata) != -1) {
        this.answerList.filter(data => {
          if (data.questionId == wholedata.questionId) {
            data.selectedAnswer = answers;
          }
        })
      }


    }

    if (this.questionsList.length == this.answerList.length) {
      // this.answerList.filter(data => {
      //   if (data.selectedAnswer.answer == 'Yes') {
      //     this.isEligibleForOffice = false;
      //   }
      // })
      this.isDisabled = false

    }
    console.log(this.answerList);
  }


  submitQuestionnnaires() {
    let submit;
    if (this.questionsList.length == this.answerList.length) {
      this.answerList.filter(data => {
        if (data.selectedAnswer.answer == 'Yes') {
          this.isEligibleForOffice = false;
        }
      })
      this.isDisabled = false

    }
    submit = this.answerList.map(data => {
      const submitAnswers: any = {};
      submitAnswers.questionId = data.questionId;
      submitAnswers.answerId = data.selectedAnswer.answerId;
      return submitAnswers;
    })
    console.log(submit);
    this.utilities.updateLoader(true);
    let data = {
      url: 'submitCovidQA',
      data: submit,
      miscellaneous: true
    }


    this.httpProvider.http.commonService(data).subscribe((response: any) => {
      console.log(response)
      this.utilities.updateLoader(false);
      if(this.isEligibleForOffice){
        // this.utilities.alert("You are Eligible to come to office","Hello").then(()=>{
        //   this.navCtrl.pop();
        //})
        this.presentAlert("You meet the criteria to go to office.<br><br>Thank-you for submitting the Return to Office (RTO) Declaration & policy agreement. <br>Please adhere to the RTO policy and obligations in the Declaration, to ensure a safe working environment for yourself and your colleagues.").then(()=>{
          this.navCtrl.popToRoot();
        })
      }else{
        this.presentAlert("You do not meet the criteria to go to office.<br><br>Thank-you for submitting the Return to Office (RTO) Declaration & policy agreement. <br>Please adhere to the RTO policy and obligations in the Declaration, to ensure a safe working environment for yourself and your colleagues.").then(()=>{
          this.navCtrl.popToRoot();
        })
      }
    },
      (error) => {
        this.utilities.updateLoader(false);
      }
    )
  }


  presentAlert(message, title = '') {

    return new Promise<void>(resolve => {
        let alert = this.alertCtrl.create({
            enableBackdropDismiss: false,
            //title: `<div class="RTO-US-questions-title"><img src="assets/imgs/RTO-send.svg"> <span> Thank You </span></div> `,
            title: `<div class="RTO-US-questions-title"> <span> Thank You </span></div> `,
            message: message,
            cssClass: "customizedAlertRTO",
            buttons: [
                {
                    text: 'OK',
                    handler: () => {
                        resolve();
                    }
                }
            ]
        });
        alert.present();
    })

}


}
