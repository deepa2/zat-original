import {Action} from '@ngrx/store'

export const GET_DOCUMENT_DETAILS = "[Onboarding] Document Details";
export const GET_DOCUMENT_DETAILS_SUCCESS = "[Onboarding] Document Details  Success";
export const GET_DOCUMENT_DETAILS_FAILURE = "[Onboarding] Document Details Failure";

export class getDocumentDetailsAction implements Action{
    readonly type = GET_DOCUMENT_DETAILS;
    constructor (public url:string){}
}

export class getDocumentDetails_Success implements Action{
    readonly type = GET_DOCUMENT_DETAILS_SUCCESS;
    constructor (public payload:any){}
}

export class getDocumentDetails_Failure implements Action{
    readonly type = GET_DOCUMENT_DETAILS_FAILURE;
    constructor (public payload:any){}
}

export type DocumentDetailsActions = getDocumentDetailsAction | getDocumentDetails_Success | getDocumentDetails_Failure;