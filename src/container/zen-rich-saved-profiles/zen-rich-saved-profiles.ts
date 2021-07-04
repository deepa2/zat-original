import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { Clipboard } from '@ionic-native/clipboard';

/**
 * Generated class for the ZenRichSavedProfilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zen-rich-saved-profiles',
  templateUrl: 'zen-rich-saved-profiles.html',
})
export class ZenRichSavedProfilesPage {

  private profileDetails: any;
  private profileData: any = [];
  private selectedTab: any = 0;
  private profileKey: string;
  private start = 0;
  private end = 10;
  private type = 'ALL'
  private infinitescroll: any;





  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider, private utility: CommonUtilities, private ngZone: NgZone, private clipBoard: Clipboard, private popoverctr: PopoverController) {
    this.profileDetails = this.navParams.get('profileDetails');
  }

  ionViewDidLoad() {

  }
  initializeData() {
    this.profileDetails;
    this.profileData = [];
    if (this.selectedTab == 0) {
      this.profileKey = '';
    } else {
      this.profileKey = this.profileKey;
    }

    this.start = 0;
    this.end = 10;
    this.type = 'ALL'
    this.selectedTab = this.selectedTab;

  }
  ionViewWillEnter() {
    // this.selectedTab = 0;
    this.initializeData()
    this.getData();
  }
  getData() {
    if (this.profileData.length == 0) {
      this.utility.updateLoader(true);
    }

    let param = {
      url: 'getcandidateProfileDetails',
      data: {
        "candidateProfileId": this.profileDetails.candidateProfileId,
        start: this.start,
        end: this.end,
        type: this.type
      },
      zenRich: true
    }
    this.httpProvider.http.commonService(param).subscribe((response: any) => {
      //console.log(response);

      if (response && response.details && response.details.length > 0 && !this.infinitescroll) {

        this.profileData = response.details;
        if (this.profileKey) {
          this.profileKey = this.profileData[2].key;
        } else {
          this.profileKey = this.profileData[0].key;
        }

        this.utility.updateLoader(false);
      }
      if (response.details.length > 0 && this.infinitescroll) {
        this.infinitescroll.complete();
        this.profileData[this.selectedTab].value = this.profileData[this.selectedTab].value.concat(response.details[0].value);
      }
      if (response.details.length == 0 && this.infinitescroll) {
        this.infinitescroll.complete();

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
      "createNew": true,
      'isComingFromProfileDetails': true
    })
  }
  bookMarked(selectedItem, index) {
    let bookedmarkValue: boolean;
    this.profileData.map(value => {
      if (value.key == 'Matching Jobs') {
        value.value.map(data => {
          if (data.srfNo == selectedItem.srfNo) {
            bookedmarkValue = !data.isBookmarked;
            data.isBookmarked = !data.isBookmarked
          }
          return data;
        })
      }
      return value;
    })
    let param = {
      url: 'bookmarkSpecificJob',
      data: {
        srfNo: selectedItem.srfNo,
        save: bookedmarkValue
      },
      zenRich: true
    }
    this.httpProvider.http.commonService(param).subscribe((response: any) => {
      //console.log(response)
      this.utility.showToast(response.details.toastMessage);
    })
  }

  goToJobDetails(srfNo) {
    this.navCtrl.push("ZenrichJobDetailPage", { 'srfNo': srfNo, 'isComingFromSavedProfile': true, 'candidateProfileId': this.profileDetails.candidateProfileId })
  }

  loadData(event) {
    this.infinitescroll = event;
    this.start = this.end;
    this.end += 10;
    this.type = 'MATCHING_JOB';
    this.getData();
  }

  presentpopover(myEvent, jobCode, jobtitle, item) {
    let popover = this
      .popoverctr
      .create('PopoverPage', { 'type': 'ZenRich' });
    popover.present({ ev: myEvent });
    popover.onDidDismiss((value) => {
      if (value != null) {
        if (value == 'CopyCode') {
          this.clipBoard.copy(jobCode).then(() => {
            this.utility.showToast("Copied to clipboard");
          })
        } else {
          let title = this.utility.formateData(item.jobTitle);
          let skillsStr = this.utility.formateData(item.skills);
          let str: string = `Title: ${title}\nGrade: ${item.grade}\nExperience:${item.experience}\nSkills: ${skillsStr}\nLocation: ${item.location}`;
          this.clipBoard.copy(str).then(() => {
            this.utility.showToast("Copied to clipboard");
          })
        }
      }
    })
  }
  formatDate(obj) {
    return this.utility.formatDate(obj)
  }

}
