import { motion } from "framer-motion"

const Symptomap = ({ symptoms }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-4 text-blue-400">Symptomap</h2>
      <div className="bg-gray-700 h-64 flex items-center justify-center rounded-lg mb-4">
        <p className="text-gray-400">Map visualization would go here</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-white">Recent Symptoms</h3>
        {symptoms.length > 0 ? (
          <ul className="list-disc list-inside text-gray-300">
            {symptoms.slice(0, 5).map((symptom) => (
              <li key={symptom._id}>
                {symptom.name} (Severity: {symptom.severity}) - {new Date(symptom.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No recent symptoms recorded.</p>
        )}
      </div>
    </motion.div>
  )
}

export default Symptomap

