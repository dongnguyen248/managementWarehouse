import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import { getArea } from 'services/inventoriesService';

const areaSlice = createSlice({
    name: 'area',
    initialState: {
        area: [],
        status: null,
    },
    extraReducers: {
        [getArea.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getArea.fulfilled]: (state, action) => {
            state.status = 'success';
            state.area = action.payload;
        },
        [getArea.rejected]: (state, action) => {
            state.status = 'failed';
        },
    },
});

export default areaSlice.reducer;
