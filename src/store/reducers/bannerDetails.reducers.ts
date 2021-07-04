import * as BannerDetails from '../actions/bannerDetails.action';

export interface BannerDetailsState {
    data: any,
    pending: boolean,
    error: any
}

const initialState: BannerDetailsState = {
    data: null,
    pending: false,
    error: null
}

export function reducer(state = initialState, action: BannerDetails.BannerDetailsActions): BannerDetailsState {
    switch (action.type) {
        case BannerDetails.BANNER_DETAILS: {
            return {
                ...state,
                pending: true
            };
        }
        case BannerDetails.BANNER_DETAILS_SUCCESS: {
            return {
                ...state,
                pending: false,
                data: action.payload
            };
        }
        case BannerDetails.BANNER_DETAILS_ERROR: {
            return {
                ...state,
                pending: false,

            };
        }
    }
    return state;

}
export const getBannerDetailsLoading = (state: BannerDetailsState) => state.pending;
export const getBannerDetailsData = (state: BannerDetailsState) => state.data;