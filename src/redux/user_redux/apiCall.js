import {
    loginFail,
    loginStart,
    loginSuccess,
    logoutSuccess,
} from "./userRedux";
import { publicRequest } from "../../requestMethod";

export const login  = async(dispatch,user){
    dispatch(loginStart);
    try{
        const res = await publicRequest.post("user/login",user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFail(err));
    }
};
export const logout = (dispatch)=>{
    dispatch(logoutSuccess());
}
