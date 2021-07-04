import { Action } from "@ngrx/store";

export const ZENCONTACTS = "ZenContacts";
export const ZENCONTACTS_SUCCESS = "ZenContacts Success";
export const ZENCONTACTS_ERROR = "ZenConatacts Error";
export const ZENCONTACTS_RESET = "ZenContacts Reset";

export class GetZenContactsAction implements Action {
    readonly type = ZENCONTACTS;
    constructor(public url: string, public params: any) { }
}
export class GetZenContactsSuccessAction implements Action {
    readonly type = ZENCONTACTS_SUCCESS;
    constructor(public payload: any) { }
}
export class GetZenContactsErrorAction implements Action {
    readonly type = ZENCONTACTS_ERROR;
    constructor(public payload: any) { }
}
export class GetZenContactsResetAction implements Action {
    readonly type = ZENCONTACTS_RESET;
    constructor() { }
}
export type ZenContactsAction =
    GetZenContactsAction
    | GetZenContactsSuccessAction
    | GetZenContactsErrorAction
    | GetZenContactsResetAction;