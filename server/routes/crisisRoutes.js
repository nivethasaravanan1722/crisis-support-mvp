const express = require("express");
const router = express.Router();

const {
  createCrisis,
  getMyCrisis,
} = require("../controllers/crisisController");

const protect = require("../middleware/authMiddleware");

// 🔒 PROTECTED ROUTES
router.post("/", protect, createCrisis);
router.get("/my", protect, getMyCrisis);

module.exports = router;
