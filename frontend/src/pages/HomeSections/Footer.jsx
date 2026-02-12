import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4 inline-block">
              TestMancer
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Making learning fun, interactive, and rewarding for students everywhere.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><Link to="/courses" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors">Browse Courses</Link></li>
              <li><Link to="/login" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors">Login</Link></li>
              <li><Link to="/register" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors">Sign Up</Link></li>
              <li><Link to="/leaderboard" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors">Leaderboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors">About Us</Link></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Stay Updated</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Subscribe to our newsletter for the latest updates and learning tips.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-gray-500 dark:text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} TestMancer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
