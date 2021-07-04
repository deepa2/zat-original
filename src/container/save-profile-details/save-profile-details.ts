import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
/**
 * Generated class for the SaveProfileDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-save-profile-details',
  templateUrl: 'save-profile-details.html',
})
export class SaveProfileDetailsPage {

  private profileDetails: any;
  private profileData: any = [];
  private selectedTab: any = 0;
  private profileKey: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider, private utility: CommonUtilities) {
    this.profileDetails = this.navParams.get('profileDetails');
  }

  ionViewDidLoad() {

    this.utility.updateLoader(true);
    let param = {
      url: 'getcandidateProfileDetails',
      data: {
        "candidateProfileId": this.profileDetails.candidateProfileId
      },
      zenRich: true
    }
    this.httpProvider.http.commonService(param).subscribe((response: any) => {
      console.log(response);
      if (response && response.details && response.details.length > 0) {
        this.profileData = response.details;
        this.profileKey = this.profileData[0].key;
        this.utility.updateLoader(false);
      }
    },
      error => {
        this.utility.updateLoader(false);
      })
  }

  changeTab(index, key) {
    this.selectedTab = index;
    this.profileKey = key;
  }
  private goToCandidateProfile() {
    this.navCtrl.push('ReferralDetailsPage', {
      'candidateProfileId': this.profileDetails.candidateProfileId,
      "createNew": true
    })
  }

}
