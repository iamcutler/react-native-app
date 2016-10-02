/**
 * Created by allancutler on 5/3/16.
 */

import {
    SET_SEARCH_STRING,
    CLEAR_SEARCH,
    SEARCH_IS_LOADING,
    POPULATE_SEARCH_RESULTS,
    PAGINATE_SEARCH_RESULTS
} from '../constants/actionTypes';
import { API_DOMAIN } from '../config';
import { SEARCH_PAGE_SIZE } from '../constants/constants';

export function populateSearchResults(results) {
    return {
        type: POPULATE_SEARCH_RESULTS,
        results
    };
}

export function paginateSearchResults(results) {
    return {
        type: PAGINATE_SEARCH_RESULTS,
        results
    };
}

export function setSearchString(searchString) {
    return {
        type: SET_SEARCH_STRING,
        queryString: searchString
    };
}

export function clearSearch() {
    return {
        type: CLEAR_SEARCH,
        queryString: ''
    };
}

export function loadingSearchResults(isLoading) {
    return {
        type: SEARCH_IS_LOADING,
        isLoading
    };
}

/**
 * Perform search
 * @param {string} queryString
 * @param {object} params
 * @param {string} params.searchName
 * @param {number} params.pageNumber
 * @param {number} params.pageSize
 * @param {boolean} paginate
 * @returns {Function}
 */
export function performSearch(queryString = '*', params = {
                                                        searchName: '',
                                                        pageNumber: 1,
                                                        pageSize: SEARCH_PAGE_SIZE}, paginate = false) {
    return dispatch => {
        if(!paginate) dispatch(loadingSearchResults(true));

        return fetch(`${API_DOMAIN}/api/items/search?keyword=${queryString}&pageNo=${params.pageNumber}&recordsPerPage=${params.pageSize}&sortBy=RELEVANCY`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if(response.status === 200) {
                    return response.json();
                }

                throw "Request failed";
            })
            .then(results => {
                if(paginate) {
                    dispatch(paginateSearchResults(results));
                }
                else {
                    dispatch(populateSearchResults(results));
                }
            })
            .catch(err => console.log(err))
            .finally(() => {
                dispatch(setSearchString(params.searchName || queryString));

                if(!paginate) dispatch(loadingSearchResults(false));
            });
    };
}
