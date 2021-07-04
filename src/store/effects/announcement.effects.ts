import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpProvider } from '../../providers/http/http';
import * as announcementActions from '../actions/announcement.action';
import { HttpAngularProvider } from '../../providers/http-angular/http-angular';
import * as fromAnnouncementModel from '../../models/announcement.model'


@Injectable()
export class GetAnnouncementEffects {

    constructor(private actions$: Actions, private httpProvider: HttpProvider,private httpAngularProvider: HttpAngularProvider) { }

    @Effect()
    getAnnouncements$: Observable<Action> = this.actions$.
        ofType(announcementActions.GET_ANNOUNCMENTS).pipe(
        switchMap((action: announcementActions.GetAnnouncements) => {
            return this.httpProvider.http.commonService({ url: action.url, data: action.payload, announcement: true })
                .map((response: fromAnnouncementModel.IAnnouncement) => {
                    
                    return new announcementActions.GetAnnouncementsSuccess(response.details.responseList);
                })
                .catch(error => Observable.of(new announcementActions.GetAnnouncementsError()))
        })
        )

    @Effect()
    addAnnouncementsRating$: Observable<Action> = this.actions$.
        ofType(announcementActions.ADD_RATING_ANNOUNCEMENT).pipe(
        switchMap((action: announcementActions.AddAnnouncementRating) => {
            return this.httpAngularProvider.multimediaService({ url: action.url, data: action.payload, announcement: true })
                .map((response: any) => {
                   
                    return new announcementActions.AddAnnouncementRatingSuccess(response.details.responseList);
                })
                .catch(error => Observable.of(new announcementActions.AddAnnouncementRatingError()))
        })
        )


}   