/**
 * Created by allancutler on 5/4/16.
 */

import { ADD_COMPANY_SETTINGS } from '../constants/actionTypes';

export const initialState = {
    settings: {}
};

export function CompanyReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_COMPANY_SETTINGS:
            return {
                ...state,
                settings: action.settings
            };
        default:
            return state;
    }
}
