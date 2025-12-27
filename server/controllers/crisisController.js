const Crisis = require("../models/Crisis");

// CREATE CRISIS
const createCrisis = async (req, res) => {
  try {
    const { title, description, urgency } = req.body;

    if (!title || !description || !urgency) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const crisis = await Crisis.create({
      user: req.user.id,
      title,
      description,
      urgency
    });

    res.status(201).json({
      message: "Crisis request created successfully",
      crisis
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// GET MY CRISIS
const getMyCrisis = async (req, res) => {
  try {
    const crises = await Crisis.find({ user: req.user.id });
    res.status(200).json(crises);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createCrisis,
  getMyCrisis
};
