/**
 * Created by allancutler on 4/2/16.
 */

import { REQUEST_STATUS_DRAFT } from '../../constants/constants';

import React, {
    Component
} from 'react';
import {
    TouchableHighlight,
    View,
    StyleSheet,
    Linking
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { BRAND_YELLOW } from '../../constants/styles';
import { NavigationLink } from './Link';

export class NavigationMenu extends Component {
    static contextTypes = {
        drawer: React.PropTypes.object
    };

    static propTypes = {
        announcementCount: React.PropTypes.number,
        helpSettings: React.PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    /**
     * Render help link if standard link is set
     * in company settings
     */
    _renderHelpLink() {
        if(this.props.helpSettings.level === 'STANDARD') {
            const helpUrl = this.props.helpSettings.helpPageLocation.externalPageUrl;

            return (
                <TouchableHighlight underlayColor="transparent"
                                    onPress={() => this._openHelpLink(helpUrl)}>
                    <View>
                        <NavigationLink title={'Help'}
                                        icon={require('../../images/navigation/help.png')}
                                        styles={{width: 9, height: 16, marginTop: 7, marginLeft: 11}}
                        />
                    </View>
                </TouchableHighlight>
            );
        }
    }

    _openHelpLink(url = '') {
        Linking.canOpenURL(url)
            .then(() => {
                Linking.openURL(url);
            })
            .catch(() => {
                alert('Error opening help URL');
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationLink title={'Create Document'}
                                color={BRAND_YELLOW}
                                icon={require('../../images/navigation/create.png')}
                                borderColor={BRAND_YELLOW}
                                styles={{width: 15, height: 15, marginTop: 8, marginLeft: 8}}
                />

                <TouchableHighlight underlayColor="transparent"
                                    onPress={() => {
                                        this.context.drawer.close();
                                        Actions.RequestStatus({status: REQUEST_STATUS_DRAFT});
                                    }}>
                    <View>
                        <NavigationLink title={'Document Status'}
                                        icon={require('../../images/navigation/request-status.png')}
                                        styles={{width: 12, height: 12, marginTop: 9, marginLeft: 10}}
                        />
                    </View>
                </TouchableHighlight>

                <NavigationLink title={'My Cart'}
                                icon={require('../../images/navigation/my-lists.png')}
                                styles={{width: 16, height: 16, marginTop: 7, marginLeft: 7}}
                />

                <NavigationLink title={'Notifications'}
                                showNotifications={true}
                                notificationCount={this.props.announcementCount}
                                icon={require('../../images/navigation/notifications.png')}
                                styles={{width: 14, height: 16, marginTop: 9, marginLeft: 8}}
                />

                {this._renderHelpLink()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    }
});
