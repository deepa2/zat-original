import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";
import * as applyJob from '../actions/applyjob.action'
import { switchMap } from "rxjs/operators";
import { HttpProvider } from '../../providers/http/http';
import { HttpAngularProvider } from '../../providers/http-angular/http-angular';

@Injectable()
export class ApplyJobEffect {
    constructor(private actions$: Actions, private httpProvider: HttpProvider, private httpangularProvider: HttpAngularProvider) { }

    @Effect()
    applyJOb$: Observable<Action> = this.actions$
        .ofType(applyJob.APPLYJOB).pipe(
            switchMap((action: applyJob.GetApplyJobAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: action.params, associate: true })
                    .map((response: any) => {
                        return new applyJob.GetApplyJobActionSuccess(response)
                    })
                    .catch(error => Observable.of(new applyJob.GetApplyJobActionFaliure(error)))
            })
        );

    @Effect()
    submitApplyJobForm$: Observable<Action> = this.actions$
        .ofType(applyJob.SUBMITAPPLYFORM).pipe(
            switchMap((action: applyJob.GetSubmitApplyFormAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: action.params, ijp: true })
                    .map((response: any) => {
                        return new applyJob.GetSubmitApplyFormActionSuccess(response)
                    })
                    .catch(error => Observable.of(new applyJob.GetSubmitApplyFormActionFaliure(error)))
            })
        );

    @Effect()
    uploadResume$: Observable<Action> = this.actions$
        .ofType(applyJob.UPLOADRESUME).pipe(
            switchMap((action: applyJob.UploadResumeAction) => {
                return this.httpangularProvider.multimediaService({ url: action.url, data: action.formData, ijp: true })
                    .map(response => {
                        return new applyJob.UploadResumeActionSuccess(response)

                    })
                    .catch(error => Observable.of(new applyJob.UploadResumeActionError(error)))
            })
        );
}
