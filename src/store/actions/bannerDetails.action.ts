import { Action } from "@ngrx/store";

export const BANNER_DETAILS = "bannerDetails";
export const BANNER_DETAILS_SUCCESS = "bannerDetailsSuccess";
export const BANNER_DETAILS_ERROR = "bannerDetailsError";

export class getBannerDetailsAction implements Action {
    readonly type = BANNER_DETAILS
    constructor(public url: string,public payload:any) {
    }
}

export class getBannerDetailsSuccessAction implements Action {
    readonly type = BANNER_DETAILS_SUCCESS
    constructor(public payload: any) { }
}

export class getBannerDetailsErrorAction implements Action {
    readonly type = BANNER_DETAILS_ERROR
    constructor() { }

}

export type BannerDetailsActions = getBannerDetailsAction | getBannerDetailsSuccessAction | getBannerDetailsErrorAction;
