/**
 * Created by allancutler on 5/2/16.
 */

import {
    SET_SEARCH_STRING,
    CLEAR_SEARCH,
    SEARCH_IS_LOADING,
    POPULATE_SEARCH_RESULTS,
    PAGINATE_SEARCH_RESULTS
} from '../constants/actionTypes';

export const initialState = {
    queryString: '',
    isLoading: false,
    results: {
        items: [],
        pagination: {
            currentPageNumber: 1,
            pageSize: 20,
            totalNumberOfPages: 1
        }
    }
};

export function SearchReducer(state = initialState, action) {
    switch(action.type) {
        case SET_SEARCH_STRING:
            return {
                ...state,
                queryString: action.queryString
            };
        case CLEAR_SEARCH:
            return {
                ...state,
                queryString: ''
            };
        case SEARCH_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case POPULATE_SEARCH_RESULTS:
            return {
                ...state,
                results: action.results
            };
        case PAGINATE_SEARCH_RESULTS:
            return {
                ...state,
                results: {
                    items: [
                        ...state.results.items,
                        ...action.results.items
                    ],
                    pagination: action.results.pagination
                }
            };
        default:
            return state;
    }
}
