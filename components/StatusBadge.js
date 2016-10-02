/**
 * Created by allancutler on 4/27/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {
    STATUS_BADGE_NEW,
    STATUS_BADGE_DRAFT,
    STATUS_BADGE_PENDING,
    STATUS_BADGE_APPROVED,
    STATUS_BADGE_REJECTED
} from '../constants/styles';

export class StatusBadge extends Component {
    static propTypes = {
        status: React.PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    renderBadgeColor() {
        switch(this.props.status) {
            case 'NEW':
                return STATUS_BADGE_NEW;
            case 'DRAFT':
                return STATUS_BADGE_DRAFT;
            case 'PENDING':
                return STATUS_BADGE_PENDING;
            case 'APPROVED':
                return STATUS_BADGE_APPROVED;
            case 'REJECTED':
                return STATUS_BADGE_REJECTED;
            default:
                return '#000';
        }
    }

    renderBadge() {
        if(this.props.status) {
            return (
                <View style={[styles.badge, {backgroundColor: this.renderBadgeColor()}]}>
                    <Text style={styles.statusText}>{this.props.status}</Text>
                </View>
            );
        } else {
            return (
                <View></View>
            );
        }
    }

    render() {
        return this.renderBadge();
    }
}

const styles = StyleSheet.create({
    badge: {
        paddingVertical: 4,
        paddingHorizontal: 6,
        borderRadius: 6,
        flex: 1,
        alignItems: 'center'
    },
    statusText: {
        color: '#FFF',
        fontFamily: 'OpenSans-Semibold',
        fontSize: 16
    }
});
