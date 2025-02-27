import { motion } from "framer-motion"

const Shimmer = ({ width = "w-full", height = "h-6" }) => {
  return (
    <div className={`${width} ${height} bg-gray-700 rounded overflow-hidden relative`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600 to-transparent"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "linear" }}
      />
    </div>
  )
}

export default Shimmer

