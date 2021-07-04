import { Action } from "@ngrx/store";

export const FAQ = "FAQ";
export const FAQ_SUCCESS = "FAQ Success";
export const FAQ_ERROR = "FAQ Error";

export const FAQ_DETAILS = "FAQ details";
export const FAQ_DETAILS_SUCCESS = "FAQ details Success";
export const FAQ_DETAILS_ERROR = "FAQ details Error";

export class GetFaqAction implements Action {
    readonly type = FAQ;
    constructor(public url: string) { }
}

export class GetFaqSuccessAction implements Action {
    readonly type = FAQ_SUCCESS; 
    constructor(public payload: any) { }
}

export class GetFaqErrorAction implements Action {
    readonly type = FAQ_ERROR;
    constructor(public payload: any) { }
}

export class GetFaqDetailsAction implements Action {
    readonly type = FAQ_DETAILS;
    constructor(public url: string, public payload:any) { }
}

export class GetFaqDetailsSuccessAction implements Action {
    readonly type = FAQ_DETAILS_SUCCESS; 
    constructor(public payload: any) { }
}

export class GetFaqDetailsErrorAction implements Action {
    readonly type = FAQ_DETAILS_ERROR;
    constructor(public payload: any) { }
}

export type FaqAction =
    | GetFaqAction
    | GetFaqSuccessAction
    | GetFaqErrorAction
    | GetFaqDetailsAction
    | GetFaqDetailsSuccessAction
    | GetFaqDetailsErrorAction;

