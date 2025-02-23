"use client"

import { useState } from "react"

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: "medication", message: "Take Ibuprofen at 2:00 PM", isActive: true },
    { id: 2, type: "vaccination", message: "Flu shot due next week", isActive: true },
    { id: 3, type: "tip", message: "Remember to stay hydrated!", isActive: true },
  ])

  const toggleNotification = (id) => {
    setNotifications(notifications.map((notif) => (notif.id === id ? { ...notif, isActive: !notif.isActive } : notif)))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Notifications & Reminders</h1>
      <div className="space-y-4">
        {notifications.map((notif) => (
          <div key={notif.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
            <div>
              <span
                className={`inline-block px-2 py-1 rounded text-sm mr-2 ${
                  notif.type === "medication"
                    ? "bg-blue-200 text-blue-800"
                    : notif.type === "vaccination"
                      ? "bg-green-200 text-green-800"
                      : "bg-yellow-200 text-yellow-800"
                }`}
              >
                {notif.type}
              </span>
              <span>{notif.message}</span>
            </div>
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={notif.isActive}
                  onChange={() => toggleNotification(notif.id)}
                />
                <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                <div
                  className={`absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition ${notif.isActive ? "transform translate-x-full bg-blue-600" : ""}`}
                ></div>
              </div>
            </label>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
        Add New Notification
      </button>
    </div>
  )
}

export default Notifications

