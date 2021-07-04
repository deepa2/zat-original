import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, PopoverController } from 'ionic-angular';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import { Observable } from "rxjs";
import { Subscription } from 'rxjs/Subscription';
import { Data } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-announcement',
  templateUrl: 'announcement.html',
})
export class AnnouncementPage implements OnInit, OnDestroy {

  private url: string = 'getAllAnnouncements';

  private announcements$: Observable<any>;
  private loading$: Observable<any>;
  private start: number = 0;
  private end: number = 10;
  private itemsLength: number;
  private infiniteScroll: any = '';
  private refresher: any = '';
  private formData: FormData;
  private showOptions: boolean = false;
  private addAnnouncementRole: any;
  private pageTitle: string;
  private pageType: string;
  private notificationCount: number;
  private payload: any = {
    "start": this.start,
    "end": this.end
  };
  @ViewChild(Navbar) navBar: Navbar;

  private _roleListener: Subscription = new Subscription();
  private _listListener: Subscription = new Subscription();
  private _notificationListener: Subscription = new Subscription();

  constructor(private navCtrl: NavController, private navParams: NavParams, private store: Store<fromStore.AppState>, private utility: CommonUtilities, private popoverCtrl: PopoverController,
    private dataService: Data) {

      // get page title from home page
    this.pageTitle = this.navParams.get('pageTitle');
    if (this.pageTitle == undefined || this.pageTitle == null) {
      this.pageTitle = 'Announcements';
    }

  }

  ngOnInit() {

  }

  // get all the announcements list
  getAccouncements() {

    this._listListener = this.store.select<any>(fromStore.getAccouncementState).subscribe((res) => {
      if (res) {
        if (res.data) {
          this.announcements$ = res.data;
          this.pageType = res.data.type;
          this.itemsLength = res.data.length;
        }
      }

      if (!res.pending && this.infiniteScroll) {
        this.infiniteScroll.complete();
      }

      if (!res.pending && this.refresher) {
        this.refresher.complete();
      }

    })

  }

  //infinite scroll to get next 10 announcements

  doInfinite(infiniteScroll) {

    this.infiniteScroll = infiniteScroll;

    this.start = this.end;
    this.end = this.start + 10;

    this.payload = {
      "start": this.start,
      "end": this.end
    };

    this.store.dispatch(new fromStore.GetAnnouncements(this.url, this.payload));

  }

  // pull to refresh for new announcements
  doRefresh(refresher) {

    this.refresher = refresher;

    this.start = 0;
    this.end = 10;

    this.payload = {
      "start": this.start,
      "end": this.end
    };

    this.store.dispatch(new fromStore.GetAnnouncementsReset());

    this.store.dispatch(new fromStore.GetAnnouncements(this.url, this.payload));

  }


  //change date format to mmddyy
  formatDate(obj) {
    return this.utility.formatDate(obj);
  }

  // to add any announcement 
  add() {
    this.navCtrl.push('AddPage', { 'type': 'addAnnouncement', 'questionId': null, 'answerType': null });
  }


  goToPage(page) {
    if (page == 'SearchPage') {
      this.navCtrl.push(page, { 'searchType': 'announcement' });
    } else if (page == 'NotificationPage') {
      this.navCtrl.push(page, { 'notificationType': 'BROADCAST' });
    } else {
      this.navCtrl.push(page);
    }

  }

  //check for admin role
  getRole() {
    this.store.select<any>(fromStore.getMiscData).subscribe((res) => {
      if (res) {
        this.addAnnouncementRole = res.role.isAdmin;
      }

    });

  }
  // show popover menu
  presentOptions(myEvent) {

    let popover = this
      .popoverCtrl
      .create('PopoverPage', { 'type': 'addAnnouncement' });

    popover.present({ ev: myEvent });

  }

  //on page load, this function reloads the notification count & check for new announcements 
  ionViewWillEnter() {
    this.getNotificationCount();

    this.formData = new FormData();

    this.loading$ = this.store.select<any>(fromStore.getAccouncementLoading);

    this.payload = {
      "start": this.start,
      "end": this.end
    };

    this.store.dispatch(new fromStore.GetAnnouncementsReset());

    this.store.dispatch(new fromStore.GetAnnouncements(this.url, this.payload));

    this.getAccouncements();

    this.getRole();
    // this.setBackButtonAction();

  }

  //get notification  count from store
  getNotificationCount() {
    this._notificationListener = this.store.select<any>(fromStore.getNotificationCount).subscribe((res) => {
      this.notificationCount = res;
    });

  }

  // on leaving the page, all the observables has to be unsubscribed
  ngOnDestroy() {
    this._listListener.unsubscribe();
    this._roleListener.unsubscribe();
    this._notificationListener.unsubscribe();

  }

}
