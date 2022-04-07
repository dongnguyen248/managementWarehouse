import { createAsyncThunk } from '@reduxjs/toolkit';
import { publicRequest } from 'utilities/requestMethod';

export const addExportHistory = createAsyncThunk(
    'addExportHistory',
    async (data, dispatch, getState) => {
        const res = await publicRequest.post(`Export/add-export`, data);
        return res.data;
    },
);
export const getExportHistories = createAsyncThunk(
    'getExportHistories',
    async (data, dispatch, getState) => {
        const res = await publicRequest.get(
            `/export/${data.currentPage}/${data.perPage}`,
        );
        return res.data;
    },
);
export const searchExportHistories = createAsyncThunk(
    'searchExportHistories',
    async (arg, { rejectWithValue }) => {
        const res = await exportlicRequest.get(
            `export/${arg.currentPage}/${arg.perPage}` + arg.option,
        );
        return res.data;
    },
);
