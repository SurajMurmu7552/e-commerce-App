import { createSlice } from "@reduxjs/toolkit";

const singleData = createSlice({
  name: "singleData",
  initialState: {
    item: null,
  },
  reducers: {
    addItem: (state, { payload }) => {
      state.item = payload;
    },
    removeItem: (state, action) => {
      state.item = null;
    },
  },
});

export const { addItem, removeItem } = singleData.actions;

export default singleData.reducer;
