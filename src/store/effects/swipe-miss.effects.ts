import { Action } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from 'rxjs/Observable';
import * as SwipmissAction from '../actions/swipe-miss.action';
import { switchMap } from "rxjs/operators";
import { HttpProvider } from "../../providers/http/http";

@Injectable()
export class SwipeMissEffects {

    constructor(private actions$: Actions, private httpProvider: HttpProvider) { }

    @Effect()
    getSwipeMiss$: Observable<Action> = this.actions$
        .ofType(SwipmissAction.SWIPE_MISS).pipe(
            switchMap((action: SwipmissAction.GetSwipeMissAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: {}, miscellaneous: true })
                    .map((response: any) => {
                        return new SwipmissAction.GetSwipeMissSuccessAction(response.details.ResponseList);
                    })
                    .catch(error => Observable.of(new SwipmissAction.GetSwipeMissErrorAction(error)))
            })
        )
}