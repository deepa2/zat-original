import { Action } from "@ngrx/store";

export const SWIPE_MISS = "Swipe Miss";
export const SWIPE_MISS_SUCCESS = "Swipe Miss Success";
export const SWIPE_MISS_ERROR = "Swipe Miss Error";


export class GetSwipeMissAction implements Action {
    readonly type = SWIPE_MISS;
    constructor(public url: string) { }
}

export class GetSwipeMissSuccessAction implements Action {
    readonly type = SWIPE_MISS_SUCCESS;
    constructor(public payload: any) { }
}

export class GetSwipeMissErrorAction implements Action {
    readonly type = SWIPE_MISS_ERROR;
    constructor(public payload: any) { }
}

export type SwipeMissActions =
    | GetSwipeMissAction
    | GetSwipeMissSuccessAction
    | GetSwipeMissErrorAction
