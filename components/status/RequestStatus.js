/**
 * Created by allancutler on 5/8/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {
    STATUS_BADGE_DRAFT,
    STATUS_BADGE_PENDING,
    STATUS_BADGE_APPROVED,
    STATUS_BADGE_ATTENTION
} from '../../constants/styles';
import {
    REQUEST_STATUS_DRAFT,
    REQUEST_STATUS_PENDING,
    REQUEST_STATUS_APPROVED,
    REQUEST_STATUS_ATTENTION
} from '../../constants/constants';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { NavBar } from './../NavBar';
import { TabBar } from './../TabBar';
import { fetchInitialRequestStatus, fetchRequestStatus, loadingRequestStatus } from '../../actions/requests';
import { StatusListView } from './StatusListView';
import { SceneNotifier } from '../SceneNotifier';

const mapStateToProps = (state) => {
    return {
        list: state.purchase_request.statuses.results
    };
};
const StatusListViewRender = connect(
    mapStateToProps
)(StatusListView);

export class RequestStatus extends Component {
    static contextTypes = {
        store: React.PropTypes.object
    };

    static propTypes = {
        status: React.PropTypes.string
    };

    componentWillMount() {
        const { store } = this.context;

        store.dispatch(fetchInitialRequestStatus({
            currentPage: 1,
            pageSize: 20,
            status: this.props.status || REQUEST_STATUS_DRAFT
        }));

        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    /**
     * Navigate to different statuses in the current frame
     * @param {string} status
     * @private
     */
    _navigateToRequestStatus(status = REQUEST_STATUS_DRAFT) {
        const { store } = this.context;

        store.dispatch(fetchInitialRequestStatus({
            currentPage: 1,
            pageSize: 20,
            status: status
        }));
    }

    render() {
        const { store } = this.context;
        const statuses = store.getState().purchase_request.statuses;

        return (
            <View style={styles.container}>
                <NavBar
                    title="Request Status"
                />

                {(() => {
                    // Loading state
                    if(statuses.isLoading) return <SceneNotifier loading={true}/>;
                    // Found documents
                    if(statuses.results.length) return <StatusListViewRender/>;

                    return <SceneNotifier message="No documents were found"/>
                })()}

                <TabBar tabs={[
                    {
                        title: 'draft',
                        icon: require('../../images/tabs/draft-icon.png'),
                        borderColor: STATUS_BADGE_DRAFT,
                        active: (this.props.status === REQUEST_STATUS_DRAFT),
                        onPress: () => {
                            this._navigateToRequestStatus(REQUEST_STATUS_DRAFT);
                            Actions.refresh({status: REQUEST_STATUS_DRAFT});
                        }
                    },
                    {
                        title: 'pending',
                        icon: require('../../images/tabs/pending-icon.png'),
                        borderColor: STATUS_BADGE_PENDING,
                        active: (this.props.status === REQUEST_STATUS_PENDING),
                        onPress: () => {
                            this._navigateToRequestStatus(REQUEST_STATUS_PENDING);
                            Actions.refresh({status: REQUEST_STATUS_PENDING});
                        }
                    },
                    {
                        title: 'approved',
                        icon: require('../../images/tabs/approved-icon.png'),
                        borderColor: STATUS_BADGE_APPROVED,
                        active: (this.props.status === REQUEST_STATUS_APPROVED),
                        onPress: () => {
                            this._navigateToRequestStatus(REQUEST_STATUS_APPROVED);
                            Actions.refresh({status: REQUEST_STATUS_APPROVED});
                        }
                    },
                    {
                        title: 'attention',
                        icon: require('../../images/tabs/attention-icon.png'),
                        borderColor: STATUS_BADGE_ATTENTION,
                        active: (this.props.status === REQUEST_STATUS_ATTENTION),
                        onPress: () => {
                            this._navigateToRequestStatus(REQUEST_STATUS_ATTENTION);
                            Actions.refresh({status: REQUEST_STATUS_ATTENTION});
                        }
                    }
                    ]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 60
    }
});
