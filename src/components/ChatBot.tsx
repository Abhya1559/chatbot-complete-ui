import { useState } from "react";
import { Send, User, Bot } from "lucide-react";
import { motion } from "framer-motion";

// Define the structure of a message
interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState<string>("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [
      ...messages,
      { sender: "user", text: input },
    ];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "I am here to help!" },
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full w-full  max-w-fit mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4 shadow-xl rounded-lg border border-gray-700">
      <motion.div
        className="flex-1 overflow-y-auto space-y-4 p-2 custom-scrollbar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`flex items-start space-x-2 ${
              msg.sender === "user" ? "justify-end" : ""
            }`}
          >
            {msg.sender === "bot" && <Bot className="w-6 h-6 text-blue-400" />}
            <div
              className={`p-3 rounded-lg max-w-xs shadow-md transition-all ${
                msg.sender === "user" ? "bg-blue-500 ml-auto" : "bg-gray-700"
              }`}
            >
              {msg.text}
            </div>
            {msg.sender === "user" && (
              <User className="w-6 h-6 text-gray-300" />
            )}
          </motion.div>
        ))}
      </motion.div>

      <div className="flex items-center p-3 bg-gray-800 rounded-lg mt-2 border border-gray-700 shadow-md">
        <input
          type="text"
          className="flex-1 bg-transparent p-2 outline-none text-white placeholder-gray-400"
          placeholder="Type a message..."
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            e.key === "Enter" && sendMessage()
          }
        />
        <button
          onClick={sendMessage}
          className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-transform transform active:scale-90 shadow-lg"
        >
          <Send className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
