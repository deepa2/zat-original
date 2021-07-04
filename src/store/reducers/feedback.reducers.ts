import * as feedback from '../actions/feedback.action';

export interface FeedbackState {
    data: any,
    pending: boolean,
    error: any
}

const initialState: FeedbackState = {
    data:null,
    pending: false,
    error: null
}

export function reducer(state = initialState, action: feedback.FeedbackActions): FeedbackState {
    switch (action.type) {
        case feedback.ADD_FEEDBACK: {
            return {
                ...state,
                pending: true
            };
        }
        case feedback.ADD_FEEDBACK_SUCCESS: {
            return {
                ...state,
                pending: false,
                data: action.payload
            };
        }
        case feedback.ADD_FEEDBACK_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }
        case feedback.RESET_ADD_FEEDBACK :{
            return Object.assign({}, initialState);
        }
    }
    return state;
}

export const addfeedbackError = (state: FeedbackState) => state.error;
export const addfeedbackLoading = (state: FeedbackState) => state.pending;
export const addfeedbackData = (state: FeedbackState) => state.data;