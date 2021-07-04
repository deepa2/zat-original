import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";
import * as jobDescriptionAction from "../actions/job-description.actions";
import { switchMap } from "rxjs/operators";
import { HttpProvider } from '../../providers/http/http';

@Injectable()
export class JobDescriptionEffects {
    constructor(private actions$: Actions, private httpProvider: HttpProvider) { }

    @Effect()
    clientList$: Observable<Action> = this.actions$
        .ofType(jobDescriptionAction.JOB_DESCRIPTION).pipe(
            switchMap((action: jobDescriptionAction.GetJobDescriptionAction) => {
                return this.httpProvider.http.commonService({ url: action.url, ijp: true })
                    .map((response: any) => {
                        return new jobDescriptionAction.GetJobDescriptionSuccessAction(response)
                    })
                    .catch(error => Observable.of(new jobDescriptionAction.GetJobDescriptionErrorAction(error)))
            })
        );

}