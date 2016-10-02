/**
 * Created by allancutler on 4/20/16.
 */

const DESCRIPTION_LENGTH = 70;

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Alert,
    View,
    Image,
    Text,
    TouchableHighlight,
    TextInput
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Currency } from '../Currency';

export class ListItem extends Component {
    static propTypes = {
        item: React.PropTypes.object.isRequired,
        removeItem: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            quantity: 1
        };
    }

    _removeItem() {
        Alert.alert(
            'Remove Item',
            'Are you sure you want to do this?',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => this.props.removeItem(this.props.item.id)}
            ]
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    <View style={styles.itemImageContainer}>
                        <TouchableHighlight underlayColor="transparent"
                                            onPress={() => Actions.ItemDetails({item: this.props.item.productDetails})}>
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

                                    <Text style={styles.itemInfo}>Vendor: {this.props.item.productDetails.vendorName}</Text>
                                    <Text style={styles.itemInfo}>Part Number: {this.props.item.productDetails.partNumber}</Text>
                                    <Text style={styles.itemInfo}>Price: {this.props.item.productDetails.price}</Text>

                                    <Text style={styles.itemDescription}
                                          numberOfLines={2}>
                                        {this.props.item.description}
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>

                        <View style={styles.itemRightColumn}>
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
                                    defaultValue={this.props.item.productDetails.quantity}/>
                            </View>

                            <TouchableHighlight underlayColor="transparent"
                                                onPress={this._removeItem.bind(this)}>
                                <Text style={styles.removeFromList}>Remove</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
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
        width: 120,
        height: 120,
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
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        flex: 1,
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
        alignItems: 'center',
        marginBottom: 4
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
    minOrderNoticeContainer: {
        paddingVertical: 6,
    },
    minOrderNotice: {
        color: '#656565',
        fontSize: 10,
        alignSelf: 'flex-end'
    },
    removeFromList: {
        color: '#003663',
        fontFamily: 'OpenSans-Semibold',
        marginTop: 4
    }
});
