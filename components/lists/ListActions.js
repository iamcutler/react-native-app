/**
 * Created by allancutler on 5/1/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    TouchableHighlight
} from 'react-native';
import { BTN_SUCCESS_COLOR, BTN_NEGATIVE_COLOR } from '../../constants/styles';
import { VziBtn } from '../VziBtn';

export class ListActions extends Component {
    static propTypes = {
        clearItems: React.PropTypes.func,
        quickBuy: React.PropTypes.func
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.button, {marginRight: 3}]}>
                    <TouchableHighlight underlayColor="transparent"
                                        onPress={() => this.props.clearItems()}>
                        <View>
                            <VziBtn
                                title="Clear Items"
                                backgroundColor={BTN_NEGATIVE_COLOR}
                            />
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={[styles.button, {marginLeft: 3}]}>
                    <TouchableHighlight underlayColor="transparent"
                                        onPress={() => this.props.quickBuy()}>
                        <View>
                            <VziBtn
                                title="Quick Buy"
                                backgroundColor={BTN_SUCCESS_COLOR}
                            />
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#f7f7f7',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    button: {
        flex: 1
    }
});
