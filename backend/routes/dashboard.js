import express from "express";
import User from "../models/User.js";
import Symptom from "../models/Symptom.js";
import Medication from "../models/Medication.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const userId = req.user.id;

    // Fetch health summary
    const healthSummary = await User.findById(userId).select("healthMetrics");

    // Fetch medications
    const medications = await Medication.find({ user: userId });

    // Fetch symptoms for heatmap
    const symptoms = await Symptom.find({ user: userId });

    // Fetch upcoming appointments
    const appointments = await Appointment.find({ user: userId, date: { $gte: new Date() } })
      .sort("date")
      .limit(5);

    res.json({
      healthSummary,
      medications,
      symptoms,
      appointments,
    });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
