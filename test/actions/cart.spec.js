/**
 * Created by allancutler on 5/9/16.
 */

import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import { API_DOMAIN } from '../../config';
import * as types from '../../constants/actionTypes';
import * as actions from '../../actions/cart';
import { CartLineItem1 } from '../fixtures/line_item';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions: cart', () => {
    describe('populateCart', () => {
        it('should create an action to populate cart', () => {
            const payload = {
                items:[]
            };
            const expectedAction = {
                type: types.POPULATE_CART,
                payload
            };

            expect(actions.populateCart(payload)).to.eql(expectedAction);
        });
    });

    describe('addItemToCart', () => {
        let store;

        beforeEach(() => {
            store = mockStore({});
        });

        afterEach(() => {
            nock.cleanAll();
        });

        it('should call actions after successful add', () => {
            // given
            const item = CartLineItem1;
            nock(API_DOMAIN)
                .post(`/api/cart/items/${item.id}`)
                .reply(200, {success: "item_add_cart"});
            nock(API_DOMAIN)
                .get('/api/cart/items?pageNo=1')
                .reply(200, []);

            const expectedActions = [
                { type: 'POPULATE_CART', payload: [] }
            ];
            // when
            return store.dispatch(actions.addItemToCart(item))
                .then(() => { // return of async actions
                    // then
                    expect(store.getActions()).to.eql(expectedActions);
                });
        });
    });

    describe('removeItemFromCart', () => {
        let store;

        beforeEach(() => {
            store = mockStore({
                cart: {
                    payload: {
                        products: [
                            CartLineItem1
                        ]
                    }
                }
            });
        });

        afterEach(() => {
            nock.cleanAll();
        });

        it('should call actions after successful removal', () => {
            // given
            const id = CartLineItem1.id;
            nock(API_DOMAIN)
                .delete(`/api/lists/cart/items/${id}`)
                .reply(200);
            nock(API_DOMAIN)
                .get('/api/lists/cart/items?pageNo=1')
                .reply(200);
            // when
            return store.dispatch(actions.removeItemFromCart(id))
                .then(() => { // return of async actions
                    // then
                    expect(store.getActions()).to.eql([]);
                });
        });
    });

    describe('clearCart', () => {
        it('should handle clearing cart', () => {
            const expectedAction = {
                type: types.CLEAR_CART
            };

            expect(actions.clearCart()).to.eql(expectedAction);
        });
    });
});
