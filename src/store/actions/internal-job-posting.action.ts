import { Action } from "@ngrx/store";

export const INTERNALJOBPOSTING = "Internal Job Posting";
export const INTERNALJOBPOSTING_SUCCESS = "Internal Job Posting Success";
export const INTERNALJOBPOSTING_ERROR = "Internal Job Posting Error";
export const INTERNALJOBPOSTING_RESET = "Internal Job Posting Reset";

export class GetInternalJobPostingAction implements Action {
    readonly type = INTERNALJOBPOSTING;
    constructor(public url: string, public params: any) { }
}
export class GetInternalJobPostingSuccessAction implements Action {
    readonly type = INTERNALJOBPOSTING_SUCCESS;
    constructor(public payload: any) { }
}
export class GetInternalJobPostingErrorAction implements Action {
    readonly type = INTERNALJOBPOSTING_ERROR;
    constructor(public payload: any) { }
}
export class GetInternalJobPostingResetAction implements Action {
    readonly type = INTERNALJOBPOSTING_RESET;
    constructor() { }
}
export type InternalJobPostingAction =
    GetInternalJobPostingAction
    | GetInternalJobPostingSuccessAction
    | GetInternalJobPostingErrorAction
    | GetInternalJobPostingResetAction;