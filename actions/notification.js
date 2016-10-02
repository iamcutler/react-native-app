/**
 * Created by allancutler on 5/3/16.
 */

import {
    ADD_NOTIFICATION_MESSAGE,
    REMOVE_NOTIFICATION_MESSAGE
} from '../constants/actionTypes';

export function addNotificationMessage(message, level = 'warning') {
    return {
        type: ADD_NOTIFICATION_MESSAGE,
        message,
        level
    };
}

export function removeNotificationMessage() {
    return {
        type: REMOVE_NOTIFICATION_MESSAGE
    };
}
