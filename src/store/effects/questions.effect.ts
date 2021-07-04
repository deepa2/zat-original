import { Injectable } from "@angular/core";
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as questionAction from "../actions/questions.action";
import { Action } from '@ngrx/store';
import { HttpProvider } from '../../providers/http/http';
import * as questionModal from '../../models/question.model';

@Injectable()
export class QuestionsEffects {

    constructor(private actions$: Actions, private httpProvider: HttpProvider) { }

    @Effect()
    getQuestions$: Observable<Action> = this.actions$
        .ofType(questionAction.GET_QUESTION).pipe(
            switchMap((action: questionAction.GetQuestionAction) => {
                return this.httpProvider.http.commonService({url:action.url, data:action.payload})
                    .map((response: any) => {
                        return new questionAction.GetQuestionSuccessAction(action.url, response.details)
                    })
                    .catch(error => Observable.of(new questionAction.GetQuestionFailAction(error)))
            })
        );

    @Effect()
    updateQuestions$: Observable<Action> = this.actions$
        .ofType(questionAction.UPDATE_QUESTION).pipe(
            switchMap((action: questionAction.UpdateQuestionAction) => {
                return this.httpProvider.http.commonService({url:action.url, data:action.payload})
                    .map((response:any) => {

                        return new questionAction.UpdateQuestionSuccessAction(action.url, response.details)

                    })
                    .catch(error => Observable.of(new questionAction.UpdateQuestionFailAction(error)))
            })
        );

    @Effect()
    reloadQuestions$: Observable<Action> = this.actions$
        .ofType(questionAction.RELOAD_QUESTION).pipe(
            switchMap((action: questionAction.ReloadQuestionAction) => {
                return this.httpProvider.http.commonService({url:action.url, data:action.payload})
                    .map((response:questionModal.IQuestion) => {

                        return new questionAction.GetQuestionSuccessAction(action.url, response.details)

                    })
                    .catch(error => Observable.of(new questionAction.GetQuestionFailAction(error)))
            })
        );


}