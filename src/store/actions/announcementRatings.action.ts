
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { getCommentsModel } from '../../models/getComments.model';

export const GET_COMMENTS = '[getComments] get comments';
export const GET_COMMENTS_SUCCESS = '[getComments] get comments success';
export const GET_COMMENTS_ERROR = '[getComments] get comments error';
export const GET_COMMENTS_RESET = '[getComments] get comments reset';

// section 2: defining two constants  ADD_TUTORIAL and  REMOVE_TUTORIAL and naming the constants and type.
export class GetComments implements Action {
    readonly type = GET_COMMENTS
    constructor(public url: string, public payload: any) { }
}

export class GetCommentsSuccess implements Action {
    readonly type = GET_COMMENTS_SUCCESS
    constructor(public payload: any) { }
}

export class GetCommentsError implements Action {
    readonly type = GET_COMMENTS_ERROR
    constructor() { }
}

export class GetCommentsReset implements Action {
    readonly type = GET_COMMENTS_RESET
    constructor() { }
}
// section3: defining  type of actions through which we will access the action 
export type getCommentsAction = GetComments | GetCommentsSuccess | GetCommentsError | GetCommentsReset;
