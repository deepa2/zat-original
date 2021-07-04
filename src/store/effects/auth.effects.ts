import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { HttpProvider } from '../../providers/http/http';
import * as Auth from '../actions/auth.action';
import { Store } from "@ngrx/store";
import * as fromStore from '@app/store';
import { Data } from '../../providers/data/data';
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";
import { switchMap } from "rxjs/operators";

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private httpProvider: HttpProvider, private store: Store<fromStore.Login>, public dataService: Data) { }

  @Effect()
  login$ = this.actions$
    .ofType(Auth.LOGIN)
    .map((action: Auth.Login) => action.payload)
    .exhaustMap(auth =>
      this.httpProvider.http.authenticate(auth, 'login')
        .map(user => new Auth.LoginSuccess(user))
        .catch(error => of(new Auth.LoginFailure(error)))
    );

  @Effect()
  logout$: Observable<Action> = this.actions$
    .ofType(Auth.LOGOUT).pipe(
      switchMap((action: Auth.Logout) => {
        return this.httpProvider.http.authenticate(action.payload, 'logout')
          .map(response => {
            return new Auth.LogoutSuccess(response);
          })
          .catch(error => Observable.of(new Auth.LogoutFailure(error)))
      })
    );


}