import { Action } from "@ngrx/store";

export const APPLYJOB = "ApplyJob";
export const APPLYJOB_SUCCESS = "ApplyJob Success";
export const APPLYJOB_ERROR = "ApplyJob Error";

export const SUBMITAPPLYFORM = "SubmitApplyForm";
export const SUBMITAPPLYFORM_SUCCESS = "SubmitApplyForm Success";
export const SUBMITAPPLYFORM_ERROR = "SubmitApplyForm Error";

export const UPLOADRESUME = "UploadResume";
export const UPLOADRESUME_SUCCESS = "UploadResume Success";
export const UPLOADRESUME_ERROR = "UploadResume Error";

export const SUBMITAPPLYFORMRESET = "RESET SubmitApplyFormReset";

export const UPLOADRESUMERESET = "RESET UploadResume";


export class GetApplyJobAction implements Action {
    readonly type = APPLYJOB;
    constructor(public url: string, public params: any) { }
}

export class GetApplyJobActionSuccess implements Action {
    readonly type = APPLYJOB_SUCCESS;
    constructor(public payload: any) { }
}

export class GetApplyJobActionFaliure implements Action {
    readonly type = APPLYJOB_ERROR;
    constructor(public payload: any) { }
}

export class GetSubmitApplyFormAction implements Action {
    readonly type = SUBMITAPPLYFORM;
    constructor(public url: string, public params: any) { }
}

export class GetSubmitApplyFormActionSuccess implements Action {
    readonly type = SUBMITAPPLYFORM_SUCCESS;
    constructor(public payload: any) { }
}

export class GetSubmitApplyFormActionFaliure implements Action {
    readonly type = SUBMITAPPLYFORM_ERROR;
    constructor(public payload: any) { }
}

export class UploadResumeAction implements Action {
    readonly type = UPLOADRESUME;
    constructor(public url: string, public formData: any) { }
}

export class UploadResumeActionSuccess implements Action {
    readonly type = UPLOADRESUME_SUCCESS;
    constructor(public payload: any) { }
}

export class UploadResumeActionError implements Action {
    readonly type = UPLOADRESUME_ERROR;
    constructor(public payload: any) { }
}

export class SubmitApplyFormReset implements Action {
    readonly type = SUBMITAPPLYFORMRESET;
    constructor() { }
}

export class UploadResumeReset implements Action {
    readonly type = UPLOADRESUMERESET;
    constructor() { }
}
export type ApplyJobActions = GetApplyJobAction | GetApplyJobActionSuccess | GetApplyJobActionFaliure | GetSubmitApplyFormAction
    | GetSubmitApplyFormActionSuccess | GetSubmitApplyFormActionFaliure | UploadResumeAction | UploadResumeActionSuccess | UploadResumeActionError
    | SubmitApplyFormReset | UploadResumeReset;
