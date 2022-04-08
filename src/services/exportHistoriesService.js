import { createAsyncThunk } from '@reduxjs/toolkit';
import swal from 'sweetalert';
import { publicRequest } from 'utilities/requestMethod';

export const addExportHistory = createAsyncThunk(
    'addExportHistory',
    async (data, dispatch, getState) => {
        console.log(data);
        const res = await publicRequest.post('/Export/add-export', data);
        res.status === 200
            ? swal({
                  title: 'Export Material',
                  text: 'Export Success!',
                  type: 'success',
              }).then(function () {
                  window.location.replace('http://localhost:3000');
              })
            : swal('Some thing went wrong!');
        return res.data;
    },
);
export const getExportHistories = createAsyncThunk(
    'getExportHistories',
    async (data, dispatch, getState) => {
        const res = await publicRequest.get(
            `/export?page=${data.currentPage}&pageSize=${data.perPage}`,
        );
        return res.data;
    },
);
export const searchExportHistories = createAsyncThunk(
    'searchExportHistories',
    async (arg, { rejectWithValue }) => {
        const res = await publicRequest.get(
            `export/${arg.currentPage}/${arg.perPage}` + arg.option,
        );

        return res.data;
    },
);
