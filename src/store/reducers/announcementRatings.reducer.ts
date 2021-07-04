import * as getCommentsActions from '../actions/announcementRatings.action';

export interface commentsState {
    data: any;
    pending: boolean;
    error: any;
}

const initialState: commentsState = {
    data: [],
    pending: false,
    error: null
}

// function reducer
export function reducer(state: any = initialState, action: getCommentsActions.getCommentsAction) {

    //returns a new state
    switch (action.type) {

        case getCommentsActions.GET_COMMENTS: {
            return {
                ...state,
                pending: true
            };

        }

        case getCommentsActions.GET_COMMENTS_SUCCESS: {
            return {
                ...state,
                pending: false,
                data: state.data.concat(action.payload)
            };
        }

        case getCommentsActions.GET_COMMENTS_ERROR: {
            return {
                ...state,
                pending: false
            };

        }

        case getCommentsActions.GET_COMMENTS_RESET: {
            return {
                ...initialState
            };

        }
        default:
            return state;
    }
}

export const getCommentLoading = (state: commentsState) => state.pending;