import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';
import * as env from '@app/env';
import { ZenwenSpeakDetailsComponent } from '../../../components/zenwen-speak-details/zenwen-speak-details';
import * as moment from 'moment';
import { AddCommentModalComponent } from '../../../components/add-comment-modal/add-comment-modal';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
/**
 * Generated class for the WowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wow',
  templateUrl: 'wow.html',
})
export class WowPage {

  private worldOfWomen: string = "wallOfFame";
  private speaksData: Array<any> = [];
  private wallOfFameData: Array<any> = [];
  private imgUrl: string;
  private tabname: string;
  private speakData: any;
  private wallOfFameParams: any = null;
  private zenwenSpeakParams: any = null;
  private startList: number = 0;
  private endList: number = 10;
  private infiniteScroll: any = '';
  private infiniteListData: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private httpProvider: HttpProvider, private modalCtrl: ModalController,
    private utility: CommonUtilities) {
    this.imgUrl = env.zenwenImgUrl;
    this.wallOfFameParams = this.navParams.get('wallOfFameParams');
    this.zenwenSpeakParams = this.navParams.get('zenwenSpeakParams');
    this.tabname = this.navParams.get('tabname');
    this.speakData = this.navParams.get('speakdata');
    if(this.tabname == 'wallOfFame'){
      this.worldOfWomen= "wallOfFame"
     
    }else if(this.tabname == 'zenwenSpeak'){
      this.worldOfWomen= "zenwenSpeak";
      this.openSpeakDetailModal(this.speakData.worldOfWomen) 
    }
  }

  ionViewDidLoad() {
    this.getZenWENSpeakData();
    this.getWallOfFameData(this.startList, this.endList);
  }

  getZenWENSpeakData() {
    this.utility.updateLoader(true);
    if (this.zenwenSpeakParams) {
      let url = "mediaDataWorldOfWomen";
      let params = {
        "groupId": this.zenwenSpeakParams.groupId.toString(),
        "folderId": this.zenwenSpeakParams.folderId.toString(),
        "type": "1",
        "start": "-1",
        "end": "-1"     //fetch full list
      }
      this.httpProvider.http.zenwenCommonGETService({ url, params, media: true }).subscribe((res: any) => {
        this.utility.updateLoader(false);
        if (res && res.list) {
          this.speaksData = Array.isArray(res.list) ? res.list : [...this.speaksData, res.list];
        }
      })
    }
  }

  //Open speak detail modal
  async openSpeakDetailModal(obj) {
    let speakModal = this.modalCtrl.create(ZenwenSpeakDetailsComponent, {
      speakObj: obj,
      type: 'speak'
    }, {
        cssClass: 'zenwenEventModal',
        // enableBackdropDismiss: true,
        // showBackdrop: true
      });

    speakModal.present();
    speakModal.onDidDismiss(() => { });
  }

  getWallOfFameData(startValue, endValue) {
    
    if (this.wallOfFameParams) {
      if(this.infiniteListData.length == 0){
        this.utility.updateLoader(true)
      }
      let url = "mediaDataWorldOfWomen";
      let params = {
        "groupId": this.wallOfFameParams.groupId.toString(),
        "folderId": this.wallOfFameParams.folderId.toString(),
        "type": "2",
        "start": startValue.toString(),
        "end":endValue.toString()    //fetch full list
      }
      this.httpProvider.http.zenwenCommonGETService({ url, params, media: true }).subscribe((res: any) => {
        if (res && res.list) {
          this.infiniteListData =  Array.isArray(res.list) ? res.list : [...this.wallOfFameData, res.list];
          
          this.wallOfFameData =this.wallOfFameData.concat(this.infiniteListData);
          this.utility.updateLoader(false);
        }
        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          this.infiniteScroll = "";
        }
        else {
          this.utility.updateLoader(false)
        }
      })
    }
  }
//***********function for infinite scroll****************************** 
loadData(infiniteScroll) {
  this.infiniteScroll = infiniteScroll;
  this.startList = this.endList;
  this.endList += 10;
  this.getWallOfFameData(this.startList, this.endList);
  
}
  performActionOnPost(wofObj, type) {
    let params = {
      classPK: wofObj.fileEntryId.toString(),
      className: '2', //for like and dislike
      action: type == 'like' ? '1' : '2',  //for like action is 1, dislike action is 2
    };
    // let formData = new FormData();
    // formData.append("classPK", wofObj.fileEntryId.toString());
    // formData.append("className", "2");
    // formData.append("action", type == 'like' ? '1' : '2')

    // let data = formData;

    let url = "likeResource";
    this.httpProvider.http.zenwenCommonPostService({ url, params, zenCollaboration: true }).subscribe((res: any) => {

      if (res && res.model && res.model.success) {
        this.wallOfFameData.map((obj) => {
          if (wofObj.fileEntryId == obj.fileEntryId) {
            type == 'like' ? obj.likeCount = res.model.count : obj.disLikeCount = res.model.count;
            if (wofObj.hasliked == 0) {
              type == 'like' ? obj.hasliked = 1 : obj.hasliked = -1;
            } else if (wofObj.hasliked == -1) {
              type == 'like' ? obj.hasliked = 1 : obj.hasliked = 0;
              obj.disLikeCount > 0 ? obj.disLikeCount-- : obj.disLikeCount;
            }
            else if (wofObj.hasliked == 1) {
              type == 'like' ? obj.hasliked = 0 : obj.hasliked = -1;
              obj.likeCount > 0 ? obj.likeCount-- : obj.likeCount;
            }
          }
        })
      }
    })
  }

  dateConversion(input) {
    let date = moment(input).format('D MMM YYYY h:mma');
    return date;
  }

  //Open event detail modal
  async openAddCommentModal(type, wofObj: any) {
    let eventModal = this.modalCtrl.create(AddCommentModalComponent, { type, wofObj }, {
      cssClass: 'zenwenEventModal zenwenEventcomment'
    });

    eventModal.present();
    eventModal.onDidDismiss((res: any) => {
      if (res) {
        if (type == 'post') {
          this.wallOfFameData.unshift(res);
        } else if (type == 'comment') {
          this.wallOfFameData.map((obj) => {
            if (obj.fileEntryId == wofObj.fileEntryId) {
              obj.commentCount = wofObj.commentCount + 1;
              if (obj.commnetList && !Array.isArray(obj.commnetList) && typeof (obj.commnetList) == 'object') {
                let tempArray = [obj.commnetList];
                tempArray.unshift(res);
                obj.commnetList = tempArray;
              } else if (obj.commnetList && Array.isArray(obj.commnetList)) {
                obj.commnetList.unshift(res);
              } else if (!obj.commnetList) {
                obj.commnetList = res;
              }
            }
          })

        }
      }
    });
  }

  isArray(value) {
    return Array.isArray(value);
  }

}
