import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import pocServices from "./pocServices";

const initialState = {
  pocList: [],
  loading: false,
  errorMessage: "",
  singlePoc: {},
  newPoc: [],
};

export const getAllPoc = createAsyncThunk("poc/getAllPoc", async () => {
  let response = await pocServices.getAll();
  // console.log(response.data.data);
  return response.data.data;
});

export const getSinglePoc = createAsyncThunk("poc/getSinglePoc", async (id) => {
  let response = await pocServices.getSinglePocDetial(id);
  return response.data.data;
});

export const CreatePOC = createAsyncThunk("poc/CreatePOC", async (newData) => {
  let response = await pocServices.createPoc(newData);
  console.log(response.data.data);
  return response.data.data;
});

const pocSlice = createSlice({
  name: "poc",
  initialState,
  extraReducers: {
    [getAllPoc.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllPoc.fulfilled]: (state, action) => {
      state.loading = false;
      state.pocList = action.payload;
    },
    [getAllPoc.rejected]: (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    [getSinglePoc.pending]: (state, action) => {
      state.loading = true;
    },
    [getSinglePoc.fulfilled]: (state, action) => {
      state.loading = false;
      state.singlePoc = action.payload;
    },
    [getSinglePoc.rejected]: (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    [CreatePOC.pending]: (state, action) => {
      state.loading = true;
    },
    [CreatePOC.fulfilled]: (state, action) => {
      state.loading = false;
      state.newPoc = action.payload;
      state.pocList = action.payload;
    },
    [CreatePOC.rejected]: (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export default pocSlice.reducer;
