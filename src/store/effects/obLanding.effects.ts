import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import { switchMap } from "rxjs/operators";
import { Action } from "@ngrx/store";
import * as miscAction from "../actions/home.action";
import { HttpProvider } from "../../providers/http/http";
import { map } from "rxjs/operators/map";
import * as obWelcomeAction from '../actions/obLanding.action';

@Injectable()
export class ObWelcomeEffects {
    constructor(private action$: Actions, private httpProvider: HttpProvider) { }

    @Effect()
    welcomeMesage$: Observable<Action> = this.action$
        .ofType(obWelcomeAction.OBWELCOME).pipe(
            switchMap((action: obWelcomeAction.GetObWelcomeAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: action.param })
                    .map((response: any) => {
                        return new obWelcomeAction.GetObWelcomeSuccessAction(response.paragraphDetails)
                    })
                    .catch(error => {
                        return Observable.of(new obWelcomeAction.GetObWelcomeFailureAction(error))
                    })
            })
        );

    @Effect()
    finalSubmit$: Observable<Action> = this.action$
        .ofType(obWelcomeAction.OB_FINAL_SUBMIT).pipe(
            switchMap((action: obWelcomeAction.ObFinalSubmitAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: {}, onboarding: true })
                    .map((response: any) => {
                        return new obWelcomeAction.ObFinalSubmitSuccessAction(response)
                    })
                    .catch(error => {
                        return Observable.of(new obWelcomeAction.ObFinalSubmitFailureAction(error))
                    })
            })
        );

        @Effect()
        obLandingStatus$: Observable<Action> = this.action$
            .ofType(obWelcomeAction.OB_LANDING_STATUS).pipe(
                switchMap((action: obWelcomeAction.ObFinalSubmitAction) => {
                    return this.httpProvider.http.commonService({ url: action.url, data: {}, onboarding: true })
                        .map((response: any) => {
                            return new obWelcomeAction.GetObLandingStatusSuccessAction(response)
                        })
                        .catch(error => {
                            return Observable.of(new obWelcomeAction.GetObLandingStatusFailureAction(error))
                        })
                })
            );


}