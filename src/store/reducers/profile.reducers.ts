import * as profile from '../actions/profile.action';

export interface ProfileState {

    data: any,
    error: any,
    pending: boolean,

    uploadData: any,
    uploadPending: any,
    uploadError: any,

    editData: any,

    updateDataLoading: any,
    updateSuccess: any
}

const initialState: ProfileState = {
    data: null,
    editData: null,
    pending: false,
    updateDataLoading: false,
    updateSuccess: null,
    error: null,
    
    uploadData: null,
    uploadPending: false,
    uploadError: null,
}

export function reducer(state = initialState, action: profile.GetProfileActions): ProfileState {
    switch (action.type) {

        case profile.GET_USER_PROFILE: {
            return {
                ...state,
                pending: true
            };
        }

        case profile.GET_USER_PERSONAL_INFO: {
            return {
                ...state,
                pending: true
            };
        }

        case profile.EDIT_PROFILE_DATA: {
            return {
                ...state,
                editData: null,
                pending: true
            };
        }

        case profile.EDIT_PROFILE_DATA_SUCCESS: {
            return {
                ...state,
                pending: false,
                editData: action.payload
            };
        }

        case profile.EDIT_PROFILE_DATA_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }

        case profile.UPDATE_PROFILE: {
            return {
                ...state,
                updateDataLoading: true
            };
        }

        case profile.UPDATE_PROFILE_SUCCESS: {
            return {
                ...state,
                updateDataLoading: false,
                updateSuccess: action.payload
            };
        }

        case profile.UPDATE_PROFILE_ERROR: {
            return {
                ...state,
                updateDataLoading: false,
                //error: action.payload
            };
        }

        case profile.UPDATE_PROFILE_RESET: {
            return {
                ...state,
                updateSuccess: ''
            }
        }

        case profile.UPLOAD_DOCUMENT_RESET: {
            return {
                ...state,
                uploadData: null,
                uploadPending: false,
                uploadError: null
            };
        }

        case profile.UPLOAD_DOCUMENT: {
            return {
                ...state,
                uploadData: null,
                uploadPending: true
            };
        }

        case profile.UPLOAD_DOCUMENT_SUCCESS: {
            return {
                ...state,
                uploadData: action.payload,
                uploadPending: false
            };
        }


        case profile.UPLOAD_DOCUMENT_ERROR: {
            return {
                ...state,
                uploadPending: false,
                uploadError: action.payload
            };
        }

        case profile.PROFILE_SUCCESS: {
            return {
                ...state,
                pending: false,
                data: action.payload
            };
        }

        case profile.PROFILE_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }

        case profile.GET_USER_PROFILE_RESET: {
            return {
                ...initialState
            }
        }
    }
    return state;
}

export const getProfileError = (state: ProfileState) => state.error;
export const getProfileLoading = (state: ProfileState) => state.pending;
export const getProfileData = (state: ProfileState) => state.data;

export const getProfileEditData = (state: ProfileState) => state.editData;

export const getUpdateDataLoading = (state: ProfileState) => state.updateDataLoading;
export const getUpdateSuccess = (state: ProfileState) => state.updateSuccess;

export const getProfileUploadLoading = (state: ProfileState) => state.uploadPending;
export const getProfileUploadData = (state: ProfileState) => state.uploadData;

export const getProfileReset = (state:ProfileState) => state;