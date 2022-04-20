import { createSlice } from '@reduxjs/toolkit';
import {
    getExportHistories,
    getAllExportHistories,
} from 'services/exportHistoriesService';

const exportHistoriesSlice = createSlice({
    name: 'exportHistories',
    initialState: {
        exportHistories: [],
        status: null,
    },
    extraReducers: {
        [getExportHistories.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getExportHistories.fulfilled]: (state, action) => {
            state.status = 'success!';
            state.exportHistories = action.payload;
        },
        [getAllExportHistories.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getAllExportHistories.fulfilled]: (state, action) => {
            state.status = 'success!';
            state.exportHistories = action.payload;
        },
    },
});

export default exportHistoriesSlice.reducer;
