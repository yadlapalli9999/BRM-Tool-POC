import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import pocServices from "./pocServices";

const initialState = {
  pocList: [],
  loading: false,
  errorMessage: "",
  singlePoc: {},
  updateSinglePOCValue: {},
  newPoc: [],
  benchLists: [],
};

export const getAllPoc = createAsyncThunk("poc/getAllPoc", async () => {
  let response = await pocServices.getAll();
  // console.log(response.data.data);
  return response.data.data;
});

export const getSinglePoc = createAsyncThunk("poc/getSinglePoc", async (id) => {
  let response = await pocServices.getSinglePocDetial(id);
  // console.log(response.data.data);
  return response.data.data;
});

export const CreatePOC = createAsyncThunk("poc/CreatePOC", async (newData) => {
  const tempMembersArray = newData.members.map((item) => item.searchId);
  newData.members = tempMembersArray;

  let response = await pocServices.createPoc(newData);
  // console.log(response.data.data);
  return response.data.data;
});

export const updateSinglePoc = createAsyncThunk(
  "poc/updateSinglePoc",
  async (newData) => {
    const tempMembersArray = newData.members.map(
      (item) => item.searchId || item._id
    );
    newData.members = tempMembersArray;
    let response = await pocServices.updatePoc(newData);
    // console.log(response.data.data);
    return response.data.data;
  }
);

export const getBench = createAsyncThunk("bench/getBench", async () => {
  const response = await BenchServices.getAll();
  //console.log(response)
  return response.data.data;
});

export const searchPOC = createAsyncThunk(
  "bench/searchBench",
  async (query) => {
    // console.log(query);
    let response = await pocServices.searchTitle(query);
    // console.log(response);

    return response.data.data;
  }
);

const pocSlice = createSlice({
  name: "poc",
  initialState,
  extraReducers: {
    [getBench.pending]: (state, action) => {
      state.loading = true;
    },
    [getBench.fulfilled]: (state, action) => {
      state.loading = false;
      state.benchLists = [...action.payload];
    },
    [getBench.rejected]: (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
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
    [searchPOC.pending]: (state, action) => {
      state.loading = true;
    },
    [searchPOC.fulfilled]: (state, action) => {
      state.loading = false;
      state.benchLists = action.payload;
      // console.log("success")
    },
    [searchPOC.rejected]: (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
      console.log("Failed");
    },
    [updateSinglePoc.pending]: (state, action) => {
      state.loading = true;
    },
    [updateSinglePoc.fulfilled]: (state, action) => {
      state.loading = false;
      state.updateSinglePOCValue = action.payload;
    },
    [updateSinglePoc.rejected]: (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export default pocSlice.reducer;
