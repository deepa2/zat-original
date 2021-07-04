import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";
import { switchMap } from "rxjs/operators";
import * as profileActions from '../actions/profile.action';
import { HttpProvider } from '../../providers/http/http';
import { HttpAngularProvider } from '../../providers/http-angular/http-angular';

@Injectable()
export class ProfileEffects {

    constructor(private actions$: Actions, private httpProvider: HttpProvider, private httpAngularProvider: HttpAngularProvider) { }

    @Effect()
    userProfile$: Observable<Action> = this.actions$
        .ofType(profileActions.GET_USER_PROFILE).pipe(
            switchMap((action: profileActions.GetUserProfileAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: action.params, associate: true })
                    .map((response: any) => {
                        return new profileActions.ProfileActionSuccess(response.details);
                    })
                    .catch(error => Observable.of(new profileActions.ProfileActionError(error)))
            })
        )

    @Effect()
    updateProfile$: Observable<Action> = this.actions$
        .ofType(profileActions.UPDATE_PROFILE).pipe(
            switchMap((action: profileActions.UpdateProfile) => {
                return this.httpProvider.http.commonService({ url: action.url, data: action.params, associate: true })
                    .map((response: any) => {
                        return new profileActions.UpdateProfileSuccess(response);
                    })
                    .catch(error => Observable.of(new profileActions.UpdateProfileError(error)))
            })
        )

    @Effect()
    userPersonalInfo$: Observable<Action> = this.actions$
        .ofType(profileActions.GET_USER_PERSONAL_INFO).pipe(
            switchMap((action: profileActions.GetUserPersonalInfoAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: action.params, associate: true })
                    .map((response: any) => {
                        return new profileActions.ProfileActionSuccess(response.details);
                    })
                    .catch(error => Observable.of(new profileActions.ProfileActionError(error)))
            })
        )

    @Effect()
    getEditProfileData$: Observable<Action> = this.actions$
        .ofType(profileActions.EDIT_PROFILE_DATA).pipe(
            switchMap((action: profileActions.EditProfileDataAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: action.params, associate: true })
                    .map((response: any) => {
                        return new profileActions.EditProfileDataActionSuccess(response.details);
                    })
                    .catch(error => Observable.of(new profileActions.EditProfileDataActionError(error)))
            })
        )

    @Effect()
    uploadDocument$: Observable<Action> = this.actions$
        .ofType(profileActions.UPLOAD_DOCUMENT).pipe(
            switchMap((action: profileActions.UploadDocumentAction) => { 
                return this.httpAngularProvider.multimediaService({ url: action.url, data: action.formData, associate: true })
                    .map((response: any) => {
                        return new profileActions.UploadDocumentSuccessAction(response.details);
                    })
                    .catch(error => Observable.of(new profileActions.UploadDocumentErrorAction(error)))
            })
        )
}
