import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";
import { switchMap } from "rxjs/operators";
import { HttpProvider } from "../../providers/http/http";
import * as getEditProfileActions from '../actions/editProfile.action';

@Injectable()
export class editProfileEffects {
    constructor(private actions$: Actions, private httpProvider: HttpProvider) { }

    @Effect()
    leave$: Observable<Action> = this.actions$
        .ofType(getEditProfileActions.SUBMIT_EXPERIENCE).pipe(
            switchMap((action: getEditProfileActions.SubmitExperienceAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: {}, associate: true })
                    .map((response) => {
                        return new getEditProfileActions.SubmitExperienceSuccess(response);
                    })
                    .catch(error => Observable.of(new getEditProfileActions.SubmitExperienceFailure(error)))
            })
        )
}
