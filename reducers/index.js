/**
 * Created by allancutler on 5/1/16.
 */

import { combineReducers } from 'redux';
import routes from './routes';
import { AnnouncementReducer } from './announcement';
import AuthReducer from './authentication';
import CartReducer from './cart';
import { CompanyReducer } from './company';
import { FeatureToggleReducer } from './feature_toggles';
import ItemReducer from './item';
import { NotificationReducer } from './notification';
import { SearchReducer } from './search';
import { UserReducer } from './user';

export const registeredReducers = {
    routes,
    announcement: AnnouncementReducer,
    authentication: AuthReducer,
    cart: CartReducer,
    company: CompanyReducer,
    feature_toggles: FeatureToggleReducer,
    item: ItemReducer,
    notification: NotificationReducer,
    search: SearchReducer,
    user: UserReducer
};

export const appReducers = combineReducers(registeredReducers);
