/**
 * Created by allancutler on 5/4/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export class Error extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Error!</Text>
                <Text style={styles.errorText}>Something went wrong...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    errorText: {
        alignSelf: 'center'
    }
});
