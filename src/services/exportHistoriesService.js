import { createAsyncThunk } from '@reduxjs/toolkit';
import swal from 'sweetalert';
import { publicRequest, userRequest } from 'utilities/requestMethod';
import moment from 'moment';
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

export const reportExcel = createAsyncThunk(
    'reportExcelDate',
    async (data, { rejectWithValue }) => {
        console.log(data);

        // Export/export-excel?fromDate=2022-04-01&toDate=2022-04-08'
        const res = await userRequest.get(
            `export/export-excel?fromDate=${moment(data.startDate).format(
                'YYYY-MM-DD',
            )}&toDate=${moment(data.endDate).format('YYYY-MM-DD')}`,
        );
        return res.data;
    },
);
