import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { ExitRecoveryDetailsComponent } from '../../../components/exit-recovery-details/exit-recovery-details';
import { ExitEmailComponent } from '../../../components/exit-email/exit-email';
import { Rating } from '../../../components/rating/rating';
/**
 * Generated class for the ExitStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exit-status',
  templateUrl: 'exit-status.html',
})
export class ExitStatusPage {
  exitStatusData: any;
  type = 'exit-Status';

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpProvider, private utility: CommonUtilities, private modalCtrl: ModalController,
  ) {
  }

  ionViewDidLoad() {
    this.getExitStatusData();

  }

  needHelp() {
    this.navCtrl.push('AddPage', { 'type': 'addQuestion', 'questionId': null, 'answerType': null });
  }
  openFAQ() {
    let data = {
      icon: this.exitStatusData.faqIcon,
      text: this.exitStatusData.faqText
    }
    this.navCtrl.push('ExitFaqPage', { 'faqDetails': data })
  }
  openRecoveryAmountDetails() {
    let modal = this.modalCtrl.create(ExitRecoveryDetailsComponent, { data: this.exitStatusData }, {
      // cssClass: 'faq-modal'
      cssClass: 'emailCSS',
    });
    modal.present();
  }

  getExitStatusData() {
    this.utility.updateLoader(true)
    let param = {
      url: 'exitDepartmentTracker',
      data: {},
      zenExit: true
    }
    this.http.http.commonService(param).subscribe((response: any) => {
      this.utility.updateLoader(false);
      console.log(response);
      if (response && response.details) {
        this.exitStatusData = response.details;
      }
    },
      error => {
        this.utility.updateLoader(false)
      })
  }

  exitMail(managersData) {
    let modal = this.modalCtrl.create(ExitEmailComponent, { data: managersData }, {
      // cssClass: 'faq-modal'
      cssClass: 'emailCSS',
    });
    modal.present();
  }

  updateRating(data) {
    let modal = this.modalCtrl.create(Rating, { ratingData: data }, { cssClass: 'ratingCSS' });
    modal.present();
    modal.onDidDismiss((data) => {
      if (data) {
        console.log(data);
        // this.exitStatusData.departmentList.filter((value) => {
        //   if (value.departmentId == data.departmentId) {
        //     value.rating = data.rating - 1;
        //   }
        // })
        let param = {
          url: 'ratingAgainstDepartment',
          data: {
            "rating": data.rating - 1,
            "departmentId": data.departmentId,
            "comments": data.comments
          },
          zenExit: true
        }
        this.http.http.commonService(param).subscribe((response: any) => {
          if (response && response.status.statusCode == 1) {
            this.getExitStatusData();
          }
        }, error => {
          this.utility.updateLoader(false)
        })
      }
    })
  }

  goToCheckList() {
    this.navCtrl.push('ExitChecklistPage')
  }
}
