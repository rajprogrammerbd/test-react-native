import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootTypeAppState } from "../../types";

const initialState: RootTypeAppState = {
    modalVisible: false,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        handleModalVisible: (state) => {
            state.modalVisible = !state.modalVisible
        }
    }
});

export const { handleModalVisible } = appSlice.actions;

export default appSlice.reducer;