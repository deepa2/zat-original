import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";
import * as feedbackActions from '../actions/feedback.action';
import { switchMap } from "rxjs/operators";
import { HttpProvider } from '../../providers/http/http';

@Injectable()
export class FeedbackEffects{
    constructor(private actions$:Actions,private httpProvider:HttpProvider){}

    @Effect()
    feedback$:Observable<Action> = this.actions$
    .ofType(feedbackActions.ADD_FEEDBACK).pipe(
        switchMap((action:feedbackActions.AddFeedbackAction)=>{
            return this.httpProvider.http.commonService({url:action.url,data:action.params})
            .map(response=>{
                return new feedbackActions.AddFeedbackActionSuccess(response); 
            })
            .catch(error =>Observable.of(new feedbackActions.AddFeedbackActionError(error)))
        })
    )
}
