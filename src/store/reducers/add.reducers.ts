import * as fromAdd from '../actions/add.action';


export interface AddState {
    data: any,
    loading: boolean,
    error: any
}

const initialState: AddState = {
    data: null,
    loading: false,
    error: null
}

export function reducer(state = initialState, action: fromAdd.AddActions): AddState {

    // ;   

    switch (action.type) {

        case fromAdd.ADD: {

            return {
                ...state,
                loading: true,
                error: null,
            }

        }

        case fromAdd.ADD_MULTIMEDIA: {

            return {
                ...state,
                loading: true,
                error: null,
            }

        }

        case fromAdd.ADD_SUCCESS: {

            return {
                ...state,
                loading: false,
                data: action.payload
            };

        }

        case fromAdd.ADD_ERROR: {

            return {
                ...state,
                loading: false,
                error: action.payload
            };

        }

        case fromAdd.ADD_RESET_DATA:{
            return{
                data: null,
                loading: false,
                error: null
            }
        }
    }

    return state;
}

export const getAddError = (state: AddState) => state.error;
export const getAddLoading = (state: AddState) => state.loading;
export const getAddData = (state: AddState) => state.data;