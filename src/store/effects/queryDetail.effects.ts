import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";
import * as queryDetailActions from '../actions/queryDetail.action';
import { switchMap } from "rxjs/operators";
import { HttpProvider } from '../../providers/http/http';

@Injectable()
export class QueryDetailEffects{
    constructor(private actions$:Actions,private httpProvider:HttpProvider){}

    @Effect()
    queryDetail$:Observable<Action> = this.actions$
    .ofType(queryDetailActions.QUERY_DETAIL).pipe(
        switchMap((action:queryDetailActions.GetQueryDetailAction)=>{
            return this.httpProvider.http.commonService({url:action.url,data:action.params})
            .map((response:any)=>{
                return new queryDetailActions.GetQueryDetailActionSuccess(response.details); 
            })
            .catch(error =>Observable.of(new queryDetailActions.GetQueryDetailActionError(error)))
        })
    )
}
