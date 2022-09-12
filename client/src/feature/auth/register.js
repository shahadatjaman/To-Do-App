import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import jwtDecoder from "jwt-decode";
const initialState = {
  email: null,
  password: null,
  isLoading: false,
  isExist: null,
  user: null,
};

// Check user is Exist
export const checkUser = createAsyncThunk("user/getUser", async (action) => {
  return await fetch("/auth/checkuser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: action.email }),
  })
    .then((resp) => resp.json())
    .catch((error) => console.log(error));
});

export const signUp = createAsyncThunk("user/signUp", async (action) => {
  return await fetch("/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: action.email, password: action.password }),
  })
    .then((resp) => resp.json())
    .catch((error) => console.log(error));
});

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    // Check user
    [checkUser.pending]: (state) => {
      state.isLoading = true;
    },
    [checkUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.email = payload.email;
      state.isExist = payload.message;
    },
    [checkUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isExist = payload.message;
    },

    // Sign Up User
    [signUp.pending]: (state) => {
      state.isLoading = true;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isExist = payload.message;
      console.log(payload);
      if (payload.token) {
        localStorage.setItem("userInfo", payload.token);
        let user = jwtDecoder(payload.token);
        state.user = user;
      }
    },
    [signUp.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addUser } = registerSlice.actions;

export default registerSlice.reducer;
