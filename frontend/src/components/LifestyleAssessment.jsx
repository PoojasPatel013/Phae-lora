import { motion } from "framer-motion"

const LifestyleAssessment = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Lifestyle Assessment</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-blue-500">Sleep Analysis</h3>
          <p className="text-blue-800">Average sleep duration: 7.5 hours</p>
          <p className="text-blue-800">Sleep quality: Good</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-blue-500">Activity Tracking</h3>
          <p className="text-blue-800">Daily steps: 8,500</p>
          <p className="text-blue-800">Active minutes: 45</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-blue-500">Recommendations</h3>
          <ul className="list-disc list-inside text-blue-800">
            <li>Increase water intake</li>
            <li>Try to get 8 hours of sleep</li>
            <li>Add 15 minutes of moderate exercise to your daily routine</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default LifestyleAssessment

