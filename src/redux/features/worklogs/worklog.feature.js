import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import worklogService from "./worklogService";

const initialState = {
    worklogList: [],
    newWorklog:[],
  loading: false,
  errorMessage: "",
}

export const getAllWorklogList = createAsyncThunk("worklog/getAllWorklogList", async () => {
    let response = await worklogService.getAll();
    return response.data.data
  });

export const createNewWorklog = createAsyncThunk("worklog/createNewWorklog", async (newData)=>{
    let response = await worklogService.createWorklog(newData);
    console.log(response);

    return response.data
})

export const selectWorklog = createAsyncThunk('worklog/selectWorklog',async(exp)=>{
  let response = await worklogService.selectedWorklog(exp)
  console.log(response)
  return response.data.data
})


const worklogSlice =  createSlice({
    name:'worklogs',
    initialState,
    extraReducers:{
      [getAllWorklogList.pending]:(state,action)=>{
         state.loading = true
      },
      [getAllWorklogList.fulfilled]:(state,action)=>{
        state.loading = false;
        state.worklogList = [...action.payload]
      },
      [getAllWorklogList.rejected]:(state,action)=>{
         state.loading = false;
         state.errorMessage = action.payload
      },
      [createNewWorklog.pending]: (state, action) => {
        state.loading = true;
      },
      [createNewWorklog.fulfilled]: (state, action) => {
        state.loading = false;
        state.newWorklog = action.payload;
        state.worklogList = [...action.payload];
      },
      [createNewWorklog.rejected]: (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      },

      [selectWorklog.pending]: (state, action) => {
        state.loading = true;
      },
      [selectWorklog.fulfilled]: (state, action) => {
        state.loading = false;
        state.worklogList = [...action.payload];
      },
      [selectWorklog.rejected]: (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      }
    }

})


export default worklogSlice.reducer;