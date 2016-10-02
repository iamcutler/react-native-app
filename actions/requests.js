/**
 * Created by allancutler on 5/5/16.
 */

import { API_DOMAIN } from '../config';
import {
    POPULATE_REQUEST_DASHBOARD,
    POPULATE_REQUEST_STATUS,
    FETCH_REQUEST_STATUS,
    CLEAR_REQUEST_STATUS,
    LOADING_DOCUMENT_STATUS
} from '../constants/actionTypes';
import { REQUEST_STATUS_DRAFT } from '../constants/constants';

export function populateRequestsDashboard(suppliers) {
    return {
        type: POPULATE_REQUEST_DASHBOARD,
        dashboard: suppliers.results
    };
}

export function populateRequestStatus(payload) {
    return {
        type: POPULATE_REQUEST_STATUS,
        payload
    };
}

export function initialRequestStatus(payload) {
    return {
        type: FETCH_REQUEST_STATUS,
        payload
    };
}

export function clearRequestStatus() {
    return {
        type: CLEAR_REQUEST_STATUS
    };
}

export function loadingRequestStatus(isLoading) {
    return {
        type: LOADING_DOCUMENT_STATUS,
        isLoading
    };
}

export function fetchDashboardRequests() {
    const params = {currentPage: 1, pageSize: 5, status: 'ALL'};

    return fetchRequestsByStatus(params, populateRequestsDashboard);
}

export function fetchInitialRequestStatus(params = {currentPage: 1, pageSize: 20, status: REQUEST_STATUS_DRAFT}) {
    return fetchRequestsByStatus(params, initialRequestStatus);
}

export function fetchRequestStatus(params = {currentPage: 1, pageSize: 20, status: REQUEST_STATUS_DRAFT}) {
    return fetchRequestsByStatus(params, populateRequestStatus);
}

export function fetchRequestsByStatus(params = {
    currentPage: 1,
    pageSize: 20,
    status: 'ALL'
}, actionCreator) {
    return dispatch => {
        dispatch(loadingRequestStatus(true));

        return fetch(`${API_DOMAIN}/api/requests?currentPage=${params.currentPage}&pageSize=${params.pageSize}&status=${params.status}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if(response.status === 200) {
                    return response.json();
                }

                throw "Error getting requests by status";
            })
            .then(result => {
                dispatch(actionCreator(result));
                dispatch(loadingRequestStatus(false));
            })
            .catch(err => {
                console.log(err);
                dispatch(loadingRequestStatus(false));
            });
    };
}
