import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { AuthForm } from "./components/AuthForm";
import { OrganizationSetup } from "./components/OrganizationSetup";
import { WebsiteScraping } from "./components/WebsiteScraping";
import { ChatbotIntegration } from "./components/ChatbotIntegration";
import { LandingPage } from "./components/LandingPage";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [showSetup, setShowSetup] = useState(false);

  const [step, setStep] = useState<
    "auth" | "org" | "scraping" | "integration" | "complete"
  >("auth");

  const steps = [
    { id: "auth", label: "Account Setup" },
    { id: "org", label: "Organization" },
    { id: "scraping", label: "Website Scraping" },
    { id: "integration", label: "Integration" },
  ];

  if (!showSetup) {
    return <LandingPage onGetStarted={() => setShowSetup(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Toaster position="top-right" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex justify-between items-center">
              {steps.map((s, index) => (
                <React.Fragment key={s.id}>
                  <div className="flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        steps.findIndex((st) => st.id === step) >= index
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {index + 1}
                    </motion.div>
                    <span className="text-sm mt-2">{s.label}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex-1 h-1 mx-4 ${
                        steps.findIndex((st) => st.id === step) > index
                          ? "bg-blue-600"
                          : "bg-gray-200"
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex justify-center"
            >
              {step === "auth" && (
                <AuthForm onComplete={() => setStep("org")} />
              )}
              {step === "org" && (
                <OrganizationSetup onComplete={() => setStep("scraping")} />
              )}
              {step === "scraping" && (
                <WebsiteScraping onComplete={() => setStep("integration")} />
              )}
              {step === "integration" && (
                <ChatbotIntegration onComplete={() => setStep("complete")} />
              )}
              {step === "complete" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Setup Complete!
                  </h1>
                  <p className="text-gray-600">
                    Your chatbot is now ready to assist your customers.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
