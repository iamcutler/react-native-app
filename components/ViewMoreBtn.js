/**
 * Created by allancutler on 4/27/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

export class ViewMoreBtn extends Component {
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
                <View style={styles.btnBG}>
                    <Text style={styles.title}>
                        {(this.props.title || 'View More').toUpperCase()}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    btnBG: {
        backgroundColor: '#00a651',
        paddingVertical: 10,
        borderRadius: 6
    },
    title: {
        color: '#FFF',
        alignSelf: 'center',
        fontSize: 14,
        fontFamily: 'OpenSans-Semibold'
    }
});
