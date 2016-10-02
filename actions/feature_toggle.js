/**
 * Created by allancutler on 5/4/16.
 */

import { API_DOMAIN } from '../config';
import { POPULATE_FEATURE_TOGGLES } from '../constants/actionTypes';

export function populateFeatureToggles(toggles) {
    return {
        type: POPULATE_FEATURE_TOGGLES,
        toggles
    }
}

export function fetchFeatureToggles() {
    return dispatch => {
        return fetch(`${API_DOMAIN}/api/feature-toggles`)
            .then(response => {
                if(response.status === 200) {
                    return response.json();
                }

                throw "Error getting feature toggles";
            })
            .then(result => dispatch(populateFeatureToggles(result)))
            .catch(err => console.error(err));
    };
}
