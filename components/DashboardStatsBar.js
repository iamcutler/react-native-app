/**
 * Created by allancutler on 4/25/16.
 */

import {
    REQUEST_STATUS_DRAFT,
    REQUEST_STATUS_PENDING
} from '../constants/constants';

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { DashboardDocStatBtn } from './DashboardDocStatBtn';

export const DashboardStatsBar = ({counts}) => (
    <View>
        <View style={styles.row}>
            <DashboardDocStatBtn title="Requests 1"
                                 statCount={counts.purchaseRequests.status1}
                                 bgImg={require('./../images/statsbar-bg.jpg')}
                                 handlePress={() => Actions.RequestStatus({status: REQUEST_STATUS_DRAFT})}
            />
            <DashboardDocStatBtn title="Requests 2"
                                 statCount={counts.purchaseRequests.status2}
                                 bgImg={require('./../images/statsbar-bg.jpg')}
                                 handlePress={() => Actions.RequestStatus({status: REQUEST_STATUS_PENDING})}
            />
        </View>

        <View style={styles.row}>
            <DashboardDocStatBtn title="Requests 3"
                                 statCount={counts.purchaseOrders.status3}
                                 bgImg={require('./../images/statsbar-bg.jpg')}
            />
            <DashboardDocStatBtn title="Requests 4"
                                 statCount={counts.purchaseOrders.status4}
                                 bgImg={require('./../images/statsbar-bg.jpg')}
            />
        </View>
    </View>
);

const styles = StyleSheet.create({
    row: {
        height: 100,
        flex: 1,
        flexDirection: 'row'
    }
});
