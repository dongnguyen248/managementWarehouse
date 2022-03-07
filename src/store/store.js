import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userRedux from './userRedux';
import { inventoriesSlice } from 'store/inventoriesRedux';
import storage from 'redux-persist/lib/storage';
import inventoriesReducer from 'store/inventoriesRedux';

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
    reducer: { persistedReducer, inventories: inventoriesReducer },
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
