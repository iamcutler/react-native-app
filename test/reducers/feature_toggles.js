/**
 * Created by allancutler on 5/26/16.
 */

import { expect } from 'chai';
import { initialState, FeatureToggleReducer } from '../../reducers/feature_toggles';

describe('reducer: feature toggle', () => {
    it('should return initial state', () => {
        // given
        // when
        const result = FeatureToggleReducer(undefined, []);
        // then
        expect(result).to.eql(initialState);
    });
});
