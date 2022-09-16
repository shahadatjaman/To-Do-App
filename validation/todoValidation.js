module.exports = {
  todoValidator({ title, taskId, date, desc }) {
    let errors = {};

    if (!title) {
      errors.title = "Title must provide!";
    } else if (title.trim() === "") {
      errors.title = "Title must provide!";
    }

    if (!taskId) {
      errors.taskid = "taskId must provide!";
    } else if (taskId.trim() === "") {
      errors.taskid = "taskId must provide!";
    }

    if (!date) {
      errors.date = "Date must provide!";
    } else if (date.trim() === "") {
      errors.date = "Date must provide!";
    }
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  },
};
