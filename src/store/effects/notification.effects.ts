import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";
import * as NotificationAction from '../actions/notification.action';
import { switchMap } from "rxjs/operators";
import { HttpProvider } from '../../providers/http/http';

@Injectable()
export class NotificationEffects{
    constructor(private actions$:Actions,private httpProvider: HttpProvider){}

    @Effect()
    notification$:Observable<Action> = this.actions$
    .ofType(NotificationAction.NOTIFICATION).pipe(
        switchMap((action:NotificationAction.GetNotificationAction)=>{
            return this.httpProvider.http.commonService({url:action.url,data:action.payload,notification:true})
            .map((response:any)=>{
                return new NotificationAction.GetNotificationSuccessAction(response.details); 
            })
            .catch(error =>Observable.of(new NotificationAction.GetNotificationErrorAction(error)))
        })
    )

    @Effect()
    readallnotification$:Observable<Action> = this.actions$
    .ofType(NotificationAction.READ_ALL).pipe(
        switchMap((action:NotificationAction.ReadAllNotificationAction)=>{
            return this.httpProvider.http.commonService({url:action.url,data:action.payload,notification:true})
            .map(response=>{
                return new NotificationAction.ReadAllSuccessAction(response); 
            })
            .catch(error =>Observable.of(new NotificationAction.ReadAllErrorAction(error)))
        })
    )

    @Effect()
    readNotification$:Observable<Action> = this.actions$
    .ofType(NotificationAction.READ_NOTIFICATION).pipe(
        switchMap((action:NotificationAction.ReadNotificationAction)=>{
            return this.httpProvider.http.commonService({url:action.url,data:action.payload,notification:true})
            .map(response=>{
                return new NotificationAction.ReadNotificationSuccessAction(response); 
            })
            .catch(error =>Observable.of(new NotificationAction.ReadNotificationErrorAction(error)))
        })
    )

    @Effect()
    updateNotification$:Observable<Action> = this.actions$
    .ofType(NotificationAction.UPDATE_NOTIFICATION).pipe(
        switchMap((action:NotificationAction.UpdateNotificationAction)=>{
            return this.httpProvider.http.commonService({url:action.url,data:action.payload,notification:true})
            .map((response:any)=>{
                return new NotificationAction.UpdateNotificationSuccessAction(response.details); 
            })
            .catch(error =>Observable.of(new NotificationAction.UpdateNotificationFailAction(error)))
        })
    )

    @Effect()
    reloadNotification$:Observable<Action> = this.actions$
    .ofType(NotificationAction.RELOAD_NOTIFICATION).pipe(
        switchMap((action:NotificationAction.ReloadNotificationAction)=>{
            return this.httpProvider.http.commonService({url:action.url,data:action.payload,notification:true})
            .map((response:any)=>{
                return new NotificationAction.GetNotificationSuccessAction(response.details); 
            })
            .catch(error =>Observable.of(new NotificationAction.GetNotificationErrorAction(error)))
        })
    )
    
}
