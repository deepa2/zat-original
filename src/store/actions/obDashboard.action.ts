import { Action } from '@ngrx/store'

export const OBDASHBOARD = "ObDashboard";
export const OBDASHBOARD_SUCCESS = "ObDashboard success";
export const OBDASHBOARD_FAILURE = "ObDashboard failure"

export class obDashboardAction implements Action {
    readonly type = OBDASHBOARD;
    constructor( public url:string, public param:string ){}
}

export class obDashboard_Success_Action implements Action {
    readonly type = OBDASHBOARD_SUCCESS;
    constructor (public payload:any){}
}

export class obDashboard_Failure_Action implements Action {
    readonly type = OBDASHBOARD_FAILURE;
    constructor (public payload:any){}
}

export type obDashboardActions = obDashboardAction | obDashboard_Success_Action | obDashboard_Failure_Action