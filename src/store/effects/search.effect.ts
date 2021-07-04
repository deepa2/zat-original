import { Injectable } from "@angular/core";
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { catchError, map, switchMap, } from 'rxjs/operators';
import * as searchAction from "../actions/search.action";
import { Action } from '@ngrx/store';
import { HttpProvider } from '../../providers/http/http';

@Injectable()
export class SearchEffects {

    constructor(private actions$: Actions, private httpProvider: HttpProvider, ) {
    }

    @Effect()
    overallSearch$: Observable<Action> = this.actions$
        .ofType(searchAction.OVERALL_SEARCH).pipe(
            switchMap((action: searchAction.OverallSearchAction) => {

                let searchObj;

                if (action.searchType == "query") {
                    searchObj = { url: action.url, data: action.payload};
                } else {
                    searchObj = { url: action.url, data: action.payload, announcement: true };
                }

                return this.httpProvider.http.commonService(searchObj)
                    .map((response: any) => {
                        return new searchAction.OverallSearchSuccessAction(action.url, response.details)
                    })
                    .catch(error => Observable.of(new searchAction.OverallSearchFailAction(error)))
            })
        );

    @Effect()
    updateSearch$: Observable<Action> = this.actions$
        .ofType(searchAction.UPDATE_SEARCH).pipe(
            switchMap((action: searchAction.UpdateSearchAction) => {

                let searchObj;

                if (action.searchType == "query") {
                    searchObj = { url: action.url, data: action.payload};
                } else {
                    searchObj = { url: action.url, data: action.payload, announcement: true };
                }

                return this.httpProvider.http.commonService(searchObj)
                    .map((response: any) => {
                        return new searchAction.UpdateSearchSuccessAction(action.url, response.details)
                    })
                    .catch(error => Observable.of(new searchAction.UpdateSearchFailAction(error)))
            })
        );

}