import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";
import { switchMap } from "rxjs/operators";
import { HttpProvider } from '../../providers/http/http';
import * as bannerDetailActions from '../actions/bannerDetails.action';


@Injectable()
export class BannerDetailsEffects {
    constructor(private actions$: Actions, private httpProvider: HttpProvider) { }

    @Effect()
    bannerDetails$: Observable<Action> = this.actions$
        .ofType(bannerDetailActions.BANNER_DETAILS).pipe(
            switchMap((action: bannerDetailActions.getBannerDetailsAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: action.payload, bannerDetails: true })
                    .map((response: any) => {
                        return new bannerDetailActions.getBannerDetailsSuccessAction(response);
                    })
                    .catch(error => Observable.of(new bannerDetailActions.getBannerDetailsErrorAction()))
            })
        )







}