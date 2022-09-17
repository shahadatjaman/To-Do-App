const jwt_decoder = require("jwt-decode");

const User = require("../model/user");

const Task = require("../model/task");

const Todo = require("../model/todo");

const { clientError, serverError } = require("../errors/errors");

const { todoValidator } = require("../validation/todoValidation");

module.exports = {
  // Create new Todo
  async newTodo(req, res) {
    let { title, date, taskId, desc } = req.body;

    let { _id, email } = req.user;

    let { errors, isValid } = todoValidator({ title, taskId, date });

    // If is not valid Input
    if (!isValid) {
      return res.status(400).json({ errors });
    }

    let user = await User.findById(_id);

    if (!user) {
      return clientError(res, "User Invalid!");
    }

    let task = await Task.findById(taskId);
    if (!task) {
      return res.status(400).json({ ok: false, message: "Task Not Found!" });
    }

    let newTodo = new Todo({
      userId: _id,
      title,
      taskId,
      date,
      desc,
      isComplete: false,
      createdAt: new Date().toISOString(),
    });

    let createdTodo = await newTodo.save();

    res.status(200).json({ todo: createdTodo });
  },

  // Get Todo
  async getTodo(req, res) {
    let { taskId } = req.body;

    if (!taskId) {
      return clientError(res, "Must Provid Task ID!");
    }
    const todo = await Todo.find({ taskId });
    if (!todo) {
      return clientError(res, "Todo Not Found!");
    }
    res.status(200).json({
      todo,
    });
  },

  // Update Todo
  async updateTodo(req, res) {
    let { todoId, title, group, date } = req.body;

    if (!todoId) {
      return res.status(400).json({ message: "Must provid Todo Id!" });
    }

    let todo = await Todo.findOneAndUpdate(
      { _id: todoId },
      { $set: { title, group, date } }
    );

    res.status(200).json({
      todo,
    });
  },
  // Complete Task
  async completeTodo(req, res) {
    let { todoId } = req.body;
    if (!todoId) {
      return res.status(400).json({ message: "Must provid Todo Id!" });
    }

    let todo = await Todo.findById(todoId);

    if (!todo) {
      return res.status(400).json({ message: "Invalid Id!" });
    }

    if (todo.isComplete) {
      await Todo.findOneAndUpdate(
        { _id: todoId },
        { $set: { isComplete: false } }
      );
    } else {
      await Todo.findOneAndUpdate(
        { _id: todoId },
        { $set: { isComplete: true } }
      );
    }

    res.status(200).json({
      message: "Done",
    });
  },

  // Delete Task
  async deleteTodo(req, res) {
    let { todoId } = req.body;
    if (!todoId) {
      return res.status(400).json({ message: "Must provid Todo Id!" });
    }
    await Todo.findByIdAndDelete(todoId);
    res.status(200).json({
      message: "Successfully Deleted!",
    });
  },

  // Get All todo's
  async getTodos(req, res) {
    let { _id } = req.user;

    let todos = await Todo.find({ userId: _id });

    res.status(200).json({
      todos,
    });
  },
};
