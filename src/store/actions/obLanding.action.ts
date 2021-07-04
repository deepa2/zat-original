import { Action } from "@ngrx/store";

export const OBWELCOME = "Ob Welcome";
export const OBWELCOME_SUCCESS = "Ob Success";
export const OBWELCOME_FALIURE = "Ob Failure";

export const OB_FINAL_SUBMIT = "Ob Final Submit";
export const OB_FINAL_SUBMIT_SUCCESS = "Ob Final Submit Success";
export const OB_FINAL_SUBMIT_FALIURE = "Ob Final Submit Failure";
export const OB_FINAL_SUBMIT_RESET = "Ob Final Submit Reset";

export const OB_LANDING_STATUS = "Ob Landing Status";
export const OB_LANDING_STATUS_SUCCESS = "Ob Landing Status Success";
export const OB_LANDING_STATUS_FAILURE = "Ob Landing Status Failure"

export class GetObWelcomeAction implements Action {
    readonly type = OBWELCOME
    constructor(public url: string, public param: any) { }
}

export class GetObWelcomeSuccessAction implements Action {
    readonly type = OBWELCOME_SUCCESS
    constructor(public payload: any) { }
}

export class GetObWelcomeFailureAction implements Action {
    readonly type = OBWELCOME_FALIURE
    constructor(public playload: any) { }
}

export class ObFinalSubmitAction implements Action {
    readonly type = OB_FINAL_SUBMIT
    constructor(public url: string) { }
}

export class ObFinalSubmitSuccessAction implements Action {
    readonly type = OB_FINAL_SUBMIT_SUCCESS
    constructor(public payload: any) { }
}

export class ObFinalSubmitFailureAction implements Action {
    readonly type = OB_FINAL_SUBMIT_FALIURE
    constructor(public playload: any) { }
}

export class ObFinalSubmitResetAction implements Action {
    readonly type = OB_FINAL_SUBMIT_RESET
    constructor() { }
}

export class GetObLandingStatusAction implements Action {
    readonly type = OB_LANDING_STATUS
    constructor(public url: string) { }
}

export class GetObLandingStatusSuccessAction implements Action {
    readonly type = OB_LANDING_STATUS_SUCCESS
    constructor(public playload: any) { }
}
export class GetObLandingStatusFailureAction implements Action {
    readonly type = OB_LANDING_STATUS_FAILURE
    constructor(public playload: any) { }
}
export type ObWelcomeActions =
    GetObWelcomeAction |
    GetObWelcomeSuccessAction |
    GetObWelcomeFailureAction |
    ObFinalSubmitAction |
    ObFinalSubmitSuccessAction |
    ObFinalSubmitFailureAction |
    ObFinalSubmitResetAction|
    GetObLandingStatusAction|
    GetObLandingStatusSuccessAction|
    GetObLandingStatusFailureAction;
