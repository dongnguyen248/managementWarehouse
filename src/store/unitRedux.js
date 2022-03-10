import { createSlice } from '@reduxjs/toolkit';
import { getUnit } from 'services/inventoriesService';

const unitSlice = createSlice({
    name: 'unit',
    initialState: {
        unit: [],
        status: null,
    },
    extraReducers: {
        [getUnit.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getUnit.fulfilled]: (state, action) => {
            state.status = 'success';
            state.unit = action.payload;
        },
        [getUnit.rejected]: (state, action) => {
            state.status = 'failed';
        },
    },
});

export default unitSlice.reducer;
