import { Router } from 'express';
const router = Router();
import Symptom from '../models/Symptom.js'; // ✅ Correct import
import auth from '../middleware/auth.js';

// Get all symptoms for a user
router.get('/', auth, async (req, res) => {
  try {
    const symptoms = await Symptom.find({ user: req.user.id }); // ✅ Call on Symptom model
    res.json(symptoms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new symptom
router.post('/', auth, async (req, res) => {
  const symptom = new Symptom({
    ...req.body,
    user: req.user.id
  });

  try {
    const newSymptom = await symptom.save();
    res.status(201).json(newSymptom);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a symptom
router.patch('/:id', auth, async (req, res) => {
  try {
    const symptom = await Symptom.findOne({ _id: req.params.id, user: req.user.id }); // ✅ Call on Symptom model
    if (!symptom) {
      return res.status(404).json({ message: 'Symptom not found' });
    }
    
    Object.assign(symptom, req.body);
    const updatedSymptom = await symptom.save();
    res.json(updatedSymptom);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a symptom
router.delete('/:id', auth, async (req, res) => {
  try {
    const symptom = await Symptom.findOneAndDelete({ _id: req.params.id, user: req.user.id }); // ✅ Call on Symptom model
    if (!symptom) {
      return res.status(404).json({ message: 'Symptom not found' });
    }
    res.json({ message: 'Symptom deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
