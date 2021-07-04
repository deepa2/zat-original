import * as documentDetailAction from '../actions/documentDetails.action';

export interface DocumentDetailsState {
    data: any,
    pending: boolean,
    error: any
}

const initialState: DocumentDetailsState = {
    data: null,
    pending: false,
    error: null
}


export function reducer(state = initialState, action: documentDetailAction.DocumentDetailsActions): DocumentDetailsState {
    switch (action.type) {
        case documentDetailAction.GET_DOCUMENT_DETAILS: {
            return {
                ...state,
                pending: true
            }
        };
        case documentDetailAction.GET_DOCUMENT_DETAILS_SUCCESS: {
            return {
                ...state,
                pending: false,
                data: action.payload
            }
        }
        case documentDetailAction.GET_DOCUMENT_DETAILS_SUCCESS: {
            return {
                ...state,
                pending: false,
                error: action.payload
            }
        }
    }

    return state;
}

export const getDocumentDetailsLoading = (state: DocumentDetailsState) => state.pending;
export const getDocumentDetailsData = (state: DocumentDetailsState) => state.data;  