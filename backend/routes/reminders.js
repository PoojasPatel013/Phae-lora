import { Router } from 'express';
const router = Router();
import Reminder from '../models/Reminder.js';
import auth from '../middleware/auth.js';


// Get all reminders for a user
router.get('/', auth, async (req, res) => {
  try {
    const reminders = await Reminder.find({ user: req.user.id });
    res.json(reminders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a reminder
router.patch('/:id', auth, async (req, res) => {
  try {
    const reminder = await Reminder.findOne({ _id: req.params.id, user: req.user.id });
    if (!reminder) {
      return res.status(404).json({ message: 'Reminder not found' });
    }
    
    Object.assign(reminder, req.body);
    const updatedReminder = await reminder.save();
    res.json(updatedReminder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a reminder
router.delete('/:id', auth, async (req, res) => {
  try {
    const reminder = await Reminder.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!reminder) {
      return res.status(404).json({ message: 'Reminder not found' });
    }
    res.json({ message: 'Reminder deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
