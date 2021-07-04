import * as leaveAction from '../actions/myLeave.action';
// import { stat } from 'fs';

export interface MyLeaveState {
    data: any,
    pending: boolean,
    error: any
}

const initialState: MyLeaveState = {
    data: null,
    pending: false,
    error: null
}

export function reducer(state = initialState, action: leaveAction.MyLeaveActions): MyLeaveState {

    switch (action.type) {
        case leaveAction.MY_LEAVE:{
            return {
                ...state,
                pending: true
            };
        }

        case leaveAction.MY_LEAVE_SUCCESS:{
            return{
                ...state,
                pending:false,
                data:action.payload
            
            };
        }

        case leaveAction.MY_LEAVE_ERROR:{
            return {
                ...state,
                pending:false,
                error:action.paylaod
            }
        }

        case leaveAction.MY_LEAVE_RESET:{
            return{
                data: null,
                pending: false,
                error: null
            }
        }
        
    }
    return state;
 }

 export  const myLeaveLoading = (state:MyLeaveState) =>state.pending;
 export const myLeaveData = (state:MyLeaveState) => state.data;