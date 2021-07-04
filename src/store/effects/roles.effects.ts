import { Injectable } from "@angular/core";
import { Actions, Effect,toPayload } from "@ngrx/effects";
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";
import * as roleActions from '../actions/roles.action';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/filter';

@Injectable()
export class RoleEffects {
    constructor(private actions$: Actions) { }

    @Effect()
    getRole$: Observable<Action> = this.actions$
        .ofType(roleActions.GET_ROLE)
        .mapTo(new roleActions.GetRole());

    @Effect()
    setRole$: Observable<Action> = this.actions$
        .ofType(roleActions.SET_ROLE)
        .map(payload => {
            return new roleActions.SetRole(payload);
        }).filter(() => false); 

}
