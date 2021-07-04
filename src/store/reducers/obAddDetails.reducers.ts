import * as ObAddDetailActions from '../actions/obAddDetails.action';

export interface obAddDetailState {
    editData: any,
    error: any,
    pending: boolean,

    uploadData: any,
    uploadPending: any,
    uploadError: any,

    submitData: any,
    submitDataPending: any,
    submitDataError: any

    deleteData: any,
    deleteDataPending: any,
    deleteDataError: any
}

const initialState: obAddDetailState = {
    editData: null,
    error: null,
    pending: false,

    uploadData: null,
    uploadPending: false,
    uploadError: null,

    submitData: null,
    submitDataPending: false,
    submitDataError: null,

    deleteData: null,
    deleteDataPending: false,
    deleteDataError: null
}


export function reducer(state = initialState, action: ObAddDetailActions.GetObAddDetailsActions): obAddDetailState {
    switch (action.type) {

        case ObAddDetailActions.OB_ADD_DETAILS: {
            return {
                ...state,
                pending: true,
                editData: null,
                submitData:null
            }
        }
        case ObAddDetailActions.OB_ADD_DETAILS_SUCCESS: {
            return {
                ...state,
                pending: false,
                editData: action.payload
            }
        }
        case ObAddDetailActions.OB_ADD_DETAILS_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            }
        }

        case ObAddDetailActions.OB_UPLOAD_DOCUMENT: {
            return {
                ...state,
                uploadPending: true,
                uploadData: null
            }
        }
        case ObAddDetailActions.OB_UPLOAD_DOCUMENT_SUCCESS: {
            return {
                ...state,
                uploadPending: false,
                uploadData: action.payload 
            }
        }
        case ObAddDetailActions.OB_UPLOAD_DOCUMENT_ERROR: {
            return {
                ...state,
                uploadPending: false,
                uploadError: action.payload
            }
        }

        case ObAddDetailActions.OB_DATA: {
            return {
                ...state,
                submitDataPending: true,
                submitData: null
            }
        }
        case ObAddDetailActions.OB_DATA_SUCCESS: {
            return {
                ...state,
                submitDataPending: false,
                submitData: action.payload
            }
        }
        case ObAddDetailActions.OB_DATA_ERROR: {
            return {
                ...state,
                submitDataPending: false,
                submitDataError: action.payload
            }
        }

        case ObAddDetailActions.OB_DELETE_DATA: {
            return {
                ...state,
                deleteDataPending: true,
                deleteData: null
            }
        }
        case ObAddDetailActions.OB_DELETE_DATA_SUCCESS: {
            return {
                ...state,
                deleteDataPending: false,
                deleteData: action.payload
            }
        }
        case ObAddDetailActions.OB_DELETE_DATA_ERROR: {
            return {
                ...state,
                deleteDataPending: false,
                deleteDataError: action.payload
            }
        }


        case ObAddDetailActions.OB_DETAILS_RESET:{
            return{
                ...initialState
            }
        }

        case ObAddDetailActions.OB_UPLOAD_DOCUMENT_RESET: {
            return {
                ...state,
                uploadData: null,
                uploadPending: false,
                uploadError: null
            }
        }
    }
    return state;
}

export const getObAddDetailsData = (state: obAddDetailState) => state.editData;
export const getObAddDetailLoading = (state: obAddDetailState) => state.pending;
export const getObAddDetailsError = (state: obAddDetailState) => state.error;

export const getObAddDetailsUploadData = (state: obAddDetailState) => state.uploadData;
export const getObAddDetailsUploadLoading = (state: obAddDetailState) => state.uploadPending;
export const getObAddDetailsUploadError = (state: obAddDetailState) => state.uploadError;

export const ObAddDetailsSubmitData = (state: obAddDetailState) => state.submitData;
export const ObAddDetailsSubmitLoading = (state: obAddDetailState) => state.submitDataPending;
export const ObAddDetailsSubmitError = (state: obAddDetailState) => state.submitDataError;