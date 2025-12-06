import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { User, Trophy, BookOpen, LogOut, Gem, Target, Menu, X } from 'lucide-react';
import { getAvatarSrc } from '../utils/avatarUtils';
import testmancerLogo from '../assets/testmancer-logo.png';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const MobileNav = () => (
    <div className="md:hidden flex justify-between items-center h-16 px-4 bg-white border-b border-gray-200">
      {/* Left: Hamburger */}
      <button onClick={toggleSidebar} className="p-2 -ml-2 text-gray-700 hover:text-purple-600">
        <Menu className="h-6 w-6" />
      </button>

      {/* Middle: Text only */}
      <Link to="/" className="text-lg font-bold text-gray-900">
        TestMancer
      </Link>

      {/* Right: Avatar */}
      <div>
        {isAuthenticated && user ? (
           <Link to="/profile">
             <img
               src={getAvatarSrc(user.avatar)}
               alt="Profile"
               className="h-8 w-8 rounded-full border border-gray-300 object-cover"
             />
           </Link>
        ) : (
           <Link to="/login" className="p-2 text-gray-700 hover:text-purple-600">
             <User className="h-6 w-6" />
           </Link>
        )}
      </div>
    </div>
  );

  const DesktopNav = () => (
    <div className="hidden md:flex justify-between items-center h-16 container mx-auto px-4">
      {/* Logo */}
      <Link to="/" className="flex items-center justify-center space-x-2 text-gray-900 font-bold text-xl hover:text-purple-600 transition-colors">
        <img src={testmancerLogo} alt="TestMancer Logo" className="h-8 w-8 object-contain flex-shrink-0" />
        <span className="flex items-center">TestMancer</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className="text-gray-700 hover:text-purple-600 transition-colors">
              Dashboard
            </Link>
            <Link to="/courses" className="text-gray-700 hover:text-purple-600 transition-colors">
              Courses
            </Link>
            <Link to="/quiz-hub" className="text-gray-700 hover:text-purple-600 transition-colors flex items-center space-x-1">
              <Target className="h-4 w-4" />
              <span>Quiz Hub</span>
            </Link>
            <Link to="/leaderboard" className="text-gray-700 hover:text-purple-600 transition-colors flex items-center space-x-1">
              <Trophy className="h-4 w-4" />
              <span>Leaderboard</span>
            </Link>
          </>
        ) : (
          <>
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-purple-600 transition-colors">
              Login
            </Link>
            <Link to="/register" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
              Sign Up
            </Link>
          </>
        )}
      </div>

      {/* User Menu */}
      {isAuthenticated && user && (
        <div className="flex items-center space-x-4">
          {/* Gems Display */}
          <div className="flex items-center space-x-1 bg-yellow-50 border border-yellow-200 px-3 py-1.5 rounded-lg">
            <Gem className="h-4 w-4 text-yellow-600" />
            <span className="font-semibold text-yellow-700">{user.gems || 0}</span>
          </div>

          {/* User Avatar & Menu */}
          <div className="relative group">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors">
              <img
                src={getAvatarSrc(user.avatar)}
                alt={user.username}
                className="h-8 w-8 rounded-full border-2 border-gray-300 object-cover"
              />
              <span className="block">{user.username}</span>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link to="/profile" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Link>
              <Link to="/courses" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                <BookOpen className="h-4 w-4" />
                <span>My Courses</span>
              </Link>
              <button onClick={handleLogout} className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const Sidebar = () => (
    <>
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-[85%] bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-4 border-b">
             <Link to="/" className="flex items-center space-x-2 text-gray-900 font-bold text-lg" onClick={() => setIsSidebarOpen(false)}>
                <img src={testmancerLogo} alt="TestMancer Logo" className="h-6 w-6 object-contain flex-shrink-0" />
                <span>TestMancer</span>
             </Link>
             <button onClick={() => setIsSidebarOpen(false)} className="text-gray-500 hover:text-gray-700">
               <X className="h-6 w-6" />
             </button>
          </div>

          {/* Sidebar Links */}
          <div className="flex-1 overflow-y-auto py-4 px-4 space-y-4">
            {isAuthenticated ? (
              <>
                {/* User Info Card */}
                {user && (
                  <div className="bg-purple-50 p-4 rounded-lg mb-6 flex items-center space-x-3">
                    <img
                      src={getAvatarSrc(user.avatar)}
                      alt={user.username}
                      className="h-12 w-12 rounded-full border-2 border-purple-200 object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900">{user.username}</p>
                      <div className="flex items-center space-x-1 text-yellow-700">
                        <Gem className="h-3 w-3" />
                        <span className="text-sm font-medium">{user.gems || 0} Gems</span>
                      </div>
                    </div>
                  </div>
                )}

                <nav className="space-y-2">
                  <Link to="/dashboard" onClick={() => setIsSidebarOpen(false)} className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
                    <span className="font-medium">Dashboard</span>
                  </Link>
                  <Link to="/courses" onClick={() => setIsSidebarOpen(false)} className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
                    <BookOpen className="h-5 w-5" />
                    <span className="font-medium">Courses</span>
                  </Link>
                  <Link to="/quiz-hub" onClick={() => setIsSidebarOpen(false)} className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
                    <Target className="h-5 w-5" />
                    <span className="font-medium">Quiz Hub</span>
                  </Link>
                  <Link to="/leaderboard" onClick={() => setIsSidebarOpen(false)} className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
                    <Trophy className="h-5 w-5" />
                    <span className="font-medium">Leaderboard</span>
                  </Link>
                  <Link to="/profile" onClick={() => setIsSidebarOpen(false)} className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
                    <User className="h-5 w-5" />
                    <span className="font-medium">Profile</span>
                  </Link>
                </nav>
              </>
            ) : (
              <nav className="space-y-2">
                <Link to="/" onClick={() => setIsSidebarOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium">
                  Home
                </Link>
                <Link to="/login" onClick={() => setIsSidebarOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium">
                  Login
                </Link>
                <Link to="/register" onClick={() => setIsSidebarOpen(false)} className="block px-3 py-2 rounded-lg bg-purple-600 text-white font-medium text-center">
                  Sign Up
                </Link>
              </nav>
            )}
          </div>

          {/* Sidebar Footer */}
          {isAuthenticated && (
            <div className="p-4 border-t">
              <button
                onClick={handleLogout}
                className="flex items-center space-x-3 w-full px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <DesktopNav />
      <MobileNav />
      <Sidebar />
    </nav>
  );
};

export default Navbar;
