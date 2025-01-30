import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Globe, FileText, Sparkles, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

interface OrganizationSetupProps {
  onComplete: () => void;
}

export const OrganizationSetup: React.FC<OrganizationSetupProps> = ({
  onComplete,
}) => {
  const [website, setWebsite] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Organization setup complete!");
    onComplete();
    setIsLoading(false);
  };

  const fetchMetaDescription = async () => {
    if (!website) {
      toast.error("Please enter a website URL first");
      return;
    }
    setIsFetching(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Meta description fetched successfully!");
    setIsFetching(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl"
    >
      <div className="relative">
        {/* Decorative Background */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

        {/* Main Content */}
        <div className="relative bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-100">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute -top-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-6" />
              <div className="absolute inset-0 bg-white rounded-2xl transform -rotate-6 flex items-center justify-center">
                <Building2 className="w-12 h-12 text-blue-600" />
              </div>
            </div>
          </motion.div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Setup Your Organization
              </span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative group"
              >
                <Building2
                  className="absolute left-3 top-3 text-gray-400 transition-colors group-focus-within:text-blue-500"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative group"
              >
                <Globe
                  className="absolute left-3 top-3 text-gray-400 transition-colors group-focus-within:text-blue-500"
                  size={20}
                />
                <input
                  type="url"
                  placeholder="Website URL"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative group"
              >
                <FileText
                  className="absolute left-3 top-3 text-gray-400 transition-colors group-focus-within:text-blue-500"
                  size={20}
                />
                <textarea
                  placeholder="Company Description"
                  className="w-full pl-10 pr-20 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-[120px] resize-none"
                  required
                />
                <motion.button
                  type="button"
                  onClick={fetchMetaDescription}
                  disabled={isFetching}
                  className="absolute right-3 bottom-3 text-blue-600 hover:text-blue-700 transition-colors flex items-center space-x-1"
                >
                  {isFetching ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Sparkles size={16} />
                      <span className="text-sm">Auto-fetch</span>
                    </>
                  )}
                </motion.button>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg flex items-center justify-center space-x-2 text-white font-medium relative overflow-hidden ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600"
                }`}
                type="submit"
                disabled={isLoading}
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
                    <span>Continue Setup</span>
                    <ArrowRight size={20} />
                  </>
                )}
              </motion.button>
            </form>

            {/* Features Grid */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              {[
                { icon: <Globe size={20} />, text: "Auto-fetch website data" },
                {
                  icon: <Sparkles size={20} />,
                  text: "AI-powered description",
                },
                { icon: <Building2 size={20} />, text: "Company verification" },
                {
                  icon: <FileText size={20} />,
                  text: "Smart content analysis",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <div className="text-blue-500">{feature.icon}</div>
                  <span className="text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
