import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getAllData = createAsyncThunk("data/getAllData", async (page) => {
  const response = await Axios.get(`http://localhost:8000?page=${page}`);

  const data = response.data;
  console.log(data);
  return data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    status: null,
    data: [],
    page: 1,
    end: false,
  },
  reducers: {
    updatePage: (state, action) => {
      state.page = state.page + 1;
    },
  },
  extraReducers: {
    [getAllData.pending]: (state, action) => {
      state.status = "loading";
    },
    [getAllData.fulfilled]: (state, { payload }) => {
      state.status = "success";
      if (payload.data.length > 0) {
        state.data = [...state.data, ...payload.data];
        state.end = payload.end;
      }
    },
    [getAllData.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export const { updatePage } = dataSlice.actions;

export default dataSlice.reducer;
