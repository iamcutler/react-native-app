/**
 * Created by allancutler on 5/3/16.
 */

import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    USER_LOGOUT
} from '../constants/actionTypes';
import { AUTH_DOMAIN, API_DOMAIN } from '../config';
import { addNotificationMessage, removeNotificationMessage } from '../actions/notification';
import { NOTIFICATION_LEVEL_DANGER } from '../constants/constants';

export function attemptingToLogin(isAttemptingToLogin) {
    return {
        type: LOGIN_ATTEMPT,
        isAttemptingToLogin
    };
}

export function loginSuccess() {
    return {
        type: LOGIN_SUCCESS
    };
}

export function loginFailure(errorMessage) {
    return {
        type: LOGIN_FAILURE,
        errorMessage
    };
}

export function logoutUser() {
    return {
        type: USER_LOGOUT
    };
}

export function fetchAuthentication(email, password) {
    return dispatch => {
        dispatch(attemptingToLogin(true));

        return fetch(`${AUTH_DOMAIN}/authenticate`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email, password
                })
            })
            .then(response => response.json())
            .then(body => {
                if(body.status === 'success') {
                    dispatch(loginSuccess());
                    dispatch(removeNotificationMessage());
                }
                else {
                    dispatch(loginFailure());
                    dispatch(addNotificationMessage(body.errorMessage, NOTIFICATION_LEVEL_DANGER));
                }

                dispatch(attemptingToLogin(false));
            })
            .catch(() => {
                dispatch(loginFailure());
                dispatch(attemptingToLogin(false));
            });
    };
}

export function fetchUserLogout() {
    return dispatch => {
        // Optimistic UI
        dispatch(logoutUser());

        return fetch(`${API_DOMAIN}/logout`, {
                method: 'GET'
            })
            .then(response => response.json());
    };
}
