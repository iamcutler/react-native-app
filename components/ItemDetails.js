/**
 * Created by allancutler on 4/29/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { NavBar } from './NavBar';
import { BackBar } from './BackBar';
import { ItemDetailSlider } from './ItemDetailSlider';
import { CustomField } from './CustomField';
import { AddToCartBtn } from './AddToCartBtn';
import { ItemDetailedInfo } from './ItemDetailedInfo';
import { Money } from './Money';

export class ItemDetails extends Component {
    static propTypes = {
        item: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            quantity: 1
        };
    }

    _renderMinOrderNotice() {
        if(this.props.item.minOrderQty > 1) {
            return (
                <Text style={styles.minOrderNotice}>
                    This item has a minimum order of {this.props.item.minOrderQty}
                </Text>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <NavBar
                    title={this.props.item.title}/>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableHighlight underlayColor="transparent"
                                        onPress={() => Actions.pop()}>
                        <View>
                            <BackBar title="Back"/>
                        </View>
                    </TouchableHighlight>

                    <View style={styles.viewContainer}>
                        <ItemDetailSlider item={this.props.item}/>

                        <View style={styles.itemInfoContainer}>
                            <View style={styles.itemLeftColumn}>
                                <Text style={styles.itemTitle}>
                                    {this.props.item.title.toUpperCase()}
                                </Text>

                                <Text style={styles.itemInfo}>Vendor: {this.props.item.vendor}</Text>
                                <Text style={styles.itemInfo}>Part Number: {this.props.item.vendorPartNumber}</Text>
                                <Text style={styles.itemInfo}>Price: {this.props.item.price}</Text>
                            </View>

                            <View style={styles.itemRightColumn}>
                                <View style={styles.itemPriceContainer}>
                                    <Text style={styles.itemPrice}>
                                        <Money
                                            amount={this.props.item.price}
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
                                        onChangeText={(quantity) => {
                                            this.setState({quantity});
                                        }}
                                        defaultValue={this.props.item.minQty}/>
                                </View>
                            </View>
                        </View>

                        <Text style={styles.description}>
                            {this.props.item.description}
                        </Text>

                        <View style={styles.addBtnContainer}>
                            <AddToCartBtn/>
                        </View>

                        {/** Detailed information **/}
                        <ItemDetailedInfo
                            item={this.props.item}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewContainer: {
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    itemInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
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
    description: {
        fontSize: 12,
        fontFamily: 'OpenSans-SemiBold',
        marginVertical: 6
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
    addBtnContainer: {
        marginTop: 10
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
        fontSize: 12,
        paddingTop: 4,
        alignSelf: 'center'
    },
    // Custom field
    customFields: {
        marginTop: 10
    },
    customField: {
        marginBottom: 4
    }
});
