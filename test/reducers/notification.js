/**
 * Created by allancutler on 5/26/16.
 */

import { expect } from 'chai';
import * as types from '../../constants/actionTypes';
import { initialState, NotificationReducer } from '../../reducers/notification';

describe('reducer: notification', () => {
    it('should return initial state', () => {
        // given
        // when
        const result = NotificationReducer(undefined, []);
        // then
        expect(result).to.eql(initialState);
    });

    it('should add notification message', () => {
        // given
        const message = 'testing message';
        const level = 'danger';
        const expectedState = {
            message, level
        };
        // when
        const result = NotificationReducer(initialState, {
            type: types.ADD_NOTIFICATION_MESSAGE,
            message,
            level
        });
        // then
        expect(result).to.eql(expectedState);
    });

    it('should remove/clear notification message', () => {
        // given
        const expectedState = {
            message: null,
            level: null
        };
        // when
        const result = NotificationReducer(initialState, {
            type: types.REMOVE_NOTIFICATION_MESSAGE
        });
        // then
        expect(result).to.eql(expectedState);
    });
});
