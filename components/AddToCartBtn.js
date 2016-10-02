/**
 * Created by allancutler on 4/20/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';

export class AddToCartBtn extends Component {
    static propTypes = {
        onPress: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight underlayColor="transparent"
                                onPress={() => this.props.onPress()}>
                <View style={styles.btnContainer}>
                    <Text style={styles.btnText}>ADD TO CART</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: '#fdce08',
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 12,
        alignItems: 'center'
    },
    btnText: {
        color: '#FFF',
        fontFamily: 'OpenSans-Semibold',
        fontSize: 15
    }
});
