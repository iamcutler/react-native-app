/**
 * Created by allancutler on 5/25/16.
 */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';
import { API_DOMAIN } from '../../config';
import * as types from '../../constants/actionTypes';
import * as actions from '../../actions/announcement';
import { Announcements1 } from '../fixtures/announcement';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions: announcement', () => {
    describe('populateAnnouncements', () => {
        it('should return action creator', () => {
            // given
            const payload = Announcements1;
            const expectedAction = {
                type: types.POPULATE_ANNOUNCEMENTS,
                payload
            };
            // when
            const result = actions.populateAnnouncements(payload);
            // then
            expect(result).to.eql(expectedAction);
        });
    });

    describe('fetchAnnouncements', () => {
        let store;

        beforeEach(() => {
            store = mockStore({});
        });

        afterEach(() => {
            nock.cleanAll();
        });

        describe('on success', () => {
            it('should dispatch expected actions', () => {
                // given
                nock(API_DOMAIN)
                    .get('/api/announcements')
                    .reply(200, Announcements1);
                const expectedActions = [
                    { type: types.POPULATE_ANNOUNCEMENTS, payload: Announcements1 }
                ];
                // when
                return store.dispatch(actions.fetchAnnouncements())
                    .then(() => { // return async actions
                        // then
                        expect(store.getActions()).to.eql(expectedActions);
                    });
            });
        });
    });
});
