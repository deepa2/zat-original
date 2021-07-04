import { Action } from "@ngrx/store";
import { notificationListParams, readAllNotificationParams, readNotificationParams } from '../../models/notification.model';

export const NOTIFICATION = "Notification";
export const NOTIFICATION_SUCCESS = "Notification Success";
export const NOTIFICATION_ERROR = "Notification Error";

export const READ_ALL = "Read All Notification";
export const READ_ALL_SUCCESS = "Read All Notification Success";
export const READ_ALL_ERROR = "Read All Notification Error";

export const READ_NOTIFICATION = "Read Notification";
export const READ_NOTIFICATION_SUCCESS = "Read Notification Success";
export const READ_NOTIFICATION_ERROR = "Read Notification Error";

export const UPDATE_NOTIFICATION = "Update Notification";
export const UPDATE_NOTIFICATION_SUCCESS = "Update Notification Success";
export const UPDATE_NOTIFICATION_FAIL = "Update Notification Fail";

export const RELOAD_NOTIFICATION = "Reload Notification";
export const RELOAD_NOTIFICATION_SUCCESS = "Reload Notification Success";
export const RELOAD_NOTIFICATION_FAIL = "Reload Notification Fail";

export class GetNotificationAction implements Action {
    readonly type = NOTIFICATION;
    constructor(public url: string, public payload: notificationListParams) { }
}

export class GetNotificationSuccessAction implements Action {
    readonly type = NOTIFICATION_SUCCESS;
    constructor(public payload: any) { }
}

export class GetNotificationErrorAction implements Action {
    readonly type = NOTIFICATION_ERROR;
    constructor(public payload: any) { }
}

export class ReadAllNotificationAction implements Action {
    readonly type = READ_ALL;
    constructor(public url: string, public payload:any){}
}
export class ReadAllSuccessAction implements Action {
    readonly type = READ_ALL_SUCCESS;
    constructor(public payload: any) { }
}

export class ReadAllErrorAction implements Action {
    readonly type = READ_ALL_ERROR;
    constructor(public payload: any) { }
}

export class ReadNotificationAction implements Action {
    readonly type = READ_NOTIFICATION;
    constructor(public url: string, public payload: readNotificationParams) { }
}
export class ReadNotificationSuccessAction implements Action {
    readonly type = READ_NOTIFICATION_SUCCESS;
    constructor(public payload: any) { }
}

export class ReadNotificationErrorAction implements Action {
    readonly type = READ_NOTIFICATION_ERROR;
    constructor(public payload: any) { }
}

export class UpdateNotificationAction implements Action {
    readonly type = UPDATE_NOTIFICATION;
    constructor(public url: string, public payload: notificationListParams) { }
  }
  
  export class UpdateNotificationSuccessAction implements Action {
    readonly type = UPDATE_NOTIFICATION_SUCCESS;
    constructor(public payload: any) { }
  }
  
  export class UpdateNotificationFailAction implements Action {
    readonly type = UPDATE_NOTIFICATION_FAIL;
    constructor(public payload: any) { }
  }
  
  export class ReloadNotificationAction implements Action {
    readonly type = RELOAD_NOTIFICATION;
    constructor(public url: string, public payload: notificationListParams) { }
  }


export type NotificationAction =
    | GetNotificationAction
    | GetNotificationSuccessAction
    | GetNotificationErrorAction
    | ReadAllNotificationAction
    | ReadAllSuccessAction
    | ReadAllErrorAction
    | ReadNotificationAction
    | ReadNotificationSuccessAction
    | ReadNotificationErrorAction
    | UpdateNotificationAction
    | UpdateNotificationSuccessAction
    | UpdateNotificationFailAction
    | ReloadNotificationAction;

