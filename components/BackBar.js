/**
 * Created by allancutler on 4/30/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
} from 'react-native';

export class BackBar extends Component {
    static propTypes = {
        title: React.PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.barContainer}>
                <Image
                    style={styles.backArrow}
                    source={require('./../images/back-arrow.png')}
                />

                <Text style={styles.barText}>
                    {this.props.title || 'Back'}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    barContainer: {
        backgroundColor: '#003663',
        paddingVertical: 6,
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    backArrow: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
        marginRight: 6
    },
    barText: {
        color: '#FFF',
        fontSize: 14,
        fontFamily: 'OpenSans-Semibold'
    }
});
