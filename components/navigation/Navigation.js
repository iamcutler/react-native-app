/**
 * Created by allancutler on 4/2/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { NavigationHeader } from './Header';
import { NavigationMenu } from './Menu';
import { logoutUser } from '../../actions/authentication';

const mapStateToProps = (state) => {
    return {
        announcementCount: state.announcement.count,
        helpSettings: state.company.settings.supportSettings
    };
};
const NavigationMenuView = connect(mapStateToProps)(NavigationMenu);

export class Navigation extends Component {
    static contextTypes = {
        store: React.PropTypes.object
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            userProfile: {
                firstName: '',
                lastName: '',
                jobTitle: ''
            }
        };
    }

    componentDidMount() {
        const { store } = this.context;

        this.unsubscribe = store.subscribe(() => {
            this.setState({userProfile: store.getState().user.profile});
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    _logoutUser() {
        const { store } = this.context;

        store.dispatch(logoutUser());
        Actions.Login();
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.backgroundImg}
                       source={require('../../images/navigation-bg.jpg')} />

                <NavigationHeader
                    firstName={this.state.userProfile.firstName}
                    lastName={this.state.userProfile.lastName}
                    jobTitle={this.state.userProfile.jobTitle}
                    avatar={this.state.userProfile.logoUrl}
                    logoutCb={this._logoutUser.bind(this)}
                />
                <NavigationMenuView/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#142c37'
    },
    backgroundImg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        resizeMode: 'cover',
        flex: 1
    }
});
