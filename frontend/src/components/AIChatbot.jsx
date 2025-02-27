import { useState } from "react"
import { motion } from "framer-motion"

const AIChatbot = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }])
      // Here you would integrate with your AI backend
      // For now, we'll just echo the message
      setTimeout(() => {
        setMessages((msgs) => [...msgs, { text: `You said: ${input}`, sender: "bot" }])
      }, 1000)
      setInput("")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border border-gray-700 rounded h-64 flex flex-col bg-gray-800"
    >
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <span
              className={`inline-block p-2 rounded ${
                msg.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-700 text-white"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-700 p-2 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 bg-gray-700 text-white border border-gray-600 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Describe your symptoms..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white p-2 rounded-r hover:bg-blue-700 transition duration-300"
        >
          Send
        </button>
      </div>
    </motion.div>
  )
}

export default AIChatbot

