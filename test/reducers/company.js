/**
 * Created by allancutler on 5/25/16.
 */

import React from 'react';
import { expect } from 'chai';
import * as actions from '../../constants/actionTypes';
import { initialState, CompanyReducer } from '../../reducers/company';
import { CompanySettings1 } from '../fixtures/company';

describe('reducer: company', () => {
    it('should return initial state', () => {
        // given
        // when
        let results = CompanyReducer(undefined, []);
        // then
        expect(results).to.eql(initialState);
    });

    it('should add company settings to store', () => {
        // given
        const expectedState = CompanySettings1;
        // when
        let results = CompanyReducer(initialState, {
            type: actions.ADD_COMPANY_SETTINGS,
            settings: CompanySettings1
        });
        // then
        expect(results.settings).to.eql(expectedState);
    });
});
