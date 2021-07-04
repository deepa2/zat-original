import * as ObWelcomeAction from '../actions/obLanding.action';
import { obDashboardAction } from 'store/actions';

export interface ObWelcomeState {
    data: any,
    pending: boolean,
    error: any,

    finalData: any,
    finalPending: boolean,
    finalError: any,

    obLandingStatusData: any,
    obLandingStatusDataPending: boolean,
    obLandingStatusDataError: any


}

const initialState: ObWelcomeState = {
    data: null,
    pending: false,
    error: null,

    finalData: null,
    finalPending: false,
    finalError: null,

    obLandingStatusData: null,
    obLandingStatusDataPending: false,
    obLandingStatusDataError: null

}

export function reducer(state = initialState, action: ObWelcomeAction.ObWelcomeActions): ObWelcomeState {

    switch (action.type) {
        case ObWelcomeAction.OBWELCOME: {
            return {
                ...state,
                pending: true
            }
        }
        case ObWelcomeAction.OBWELCOME_SUCCESS: {
            return {
                ...state,
                pending: false,
                data: action.payload
            }
        }
        case ObWelcomeAction.OBWELCOME_FALIURE: {
            return {
                ...state,
                pending: false,
                error: action.playload
            }
        }

        case ObWelcomeAction.OB_FINAL_SUBMIT: {
            return {
                ...state,
                finalPending: true
            }
        }
        case ObWelcomeAction.OB_FINAL_SUBMIT_SUCCESS: {
            return {
                ...state,
                finalPending: false,
                finalData: action.payload
            }
        }
        case ObWelcomeAction.OB_FINAL_SUBMIT_FALIURE: {
            return {
                ...state,
                finalPending: false,
                finalError: action.playload
            }
        }

        case ObWelcomeAction.OB_FINAL_SUBMIT_RESET: {
            return {
                ...state,
                finalData: null,
                finalPending: false,
                finalError: null
            }
        }

        case ObWelcomeAction.OB_LANDING_STATUS: {
            return {
                ...state,
                obLandingStatusDataPending: true
            }
        }

        case ObWelcomeAction.OB_LANDING_STATUS_SUCCESS: {
            return {
                ...state,
                obLandingStatusDataPending: false,
                obLandingStatusData: action.playload
            }
        }

        case ObWelcomeAction.OB_LANDING_STATUS_FAILURE: {
            return {
                ...state,
                obLandingStatusDataPending: false,
                obLandingStatusDataError: action.playload
            }
        }
    }
    return state

}

export const getObWelcomeLoading = (state: ObWelcomeState) => state.pending;
export const getObFinalSubmitLoading = (state: ObWelcomeState) => state.finalPending;
export const getObLandingStatusPending =(state:ObWelcomeState) => state.obLandingStatusDataPending;