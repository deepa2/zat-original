import * as fromQuestion from '../actions/questions.action';
import { ResponseList } from '../../models/question.model';

export interface QuestionState {
    data: any,
    pending: boolean,
    loadMore: boolean,
    pullToRefresh: boolean,
    error: any,
    totalResultCount: number;
    selectedFilter: string;

}

const initialState: QuestionState = {
    data: null,
    pending: false,
    loadMore: false,
    pullToRefresh: false,
    error: null,
    totalResultCount: 0,
    selectedFilter: null
}

export function reducer(state = initialState, action: fromQuestion.QuestionAction): QuestionState {

    // ;

    switch (action.type) {

        case fromQuestion.UPDATE_QUESTION: {

            return {
                ...state,
                loadMore: true,
                error: null,
            }

        }

        case fromQuestion.UPDATE_QUESTION_SUCCESS: {

            return {
                ...state,
                pending: false,
                pullToRefresh: false,
                data: state.data.concat(action.payload.responseList),
                loadMore: false
            };

        }

        case fromQuestion.UPDATE_QUESTION_FAIL: {
            return {
                ...state,
                loadMore: false,
                error: action.payload
            };
        }

        case fromQuestion.GET_QUESTION: {

            return {
                ...state,
                pending: true,
                error: null,
            }

        }

        case fromQuestion.GET_QUESTION_SUCCESS: {

            return {
                ...state,
                pending: false,
                pullToRefresh: false,
                data: action.payload.responseList,
                totalResultCount: action.payload.totalResultCount
            };

        }

        case fromQuestion.GET_QUESTION_ERROR: {

            return {
                ...state,
                pending: false,
                error: action.payload
            };

        }

        case fromQuestion.RELOAD_QUESTION: {
            return {
                ...state,
                pullToRefresh: true,
                error: null
            };
        }

        case fromQuestion.SET_FILTER: {
            return {
                ...state,
                selectedFilter: action.playload
            }
        }

        case fromQuestion.GET_FILTER: {
            return {
                ...state
            }
        }

        case fromQuestion.RESET_FILTER: {
            return {
                ...state,
                selectedFilter: null
            }
        }

        case fromQuestion.RESET_QUESTIONS: {
            return {
                data: null,
                pending: false,
                loadMore: false,
                pullToRefresh: false,
                error: null,
                totalResultCount: 0,
                selectedFilter: null
            }
        }

    }

    return state;
}

export const getQuestionsLoading = (state: QuestionState) => state.pending;
export const getQuestionsError = (state: QuestionState) => state.error;
export const getQuestions = (state: QuestionState) => state.data;
export const updateQuestionsLoading = (state: QuestionState) => state.loadMore;
export const getSelectedFilter = (state: QuestionState) => state.selectedFilter;