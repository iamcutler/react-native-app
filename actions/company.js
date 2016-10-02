/**
 * Created by allancutler on 5/4/16.
 */

import { API_DOMAIN } from '../config';
import { ADD_COMPANY_SETTINGS } from '../constants/actionTypes';

export function addCompanySettings(settings) {
    return {
        type: ADD_COMPANY_SETTINGS,
        settings
    };
}

export function fetchCompanySettings() {
    return dispatch => {
        return fetch(`${API_DOMAIN}/api/company/settings`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if(response.status === 200) {
                return response.json();
            }

            throw "Error getting company settings";
        }).then(result => {
            dispatch(addCompanySettings(result));
        });
    };
}
