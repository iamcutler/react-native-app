import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import * as actions from '../../actions/authentication';
import * as types from '../../constants/actionTypes';
import { AUTH_DOMAIN } from '../../config';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions: authentication', () => {
    describe('attemptingToLogin:', () => {
        it('should create an action setting attempting to login to true', () => {
            const isAttemptingToLogin = true;
            const expectedAction = {
                type: types.LOGIN_ATTEMPT,
                isAttemptingToLogin
            };

            expect(actions.attemptingToLogin(isAttemptingToLogin)).to.eql(expectedAction);
        });

        it('should create an action setting attempting to login to false', () => {
            const isAttemptingToLogin = false;
            const expectedAction = {
                type: types.LOGIN_ATTEMPT,
                isAttemptingToLogin
            };

            expect(actions.attemptingToLogin(isAttemptingToLogin)).to.eql(expectedAction);
        });
    });

    describe('loginSuccess', () => {
        it('should create an action of login success', () => {
            const expectedAction = {
                type: types.LOGIN_SUCCESS
            };

            expect(actions.loginSuccess()).to.eql(expectedAction);
        });
    });

    describe('loginFailure', () => {
        it('should create an action of login failure with message', () => {
            const errorMessage = 'Can not login you in';
            const expectedAction = {
                type: types.LOGIN_FAILURE,
                errorMessage
            };

            expect(actions.loginFailure(errorMessage)).to.eql(expectedAction);
        });
    });

    describe('userLogout', () => {
        it('should create an action to logout the user', () => {
            const expectedAction = {
                type: types.USER_LOGOUT
            };

            expect(actions.logoutUser()).to.eql(expectedAction);
        });
    });

    describe('fetchAuthentication', () => {
        let store;

        beforeEach(() => {
            store = mockStore({ authentication: {
                isLoggedIn: false,
                isAttemptingToLogin: false,
                loginFailed: false
            }});
        });

        afterEach(() => {
            nock.cleanAll()
        });

        it('should create loginSuccess when authenticated', () => {
            nock(AUTH_DOMAIN)
                .post('/authenticate')
                .reply(200, {status: 'success', errorMessage: ''});

            const expectedActions = [
                { isAttemptingToLogin: true, type: 'LOGIN_ATTEMPT' }, // attempting login
                { type: 'LOGIN_SUCCESS' }, // login success
                { type: 'REMOVE_NOTIFICATION_MESSAGE' }, // remove notification in UI
                { isAttemptingToLogin: false, type: 'LOGIN_ATTEMPT' } // end login attempt
            ];

            return store.dispatch(actions.fetchAuthentication())
                .then(() => { // return of async actions
                    expect(store.getActions()).to.eql(expectedActions);
                });
        });

        it('should create loginFailure when authentication fails', () => {
            const failMessage = 'Failed to login';

            nock(AUTH_DOMAIN)
                .post('/authenticate')
                .reply(200, {status: 'failure', errorMessage: failMessage});

            const expectedActions = [
                { isAttemptingToLogin: true, type: 'LOGIN_ATTEMPT' }, // attempting login
                { type: 'LOGIN_FAILURE', errorMessage: undefined }, // login failure
                { level: 'danger', message: failMessage, type: 'ADD_NOTIFICATION_MESSAGE' }, // add notification in UI
                { isAttemptingToLogin: false, type: 'LOGIN_ATTEMPT' } // end login attempt
            ];

            return store.dispatch(actions.fetchAuthentication())
                .then(() => { // return of async actions
                    expect(store.getActions()).to.eql(expectedActions);
                });
        });
    });
});
