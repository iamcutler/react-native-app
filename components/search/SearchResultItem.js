/**
 * Created by allancutler on 4/20/16.
 */

const DESCRIPTION_LENGTH = 70;

import { ASSET_DOMAIN } from '../../config';

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight,
    TextInput
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AddToCartBtn } from './../AddToCartBtn';
import { ConfigureItemBtn } from './../ConfigureItemBtn';
import { addItemToCart } from '../../actions/cart';
import { Currency } from './../Currency';

export class SearchResultItem extends Component {
    static contextTypes = {
        store: React.PropTypes.object
    };

    static propTypes = {
        item: React.PropTypes.object
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            quantity: 1
        };
    }

    _onAddPress() {
        const { store } = this.context;

        store.dispatch(addItemToCart(this.props.item));
    }

    _renderConfigureBtnView() {
        return (
            <TouchableHighlight underlayColor="transparent"
                                onPress={() => Actions.ItemDetails({id: this.props.item.id})}>
                <View>
                    <ConfigureItemBtn/>
                </View>
            </TouchableHighlight>
        );
    }

    _renderAddToCartBtnView() {
        return (
            <AddToCartBtn
                onPress={this._onAddPress.bind(this)}
            />
        );
    }

    /**
     * Render call to action button on item
     *
     * @param {object} item
     * @param {boolean} item.configurable
     * @private
     */
    _renderCOA(item) {
        return item.configurable
            ? this._renderConfigureBtnView()
            : this._renderAddToCartBtnView();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    <View style={styles.itemImageContainer}>
                        <TouchableHighlight underlayColor="transparent"
                                            onPress={() => Actions.ItemDetails({id: this.props.item.id})}>
                            <View>
                                <Image source={{uri: this.props.item.imageUrl}}
                                       style={styles.itemImage}
                                />
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.itemColumns}>
                        <View style={styles.itemLeftColumn}>
                            <TouchableHighlight underlayColor="transparent"
                                                onPress={() => Actions.ItemDetails({id: this.props.item.id})}>
                                <View>
                                    <Text style={styles.itemTitle}
                                          numberOfLines={2}>
                                        {this.props.item.title.toUpperCase()}
                                    </Text>

                                    <Text style={styles.itemInfo}>Vendor: {this.props.item.vendorName}</Text>
                                    <Text style={styles.itemInfo}>Part Number: {this.props.item.partNumber}</Text>
                                    <Text style={styles.itemInfo}>Price: {this.props.item.price}</Text>

                                    <Text style={styles.itemDescription}
                                          numberOfLines={2}>
                                        {this.props.item.description}
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>

                        <View style={styles.itemRightColumn}>
                            <Image
                                style={styles.supplierLogo}
                                source={{uri: `${ASSET_DOMAIN}${this.props.item.supplierLogo}`}}
                            />

                            <View style={styles.itemPriceContainer}>
                                <Text style={styles.itemPrice}>
                                    <Currency
                                        value={this.props.item.unitPrice}
                                        currency={'$'}
                                    />
                                </Text>
                                <Text style={styles.itemCurrency}>
                                    {this.props.item.currencyCode}
                                </Text>
                            </View>

                            <View style={styles.quantitySelectionContainer}>
                                <Text style={styles.quantityText}>Qty:</Text>

                                <TextInput
                                    style={styles.quantityInput}
                                    keyboardType="numeric"
                                    onChangeText={(quantity) => this.setState({quantity})}
                                    defaultValue={this.props.item.minOrderQty}/>
                            </View>
                        </View>
                    </View>
                </View>

                {this._renderCOA(this.props.item)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    itemContainer: {
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: 6
    },
    itemImageContainer: {
        alignSelf: 'center',
        marginTop: 16,
        paddingBottom: 10
    },
    itemImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },
    itemColumns: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        marginBottom: 6
    },
    itemLeftColumn: {
        flex: 2
    },
    itemRightColumn: {
        flex: 1
    },
    itemTitle: {
        fontSize: 14,
        fontFamily: 'OpenSans-SemiBold',
        marginBottom: 4
    },
    itemInfo: {
        fontSize: 12,
        fontFamily: 'Open Sans'
    },
    itemDescription: {
        fontSize: 12,
        fontFamily: 'OpenSans-SemiBold'
    },
    itemPriceContainer: {
        alignSelf: 'flex-end',
        marginBottom: 4
    },
    itemPrice: {
        fontSize: 18
    },
    itemCurrency: {
        color: '#656565',
        fontSize: 12,
        fontFamily: 'OpenSans-SemiBold',
        alignSelf: 'flex-end'
    },
    supplierLogo: {
        width: 70,
        height: 40,
        alignSelf: 'flex-end',
        resizeMode: 'contain',
        marginBottom: 4
    },
    // Quantity
    quantitySelectionContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignItems: 'center'
    },
    quantityText: {
        fontSize: 14,
        marginRight: 6
    },
    quantityInput: {
        width: 70,
        height: 40,
        color: '#000',
        borderColor: '#ebebeb',
        borderWidth: 1,
        textAlign: 'center'
    },
    minOrderNotice: {
        color: '#656565',
        fontSize: 10,
        paddingVertical: 6,
        alignSelf: 'flex-end'
    }
});
