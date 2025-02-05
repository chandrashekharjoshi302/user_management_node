const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/auth");
const adminController = require("../controllers/adminController");

router.get("/users", protect, admin, adminController.getAllUsers);
router.post("/users", protect, admin, adminController.createUser);
router.delete("/users/:id", protect, admin, adminController.deleteUser);

module.exports = router;
