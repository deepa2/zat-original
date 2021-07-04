import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';
import { ZenwenSpeakDetailsComponent } from '../../../components/zenwen-speak-details/zenwen-speak-details';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
/**
 * Generated class for the SafetyZensarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-safety-zensar',
  templateUrl: 'safety-zensar.html',
})
export class SafetyZensarPage {
  private safetyDataList: Array<any> = [];
  private imageUrlList: Array<any> = [
    {
      'fileEntryId': 137738,
      'imageUrl': 'security',
      'bgImageUrl': 'security-bg'
    },
    {
      'fileEntryId': 137746,
      'imageUrl': 'safe-commuting',
      'bgImageUrl': 'safe-commuting-bg'
    },
    {
      'fileEntryId': 137754,
      'imageUrl': 'afterOfficeHoursStay',
      'bgImageUrl': 'afterOfficeHoursStay-bg'
    },
    {
      'fileEntryId': 137762,
      'imageUrl': 'safety-tips',
      'bgImageUrl': 'safety-tips-bg'
    },
    {
      'fileEntryId': 137788,
      'imageUrl': 'apps-download',
      'bgImageUrl': 'apps-download-bg'
    },
    {
      'fileEntryId': 150207,
      'imageUrl': 'buddy-cop',
      'bgImageUrl': 'buddy-cop-bg'
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private httpProvider: HttpProvider, private modalCtrl: ModalController,
    private utility:CommonUtilities) {
  }

  ionViewDidLoad() {
    this.getSafetyDetails();
  }

  getSafetyDetails() {
    this.utility.updateLoader(true);
    let url = "mediaDataByAssets";
    let params = {
      "end": "-1",
      "start": "-1",
      "groupId": this.navParams.get('groupId').toString(),
      "folderId": this.navParams.get('folderId').toString()
    }

    this.httpProvider.http.zenwenCommonGETService({ url, params, media: true }).subscribe((res: any) => {
      this.utility.updateLoader(false);
      if (res && res.list) {
        this.safetyDataList = res.list;
        if (this.safetyDataList.length > 0 && this.imageUrlList) {
          this.safetyDataList.map((data) => {
            this.imageUrlList.map((urlData) => {
              if (data.fileEntryId == urlData.fileEntryId) {
                data.imageUrl = urlData.imageUrl;
                data.bgImageUrl = urlData.bgImageUrl;
              }
            })
          })
          // //console.log(this.safetyDataList);
        }
      }
    })
  }

  //Open speak detail modal
  async openSpeakDetailModal(obj) {
    let speakModal = this.modalCtrl.create(ZenwenSpeakDetailsComponent, {
      safetyObj: obj,
      type: 'safety'
    }, {
        cssClass: 'zenwenEventModal',
        // enableBackdropDismiss: true,
        // showBackdrop: true
      });

    speakModal.present();
    speakModal.onDidDismiss(() => { });
  }
}
