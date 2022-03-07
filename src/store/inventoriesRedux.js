import { createSlice } from '@reduxjs/toolkit';
import { getInventories } from 'services/inventoriesService';

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
    },
});

export default inventoriesSlice.reducer;
