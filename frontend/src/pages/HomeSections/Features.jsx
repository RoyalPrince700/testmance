import React from 'react';
import { Brain, Trophy, BarChart3, Users, Zap, Award } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, color }) => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${color}`}>
      <Icon className="w-7 h-7 text-white" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
      {description}
    </p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Smart Adaptive Quizzes",
      description: "Our AI-powered engine adjusts question difficulty based on your performance, ensuring you're always challenged just right.",
      color: "bg-blue-500"
    },
    {
      icon: Trophy,
      title: "Gamified Progression",
      description: "Earn gems, unlock badges, and maintain streaks. Turning study sessions into a rewarding adventure.",
      color: "bg-purple-500"
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description: "Visualize your learning journey with deep insights into your strengths and areas for improvement.",
      color: "bg-teal-500"
    },
    {
      icon: Users,
      title: "Community & Competition",
      description: "Join leaderboards and compete with peers. Learning is more fun when we grow together.",
      color: "bg-orange-500"
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Get immediate explanations for every answer. Learn from mistakes in real-time to master concepts faster.",
      color: "bg-yellow-500"
    },
    {
      icon: Award,
      title: "Mastery Certificates",
      description: "Complete courses and earn verifiable certificates to showcase your academic achievements.",
      color: "bg-pink-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2">Why TestMancer?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need to Excel
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We combine proven learning techniques with game design to help you study smarter, not harder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
