import * as role from '../actions/roles.action';

export interface roleState {
    role: any,
    error: any
}

const initialState: roleState = {
    role:null,
    error: null
}

export function reducer(state = initialState, action: role.RoleActions): roleState {
    switch (action.type) {

        case role.GET_ROLE: {
            return {
                ...state,
            };
        }
        case role.SET_ROLE: {
            return {
                ...state,
                role: action.payload
            };
        }
    }
    return state;
}

export const getRole = (state: roleState) => state.role;