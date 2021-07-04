import { Action } from "@ngrx/store";

export const GET_GROUP = "[Tag] Get Group";
export const GET_GROUP_SUCCESS = "[Tag] Get Group Success";
export const GET_GROUP_ERROR = "[Tag] Get Group Error";


export const GET_GROUP_MEMBER = "[Tag] Get Group Member";
export const GET_GROUP_MEMBER_SUCCESS = "[Tag] Get Group Member Success";
export const GET_GROUP_MEMBER_ERROR = "[Tag] Get Group Member Error";

export const ADD_TAGS = "[Tag] Add Tags";
export const ADD_TAGS_SUCCESS = "[Tag] Add Tags Success";
export const ADD_TAGS_ERROR = "[Tag] Add Tags Error";
export const ADD_TAGS_RESET_DATA = "[Tag] Reset Add Data";

export class GetGroupAction implements Action{
    readonly type = GET_GROUP;
    constructor(public url:string,public params:any){}
}

export class GetGroupActionSuccess implements Action{
    readonly type = GET_GROUP_SUCCESS;
    constructor(public payload:any){}
}

export class GetGroupActionError implements Action{
    readonly type = GET_GROUP_ERROR;
    constructor(public payload:any){}
}

export class GetGroupMemberAction implements Action{
    readonly type = GET_GROUP_MEMBER;
    constructor(public url:string,public params:any){}
}

export class GetGroupMemberActionSuccess implements Action{
    readonly type = GET_GROUP_MEMBER_SUCCESS;
    constructor(public payload:any){}
}

export class GetGroupMemberActionError implements Action{
    readonly type = GET_GROUP_MEMBER_ERROR;
    constructor(public payload:any){}
}

export class AddTagAction implements Action{
    readonly type = ADD_TAGS;
    constructor(public url:string,public params:any){}
}

export class AddTagActionSuccess implements Action{
    readonly type = ADD_TAGS_SUCCESS;
    constructor(public payload:any){}
}

export class AddTagActionError implements Action{
    readonly type = ADD_TAGS_ERROR;
    constructor(public payload:any){}
}

export class AddTagResetAction implements Action {
    readonly type = ADD_TAGS_RESET_DATA;
    constructor() { }
}

export type TagActions =
| GetGroupAction
| GetGroupActionSuccess
| GetGroupActionError
| GetGroupMemberAction
| GetGroupMemberActionSuccess
| GetGroupMemberActionError
| AddTagAction
| AddTagActionSuccess
| AddTagActionError
| AddTagResetAction;

