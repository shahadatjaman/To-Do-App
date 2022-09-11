const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  googleId: {
    type: String,
    require: true,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
