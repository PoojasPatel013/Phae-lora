"use client"
import { motion } from "framer-motion"
import { FaHeartbeat, FaWeight, FaRulerVertical, FaTint } from "react-icons/fa"

const HealthSummary = ({ data }) => {
  const healthMetrics = [
    { icon: FaHeartbeat, label: "Heart Rate", value: `${data.heartRate} bpm` },
    { icon: FaWeight, label: "Weight", value: `${data.weight} kg` },
    { icon: FaRulerVertical, label: "Height", value: `${data.height} cm` },
    { icon: FaTint, label: "Blood Type", value: data.bloodType },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Health Summary</h2>
      <div className="grid grid-cols-2 gap-4">
        {healthMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-3 bg-blue-50 p-3 rounded-lg"
          >
            <metric.icon className="text-blue-500 text-2xl" />
            <div>
              <p className="text-sm text-blue-600">{metric.label}</p>
              <p className="font-semibold text-blue-800">{metric.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default HealthSummary

