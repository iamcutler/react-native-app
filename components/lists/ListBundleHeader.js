/**
 * Created by allancutler on 5/1/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
import { Currency } from '../Currency';

export class ListBundleHeader extends Component {
    static propTypes = {
        supplierImg: React.PropTypes.string,
        subtotal: React.PropTypes.string.isRequired,
        currency: React.PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.header}>
                <View>
                    <Image
                        source={{uri: this.props.supplierImg}}
                        style={styles.supplierLogoImg}
                    />
                </View>

                <View style={styles.subTotalContainer}>
                    <Text style={styles.subTotalText}>SUBTOTAL</Text>

                    <View style={styles.subTotalPriceContainer}>
                        <Text style={styles.subTotalAmount}>
                            <Currency
                                value={this.props.subtotal}
                                currency={'$'}
                            />
                        </Text>

                        <Text style={styles.subTotalCurrency}>
                            {this.props.currency}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    supplierLogoImg: {
        width: 60,
        height: 60,
        resizeMode: 'contain'
    },
    subTotalContainer: {
        alignItems: 'flex-end'
    },
    subTotalPriceContainer: {
        alignItems: 'flex-end'
    },
    subTotalText: {
        color: '#656565',
        fontSize: 12,
        fontFamily: 'OpenSans-Semibold'
    },
    subTotalAmount: {
        fontSize: 18,
        fontFamily: 'OpenSans-Semibold'
    },
    subTotalCurrency: {
        color: '#656565',
        fontSize: 12,
        fontFamily: 'OpenSans-Semibold'
    }
});
