/**
 * Created by allancutler on 5/11/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import moment from 'moment';
import { Currency } from '../Currency';
import { DATE_FORMAT } from '../../constants/constants'

export class StatusListItem extends Component {
    static propTypes = {
        number: React.PropTypes.string,
        name: React.PropTypes.string,
        date: React.PropTypes.number,
        price: React.PropTypes.number,
        currency: React.PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.number}>{this.props.number}</Text>
                    <Text>{this.props.name}</Text>
                </View>

                <View style={styles.rightColumn}>
                    <Text>{moment(this.props.date).format(DATE_FORMAT)}</Text>

                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>
                            <Currency
                                value={this.props.price}
                                currency={'$'}
                            />
                        </Text>
                        <Text style={styles.currency}>{this.props.currency}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    rightColumn: {
        alignItems: 'flex-end',
        flex: 2
    },
    number: {
        fontSize: 16,
        fontFamily: 'OpenSans-Semibold'
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    price: {
        fontFamily: 'OpenSans-SemiBold'
    },
    currency: {
        color: '#656565',
        fontSize: 12,
        fontFamily: 'OpenSans-SemiBold',
        marginLeft: 4
    }
});
