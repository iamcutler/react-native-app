/**
 * Created by allancutler on 5/4/16.
 */

import { POPULATE_CART, CLEAR_CART } from '../constants/actionTypes';

const initialState = {
    payload: {},
    count: 0
};

export default function CartReducer(state = initialState, action) {
    switch(action.type) {
        case POPULATE_CART:
            return {
                ...state,
                payload: action.payload,
                count: getCartCount(action.payload.products)
            };
        case CLEAR_CART:
            return {
                ...state,
                payload: {},
                count: 0
            };
        default:
            return state;
    }
}

/**
 * Calculate cart count by item quantity
 *
 * @param {array} bundles
 * @returns {number}
 */
function getCartCount(bundles = []) {
    try {
        return bundles.reduce((prev, bundle) => {
            let count = 0;

            bundle.items.forEach((item) => {
                count += Number(item.quantity);
            });

            return prev + count;
        }, 0);
    } catch(e) {
        return 0;
    }
}