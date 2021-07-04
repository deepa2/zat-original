import * as auth from '../actions/auth.action';
import { User } from '../../models/auth.model';

export interface LoginState {
  data: any,
  pending: boolean,
  error: any
}

const initialState: LoginState = {
  data: null,
  pending: false,
  error: null
}


export function reducer(state = initialState, action: auth.AuthActions): LoginState {
  switch (action.type) {

    case auth.LOGIN: {
      return {
        ...state,
        pending: true,
      };
    }

    case auth.LOGIN_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        pending: false,
      };
    }

    case auth.LOGIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
        pending: false,
      };
    }

    case auth.LOGOUT: {
      return {
        ...state,
        pending: true,
      };
    }

    case auth.LOGOUT_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        pending: false,
      };
    }

    case auth.LOGIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
        pending: false,
      };
    }
    case auth.LOGIN_SET_DATA: {
      return {
        ...state,
        data: action.payload,
        pending: false
      }
    }

    default: {
      return state;
    }
  }
}

export const getLoggedInData = (state: LoginState) => state.data;
export const setLoggedInData = (state: LoginState) => state.data;
