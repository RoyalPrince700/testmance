import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { User, Trophy, BookOpen, LogOut, Gem, Target, Menu, X, Shield, LayoutDashboard, Info, Home, Award, FileText, PenTool, Sun, Moon } from 'lucide-react';
import { getAvatarSrc } from '../utils/avatarUtils';
import testmancerLogo from '../assets/testmancer-logo.png';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { isDarkMode, toggleDarkMode } = useTheme();
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
    <div className="lg:hidden flex justify-between items-center h-16 px-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      {/* Left: Hamburger */}
      <button onClick={toggleSidebar} className="p-2 -ml-2 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">
        <Menu className="h-6 w-6" />
      </button>

      {/* Middle: Text only */}
      <Link to="/" className="text-lg font-bold text-gray-900 dark:text-white">
        TestMancer
      </Link>

      {/* Right: Theme Toggle & Avatar */}
      <div className="flex items-center space-x-2">
        <button
          onClick={toggleDarkMode}
          className="p-2 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
        {isAuthenticated && user ? (
           <Link to="/profile">
             <img
               src={getAvatarSrc(user.avatar)}
               alt="Profile"
               className="h-8 w-8 rounded-full border border-gray-300 dark:border-gray-600 object-cover"
             />
           </Link>
        ) : (
           <Link to="/login" className="p-2 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">
             <User className="h-6 w-6" />
           </Link>
        )}
      </div>
    </div>
  );

  const DesktopNav = () => {
    // Separate navigation for authenticated and non-authenticated users
    if (isAuthenticated) {
      return (
        <div className="hidden lg:flex items-center h-16 w-full px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center space-x-2 text-gray-900 dark:text-white font-bold text-xl hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            <img src={testmancerLogo} alt="TestMancer Logo" className="h-8 w-8 object-contain shrink-0" />
            <span className="flex items-center">TestMancer</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center space-x-6">
              <Link to="/dashboard" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm font-medium">
                Dashboard
              </Link>
              <Link to="/courses" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm font-medium">
                Courses
              </Link>
              <Link to="/quiz-hub" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm font-medium">
                Quiz Hub
              </Link>
              <Link to="/ca" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm font-medium">
                CA
              </Link>
              <Link to="/exam" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm font-medium">
                Exam
              </Link>
              <Link to="/results" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm font-medium">
                Results
              </Link>
              <Link to="/leaderboard" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm font-medium">
                Leaderboard
              </Link>
              {user?.isAdmin && (
                <Link to="/admin/dashboard" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center space-x-1 text-sm font-medium">
                  <Shield className="h-4 w-4" />
                  <span>Admin</span>
                </Link>
              )}
              <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm font-medium">
                About Us
              </Link>
              <a
                href="https://chat.whatsapp.com/KJp5NV1ox3T91Vk14UOyai?mode=hqrt3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center text-sm"
                title="Join our WhatsApp Community"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </a>
            </div>
          </div>

          {/* User Menu */}
          {user && (
            <div className="flex items-center ml-6 space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              {/* Gems Display */}
              <div className="flex items-center space-x-1 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-900/30 px-3 py-1.5 rounded-lg">
                <Gem className="h-4 w-4 text-yellow-600 dark:text-yellow-500" />
                <span className="font-semibold text-yellow-700 dark:text-yellow-500">{user.gems || 0}</span>
              </div>

              {/* User Avatar & Menu */}
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <img
                    src={getAvatarSrc(user.avatar)}
                    alt={user.username}
                    className="h-8 w-8 rounded-full border-2 border-gray-300 dark:border-gray-600 object-cover"
                  />
                  <span className="block text-sm">{user.username}</span>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link to="/profile" className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                  <Link to="/courses" className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <BookOpen className="h-4 w-4" />
                    <span>My Courses</span>
                  </Link>
                  <button onClick={handleLogout} className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }

    // Non-authenticated desktop navigation
    return (
      <div className="hidden lg:flex items-center h-16 w-full px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center space-x-2 text-gray-900 dark:text-white font-bold text-xl hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
          <img src={testmancerLogo} alt="TestMancer Logo" className="h-8 w-8 object-contain shrink-0" />
          <span className="flex items-center">TestMancer</span>
        </Link>

        {/* Center Navigation */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm font-medium">
              About Us
            </Link>
            <a
              href="https://chat.whatsapp.com/KJp5NV1ox3T91Vk14UOyai?mode=hqrt3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center text-sm"
              title="Join our WhatsApp Community"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
        <Link to="/courses" className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1.5 rounded-lg transition-colors font-semibold text-sm">
          Browse Courses
        </Link>
        <Link to="/login" className="border border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/30 px-3 py-1.5 rounded-lg transition-colors font-semibold text-sm">
          Login
        </Link>
      </div>
    </div>
  );
};

  const Sidebar = () => (
    <>
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-[85%] bg-white dark:bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
             <Link to="/" className="flex items-center space-x-2 text-gray-900 dark:text-white font-bold text-lg" onClick={() => setIsSidebarOpen(false)}>
                <img src={testmancerLogo} alt="TestMancer Logo" className="h-6 w-6 object-contain shrink-0" />
                <span>TestMancer</span>
             </Link>
             <button onClick={() => setIsSidebarOpen(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
               <X className="h-6 w-6" />
             </button>
          </div>

          {/* Sidebar Links */}
          <div className="flex-1 overflow-y-auto py-4 px-4 space-y-4">
            {isAuthenticated ? (
              <>
                {/* User Info Card */}
                {user && (
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-6 flex items-center space-x-3">
                    <img
                      src={getAvatarSrc(user.avatar)}
                      alt={user.username}
                      className="h-12 w-12 rounded-full border-2 border-purple-200 dark:border-purple-800 object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">{user.username}</p>
                      <div className="flex items-center space-x-1 text-yellow-700 dark:text-yellow-500">
                        <Gem className="h-3 w-3" />
                        <span className="text-sm font-medium">{user.gems || 0} Gems</span>
                      </div>
                    </div>
                  </div>
                )}

                <nav className="space-y-2">
                  <Link to="/dashboard" onClick={() => setIsSidebarOpen(false)} className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200">
                    <LayoutDashboard className="h-5 w-5" />
                    <span className="font-medium">Dashboard</span>
                  </Link>
                  <Link to="/courses" onClick={() => setIsSidebarOpen(false)} className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200">
                    <BookOpen className="h-5 w-5" />
                    <span className="font-medium">Courses</span>
                  </Link>
                  <Link to="/quiz-hub" onClick={() => setIsSidebarOpen(false)} className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200">
                    <Target className="h-5 w-5" />
                    <span className="font-medium">Quiz Hub</span>
                  </Link>
                  <Link to="/ca" onClick={() => setIsSidebarOpen(false)} className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200">
                    <FileText className="h-5 w-5" />
                    <span className="font-medium">CA Test</span>
                  </Link>
                  <Link to="/exam" onClick={() => setIsSidebarOpen(false)} className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200">
                    <PenTool className="h-5 w-5" />
                    <span className="font-medium">Final Exam</span>
                  </Link>
                  <Link to="/results" onClick={() => setIsSidebarOpen(false)} className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200">
                    <Award className="h-5 w-5" />
                    <span className="font-medium">Results</span>
                  </Link>
                  <Link to="/leaderboard" onClick={() => setIsSidebarOpen(false)} className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200">
                    <Trophy className="h-5 w-5" />
                    <span className="font-medium">Leaderboard</span>
                  </Link>
                  <Link to="/profile" onClick={() => setIsSidebarOpen(false)} className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200">
                    <User className="h-5 w-5" />
                    <span className="font-medium">Profile</span>
                  </Link>
                  <Link to="/about" onClick={() => setIsSidebarOpen(false)} className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200">
                    <Info className="h-5 w-5" />
                    <span className="font-medium">About Us</span>
                  </Link>
                  <a
                    href="https://chat.whatsapp.com/KJp5NV1ox3T91Vk14UOyai?mode=hqrt3"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsSidebarOpen(false)}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400"
                    title="Join our WhatsApp Community"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span className="font-medium">Community</span>
                  </a>
                  {user?.isAdmin && (
                    <Link to="/admin/dashboard" onClick={() => setIsSidebarOpen(false)} className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-purple-600 dark:text-purple-400">
                      <Shield className="h-5 w-5" />
                      <span className="font-medium">Admin Panel</span>
                    </Link>
                  )}
                </nav>
              </>
            ) : (
              <nav className="space-y-2">
                <Link to="/" onClick={() => setIsSidebarOpen(false)} className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                <Link to="/about" onClick={() => setIsSidebarOpen(false)} className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium">
                  <Info className="h-5 w-5" />
                  <span>About Us</span>
                </Link>
                <a
                  href="https://chat.whatsapp.com/KJp5NV1ox3T91Vk14UOyai?mode=hqrt3"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 font-medium"
                  title="Join our WhatsApp Community"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>Community</span>
                </a>
              </nav>
            )}
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t dark:border-gray-700">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-3 w-full px-3 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span className="font-medium">Logout</span>
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsSidebarOpen(false)}
                className="block w-full px-3 py-2 bg-teal-500 text-white font-medium text-center rounded-lg hover:bg-teal-600 transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-sm">
      <DesktopNav />
      <MobileNav />
      <Sidebar />
    </nav>
  );
};

export default Navbar;
