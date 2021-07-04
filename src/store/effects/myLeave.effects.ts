import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpProvider } from '../../providers/http/http';
import * as myLeaveActions from '../actions/myLeave.action';
import { HttpAngularProvider } from '../../providers/http-angular/http-angular';

@Injectable()
export class myLeaveEffects {
    constructor(private actions$: Actions, private httpProvider: HttpProvider, private httpAngularProvider: HttpAngularProvider) { }


    @Effect()
    leave$: Observable<Action> = this.actions$
        .ofType(myLeaveActions.MY_LEAVE).pipe(
            switchMap((action: myLeaveActions.MyLeaveAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data:action.param, miscellaneous: true })
                    .map((response) => {
                        return new myLeaveActions.MyLeaveSuccess(response);
                    })
                    .catch(error => Observable.of(new myLeaveActions.MyLeaveError(error)))
            })
        )









}