import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import AuthService from '../../services/auth/auth.service';
import { setMessage } from "./message";
const user = JSON.parse(localStorage.getItem("user"));
const BASE_URL ='http://brm-tool.ap-south-1.elasticbeanstalk.com';

const initialState = {
  user:{},
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
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        `${BASE_URL}/resource/login`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      )
      let data = await response.json()
      console.log("response", data)
      if (response.status === 200) {
        localStorage.setItem("token", data.token)
        return data
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (e) {
      console.log("Error", e.response.data)
      thunkAPI.rejectWithValue(e.response.data)
    }
  }
)
const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    extrareducers:{
        [loginUser.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        [loginUser.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    }
})

export default  authSlice.reducer;