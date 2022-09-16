const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
  userId: String,
  name: {
    type: String,
    required: true,
  },

  createdAt: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
