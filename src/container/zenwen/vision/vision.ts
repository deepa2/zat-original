import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';
import * as environment from '@app/env';
/**
 * Generated class for the VisionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vision',
  templateUrl: 'vision.html',
})
export class VisionPage {

  private vision: string = 'zenwenChapter';
  private zenwenContent: string = null;
  private subMenu: any;
  private zenwenChapter: Array<any> = [];
  private zenwenVision: any;
  private imgUrl: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public httpProvider: HttpProvider) {
    this.zenwenContent = "The WEN is an empowered Diversity and Inclusion Board run by a cross functional team of women leaders. This team is mentored by Zensar’s Strategy Council on strategic initiatives that involve change management, consensus building and perseverance. One of the key chapter of WEN is to identify and foster women leaders at Zensar by providing the right environment - gender neutral, and allowing women to aspire and to achieve leadership positions. Popular initiatives like the Zensar Daycare, and the Time Off Scheme (TOS) are brain children of the WEN, and given many associates an opportunity to balance dual worlds.";
    this.imgUrl = environment.zenwenImgUrl;
    this.subMenu = this.navParams.get('lstSubMenu');
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad VisionPage');
    if(this.subMenu){
      this.getVisionData(this.subMenu[0].folderId);
      this.getVisionData(this.subMenu[1].folderId);
    }
  }

  getVisionData(folderId) {
    let groupId = this.navParams.get('groupId');
    let url = "mediaDataByAssets";
    let params = {
      "start": "-1",
      "end": "-1",
      "folderId": folderId.toString(),
      "groupId": groupId.toString()
    }

    this.httpProvider.http.zenwenCommonGETService({ url, params, media: true }).subscribe((res: any) => {
      //console.log(res);
      if (res && res.folderName == 'ZENWEN CHAPTER') {
        this.zenwenChapter = [];
        this.zenwenChapter = Array.isArray(res.list) ? res.list : [...this.zenwenChapter, res.list];
      }else if(res && res.folderName == 'ZENWEN VISION'){
        this.zenwenVision = res.list;
      }
    })
  }

}
