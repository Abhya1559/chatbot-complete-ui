import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Chrome } from "lucide-react";
import toast from "react-hot-toast";

interface AuthFormProps {
  onComplete: () => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ onComplete }) => {
  const [step, setStep] = useState<"register" | "verify">("register");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (step === "register") {
      toast.success("Verification code sent to your email!");
      setStep("verify");
    } else {
      toast.success("Registration successful!");
      onComplete();
    }
    setIsLoading(false);
  };

  const handleGoogleAuth = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Google authentication successful!");
    onComplete();
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md"
    >
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-r from-teal-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" />

        {/* Main Content */}
        <div className="relative bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-100">
          <motion.div
            initial={false}
            animate={{ height: "auto" }}
            className="overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                {/* Progress Indicator */}
                <div className="flex justify-center mb-8">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      animate={{
                        scale: step === "register" ? 1.1 : 1,
                        opacity: step === "register" ? 1 : 0.5,
                      }}
                      className="flex flex-col items-center"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          step === "register"
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                            : "bg-gray-200"
                        }`}
                      >
                        1
                      </div>
                      <span className="text-sm mt-1">Register</span>
                    </motion.div>
                    <div className="w-16 h-0.5 bg-gray-200">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: step === "verify" ? "100%" : "0%" }}
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                      />
                    </div>
                    <motion.div
                      animate={{
                        scale: step === "verify" ? 1.1 : 1,
                        opacity: step === "verify" ? 1 : 0.5,
                      }}
                      className="flex flex-col items-center"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          step === "verify"
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                            : "bg-gray-200"
                        }`}
                      >
                        2
                      </div>
                      <span className="text-sm mt-1">Verify</span>
                    </motion.div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                  {step === "register" ? (
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                      Create Account
                    </span>
                  ) : (
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                      Verify Email
                    </span>
                  )}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {step === "register" ? (
                    <>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative group"
                      >
                        <User
                          className="absolute left-3 top-3 text-gray-400 transition-colors group-focus-within:text-blue-500"
                          size={20}
                        />
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="w-full pl-10 pr-4 py-2 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative group"
                      >
                        <Mail
                          className="absolute left-3 top-3 text-gray-400 transition-colors group-focus-within:text-blue-500"
                          size={20}
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full pl-10 pr-4 py-2 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative group"
                      >
                        <Lock
                          className="absolute left-3 top-3 text-gray-400 transition-colors group-focus-within:text-blue-500"
                          size={20}
                        />
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full pl-10 pr-4 py-2 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          required
                        />
                      </motion.div>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div className="text-center mb-6">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                          }}
                          className="w-16 h-16 bg-blue-50 rounded-full mx-auto flex items-center justify-center mb-4"
                        >
                          <Mail className="w-8 h-8 text-blue-500" />
                        </motion.div>
                        <p className="text-gray-600">
                          Enter the verification code sent to your email
                        </p>
                      </div>

                      <div className="flex justify-center space-x-4">
                        {[...Array(4)].map((_, i) => (
                          <input
                            key={i}
                            type="text"
                            maxLength={1}
                            className="w-12 h-12 text-center text-2xl font-bold bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}

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
                        <span>
                          {step === "register" ? "Register" : "Verify"}
                        </span>
                        <ArrowRight size={20} />
                      </>
                    )}
                  </motion.button>

                  {step === "register" && (
                    <div className="relative flex items-center justify-center my-6">
                      <div className="border-t border-gray-200 w-full absolute" />
                      <span className="bg-white px-4 text-sm text-gray-500 relative z-10">
                        or
                      </span>
                    </div>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={handleGoogleAuth}
                    disabled={isLoading}
                    className={`w-full border border-gray-200 py-3 rounded-lg flex items-center justify-center space-x-2 text-gray-600 relative overflow-hidden group ${
                      isLoading ? "cursor-not-allowed opacity-50" : ""
                    }`}
                  >
                    <Chrome size={20} className="text-blue-500" />
                    <span>Continue with Google</span>
                  </motion.button>
                </form>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
