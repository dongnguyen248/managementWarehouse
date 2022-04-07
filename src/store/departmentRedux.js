import { createSlice } from '@reduxjs/toolkit';
import { getDepartment } from 'services/inventoriesService';

const departmentSlice = createSlice({
    name: 'department',
    initialState: {
        departments: [],
        status: null,
    },
    extraReducers: {
        [getDepartment.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getDepartment.fulfilled]: (state, action) => {
            state.status = 'success';
            state.departments = action.payload;
        },
        [getDepartment.rejected]: (state, action) => {
            state.status = 'failed';
        },
    },
});

export default departmentSlice.reducer;
