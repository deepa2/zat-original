import * as InternalJobPosting from "../actions/internal-job-posting.action";

export interface InternalJobPostingState {
    data: any,
    pending: boolean,
    error: any
}
const initialState: InternalJobPostingState = {
    data: [],
    pending: false,
    error: null
}
export function reducer(state = initialState, action: InternalJobPosting.InternalJobPostingAction): InternalJobPostingState {
    switch (action.type) {
        case InternalJobPosting.INTERNALJOBPOSTING: {
            return {
                ...state,
                pending: true
            };
        }
        case InternalJobPosting.INTERNALJOBPOSTING_SUCCESS: {

           

            if (!state.data.allJobs || !state.data.applied || !state.data.nonApplied) {
                state.data.allJobs = []
                state.data.applied = []
                state.data.nonApplied = []
               
            }
            state.data.allJobs = state.data.allJobs.concat(action.payload.allJobs)
            state.data.applied = state.data.applied.concat(action.payload.applied)
            state.data.nonApplied = state.data.nonApplied.concat(action.payload.nonApplied)

            
        
            return {
                ...state,
                pending: false,
                data: state.data
            };
        }
        case InternalJobPosting.INTERNALJOBPOSTING_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }
        case InternalJobPosting.INTERNALJOBPOSTING_RESET: {
            return {
                ...state,
                pending: false,
                data: []
            };
        }
    }
    return state;
}
export const getInternalJobPostingLoading = (state: InternalJobPostingState) => state.pending;
//export const getInternalJobPostingData = (state: InternalJobPostingState) => state.data;