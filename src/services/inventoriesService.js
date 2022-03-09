import { createAsyncThunk } from '@reduxjs/toolkit';
import { publicRequest, userRequest } from 'utilities/requestMethod';

export const getInventories = createAsyncThunk(
    'getInventories',
    async (data, dispatch, getState) => {
        const res = await publicRequest.get(
            `/material/${data.currentPage}/${data.perPage}`,
        );
        return res.data;
    },
);
export const addInventories = createAsyncThunk(
    'addInventories',
    async (data, { rejectWithValue }) => {
        const res = await userRequest.post('/addinventories', data);
        return res.data;
    },
);
export const searchInventories = createAsyncThunk(
    'searchInventories',
    async (arg, { rejectWithValue }) => {
        const res = await publicRequest.get(
            `material/${arg.currentPage}/${arg.perPage}` + arg.option,
        );
        return res.data;
    },
);
