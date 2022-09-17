import { configureStore } from "@reduxjs/toolkit";

import registerReducer from "./feature/auth/register";

import taskReducer from "./feature/task/index";

import todoReducer from "./feature/todo/";

export const store = configureStore({
  reducer: {
    auth: registerReducer,
    task: taskReducer,
    todo: todoReducer,
  },
});
