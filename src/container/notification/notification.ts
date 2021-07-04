import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Loading } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import { Observable } from "rxjs";
import { Subscription } from 'rxjs/Subscription';
import { searchService } from '../../providers/services/searchService/searchService';
import { Data } from '../../providers/data/data';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  private notificationList$: Observable<any>;
  private loading$: Observable<any>;
  private end: number = 10;
  private start: number = 0;
  private itemsLength: number = 0;
  private type: string = 'notification';
  private totalResultCount: number = 0;
  private notificationCount: number;
  private clearAll: FormGroup;
  private role: any;
  private notificationType: any;
  private selectedRole: any;
  private filterArray: Array<any> = [];
  private pageTitle: string;


  private _notificationListener: Subscription = new Subscription();
  private _readAllnotificationListener: Subscription = new Subscription();
  private _roleListener: Subscription = new Subscription();

  constructor(private navCtrl: NavController, private navParams: NavParams, private alertCtrl: AlertController, private dataService: Data,
    private store: Store<fromStore.AppState>, private loadingController: LoadingController, private searchService: searchService, private utils: CommonUtilities) {
  }

  ionViewDidLoad() {

    this.notificationType = this.navParams.get('notificationType');

    this._roleListener = this.store.select<any>(fromStore.getRole).subscribe((role) => {
      this.role = role;
    });

    this.getNotificationData('get');
    this.loading$ = this.store.select<any>(fromStore.getNotificationLoading);

    this.getNotificationCount();
  }

  getNotificationData(type: string) {
    let params = {
      'end': this.end,
      'start': this.start,
      'role': this.role,
      'type': this.notificationType
    }
    let url = "getAllNotification";

    if (type == "get") {
      this.store.dispatch(new fromStore.GetNotificationAction(url, params));
    } else if (type == 'update') {
      this.store.dispatch(new fromStore.UpdateNotificationAction(url, params));
    }
    else if (type == 'refresh') {
      this.store.dispatch(new fromStore.ReloadNotificationAction(url, params));
    }

    return new Promise(resolve => {
      this._notificationListener = this.store.select<any>(fromStore.getNotificationState).subscribe(response => {
        if (response.pending == false && response.loadMore == false && response.pullToRefresh == false) {
          if (response.data != undefined && response.data != null) {
            this.notificationList$ = response.data;
            this.totalResultCount = response.totalResults;
            this.itemsLength = response.data.length;
          }

          resolve();
        }
      }, err => {
      })
    })
  }


  readAll() {



    this.store.dispatch(new fromStore.ClearAllCountAction);

    this.notificationList$.map(item => {
      if (!item.isRead) {
        item.isRead = true;
      }
    })

    /* let url = "readAllNotification";

    this.store.dispatch(new fromStore.ReadAllNotificationAction(url)); */

    let url = "readAllNotification";

    this.store.select<any>(fromStore.getCurrentModule).subscribe(response => {
      if (response) {
        let moduleName = {
          "type": response
        }
        this.store.dispatch(new fromStore.ReadAllNotificationAction(url, moduleName));
      }

    })

    return new Promise(resolve => {

      this._readAllnotificationListener = this.store.select<any>(fromStore.getNotificationState).subscribe(response => {
        if (response) {
          this.notificationList$.map(item => {
            if (!item.isRead) {

              item.isRead = true;
            }
          })

          resolve();
        }

      }, err => {
      })

    })

  }

  doRefresh(refresher: any) {

    this.start = 0;

    this.getNotificationData('refresh').then(() => {
      refresher.complete();
    });

  }

  doInfinite(infiniteScroll) {

    if (this.totalResultCount) {
      this.start = this.itemsLength;
      this.getNotificationData('update').then(() => {
        infiniteScroll.complete();
      });
    } else {
      infiniteScroll.complete();
    }


  }

  getNotificationCount() {
    /* this._notificationListener = this.store.select<any>(fromStore.getMiscData).subscribe((res) => {
      this.notificationCount = res.myUnreadNotificationCount;
    }); */
    this._notificationListener = this.store.select<any>(fromStore.getNotificationCount).subscribe((res) => {
      this.notificationCount = res;
    });

  }

  ionViewWillLeave() {
    this._notificationListener.unsubscribe();
    this._readAllnotificationListener.unsubscribe();
    this._roleListener.unsubscribe();
  }

  gotToListDetail(detailInfo, type) {

    if (detailInfo.conversationTypeName != "BROADCAST") {

      let id = detailInfo.questionId || detailInfo.entityId || detailInfo.conversationId || detailInfo.role;


      if (this.role == detailInfo.role) {
        this.readNotificationOnTap(detailInfo);
        this.navCtrl.push('DetailPage', {
          'id': id
        });

      }
      else {
        //detailInfo.isRead=false;
        let alert = this.alertCtrl.create({
          message: 'Do you want to change role to ' + detailInfo.role + ' ?  ',
          enableBackdropDismiss: false,
          buttons: [
            {
              text: 'No',
              role: 'no',
              handler: () => {
                // this.navCtrl.pop();


              }
            },
            {
              text: 'Yes',
              handler: () => {

                //Setting role to admin start

                this.dataService.saveData('role', detailInfo.role);
                this.setRole(detailInfo.role)

                //read notification
                this.readNotificationOnTap(detailInfo);

                //Setting role to admin end                
                this.navCtrl.push('DetailPage', {
                  'id': id
                });
              }
            }
          ],
        });
        alert.present();
      }

    }

    else {
      // this.pageTitle ="Announcement";    
      this.readNotificationOnTap(detailInfo);
      this.utils.goToPageDetail('AnnouncementPage', '','');

    }

  }

  setRole(role) {

    this.store.dispatch(new fromStore.SetRole(role));
  }

  readNotificationOnTap(item: any) {

    if (!item.isRead) {

      this.store.dispatch(new fromStore.ReduceNotificationCountAction);

      let param = {
        'notificationId': item.notificationId
      }
      let url = "readNotification";

      this.store.dispatch(new fromStore.ReadNotificationAction(url, param));

      this.store.select<any>(fromStore.getNotificationState).subscribe(response => {
        if (response || response.status.statusCode == 1) {
          item.isRead = true; //read the notification
        }
      }, err => {
      })
    }
  }

  // readAnnNotificationCount(){

  // }
}


