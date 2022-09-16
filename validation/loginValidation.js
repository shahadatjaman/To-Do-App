module.exports = {
  loginvalidation({ email, password }) {
    console.log(email, password);
    const errors = {};
    // Validation
    if (!email) {
      errors.email = "Email Must Provid!";
    }
    if (email.trim().length === 0) {
      errors.email = "Email Must Provid!";
    }
    if (!password) {
      errors.password = "Plz Enter Your Password";
    }
    if (email.trim().length === 0) {
      errors.password = "Plz Enter Your Password";
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  },
};
