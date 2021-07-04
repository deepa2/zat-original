import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";
import { switchMap } from "rxjs/operators";
import { HttpProvider } from '../../providers/http/http';
import { HttpAngularProvider } from '../../providers/http-angular/http-angular';
import * as obActions from '../actions/obAddDetails.action';
import * as obDashboardAction from '../actions/obDashboard.action';

@Injectable()
export class ObAddDetailEffects {

    constructor(private actions$: Actions, private httpangularProvider: HttpAngularProvider, private httpProvider: HttpProvider) { }

    @Effect()
    obGetData$: Observable<Action> = this.actions$
        .ofType(obActions.OB_ADD_DETAILS).pipe(
            switchMap((action: obActions.GetObAddDetailAction) => {
                let section;

                if (action.section == 'onboarding') {
                    section = 'onboarding'
                } else {
                    section = 'associate'
                }

                return this.httpProvider.http.commonService({ url: action.url, data: action.params, [section]: true })
                    .map((response: any) => {
                        return new obActions.GetObAddDetailAction_Success(response.details || response.details || response.details)
                    })
                    .catch(error => Observable.of(new obActions.GetObAddDetailAction_Failure(error)))
            })
        )

    @Effect()
    obUploadDocument$: Observable<Action> = this.actions$
        .ofType(obActions.OB_UPLOAD_DOCUMENT).pipe(
            switchMap((action: obActions.ObUploadDocumentAction) => {

                let section;

                if (action.section == 'onboarding') {
                    section = 'onboarding'
                } else {
                    section = 'associate'
                }

                return this.httpangularProvider.multimediaService({ url: action.url, data: action.formData, [section]: true })
                    .map((response: any) => {
                        return new obActions.ObUploadDocumentActionSuccess(response);
                    })
                    .catch(error => Observable.of(new obActions.ObUploadDocumentActionError(error)))
            })
        )

    @Effect()
    obAddData$: Observable<Action> = this.actions$
        .ofType(obActions.OB_DATA).pipe(
            switchMap((action: obActions.ObAddDataAction) => {

                let section;

                if (action.section == 'onboarding') {
                    section = 'onboarding'
                } else {
                    section = 'associate'
                }

                return this.httpProvider.http.commonService({ url: action.url, data: action.data, [section]: true })
                    .switchMap((response: any) => [
                        new obDashboardAction.obDashboard_Success_Action(response.details.responseList),
                        new obActions.ObAddDataActionSuccess(response)
                    ])
                    .catch(error => Observable.of(new obActions.ObAddDataActionError(error)))
            })
        )

    @Effect()
    obDeleteData$: Observable<Action> = this.actions$
        .ofType(obActions.OB_DELETE_DATA).pipe(
            switchMap((action: obActions.ObAddDataAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: action.data, onboarding: true })
                    .switchMap((response: any) => [
                        new obActions.ObDeleteDataActionSuccess(response),
                    ])
                    .catch(error => Observable.of(new obActions.ObDeleteDataActionError(error)))
            })
        )

}