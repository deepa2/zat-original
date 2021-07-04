import * as faq from '../actions/faq.action';
import { faqState } from '../../models/faq.model';

const initialState: faqState = {
    data: null,
    pending: false,
    error: null,
    detailData: null
}

export function reducer(state = initialState, action: faq.FaqAction, ): faqState {
    switch (action.type) {
        case faq.FAQ: {
            return {
                ...state,
                pending: true
            };
        }
        case faq.FAQ_SUCCESS: {
            return {
                ...state,
                pending: false,
                data: action.payload
            };
        }
        case faq.FAQ_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }
        case faq.FAQ_DETAILS: { 
            return {
                ...state,
                pending: true
            };
        }
        case faq.FAQ_DETAILS_SUCCESS: {
            return {
                ...state,
                pending: false,
                detailData: action.payload 
            };
        }
        case faq.FAQ_DETAILS_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }
    }
    return state;
}

export const getFAQLoading = (state: faqState) => state.pending;