import {  createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import Axios from 'axios';
const BASE_URL = `http://brm-tool.ap-south-1.elasticbeanstalk.com`;

const initialState = {
    benchLists:[],
    loading:false,
    errorMessage:'',
    benchListItem:{}
}

export const getBench = createAsyncThunk('bench/getBench', async ()=>{
    let dataUrl = `${BASE_URL}/resources`;
    let response = await Axios.get(dataUrl)
    return response.data;
});
export const getBenchId = createAsyncThunk('bench/getBenchId',async(id)=>{
   let dataUrl = `${BASE_URL}/resources/${id}`;
   let response = await Axios.get(dataUrl)
   return response.data
})
export const createBench = createAsyncThunk('bench/createBench', async (newdata)=>{
    let dataUrl = `${BASE_URL}/resources`;
    let response = await Axios.post(dataUrl,newdata)
    return response.data
})


const benchSlice = createSlice({
    name:'bench',
    initialState,
    extraReducers:{
        [getBench.pending]:(state,action)=>{
            state.loading= true
        },
        [getBench.fulfilled]:(state,action)=>{
            state.loading = false;
            state.benchLists = action.payload;
        },
        [getBench.rejected]:(state,action)=>{
            state.loading = false;
            state.errorMessage = action.payload
        },
        [getBenchId.pending]:(state,action)=>{
            state.loading = false;
        },
        [getBenchId.fulfilled]:(state,action)=>{
            state.loading = false;
            state.benchListItem = action.payload
        },
        [getBenchId.rejected]:(state,action)=>{
            state.loading = false;
            state.errorMessage = action.payload
        },
        [createBench.pending]:(state,action)=>{
            state.loading = true
        },
        [createBench.fulfilled]:(state,action)=>{
            state.loading = false;
            state.benchLists = action.payload
        },
        [createBench.rejected]:(state,action)=>{
            state.loading = false;
            StaticRange.errorMessage=action.payload
        }
    }
})

export default benchSlice.reducer;