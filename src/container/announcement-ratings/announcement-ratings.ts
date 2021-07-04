import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import { Observable } from "rxjs";
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'announcement-ratings',
  templateUrl: 'announcement-ratings.html',
})


export class AnnouncementRatingsPage implements OnInit, OnDestroy {
  url: string = 'getRatings';
  ratingUrl: string = 'addRating';
  comments$: Observable<any>;
  loading$: Observable<any>;
  itemsLength: number;
  formData: FormData;
  start: number = 0;
  end: number = 10;
  infiniteScroll: any = '';
  refresher: any = '';
  announcementId: any;
  comment: any = '';
  mode: any;
  brag: boolean = false;
  payload: any = {
    "announcementId": this.announcementId,
    "start": this.start,
    "end": this.end,
    "mode": this.mode
  }

  private _listListener: Subscription = new Subscription();
  private _ratingListener: Subscription = new Subscription();

  constructor(private navCtrl: NavController, private navParams: NavParams, private store: Store<fromStore.AppState>) {
  }

  ngOnInit() {
    this.announcementId = this.navParams.get('announcementId');
    this.mode = this.navParams.get('mode');

    this.payload = {
      "announcementId": this.announcementId,
      "start": this.start,
      "end": this.end,
      "mode": this.mode
    }

    this.loading$ = this.store.select<any>(fromStore.getCommentsLoading);
    this.store.dispatch(new fromStore.GetCommentsReset());
    this.store.dispatch(new fromStore.GetComments(this.url, this.payload));
    this.getComments();
    this.getRatingState();
  }

  getComments() {

    this._listListener = this.store.select<any>(fromStore.getCommentsState).subscribe((res) => {

      if (res.data) {
        this.comments$ = res.data;
        this.itemsLength = res.data.length;
      }

      if (!res.pending && this.infiniteScroll) {
        this.infiniteScroll.complete();
      }

      if (!res.pending && this.refresher) {
        this.refresher.complete();
      }
    })
  }

  getRatingState() {

    this._ratingListener = this.store.select<any>(fromStore.getAccouncementState).subscribe((res) => {
      if (res) {

        if (res.ratingData && !res.pending) {

          //rating added

          this.comment = '';

          this.start = 0;
          this.end = 10;

          this.payload = {
            "announcementId": this.announcementId,
            "start": this.start,
            "end": this.end,
            "mode": this.mode
          }

          this.store.dispatch(new fromStore.GetCommentsReset());

          this.store.dispatch(new fromStore.GetComments(this.url, this.payload));
        }
      }

    })
  }

  formatDate(obj) {
    return obj.toString().replace(/\s/g, "T");
  }

  doInfinite(infiniteScroll) {

    this.infiniteScroll = infiniteScroll;

    this.start = this.end;
    this.end = this.start + 10;

    this.payload = {
      "announcementId": this.announcementId,
      "start": this.start,
      "end": this.end,
      "mode": this.mode
    }

    this.store.dispatch(new fromStore.GetComments(this.url, this.payload));

  }

  doRefresh(refresher) {

    this.refresher = refresher;

    this.start = 0;
    this.end = 10;

    this.payload = {
      "announcementId": this.announcementId,
      "start": this.start,
      "end": this.end,
      "mode": this.mode
    }

    this.store.dispatch(new fromStore.GetCommentsReset());

    this.store.dispatch(new fromStore.GetComments(this.url, this.payload));

  }
  postComment() {
    if (this.comment != "") {
      let type = 'comment';
      this.formData = new FormData();
      this.formData.append('mode', type);
      this.formData.append('commentText', this.comment);
      this.formData.append('announcementId', this.announcementId);

      this.store.dispatch(new fromStore.AddAnnouncementRating(this.ratingUrl, this.formData, type));
    }


  }

  ngOnDestroy() {
    this._listListener.unsubscribe();
    this._ratingListener.unsubscribe();
  }

}

