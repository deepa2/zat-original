import * as fromAnnouncementModel from '../../models/announcement.model'
import * as announcementActions from '../actions/announcement.action';

export interface announcementState {
    data: Array<fromAnnouncementModel.ResponseList>;
    pending: boolean;
    ratingData: any;
    error: any;
}

const initialState: announcementState = {
    data: [],
    ratingData: null,
    pending: false,
    error: null
}

// function reducer
export function reducer(state: any = initialState, action: announcementActions.GetAnnouncementActions) {

    //returns a new state
    switch (action.type) {

        case announcementActions.GET_ANNOUNCMENTS: {
            return {
                ...state,
                pending: true
            };

        }

        case announcementActions.GET_ANNOUNCMENTS_SUCCESS: {
            return {
                ...state,
                pending: false,
                data: state.data.concat(action.payload)
            };
        }

        case announcementActions.GET_ANNOUNCMENTS_ERROR: {
            return {
                ...state,
                pending: false
            };

        }

        case announcementActions.GET_ANNOUNCMENTS_RESET: {
            return {
                ...initialState
            };

        }

        case announcementActions.ADD_RATING_ANNOUNCEMENT: {
            return {
                ...state,
                pending: true
            };

        }

        case announcementActions.ADD_RATING_ANNOUNCEMENT_SUCCESS: {
            return {
                ...state,
                pending: false,
                ratingData: action.payload,
                data: state.data.map((item) => {
                    if (item.announcementId == action.payload.announcementId) {
                        return action.payload;
                    } else {
                        return item;
                    }
                })
            };
        }

        case announcementActions.ADD_RATING_ANNOUNCEMENT_ERROR: {
            return {
                ...state,
                pending: false
            };

        }

        default:
            return state;
    }

}

export const getAnnouncementLoading = (state: announcementState) => state.pending;