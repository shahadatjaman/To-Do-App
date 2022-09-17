const Task = require("../model/task");

const Todo = require("../model/todo");

module.exports = {
  async newTask(req, res) {
    let { name } = req.body;

    const { _id } = req.user;

    if (!name) {
      return res.status(400).json({
        message: "Must Provide Task Name",
      });
    }

    let newTask = new Task({
      userId: _id,
      name,
      createdAt: new Date().toISOString(),
    });

    let task = await newTask.save();

    return res.status(200).json({
      task,
    });
  },
  async getTask(req, res) {
    let { _id } = req.user;
    let task = await Task.find({ userId: _id });
    if (task) {
      return res.status(200).json({ task: task });
    }

    return res.status(400).json({ ok: false });
  },
  async singleTask(req, res) {
    const { _id } = req.user;

    const { taskId } = req.body;

    if (!taskId) {
      return res.status(400).json({
        message: "Task ID Must Provide!",
      });
    } else if (taskId.trim().length === 0) {
      return res.status(400).json({
        message: "Task ID Must Provide!",
      });
    } else if (taskId === "undefined") {
      return res.status(400).json({
        message: "Invalid Task ID!",
      });
    }
    const task = await Task.findById(taskId);

    if (task) {
      if (task.userId !== _id.toString()) {
        return res.status(200).json({
          message: "Invalid ID",
        });
      }
    }

    res.status(200).json({
      task,
    });
  },
};
