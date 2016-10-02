/**
 * Created by allancutler on 4/25/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    Image,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export class CartBtn extends Component {
    render() {
        return (
            <TouchableHighlight underlayColor="transparent"
                                onPress={() => Actions.Cart()}>
                <View>
                    <Image
                        style={styles.cartIcon}
                        source={require('./../images/cart-icon.png')}
                    />

                    <Text style={styles.count}>
                        {this.props.count}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    cartIcon: {
        position: 'absolute',
        top: -4,
        right: 2,
        width: 28,
        height: 28
    },
    count: {
        width: 28,
        color: '#FFF',
        fontSize: 11,
        fontFamily: 'OpenSans-Semibold',
        marginTop: 8,
        marginRight: 2,
        textAlign: 'center'
    }
});
