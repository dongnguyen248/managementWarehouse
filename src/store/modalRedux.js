import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        stateModal: false,
    },
    reducers: {
        showModal: (state) => {
            state.stateModal = true;
        },
        hideModal: (state) => {
            state.stateModal = false;
        },
    },
});
export const {showModal,hideModal} = modalSlice.actions;
export default modalSlice.reducer;
