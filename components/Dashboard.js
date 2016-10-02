/**
 * Created by allancutler on 4/25/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    ScrollView,
    ListView,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { NavBar } from './NavBar';
import { DashboardStatsBar } from './DashboardStatsBar';
import { RecentRequestsList } from './RecentRequestsList';
import { fetchAnnouncements } from '../actions/announcement';
import { fetchCompanySettings } from '../actions/company';
import { fetchCart } from '../actions/cart';
import { fetchDashboardRequests } from '../actions/requests';
import { fetchDocumentCounts } from '../actions/documents';
import { fetchFeatureToggles } from '../actions/feature_toggle';
import { fetchSupplierDashboard } from '../actions/supplier';
import { fetchUserProfile } from '../actions/user';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const mapRequestsStateToProps = (state) => {
    return { requests: ds.cloneWithRows(state.purchase_request.dashboard) };
};
const mapSupplierStateToProps = (state) => {
    return { suppliers: state.supplier.suppliers };
};
const mapCountsStateToProps = (state) => {
    return { counts: state.purchase_document.counts };
};

const RecentRequestsListView = connect(mapRequestsStateToProps)(RecentRequestsList);
const DashboardStatsBarView = connect(mapCountsStateToProps)(DashboardStatsBar);

export class Dashboard extends Component {
    static contextTypes = {
        store: React.PropTypes.object
    };

    componentWillMount() {
        const { store } = this.context;

        store.dispatch(fetchUserProfile());
        store.dispatch(fetchFeatureToggles());
        store.dispatch(fetchCompanySettings());
        store.dispatch(fetchCart());
        store.dispatch(fetchDashboardRequests());
        store.dispatch(fetchDocumentCounts());
        store.dispatch(fetchSupplierDashboard());
        store.dispatch(fetchAnnouncements());
    }

    render() {
        return (
            <View style={styles.container}>
                <NavBar title="Dashboard"/>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <DashboardStatsBarView/>
                    <RecentRequestsListView/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
