import { createSlice } from '@reduxjs/toolkit';
import {
    getImportHistories,
    searchImportHistory,
} from 'services/importHistoriesService';

const importHistoriesSlice = createSlice({
    name: 'importHistories',
    initialState: {
        importHistories: [],
        status: false,
    },
    extraReducers: {
        [getImportHistories.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getImportHistories.fulfilled]: (state, action) => {
            state.status = 'success';
            state.importHistories = action.payload;
        },
        [searchImportHistory.pending]: (state, action) => {
            state.status = 'loading';
        },
        [searchImportHistory.fulfilled]: (state, action) => {
            state.status = 'success';
            console.log(action.payload);
            state.importHistories = action.payload;
        },
    },
});
export default importHistoriesSlice.reducer;
