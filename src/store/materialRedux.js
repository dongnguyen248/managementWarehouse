import { createSlice } from '@reduxjs/toolkit';
import { getAllMaterial } from 'services/inventoriesService';

const materialsSlice = createSlice({
    name: 'materials',
    initialState: {
        materials: [],
        status: null,
    },
    extraReducers: {
        [getAllMaterial.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getAllMaterial.fulfilled]: (state, action) => {
            state.status = 'success';
            state.materials = action.payload;
        },
        [getAllMaterial.rejected]: (state, action) => {
            state.status = 'failed';
        },
    },
});

export default materialsSlice.reducer;
