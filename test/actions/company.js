/**
 * Created by allancutler on 5/25/16.
 */

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { expect } from 'chai';
import nock from 'nock';
import { API_DOMAIN } from '../../config';
import * as types from '../../constants/actionTypes';
import * as actions from '../../actions/company';
import { CompanySettings1 } from '../fixtures/company';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions: company', () => {
    describe('addCompanySettings', () => {
        it('should return action creator', () => {
            // given
            const settings = CompanySettings1;
            const expectedAction = {
                type: types.ADD_COMPANY_SETTINGS,
                settings
            };
            // when
            const result = actions.addCompanySettings(settings);
            // then
            expect(result).to.eql(expectedAction);
        });
    });

    describe('fetchCompanySettings', () => {
        let store;

        beforeEach(() => {
            store = mockStore({});
        });

        afterEach(() => {
            nock.cleanAll();
        });

        it('should call expected actions', () => {
            // given
            nock(API_DOMAIN)
                .get('/api/company/settings')
                .reply(200, CompanySettings1);
            const expectedActions = [
                { type: types.ADD_COMPANY_SETTINGS, settings: CompanySettings1 }
            ];
            // when
            return store.dispatch(actions.fetchCompanySettings())
                .then(() => {
                    // then
                    expect(store.getActions()).to.eql(expectedActions);
                });
        });
    });
});
