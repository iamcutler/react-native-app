/**
 * Created by allancutler on 5/25/16.
 */

import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import * as actions from '../../actions/feature_toggle';
import * as types from '../../constants/actionTypes';
import { API_DOMAIN } from '../../config';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const toggles = {
    pocr: true
};

describe('actions: feature_toggle:', () => {
    describe('populateFeatureToggles:', () => {
        it('should create an action to populate toggles in store', () => {
            // given
            const expectedAction = {
                type: types.POPULATE_FEATURE_TOGGLES,
                toggles
            };
            // when
            let result = actions.populateFeatureToggles(toggles);
            // then
            expect(result).to.eql(expectedAction);
        });
    });

    describe('fetchFeatureToggles', () => {
        let store;

        beforeEach(() => {
            store = mockStore({});
        });

        afterEach(() => {
            nock.cleanAll()
        });

        it('should call api to get toggles and fire actions', () => {
            nock(API_DOMAIN)
                .get('/api/feature-toggles')
                .reply(200, toggles);

            const expectedActions = [
                { type: types.POPULATE_FEATURE_TOGGLES, toggles }
            ];

            return store.dispatch(actions.fetchFeatureToggles())
                .then(() => { // return of async action
                    expect(store.getActions()).to.eql(expectedActions);
                });
        });
    });
});
