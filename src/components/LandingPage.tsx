import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  MessageSquare,
  Zap,
  Brain,
  Globe,
  ArrowRight,
  ChevronRight,
  Users,
  Shield,
  Bot,
  Laptop,
  MessageCircle,
  BarChart,
} from "lucide-react";

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const scaleSpring = useSpring(1, springConfig);

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "AI-Powered Intelligence",
      description:
        "Natural language processing that understands context and sentiment",
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Instant responses that keep your customers engaged 24/7",
      color: "from-yellow-500/20 to-yellow-600/20",
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: "Global Reach",
      description: "Communicate in 100+ languages with automatic translation",
      color: "from-green-500/20 to-green-600/20",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with global standards",
      color: "from-purple-500/20 to-purple-600/20",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechCorp",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      content:
        "BeyondChats transformed our customer service. Our response time dropped by 80%.",
    },
    {
      name: "Michael Chen",
      role: "Founder of StartupX",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      content:
        "The AI capabilities are mind-blowing. It's like having a 24/7 support team.",
    },
  ];

  return (
    <div ref={targetRef} className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTBlN2ZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-blue-500/10 rounded-full"
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <MessageSquare className="w-8 h-8 text-blue-600" />
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                BeyondChats
              </span>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onGetStarted}
              className="relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
              />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20">
        <motion.div style={{ y, opacity }} className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative w-32 h-32 mx-auto mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-white rounded-3xl transform -rotate-6 flex items-center justify-center">
                <Bot className="w-16 h-16 text-blue-600" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-gray-900">Transform Support with</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient bg-300">
                AI-Powered Chat
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            >
              Empower your business with intelligent conversations that
              understand, engage, and convert visitors into loyal customers
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onGetStarted}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Start Free Trial</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 30 }}
                />
              </motion.button>

              <motion.a
                href="#demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-600 px-8 py-4 rounded-full text-lg border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center space-x-2"
              >
                <Laptop className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="relative py-20 bg-white/40 backdrop-blur-lg">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl transform transition-transform group-hover:scale-105 group-hover:rotate-2`}
                />
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats Section with 3D Effect */}
      <div className="relative py-20 bg-white/40 backdrop-blur-lg">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <MessageCircle />,
                value: "99.9%",
                label: "Uptime Guarantee",
              },
              { icon: <Users />, value: "24/7", label: "Customer Support" },
              { icon: <BarChart />, value: "10k+", label: "Active Users" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 transform perspective-1000"
              >
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-blue-600">{stat.icon}</div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="relative py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Ready to Transform Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                Customer Experience?
              </span>
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-lg inline-flex items-center space-x-2 hover:shadow-lg transition-shadow"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
