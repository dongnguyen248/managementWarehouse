import { createSlice } from '@reduxjs/toolkit';
import { getCostAccounts } from 'services/inventoriesService';

const costAccoutSlice = createSlice({
    name: 'costAccout',
    initialState: {
        costAccounts: [],
        status: null,
    },
    extraReducers: {
        [getCostAccounts.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getCostAccounts.fulfilled]: (state, action) => {
            state.status = 'success';
            state.costAccounts = action.payload;
        },
        [getCostAccounts.rejected]: (state, action) => {
            state.status = 'failed';
        },
    },
});

export default costAccoutSlice.reducer;
