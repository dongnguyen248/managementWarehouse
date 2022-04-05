import { createAsyncThunk } from "@reduxjs/toolkit";
import data from "pages/HistoryExport/dataExport";
import { publicRequest, userRequest } from "utilities/requestMethod";
import { showModal,hideModal } from "store/modalRedux";

export const getImportHistories = createAsyncThunk(
    "getInventories",
    async (data, dispatch, getState) => {
        const res = await publicRequest.get(
            `/ImportHistory/${data.currentPage}/${data.perPage}`
        );
        return res.data;
    }
);
export const searchImportHistory = createAsyncThunk(
    "searchImportHistories",
    async (data, dispatch, getState) => {
        const res = await publicRequest.get(
            `/ImportHistory/${data.currentPage}/${data.perPage} ${data.option}`
        );
        return res.data;
    }
);

export const updateImportHistory = createAsyncThunk(
    "updateImportHistory",
    async (data, dispatch, getState) => {
        console.log(data)
        const res = await publicRequest.post(
            `ImportHistory/update-history-material?qCode=${data.qCode}&remark=${data.remark}`,
            data.importHistory
        );
        if(res.status == 200){
            dispatch(hideModal());
        }else{
            console.log("error")
        }
        return res.data;
    }
);
