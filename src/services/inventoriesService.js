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
        console.log(data);
        const res = await userRequest.post('/addinventories', data);
        return res.data;
    },
);
export const searchInventories = createAsyncThunk(
    'searchInventories',
    async (arg, { rejectWithValue }) => {
        console.log(arg);
        const res = await publicRequest.get(
            `material/${arg.currentPage}/${arg.perPage}` + arg.option,
        );
        return res.data;
    },
);
export const getLineReciever = createAsyncThunk(
    'getLineReciever',
    async (dispatch, getState) => {
        const res = await publicRequest.get('/line');
        return res.data;
    },
);
export const getUnit = createAsyncThunk(
    'getUnit',
    async (dispatch, getState) => {
        const res = await publicRequest.get('/unit');
        return res.data;
    },
);
export const getArea = createAsyncThunk(
    'getArea',
    async (dispatch, getState) => {
        const res = await publicRequest.get('/zone');
        return res.data;
    },
);
export const getCostAccounts = createAsyncThunk(
    'getCoustAccount',
    async (dispatch, getState) => {
        const res = await publicRequest.get('/CostAccount');
        return res.data;
    },
);

export const getDepartment = createAsyncThunk(
    'getDeparment',
    async (dispatch, getState) => {
        const res = await publicRequest.get('/deparment');
        return res.data;
    },
);
export const createMaterial = createAsyncThunk(
    'createMaterial',
    async (data, { rejectWithValue }) => {
        console.log(data);
        const res = await userRequest.post('/material', data);
        console.log(res);
        return res.data;
    },
);
