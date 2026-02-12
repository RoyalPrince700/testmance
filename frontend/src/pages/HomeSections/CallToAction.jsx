import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="bg-linear-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-16 text-center shadow-xl relative overflow-hidden">
          
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white opacity-10 transform translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Level Up Your Learning?
            </h2>
            <p className="text-xl text-purple-100 mb-10 leading-relaxed">
              Join thousands of students who have transformed their exam preparation. 
              Start your journey today for free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Get Started for Free
              </Link>
              <Link
                to="/courses"
                className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
