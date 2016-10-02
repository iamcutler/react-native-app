/**
 * Created by allancutler on 5/12/16.
 */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { AlertBubble } from '../../components/AlertBubble';


describe('component: AlertBubble', () => {
    it('should render with count', () => {
        // given
        const count = 3;
        const wrapper = mount(
            <AlertBubble count={count}/>
        );
        // when
        // then
        expect(wrapper.props().count).to.equal(count);
    });
});
