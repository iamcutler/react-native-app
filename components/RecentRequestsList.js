/**
 * Created by allancutler on 4/26/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    ListView,
    View
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { REQUEST_STATUS_DRAFT } from '../constants/constants';
import { RecentRequest } from './RecentRequest';
import { ViewMoreBtn } from './ViewMoreBtn';

export class RecentRequestsList extends Component {
    static propTypes = {
        requests: React.PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    /**
     * Render component for each row of list
     *
     * @private
     */
    _renderRow(rowData, sectionID, rowID) {
        return (
            <RecentRequest request={rowData} rowNumber={rowID} />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Recent Requests</Text>

                <ListView
                    style={styles.requestsList}
                    scrollEnabled={false}
                    dataSource={this.props.requests}
                    renderRow={this._renderRow}
                    enableEmptySections={true}
                />

                <View style={styles.viewBtnContainer}>
                    <ViewMoreBtn
                        onPress={() => Actions.RequestStatus({status: REQUEST_STATUS_DRAFT})}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    title: {
        alignSelf: 'center',
        fontFamily: 'Open Sans',
        fontSize: 20
    },
    requestsList: {
        paddingVertical: 10
    },
    viewBtnContainer: {
        marginHorizontal: 10
    }
});
