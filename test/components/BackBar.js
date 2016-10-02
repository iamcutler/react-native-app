/**
 * Created by allancutler on 5/24/16.
 */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { BackBar } from '../../components/BackBar';
import mockery from "mockery";

mockery.enable({
    warnOnReplace: false,
    warnOnUnregistered: false
});
mockery.registerMock('./../images/back-arrow.png', 0);

describe('Component: BackBar', () => {
    it('should have title prop', () => {
        // given
        const title = 'Back to results';
        const wrapper = mount(
            <BackBar title={title} />
        );
        // when
        // then
        expect(wrapper.props().title).to.equal(title);
    });
});
