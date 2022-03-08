import { createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest, userRequest } from "utilities/requestMethod";
export const getInventories = createAsyncThunk(
    "getInventories",
    async (data,dispatch, getState) => {
        console.log(data)
        const res = await publicRequest.get(`/material/${data.currentPage}/${data.perPage}`);
        return res.data;
    }
);
export const addInventories = createAsyncThunk(
    "addInventories",
    async(data,{ rejectWithValue })=>{
        console.log(data)
        const res = await userRequest.post("/addinventories",data);
        return res.data;
    }
    )
export const searchInventories = createAsyncThunk(
    "searchInventories",
    async(data,{rejectWithValue})=>{
        console.log(data)
        const res = await publicRequest.get(`material/${data.currentPage}/${data.perPage}/search?qcode=${data.qCode}&zone=${data.area}&location=${data.location}&item=${data.item}&specification=${data.spec}`)
        return res.data
    }
)