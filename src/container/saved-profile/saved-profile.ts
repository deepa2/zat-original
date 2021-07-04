import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,PopoverController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import * as fromStore from "@app/store";
import { Store } from '@ngrx/store';
import { File } from '@ionic-native/file';
import { Subscription } from 'rxjs';
import { Attachment } from '../../providers/attachment/attachment';

@IonicPage()
@Component({
  selector: 'page-saved-profile',
  templateUrl: 'saved-profile.html',
})

export class SavedProfilePage {
  private mainData:{}={}
 
  @ViewChild('createReferral') form;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private httpProvider: HttpProvider, private modalCtrl: ModalController, private popoverctr : PopoverController,
    private store: Store<fromStore.AppState>, private attachment: Attachment, private file: File, private utility: CommonUtilities) {
      // this.referralInfo = this.navParams.get('ReferralInfo');
      // this.candidateProfileId = this.navParams.get('candidateProfileId');
      
  }
  getZenrichData(){
    this.utility.updateLoader(true);
    const url: string = "requestData";
    const data: any = {
      "searchKey" : "",
      "start" : 0,
      "type" :"SAVED_PROFILES",
      "end" : 10
    };
    this.utility.updateLoader(true);
    this.httpProvider.http
      .commonService({ url, data, zenRich: true })
      .subscribe(
        (res: any) => {
          console.log(res)
          this.mainData = res.details;
          this.utility.updateLoader(false);
    })
  }
}
