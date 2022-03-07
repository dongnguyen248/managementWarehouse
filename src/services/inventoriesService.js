import { createAsyncThunk } from '@reduxjs/toolkit';
import { publicRequest } from 'utilities/requestMethod';
export const getInventories = createAsyncThunk(
    'users/getUsers',
    async (dispatch, getState) => {
        const res = await publicRequest.get(
            'https://jsonplaceholder.typicode.com/users',
        );
        return res.data;
    },
);
