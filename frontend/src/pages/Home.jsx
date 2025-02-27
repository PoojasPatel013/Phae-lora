"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-blue-600">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        Welcome to Medico
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl mb-8 text-center max-w-2xl text-blue-500"
      >
        Your personal health companion. Manage your health, track symptoms, and get personalized advice all in one
        place.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-x-4"
      >
        <Link
          to="/register"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 inline-block"
        >
          Get Started
        </Link>
        <Link
          to="/login"
          className="bg-white text-blue-600 px-6 py-3 rounded-full border border-blue-600 hover:bg-blue-50 transition duration-300 inline-block"
        >
          Login
        </Link>
      </motion.div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard icon="🩺" title="Symptom Checker" delay={0.6} />
        <FeatureCard icon="💊" title="Medication Reminders" delay={0.8} />
        <FeatureCard icon="📊" title="Health Tracking" delay={1} />
      </div>
    </div>
  )
}

const FeatureCard = ({ icon, title, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-lg shadow-md text-center relative overflow-hidden group"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-blue-600">{title}</h3>
      <motion.div
        className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-50 transition-opacity duration-300"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
      />
    </motion.div>
  )
}

export default Home

