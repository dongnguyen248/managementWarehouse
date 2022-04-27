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
        const res = await userRequest
            .post(`ImportHistory/update-history-material`, data.importHistory)
            .then((response) => {
                if (response.status === 200) {
                    swal({
                        title: 'Update Import',
                        text: 'update Success!',
                        type: 'success',
                    }).then(function () {
                        window.location.replace(
                            'http://localhost:3000/history-import',
                        );
                    });
                } else {
                    swal('Update false please check and try again!');
                }
            })
            .catch((error) => {
                if (error.response) {
                    swal(error.response.data);
                } else if (error.request) {
                    swal(error.request.data);
                } else if (error.message) {
                    swal(error.message.data);
                }
            });

        return res.data;
    },
);
export const createImportHistory = createAsyncThunk(
    'createImportHistory',
    async (data, dispatch, getState) => {
        console.log(data);
        const res = await userRequest.post(
            `/ImportHistory/add-importHistory`,
            data,
        );
        if (res.status === 200) {
            swal({
                title: 'Create New Material',
                text: 'Create Success!',
                type: 'success',
            }).then(function () {
                window.location.replace('http://localhost:3000/history-import');
            });
        } else {
            swal('Create false please check and try again!');
        }
        return res.data;
    },
);
export const deleteImportHistory = createAsyncThunk(
    'deleteImportHistory',

    async (id) => {
        const res = await userRequest.delete(`/ImportHistory?id=${id}`);
        res.status === 200
            ? swal({
                  title: 'Delete History',
                  text: 'Delete Success!',
                  type: 'success',
              }).then(function () {
                  window.location.replace(
                      'http://localhost:3000/history-import',
                  );
              })
            : swal('Some thing went wrong!');
    },
);
