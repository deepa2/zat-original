import { Action } from '@ngrx/store';
export const ADD = "Add";
export const ADD_MULTIMEDIA = "Add Multimedia";
export const ADD_SUCCESS = "Add Success";
export const ADD_ERROR = "Add Error";
export const ADD_RESET_DATA = "Reset Add Data";

export class AddAction implements Action {
    readonly type = ADD;
    constructor(public url: string, public payload: any) { }
}

export class AddMultimediaAction implements Action {
    readonly type = ADD_MULTIMEDIA;
    constructor(public url: string, public formData: any, public addType?: any) { }
}

export class AddSuccessAction implements Action {
    readonly type = ADD_SUCCESS;
    constructor(public payload: any) { }
}

export class AddErrorAction implements Action {
    readonly type = ADD_ERROR;
    constructor(public payload: any) { }
}

export class AddResetAction implements Action {
    readonly type = ADD_RESET_DATA;
    constructor() { }
}

export type AddActions =
    | AddAction
    | AddMultimediaAction
    | AddSuccessAction
    | AddErrorAction
    | AddResetAction;