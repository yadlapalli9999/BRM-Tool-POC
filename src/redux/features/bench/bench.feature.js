import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import { act } from "react-dom/test-utils";
import BenchServices from "./benchServices";
const BASE_URL = `http://brm-tool.ap-south-1.elasticbeanstalk.com`;

const initialState = {
  benchLists: [],
  loading: false,
  errorMessage: "",
  benchListItem: {
    //     name:'',
    // email:'',
    // emp_id:'',
    // password:'',
    // totalWorkExp:Number,
    // totalExpinFission:Number,
    // primarySkills:[{
    //   skillName:'',
    //   totalExp:Number
    // }],
    // reportingManager:'',
    // projectName:'',
    // teamLead:'',
    // status:'',
    // notes:''
  },
};

// export const getBench = createAsyncThunk('bench/getBench', async ()=>{
//     let dataUrl = `${BASE_URL}/resources`;
//     let response = await Axios.get(dataUrl)
//     console.log(response)
//     return response.data.data;
// });
export const getBench = createAsyncThunk("bench/getBench", async () => {
  const response = await BenchServices.getAll();
  //console.log(response)
  return response.data.data;
});
export const getBenchId = createAsyncThunk(
  "bench/getBenchId",
  async ({ id }) => {
    let response = await BenchServices.get(id);
    return response.data.data;
  }
);

export const createBench = createAsyncThunk(
  "bench/createBench",
  async (newData) => {
    let response = await BenchServices.create(newData);
    //console.log(response)
    return response.data;
  }
);
// export const getBenchId = createAsyncThunk('bench/getBenchId',async(id)=>{
//    let dataUrl = `${BASE_URL}/resources/${id}`;
//    let response = await Axios.get(dataUrl)
//    return response.data
// })
// export const createBench = createAsyncThunk('bench/createBench', async (newdata)=>{
//     let dataUrl = `${BASE_URL}/resources`;
//     let response = await Axios.post(dataUrl,newdata)
//     return response.data
// })

export const updateBench = createAsyncThunk(
  "bench/updateBench",
  async (newData) => {
    console.log(newData);

    let response = await BenchServices.update(newData);
    //console.log(newBench)
    console.log(response);
    return response.data.data;
  }
);

export const deleteBench = createAsyncThunk(
  "bench/deleteBench",
  async ({ id }) => {
    await BenchServices.remove(id);
    return id;
  }
);

export const searchBench = createAsyncThunk(
  "bench/searchBench",
  async (query) => {
    console.log(query);
    let response = await BenchServices.searchTitle(query);
    console.log(response);

    return response.data.data;
  }
);

export const updateSingleResourceBench = createAsyncThunk(
  "bench/updateSingleResourceBench",
  async (newData) => {
    console.log(newData);
    let response = await BenchServices.updateSingleResource(newData);
    console.log(response);
  }
);

const benchSlice = createSlice({
  name: "bench",
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
    [getBenchId.pending]: (state, action) => {
      state.loading = false;
    },
    [getBenchId.fulfilled]: (state, action) => {
      state.loading = false;
      state.benchListItem = { ...action.payload };
    },
    [getBenchId.rejected]: (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    [createBench.pending]: (state, action) => {
      state.loading = true;
    },
    [createBench.fulfilled]: (state, action) => {
      state.loading = false;
      state.benchLists = action.payload;
    },
    [createBench.rejected]: (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    [updateBench.pending]: (state, action) => {
      state.loading = false;
    },
    [updateBench.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
      const id = action.payload;

      const benchLists = state.benchLists.filter((item) => item._id !== id);
      state.benchLists = [...benchLists, action.payload];
      // state.benchLists.find(id=>id._id === action.payload.id)? action.payload :action.payload._id
      //     const index = state.benchLists.findIndex(x => x.id === action.payload.id);
      //   state[index] = {
      // ...state[index],
      // ...action.payload,
    },
    [updateBench.rejected]: (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    [deleteBench.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteBench.fulfilled]: (state, action) => {
      state.loading = false;
      let index = state.benchLists.findIndex((id) => id === action.payload.id);
      state.benchLists.splice(index, 1);
    },
    [deleteBench.rejected]: (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    [searchBench.pending]: (state, action) => {
      state.loading = true;
    },
    [searchBench.fulfilled]: (state, action) => {
      state.loading = false;
      state.benchLists = action.payload;
    },
    [searchBench.rejected]: (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    [updateSingleResourceBench.pending]: (state, action) => {
      state.loading = true;
    },
    [updateSingleResourceBench.fulfilled]: (state, action) => {
      state.loading = false;
      state.benchListItem = action.payload;
    },
    [updateSingleResourceBench.pending]: (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export default benchSlice.reducer;
