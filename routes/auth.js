const router = require("express").Router();

const { register } = require("../controller/auth");

const {
  newTodo,
  updateTodo,
  completeTask,
  deleteTask,
  getTodos,
} = require("../controller/todo");

const authenticate = require("../authenticate");

router.post("/register", register);

// Create Todo
router.post("/todo", authenticate, newTodo);

// Update Tod
router.post("/update", authenticate, updateTodo);

// Complete task
router.post("/complete", authenticate, completeTask);

// Delete Task
router.post("/delete", authenticate, deleteTask);

// All todo's
router.get("/todos", authenticate, getTodos);

module.exports = router;
