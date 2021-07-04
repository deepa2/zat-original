import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { Clipboard } from '@ionic-native/clipboard';
import { v } from '@angular/core/src/render3';
/**
 * Generated class for the WowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zenrich-job-detail',
  templateUrl: 'zenrich-job-detail.html',
})
export class ZenrichJobDetailPage {
  private mainData: any;
  private openingsData
  private referralsData;
  private srfNo;
  private isComingFromSavedProfile: boolean;
  private candidateProfileId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private httpProvider: HttpProvider, private modalCtrl: ModalController, private popoverctr: PopoverController,
    private clipBoard: Clipboard, private utility: CommonUtilities) {
    this.srfNo = this.navParams.get('srfNo');
    this.isComingFromSavedProfile = this.navParams.get('isComingFromSavedProfile');
    this.candidateProfileId = this.navParams.get('candidateProfileId')
    this.getZenrichData();
  }

  getZenrichData() {
    this.utility.updateLoader(true);
    const url: string = "jobOpeningDetails";
    const data: any = { "srfNo": this.srfNo };
    this.utility.updateLoader(true);
    this.httpProvider.http
      .commonService({ url, data, zenRich: true })
      .subscribe(
        (res: any) => {
          //console.log(res)
          this.mainData = res.details;
          //console.log(this.mainData);
          this.utility.updateLoader(false);
        })
  }

  goToReferral() {
    this.navCtrl.push("ZenrichProfilePage", { "srfNo": this.srfNo })
  }
  formatDate(obj) {
    return this.utility.formatDate(obj);
  }
  bookMarked(selectedItem, srfNo) {
    let bookedmarkValue: boolean = !selectedItem;
    this.mainData.isBookmarked = bookedmarkValue;
    let param = {
      url: 'bookmarkSpecificJob',
      data: {
        srfNo: srfNo,
        save: bookedmarkValue
      },
      zenRich: true
    }
    this.httpProvider.http.commonService(param).subscribe((response: any) => {
      //console.log(response)
      this.utility.showToast(response.details.toastMessage);
    })
  }

  presentpopover(myEvent, jobCode, jobtitle) {
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
          let title = this.utility.formateData(this.mainData.jobTitle);
          let skillsStr = this.utility.formateData(this.mainData.skills);
          let str: string = `Title: ${title}\nGrade: ${this.mainData.grade}\nExperience:${this.mainData.experience}\nSkills: ${skillsStr}\nLocation: ${this.mainData.location}`;
         this.clipBoard.copy(str).then(() => {
            this.utility.showToast("Copied to clipboard");
          })
        }
      }
    })
  }

  getMainSkills(value) {
    return this.utility.formateData(value)
  }

  goTOCandidateForm() {
    this.navCtrl.push("ReferralDetailsPage", { 'candidateProfileId': this.candidateProfileId, 'srfNo': this.srfNo, "createNew": false })
  }
}
