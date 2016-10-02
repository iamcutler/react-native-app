/**
 * Created by allancutler on 4/25/16.
 */

import React, {
    Component
} from 'react';
import {
    Dimensions,
    StyleSheet,
    TouchableHighlight,
    Image,
    Text,
    View
} from 'react-native';

export const DashboardDocStatBtn = ({title, bgImg, statCount, handlePress}) => (
    <TouchableHighlight onPress={handlePress}>
        <View style={styles.container}>
            <Image style={styles.backgroundImg}
                   source={bgImg} />

            <Text style={styles.statTitle}>
                {title.toUpperCase()}
            </Text>

            <Text style={styles.statNumber}>
                {statCount}
            </Text>
        </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    container: {
        width: (Dimensions.get('window').width / 2),
        height: 100,
        justifyContent: 'center',
        overflow: 'hidden'
    },
    backgroundImg: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        resizeMode: 'cover',
        flex: 1
    },
    statTitle: {
        color: '#FFF',
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'OpenSans-Semibold',
        marginTop: 5
    },
    statNumber: {
        color: '#FFF',
        fontSize: 50,
        fontFamily: 'OpenSans-Semibold',
        textAlign: 'center',
        lineHeight: 58
    }
});
