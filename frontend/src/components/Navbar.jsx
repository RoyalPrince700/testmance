import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { GraduationCap, User, Trophy, BookOpen, LogOut, Gem } from 'lucide-react';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white font-bold text-xl">
            <GraduationCap className="h-8 w-8" />
            <span>TestMancer</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  to="/courses"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Courses
                </Link>
                <Link
                  to="/leaderboard"
                  className="text-white/80 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <Trophy className="h-4 w-4" />
                  <span>Leaderboard</span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/login"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* User Menu */}
          {isAuthenticated && user && (
            <div className="flex items-center space-x-4">
              {/* Gems Display */}
              <div className="hidden sm:flex items-center space-x-1 text-yellow-300">
                <Gem className="h-4 w-4" />
                <span className="font-semibold">{user.gems || 0}</span>
              </div>

              {/* User Avatar & Menu */}
              <div className="relative group">
                <button className="flex items-center space-x-2 text-white hover:text-white/80">
                  <img
                    src={user.avatar || '/default-avatar.png'}
                    alt={user.username}
                    className="h-8 w-8 rounded-full border-2 border-white/30"
                  />
                  <span className="hidden sm:block">{user.username}</span>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                  <Link
                    to="/courses"
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>My Courses</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            {/* Add mobile menu toggle here if needed */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
