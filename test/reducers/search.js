/**
 * Created by allancutler on 5/26/16.
 */

import { expect } from 'chai';
import * as types from '../../constants/actionTypes';
import { initialState, SearchReducer } from '../../reducers/search';
import { Search1 } from '../fixtures/search';

describe('reducer: search', () => {
    it('should return initial state', () => {
        // given
        // when
        const result = SearchReducer(undefined, []);
        // then
        expect(result).to.eql(initialState);
    });

    it('should handle SET_SEARCH_STRING', () => {
        // given
        const queryString = 'john smith';
        const expectedState = {
            ...initialState,
            queryString
        };
        // when
        const result = SearchReducer(initialState, {
            type: types.SET_SEARCH_STRING,
            queryString
        });
        // then
        expect(result).to.eql(expectedState);
    });

    it('should handle CLEAR_SEARCH', () => {
        // given
        const expectedState = {
            ...initialState,
            queryString: ''
        };
        // when
        const result = SearchReducer(initialState, {
            type: types.CLEAR_SEARCH
        });
        // then
        expect(result).to.eql(expectedState);
    });

    it('should handle SEARCH_IS_LOADING', () => {
        // given
        const isLoading = true;
        const expectedState = {
            ...initialState,
            isLoading
        };
        // when
        const result = SearchReducer(initialState, {
            type: types.SEARCH_IS_LOADING,
            isLoading
        });
        // then
        expect(result).to.eql(expectedState);
    });

    it('should handle POPULATE_SEARCH_RESULTS', () => {
        // given
        const results = Search1;
        const expectedState = {
            ...initialState,
            results
        };
        // when
        const result = SearchReducer(initialState, {
            type: types.POPULATE_SEARCH_RESULTS,
            results
        });
        // then
        expect(result).to.eql(expectedState);
    });

    it('should handle PAGINATE_SEARCH_RESULTS', () => {
        // given
        const searchResults = Search1;
        const firstState = {
            ...initialState,
            results: searchResults
        };
        const expectedState = {
            ...initialState,
            results: {
                items: [
                    ...searchResults.items,
                    ...searchResults.items
                ],
                pagination: searchResults.pagination
            }
        };
        // when
        const result = SearchReducer(firstState, {
            type: types.PAGINATE_SEARCH_RESULTS,
            results: searchResults
        });
        // then
        expect(result).to.eql(expectedState);
    });
});
