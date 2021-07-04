import * as onBoardingChangePassword from '../actions/changePassword.action';
import { passwordStatus } from '../../models/changePassword.model';

export interface change_Password {
    data: any,
    pending: boolean,
    error: any
}

const initialState: change_Password = {
    data: null,
    pending: false,
    error: null
}


export function reducer(state = initialState, action: onBoardingChangePassword.onBoardingPasswordChange): change_Password {
    switch (action.type) {
        case onBoardingChangePassword.OB_CHANGEPASSWORD: {
            return {
                ...state,
                pending: true
            }
        }
        case onBoardingChangePassword.OB_CHANGEPASSWORD_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                pending: false
            }
        }
        case onBoardingChangePassword.OB_CHANGEPASSWORD_FAILURE: {
            return {
                ...state,
                error: action.payload,
                pending: false
            }
        }
        case onBoardingChangePassword.OB_CHANGEPASSWORD_RESET: {
            return {
                data: null,
                pending: false,
                error: null
            }
        }

    }

    return state;

}

export const getChangePasswordPending = (state: change_Password) => state.pending;
export const getOBChangePasswordData = (state: change_Password) => state.data; 