import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-indigo-600">Welcome to Medico</h1>
      <p className="text-xl mb-8 text-center max-w-2xl text-gray-600">
        Your personal health companion. Manage your health, track symptoms, and get personalized advice all in one
        place.
      </p>
      <div className="space-x-4">
        <Link
          to="/register"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-indigo-700 transition duration-300"
        >
          Get Started
        </Link>
        <Link
          to="/login"
          className="bg-white text-indigo-600 px-6 py-3 rounded-full border border-indigo-600 hover:bg-indigo-50 transition duration-300"
        >
          Login
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon="🩺"
          title="Symptom Checker"
          description="Analyze your symptoms and get instant advice on potential conditions."
        />
        <FeatureCard
          icon="💊"
          title="Medication Reminders"
          description="Never miss a dose with our smart medication reminder system."
        />
        <FeatureCard
          icon="📊"
          title="Health Tracking"
          description="Monitor your health trends and see your progress over time."
        />
      </div>
    </div>
  )
}

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-indigo-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default Home

