import { Injectable } from "@angular/core";
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { catchError, map, switchMap, } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import * as dashboardAction from '../actions/dashboard.action';
import { HttpProvider } from '../../providers/http/http';

@Injectable()
export class DashboardEffects {
    constructor(private actions$: Actions, private httpProvider: HttpProvider) { }

    @Effect()
    getDashboardData$: Observable<Action> = this.actions$
        .ofType(dashboardAction.GET_DASHBOARD_DATA).pipe(
            switchMap((action: dashboardAction.GetDashboardDataAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: {}, dashboard: true })
                    .map((response: any) => {
                        return new dashboardAction.GetDashboardSuccessAction(response.details.responseList)
                    })
                    .catch(error => Observable.of(new dashboardAction.GetDashboardErrorAction(error)))
            })
        )


    @Effect()
    getUserDashboardData$: Observable<Action> = this.actions$
        .ofType(dashboardAction.GET_USER_DASHBOARD_DATA).pipe(
            switchMap((action: dashboardAction.GetUserDashboardDataAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: {}, dashboard: true })
                    .map((response: any) => {
                        return new dashboardAction.GetUserDashboardSuccessAction(response.details.responseList)
                    })
                    .catch(error => Observable.of(new dashboardAction.GetUserDashboardErrorAction(error)))
            })

        )
}