import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Mail, ExternalLink, CheckCircle, Clipboard } from "lucide-react";
import toast from "react-hot-toast";
import ChatBot from "./ChatBot";

interface ChatbotIntegrationProps {
  onComplete: () => void;
}

export const ChatbotIntegration: React.FC<ChatbotIntegrationProps> = ({
  onComplete,
}) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const dummyCode = `<script src="https://cdn.beyondchats.com/widget.js"></script>
<script>
  window.BeyondChats.init({
    apiKey: 'your-api-key',
    theme: 'light'
  });
</script>`;

  const handleTestIntegration = () => {
    toast.success("Integration test successful!");
    setShowSuccess(true);
  };

  const handleMailInstructions = () => {
    toast.success("Instructions sent to developer!");
  };

  const handleShare = (platform: string) => {
    toast.success(`Shared on ${platform}!`);
  };

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-lg text-center space-y-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-16 h-16 mx-auto bg-blue-200 rounded-full flex items-center justify-center"
        >
          <CheckCircle className="text-blue-600" size={36} />
        </motion.div>

        <h2 className="text-3xl font-bold text-gray-800">
          Integration Successful!
        </h2>
        <p className="text-gray-600">
          Your chatbot is ready to use. Explore the admin panel or start
          chatting now.
        </p>

        <div className="space-y-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onComplete}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 shadow-md hover:opacity-90 transition"
          >
            <span>Explore Admin Panel</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg flex items-center justify-center space-x-2 shadow-md hover:bg-gray-100 transition"
          >
            <span>Start Chatting</span>
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl p-8 bg-white rounded-2xl shadow-xl space-y-8"
    >
      <h2 className="text-3xl font-bold text-gray-800">
        Integrate Your Chatbot
      </h2>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Integration Code
            </h3>
            <button
              onClick={() => {
                navigator.clipboard.writeText(dummyCode);
                toast.success("Code copied to clipboard!");
              }}
              className="text-blue-600 hover:text-blue-700 transition flex items-center space-x-1"
            >
              <Clipboard size={18} />
              <span>Copy Code</span>
            </button>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{dummyCode}</code>
          </pre>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleMailInstructions}
            className="bg-gradient-to-r from-green-400 to-green-500 text-white py-3 rounded-lg flex items-center justify-center space-x-2 shadow-md hover:opacity-90 transition"
          >
            <Mail size={20} />
            <span>Mail to Developer</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowChatBot(!showChatBot)}
            className="bg-gradient-to-r from-indigo-400 to-indigo-500 text-white py-3 rounded-lg flex items-center justify-center space-x-2 shadow-md hover:opacity-90 transition"
          >
            <ExternalLink size={20} />
            <span>Test Chatbot</span>
          </motion.button>
          {showChatBot && <ChatBot />}
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleTestIntegration}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 rounded-lg flex items-center justify-center space-x-2 shadow-md hover:opacity-90 transition"
        >
          <Code size={20} />
          <span>Test Integration</span>
        </motion.button>
      </div>
    </motion.div>
  );
};
