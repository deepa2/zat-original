import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";
import * as ZenConatctsAction from '../actions/zencontacts.action';
import { switchMap } from "rxjs/operators";
import { HttpProvider } from '../../providers/http/http';

@Injectable()
export class ZenContactsEffects {
    constructor(private actions$: Actions, private httpProvider: HttpProvider) { }

    @Effect()
    clientList$: Observable<Action> = this.actions$
        .ofType(ZenConatctsAction.ZENCONTACTS).pipe(
            switchMap((action: ZenConatctsAction.GetZenContactsAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: action.params, associate: true })
                    .map((response: any) => {
                        return new ZenConatctsAction.GetZenContactsSuccessAction(response.details.ResponseList)
                    })
                    .catch(error => Observable.of(new ZenConatctsAction.GetZenContactsErrorAction(error)))
            })
        );

}

