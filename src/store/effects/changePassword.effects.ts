import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";
import * as changePasswordEffects from '../actions/changePassword.action'
import { switchMap } from "rxjs/operators";
import { HttpProvider } from '../../providers/http/http';

@Injectable()
export class ChangePasswordEffects {
    constructor(private action$: Actions, private httpProvider: HttpProvider) { }
    @Effect()
    changePass$: Observable<Action> = this.action$
        .ofType(changePasswordEffects.OB_CHANGEPASSWORD).pipe(
            switchMap((action: changePasswordEffects.OBChangePassword) => {
                return this.httpProvider.http.OBChangePassword(action.payload)
                    .map((response: any) => {
                        return new changePasswordEffects.OBPasswordChangeSuccess(response)
                    })
                    .catch(error => Observable.of(new changePasswordEffects.OBPaswordChangeFailure(error)))
            })
        )
}