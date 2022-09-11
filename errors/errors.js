module.exports = {
  serverError(res, message) {
    return res.status(500).json({ message });
  },
  clientError(res, message) {
    return res.status(400).json({ message });
  },
};
