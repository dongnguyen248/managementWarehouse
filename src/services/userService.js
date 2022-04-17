import { createAsyncThunk } from '@reduxjs/toolkit';
import swal from 'sweetalert';
import {
    loginFail,
    loginStart,
    loginSuccess,
    logoutSuccess,
} from '../store/userRedux';
import { publicRequest, userRequest } from '../utilities/requestMethod.js';

export const login = async (dispatch, user) => {
    dispatch(loginStart);
    try {
        const res = await publicRequest.post('/token', user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFail(err));
    }
};
export const logout = (dispatch) => {
    dispatch(logoutSuccess());
};
export const createEmployee = createAsyncThunk(
    'createEmployee',
    async (data, dispatch, getState) => {
        const res = await userRequest.post('/Token/add-user', data);
        res.status === 200
            ? swal({
                  title: 'Create New Employee',
                  text: 'Create Success!',
                  type: 'success',
              }).then(function () {
                  window.location.replace('http://localhost:3000/user-list');
              })
            : swal('Some thing went wrong!');
        return res.data;
    },
);

export const updateEmployee = createAsyncThunk(
    'updateEmployee',
    async (data, dispatch) => {
        const res = await userRequest.post('/Token/update-user', data);
        res.status === 200
            ? swal({
                  title: 'Update  Employee',
                  text: 'Update Success!',
                  type: 'success',
              }).then(function () {
                  window.location.replace('http://localhost:3000/user-list');
              })
            : swal('Some thing went wrong!');
        return res.data;
    },
);

export const deleteEmployee = createAsyncThunk(
    'deleteEmployee',
    async (id, dispatch) => {
        console.log(id);
        const res = await userRequest.delete(`token/delete-user?id=${id}`);
        res.status === 200
            ? swal({
                  title: 'Delete Employee',
                  text: 'Delete Success!',
                  type: 'success',
              }).then(function () {
                  window.location.replace('http://localhost:3000/user-list');
              })
            : swal('Some thing went wrong!');
    },
);
export const changePassword = createAsyncThunk(
    'changePassword',
    async (data, dispatch) => {
        console.log(data.id);
        const res = await userRequest.delete(
            `token/delete-user?id=${data.id}&newPassword=${data.newPassword}`,
        );
        res.status === 200
            ? swal({
                  title: 'Change Password Employee',
                  text: 'Change Password Success!',
                  type: 'success',
              }).then(function () {
                  window.location.replace('http://localhost:3000/user-list');
              })
            : swal('Some thing went wrong!');
    },
);
