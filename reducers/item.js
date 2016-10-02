/**
 * Created by allancutler on 5/10/16.
 */

import {
    QUICK_BUY_SUCCESS,
    QUICK_BUY_FAILURE,
    QUICK_BUY_ACTIVE,
    QUICK_BUY_UNACTIVE
} from '../constants/actionTypes';

const initialState = {
    quickbuy: {
        active: false,
        success: false,
        showWeb: false,
        id: ''
    }
};

export default function ItemReducer(state = initialState, action) {
    switch(action.type) {
        case QUICK_BUY_SUCCESS:
            return {
                ...state,
                quickbuy: {
                    ...state.quickbuy,
                    success: true,
                    showWeb: false
                }
            };
        case QUICK_BUY_FAILURE:
            return {
                ...state,
                quickbuy: {
                    ...state.quickbuy,
                    success: false,
                    showWeb: true,
                    id: action.id
                }
            };
        case QUICK_BUY_ACTIVE:
            return {
                ...state,
                quickbuy: {
                    ...state.quickbuy,
                    active: true
                }
            };
        case QUICK_BUY_UNACTIVE:
            return {
                ...state,
                quickbuy: {
                    ...state.quickbuy,
                    active: false
                }
            };
        default:
            return state;
    }
}
