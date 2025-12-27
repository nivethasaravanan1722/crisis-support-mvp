const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser
} = require("../controllers/userController");

const protect = require("../middleware/authMiddleware");
const User = require("../models/User");

// PUBLIC
router.post("/register", registerUser);
router.post("/login", loginUser);

// 🔒 PROTECTED PROFILE
router.get("/profile", protect, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

module.exports = router;
