/**
 * Created by allancutler on 5/3/16.
 */

const initialState = {
    isLoggedIn: false,
    isAttemptingToLogin: false,
    loginFailed: false
};

import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    USER_LOGOUT
} from '../constants/actionTypes';

export default function AuthReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_ATTEMPT:
            return {
                ...state,
                isAttemptingToLogin: action.isAttemptingToLogin
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                loginFailed: false
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                loginFailed: true
            };
        case USER_LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            };
        default:
            return state;
    }
}
