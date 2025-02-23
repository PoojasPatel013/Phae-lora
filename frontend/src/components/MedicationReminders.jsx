const MedicationReminders = () => {
    const medications = [
      { name: "Ibuprofen", time: "08:00 AM" },
      { name: "Vitamin C", time: "09:00 AM" },
      { name: "Allergy Medication", time: "08:00 PM" },
    ]
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Medication Reminders</h2>
        <ul className="space-y-2">
          {medications.map((med, index) => (
            <li key={index} className="flex justify-between items-center border-b pb-2">
              <span>{med.name}</span>
              <span className="text-blue-600">{med.time}</span>
            </li>
          ))}
        </ul>
        <button className="mt-4 w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
          Add New Medication
        </button>
      </div>
    )
  }
  
  export default MedicationReminders
  
  