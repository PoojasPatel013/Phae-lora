import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import SymptomChecker from "../components/SymptomChecker"
import HealthSummary from "../components/HealthSummary"
import MedicationReminders from "../components/MedicationReminders"
import LifestyleAssessment from "../components/LifestyleAssessment"
import Symptomap from "../components/Symptomap"

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth)

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Welcome to your Dashboard, {user?.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <HealthSummary />
        <MedicationReminders />
      </div>

      <LifestyleAssessment />

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Symptom Checker</h2>
        <SymptomChecker />
      </div>

      <Symptomap />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link
          to="/disease-library"
          className="bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          <h3 className="text-xl font-semibold mb-2 text-indigo-600">Disease Library</h3>
          <p className="text-gray-600">Explore our comprehensive database of diseases and conditions.</p>
        </Link>
        <Link
          to="/parent-child-mode"
          className="bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          <h3 className="text-xl font-semibold mb-2 text-indigo-600">Parent/Child Mode</h3>
          <p className="text-gray-600">Access pediatric-focused health tracking and advice.</p>
        </Link>
        <Link
          to="/notifications"
          className="bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          <h3 className="text-xl font-semibold mb-2 text-indigo-600">Notifications & Reminders</h3>
          <p className="text-gray-600">Manage your health alerts and reminders.</p>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard

