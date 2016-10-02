/**
 * Created by allancutler on 4/1/16.
 */

import React, {
    Component
} from 'react';
import {
    StatusBar,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { fetchAuthentication } from '../actions/authentication';

export class Login extends Component {
    static contextTypes = {
        store: React.PropTypes.object,
        drawer: React.PropTypes.object
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            email: '',
            password: '',
            errorMessage: null,
            isAttemptingToLogin: false
        };
    }

    componentWillMount() {
        const { drawer } = this.context;
        // Make sure drawer is closed when component is mounted
        drawer.close();
    }

    componentDidMount() {
        const { store } = this.context;

        // Subscribe to the store for changes
        this.unsubscribe = store.subscribe(() => {
            const storeState = store.getState();
            const notification = storeState.notification;
            const authentication = storeState.authentication;

            this.setState({
                errorMessage: (notification.message ? notification.message : null),
                isAttemptingToLogin: authentication.isAttemptingToLogin
            });
        });
    }

    componentWillUpdate() {
        const { store } = this.context;
        const authentication = store.getState().authentication;

        if(authentication.isLoggedIn) {
            Actions.Dashboard();
        }
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    _attemptLogin() {
        const { store } = this.context;

        if(!this.state.isAttemptingToLogin && this.state.email && this.state.password) {
            store.dispatch(fetchAuthentication(this.state.email, this.state.password));
        }
    }

    _renderErrorMessage() {
        if(this.state.errorMessage) {
            return (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>
                        {this.state.errorMessage}
                    </Text>
                </View>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />

                <View style={styles.bgImageWrapper}>
                    <Image style={styles.bgImage}
                        source={require('../images/loginBG.jpg')}>
                    </Image>
                </View>

                <Image style={styles.branding}
                    source={require('../images/brand.png')}>
                </Image>

                <Text style={styles.tagline}>
                    Tagline goes
                    <Text style={styles.taglineHighlight}>
                        &nbsp;here!
                    </Text>
                </Text>

                {this._renderErrorMessage()}

                <TextInput
                    style={styles.inputField}
                    keyboardType="email-address"
                    placeholder="Email Address:"
                    placeholderTextColor={'#FFF'}
                    onChangeText={(email) => this.setState({email})}
                />

                <TextInput
                    style={styles.inputField}
                    placeholder={'Password:'}
                    placeholderTextColor={'#FFF'}
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                />

                <TouchableHighlight underlayColor="#000"
                                    onPress={this._attemptLogin.bind(this)}
                                    style={styles.signInBtn}>
                    <Text style={styles.signInBtnText}>
                        {!this.state.isAttemptingToLogin ? 'Sign In' : 'Logging In...'}
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const brand_color = '#fdce08';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#000'
    },
    bgImageWrapper: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0
    },
    bgImage: {
        flex: 1,
        resizeMode: 'cover',
        opacity: .7
    },
    branding: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 20
    },
    tagline: {
        backgroundColor: 'transparent',
        color: '#FFF',
        fontSize: 22,
        fontFamily: 'OpenSans-Light',
        textAlign: 'center',
        margin: 10
    },
    taglineHighlight: {
        color: brand_color
    },
    inputField: {
        color: '#FFF',
        height: 50,
        borderColor: '#FFF',
        fontFamily: 'OpenSans-Light',
        borderWidth: 1,
        marginHorizontal: 30,
        marginTop: 20,
        padding: 10,
        borderRadius: 6
    },
    signInBtn: {
        backgroundColor: brand_color,
        height: 50,
        borderRadius: 6,
        padding: 10,
        marginTop: 20,
        marginHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    signInBtnText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'OpenSans-Semibold'
    },
    errorContainer: {
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 30
    },
    errorText: {
        color: '#FFF',
        fontSize: 14
    }
});
