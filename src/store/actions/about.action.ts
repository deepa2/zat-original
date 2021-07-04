import { Action } from "@ngrx/store";

export const ABOUT = "About";
export const ABOUT_SUCCESS = "About Success";
export const ABOUT_ERROR = "About Error";

export class GetAboutAction implements Action {
    readonly type = ABOUT;
    constructor(public url: string, public params: any) { }
}

export class GetAboutSuccessAction implements Action {
    readonly type = ABOUT_SUCCESS;
    constructor(public payload: any) { }
}

export class GetAboutErrorAction implements Action {
    readonly type = ABOUT_ERROR;
    constructor(public payload: any) { }
}

export type AboutActions =
    | GetAboutAction
    | GetAboutSuccessAction
    | GetAboutErrorAction;

