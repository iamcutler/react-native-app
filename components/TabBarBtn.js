/**
 * Created by allancutler on 5/8/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Dimensions,
    Text,
    Image,
    View
} from 'react-native';

export class TabBarBtn extends Component {
    static propTypes = {
        title: React.PropTypes.string,
        icon: React.PropTypes.number,
        borderColor: React.PropTypes.string,
        tabCount: React.PropTypes.number.isRequired,
        active: React.PropTypes.bool
    };

    constructor(props) {
        super(props);
    }

    _renderActiveText() {
        if(this.props.active) {
            return {
                color: '#008ccd'
            };
        }
    }

    _renderActiveIcon() {
        if(this.props.active) {
            return {
                opacity: 1
            };
        }
    }

    render() {
        return (
            <View style={[
                    styles.container,
                    {
                        width: (Dimensions.get('window').width / this.props.tabCount),
                        borderTopColor: this.props.borderColor
                    }]}>
                <Image
                    style={[styles.tabIcon, this._renderActiveIcon()]}
                    source={this.props.icon}
                />

                <Text style={[styles.titleText, this._renderActiveText()]}>
                    {this.props.title.toUpperCase()}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 4,
        borderTopColor: '#FFF',
        paddingTop: 8
    },
    tabIcon: {
        width: 25,
        height: 24,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 5,
        opacity: 0.5
    },
    titleText: {
        color: '#d9d9d9',
        fontSize: 11,
        fontFamily: 'OpenSans-Semibold',
        paddingBottom: 4,
        textAlign: 'center'
    }
});
