import { createSlice } from '@reduxjs/toolkit';
import {
    getInventories,
    addInventories,
    searchInventories,
} from 'services/inventoriesService';

const inventoriesSlice = createSlice({
    name: 'inventories',
    initialState: {
        inventories: [],
        status: null,
    },
    extraReducers: {
        [getInventories.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getInventories.fulfilled]: (state, action) => {
            state.status = 'success';
            state.inventories = action.payload;
        },
        [getInventories.rejected]: (state, action) => {
            state.status = 'failed';
        },
        [searchInventories.pending]: (state, action) => {
            state.status = 'loading';
        },
        [searchInventories.fulfilled]: (state, action) => {
            state.status = 'success';
            console.log(action.payload.items);
            state.inventories = action.payload.items;
        },
        [searchInventories.rejected]: (state, action) => {
            state.status = 'failed';
        },

        [addInventories.pending]: (state, action) => {
            state.status = 'loading';
        },
        [addInventories.fulfilled]: (state, action) => {
            state.status = 'success';
            state.inventories = action.payload;
        },
        [addInventories.rejected]: (state, action) => {
            state.status = 'failed';
        },
    },
});

export default inventoriesSlice.reducer;
