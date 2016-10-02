/**
 * Created by allancutler on 8/7/16.
 */

import { expect } from 'chai';
import { registeredReducers, appReducers } from '../../reducers';

describe('Reducer: main', () => {
    it('should have announcement reducer registered', () => {
        expect(registeredReducers.hasOwnProperty('announcement')).to.equal(true);
    });

    it('should have authentication reducer registered', () => {
        expect(registeredReducers.hasOwnProperty('authentication')).to.equal(true);
    });

    it('should have cart reducer registered', () => {
        expect(registeredReducers.hasOwnProperty('cart')).to.equal(true);
    });

    it('should have company reducer registered', () => {
        expect(registeredReducers.hasOwnProperty('company')).to.equal(true);
    });

    it('should have feature_toggles reducer registered', () => {
        expect(registeredReducers.hasOwnProperty('feature_toggles')).to.equal(true);
    });

    it('should have item reducer registered', () => {
        expect(registeredReducers.hasOwnProperty('item')).to.equal(true);
    });

    it('should have notification reducer registered', () => {
        expect(registeredReducers.hasOwnProperty('notification')).to.equal(true);
    });

    it('should have search reducer registered', () => {
        expect(registeredReducers.hasOwnProperty('search')).to.equal(true);
    });

    it('should have user reducer registered', () => {
        expect(registeredReducers.hasOwnProperty('user')).to.equal(true);
    });
});
