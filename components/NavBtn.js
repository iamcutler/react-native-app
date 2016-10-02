/**
 * Created by allancutler on 4/25/16.
 */

import React, {
    Component
} from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    View
} from 'react-native';
import { AlertBubble } from './AlertBubble';

export class NavBtn extends Component {
    static contextTypes = {
        drawer: React.PropTypes.object
    };

    static propTypes = {
        announcementCount: React.PropTypes.number
    };

    constructor(props, context) {
        super(props, context);
    }

    /**
     * Show notifications if present
     * @private
     */
    _showNotifications() {
        if(this.props.announcementCount) {
            return (
                <View style={styles.alertBubble}>
                    <AlertBubble count={this.props.announcementCount}/>
                </View>
            );
        }
    }

    render() {
        return (
            <TouchableHighlight underlayColor="transparent"
                                onPress={() => {this.context.drawer.open()}}>
                <View style={styles.navBtnContainer}>
                    <View style={styles.navBtnBar}></View>
                    <View style={styles.navBtnBar}></View>
                    <View style={styles.navBtnBar}></View>

                    { this._showNotifications() }
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    navBtnContainer: {
        width: 30
    },
    navBtnBar: {
        backgroundColor: '#FFF',
        height: 4,
        marginBottom: 5,
        borderRadius: 4
    },
    alertBubble: {
        position: 'absolute',
        top: -7,
        right: -9
    }
});
