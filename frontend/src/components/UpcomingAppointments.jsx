import { motion } from "framer-motion"

const UpcomingAppointments = ({ appointments }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Upcoming Appointments</h2>
      {appointments.length > 0 ? (
        <ul className="space-y-2">
          {appointments.map((appointment) => (
            <li key={appointment._id} className="flex justify-between items-center border-b border-blue-100 pb-2">
              <div>
                <span className="text-blue-800 font-medium">{appointment.title}</span>
                <p className="text-blue-500 text-sm">{new Date(appointment.date).toLocaleDateString()}</p>
              </div>
              <span className="text-blue-600">{appointment.doctor}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-blue-500">No upcoming appointments.</p>
      )}
      <button className="mt-4 w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
        Schedule New Appointment
      </button>
    </motion.div>
  )
}

export default UpcomingAppointments

