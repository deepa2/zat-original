import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
/**
 * Generated class for the ExitFaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exit-faq',
  templateUrl: 'exit-faq.html',
})
export class ExitFaqPage {

  faqData: any;
  faqDetails: any;
  faqCopy: any;
  type = "exit-faq";
  searchText = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpProvider, private utility: CommonUtilities) {
    this.faqDetails = this.navParams.get('faqDetails')
  }

  ionViewDidLoad() {
    this.utility.updateLoader(true);
    let param = {
      url: 'getFaqsData',
      data: {
        departmentId: 12
      },
      miscellaneous: true
    }
    this.http.http.commonService(param).subscribe((response: any) => {
      console.log(response);
      if (response && response.details) {
        this.utility.updateLoader(false);
        this.faqData = response.details;
        this.faqCopy = this.faqData;
      }
    },
      error => {
        this.utility.updateLoader(false);
      })
  }
  askQuestion() {
    this.navCtrl.push('AddPage', { 'type': 'addQuestion', 'questionId': null, 'answerType': null });
  }


  updateFilter() {
    this.faqData = this.faqCopy;

    if (this.searchText != '' && this.searchText != null) {
      this.faqData = this.faqData.filter((value) => {
        if ((value.question.toLowerCase().includes(this.searchText.toLowerCase())) || (value.answer.toLowerCase().includes(this.searchText.toLowerCase()))) 
          return value;
        });
    } else if(this.searchText == '' || this.searchText == null){
      this.faqData = this.faqCopy;
    }

  }



}
