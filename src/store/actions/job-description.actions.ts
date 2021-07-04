import { Action } from "@ngrx/store";

export const JOB_DESCRIPTION = "Job Description";
export const JOB_DESCRIPTION_SUCCESS = "Job Description Success";
export const JOB_DESCRIPTION_ERROR = "Job Description Error";

export class GetJobDescriptionAction implements Action {
    readonly type = JOB_DESCRIPTION;
    constructor(public url: string, public params: any) { }
}

export class GetJobDescriptionSuccessAction implements Action {
    readonly type = JOB_DESCRIPTION_SUCCESS;
    constructor(public payload: any) { }
}

export class GetJobDescriptionErrorAction implements Action {
    readonly type = JOB_DESCRIPTION_ERROR;
    constructor(public payload: any) { }
}

export type JobDescriptionAction =
    GetJobDescriptionAction
    | GetJobDescriptionSuccessAction
    | GetJobDescriptionErrorAction;