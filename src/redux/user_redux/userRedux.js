import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = true;
            state.currentUser = action.payload;
        },
        loginFail: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logoutSuccess: (state) => {
            state.currentUser = null;
            state.isFetching = false;
        },
    },
});
export const { loginStart, loginSuccess, loginFail, logoutSuccess } =
    userSlice.actions;
export default userSlice.reducer;