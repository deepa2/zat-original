import * as ApplyJobs from '../actions/applyjob.action';

export interface ApplyJobState {
    data: any,
    pending: boolean,
    error: any,

    submitFormData: any,
    submitFormPending: boolean,
    SubmitFormError: any

    uploadResumeData: any,
    uploadResumePending: boolean,
    uploadResumeError: any
}

const initialState: ApplyJobState = {
    data: null,
    pending: false,
    error: null,

    submitFormData: null,
    submitFormPending: false,
    SubmitFormError: null,

    uploadResumeData: null,
    uploadResumePending: false,
    uploadResumeError: null
}

export function reducer(state = initialState, action: ApplyJobs.ApplyJobActions): ApplyJobState {
    switch (action.type) {
        case ApplyJobs.APPLYJOB: {
            return {
                ...state,
                pending: true
            };
        }
        case ApplyJobs.APPLYJOB_SUCCESS: {
            return {
                ...state,
                pending: false,
                data: action.payload
            };
        }
        case ApplyJobs.APPLYJOB_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }
        case ApplyJobs.SUBMITAPPLYFORM: {
            return {
                ...state,
                submitFormPending: true
            }
        }

        case ApplyJobs.SUBMITAPPLYFORM_SUCCESS: {
            return {
                ...state,
                submitFormPending: false,
                submitFormData: action.payload
            }
        }
        case ApplyJobs.SUBMITAPPLYFORM_ERROR: {
            return {
                ...state,
                submitFormPending: false,
                SubmitFormError: action.payload
            }
        }

        case ApplyJobs.UPLOADRESUME: {
            return {
                ...state,
                uploadResumePending: true,
                uploadResumeData: null
            }
        }

        case ApplyJobs.UPLOADRESUME_SUCCESS: {
            return {
                ...state,
                uploadResumePending: false,
                uploadResumeData: action.payload
            }
        }
        case ApplyJobs.UPLOADRESUME_ERROR: {
            return {
                ...state,
                uploadResumePending: false,
                uploadResumeData: action.payload
            }
        }

        case ApplyJobs.SUBMITAPPLYFORMRESET: {
            return {
                /* data: null,
                pending: false,
                error: null, */
                ...state,
                submitFormData: null,
                submitFormPending: false,
                SubmitFormError: null,

                /*  uploadResumeData: null,
                 uploadResumePending: false,
                 uploadResumeError: null */
            }
        }

        case ApplyJobs.UPLOADRESUMERESET: {
            return {
                /* data: null,
                pending: false,
                error: null, */

                /* submitFormData: null,
                submitFormPending: false,
                SubmitFormError: null,
 */
                ...state,
                uploadResumeData: null,
                uploadResumePending: false,
                uploadResumeError: null
            }
        }
    }
    return state;
}

export const getApplyJobLoading = (state: ApplyJobState) => state.pending;
export const getApplyJobData = (state: ApplyJobState) => state.data;

export const submitFormLoading = (state: ApplyJobState) => state.submitFormPending;
export const submitFormData = (state: ApplyJobState) => state.submitFormData

export const uploadResumeLoading = (state: ApplyJobState) => state.uploadResumePending;
export const uploadResumeData = (state: ApplyJobState) => state.uploadResumeData;
export const uploadResumeError = (state: ApplyJobState) => state.uploadResumeError;