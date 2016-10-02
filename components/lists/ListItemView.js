/**
 * Created by allancutler on 5/4/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    ListView,
    View
} from 'react-native';
import { ListBundle } from './ListBundle';
import { EmptyListNotice } from './EmptyListNotice';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export class ListItemView extends Component {
    static propTypes = {
        cart: React.PropTypes.object.isRequired,
        products: React.PropTypes.array,
        count: React.PropTypes.number.isRequired
    };

    constructor(props) {
        super(props);
    }

    _renderRow(rowData) {
        return (
            <ListBundle bundle={rowData}/>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {(() => {
                    if(this.props.count > 0) {
                        return (
                            <ListView
                                showsVerticalScrollIndicator={false}
                                style={styles.listContainer}
                                dataSource={ds.cloneWithRows(this.props.products)}
                                renderRow={this._renderRow}
                                enableEmptySections={true}
                            />
                        );
                    } else {
                        return (
                            <EmptyListNotice
                                title="No current items."
                            />
                        );
                    }
                })()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listContainer: {
        paddingHorizontal: 10,
        paddingBottom: 10
    }
});
