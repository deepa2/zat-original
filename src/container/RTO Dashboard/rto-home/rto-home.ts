import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../../providers/http/http';

/**
 * Generated class for the RtoHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rto-home',
  templateUrl: 'rto-home.html',
})
export class RtoHomePage {
  combinedData: any;
  rtoPopulation: any;
  rtoEngagement: any;
  private tooltipEvent: 'click' | 'press' = 'click'
  private activeToolTip: boolean = false;
  duration: number = 5500;

  constructor(public navCtrl: NavController, public navParams: NavParams, private utility: CommonUtilities, private http: HttpProvider) {
  }

  ionViewDidLoad() {
    this.utility.updateLoader(true);
    let param = {
      url: 'rtoDashboard',
      data: {},
      miscellaneous: true
    }
    this.http.http.commonService(param).subscribe((response: any) => {
      ////console.log(response)
      this.combinedData = response.details[0];
      this.rtoPopulation = response.details[1];
      this.rtoEngagement = response.details[2];
      this.utility.updateLoader(false);

    }, error => {
      this.utility.updateLoader(false);
      //console.log(error)
    })
  }
  getCountryDetails(selectedCountry) {
    //console.log(selectedCountry);
    this.navCtrl.push('RtoCountryWisePage', {
      'selectedCountry': selectedCountry
    })
  }

  goToPage(type, event) {
    if (event != undefined) {
      event.stopPropagation();
      return;
    }
    if (type == 'RTO') {
      this.navCtrl.push('RtoPopulationPage');
    }
    if (type == 'RTO Engagement') {
      this.navCtrl.push('RtoEngagementPage');
    }
  }
}
