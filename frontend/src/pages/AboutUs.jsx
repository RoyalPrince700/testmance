import React from 'react';
import { Link } from 'react-router-dom';
import { FiUsers, FiTarget, FiBookOpen, FiBarChart2, FiGlobe, FiCode, FiShoppingCart, FiMessageCircle, FiAward } from 'react-icons/fi';
import royalPrince from "../assets/royal-prince.jpg";

const AboutUs = () => {
  return (
    <div className="bg-linear-to-br from-teal-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-br from-teal-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">About TestMancer</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 font-semibold">
            Making exam preparation exciting and rewarding with gamified learning and friendly competition.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/login" 
              className="px-8 py-4 bg-white text-teal-700 font-bold rounded-full hover:bg-teal-50 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
           
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute -inset-6 bg-teal-100 rounded-2xl transform rotate-6"></div>
                <div className="relative bg-linear-to-br from-teal-400 to-teal-600 rounded-2xl p-10 flex items-center justify-center aspect-square">
                  <FiTarget className="text-white text-6xl md:text-7xl" />
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                At TestMancer, we believe learning should be fun, engaging, and rewarding. Preparing for exams can be stressful, so we bring gamification into education to turn study time into play time.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Our goal is to empower students to learn effectively with interactive courses, quizzes, and a community where they earn gems, badges, and climb leaderboards as they progress.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <FiBookOpen className="text-teal-700 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">For Students</h3>
                    <p className="text-gray-600 dark:text-gray-400">Engaging courses and quizzes that keep you motivated</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <FiUsers className="text-teal-700 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">For Educators</h3>
                    <p className="text-gray-600 dark:text-gray-400">Tools to create fun learning experiences and track student progress</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <FiBarChart2 className="text-teal-700 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Progress Tracking</h3>
                    <p className="text-gray-600 dark:text-gray-400">Visualize your achievements with gems, badges, and detailed stats</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <FiGlobe className="text-teal-700 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Accessible Everywhere</h3>
                    <p className="text-gray-600 dark:text-gray-400">Learn anytime, anywhere on any device</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-teal-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Technology</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Innovative tech powering an immersive and personalized learning journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border border-teal-100 dark:border-gray-600">
              <div className="bg-linear-to-br from-teal-400 to-teal-600 rounded-2xl p-4 inline-flex items-center justify-center mb-6">
                <FiCode className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Smart Quiz Engine</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Generates quizzes tailored to your learning progress, keeping practice fresh and challenging.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border border-teal-100 dark:border-gray-600">
              <div className="bg-linear-to-br from-teal-400 to-teal-600 rounded-2xl p-4 inline-flex items-center justify-center mb-6">
                <FiAward className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Gamified Progression</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Earn gems, badges, and climb leaderboards as you conquer your study goals.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border border-teal-100 dark:border-gray-600">
              <div className="bg-linear-to-br from-teal-400 to-teal-600 rounded-2xl p-4 inline-flex items-center justify-center mb-6">
                <FiMessageCircle className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Instant Feedback</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Detailed explanations and tips to deepen understanding after every quiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet the Founder</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              The visionary behind TestMancer
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-6 bg-teal-100 rounded-full transform rotate-6"></div>
                <div className="relative w-64 h-64 rounded-full bg-linear-to-br from-teal-400 to-pink-500 flex items-center justify-center overflow-hidden shadow-lg">
                  <img 
                    src={royalPrince} 
                    alt="Ologundudu Joseph" 
                    className="w-full h-full object-cover rounded-full border-4 border-white"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ologundudu Joseph (Royal Prince)</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Joseph is a passionate solo builder and full-stack developer with a focus on creating websites that convert visitors into engaged users. With expertise in both design and development, Joseph crafts digital experiences that are not only visually appealing but also highly functional and user-focused.
              </p>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Skills & Expertise</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-100 rounded-full font-medium">Conversion Optimization</span>
                  <span className="px-4 py-2 bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-100 rounded-full font-medium">UI/UX Design</span>
                  <span className="px-4 py-2 bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-100 rounded-full font-medium">Full-Stack Development</span>
                  <span className="px-4 py-2 bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-100 rounded-full font-medium">E-commerce Solutions</span>
                  <span className="px-4 py-2 bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-100 rounded-full font-medium">AI Integration</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Featured Project</h4>
                <div className="bg-teal-50 dark:bg-gray-700 rounded-2xl p-5 border border-teal-100 dark:border-gray-600">
                  <div className="flex items-center gap-4">
                    <div className="bg-linear-to-br from-teal-400 to-pink-500 rounded-xl p-3">
                      <FiShoppingCart className="text-white text-2xl" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 dark:text-white text-lg">Wifmart E-commerce</h5>
                      <p className="text-gray-600 dark:text-gray-300">A fully functional e-commerce platform</p>
                      <a
                        href="https://www.wifmart.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-700 dark:text-teal-400 hover:underline inline-block mt-2"
                      >
                        www.wifmart.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Connect with Joseph</h4>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.linkedin.com/in/ologundudu-joseph-adesukanmi-2172a1135/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://x.com/Royalprincecube"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition"
                  >
                    Twitter/X
                  </a>
                  <a
                    href="https://wa.me/2348160881705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-teal-600 to-pink-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Ready to Level Up Your Learning?</h2>
          <p className="text-xl text-teal-100 mb-10 max-w-3xl mx-auto">
            Join thousands of learners who are already transforming their study habits with TestMancer's gamified platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/login" 
              className="px-8 py-4 bg-white text-teal-700 font-bold rounded-full hover:bg-teal-50 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Create Free Account
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
