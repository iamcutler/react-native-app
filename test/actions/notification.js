/**
 * Created by allancutler on 5/25/16.
 */

import { expect } from 'chai';
import * as types from '../../constants/actionTypes';
import * as actions from '../../actions/notification';

describe('actions: notification', () => {
    describe('addNotificationMessage', () => {
        it('should return action creator', () => {
            // given
            const message = {
                message: 'Testing notification system',
                level: 'warning'
            };
            // when
            const result = actions.addNotificationMessage(message.message, message.level);
            // then
            expect(result).to.eql({
                type: types.ADD_NOTIFICATION_MESSAGE,
                ...message
            });
        });
    });

    describe('removeNotificationMessage', () => {
        it('should return action creator', () => {
            // given
            const expectedAction = {
                type: types.REMOVE_NOTIFICATION_MESSAGE
            };
            // when
            const results = actions.removeNotificationMessage();
            // then
            expect(results).to.eql(expectedAction);
        });
    });
});
