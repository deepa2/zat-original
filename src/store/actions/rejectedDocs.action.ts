import { Action } from '@ngrx/store';

export const REJECTEDDOCS = "rejected";
export const REJECTEDDOCS_SUCCESS = "rejected success";
export const REJECTEDDOCS_ERROR = "rejected error";
export const REJECTEDDOCS_RESET = "rejected Reset";

export class RejectedDocsAction implements Action {
    readonly type = REJECTEDDOCS;
    constructor(public url: any) { }
}

export class RejectedDocsSuccessAction implements Action {
    readonly type = REJECTEDDOCS_SUCCESS;
    constructor(public payload: any) { }
}

export class RejectedDocsErrorAction implements Action {
    readonly type = REJECTEDDOCS_ERROR;
    constructor() { }
}
export class RejectedDocsResetAction implements Action {
    readonly type = REJECTEDDOCS_RESET;
    constructor() { }
}

export type RejectedActions =
    | RejectedDocsAction
    | RejectedDocsSuccessAction
    | RejectedDocsErrorAction | RejectedDocsResetAction;