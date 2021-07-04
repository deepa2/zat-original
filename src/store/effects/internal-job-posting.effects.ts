import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";
import * as InternalJobPostingAction from "../actions/internal-job-posting.action";
import { switchMap } from "rxjs/operators";
import { HttpProvider } from '../../providers/http/http';

@Injectable()
export class InternalJobPostingEffects {
    constructor(private actions$: Actions, private httpProvider: HttpProvider) { }

    @Effect()
    clientList$: Observable<Action> = this.actions$
        .ofType(InternalJobPostingAction.INTERNALJOBPOSTING).pipe(
            switchMap((action: InternalJobPostingAction.GetInternalJobPostingAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: action.params, ijp: true })
                    .map((response: any) => {
                        return new InternalJobPostingAction.GetInternalJobPostingSuccessAction(response.details.responseList)
                    })
                    .catch(error => Observable.of(new InternalJobPostingAction.GetInternalJobPostingErrorAction(error)))
            })
        );

}