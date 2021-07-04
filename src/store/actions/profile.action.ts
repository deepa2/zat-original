import { Action } from "@ngrx/store";

export const GET_USER_PROFILE = "[Profile] Get Profile";
export const GET_USER_PROFILE_RESET = "[Profile] Get Profile Reset";
export const GET_USER_PERSONAL_INFO = "[Profile] Get User personal Info";

export const UPLOAD_DOCUMENT = "[Profile] Upload Document";
export const UPLOAD_DOCUMENT_SUCCESS = "[Profile] Upload Document Success";
export const UPLOAD_DOCUMENT_ERROR = "[Profile] Upload Document Error";
export const UPLOAD_DOCUMENT_RESET = "[Profile] Upload Document Reset";

export const EDIT_PROFILE_DATA = "[Profile] Edit Profile Data";
export const EDIT_PROFILE_DATA_SUCCESS = "[Profile] Edit Profile Data Success";
export const EDIT_PROFILE_DATA_ERROR = "[Profile] Edit Profile Data Error";

export const UPDATE_PROFILE = "[Profile] Update Profile";
export const UPDATE_PROFILE_SUCCESS = "[Profile] Update Profile Success";
export const UPDATE_PROFILE_ERROR = "[Profile] Update Profile Error";
export const UPDATE_PROFILE_RESET = "[Profile] Update Profile Reset";

export const PROFILE_SUCCESS = "[Profile] Profile Success";
export const PROFILE_ERROR = "[Profile] Profile Error";


export class GetUserProfileAction implements Action {
    readonly type = GET_USER_PROFILE;
    constructor(public url: string, public params: any) { }
}

export class GetUserProfileResetAction implements Action {
    readonly type = GET_USER_PROFILE_RESET;
    constructor() { }
}

export class GetUserPersonalInfoAction implements Action {
    readonly type = GET_USER_PERSONAL_INFO;
    constructor(public url: string, public params: any) { }
}

export class EditProfileDataAction implements Action {
    readonly type = EDIT_PROFILE_DATA;
    constructor(public url: string, public params: any) { }
}

export class EditProfileDataActionSuccess implements Action {
    readonly type = EDIT_PROFILE_DATA_SUCCESS;
    constructor(public payload: any) { }
}

export class EditProfileDataActionError implements Action {
    readonly type = EDIT_PROFILE_DATA_ERROR;
    constructor(public payload: any) { }
}

export class UploadDocumentAction implements Action {
    readonly type = UPLOAD_DOCUMENT;
    constructor(public url: string, public formData) { }
}

export class UploadDocumentSuccessAction implements Action {
    readonly type = UPLOAD_DOCUMENT_SUCCESS;
    constructor(public payload: any) { }
}

export class UploadDocumentErrorAction implements Action {
    readonly type = UPLOAD_DOCUMENT_ERROR;
    constructor(public payload: any) { }
}

export class UploadDocumentResetAction implements Action {
    readonly type = UPLOAD_DOCUMENT_RESET;
    constructor() { }
}

export class UpdateProfile implements Action {
    readonly type = UPDATE_PROFILE;
    constructor(public url: string, public params: any) { }
}

export class UpdateProfileSuccess implements Action {
    readonly type = UPDATE_PROFILE_SUCCESS;
    constructor(public payload: any) { }
}

export class UpdateProfileError implements Action {
    readonly type = UPDATE_PROFILE_ERROR;
    constructor(public payload: any) { }
}

export class UpdateProfileResetAction implements Action {
    readonly type = UPDATE_PROFILE_RESET;
    constructor() { }
}

export class ProfileActionSuccess implements Action {
    readonly type = PROFILE_SUCCESS;
    constructor(public payload: any) { }
}

export class ProfileActionError implements Action {
    readonly type = PROFILE_ERROR;
    constructor(public payload: any) { }
}

export type GetProfileActions =
    | GetUserProfileAction
    | GetUserPersonalInfoAction
    | EditProfileDataAction
    | EditProfileDataActionSuccess
    | EditProfileDataActionError
    | UploadDocumentAction
    | UploadDocumentSuccessAction
    | UploadDocumentErrorAction
    | UploadDocumentResetAction
    | ProfileActionSuccess
    | ProfileActionError
    | UpdateProfile
    | UpdateProfileSuccess
    | UpdateProfileError
    | UpdateProfileResetAction
    | GetUserProfileResetAction;

