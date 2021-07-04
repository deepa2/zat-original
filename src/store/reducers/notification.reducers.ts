import * as notification from '../actions/notification.action';

export interface notificationState {
    data: any,
    totalResults:any,
    pending: boolean,
    error: any,
    loadMore: boolean,
    pullToRefresh: boolean,
}

const initialState: notificationState = {
    data: null,
    totalResults:0,
    pending: false,
    error: null,
    loadMore: false,   
    pullToRefresh: false
}

export function reducer(state = initialState, action: notification.NotificationAction): notificationState {
    switch (action.type) {
        case notification.NOTIFICATION: {
            return {
                ...state,
                pending: true
            };
        }
        case notification.NOTIFICATION_SUCCESS: {
            return {
                ...state,
                pending: false,
                pullToRefresh:false,
                data: action.payload.responseList,
                totalResults: action.payload.totalResultCount
            };
        }
        case notification.NOTIFICATION_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }
        // case notification.READ_ALL: {
        //     return {
        //         ...state,
        //         pending: true
        //     };
        // }
        // case notification.READ_ALL_SUCCESS: {
        //     return {
        //         ...state,
        //         pending: false,
        //         data: action.payload
        //     };
        // }
        // case notification.READ_ALL_ERROR: {
        //     return {
        //         ...state,
        //         pending: false,
        //         error: action.payload
        //     };
        // }
        case notification.READ_NOTIFICATION: {
            return {
                ...state,
                pending: true
            };
        }
        case notification.READ_NOTIFICATION_SUCCESS: {
            return {
                ...state,
                pending: false
            };
        }
        case notification.READ_NOTIFICATION_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }

        case notification.UPDATE_NOTIFICATION: {

            return {
                ...state,
                loadMore: true,
                error: null,
            }

        }

        case notification.UPDATE_NOTIFICATION_SUCCESS: {
            let newdata = state.data ? state.data.concat(action.payload.responseList) : action.payload.responseList

            return {
                ...state,
                loadMore: false,
                data: newdata,
                totalResults: action.payload.totalResultCount
            };
        }

        case notification.UPDATE_NOTIFICATION_FAIL: {
            return {
                ...state,
                loadMore: true,
                error: action.payload
            }
        }

        case notification.RELOAD_NOTIFICATION:{
            return {
                ...state,
                pullToRefresh:true,
                error:null
            };
        }
    }
    return state;
}

export const getNotificationLoading = (state: notificationState) => state.pending;
