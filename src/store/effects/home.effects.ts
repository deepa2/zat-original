import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import { switchMap } from "rxjs/operators";
import { Action } from "@ngrx/store";
import * as miscAction from "../actions/home.action";
import { HttpProvider } from "../../providers/http/http";
import { map } from "rxjs/operators/map";

@Injectable()
export class HomeEffects {
  constructor(private actions$: Actions, private httpProvider: HttpProvider) { }

  @Effect() 
  getMiscData$: Observable<Action> = this.actions$
    .ofType(miscAction.MISC_DATA)
    .pipe(
    switchMap((action: miscAction.GetMiscDataAction) => {
      
      return this.httpProvider.http
        .commonService({ url: action.url, data:action.params, home:true }) 
        .map((response: any) => {
          return new miscAction.GetMiscSuccessAction(response.data.response);
        })
        .catch(error =>
          Observable.of(new miscAction.GetMiscErrorAction(error))
        );
    }) 

    );
 
}
