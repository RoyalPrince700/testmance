import React from 'react';
import { UserPlus, Search, PlayCircle, TrendingUp } from 'lucide-react';

const Step = ({ number, icon: Icon, title, description }) => (
  <div className="relative flex flex-col items-center text-center">
    <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 border-4 border-purple-100 dark:border-purple-900/50 flex items-center justify-center mb-6 shadow-sm z-10">
      <Icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
      {number}. {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 max-w-xs mx-auto">
      {description}
    </p>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Account",
      description: "Sign up for free and set up your student profile in less than 2 minutes."
    },
    {
      icon: Search,
      title: "Choose Course",
      description: "Browse our library of courses and select the subjects you want to master."
    },
    {
      icon: PlayCircle,
      title: "Take Quizzes",
      description: "Challenge yourself with interactive quizzes that adapt to your skill level."
    },
    {
      icon: TrendingUp,
      title: "Track & Win",
      description: "Watch your stats grow, earn rewards, and climb the global leaderboard."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            How TestMancer Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Your path to academic excellence is just four simple steps away.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-100 dark:bg-gray-800 z-0 transform translate-y-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <Step key={index} number={index + 1} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
