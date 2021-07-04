import { Action } from "@ngrx/store";

export const ADD_FEEDBACK = "Feedback";
export const ADD_FEEDBACK_SUCCESS = "Feedback Success";
export const ADD_FEEDBACK_ERROR = "Feedback Error";
export const RESET_ADD_FEEDBACK = "Reset Feedback";

export class AddFeedbackAction implements Action{
    readonly type = ADD_FEEDBACK;
    constructor(public url:string,public params:any){}
}

export class AddFeedbackActionSuccess implements Action{
    readonly type = ADD_FEEDBACK_SUCCESS;
    constructor(public payload:any){}
}

export class AddFeedbackActionError implements Action{
    readonly type = ADD_FEEDBACK_ERROR;
    constructor(public payload:any){}
}

export class ResetFeedbackAction implements Action{
    readonly type = RESET_ADD_FEEDBACK;
    constructor(){}
}

export type FeedbackActions =
| AddFeedbackAction
| AddFeedbackActionSuccess
| AddFeedbackActionError
| ResetFeedbackAction;

