/**
 * Created by allancutler on 8/7/16.
 */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Currency } from '../../components/Currency';

describe('Component: Currency', () => {
    it('should return formatted currency', () => {
        // given
        // when
        const wrapper = shallow(
            <Currency
                value={1200.36}
                currency={'$'}
            />
        );
        // then
        expect(wrapper.node.props.children).to.equal('$1,200.36');
    });
});
