import * as tag from '../actions/tag.action';

export interface TagState {
    group: any,
    groupMember: any,
    addResponse: any,
    pending: boolean,
    error: any
}

const initialState: TagState = {
    group: null,
    groupMember: null,
    addResponse: null,
    pending: false,
    error: null
}

export function reducer(state = initialState, action: tag.TagActions): TagState {
    switch (action.type) {

        case tag.GET_GROUP: {
            return {
                ...state,
                pending: true
            };
        }
        case tag.GET_GROUP_SUCCESS: {
            return {
                ...state,
                pending: false,
                group: action.payload
            };
        }
        case tag.GET_GROUP_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }

        case tag.GET_GROUP_MEMBER: {
            return {
                ...state,
                pending: true
            };
        }
        case tag.GET_GROUP_MEMBER_SUCCESS: {
            return {
                ...state,
                pending: false,
                groupMember: action.payload
            };
        }
        case tag.GET_GROUP_MEMBER_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }

        case tag.ADD_TAGS: {
            return {
                ...state,
                pending: true
            };
        }
        case tag.ADD_TAGS_SUCCESS: {
            return {
                ...state,
                pending: false,
                addResponse: action.payload
            };
        }
        case tag.ADD_TAGS_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }

        case tag.ADD_TAGS_RESET_DATA: {
            return {
                group: null,
                groupMember: null,
                addResponse: null,
                pending: false,
                error: null
            }
        }
    }
    return state;
}

export const getTagError = (state: TagState) => state.error;
export const getTagLoading = (state: TagState) => state.pending;
export const getAddTagResponse = (state: TagState) => state.addResponse;

export const getGroupsData = (state: TagState) => state.group;
export const getGroupMembersData = (state: TagState) => state.groupMember;