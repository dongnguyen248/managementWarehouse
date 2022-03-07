import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { inventories } from '../../services/inventoriesService';

export const store = configureStore({
    reducer: {
        [inventories.reducerPath]: inventories.reducer,
    },
    middleware: (getDefaultMiddiware) =>
        getDefaultMiddiware().concat(inventories.middleware),
});

setupListeners(store.dispatch);
