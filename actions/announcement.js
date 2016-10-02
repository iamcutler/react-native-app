/**
 * Created by allancutler on 5/5/16.
 */

import { API_DOMAIN } from '../config';
import { POPULATE_ANNOUNCEMENTS } from '../constants/actionTypes';

export function populateAnnouncements(payload) {
    return {
        type: POPULATE_ANNOUNCEMENTS,
        payload
    };
}

export function fetchAnnouncements() {
    return dispatch => {
        return fetch(`${API_DOMAIN}/api/announcements`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if(response.status === 200) {
                    return response.json();
                }

                throw "Error getting announcements";
            })
            .then(result => {
                dispatch(populateAnnouncements(result));
            })
            .catch(err => console.log(err));
    };
}
