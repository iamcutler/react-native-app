/**
 * Created by allancutler on 5/8/16.
 */

import React, {
    Component
} from 'react';
import {
    Dimensions,
    StyleSheet,
    TouchableHighlight,
    View
} from 'react-native';
import { TabBarBtn } from './TabBarBtn';

export class TabBar extends Component {
    static propTypes = {
        tabs: React.PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.tabBarContainer}>
                <View style={styles.tabRow}>
                    {this.props.tabs.map((tab, index) => {
                        return (
                            <TouchableHighlight underlayColor="transparent"
                                                key={index}
                                                onPress={tab.onPress}>
                                <View>
                                    <TabBarBtn
                                        tabCount={this.props.tabs.length}
                                        title={tab.title}
                                        borderColor={tab.borderColor}
                                        icon={tab.icon}
                                        active={tab.active}
                                    />
                                </View>
                            </TouchableHighlight>
                        );
                    })}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabBarContainer: {
        position: 'absolute',
        backgroundColor: '#FFF',
        width: Dimensions.get('window').width,
        bottom: 0,
        left: 0,
        right: 0,
        height: 62
    },
    tabRow: {
        width: Dimensions.get('window').width,
        flexWrap: 'nowrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
    }
});
