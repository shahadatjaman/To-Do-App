import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  email: null,
  password: null,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    register: (state, { payload }) => {
      axios
        .post("/auth/register", payload)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

export const { addEmail, register } = registerSlice.actions;

export default registerSlice.reducer;
