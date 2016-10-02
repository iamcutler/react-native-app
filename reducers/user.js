/**
 * Created by allancutler on 5/3/16.
 */

import { ADD_USER_PROFILE } from '../constants/actionTypes';

export const initialState = {
    profile: {
        firstName: '',
        lastName: '',
        jobTitle: '',
        avatar: ''
    }
};

export function UserReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
}
