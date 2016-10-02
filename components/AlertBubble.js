/**
 * Created by allancutler on 5/6/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export class AlertBubble extends Component {
    static propTypes = {
        count: React.PropTypes.number
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.bubble}>
                <Text style={styles.countText}>{this.props.count}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bubble: {
        backgroundColor: '#FF0000',
        width: 18,
        height: 18,
        borderRadius: 100,
        justifyContent: 'center'
    },
    countText: {
        color: '#FFF',
        fontFamily: 'OpenSans-Semibold',
        fontSize: 12,
        alignSelf: 'center'
    }
});
