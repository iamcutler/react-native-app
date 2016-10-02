/**
 * Created by allancutler on 5/9/16.
 */

import { expect } from 'chai';
import AuthReducer from '../../reducers/authentication';
import * as types from '../../constants/actionTypes';

describe('reducer: authentication', () => {
    it('should return the initial state', () => {
        const initialState = {
            isLoggedIn: false,
            isAttemptingToLogin: false,
            loginFailed: false
        };

        expect(AuthReducer(undefined, {})).to.eql(initialState);
    });

    it('should handle LOGIN_ATTEMPT', () => {
        const isAttemptingToLogin = true;
        const expectedState = {
            isAttemptingToLogin
        };

        const result = AuthReducer([], {
            type: types.LOGIN_ATTEMPT,
            isAttemptingToLogin
        });

        expect(result).to.eql(expectedState);
    });

    it('should handle LOGIN_SUCCESS', () => {
        const expectedState = {
            isLoggedIn: true,
            loginFailed: false
        };

        const result = AuthReducer([], {
            type: types.LOGIN_SUCCESS
        });

        expect(result).to.eql(expectedState);
    });

    it('should handle LOGIN_FAILURE', () => {
        const expectedState = {
            isLoggedIn: false,
            loginFailed: true
        };

        const result = AuthReducer([], {
            type: types.LOGIN_FAILURE
        });

        expect(result).to.eql(expectedState);
    });

    it('should handle USER_LOGOUT', () => {
        const expectedState = {
            isLoggedIn: false
        };

        const result = AuthReducer([], {
            type: types.USER_LOGOUT
        });

        expect(result).to.eql(expectedState);
    });
});
