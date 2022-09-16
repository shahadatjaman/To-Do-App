const router = require("express").Router();

const authenticate = require("../authenticate");
const {
  newTodo,
  updateTodo,
  getTodos,
  completeTodo,
  deleteTodo,
} = require("../controller/todo");

const { newTask, getTask, singleTask } = require("../controller/task");

// Create Task
router.post("/task", authenticate, newTask);

// Get Tasks
router.get("/gettask", authenticate, getTask);

// GET Single Task
router.post("/singletask", authenticate, singleTask);

// Create Todo
router.post("/todo", authenticate, newTodo);

// Update Tod
router.post("/update", authenticate, updateTodo);

// Complete Todo
router.post("/complete", authenticate, completeTodo);

// Delete Todo
router.post("/delete", authenticate, deleteTodo);

// All todo's
router.get("/todos", authenticate, getTodos);

module.exports = router;
