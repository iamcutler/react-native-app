/**
 * Created by allancutler on 5/10/16.
 */

import { expect } from 'chai';
import * as types from '../../constants/actionTypes';
import ItemReducer from '../../reducers/item';

describe('reducer: item', () => {
    const initialState = {
        quickbuy: {
            active: false,
            success: false,
            showWeb: false,
            id: ''
        }
    };

    it('should return initial state', () => {
        // given
        // when
        let result = ItemReducer(undefined, {});
        // then
        expect(result).to.eql(initialState);
    });

    it('should handle QUICK_BUY_SUCCESS', () => {
        // given
        const expectedState = {
            ...initialState.quickbuy,
            success: true,
            showWeb: false
        };
        // when
        let result = ItemReducer(initialState, {
            type: types.QUICK_BUY_SUCCESS
        });
        // then
        expect(result.quickbuy).to.eql(expectedState);
    });

    it('should handle QUICK_BUY_FAILURE', () => {
        // given
        const id = '23443243243235';
        const expectedState = {
            ...initialState.quickbuy,
            success: false,
            showWeb: true,
            id
        };
        // when
        let result = ItemReducer(initialState, {
            type: types.QUICK_BUY_FAILURE,
            id
        });
        // then
        expect(result.quickbuy).to.eql(expectedState);
    });

    it('should handle QUICK_BUY_ACTIVE', () => {
        // given
        const expectedState = {
            ...initialState.quickbuy,
            active: true
        };
        // when
        let result = ItemReducer(initialState, {
            type: types.QUICK_BUY_ACTIVE
        });
        // then
        expect(result.quickbuy).to.eql(expectedState);
    });

    it('should handle QUICK_BUY_UNACTIVE', () => {
        // given
        const expectedState = {
            ...initialState.quickbuy,
            active: false
        };
        // when
        let result = ItemReducer(initialState, {
            type: types.QUICK_BUY_UNACTIVE
        });
        // then
        expect(result.quickbuy).to.eql(expectedState);
    });
});
