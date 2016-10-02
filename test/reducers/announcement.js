/**
 * Created by allancutler on 5/26/16.
 */

import { expect } from 'chai';
import * as types from '../../constants/actionTypes';
import { initialState, AnnouncementReducer } from '../../reducers/announcement';
import { Announcements1 } from '../fixtures/announcement';

describe('reducer: announcement', () => {
    it('should return initial state', () => {
        // given
        // when
        const result = AnnouncementReducer(undefined, []);
        // then
        expect(result).to.eql(initialState);
    });

    it('should populate announcements', () => {
        // given
        const expectedState = {
            ...initialState,
            payload: Announcements1,
            count: Announcements1.length
        };
        // when
        const result = AnnouncementReducer(initialState, {
            type: types.POPULATE_ANNOUNCEMENTS,
            payload: Announcements1
        });
        // then
        expect(result).to.eql(expectedState);
    });
});
