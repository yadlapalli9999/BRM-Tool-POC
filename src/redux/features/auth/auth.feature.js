import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios";
import { setAuthToken } from "../../../util/tokenUtil";
import AuthService from '../../services/auth/auth.service';
import { setMessage } from "./message";
//const user = JSON.parse(localStorage.getItem("user"));
const BASE_URL ='http://brm-tool.ap-south-1.elasticbeanstalk.com';
// initialize userToken from local storage
// const access_token = localStorage.getItem('access_token')
//   ? localStorage.getItem('access_token')
//   : null

const access_token = localStorage.getItem('access_token')
  ? localStorage.getItem('access_token')
  : null
const initialState = {
  access_token,
  userInfo:null,
  isAuthenticated : false,
  loading:false,
  errorMessage:''
}

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

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, {rejectWithValue}) => {
    try {
      const {data} = await axios.post(
        `${BASE_URL}/resources/login`,{email,password},
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
      setAuthToken(data.access_token);
      localStorage.setItem("access_token",data.access_token)
      return data;
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
      if(error.reponse && error.reponse.data.message){
        console.log(error.reponse.data.message);
        return rejectWithValue(error.reponse.data.message)
      }
      else{
        console.log(error.message);
        return rejectWithValue(error.message)
      }
    }
  }
)
const authSlice = createSlice({
    name:'auth',
    initialState,
    extrareducers:{
        [loginUser.pending]:(state,action)=>{
          state.loading= true,
          state.errorMessage = null;
        },
        [loginUser.fulfilled]: (state, action) => {
          localStorage.setItem('access_token', action.payload.access_token)
            state.loading = false;
            state.userInfo = action.payload;
            state.access_token =action.payload.access_token;
            state.isAuthenticated = true
        },
        [loginUser.rejected]: (state, action) => {
          localStorage.removeItem('access_token')
            state.loading = false;
            state.errorMessage = null;
            state.isAuthenticated = false

        },
    }
})

export default  authSlice.reducer;