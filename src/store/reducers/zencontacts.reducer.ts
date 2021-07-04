import * as ZenConatcts from '../actions/zencontacts.action';

export interface ZenContactsState {
    data: any,
    pending: boolean,
    error: any
}
const initialState: ZenContactsState = {
    data: [],
    pending: false,
    error: null
}
export function reducer(state = initialState, action: ZenConatcts.ZenContactsAction): ZenContactsState {
    switch (action.type) {
        case ZenConatcts.ZENCONTACTS: {
            return {
                ...state,
                pending: true
            };
        }
        case ZenConatcts.ZENCONTACTS_SUCCESS: { 
            return {
                ...state,
                pending: false,
                data: state.data.concat(action.payload)
            };
        }
        case ZenConatcts.ZENCONTACTS_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }
        case ZenConatcts.ZENCONTACTS_RESET: { 
            return {
                ...state,
                pending: false,
                data: []
            };
        }
    }
    return state;
}
export const getZenContactsLoading = (state: ZenContactsState) => state.pending;