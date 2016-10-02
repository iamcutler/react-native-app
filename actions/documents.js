/**
 * Created by allancutler on 5/5/16.
 */

import { API_DOMAIN } from '../config';
import { POPULATE_DASHBOARD_DOCUMENT_COUNTS } from '../constants/actionTypes';

export function populateDashboardDocumentCounts(counts) {
    return {
        type: POPULATE_DASHBOARD_DOCUMENT_COUNTS,
        counts
    };
}

export function fetchDocumentCounts() {
    return dispatch => {
        return fetch(`${API_DOMAIN}/api/purchase-documents/count/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if(response.status === 200) {
                    return response.json();
                }

                throw "Error getting document counts";
            })
            .then(result => {
                dispatch(populateDashboardDocumentCounts(result));
            })
            .catch(err => console.log(err));
    };
}
