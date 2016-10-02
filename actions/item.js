/**
 * Created by allancutler on 5/10/16.
 */

import {
    QUICK_BUY_SUCCESS,
    QUICK_BUY_FAILURE,
    QUICK_BUY_ACTIVE,
    QUICK_BUY_UNACTIVE
} from '../constants/actionTypes';
import * as CalledService from '../services';
import { clearCart } from '../actions/cart';

export function quickBuySuccess() {
    return {
        type: QUICK_BUY_SUCCESS
    };
}

export function quickBuyFailure(id) {
    return {
        type: QUICK_BUY_FAILURE,
        id
    };
}

export function quickBuyActive() {
    return {
        type: QUICK_BUY_ACTIVE
    };
}

export function quickBuyUnactive() {
    return {
        type: QUICK_BUY_UNACTIVE
    };
}

export function performQuickBuy() {
    return dispatch => {
        dispatch(quickBuyActive());

        // PR create
        CalledService.create({
                checkoutCartItems: true
            })
            .then(response => response.json())
            .then(request => {
                dispatch(clearCart());

                // check errors in request
                if(Array.isArray(request.errors) && request.errors.length) {
                    dispatch(quickBuyFailure(request.id));
                    return;
                }

                // submit request if no errors are present
                CalledService.submit(request.data)
                    .then(response => response.json())
                    .then(() => {
                        dispatch(quickBuySuccess());
                    })
                    .catch(err => {
                        console.error(err);
                        dispatch(quickBuyFailure(request.id));
                    });
            })
            .catch(err => {
                console.error(err);
                dispatch(quickBuyFailure());
            });
    };
}
