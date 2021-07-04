import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../../providers/http/http';


/**
 * Generated class for the RtoEngagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rto-engagement',
  templateUrl: 'rto-engagement.html',
})
export class RtoEngagementPage {
  private rtoEngagementData: any = [];
  private selectedMonth: any = "";
  private monthsList: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private utility: CommonUtilities, private httpProvider: HttpProvider, private popOver: PopoverController) {
  }

  ionViewDidLoad() {

    this.getRtoEngagementData();

  }

  getRtoEngagementData() {
    this.utility.updateLoader(true);
    let param = {
      url: 'rtoEngagement',
      data: {
        "month": this.selectedMonth
      },
      miscellaneous: true
    }
    this.httpProvider.http.commonService(param).subscribe((response: any) => {
      if (response && response.details) {
        if (this.selectedMonth == '') {
          //console.log(response.details);
          this.rtoEngagementData = response.details.countryWiseRTOEngegementData;
          this.monthsList = response.details.monthList;
          this.selectedMonth = this.monthsList[this.monthsList.length - 1];
        } else if (this.selectedMonth != '') {
          //console.log(response.details);
          this.rtoEngagementData = response.details.countryWiseRTOEngegementData;
          this.monthsList = response.details.monthList;
        }
      } else {
        
      }
      this.utility.updateLoader(false);
    }, error => {

    })
  }

  presentOption(event) {
    let popOver = this.popOver.create('PopoverPage', { 'type': 'rtoData', 'selectedMonth': this.selectedMonth, 'monthsData': this.monthsList })
    popOver.present({ ev: event });
    popOver.onDidDismiss(value => {
      if (value) {
        this.selectedMonth = value.month;
        this.getRtoEngagementData();
      }
    })
  }

}
