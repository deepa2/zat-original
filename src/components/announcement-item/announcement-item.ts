import { Component, Input } from '@angular/core';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import {  NavController, NavParams } from 'ionic-angular';
import * as fromStore from '../../store';
import { Store } from "@ngrx/store";


@Component({
  selector: 'announcement-item',
  templateUrl: 'announcement-item.html'
})
export class AnnouncementItemComponent { 
  @Input() announcement: any;

  text: string;
  formData: FormData;
  ratingUrl: string = 'addRating';

  constructor(private utility: CommonUtilities, private navCtrl: NavController, private navParams: NavParams, private store: Store<fromStore.AppState>) {
  }

  formatDate(obj) {
    return this.utility.formatDate(obj);
  }

  addRating(id, type) {

    if (type == 'comment') {
      this.navCtrl.push('AnnouncementRatingsPage', { 'announcementId': id, 'mode': type });
    } else {

      this.formData = new FormData();
      this.formData.append('mode', type);
      this.formData.append('announcementId', id);

      this.store.dispatch(new fromStore.AddAnnouncementRating(this.ratingUrl, this.formData, type));
    }

  }

  getRating(id, type) {
    this.navCtrl.push('AnnouncementRatingsPage', { 'announcementId': id, 'mode': type });
  }

}
