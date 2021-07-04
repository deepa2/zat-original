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
  selector: 'page-zenrich-profile',
  templateUrl: 'zenrich-profile.html',
})
export class ZenrichProfilePage {
  private mainData: Array<any> = [];
  private loadedData = [];
  private infiniteScroll: any = '';
  private srfNo;
  private start: any = 0;
  private end: any = 10;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private httpProvider: HttpProvider, private modalCtrl: ModalController, private popoverctr: PopoverController,
    private utility: CommonUtilities) {
    this.srfNo = this.navParams.get('srfNo');
    // this.getZenrichData();
  }
  ionViewDidEnter() {
    this.mainData = [];
    this.utility.updateLoader(true);
    this.start = 0;
    this.end = 10;
    this.getZenrichData()
  }

  getZenrichData() {
    if (this.loadedData.length == 0) {
      this.utility.updateLoader(true);
    }
    const url: string = "requestData";
    const data: any = {
      "searchKey": "",
      "start": this.start,
      "end": this.end,
      "type": "SAVED_PROFILES",
      'srfNo': this.srfNo
    };
    this.httpProvider.http
      .commonService({ url, data, zenRich: true })
      .subscribe(
        (res: any) => {
          //console.log(res)

          if (res.details.requestData != null) {
            this.loadedData = res.details.requestData;
            this.mainData = this.mainData.concat(this.loadedData);
          }

          if (this.infiniteScroll) {
            this.infiniteScroll.complete();
            this.infiniteScroll = '';
          }
          this.utility.updateLoader(false);
        }, error => {
          //console.log(error);
          this.utility.updateLoader(false);
        })
  }
  loadProfiles(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    this.start = this.end;
    this.end = this.end + 10;
    this.getZenrichData();
  }
  createNewProfile() {
    this.navCtrl.push("ReferralDetailsPage", { 'candidateProfileId': 0, 'srfNo': this.srfNo, "createNew": false })
  }
  goToRefDetails(refId, data) {
    if (!data.isUserApplied) {
      this.navCtrl.push("ReferralDetailsPage", { 'candidateProfileId': refId, 'srfNo': this.srfNo, "createNew": false, 'isCominFromProfile': true })
    }
  }
}
