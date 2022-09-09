import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = `http://brm-tool.ap-south-1.elasticbeanstalk.com`;

const GET_POC_LIST = `${BASE_URL}/poc/filter`;

const initialState = {
  pocList: [],
};

export const getPocList = createAsyncThunk("poc/getPocList", async (params) => {
  const response = await axios.post(GET_POC_LIST, { status: "Active" });
  return response.data;
});

const pocSlice = createSlice({
  name: "poc",
  initialState,
  extraReducers: {
    [getPocList.pending]: (state, action) => {
      state.fetchingPocList = true;
    },
    [getPocList.fulfilled]: (state, action) => {
      state.fetchingPocList = false;
      state.pocList = action.payload.data;
    },
    [getPocList.rejected]: (state, action) => {
      state.fetchingPocList = false;
      state.pocList = action.payload;
    },
  },
});

export default pocSlice.reducer;
