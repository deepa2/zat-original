import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";
import * as  aboutAction from '../actions/about.action';
import { switchMap } from "rxjs/operators";
import { HttpProvider } from '../../providers/http/http';

@Injectable()
export class AboutEffects {
    constructor(private actions$: Actions, private httpProvider:HttpProvider) { }

    @Effect()
    clientList$: Observable<Action> = this.actions$
        .ofType(aboutAction.ABOUT).pipe(
            switchMap((action: aboutAction.GetAboutAction) => {
                return this.httpProvider.http.commonService({url:action.url,data:action.params})
                    .map((response:any) => {
                        return new aboutAction.GetAboutSuccessAction(response.paragraphDetails)
                    })
                    .catch(error => Observable.of(new aboutAction.GetAboutErrorAction(error)))
            })
        );

}

