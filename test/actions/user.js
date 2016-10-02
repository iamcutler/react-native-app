/**
 * Created by allancutler on 5/25/16.
 */

import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { API_DOMAIN } from '../../config';
import * as types from '../../constants/actionTypes';
import * as actions from '../../actions/user';
import { UserProfile1 } from '../fixtures/user';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions: user', () => {
    describe('addUserProfile', () => {
        it('should return action creator', () => {
            // given
            const profile = UserProfile1;
            const expectedAction = {
                type: types.ADD_USER_PROFILE,
                profile
            };
            // when
            const result = actions.addUserProfile(profile);
            // then
            expect(result).to.eql(expectedAction);
        });
    });

    describe('fetchUserProfile', () => {
        let store;

        beforeEach(() => {
            store = mockStore({});
        });

        afterEach(() => {
            nock.cleanAll();
        });

        it('should call addUserProfile action', () => {
            // given
            const profile = UserProfile1
            nock(API_DOMAIN)
                .get('/api/profile')
                .reply(200, profile);
            const expectedActions = [
                { type: types.ADD_USER_PROFILE, profile }
            ];
            // when
            return store.dispatch(actions.fetchUserProfile())
                .then(() => {
                    // then
                    expect(store.getActions()).to.eql(expectedActions);
                });
        });
    });
});
