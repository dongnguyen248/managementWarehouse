import { createSlice } from '@reduxjs/toolkit';
import {
    getInventories,
    addInventories,
    searchInventories,
    createMaterial,
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
            state.inventories = action.payload;
        },
        [searchInventories.rejected]: (state, action) => {
            state.status = 'failed';
        },

        [createMaterial.pending]: (state, action) => {
            state.status = 'loading';
        },
        [createMaterial.fulfilled]: (state, action) => {
            state.status = 'success';
            state.inventories = action.payload;
        },
        [createMaterial.rejected]: (state, action) => {
            state.status = 'failed';
        },
    },
});

export default inventoriesSlice.reducer;
