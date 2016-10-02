/**
 * Created by allancutler on 5/26/16.
 */

import { expect } from 'chai';
import * as types from '../../constants/actionTypes';
import { initialState, UserReducer} from '../../reducers/user'
import { UserProfile1 } from '../fixtures/user';

describe('reducer: user', () => {
    it('should return initial state', () => {
        // given
        // when
        const result = UserReducer(undefined, []);
        // then
        expect(result).to.eql(initialState);
    });

    it('should add user profile to state', () => {
        // given
        const profile = UserProfile1;
        const expectedState = {
            ...initialState,
            profile
        };
        // when
        const result = UserReducer(initialState, {
            type: types.ADD_USER_PROFILE,
            profile
        });
        // then
        expect(result).to.eql(expectedState);
    });
});
