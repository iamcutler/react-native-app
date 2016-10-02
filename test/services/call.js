/**
 * Created by allancutler on 5/10/16.
 */

import { expect } from 'chai';
import sinon from 'sinon';
import { MockPromise } from '../spec_helper';
import { API_DOMAIN } from '../../config';
import * as CallService from '../../services';
import { Request1 } from '../fixtures/document';

describe('service: Call', () => {
    afterEach(() => {
        global.fetch.restore();
    });

    describe('method: create', () => {
        it('should call api to create request from cart items', () => {
            // given
            const params = {checkoutCartItems: true};
            sinon.stub(global, 'fetch').returns(MockPromise(Request1));

            // when
            CallService.create(params);
            // then
            expect(global.fetch.args).to.eql([[
                `${API_DOMAIN}/api/requests`,
                {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(params)}
            ]]);
        });
    });

    describe('method: submit', () => {
        it('should call api to submit request', () => {
            // given
            sinon.stub(global, 'fetch').returns(MockPromise({
                data: Request1,
                errors: [],
                paginate: null,
                success: true
            }));
            // when
            CallService.submit(Request1);
            // then
            expect(global.fetch.args).to.eql([[
                `${API_DOMAIN}/api/requests/${Request1.id}/submit`,
                {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(Request1)}
            ]]);
        });
    });
});
