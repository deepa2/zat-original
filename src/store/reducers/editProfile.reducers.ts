import * as SubmitExperienceActions from "../actions/editProfile.action"


export interface SubmitExperience {
    data: any,
    loading: boolean,
    error: any
}

const initialState: SubmitExperience = {
    data: null,
    loading: false,
    error: null
}

export function reducer(state = initialState, action: SubmitExperienceActions.GetSubmitExperienceActions): SubmitExperience {
    switch (action.type) {
        case SubmitExperienceActions.SUBMIT_EXPERIENCE: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case SubmitExperienceActions.SUBMIT_EXPERIENCE_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.playLoad
            }
        }
        case SubmitExperienceActions.SUBMIT_EXPERIENCE_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.playLoad
            }
        }
        case SubmitExperienceActions.RESET_SUBMIT_DATA: {
            return {
                data: null,
                loading: false,
                error: null
            }
        }
    }
    return state
}

export const GetSubmitExperienceLoading = (state: SubmitExperience) => state.loading;
export const GetSubmitExperienceData = (state: SubmitExperience) => state.data;
