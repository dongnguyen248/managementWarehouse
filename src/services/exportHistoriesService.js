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
        const res = await userRequest
            .get(
                `export/export-excel?fromDate=${moment(data.startDate).format(
                    'YYYY-MM-DD',
                )}&toDate=${moment(data.endDate).format('YYYY-MM-DD')}`,
                { method: 'GET', responseType: 'blob' },
            )
            .then((response) => {
                const url = window.URL.createObjectURL(
                    new Blob([response.data]),
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    `Dally-Report--${moment(Date.now()).format(
                        'YYYYMMDDHHMMSS',
                    )}.xlsx`,
                );
                document.body.appendChild(link);
                link.click();
            });
    },
);

export const exportExcelHistoriesExport = createAsyncThunk(
    'exportExcel',
    async (data, { rejectWithValue }) => {
        await userRequest
            .get(
                `export/export-histories-excel?fromDate=${moment(
                    data.startDate,
                ).format('YYYY-MM-DD')}&toDate=${moment(data.endDate).format(
                    'YYYY-MM-DD',
                )}`,
                { method: 'GET', responseType: 'blob' },
            )
            .then((response) => {
                const url = window.URL.createObjectURL(
                    new Blob([response.data]),
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    `Histories-Export--${moment(Date.now()).format(
                        'YYYYMMDDHHMMSS',
                    )}.xlsx`,
                );
                document.body.appendChild(link);
                link.click();
            });
    },
);
export const getAllExportHistories = createAsyncThunk(
    'getAllExport',
    async () => {
        const res = await publicRequest.get('Export/export-histories');
        return res.data;
    },
);
export const deleteExportHistory = createAsyncThunk(
    'deleteHistory',

    async (id) => {
        const res = await userRequest.delete(`/Export?id=${id}`);
        res.status === 200
            ? swal({
                  title: 'Delete History',
                  text: 'Delete Success!',
                  type: 'success',
              }).then(function () {
                  window.location.replace(
                      'http://localhost:3000/history-export',
                  );
              })
            : swal('Some thing went wrong!');
    },
);
export const updateExportHistory = createAsyncThunk(
    'updateExportHistories',
    async (data, dispatch, getState) => {
        const res = await userRequest
            .put(`/Export`, data)
            .then((response) => {
                if (response.status === 200) {
                    swal({
                        title: 'Update Import',
                        text: 'update Success!',
                        type: 'success',
                    }).then(function () {
                        window.location.replace(
                            'http://localhost:3000/history-export',
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
