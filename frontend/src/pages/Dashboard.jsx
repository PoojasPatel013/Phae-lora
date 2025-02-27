"use client"

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import api from "../utils/api"
import HealthSummary from "../components/HealthSummary"
import MedicationReminders from "../components/MedicationReminders"
import SymptomHeatmap from "../components/SymptomHeatmap"
import UpcomingAppointments from "../components/UpcomingAppointments"

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth)
  const [healthData, setHealthData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await api.get("/dashboard")
        setHealthData(response.data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">Welcome, {user.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <HealthSummary data={healthData.healthSummary} />
        <MedicationReminders medications={healthData.medications} />
      </div>
      <SymptomHeatmap symptoms={healthData.symptoms} />
      <UpcomingAppointments appointments={healthData.appointments} />
    </div>
  )
}

export default Dashboard

