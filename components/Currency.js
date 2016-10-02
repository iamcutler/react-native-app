/**
 * Created by allancutler on 8/7/16.
 */

import React from 'react';
import {
    Text
} from 'react-native';
import accounting from 'accounting';

export const Currency = ({value, currency}) => (
    <Text>
        {accounting.formatMoney(value, {
            symbol: currency,
            precision: 2,
            thousand: ","
        })}
    </Text>
);
