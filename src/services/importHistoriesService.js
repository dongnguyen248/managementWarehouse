import { createAsyncThunk } from '@reduxjs/toolkit';
import { publicRequest, userRequest } from 'utilities/requestMethod';
import swal from 'sweetalert';

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

export const updateImportHistory = createAsyncThunk(
    'updateImportHistory',
    async (data, dispatch, getState) => {
        const res = await publicRequest.post(
            `ImportHistory/update-history-material?qCode=${data.qCode}&remark=${data.remark}`,
            data.importHistory,
        );
        console.log(res);
        if (res.status === 200) {
            swal({
                title: 'Update Import',
                text: 'update Success!',
                type: 'success',
            }).then(function () {
                window.location.replace('http://localhost:3000/history-import');
            });
        } else {
            swal('Update false please check and try again!');
        }
        return res.data;
    },
);
