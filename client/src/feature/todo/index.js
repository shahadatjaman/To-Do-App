import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  todos: null,
  error: null,
  isLoading: false,
  serachedText: "all",
  filteredText: "all",
};

// Create New Todos
export const createNewTodo = createAsyncThunk(
  "create/todo",
  async ({ values, navigate }) => {
    const token = localStorage.getItem("userInfo");

    return await fetch(`${process.env.REACT_APP_SERVER_URL}/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(values),
    })
      .then(async (response) => {
        let { todo } = await response.json();

        navigate(`/task_name/${todo.taskId}`);

        return response.json();
      })
      .catch((error) => console.log(error));
  }
);

// Get Todos
export const getTodos = createAsyncThunk("get/todo", async (action) => {
  let token = localStorage.getItem("userInfo");
  return await fetch(`${process.env.REACT_APP_SERVER_URL}/gettodo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ taskId: action.id }),
  })
    .then((resp) => resp.json())
    .catch((error) => console.log(error));
});

// Complete Todo
export const completeTodo = createAsyncThunk(
  "complete/todo",
  async (action, { rejectWithValue }) => {
    const token = localStorage.getItem("userInfo");
    try {
      const response = await fetch("/complete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(action),
      });

      return response.json();
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Task Slice
const todoSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = action;
    },
    search: (state, { payload }) => {
      state.serachedText = payload.toLowerCase();
    },
    filter: (state, { payload }) => {
      state.filteredText = payload;
    },
  },
  extraReducers: {
    // Create new todo
    [createNewTodo.pending]: (state) => {
      state.taskLoading = true;
    },
    [createNewTodo.fulfilled]: (state, { payload }) => {
      console.log(payload);
    },
    [createNewTodo.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    // Get Single Todo
    [createNewTodo.pending]: (state) => {
      state.taskLoading = true;
    },
    [getTodos.fulfilled]: (state, { payload }) => {
      if (payload.todo.length !== 0) {
        state.todos = payload.todo;
      } else {
        state.todos = null;
      }
    },
    [getTodos.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },

    // Complete todo list
    [completeTodo.pending]: (state) => {
      state.taskLoading = true;
    },
    [completeTodo.fulfilled]: (state, { payload }) => {
      console.log(payload);
    },
    [completeTodo.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export const { addTask, search, filter } = todoSlice.actions;

export default todoSlice.reducer;
