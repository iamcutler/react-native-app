/**
 * Created by allancutler on 4/20/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export class VziBtn extends Component {
    static PropTypes = {
        title: React.PropTypes.string.isRequired,
        backgroundColor: React.PropTypes.string
    };

    render() {
        return (
            <View style={[styles.btnContainer, {backgroundColor: (this.props.backgroundColor || '#000')}]}>
                <Text style={styles.btnText}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btnContainer: {
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
