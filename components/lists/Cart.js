/**
 * Created by allancutler on 5/1/16.
 */

import React, {
    Component
} from 'react';
import {
    Alert,
    StyleSheet,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { EmptyListNotice } from './EmptyListNotice';
import { NavBar } from '../NavBar';
import { ListBundle } from './ListBundle';
import { ListActions } from './ListActions';
import { ListItemView } from './ListItemView'
import { clearCart } from '../../actions/cart';
import { performQuickBuy, quickBuyUnactive } from '../../actions/item';

// Map redux store state to props for view list component
const mapStateToProps = (state) => {
    return {
        cart: state.cart.payload,
        products: state.cart.payload.products,
        count: state.cart.count
    };
};

const VisibleListView = connect(
    mapStateToProps
)(ListItemView);

export class Cart extends Component {
    static contextTypes = {
        store: React.PropTypes.object
    };

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        const { store } = this.context;

        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        const { store } = this.context;

        store.dispatch(quickBuyUnactive());

        this.unsubscribe();
    }

    clearItems() {
        const { store } = this.context;

        Alert.alert(
            'Clear Cart',
            'Are you sure you want to do this?',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => store.dispatch(clearCart())}
            ]
        );
    }

    quickBuy() {
        const { store } = this.context;

        Alert.alert(
            'Quick Buy',
            'Confirm purchase',
            [
                {text: 'Cancel', style: 'cancel'},
                {text: 'Confirm', onPress: () => store.dispatch(performQuickBuy())}
            ]
        );
    }

    _renderCartView() {
        const { store } = this.context;
        const quickBuy = store.getState().item.quickbuy;

        if(!quickBuy.showWeb || !quickBuy.active) {
            return (
                <View style={styles.viewContainer}>
                    <VisibleListView/>
                </View>
            );
        }
    }

    _renderListActions() {
        const { store } = this.context;
        const item = store.getState().item;
        const cart = store.getState().cart;

        if(cart.count > 0 && !item.quickbuy.showWeb && !item.quickbuy.active) {
            return (
                <ListActions
                    clearItems={this.clearItems.bind(this)}
                    quickBuy={this.quickBuy.bind(this)}
                />
            );
        }
    }

    _renderContainerPadding() {
        const { store } = this.context;
        const quickBuy = store.getState().item.quickbuy;

        if(quickBuy.showWeb && quickBuy.active) {
            return {
                paddingBottom: 0
            };
        }

        return {
            paddingBottom: 60
        };
    }

    render() {
        const { store } = this.context;

        return (
            <View style={[styles.container, this._renderContainerPadding()]}>
                <NavBar title="My Cart"/>

                {this._renderCartView()}
                {this._renderListActions()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewContainer: {
        flex: 1
    }
});
