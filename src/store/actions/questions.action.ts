import { Action } from '@ngrx/store';
import { listParams, ResponseList } from '../../models/question.model';

export const GET_QUESTION = "[Questions] Load Queries";
export const GET_QUESTION_SUCCESS = "[Questions] Load Queries Success";
export const GET_QUESTION_ERROR = "[Questions] Load Queries Fail";


export const UPDATE_QUESTION = "[Questions] Update Queries";
export const UPDATE_QUESTION_SUCCESS = "[Questions] Update Queries Success";
export const UPDATE_QUESTION_FAIL = "[Questions] Update Queries Fail";

export const RELOAD_QUESTION = "[Questions] Reload Queries";
export const RELOAD_QUESTION_SUCCESS = "[Questions] Reload Queries Success";
export const RELOAD_QUESTION_FAIL = "[Questions] Reload Queries Fail";

export const SET_FILTER = '[Questions] Set Filter';
export const GET_FILTER = '[Questions] Get Filter';
export const RESET_FILTER = '[Questions] Reset Filter';

export const RESET_QUESTIONS = '[Questions] Reset Question Data';


export class GetQuestionAction implements Action {
  readonly type = GET_QUESTION;
  constructor(public url: string, public payload: listParams) { }
}

export class GetQuestionSuccessAction implements Action {
  readonly type = GET_QUESTION_SUCCESS;
  constructor(public url: string, public payload: any) { }
}

export class GetQuestionFailAction implements Action {
  readonly type = GET_QUESTION_ERROR;
  constructor(public payload: any) { }
}

export class UpdateQuestionAction implements Action {
  readonly type = UPDATE_QUESTION;
  constructor(public url: string, public payload: listParams) { }
}

export class UpdateQuestionSuccessAction implements Action {
  readonly type = UPDATE_QUESTION_SUCCESS;
  constructor(public url: string, public payload: any) { }
}

export class UpdateQuestionFailAction implements Action {
  readonly type = UPDATE_QUESTION_FAIL;
  constructor(public payload: any) { }
}

export class ReloadQuestionAction implements Action {
  readonly type = RELOAD_QUESTION;
  constructor(public url: string, public payload: listParams) { }
}

export class ReloadQuestionSuccessAction implements Action {
  readonly type = RELOAD_QUESTION_SUCCESS;
  constructor(public url: string, public payload: any) { }
}

export class ReloadQuestionFailAction implements Action {
  readonly type = RELOAD_QUESTION_FAIL;
  constructor(public payload: any) { }
}

export class SetFilter implements Action {
  readonly type = SET_FILTER;
  constructor(public playload: any) { }
}

export class GetFilter implements Action {
  readonly type = GET_FILTER;
  constructor() { }
}

export class ResetFilter implements Action {
  readonly type = RESET_FILTER
  constructor() { }
}

export class ResetQuestions implements Action {
  readonly type = RESET_QUESTIONS
  constructor() { }
}

export type QuestionAction = GetQuestionAction
  | GetQuestionSuccessAction
  | GetQuestionFailAction
  | UpdateQuestionAction
  | UpdateQuestionSuccessAction
  | UpdateQuestionFailAction
  | ReloadQuestionAction
  | ReloadQuestionSuccessAction
  | ReloadQuestionFailAction
  | SetFilter
  | GetFilter
  | ResetFilter
  |ResetQuestions
