const User = require("../models/User");

exports.getMe = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({ success: true, data: user });
};

exports.updateMe = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "password"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).json({ message: "Invalid updates!" });
  }

  if (req.body.password) {
    req.user.password = req.body.password;
  }

  if (req.body.name) {
    req.user.name = req.body.name;
  }

  if (req.file) {
    req.user.profileImage = req.file.path;
  }

  await req.user.save();
  res.status(200).json({ success: true, data: req.user });
};

exports.deleteMe = async (req, res) => {
  await req.user.remove();
  res.status(204).json({ success: true, data: null });
};
