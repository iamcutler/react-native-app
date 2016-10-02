/**
 * Created by allancutler on 5/4/16.
 */

import { API_DOMAIN } from '../config';
import {
    POPULATE_CART,
    CLEAR_CART
} from '../constants/actionTypes';

const CART_ITEMS_ENDPOINT = `${API_DOMAIN}/api/cart/items`;

export function populateCart(payload) {
    return {
        type: POPULATE_CART,
        payload
    };
}

export function clearCart() {
    return {
        type: CLEAR_CART
    }
}

/**
 * Add item to cart (async)
 *
 * @param {object} item
 * @param {number|string} item.id
 * @returns {function} - dispatch
 */
export function addItemToCart(item) {
    return dispatch => {
        return fetch(`${CART_ITEMS_ENDPOINT}/${item.id}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            })
            .then(response => response.json())
            .then(() => dispatch(fetchCart()))
            .catch(err => console.error(err));
    };
}

/**
 * Remove item to cart (async)
 *
 * @param {number|string} id
 * @returns {function} - dispatch
 */
export function removeItemFromCart(id) {
    return dispatch => {
        return fetch(`${CART_ITEMS_ENDPOINT}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(() => dispatch(fetchCart()))
            .catch(err => console.error(err));
    };
}

export function fetchCart() {
    return dispatch => {
        return fetch(`${CART_ITEMS_ENDPOINT}?pageNo=1`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if(response.status === 200) {
                    return response.json();
                }

                throw "Error populating your cart";
            })
            .then(result => dispatch(populateCart(result)))
            .catch(err => console.log(err));
    };
}
