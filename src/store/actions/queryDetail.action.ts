import { Action } from "@ngrx/store";

export const QUERY_DETAIL = "Query Detail";
export const QUERY_DETAIL_SUCCESS = "Query Detail Success";
export const QUERY_DETAIL_ERROR = "Query Detail Error";

export class GetQueryDetailAction implements Action{
    readonly type = QUERY_DETAIL;
    constructor(public url:string,public params:any){}
}

export class GetQueryDetailActionSuccess implements Action{
    readonly type = QUERY_DETAIL_SUCCESS;
    constructor(public payload:any){}
}

export class GetQueryDetailActionError implements Action{
    readonly type = QUERY_DETAIL_ERROR;
    constructor(public payload:any){}
}

export type QueryDetailAction =
| GetQueryDetailAction
| GetQueryDetailActionSuccess
| GetQueryDetailActionError;

