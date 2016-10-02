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

export class ConfigureItemBtn extends Component {
    render() {
        return (
            <View style={styles.btnContainer}>
                <Text style={styles.btnText}>CONFIGURE THIS ITEM</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: '#00a651',
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
