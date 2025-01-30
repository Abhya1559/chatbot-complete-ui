import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  Clock,
  AlertCircle,
  ChevronDown,
  Globe,
  Zap,
  Database,
  ArrowRight,
  Code,
  ExternalLink,
  Mail,
  CheckCircle2,
  Copy,
  Share2,
  Sparkles,
  Bot,
  PartyPopper,
} from "lucide-react";
import type { WebPage } from "../types";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";

const dummyPages: WebPage[] = [
  {
    url: "/about",
    status: "scraped",
    chunks: ["About our company", "Our mission", "Meet the team"],
  },
  {
    url: "/products",
    status: "pending",
    chunks: [],
  },
  {
    url: "/contact",
    status: "detected",
    chunks: [],
  },
];

interface WebsiteScrapingProps {
  onComplete: () => void;
}

export const WebsiteScraping: React.FC<WebsiteScrapingProps> = ({
  onComplete,
}) => {
  const [selectedPage, setSelectedPage] = useState<WebPage | null>(null);
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: WebPage["status"]) => {
    switch (status) {
      case "scraped":
        return <CheckCircle className="text-green-500" size={20} />;
      case "pending":
        return <Clock className="text-yellow-500" size={20} />;
      case "detected":
        return <AlertCircle className="text-blue-500" size={20} />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: WebPage["status"]) => {
    switch (status) {
      case "scraped":
        return "from-green-500/20 to-green-600/20";
      case "pending":
        return "from-yellow-500/20 to-yellow-600/20";
      case "detected":
        return "from-blue-500/20 to-blue-600/20";
      default:
        return "";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl"
    >
      <div className="relative">
        {/* Decorative Background */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

        {/* Main Content */}
        <div className="relative bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Website Analysis
                </span>
              </h2>
              <p className="text-gray-600 mt-2">
                Training your AI with website content
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onComplete}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all flex items-center space-x-2"
            >
              <span>Continue Setup</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Training Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { icon: <Globe />, label: "Pages Detected", value: "12" },
              { icon: <Zap />, label: "Processing Speed", value: "2.3s/page" },
              { icon: <Database />, label: "Data Chunks", value: "156" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm p-4 rounded-xl border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-blue-600">{stat.icon}</div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            <AnimatePresence>
              {dummyPages.map((page, index) => (
                <motion.div
                  key={page.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${getStatusColor(
                      page.status
                    )} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                  <div className="relative bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-4">
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() =>
                        setSelectedPage(
                          selectedPage?.url === page.url ? null : page
                        )
                      }
                    >
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(page.status)}
                        <span className="text-lg font-medium">{page.url}</span>
                      </div>
                      <motion.div
                        animate={{
                          rotate: selectedPage?.url === page.url ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="text-gray-400" />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {selectedPage?.url === page.url &&
                        page.chunks.length > 0 && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-4 pl-8 border-l-2 border-blue-200"
                          >
                            <h4 className="font-medium text-gray-700 mb-2">
                              Content Chunks:
                            </h4>
                            <div className="space-y-2">
                              {page.chunks.map((chunk, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="flex items-center space-x-2 text-gray-600"
                                >
                                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                                  <span>{chunk}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ChatbotIntegration: React.FC<ChatbotIntegrationProps> = ({
  onComplete,
}) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dummyCode = `<script src="https://cdn.beyondchats.com/widget.js"></script>
<script>
  window.BeyondChats.init({
    apiKey: 'your-api-key',
    theme: 'light'
  });
</script>`;

  const handleTestIntegration = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    toast.success("Integration test successful!");
    setShowSuccess(true);

    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleMailInstructions = () => {
    toast.success("Instructions sent to developer!");
  };

  const handleShare = (platform: string) => {
    toast.success(`Shared on ${platform}!`);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(dummyCode);
    setCopied(true);
    toast.success("Code copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl"
      >
        <div className="relative">
          {/* Decorative Background */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-100 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-24 h-24 mx-auto mb-8 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full transform rotate-6" />
              <div className="absolute inset-0 bg-white rounded-full transform -rotate-6 flex items-center justify-center">
                <PartyPopper className="w-12 h-12 text-green-500" />
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-4"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
                Integration Complete!
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 mb-8"
            >
              Your chatbot is now ready to revolutionize your customer support
            </motion.p>

            <div className="grid gap-4">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onComplete}
                className="w-full bg-gradient-to-r from -green-500 to-blue-500 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:from-blue-500 hover:to-green-500 transition-all"
              >
                <Bot size={20} />
                <span>Explore Admin Panel</span>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full border-2 border-gray-200 py-3 rounded-lg flex items-center justify-center space-x-2 hover:border-blue-500 hover:text-blue-500 transition-colors"
              >
                <Sparkles size={20} />
                <span>Start Talking to Your Chatbot</span>
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center space-x-4 pt-4"
              >
                {["Twitter", "LinkedIn", "Facebook"].map((platform, index) => (
                  <motion.button
                    key={platform}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleShare(platform)}
                    className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-500 transition-colors"
                  >
                    <Share2 size={20} />
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl"
    >
      <div className="relative">
        {/* Decorative Background */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Integrate Your Chatbot
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Code Integration */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Integration Code
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopyCode}
                    className="text-blue-600 hover:text-blue-700 transition-colors flex items-center space-x-2"
                  >
                    {copied ? <CheckCircle2 size={20} /> : <Copy size={20} />}
                    <span>{copied ? "Copied!" : "Copy Code"}</span>
                  </motion.button>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <pre className="relative bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>{dummyCode}</code>
                  </pre>
                </motion.div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleMailInstructions}
                  className="flex-1 border border-gray-200 py-3 rounded-lg flex items-center justify-center space-x-2 hover:border-blue-500 hover:text-blue-500 transition-colors"
                >
                  <Mail size={20} />
                  <span>Mail to Developer</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open("#", "_blank")}
                  className="flex-1 border border-gray-200 py-3 rounded-lg flex items-center justify-center space-x-2 hover:border-blue-500 hover:text-blue-500 transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Test Chatbot</span>
                </motion.button>
              </div>
            </div>

            {/* Right Column - Integration Steps */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">
                  Integration Steps
                </h3>
                <div className="space-y-4">
                  {[
                    "Copy the code snippet above",
                    "Paste it before the closing </head> tag",
                    "Save and deploy your changes",
                    "Test the integration",
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-medium">
                        {index + 1}
                      </div>
                      <span className="text-blue-800">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleTestIntegration}
                disabled={isLoading}
                className={`w-full py-3 rounded-lg flex items-center justify-center space-x-2 text-white font-medium ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600"
                }`}
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Code size={20} />
                    <span>Test Integration</span>
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
