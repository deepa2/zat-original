import { Action } from '@ngrx/store';

export const SET_ROLE = '[Role] Change Role';
export const GET_ROLE = '[Role] Get Role';

export class SetRole implements Action{
    readonly type = SET_ROLE;
    constructor(public payload:any){}
}

export class GetRole implements Action{
    readonly type = GET_ROLE;
    constructor(){}
}

export type RoleActions =
    | SetRole
    | GetRole;