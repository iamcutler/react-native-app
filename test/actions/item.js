/**
 * Created by allancutler on 5/9/16.
 */

import { expect } from 'chai';
import * as types from '../../constants/actionTypes';
import * as actions from '../../actions/item';

describe('actions: item', () => {
    describe('quickBuy actions', () => {
        it('should handle success', () => {
            const expectedAction = {
                type: types.QUICK_BUY_SUCCESS
            };

            expect(actions.quickBuySuccess()).to.eql(expectedAction);
        });

        it('should handle failure', () => {
            const id = '4234435344655654';
            const expectedAction = {
                type: types.QUICK_BUY_FAILURE,
                id
            };

            expect(actions.quickBuyFailure(id)).to.eql(expectedAction);
        });

        it('should handle active state', () => {
            const expectedAction = {
                type: types.QUICK_BUY_ACTIVE
            };

            expect(actions.quickBuyActive()).to.eql(expectedAction);
        });

        it('should handle unactive state', () => {
            const expectedAction = {
                type: types.QUICK_BUY_UNACTIVE
            };

            expect(actions.quickBuyUnactive()).to.eql(expectedAction);
        });
    });
});
