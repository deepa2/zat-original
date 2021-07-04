import { Action } from '@ngrx/store';

import { SearchParams } from '../../models/search.model';

export const OVERALL_SEARCH = "Overall Search";
export const OVERALL_SEARCH_SUCCESS = "Overall Search Success";
export const OVERALL_SEARCH_FAIL = "Overall Search Fail";
export const OVERALL_SEARCH_CLEAR = "Overall Search Clear";

export const UPDATE_SEARCH = "Update Search";
export const UPDATE_SEARCH_SUCCESS = "Update Search Success";
export const UPDATE_SEARCH_FAIL = "Update Search Fail";

export const RESET_SEARCH = "Reset Search";


export class OverallSearchAction implements Action {
  readonly type = OVERALL_SEARCH;
  constructor(public url: string, public payload: SearchParams, public searchType: any) { }
}

export class OverallSearchSuccessAction implements Action {
  readonly type = OVERALL_SEARCH_SUCCESS;
  constructor(public url: string, public payload: any) { }
}

export class OverallSearchFailAction implements Action {
  readonly type = OVERALL_SEARCH_FAIL;
  constructor(public payload: any) { }
}

export class OverallSearchClear implements Action {
  readonly type = OVERALL_SEARCH_CLEAR;
  constructor() { }
}

export class UpdateSearchAction implements Action {
  readonly type = UPDATE_SEARCH;
  constructor(public url: string, public payload: SearchParams,  public searchType: any) { }
}

export class UpdateSearchSuccessAction implements Action {
  readonly type = UPDATE_SEARCH_SUCCESS;
  constructor(public url: string, public payload: any) { }
}

export class UpdateSearchFailAction implements Action {
  readonly type = UPDATE_SEARCH_FAIL;
  constructor(public payload: any) { }
}


export class ResetSearchAction implements Action {
  readonly type = RESET_SEARCH;
  constructor() { }
}

export type SearchAction =
  | OverallSearchAction
  | OverallSearchSuccessAction
  | OverallSearchFailAction
  | UpdateSearchAction
  | UpdateSearchSuccessAction
  | UpdateSearchFailAction
  | ResetSearchAction
  | OverallSearchClear;
