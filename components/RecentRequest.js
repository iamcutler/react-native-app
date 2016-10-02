/**
 * Created by allancutler on 4/26/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Text,
    View
} from 'react-native';
import { Currency } from './Currency';
import { StatusBadge } from './StatusBadge';

export class RecentRequest extends Component {
    static propTypes = {
        request: React.PropTypes.object.isRequired,
        rowNumber: React.PropTypes.string.isRequired
    };

    _renderBackground() {
        let rowNum = this.props.rowNumber;

        if(rowNum && !(rowNum % 2)) {
            return '#f3f3f3';
        }

        return 'transparent';
    }

    render() {
        return (
            <TouchableHighlight>
                <View style={[styles.container, {backgroundColor: this._renderBackground()}]}>
                    <View style={styles.name}>
                        <Text numberOfLines={1}>
                            {this.props.request.name}
                        </Text>
                    </View>

                    <View style={styles.amount}>
                        <Text>
                            <Currency
                                value={this.props.request.subTotal}
                                currency={'$'}
                            />
                        </Text>
                        <Text style={styles.amountCurrency}>{this.props.request.currency}</Text>
                    </View>

                    <StatusBadge status={this.props.request.status} />
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center'
    },
    name: {
        width: 160
    },
    amount: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 8
    },
    amountCurrency: {
        marginLeft: 4
    }
});
