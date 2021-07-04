import { Injectable } from "@angular/core";
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { catchError, map, switchMap, } from 'rxjs/operators';
import * as addAction from "../actions/add.action";
import { Action } from '@ngrx/store';
import { HttpProvider } from '../../providers/http/http';
import { HttpAngularProvider } from '../../providers/http-angular/http-angular';

@Injectable()
export class AddEffects {

    constructor(private actions$: Actions, private httpProvider: HttpProvider, private httpAngularProvider: HttpAngularProvider) {
    }

    @Effect()
    add$: Observable<Action> = this.actions$
        .ofType(addAction.ADD).pipe(
        switchMap((action: addAction.AddAction) => {
            return this.httpProvider.http.commonService({ url: action.url, data: action.payload })
                .map(response => {

                    return new addAction.AddSuccessAction(response)

                })
                .catch(error => Observable.of(new addAction.AddErrorAction(error)))
        })
        );

    @Effect()
    addMultimedia$: Observable<Action> = this.actions$
        .ofType(addAction.ADD_MULTIMEDIA).pipe(
        switchMap((action: addAction.AddMultimediaAction) => {

            let param;

            if (action.addType == 'addQuestion' || action.addType == 'addAnswer') {

                param = { url: action.url, data: action.formData };

            } else if (action.addType == "addAnnouncement") {

                param = { url: action.url, data: action.formData, announcement: true };
            }

            return this.httpAngularProvider.multimediaService(param)
                .map(response => {
                    return new addAction.AddSuccessAction(response)

                })
                .catch(error => Observable.of(new addAction.AddErrorAction(error)))
        })
        );



}