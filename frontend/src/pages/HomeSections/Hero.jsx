import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-16 pb-32 md:pt-24 md:pb-40">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-purple-100 dark:bg-purple-900/20 blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-teal-100 dark:bg-teal-900/20 blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            New Courses Available
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
            Make Exam Prep <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-teal-500">
              Exciting & Rewarding
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Transform studying into a game. Master your subjects with adaptive quizzes, track your growth, and earn rewards for every milestone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/register"
              className="group bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2"
            >
              Start Learning Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/courses"
              className="px-8 py-4 rounded-xl font-bold text-lg text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Browse Courses
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-500 dark:text-gray-400 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500" />
              <span>Free to Get Started</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500" />
              <span>Adaptive Difficulty</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-teal-500" />
              <span>Gamified Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
