import { Router } from 'express';
const router = Router();
import Medication from '../models/Medication.js'; // ✅ Correct import
import auth from '../middleware/auth.js';

// Get all medications for a user
router.get('/', auth, async (req, res) => {
  try {
    const medications = await Medication.find({ user: req.user.id }); // ✅ Call on Medication model
    res.json(medications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new medication
router.post('/', auth, async (req, res) => {
  const medication = new Medication({
    ...req.body,
    user: req.user.id
  });

  try {
    const newMedication = await medication.save();
    res.status(201).json(newMedication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a medication
router.patch('/:id', auth, async (req, res) => {
  try {
    const medication = await Medication.findOne({ _id: req.params.id, user: req.user.id }); // ✅ Call on Medication model
    if (!medication) {
      return res.status(404).json({ message: 'Medication not found' });
    }
    
    Object.assign(medication, req.body);
    const updatedMedication = await medication.save();
    res.json(updatedMedication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a medication
router.delete('/:id', auth, async (req, res) => {
  try {
    const medication = await Medication.findOneAndDelete({ _id: req.params.id, user: req.user.id }); // ✅ Call on Medication model
    if (!medication) {
      return res.status(404).json({ message: 'Medication not found' });
    }
    res.json({ message: 'Medication deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
