module.exports = {
  serverError(res, message) {
    return res.status(500).json({ message });
  },
  clientError(res, message) {
    return res.status(400).json({ message });
  },
  successLogin({ res, token, message }) {
    return res.status(200).json({ message, token });
  },
};
