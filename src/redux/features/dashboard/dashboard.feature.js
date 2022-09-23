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
  // active
  ideaPoc: [],
  activePoc: [],
  holdPoc: [],
  closedPoc: [],
  // bench
benchPoc: [],
benchReservedPoc: [],
benchFiveMonthsPoc:[],
  // 
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
    // console.log("PocCount data from the feature", response.data.data.percentages);
    return response.data.data;
  }
);
// active , hold , closedPocs
// 
export const getIdeaPoc = createAsyncThunk(
  "dashboard/getIdeaPoc",
  async () => {
    // const response = await axios.get(GET_POC_COUNT).then((res) => res.data);
    const response = await dashboardServices.ideaPoc();
    // console.log(response.data.data.Pocs);
    return response.data.data.Pocs;
  }
);
// 
export const getActivePoc = createAsyncThunk(
  "dashboard/getActivePoc",
  async () => {
    // const response = await axios.get(GET_POC_COUNT).then((res) => res.data);
    const response = await dashboardServices.activePoc();
    // console.log(response.data.data.Pocs);
    return response.data.data.Pocs;
  }
);
// 
export const getHoldPoc = createAsyncThunk(
  "dashboard/getHoldPoc",
  async () => {
    // const response = await axios.get(GET_POC_COUNT).then((res) => res.data);
    const response = await dashboardServices.holdPoc();
    // console.log("HoldPocRes:",response.data.data.Pocs);
    return response.data.data.Pocs;
  }
);
// 
export const getClosedPoc = createAsyncThunk(
  "dashboard/getClosedPoc",
  async () => {
    // const response = await axios.get(GET_POC_COUNT).then((res) => res.data);
    const response = await dashboardServices.closedPoc();
    // console.log("closedPocRes:",response.data);
    return response.data.data.Pocs;
  }
);

//  Cards API Bench Bench , BenchReserved , bench 5 months 
export const getBenchPoc = createAsyncThunk(
  "dashboard/getBenchPoc",
  async () => {
    // const response = await axios.get(GET_POC_COUNT).then((res) => res.data);
    const response = await dashboardServices.benchPoc();
    console.log("Bench- store :",response.data.data.data);
    return response.data.data.data;
  }
);
export const getBenchReservedPoc = createAsyncThunk(
  "dashboard/getBenchReservedPoc",
  async () => {
    // const response = await axios.get(GET_POC_COUNT).then((res) => res.data);
    const response = await dashboardServices.benchReservedPoc();
    console.log("BenchReserved  -store :", response.data.data.data);
    return response.data.data.data;
  }
);

export const getBenchFiveMonthsPoc = createAsyncThunk(
  "dashboard/getBenchFiveMonthsPoc",
  async () => {
    // const response = await axios.get(GET_POC_COUNT).then((res) => res.data);
    const response = await dashboardServices.benchFiveMonthsPoc();
    console.log("BenchData5months - store :",response.data.data.data);
    return response.data.data.data;
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
    console.log(" get all dashbard list from store",response.data.data);
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
      // console.log("loading");
    },
    [getPocCount.fulfilled]: (state, action) => {
      state.loading = false;
      state.pocCount = [action.payload];
      state.error = "";
      // console.log("success");
    },
    [getPocCount.rejected]: (state, action) => {
      state.loading = false;
      state.pocCount = [{}];
      state.error = action.error.message || console.log("error occured");
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
        // 
        [getIdeaPoc.pending]: (state, action) => {
          state.loading = true;
        },
        [getIdeaPoc.fulfilled]: (state, action) => {
          state.loading = false;
          state.ideaPoc =action.payload ;
          state.error = "";
        },
        [getIdeaPoc.rejected]: (state, action) => {
          state.loading = false;
          state.ideaPoc = [];
          state.error = action.error.message || console.log("error occured");
        },
    // 
    [getActivePoc.pending]: (state, action) => {
      state.loading = true;
    },
    [getActivePoc.fulfilled]: (state, action) => {
      state.loading = false;
      state.activePoc =action.payload ;
      state.error = "";
    },
    [getActivePoc.rejected]: (state, action) => {
      state.loading = false;
      state.activePoc = [];
      state.error = action.error.message || console.log("error occured");
    },
    // 
    [getHoldPoc.pending]: (state, action) => {
      state.loading = true;
    },
    [getHoldPoc.fulfilled]: (state, action) => {
      state.loading = false;
      state.holdPoc = action.payload;
      state.error = "";
    },
    [getHoldPoc.rejected]: (state, action) => {
      state.loading = false;
      state.holdPoc = [];
      state.error = action.error.message || console.log("error occured");
    },
    // 
    [getClosedPoc.pending]: (state, action) => {
      state.loading = true;
    },
    [getClosedPoc.fulfilled]: (state, action) => {
      state.loading = false;
      state.closedPoc = action.payload;
      state.error = "";
    },
    [getClosedPoc.rejected]: (state, action) => {
      state.loading = false;
      state.closedPoc = [];
      state.error = action.error.message || console.log("error occured");
    },

    //  Cards API Bench 
    [getBenchPoc.pending]: (state, action) => {
      state.loading = true;
    },
    [getBenchPoc.fulfilled]: (state, action) => {
      state.loading = false;
      state.benchPoc = action.payload;
      state.error = "";
    },
    [getBenchPoc.rejected]: (state, action) => {
      state.loading = false;
      state.benchPoc = [];
      state.error = action.error.message || console.log("error occured");
    },
    // bench reserved
    [getBenchReservedPoc.pending]: (state, action) => {
      state.loading = true;
    },
    [getBenchReservedPoc.fulfilled]: (state, action) => {
      state.loading = false;
      state.benchReservedPoc = action.payload;
      state.error = "";
    },
    [getBenchReservedPoc.rejected]: (state, action) => {
      state.loading = false;
      state.benchReservedPoc = [];
      state.error = action.error.message || console.log("error occured");
    },
        // bench 5 monts
        [getBenchFiveMonthsPoc.pending]: (state, action) => {
          state.loading = true;
        },
        [getBenchFiveMonthsPoc.fulfilled]: (state, action) => {
          state.loading = false;
          state.benchFiveMonthsPoc = action.payload;
          state.error = "";
        },
        [getBenchFiveMonthsPoc.rejected]: (state, action) => {
          state.loading = false;
          state.benchFiveMonthsPoc = [];
          state.error = action.error.message || console.log("error occured");
        },
  },
});

export default dashboardSlice.reducer;
