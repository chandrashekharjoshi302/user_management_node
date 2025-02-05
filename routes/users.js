const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const upload = require("../middleware/upload");
const userController = require("../controllers/userController");

router.get("/me", protect, userController.getMe);
router.put(
  "/me",
  protect,
  upload.single("profileImage"),
  userController.updateMe
);
router.delete("/me", protect, userController.deleteMe);

module.exports = router;
