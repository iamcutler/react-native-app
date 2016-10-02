/**
 * Created by allancutler on 4/21/16.
 */

import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { RequestStatus } from './components/status/RequestStatus';
import { SearchResults } from './components/search/SearchResults';
import { ItemDetails } from './components/ItemDetails';
import { Cart } from './components/lists/Cart';
import { Error } from './components/Error';

export const scenes = Actions.create(
    <Scene key="root" hideNavBar={true}>
        <Scene key="Login" component={Login} type="replace" initial={true}/>
        <Scene key="Dashboard" component={Dashboard} type="replace"/>
        <Scene key="RequestStatus" component={RequestStatus} type="replace"/>
        <Scene key="SearchResults" component={SearchResults} type="replace"/>
        <Scene key="ItemDetails" component={ItemDetails}/>
        <Scene key="Cart" component={Cart} type="replace"/>
        <Scene key="Error" component={Error} type="replace"/>
    </Scene>
);
