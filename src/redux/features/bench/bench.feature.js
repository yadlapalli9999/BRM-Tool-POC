import {  createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import Axios from 'axios';
const BASE_URL = `https://brm-tool.ap-south-1.elasticbeanstalk.com/`;

const initialState = {
    benchList:[],
    loading:false,
    errorMessage:''
}

export const getBench = createAsyncThunk('bench/getBench', async ()=>{
    let dataUrl = `${BASE_URL}/resources`;
    let response = await Axios.get(dataUrl)
    return response.data;
});


const benchSlice = createSlice({
    name:'bench',
    initialState:initialState,
    extraReducers: (builder)=>{
        builder.addCase(getBench.pending,(state,action)=>{
            state.loading = true
        }).addCase(getBench.fulfilled,(state,action)=>{
            state.loading= false;
            state.benchList = action.payload;
        }).addCase(getBench.rejected,(state,action)=>{
            state.loading= false;
            state.errorMessage = `Oops! Something goes wrong!`
        })
     }
})

export default benchSlice.reducer;