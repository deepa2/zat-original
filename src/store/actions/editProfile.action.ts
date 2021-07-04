import { Action } from "@ngrx/store";

export const SUBMIT_EXPERIENCE = "[Edit Profile] Submit Experience";

export const SUBMIT_EXPERIENCE_SUCCESS = "[Edit Profile] Submit Experience Success";

export const SUBMIT_EXPERIENCE_FAILURE = "[Edit Profile] Submit Experience Failure";

export const RESET_SUBMIT_DATA = "[Edit Profile] Reset Submit Experience Data"

export class SubmitExperienceAction implements Action {
    readonly type = SUBMIT_EXPERIENCE;
    constructor(public url: string) { }
}

export class SubmitExperienceSuccess implements Action {
    readonly type = SUBMIT_EXPERIENCE_SUCCESS;
    constructor(public playLoad: any) { }
}

export class SubmitExperienceFailure implements Action {
    readonly type = SUBMIT_EXPERIENCE_FAILURE;
    constructor(public playLoad: any) { }
}

export class SubmitResetData implements Action {
    readonly type = RESET_SUBMIT_DATA;
    constructor() { }
}


export type GetSubmitExperienceActions = SubmitExperienceAction | SubmitExperienceSuccess | SubmitExperienceFailure| SubmitResetData