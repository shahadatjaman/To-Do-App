import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  task: null,
  todos: [],
  error: null,
  isLoading: false,
  taskLoading: false,
};

// Create NEW Taks
export const createNewTask = createAsyncThunk(
  "create/task",
  async ({ name, navigate }, { rejectWithValue }) => {
    const token = localStorage.getItem("userInfo");
    console.log(name);
    try {
      const response = await fetch("/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: name }),
      });

      navigate("/");

      return response.json();
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Get ALL Task
export const getTasks = createAsyncThunk("get/task", async () => {
  const token = localStorage.getItem("userInfo");
  console.log(process.env.REACT_APP_SERVER_URL);
  return await fetch(`${process.env.REACT_APP_SERVER_URL}/gettask`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => resp.json())
    .catch((error) => console.log(error));
});

//GET Single Task and Todos
export const singleTask = createAsyncThunk(
  "single/task",
  async (action, { rejectWithValue }) => {
    const token = localStorage.getItem("userInfo");

    try {
      const response = await fetch("/singletask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ taskId: action }),
      });

      return response.json();
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = action;
    },
  },
  extraReducers: {
    // Create Task
    [createNewTask.pending]: (state) => {},
    [createNewTask.fulfilled]: (state, { payload }) => {
      state.isNavigate = true;
      state.tasks.push(payload.task);
    },
    [createNewTask.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },

    // Get Task
    [getTasks.pending]: (state) => {
      state.taskLoading = true;
    },
    [getTasks.fulfilled]: (state, { payload }) => {
      state.taskLoading = false;
      if (payload) {
        state.tasks = payload.task;
      }
    },
    [getTasks.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    // GET Single Task with todo's
    [singleTask.pending]: (state) => {
      state.taskLoading = true;
    },
    [singleTask.fulfilled]: (state, { payload }) => {
      state.taskLoading = false;
      state.task = payload.task;
    },
    [singleTask.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
