import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";
import * as tagActions from '../actions/tag.action';
import { switchMap } from "rxjs/operators";
import { HttpProvider } from '../../providers/http/http';

@Injectable()
export class TagEffects {
    constructor(private actions$: Actions, private httpProvider: HttpProvider) { }

    @Effect()
    getGroup$: Observable<Action> = this.actions$
        .ofType(tagActions.GET_GROUP).pipe(
            switchMap((action: tagActions.GetGroupAction) => {
                return this.httpProvider.http.commonService({url:action.url, data:action.params})
                    .map((response: any) => {
                        return new tagActions.GetGroupActionSuccess(response.details.responseList);
                    })
                    .catch(error => Observable.of(new tagActions.GetGroupActionError(error)))
            })
        )


    @Effect()
    getGroupMember$: Observable<Action> = this.actions$
        .ofType(tagActions.GET_GROUP_MEMBER).pipe(
            switchMap((action: tagActions.GetGroupMemberAction) => {
                return this.httpProvider.http.commonService({url:action.url, data:action.params})
                    .map((response: any) => {
                        return new tagActions.GetGroupMemberActionSuccess(response.details.responseList);
                    })
                    .catch(error => Observable.of(new tagActions.GetGroupMemberActionError(error)))
            })
        )


    @Effect()
    addTag$: Observable<Action> = this.actions$
        .ofType(tagActions.ADD_TAGS).pipe(
            switchMap((action: tagActions.AddTagAction) => {
                return this.httpProvider.http.commonService({url:action.url, data:action.params})
                    .map(response => {
                        return new tagActions.AddTagActionSuccess(response);
                    })
                    .catch(error => Observable.of(new tagActions.AddTagActionError(error)))
            })
        )
}
