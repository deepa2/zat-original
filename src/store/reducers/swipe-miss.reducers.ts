import * as SwipeMissAction from '../actions/swipe-miss.action';

export interface swipeMissState {
    data: any,
    pending: boolean,
    error: any,
    detailData: any
}

const initialState: swipeMissState = {
    data: null,
    pending: false,
    error: null,
    detailData: null
}


export function reducer(state = initialState, action: SwipeMissAction.SwipeMissActions): swipeMissState {
    switch (action.type) {

        case SwipeMissAction.SWIPE_MISS:
            return {
                ...state,
                pending: true
            };

        case SwipeMissAction.SWIPE_MISS_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.payload
            };
        case SwipeMissAction.SWIPE_MISS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload
            };
    }
    return state;
}

export const getSwipeMissLoading = (state: swipeMissState) => state.pending;