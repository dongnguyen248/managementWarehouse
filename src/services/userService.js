import {
    loginFail,
    loginStart,
    loginSuccess,
    logoutSuccess,
} from '../store/userRedux';
import { publicRequest } from '../utilities/requestMethod.js';

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
