import { createSlice } from '@reduxjs/toolkit';
import { publicRequest } from 'utilities/requestMethod';

const API_URL = 'https://reqres.in/api/users';
// ?page=${page}&per_page=${size}&delay=1
export const inventoriesSlice = createSlice({
    name: 'todo',
    initialState: {
        data: [],
        perPage: '',
        totalRow: '',
    },
    reducers: {
        getInventories: (state, action) => {
            state.data = [action.payload];
            state.perPage = action.payload.per_page;
            state.totalRow = action.payload.total;
        },
    },
});

export const getInventoriesAsync = (data) => async (dispatch) => {
    try {
        const response = await publicRequest.get('/inventories');
        dispatch(getInventories(response.data));
    } catch (err) {
        throw new Error(err);
    }
};

export default inventoriesSlice.reducer;
