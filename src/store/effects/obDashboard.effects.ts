import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";
import { switchMap } from "rxjs/operators";
import { HttpProvider } from '../../providers/http/http';
import * as obDashboardAction from'../actions/obDashboard.action';

@Injectable()

export class ObDashboardEffects {
    constructor (private action$:Actions, private httpProvider:HttpProvider){}

    @Effect()
     obDashboardDetails$:Observable<Action> = this.action$
     .ofType(obDashboardAction.OBDASHBOARD).pipe(
         switchMap((action:obDashboardAction.obDashboardAction) =>{
             return this.httpProvider.http.commonService({url:action.url,data:action.param,onboarding:true})
             .map((response:any) =>{
                 return new obDashboardAction.obDashboard_Success_Action(response.details.responseList)
             })
             .catch(error => Observable.of(new obDashboardAction.obDashboard_Failure_Action(error)))
         })
     )
}
