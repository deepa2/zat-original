import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
/**
 * Generated class for the WowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zenrich-ref-detail',
  templateUrl: 'zenrich-ref-detail.html',
})
export class ZenrichRefDetailPage {
  private mainData: {}
  private openingsData
  private referralsData;
  private jobId;
  private refId;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private httpProvider: HttpProvider, private modalCtrl: ModalController, private popoverctr: PopoverController,
    private utility: CommonUtilities) {
    this.jobId = this.navParams.get('srfNo');
    this.refId = this.navParams.get('referralMappingId');
    this.getZenrichData();
  }

  getZenrichData() {
    this.utility.updateLoader(true);
    const url: string = "referralApplication";
    const data: any = { "referralMappingId": this.refId, "srfNo": this.jobId };
    this.utility.updateLoader(true);
    this.httpProvider.http
      .commonService({ url, data, zenRich: true })
      .subscribe(
        (res: any) => {
          //console.log(res)
          this.mainData = res.details;
          //console.log(this.mainData);
          this.utility.updateLoader(false);
        }, error => {
          this.utility.updateLoader(false);
        })
  }
  presentpopover(myEvent) {
    let popover = this
      .popoverctr
      .create('PopoverPage', { 'type': 'others' });
    popover.present({ ev: myEvent });
  }

  formatDate(obj) {
    return this.utility.formatDate(obj);
  }

  goToSavedProfile(data) {
    this.navCtrl.push('ZenRichSavedProfilesPage', { 'profileDetails': data.candidateInfo })
  }
  goToHelp() {
    this.navCtrl.push('AddPage', { 'type': 'addQuestion', 'questionId': null, 'answerType': null })
  }
}
