import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import dashboardServices from "./dashboardServices";
const BASE_URL = `http://brm-tool.ap-south-1.elasticbeanstalk.com/`;
const GET_POC_COUNT = `${BASE_URL}dashboard/poc/count`;
const GET_SOURCE_ACTIVE = `${BASE_URL}dashboard/resource/active`;
const GET_SOURCE_COUNT = `${BASE_URL}dashboard/resource/count`;
const GET_DASHBOARD_ALL_POCS = `${BASE_URL}poc`;
// const access_token = localStorage.getItem("access_token");
const initialState = {
  pocCount: [],
  resourceActive: [],
  resourceCount: [],
  dashboardPoc: [],
  inActiveResources: [],
  loading: false,
  error: "",
};

export const getPocCount = createAsyncThunk(
  "dashboard/getPocCount",
  async () => {
    // const response = await axios.get(GET_POC_COUNT).then((res) => res.data);
    const response = await dashboardServices.pocCount();
    // console.log(response);
    return response.data.data;
  }
);

export const getResourceActive = createAsyncThunk(
  "dashboard/getResourceActive",
  async () => {
    // const response = await axios.get(GET_SOURCE_ACTIVE).then((res) => res.data);
    const response = await dashboardServices.resourceActive();
    // console.log(response);
    return response.data.data;
  }
);

export const getResourceCount = createAsyncThunk(
  "dashboard/getResourceCount",
  async () => {
    // const response = await axios.get(GET_SOURCE_COUNT).then((res) => res.data);
    const response = await dashboardServices.resourceCount();
    return response.data.data;
  }
);
export const getAllDashBoardPocs = createAsyncThunk(
  "dashboard/getAllDashBoardPocs",
  async () => {
    // const response = await axios
    //   .get(GET_DASHBOARD_ALL_POCS)
    //   .then((res) => res.data);
    const response = await dashboardServices.allDashBoardPocs();
    console.log(response.data.data);
    return response.data.data;
  }
);

export const getInActiveResources = createAsyncThunk(
  "dashboard/getInActiveResources",
  async () => {
    const response = await dashboardServices.inActiveResources();
    return response.data.data;
  }
);

// Piechart 

// export const getPieChartData = createAsyncThunk(
//   "dashboard/getPieChartData",
//   async () => {
//     // const response = await axios.get(GET_POC_COUNT).then((res) => res.data);
//     const response = await dashboardServices.getPieChartData();
//     // console.log(response);
//     return response.data.data;
//   }
// );


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
      state.pocCount = [action.payload];
      state.error = "";
      console.log("success");
    },
    [getPocCount.rejected]: (state, action) => {
      state.loading = false;
      state.pocCount = [{}];
      state.error = action.error.message || console.log("error occured");
      console.log("error");
    },
    [getResourceActive.pending]: (state, action) => {
      state.loading = true;
    },
    [getResourceActive.fulfilled]: (state, action) => {
      state.loading = false;
      state.resourceActive = [action.payload];
      state.error = "";
    },
    [getResourceActive.rejected]: (state, action) => {
      state.loading = false;
      state.resourceActive = [{}];
      state.error = action.error.message || console.log("error occured");
    },
    [getResourceCount.pending]: (state, action) => {
      state.loading = true;
    },
    [getResourceCount.fulfilled]: (state, action) => {
      state.loading = false;
      state.resourceCount = [action.payload];
      state.error = "";
    },
    [getResourceCount.rejected]: (state, action) => {
      state.loading = false;
      state.resourceCount = [{}];
      state.error = action.error.message || console.log("error occured");
    },
    [getAllDashBoardPocs.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllDashBoardPocs.fulfilled]: (state, action) => {
      state.loading = false;
      state.dashboardPoc = [action.payload];
      state.error = "";
    },
    [getAllDashBoardPocs.rejected]: (state, action) => {
      state.loading = false;
      state.dashboardPoc = [];
      state.error = action.error.message || console.log("error occured");
    },
    [getInActiveResources.pending]: (state, action) => {
      state.loading = true;
    },
    [getInActiveResources.fulfilled]: (state, action) => {
      state.loading = false;
      state.inActiveResources = action.payload;
      state.error = "";
    },
    [getInActiveResources.rejected]: (state, action) => {
      state.loading = false;
      state.inActiveResources = [];
      state.error = action.error.message || console.log("error occured");
    },
    // [getPieChartData.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [getPieChartData.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.pieChartData = action.payload;
    //   state.error = "";
    // },
    // [getPieChartData.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.pieChartData = [];
    //   state.error = action.error.message || console.log("error occured");
    // },
  },
});

export default dashboardSlice.reducer;
