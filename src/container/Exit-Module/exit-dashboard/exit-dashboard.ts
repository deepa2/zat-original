import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { DomSanitizer } from '@angular/platform-browser'

/**
 * Generated class for the ExitDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exit-dashboard',
  templateUrl: 'exit-dashboard.html',
})
export class ExitDashboardPage {
  exitDetailsData: any;
  isDataAvailable: boolean = false;
  navParamData: any;



  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider, private utility: CommonUtilities, private sanitizer: DomSanitizer) {
    this.navParamData = this.navParams.get('data')
    if(this.navParamData && !this.navParamData.isExitUserEntry){
      this.navCtrl.push('PersonalDetailsPage', {
        'peronalDetails': this.navParamData
      })
    }
   
  }

  ionViewWillEnter() {
    this.utility.updateLoader(true);
    let param = {
      url: 'userDetails',
      data: {},
      zenExit: true
    }
    this.httpProvider.http.commonService(param).subscribe((response: any) => {
      console.log(response);
      this.utility.updateLoader(false);
      if (response && response.details) {
        this.isDataAvailable = true
        this.exitDetailsData = response.details;
      }
    },
      error => {
        this.utility.updateLoader(false);
      })


  }

  formateDate(data) {
    return this.utility.formatDate(data);
  }

  goToPersonalDetails() {
    this.navCtrl.push('PersonalDetailsPage', {
      'peronalDetails': this.exitDetailsData
    })
  }

  goToExitStatus() {
    this.navCtrl.push('ExitStatusPage');
  }



}
