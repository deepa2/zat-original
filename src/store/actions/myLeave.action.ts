import { Action } from '@ngrx/store';

export const MY_LEAVE = "[myLeave] myLeave";
export const MY_LEAVE_SUCCESS = "[myLeave] myLeaveSuccess";
export const MY_LEAVE_ERROR = "[myLeave] myLeaveError";
export const MY_LEAVE_RESET = "[myLeave] myLeaveReset"
export class MyLeaveAction implements Action {
    readonly type = MY_LEAVE
    constructor(public url: string,public param:any) { }
}

export class MyLeaveSuccess implements Action {
    readonly type = MY_LEAVE_SUCCESS
    constructor(public payload:any) { }
}

export class MyLeaveError implements Action {
    readonly type = MY_LEAVE_ERROR
    constructor(public paylaod:any) { }
}

export class MyLeaveReset implements Action {
    readonly type = MY_LEAVE_RESET
    constructor(){}
}

export type MyLeaveActions = MyLeaveAction | MyLeaveSuccess | MyLeaveError | MyLeaveReset;