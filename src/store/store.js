import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userRedux from './userRedux';
import storage from 'redux-persist/lib/storage';
import inventoriesReducer from 'store/inventoriesRedux';
import lineReducer from 'store/lineRecieverRedux';
import unitReducer from 'store/unitRedux';
import areaReducer from 'store/areaRedux';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};
const rootReducers = combineReducers({ user: userRedux });
const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
    reducer: {
        persistedReducer,
        inventories: inventoriesReducer,
        unit: unitReducer,
        line: lineReducer,
        area: areaReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});
export let persistor = persistStore(store);
