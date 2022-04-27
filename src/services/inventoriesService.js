import { createAsyncThunk } from '@reduxjs/toolkit';
import swal from 'sweetalert';
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
export const getAllMaterial = createAsyncThunk(
    'getAllMaterial',
    async (dispatch, getState) => {
        const res = await publicRequest.get('/Material');
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
        const res = await userRequest.post('/material', data);
        res.status === 200
            ? swal({
                  title: 'Create New Material',
                  text: 'Create Success!',
                  type: 'success',
              }).then(function () {
                  window.location.replace('http://localhost:3000');
              })
            : swal('Some thing went wrong!');
        return res.data;
    },
);
export const updateMaterial = createAsyncThunk(
    'updateMaterial',
    async (data, { rejectWithValue }) => {
        const res = await userRequest.put('/material', data);
        res.status === 200
            ? swal({
                  title: 'Update Material',
                  text: 'Update Success!',
                  type: 'success',
              }).then(function () {
                  window.location.replace('http://localhost:3000');
              })
            : swal('Some thing went wrong!');
        return res.data;
    },
);
