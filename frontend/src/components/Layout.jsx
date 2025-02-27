import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { motion, AnimatePresence } from "framer-motion"
import { FaBars, FaTimes, FaHome, FaUser, FaPills, FaBook, FaBell, FaCog, FaUsers } from "react-icons/fa"

const Layout = ({ children }) => {
  const location = useLocation()
  const { isAuthenticated, user } = useSelector((state) => state.auth)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const sidebarItems = [
    { path: "/dashboard", label: "Dashboard", icon: FaHome },
    { path: "/profile", label: "Profile", icon: FaUser },
    { path: "/medications", label: "Medications", icon: FaPills },
    { path: "/disease-library", label: "Disease Library", icon: FaBook },
    { path: "/notifications", label: "Notifications", icon: FaBell },
    { path: "/parent-child-mode", label: "Parent/Child Mode", icon: FaUsers },
    { path: "/settings", label: "Settings", icon: FaCog },
  ]

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "-100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <main className="container mx-auto px-4 py-8">{children}</main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-blue-600 to-blue-800 text-white p-4 shadow-lg md:relative md:translate-x-0"
          >
            <div className="flex justify-between items-center mb-8">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold"
              >
                Medico
              </motion.h1>
              <button onClick={toggleSidebar} className="md:hidden">
                <FaTimes size={24} />
              </button>
            </div>
            <nav className="space-y-4">
              {sidebarItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 p-2 rounded-lg transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "bg-blue-700 text-white"
                        : "text-blue-100 hover:bg-blue-700 hover:text-white"
                    }`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="flex-1">
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleSidebar}
            className="text-blue-600 focus:outline-none"
          >
            <FaBars size={24} />
          </motion.button>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-600 font-semibold"
          >
            Welcome, {user?.name}
          </motion.div>
        </header>
        <main className="p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default Layout

