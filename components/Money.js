/**
 * Created by allancutler on 4/28/16.
 */

const CURRENCY_FORMAT = /(\d)(?=(\d{3})+(?!\d))/g;

import React, {
    Component
} from 'react';
import {
    Text
} from 'react-native';

export class Money extends Component {
    static propTypes = {
        amount: React.PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text>${(Number(this.props.amount).toFixed(2)).toString().replace(CURRENCY_FORMAT, "$1,")}</Text>
        );
    }
}
