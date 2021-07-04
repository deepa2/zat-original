import * as About from '../actions/about.action';

export interface AboutState {
    data: any,
    pending: boolean,
    error: any
}

const initialState: AboutState = {
    data:null,
    pending: false,
    error: null
}

export function reducer(state = initialState, action: About.AboutActions): AboutState {
    switch (action.type) {
        case About.ABOUT: {
            return {
                ...state,
                pending: true
            };
        }
        case About.ABOUT_SUCCESS: {
            return {
                ...state,
                pending: false,
                data: action.payload
            };
        }
        case About.ABOUT_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }
    }
    return state;
}

export const getAboutLoading = (state: AboutState) => state.pending;