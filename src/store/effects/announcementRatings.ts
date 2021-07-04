import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpProvider } from '../../providers/http/http';
import * as getCommentsActions from '../actions/announcementRatings.action';

@Injectable()
export class GetCommentsEffects {

    constructor(private actions$: Actions, private httpProvider: HttpProvider) { }

    @Effect()
    getComments$: Observable<Action> = this.actions$.
        ofType(getCommentsActions.GET_COMMENTS).pipe(
        switchMap((action: getCommentsActions.GetComments) => {
            return this.httpProvider.http.commonService({ url: action.url, data: action.payload, announcement: true })
                .map((response:any) => {
                    return new getCommentsActions.GetCommentsSuccess(response.details.responseList)
                })
                .catch(error => Observable.of(new getCommentsActions.GetCommentsError()))
        })
        )
}