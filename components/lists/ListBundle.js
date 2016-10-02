/**
 * Created by allancutler on 5/1/16.
 */

import { ASSET_DOMAIN } from '../../config';

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    ListView,
    View
} from 'react-native';
import { ListBundleHeader } from './ListBundleHeader';
import { ListItem } from './ListItem';
import { removeItemFromCart } from '../../actions/cart';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export class ListBundle extends Component {
    static propTypes = {
        bundle: React.PropTypes.object.isRequired
    };
    static contextTypes = {
        store: React.PropTypes.object
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            items: ds.cloneWithRows(this.props.bundle.items)
        };
    }

    _removeItem(id) {
        const { store } = this.context;

        store.dispatch(removeItemFromCart(id));
    }

    render() {
        return (
            <View>
                <ListBundleHeader
                    supplierImg={`${ASSET_DOMAIN}${this.props.bundle.supplierImageUrl}`}
                    subtotal={this.props.bundle.supplierSubtotal}
                    currency={this.props.bundle.supplierCurrencyCode}
                />

                {/** Items **/}
                <ListView
                    dataSource={this.state.items}
                    renderRow={(rowData) => <ListItem item={rowData} removeItem={this._removeItem.bind(this)}/>}
                    renderSeparator={(sectionID, rowID) => {
                        return <View key={`${sectionID}-${rowID}`} style={styles.listSeparator}/>;
                    }}
                    enableEmptySections={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listSeparator: {
        backgroundColor: '#e1e1e1',
        height: 1,
        marginVertical: 20
    }
});
