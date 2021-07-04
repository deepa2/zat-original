import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";
import * as FaqAction from '../actions/faq.action';
import { switchMap } from "rxjs/operators";
import { HttpProvider } from "../../providers/http/http";
import { IFaq } from '../../models/faq.model';

@Injectable()
export class FaqEffects {
    constructor(private actions$: Actions,
        private httpProvider: HttpProvider) { }

    @Effect()
    faq$: Observable<Action> = this.actions$
        .ofType(FaqAction.FAQ).pipe(
            switchMap((action: FaqAction.GetFaqAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: {}, miscellaneous: true })
                    .map((response: IFaq) => {
                        return new FaqAction.GetFaqSuccessAction(response.details);
                    })
                    .catch(error => Observable.of(new FaqAction.GetFaqErrorAction(error)))
            })
        )

    @Effect()
    faqDetails$: Observable<Action> = this.actions$
        .ofType(FaqAction.FAQ_DETAILS).pipe(
            switchMap((action: FaqAction.GetFaqDetailsAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: action.payload, miscellaneous: true })
                    .map((response: IFaq) => {
                        return new FaqAction.GetFaqDetailsSuccessAction(response.details);
                    })
                    .catch(error => Observable.of(new FaqAction.GetFaqDetailsErrorAction(error)))
            })
        )

}
