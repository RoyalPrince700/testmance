import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../provider/AuthContext";
import { FiUserPlus, FiBook, FiAward, FiBarChart2, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

export const HowItWorks = () => {
  const { isAuthenticated } = useAuth();

  const steps = [
    {
      Icon: FiUserPlus,
      title: "Jump In & Create Your Profile",
      description: "Sign up or log in to join the TestMancer community and start your learning adventure. Your progress and gems are saved securely!",
      actionText: isAuthenticated ? "Explore Dashboard" : "Get Started Now",
      actionLink: isAuthenticated ? "/dashboard" : "/login",
      color: "from-teal-400 to-teal-600"
    },
    {
      Icon: FiBook,
      title: "Dive Into Engaging Courses",
      description: "Pick from a variety of exam-focused topics, with lessons designed to keep you hooked and learning effortlessly.",
      actionText: "Browse Courses",
      actionLink: isAuthenticated ? "/courses" : "/login",
      color: "from-pink-400 to-pink-600"
    },
    {
      Icon: FiCheckCircle,
      title: "Conquer Quizzes & Earn Gems",
      description: "Test your knowledge with fun quizzes and earn shiny gems for every correct answer and completed subtopic.",
      actionText: "Take a Quiz",
      actionLink: isAuthenticated ? "/quizzes" : "/login",
      color: "from-teal-500 to-pink-500"
    },
    {
      Icon: FiAward,
      title: "Climb Leaderboards & Collect Badges",
      description: "Show off your achievements, claim trophies, and compete with friends to become the ultimate TestMancer champion!",
      actionText: "See Achievements",
      actionLink: isAuthenticated ? "/achievements" : "/login",
      color: "from-pink-500 to-teal-500"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-pink-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-4">
            Level Up Your Learning with TestMancer
          </h2>
          <p className="text-xl text-pink-600 max-w-3xl mx-auto font-semibold">
            Make studying exciting and rewarding — learn, play, and compete with friends to ace your exams!
          </p>
        </motion.div>

        <motion.div 
          className="space-y-28"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-16`}
              variants={item}
            >
              {/* Illustration */}
              <div className="flex-1">
                <div className="relative">
                  <div className={`absolute -inset-6 bg-gradient-to-br ${step.color} opacity-20 rounded-2xl transform rotate-6`}></div>
                  <motion.div 
                    className={`relative bg-gradient-to-br ${step.color} rounded-2xl p-10 flex items-center justify-center aspect-square shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.Icon className="text-white text-6xl md:text-7xl" />
                  </motion.div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-teal-900">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-lg text-pink-700 mb-8 font-medium">
                  {step.description}
                </p>
                
                <div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={step.actionLink}
                      className={`inline-flex items-center gap-2 bg-gradient-to-br ${step.color} hover:opacity-90 text-white font-semibold rounded-full px-6 py-3 transition-all duration-300 shadow-md`}
                    >
                      {step.actionText}
                      <FiArrowRight className="text-sm" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-extrabold text-teal-800 mb-6">
            Ready to Boost Your Exam Scores?
          </h3>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={isAuthenticated ? "/quizzes" : "/login"}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-pink-600 hover:from-teal-700 hover:to-pink-700 text-white font-bold rounded-full px-8 py-4 text-lg shadow-xl transition-all"
            >
              {isAuthenticated ? "Start Gem Hunting Now" : "Join TestMancer Today"}
              <FiArrowRight className="text-lg" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
