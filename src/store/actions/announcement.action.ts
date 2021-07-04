//section 1: importing action and tutorial interface

import { Action } from '@ngrx/store';
import * as fromAnnouncementModel from '../../models/announcement.model'

export const GET_ANNOUNCMENTS = '[Announcement] getAll';
export const GET_ANNOUNCMENTS_SUCCESS = '[Announcement] getSuccess';
export const GET_ANNOUNCMENTS_ERROR = '[Announcement] getError';
export const GET_ANNOUNCMENTS_RESET = '[Announcement] get Reset';

export const ADD_RATING_ANNOUNCEMENT = '[Announcement] get rating';
export const ADD_RATING_ANNOUNCEMENT_SUCCESS = '[Announcement] get rating success';
export const ADD_RATING_ANNOUNCEMENT_ERROR = '[Announcement] get rating error';

// section 2: defining two constants  ADD_TUTORIAL and  REMOVE_TUTORIAL and naming the constants and type.

export class GetAnnouncements implements Action {
    readonly type = GET_ANNOUNCMENTS
    constructor(public url: string, public payload: any) { }
}

export class GetAnnouncementsSuccess implements Action {
    readonly type = GET_ANNOUNCMENTS_SUCCESS
    constructor(public payload: Array<fromAnnouncementModel.ResponseList>) { }
}

export class GetAnnouncementsError implements Action {
    readonly type = GET_ANNOUNCMENTS_ERROR
    constructor() { }
}

export class GetAnnouncementsReset implements Action {
    readonly type = GET_ANNOUNCMENTS_RESET
    constructor() { }
}

//rating
export class AddAnnouncementRating implements Action {
    readonly type = ADD_RATING_ANNOUNCEMENT
    constructor(public url: string, public payload: any,public ratingType) { }
}

export class AddAnnouncementRatingSuccess implements Action {
    readonly type = ADD_RATING_ANNOUNCEMENT_SUCCESS
    constructor(public payload: any) { }
}

export class AddAnnouncementRatingError implements Action {
    readonly type = ADD_RATING_ANNOUNCEMENT_ERROR
    constructor() { }
}

// section3: defining  type of actions through which we will access the action  
export type GetAnnouncementActions =
    GetAnnouncements
    | GetAnnouncementsSuccess
    | GetAnnouncementsError
    | GetAnnouncementsReset
    | AddAnnouncementRating
    | AddAnnouncementRatingSuccess
    | AddAnnouncementRatingError;