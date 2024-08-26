import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; // Import the named export 'thunk' instead of default

import userReducer from './reducers/userReducer';
import groupReducer from './reducers/groupReducer';
import sessionReducer from './reducers/sessionReducer';
import dashboardReducer from './reducers/dashboardReducer';
import documentReducer from './reducers/documentReducer';
import machineReducer from './reducers/machineReducer';
import machineInstanceReducer from './reducers/machineInstanceReducer';
import partReducer from './reducers/partReducer';
import partInstanceReducer from './reducers/partInstanceReducer';
import cartReducer from './reducers/cartReducer';
import orderReducer from './reducers/orderReducer';

const store = configureStore({
    reducer: {
        user: userReducer,
        group: groupReducer,
        session: sessionReducer,
        dashboard: dashboardReducer,
        document: documentReducer,
        machine: machineReducer,
        machineInstance: machineInstanceReducer,
        part: partReducer,
        partInstance: partInstanceReducer,
        cart: cartReducer,
        order: orderReducer,
    },
    // Adding middleware: redux-thunk
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
