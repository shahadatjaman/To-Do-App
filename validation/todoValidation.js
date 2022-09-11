module.exports = {
  todoValidator({ title, group, date }) {
    let errors = {};

    if (!title) {
      errors.title = "Title must provide!";
    } else if (title.trim() === "") {
      errors.title = "Title must provide!";
    }

    if (!group) {
      errors.group = "Group must provide!";
    } else if (group.trim() === "") {
      errors.group = "Group must provide!";
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
