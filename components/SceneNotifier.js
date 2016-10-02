/**
 * Created by allancutler on 8/7/16.
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export const SceneNotifier = ({ loading, message }) => {
    // show loader
    if(loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.noticeText}>
                    Loading...
                </Text>
            </View>
        );
    }

    // Show message
    if(message) {
        return (
            <View style={styles.container}>
                <Text style={styles.noticeText}>
                    {message}
                </Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    noticeText: {
        alignSelf: 'center',
        marginTop: 30
    }
});
