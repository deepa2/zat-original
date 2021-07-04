import * as dashboard from '../actions/dashboard.action';
import { state } from '@angular/core/src/animation/dsl';

export interface dashboardState {
    data: any,
    pending: boolean,
    error: any,
    userData: any,
    userDataPending: boolean,
    userDataError: any
}

const initialState: dashboardState = {
    data: null,
    pending: false,
    error: null,
    userData: null,
    userDataPending: false,
    userDataError: null
}

export function reducer(state = initialState, action: dashboard.DashboardAction): dashboardState {
    switch (action.type) {
        case dashboard.GET_DASHBOARD_DATA: {
            return {
                ...state,
                pending: true
            };
        }
        case dashboard.GET_DASHBOARD_SUCCESS: {
            return {
                ...state,
                pending: false,
                data: action.payload
            };
        }
        case dashboard.GET_DASHBOARD_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }
        case dashboard.GET_USER_DASHBOARD_DATA: {
            return {
                ...state,
                userDataPending: true
            };
        }
        case dashboard.GET_USER_DASHBOARD_SUCCESS: {
            return {
                ...state,
                userDataPending: false,
                userData: action.payload
            };
        }
        case dashboard.GET_USER_DASHBOARD_ERROR: {
            return {
                ...state,
                userDataPending: false,
                userDataError: action.payload
            };
        }
    }
    return state;
}

export const getDashboardLoading = (state: dashboardState) => state.pending;
export const getUserDashboardLoading = (state: dashboardState) => state.userDataPending;