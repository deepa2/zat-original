import * as obDashboardAction from '../actions/obDashboard.action';


export interface obDashboardState{
    data:any,
    pending:boolean,
    error:any

}

const initialState: obDashboardState = {
    data: null,
    pending:false,
    error:null

} 

export function reducer(state = initialState, action:obDashboardAction.obDashboardActions):obDashboardState {

    switch(action.type){
        case obDashboardAction.OBDASHBOARD:{
            return {
                ...state,
                pending:true
            }
        }
        case obDashboardAction.OBDASHBOARD_SUCCESS:{
            return {
                ...state,
                pending:false,
                data:action.payload
            }
        }
        case obDashboardAction.OBDASHBOARD_FAILURE:{
            return {
                ...state,
                pending:false,
                error:action.payload
            }
        }
    }
    return state
}

export const getObDashboardData = (state:obDashboardState) => state.data;
export const getObDashboardLoading = (state:obDashboardState) => state.pending;