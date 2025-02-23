"use client"

import { useState } from "react"
import BodyMap from "./BodyMap"
import AIChatbot from "./AIChatbot"

const SymptomChecker = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([])
  const [severity, setSeverity] = useState("mild")

  const handleSymptomSelect = (symptom) => {
    setSelectedSymptoms([...selectedSymptoms, symptom])
  }

  const handleSeverityChange = (e) => {
    setSeverity(e.target.value)
  }

  const handleSubmit = () => {
    // Here you would integrate with your backend API to process symptoms
    console.log("Symptoms:", selectedSymptoms)
    console.log("Severity:", severity)
  }

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <div className="w-1/2">
          <h3 className="text-lg font-semibold mb-2">Select Symptoms on Body Map</h3>
          <BodyMap onSymptomSelect={handleSymptomSelect} />
        </div>
        <div className="w-1/2">
          <h3 className="text-lg font-semibold mb-2">Chat with AI</h3>
          <AIChatbot />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Symptom Severity</h3>
        <select
          value={severity}
          onChange={handleSeverityChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="mild">Mild</option>
          <option value="moderate">Moderate</option>
          <option value="severe">Severe</option>
        </select>
      </div>
      <button
        onClick={handleSubmit}
        className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Analyze Symptoms
      </button>
    </div>
  )
}

export default SymptomChecker

