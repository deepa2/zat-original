import { Action } from '@ngrx/store';

export const GET_DASHBOARD_DATA = "Dashboard";
export const GET_DASHBOARD_SUCCESS = "Dashboard Success";
export const GET_DASHBOARD_ERROR = "Dashboard Error";

export const GET_USER_DASHBOARD_DATA = "User Dashboard";
export const GET_USER_DASHBOARD_SUCCESS = "User Dashboard Success";
export const GET_USER_DASHBOARD_ERROR = "User Dashboard Error";


export class GetDashboardDataAction implements Action {
    readonly type = GET_DASHBOARD_DATA;
    constructor(public url: string) { }
}

export class GetDashboardSuccessAction implements Action {
    readonly type = GET_DASHBOARD_SUCCESS;
    constructor(public payload: any) { }
}

export class GetDashboardErrorAction implements Action {
    readonly type = GET_DASHBOARD_ERROR;
    constructor(public payload: any) { }
}

export class GetUserDashboardDataAction implements Action {
    readonly type = GET_USER_DASHBOARD_DATA
    constructor(public url: string) { }
}

export class GetUserDashboardSuccessAction implements Action {
    readonly type = GET_USER_DASHBOARD_SUCCESS;
    constructor(public payload: any) { }
}

export class GetUserDashboardErrorAction implements Action {
    readonly type = GET_USER_DASHBOARD_ERROR;
    constructor(public payload: any) { }
}

export type DashboardAction =
    |GetDashboardDataAction
    | GetDashboardSuccessAction
    | GetDashboardErrorAction
    | GetUserDashboardDataAction
    | GetUserDashboardSuccessAction
    | GetUserDashboardErrorAction;