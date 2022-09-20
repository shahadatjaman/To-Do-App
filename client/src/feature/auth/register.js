import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecoder from "jwt-decode";
const initialState = {
  email: null,
  error: null,
  password: null,
  isLoading: false,
  isExist: null,
  isLogged: false,
  user: null,
};

// Check user is Exist
export const checkUser = createAsyncThunk("user/getUser", async (action) => {
  return await fetch(`${process.env.REACT_APP_SERVER_URL}/auth/checkuser`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: action.email }),
  })
    .then((resp) => resp.json())
    .catch((error) => console.log(error));
});

// Sign Up or Create New Account
export const signUp = createAsyncThunk(
  "user/signUp",
  async ({ email, password, navigate }) => {
    return await fetch(`${process.env.REACT_APP_SERVER_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((resp) => {
        navigate("/");
        return resp.json();
      })
      .catch((error) => console.log(error));
  }
);

// SignIn or Create New Account
export const signIn = createAsyncThunk(
  "user/signin",
  async ({ email, password, navigate }) => {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then(async (resp) => {
        if (resp.status === 400) {
          let message = await resp.json();
          return message;
        } else {
          navigate("/");
          return resp.json();
        }
      })
      .catch((error) => console.log(error));
  }
);

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

      if (payload.token) {
        localStorage.setItem("userInfo", payload.token);
        let user = jwtDecoder(payload.token);
        state.user = user;
      }
    },
    [signUp.rejected]: (state) => {
      state.isLoading = false;
    },

    // Sign In User
    [signIn.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [signIn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;

      if (payload.message) {
        state.error = payload.message;
      }

      if (payload.token) {
        localStorage.setItem("userInfo", payload.token);
        let user = jwtDecoder(payload.token);
        state.user = user;
      }
    },
    [signIn.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export const { addUser } = registerSlice.actions;

export default registerSlice.reducer;
