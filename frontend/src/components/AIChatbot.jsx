import React, { useState } from 'react';

const AIChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      // Here you would integrate with your AI backend
      // For now, we'll just echo the message
      setTimeout(() => {
        setMessages(msgs => [...msgs, { text: `You said: ${input}`, sender: 'bot' }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <div className="border rounded h-64 flex flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded ${msg.sender === 'user' ? 'bg-blue-200' : 'bg-gray-200'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t p-2 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-l"
          placeholder="Describe your symptoms..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white p-2 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AIChatbot;
