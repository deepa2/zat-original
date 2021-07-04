import { Component, Input } from '@angular/core';
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import { Subscription } from 'rxjs/Subscription';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';

@Component({
  selector: 'notification-item',
  templateUrl: 'notification-item.html',
})
export class NotificationItem {
  notificationType: string = 'conversation';
  @Input() item: string;
  formData: FormData;

  private _readNotificationListener: Subscription = new Subscription();

  constructor(private store: Store<fromStore.AppState>, private utility: CommonUtilities) {
  }

  // read(item: any) {
  //   ;

  //   this.store.dispatch(new fromStore.ReduceNotificationCountAction);

  //   if (!item.isRead) {
  //     let param = {
  //       'notificationId': item.notificationId
  //     }
  //     let url = "readNotification";

  //     this.store.dispatch(new fromStore.ReadNotificationAction(url, param));   

  //     this._readNotificationListener = this.store.select<any>(fromStore.getNotificationState).subscribe(response => {
  //       ;
  //       if (response || response.status.statusCode == 1) {
  //         item.isRead = true; //read the notification
  //       }
  //     }, err => {
  //       ;    
  //     })
  //   }

  // }

  formatDate(obj) {
    return this.utility.formatDate(obj);
  }

  ionViewWillLeave() {
    this._readNotificationListener.unsubscribe();
  }

}
