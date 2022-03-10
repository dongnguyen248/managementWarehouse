import { createSlice } from '@reduxjs/toolkit';
import { getLineReciever } from 'services/inventoriesService';

const linRecieverSlide = createSlice({
    name: 'lineReciever',
    initialState: {
        line: [],
        status: null,
    },
    extraReducers: {
        [getLineReciever.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getLineReciever.fulfilled]: (state, action) => {
            state.status = 'success';
            state.line = action.payload;
        },
        [getLineReciever.rejected]: (state, action) => {
            state.status = 'failed';
        },
    },
});

export default linRecieverSlide.reducer;
