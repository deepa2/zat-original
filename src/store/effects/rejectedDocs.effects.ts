import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";
import { switchMap } from "rxjs/operators";
import { HttpProvider } from '../../providers/http/http';
import * as RejectedDocs from '../actions/rejectedDocs.action';

@Injectable()
export class RejectedDocsEffects {
    constructor(private actions$: Actions, private httpProvider:HttpProvider) { }

    @Effect()
    rejectedDocsList$: Observable<Action> = this.actions$
        .ofType(RejectedDocs.REJECTEDDOCS).pipe(
            switchMap((action: RejectedDocs.RejectedDocsAction) => {
                return this.httpProvider.http.commonService({url:action.url,data:{},onboarding:true})
                    .map((response:any) => {
                        return new RejectedDocs.RejectedDocsSuccessAction(response)
                    })
                    .catch(error => Observable.of(new RejectedDocs.RejectedDocsErrorAction()))
            })
        );



} 