/**
 * Created by allancutler on 5/5/16.
 */

import { POPULATE_ANNOUNCEMENTS } from '../constants/actionTypes';

export const initialState = {
    count: 0,
    payload: []
};

export function AnnouncementReducer(state = initialState, action) {
    switch(action.type) {
        case POPULATE_ANNOUNCEMENTS:
            return {
                ...state,
                payload: action.payload,
                count: action.payload.length
            };
        default:
            return state;
    }
}
