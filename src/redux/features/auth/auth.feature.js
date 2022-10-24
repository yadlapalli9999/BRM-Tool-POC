import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuthToken } from "../../../util/tokenUtil";
import AuthService from "../../services/auth/auth.service";
import { setMessage } from "./message";
//const user = JSON.parse(localStorage.getItem("user"));
const BASE_URL = "http://brm-tool.ap-south-1.elasticbeanstalk.com";
// initialize userToken from local storage
// const access_token = localStorage.getItem('access_token')
//   ? localStorage.getItem('access_token')
//   : null
import API from "../../api";
const access_token = localStorage.getItem("access_token")
  ? localStorage.getItem("access_token")
  : null;
//const resourceID = localStorage.getItem('resourceID')? localStorage.getItem('resourceID'):null

let initialState = {
  access_token,
  resourceID: localStorage.getItem("resourceID"),
  role:localStorage.getItem('role')|| "",
  userInfo: null,
  isAuthenticated: false,
  loading: false,
  errorMessage: "",
};

// export const login = createAsyncThunk(
//     "resource/login",
//     async ({ email, password }, thunkAPI) => {
//       try {
//         const data = await AuthService.login(email, password);
//         return { user: data };
//       } catch (error) {
//         const message =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString();
//         thunkAPI.dispatch(setMessage(message));
//         return thunkAPI.rejectWithValue();
//       }
//     }
//   );
export const logOutUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/resources/login`, {
        email,
        password,
      });
      // {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   }
      // }
      //)
      // setAuthToken(data.data.access_token);
      // console.log(data)
      // localStorage.setItem('resourceID',data.data.resourceID)
      // localStorage.setItem("access_token",data.data.access_token)
      // return data.data;
      // setAuthToken(data.data.access_token);
      // access_token = data.data.access_token;
      // console.log(access_token)
      // resourceID = data.data.resourceID;
      // console.log(resourceID);
      // role = data.data.role
      // console.log(role)
      localStorage.setItem("access_token", data.data.access_token);
      localStorage.setItem("resourceID", data.data.resourceID);
      localStorage.setItem("role", data.data.role)
      
      // console.log(data.data.access_token);
      return data.data;
      //let data = await response.json()
      // console.log("response", data)
      // if (response.status === 200) {
      //   localStorage.setItem("token", data.access_token)
      //   console(data.access_token)
      //   return {user:data}
      // } else {
      //   return thunkAPI.rejectWithValue(data)
      // }
    } catch (error) {
      if (error.reponse && error.reponse.data.message) {
        // console.log(error.reponse.data.message);
        return rejectWithValue(error.reponse.data.message);
      } else {
        // console.log(error.message);
        return rejectWithValue(error.message);
      }
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/resources/login`, {
        email,
        password,
      });
      // {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   }
      // }
      //)
      // setAuthToken(data.data.access_token);
      // console.log(data)
      // localStorage.setItem('resourceID',data.data.resourceID)
      // localStorage.setItem("access_token",data.data.access_token)
      // return data.data;
      // setAuthToken(data.data.access_token);
      // access_token = data.data.access_token;
      // console.log(access_token)
      // resourceID = data.data.resourceID;
      // console.log(resourceID);
      // role = data.data.role
      // console.log(role)
      localStorage.setItem("access_token", data.data.access_token);
      localStorage.setItem("resourceID", data.data.resourceID);
      localStorage.setItem("role", data.data.role)
      
      // console.log(data.data.access_token);
      return data.data;
      //let data = await response.json()
      // console.log("response", data)
      // if (response.status === 200) {
      //   localStorage.setItem("token", data.access_token)
      //   console(data.access_token)
      //   return {user:data}
      // } else {
      //   return thunkAPI.rejectWithValue(data)
      // }
    } catch (error) {
      if (error.reponse && error.reponse.data.message) {
        // console.log(error.reponse.data.message);
        return rejectWithValue(error.reponse.data.message);
      } else {
        // console.log(error.message);
        return rejectWithValue(error.message);
      }
    }
  }
);

// export const loginUser = createAsyncThunk("auth/login",async({email,password},{rejectWithValue})=>{
//   try{
//     console.log(API)
//     const data = await API.post("/resources/login",{email,password})
//     localStorage.setItem('access_token',data.data.access_token)
//     console.log(data)
//     return data
//   }
//   catch (err) {
//     console.log('13', err);
//     return rejectWithValue(err.response.data);
//   }
// })
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{
    logout:() => {
      initialState.role = ""
      return initialState;
    }
  },
  extrareducers: {
    [loginUser.pending]: (state, action) => {
      state.loading = true;
      // state.errorMessage = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      localStorage.setItem("access_token", action.payload.access_token);
      localStorage.setItem("resourceID", action.payload.resourceID);

      localStorage.setItem("role", action.payload.role);

      // state.access_token = action.payload.access_token;
      //localStorage.setItem('access_token', action.payload.data.access_token)
      //localStorage.setItem('resourceID',action.payload.data.resourceID)
      console.log("?///////")
      console.log(action.payload)
      state.loading = false;
      state.access_token = action.payload.access_token;
      state.resourceID = action.payload.resourceID;
      state.role = action.payload.role
      state.isAuthenticated = true
      return state;
    },
    [loginUser.rejected]: (state, action) => {
      localStorage.removeItem("access_token");
      state.loading = false;
      state.errorMessage = null;
      state.isAuthenticated = false;
    },
  },
});
export default authSlice.reducer;
export const { logout } = authSlice.actions
