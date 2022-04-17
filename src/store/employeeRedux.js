import {
    createEmployee,
    updateEmployee,
    deleteEmployee,
} from 'services/userService';
import { createSlice } from '@reduxjs/toolkit';

const emloyeeSlice = createSlice({
    name: 'Employees',
    initialState: {
        state: null,
        employees: [],
    },
    extraReducers: {
        [createEmployee.pending]: (state, action) => {
            state.status = 'loading';
        },
        [createEmployee.fulfilled]: (state, action) => {
            state.status = 'success';
            state.users = action.payload;
        },
        [updateEmployee.pending]: (state, action) => {
            state.status = 'loading';
        },
        [updateEmployee.fulfilled]: (state, action) => {
            state.status = 'success';
            state.users = action.payload;
        },
        [deleteEmployee.pending]: (state, action) => {
            state.status = 'loading';
        },
        [deleteEmployee.fulfilled]: (state, action) => {
            state.status = 'success';
            state.users = action.payload;
        },
    },
});
export default emloyeeSlice.reducer;
