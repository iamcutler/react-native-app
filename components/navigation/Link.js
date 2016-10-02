/**
 * Created by allancutler on 4/2/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Text,
    Image,
    View
} from 'react-native';
import { AlertBubble } from '../AlertBubble';

export class NavigationLink extends Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        color: React.PropTypes.string,
        icon: React.PropTypes.number.isRequired,
        borderColor: React.PropTypes.string,
        styles: React.PropTypes.object.isRequired,
        showNotifications: React.PropTypes.bool,
        notificationCount: React.PropTypes.number
    };

    constructor(props) {
        super(props);
    }

    _renderAlertBubble() {
        if(this.props.showNotifications && this.props.notificationCount) {
            return (
                <View style={styles.alertBubble}>
                    <AlertBubble count={this.props.notificationCount}/>
                </View>
            );
        }
    }

    render() {
        return (
            <View style={styles.linkBtn}>
                <View style={styles.linkBtnView}>
                    <View style={[styles.linkBtnIcon, {borderColor: (this.props.borderColor || '#FFF')}]}>
                        <Image
                            style={this.props.styles}
                            source={this.props.icon}
                        />

                        {this._renderAlertBubble()}
                    </View>

                    <Text style={[styles.linkBtnText, {color: this.props.color || '#FFF'}]}>
                        {this.props.title}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    linkBtn: {
        paddingHorizontal: 16,
        paddingVertical: 10
    },
    linkActive: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingHorizontal: 16,
        paddingVertical: 20
    },
    linkBtnView: {
        flexDirection: 'row'
    },
    linkBtnIcon: {
        width: 34,
        height: 34,
        borderWidth: 2,
        borderRadius: 100
    },
    linkBtnText: {
        backgroundColor: 'transparent',
        fontSize: 18,
        fontFamily: 'Open Sans',
        marginLeft: 14,
        marginTop: 4
    },
    alertBubble: {
        position: 'absolute',
        top: -7,
        right: -7
    }
});
