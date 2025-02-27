"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import api from "../utils/api"
import Shimmer from "../components/Shimmer"

const Medications = () => {
  const [medications, setMedications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const response = await api.get("/medications")
        setMedications(response.data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching medications:", error)
        setLoading(false)
      }
    }

    fetchMedications()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">Medications</h1>
      {loading ? (
        <div className="space-y-4">
          <Shimmer height="h-16" />
          <Shimmer height="h-16" />
          <Shimmer height="h-16" />
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {medications.map((medication) => (
            <motion.div
              key={medication._id}
              variants={itemVariants}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-2">{medication.name}</h2>
              <p className="text-blue-800">
                <span className="font-medium">Dosage:</span> {medication.dosage}
              </p>
              <p className="text-blue-800">
                <span className="font-medium">Frequency:</span> {medication.frequency}
              </p>
              <p className="text-blue-800">
                <span className="font-medium">Start Date:</span> {new Date(medication.startDate).toLocaleDateString()}
              </p>
              {medication.endDate && (
                <p className="text-blue-800">
                  <span className="font-medium">End Date:</span> {new Date(medication.endDate).toLocaleDateString()}
                </p>
              )}
              {medication.notes && (
                <p className="text-blue-800 mt-2">
                  <span className="font-medium">Notes:</span> {medication.notes}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Add New Medication
      </motion.button>
    </div>
  )
}

export default Medications

