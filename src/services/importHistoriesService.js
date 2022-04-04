import { createAsyncThunk } from '@reduxjs/toolkit';
import { publicRequest, userRequest } from 'utilities/requestMethod';

export const getImportHistories = createAsyncThunk(
    'getInventories',
    async (data, dispatch, getState) => {
        const res = await publicRequest.get(
            `/ImportHistory/${data.currentPage}/${data.perPage}`,
        );
        return res.data;
    },
);
export const searchImportHistory = createAsyncThunk(
    'searchImportHistories',
    async (data, dispatch, getState) => {
        const res = await publicRequest.get(
            `/ImportHistory/${data.currentPage}/${data.perPage} ${data.option}`,
        );
        return res.data;
    },
);
