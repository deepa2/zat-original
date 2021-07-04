import * as fromSearch from '../actions/search.action';

export interface SearchState {
    data: any,
    totalResults: any,
    pending: boolean,
    url: string,
    error: any,
    loadMore: boolean,
    pullToRefresh: boolean,
    recentSearch: Array<any>
}

const initialState: SearchState = {
    data: null,
    totalResults: 0,
    pending: false,
    url: null,
    error: null,
    loadMore: false,
    pullToRefresh: false,
    recentSearch: []

}

export function reducer(state = initialState, action: fromSearch.SearchAction): SearchState {

    // ;

    switch (action.type) {

        //normal search
        case fromSearch.OVERALL_SEARCH: {

            if (!state.recentSearch.includes(action.payload.searchText)) {
                return {
                    ...state,
                    pending: true,
                    error: null,
                    recentSearch: [...state.recentSearch, action.payload.searchText]
                };
            }
        }

        case fromSearch.OVERALL_SEARCH_SUCCESS: {
            return {
                ...state,
                pending: false,
                url: action.url,
                totalResults: action.payload.totalResultCount,
                data: action.payload.responseList
            };
        }

        case fromSearch.OVERALL_SEARCH_FAIL: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }

        case fromSearch.OVERALL_SEARCH_CLEAR: {
            return {
                ...state,
                recentSearch: []
            }
        }

        //infinite scroll
        case fromSearch.UPDATE_SEARCH: {
            return {
                ...state,
                loadMore: true,
                error: null
            };
        }

        case fromSearch.UPDATE_SEARCH_SUCCESS: {
            let newdata = state.data ? state.data.concat(action.payload.responseList) : action.payload.responseList;
            return {
                ...state,
                loadMore: false,
                totalResults: action.payload.totalResultCount,
                data: newdata
            };

        }

        case fromSearch.UPDATE_SEARCH_FAIL: {
            return {
                ...state,
                loadMore: false,
                error: action.payload
            };
        }

        case fromSearch.RESET_SEARCH: {
            // return initialState;
            return {
                ...state,
                data: null
            }
        }

    }

    return state;
}

export const getSearchLoading = (state: SearchState) => state.pending;
export const getTodosError = (state: SearchState) => state.error;
export const getSearchData = (state: SearchState) => state.data;
export const updateSearchLoading = (state: SearchState) => state.loadMore;
export const getSearchText = (state: SearchState) => state.recentSearch;