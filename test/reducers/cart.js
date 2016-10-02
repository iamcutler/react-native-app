/**
 * Created by allancutler on 5/9/16.
 */

import { expect } from 'chai';
import * as types from '../../constants/actionTypes';
import CartReducer from '../../reducers/cart';

describe('reducer: cart', () => {
    it('should return initial state', () => {
        const result = CartReducer(undefined, {});

        expect(result).to.eql({
            count: 0,
            payload: {}
        });
    });

    it('should handle POPULATE_CART', () => {
        const payload = {
            products: [{
                items: [{
                    quantity: 1
                }]
            }]
        };
        const expectState = {
            count: 1,
            payload
        };

        const result = CartReducer([], {
            type: types.POPULATE_CART,
            payload
        });

        expect(result).to.eql(expectState);
    });

    it('should return count of 0 if cart is empty', () => {
        const payload = {
            products: []
        };
        const expectState = {
            count: 0,
            payload
        };

        const result = CartReducer([], {
            type: types.POPULATE_CART,
            payload
        });

        expect(result).to.eql(expectState);
    });

    it('should handle CLEAR_CART', () => {
        const expectedState = {
            payload: {},
            count: 0
        };

        const result = CartReducer([], {
            type: types.CLEAR_CART
        });

        expect(result).to.eql(expectedState);
    });
});
