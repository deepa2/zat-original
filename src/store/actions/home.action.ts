import { Action } from "@ngrx/store";

export const MISC_DATA = "MISC DATA";
export const MISC_SUCCESS = "MISC Success";
export const MISC_ERROR = "MISC Error";
export const REDUCE_NOTIFICATION_COUNT = "Reduce Notification Count";
export const CLEAR_ALL_COUNT = "Clear All Count";
export const SET_CURRENT_MODULE = "Set current Module";
export const RESET_HOME_DATA = "Reset Home Data"


export class GetMiscDataAction implements Action {
    readonly type = MISC_DATA;
    constructor(public url: string,public params: any) { }
}

export class GetMiscSuccessAction implements Action {
    readonly type = MISC_SUCCESS;
    constructor(public payload: any) { }
}

export class GetMiscErrorAction implements Action {
    readonly type = MISC_ERROR;
    constructor(public payload: any) { }
}

export class ReduceNotificationCountAction implements Action {
    readonly type = REDUCE_NOTIFICATION_COUNT;
    constructor() { }
}

export class ClearAllCountAction implements Action {
    readonly type = CLEAR_ALL_COUNT;
    constructor() { }
}

export class SetCurrentModule implements Action {
    readonly type = SET_CURRENT_MODULE;
    constructor(public payload: string) { }
}

export class ResetHomeData implements Action {
    readonly type = RESET_HOME_DATA;
    constructor() { }
}


export type HomeAction =
    | GetMiscDataAction
    | GetMiscSuccessAction
    | GetMiscErrorAction
    | ReduceNotificationCountAction
    | ClearAllCountAction
    | SetCurrentModule
    | ResetHomeData;
