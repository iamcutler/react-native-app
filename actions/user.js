/**
 * Created by allancutler on 5/4/16.
 */

import { API_DOMAIN } from '../config';
import { ADD_USER_PROFILE } from '../constants/actionTypes';

export function addUserProfile(profile) {
    return {
        type: ADD_USER_PROFILE,
        profile
    };
}

export function fetchUserProfile() {
    return dispatch => {
        return fetch(`${API_DOMAIN}/api/profile`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if(response.status === 200) {
                    return response.json();
                }

                throw "Error getting user profile";
            })
            .then(result => {
                dispatch(addUserProfile(result));
            });
    };
}
