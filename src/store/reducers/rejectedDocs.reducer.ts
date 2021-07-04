import * as RejectedDocs from '../actions/rejectedDocs.action';

export interface RejectedState {
    data: any;
    pending: boolean;
    error: any;
}

const initialState: RejectedState = {
    data: null,
    pending: false,
    error: null
}

export function reducer(state = initialState, action: RejectedDocs.RejectedActions): RejectedState {
    switch (action.type) {
        case RejectedDocs.REJECTEDDOCS: {
            return {
                ...state,
                pending: true
            };
        }
        case RejectedDocs.REJECTEDDOCS_SUCCESS: {
            return {
                ...state,
                pending: false,
                data: action.payload
            };
        }
        case RejectedDocs.REJECTEDDOCS_ERROR: {
            return {
                ...state,
                pending: false,
            };
        }
        case RejectedDocs.REJECTEDDOCS_RESET: {
            return {
                ...state,
                data: null,
                pending: false,
                error: null
            };
        }
    }
    return state;
}

export const getRejectedDocsLoading = (state: RejectedState) => state.pending;
// export const getRejectedDocsData = (state: RejectedState) => state.data;
