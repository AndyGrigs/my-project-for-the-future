import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, RegistrationData, UserSchema } from "../types/user";
import axios from "axios";

// export const registerUser = createAsyncThunk(
//   "user/registerUser",
//   async (userData, thunkAPI) => {
//     try {
//       const response = await axios.post("/api/register", userData);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData: RegistrationData, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/register", userData);
      return response.data; // Return the user data on successful registration
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle errors
    }
  }
);

const initialState: UserSchema = {
  authData: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<User>) {
      state.authData = action.payload;
    },
    clearAuthData(state) {
      state.authData = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
