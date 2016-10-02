/**
 * Created by allancutler on 5/11/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    ListView,
    View
} from 'react-native';
import { StatusListItem } from './StatusListItem';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export class StatusListView extends Component {
    static propTypes = {
        list: React.PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
    }

    _renderRow(rowData) {
        return (
            <StatusListItem
                name={rowData.name}
                number={rowData.orderNumber}
                date={rowData.effectiveDate}
                price={rowData.totalAmount}
                currency={rowData.currency}
            />
        );
    }

    render() {
        return (
            <ListView
                showsVerticalScrollIndicator={false}
                style={styles.container}
                dataSource={ds.cloneWithRows(this.props.list)}
                renderRow={this._renderRow}
                renderSeparator={(sectionID, rowID) => {
                        return <View key={`${sectionID}-${rowID}`} style={styles.listSeparator}/>;
                    }}
                enableEmptySections={true}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 10
    },
    listSeparator: {
        backgroundColor: '#e1e1e1',
        height: 1,
        marginVertical: 20
    }
});
