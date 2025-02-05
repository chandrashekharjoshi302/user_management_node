const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({ success: true, count: users.length, data: users });
};

exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ success: true, data: user });
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).json({ success: true, data: null });
};
