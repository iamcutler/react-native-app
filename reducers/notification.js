/**
 * Created by allancutler on 5/3/16.
 */

import { ADD_NOTIFICATION_MESSAGE, REMOVE_NOTIFICATION_MESSAGE } from '../constants/actionTypes';

export const initialState = {
    message: null,
    level: null
};

export function NotificationReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_NOTIFICATION_MESSAGE:
            return {
                ...state,
                message: action.message,
                level: action.level
            };
        case REMOVE_NOTIFICATION_MESSAGE:
            return {
                ...state,
                message: null,
                level: null
            };
        default:
            return state;
    }
}
