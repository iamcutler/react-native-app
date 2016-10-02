/**
 * Created by allancutler on 5/4/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Image,
    View,
    Text
} from 'react-native';

export class EmptyListNotice extends Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired
    };

    render() {
        return (
            <TouchableHighlight underlayColor="transparent">
                <View style={styles.emptyList}>
                    <Image
                        source={require('../../images/no-list-items.png')}
                        style={styles.noItemsImg}
                    />

                    <Text style={styles.emptyListText}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    emptyList: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 180
    },
    noItemsImg: {
        width: 136,
        height: 120,
        resizeMode: 'contain',
        marginBottom: 8
    },
    emptyListText: {
        fontSize: 14
    }
});
