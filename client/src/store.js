import { configureStore } from "@reduxjs/toolkit";

import registerReducer from "./feature/auth/register";

export const store = configureStore({
  reducer: {
    auth: registerReducer,
  },
});
