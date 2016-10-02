/**
 * Created by allancutler on 4/25/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    StatusBar,
    TouchableHighlight,
    Text,
    TextInput,
    View,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { NavBtn } from './NavBtn';
import { CartBtn } from './CartBtn';
import { performSearch } from '../actions/search';

const mapAnnouncementStateToProps = (state) => {
    return { announcementCount: state.announcement.count };
};
const NavBtnView = connect(mapAnnouncementStateToProps)(NavBtn);

export class NavBar extends Component {
    static contextTypes = {
        store: React.PropTypes.object
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            cartCount: 0,
            searchString: ''
        };
    }

    componentDidMount() {
        const { store } = this.context;

        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    _performSearch() {
        const { store } = this.context;

        if(this.state.searchString) {
            store.dispatch(performSearch(this.state.searchString));
            return Actions.SearchResults();
        }
    }

    render() {
        const { store } = this.context;

        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />

                <View style={styles.headerContainer}>
                    <NavBtnView style={styles.navBtn}
                            notifications={true}/>

                    <TouchableHighlight underlayColor="transparent"
                                        style={styles.mainLink}
                                        onPress={() => Actions.Dashboard()}>
                        <Text style={styles.title} numberOfLines={1}>
                            { this.props.title }
                        </Text>
                    </TouchableHighlight>

                    <CartBtn style={styles.cartBtn}
                             count={store.getState().cart.count}/>
                </View>

                <View>
                    <TextInput style={styles.searchInput}
                               placeholder="Search for items..."
                               placeholderTextColor="#FFF"
                               onChangeText={(searchString) => this.setState({searchString})}
                               onSubmitEditing={this._performSearch.bind(this)}
                               defaultValue={store.getState().search.queryString}
                    />

                    <Image
                        style={styles.searchMic}
                        source={require('../images/microphone.png')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#233a4a',
        paddingTop: 28,
        paddingBottom: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        flexWrap: 'nowrap'
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 6
    },
    mainLink: {
        flex: 3
    },
    title: {
        backgroundColor: 'transparent',
        color: '#FFF',
        fontFamily: 'OpenSans-Semibold',
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        paddingHorizontal: 10
    },
    navBtn: {
        flex: 1
    },
    cartBtn: {
        flex: 1
    },
    searchInput: {
        color: '#FFF',
        height: 40,
        fontSize: 16,
        borderColor: '#cbcbcb',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 34,
        paddingVertical: 10,
        borderRadius: 6
    },
    searchMic: {
        position: 'absolute',
        top: 9,
        right: 2,
        width: 30,
        height: 22,
        resizeMode: 'contain'
    }
});
