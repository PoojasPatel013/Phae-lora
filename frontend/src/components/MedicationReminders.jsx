"use client"

import { motion } from "framer-motion"

const MedicationReminders = ({ medications }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Medication Reminders</h2>
      {medications.length > 0 ? (
        <ul className="space-y-2">
          {medications.map((med) => (
            <li key={med._id} className="flex justify-between items-center border-b border-blue-100 pb-2">
              <span className="text-blue-800">
                {med.name} - {med.dosage}
              </span>
              <span className="text-blue-600">{med.frequency}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-blue-500">No medications scheduled.</p>
      )}
      <button className="mt-4 w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
        Add New Medication
      </button>
    </motion.div>
  )
}

export default MedicationReminders

