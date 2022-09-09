import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = `http://brm-tool.ap-south-1.elasticbeanstalk.com`;

const GET_POC_COUNT = `${BASE_URL}/dashboard/poc/count`;
const GET_SOURCE_COUNT = `${BASE_URL}/dashboard/resource/active`;
const initialState = {
  pocCount: [],
  resourceCount: [],
  loading: false,
  error: "",
};

export const getPocCount = createAsyncThunk(
  "dashboard/getPocCount",
  async () => {
    const response = await axios.get(GET_POC_COUNT).then((res) => res.data);
    return response;
  }
);

export const getResourceCount = createAsyncThunk(
  "dashboard/getResourceCount",
  async () => {
    const response = await axios.get(GET_SOURCE_COUNT).then((res) => res.data);
    return response;
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  extraReducers: {
    [getPocCount.pending]: (state, action) => {
      state.loading = true;
      console.log("loading");
    },
    [getPocCount.fulfilled]: (state, action) => {
      state.loading = false;
      state.pocCount = [action.payload.data];
      state.error = "";
      console.log("success");
    },
    [getPocCount.rejected]: (state, action) => {
      state.loading = false;
      state.pocCount = [{}];
      state.error = action.error.message || console.log("error occured");
      console.log("error");
    },
    [getResourceCount.pending]: (state, action) => {
      state.loading = true;
    },
    [getResourceCount.fulfilled]: (state, action) => {
      state.loading = false;
      state.resourceCount = [action.payload.data];
      state.error = "";
    },
    [getResourceCount.rejected]: (state, action) => {
      state.loading = false;
      state.resourceCount = [];
      state.error = action.error.message || console.log("error occured");
    },
  },
});

export default dashboardSlice.reducer;
