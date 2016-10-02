/**
 * Created by allancutler on 4/2/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    StatusBar,
    View
} from 'react-native';
import { Router, Reducer } from 'react-native-router-flux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { scenes } from './scenes';
import Drawer from 'react-native-drawer';
import { Navigation } from './components/navigation/Navigation';
import { appReducers } from './reducers';

const RouterWithRedux = connect()(Router);
// create store...
const middleware = [ReduxThunk];
const store = compose(
    applyMiddleware(...middleware)
)(createStore)(appReducers);

const reducerCreate = params => {
    const defaultReducer = Reducer(params);
    return (state, action) => {
        return defaultReducer(state, action);
    };
};

Provider.childContextTypes = {
    store: React.PropTypes.object
};

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Drawer
                    type="static"
                    acceptTap={true}
                    content={<Navigation/>}
                    openDrawerOffset={60}
                    tweenDuration={150}>

                    <View style={styles.container}>
                        <RouterWithRedux
                            createReducer={reducerCreate}
                            scenes={scenes}
                            sceneStyle={styles.defaults}>
                        </RouterWithRedux>
                    </View>
                </Drawer>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    defaults: {
        backgroundColor: '#FFF'
    }
});
