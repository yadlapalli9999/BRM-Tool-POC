import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import AuthService from '../../services/auth/auth.service';
import { setMessage } from "./message";
const user = JSON.parse(localStorage.getItem("user"));

const initialState = user ? { isLoggedIn: true, user }: { isLoggedIn: false, user: null };

export const login = createAsyncThunk(
    "resource/login",
    async ({ username, password }, thunkAPI) => {
      try {
        const data = await AuthService.login(username, password);
        return { user: data };
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
      }
    }
  );
const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    extrareducers:{
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    }
})

export default  authSlice.reducer;