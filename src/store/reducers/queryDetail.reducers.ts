import * as queryDetail from '../actions/queryDetail.action';

export interface QueryDetailState {
    data: any,
    pending: boolean,
    error: any
}

const initialState: QueryDetailState = {
    data:null,
    pending: false,
    error: null
}

export function reducer(state = initialState, action: queryDetail.QueryDetailAction): QueryDetailState {
    switch (action.type) {
        case queryDetail.QUERY_DETAIL: {
            return {
                ...state,
                pending: true
            };
        }
        case queryDetail.QUERY_DETAIL_SUCCESS: {
            return {
                ...state,
                pending: false,
                data: action.payload
            };
        }
        case queryDetail.QUERY_DETAIL_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }
    }
    return state;
}

export const getQueryDetailError = (state: QueryDetailState) => state.error;
export const getQueryDetailLoading = (state: QueryDetailState) => state.pending;
export const getQueryDetailData = (state: QueryDetailState) => state.data;