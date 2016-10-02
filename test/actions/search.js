/**
 * Created by allancutler on 5/25/16.
 */

import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../../constants/actionTypes';
import * as actions from '../../actions/search';
import { Search1 } from '../fixtures/search';
import { API_DOMAIN } from '../../config';
import { SEARCH_PAGE_SIZE } from '../../constants/constants';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions: search', () => {
    describe('populateSearchResults', () => {
        it('should return action creator', () => {
            // given
            const results = Search1;
            const expectedAction = {
                type: types.POPULATE_SEARCH_RESULTS,
                results
            };
            // when
            const result = actions.populateSearchResults(results);
            // then
            expect(result).to.eql(expectedAction);
        });
    });

    describe('paginateSearchResults', () => {
        it('should return action creator', () => {
            // given
            const results = Search1;
            const expectedAction = {
                type: types.PAGINATE_SEARCH_RESULTS,
                results
            };
            // when
            const result = actions.paginateSearchResults(results);
            // then
            expect(result).to.eql(expectedAction);
        });
    });

    describe('setSearchString', () => {
        it('should return action creator', () => {
            // given
            const queryString = 'paper towels';
            const expectedAction = {
                type: types.SET_SEARCH_STRING,
                queryString
            };
            // when
            const result = actions.setSearchString(queryString);
            // then
            expect(result).to.eql(expectedAction);
        });
    });

    describe('clearSearch', () => {
        it('should return action creator', () => {
            // given
            const expectedAction = {
                type: types.CLEAR_SEARCH,
                queryString: ''
            };
            // when
            const result = actions.clearSearch();
            // then
            expect(result).to.eql(expectedAction);
        });
    });

    describe('loadingSearchResults', () => {
        it('should return action creator', () => {
            // given
            const isLoading = true;
            const expectedAction = {
                type: types.SEARCH_IS_LOADING,
                isLoading
            };
            // when
            const result = actions.loadingSearchResults(isLoading);
            // then
            expect(result).to.eql(expectedAction);
        });
    });
});
