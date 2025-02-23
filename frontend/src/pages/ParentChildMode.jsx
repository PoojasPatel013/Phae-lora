"use client"

import { useState } from "react"

const ParentChildMode = () => {
  const [mode, setMode] = useState("adult")

  const toggleMode = () => {
    setMode(mode === "adult" ? "child" : "adult")
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Parent/Child Mode</h1>
      <div className="mb-6">
        <button
          onClick={toggleMode}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Switch to {mode === "adult" ? "Child" : "Adult"} Mode
        </button>
      </div>
      {mode === "adult" ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Adult Health Tracking</h2>
          <p>Here you can manage your personal health information and track your symptoms.</p>
          {/* Add more adult-specific content here */}
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Child Health Tracking</h2>
          <p>Monitor your child's health, track growth, and manage vaccinations.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Parenting Tips:</h3>
          <ul className="list-disc list-inside">
            <li>Ensure your child gets enough sleep</li>
            <li>Promote a balanced diet</li>
            <li>Encourage regular physical activity</li>
          </ul>
          {/* Add more child-specific content here */}
        </div>
      )}
    </div>
  )
}

export default ParentChildMode

