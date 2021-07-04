import * as JobDescription from "../actions/job-description.actions";

export interface JobDescriptionState {
    data: any,
    pending: boolean,
    error: any
}
const initialState: JobDescriptionState = {
    data: null,
    pending: false,
    error: null
}
export function reducer(state = initialState, action: JobDescription.JobDescriptionAction): JobDescriptionState {
    switch (action.type) {
        case JobDescription.JOB_DESCRIPTION: {
            return {
                ...state,
                pending: true
            };
        }
        case JobDescription.JOB_DESCRIPTION_SUCCESS: {
            return {
                ...state,
                pending: false,
                data: action.payload
            };
        }
        case JobDescription.JOB_DESCRIPTION_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }
    }
    return state;
}
export const getJobDescriptionLoading = (state: JobDescriptionState) => state.pending;