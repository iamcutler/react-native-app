/**
 * Created by allancutler on 4/2/16.
 */

import React, {
    Component
} from 'react';
import {
    Animated,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';

export class NavigationHeader extends Component {
    static PropTypes = {
        firstName: React.PropTypes.string,
        lastName: React.PropTypes.string,
        jobTitle: React.PropTypes.string,
        avatar: React.PropTypes.string,
        logoutCb: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            isSubNavOpen: false,
            subNavHeight: new Animated.Value(0),
            subNavOpacity: new Animated.Value(0)
        };
    }

    _toggleSubNav() {
        let config = {
            height: { toValue: 40, duration: 200 },
            opacity: { toValue: 1, delay: 200, duration: 200 }
        };

        // open state
        if(this.state.isSubNavOpen) {
            config.height = { toValue: 0, delay: 200, duration: 200 };
            config.opacity = { toValue: 0, duration: 200 };
        }

        // toggle open state
        this.state.isSubNavOpen = !this.state.isSubNavOpen;

        Animated.timing(
            this.state.subNavHeight, config.height
        ).start();

        Animated.timing(
            this.state.subNavOpacity, config.opacity
        ).start();
    }

    _renderSpacingForNonTitle() {
        if(this.props.jobTitle) return;

        return {
            marginTop: 14
        };
    }

    _renderUserAvatar() {
        if(this.props.avatar) {
            return (
                <Image style={styles.userAvatarImg}
                       source={{uri: this.props.avatar}} />
            );
        } else {
            return (
                <View style={[styles.userAvatar, styles.avatarNameWrapper]}>
                    <Text style={styles.avatarNameText}>
                        {`${this.props.firstName.substr(0, 1)}${this.props.lastName.substr(0, 1)}`}
                    </Text>
                </View>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight underlayColor="transparent"
                                    onPress={this._toggleSubNav.bind(this)}>
                    <View style={styles.profileContainer}>
                        <View style={styles.userAvatar}>
                            {this._renderUserAvatar()}
                        </View>

                        <View style={[styles.userInfo, this._renderSpacingForNonTitle()]}>
                            <Text style={styles.userName} numberOfLines={1}>
                                {`${this.props.firstName} ${this.props.lastName}`}
                            </Text>

                            {/** Job title **/}
                            {(() => {
                                if(this.props.jobTitle) {
                                    return (
                                        <Text style={styles.userTitle} numberOfLines={1}>
                                            {this.props.jobTitle}
                                        </Text>
                                    );
                                }
                            })()}
                        </View>
                    </View>
                </TouchableHighlight>

                {/** Sub navigation **/}
                <Animated.View style={[styles.subNavContainer, {height: this.state.subNavHeight, opacity: this.state.subNavOpacity}]}>
                    <TouchableHighlight underlayColor="transparent"
                                        onPress={this.props.logoutCb}>
                        <View style={styles.subNavLink}>
                            <Text style={styles.subNavText}>Logout</Text>
                        </View>
                    </TouchableHighlight>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        paddingHorizontal: 10,
        paddingTop: 30
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    userAvatar: {
        width: 50,
        height: 50,
        borderWidth: 3,
        borderColor: '#FFF',
        borderRadius: 100,
        marginLeft: 4,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    avatarNameWrapper: {
        marginLeft: 0
    },
    avatarNameText: {
        color: '#FFF',
        fontSize: 24
    },
    userAvatarImg: {
        width: 50,
        height: 50,
    },
    userInfo: {
        marginLeft: 14,
        marginTop: 4
    },
    userName: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Open Sans'
    },
    userTitle: {
        color: '#b6b6b6',
        fontFamily: 'Open Sans'
    },
    subNavContainer: {
        paddingTop: 8,
        marginTop: 10,
        borderTopColor: '#717c81',
        borderTopWidth: 1
    },
    subNavLink: {
        borderColor: '#FFF',
        paddingBottom: 12
    },
    subNavText: {
        color: '#FFF',
        fontSize: 16
    }
});
