import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Target,
  Trophy,
  BarChart3,
  Settings,
  LogOut,
  Shield,
  ArrowLeft
} from 'lucide-react';
import { getAvatarSrc } from '../utils/avatarUtils';

const AdminSidebar = ({ onCollapseChange }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleCollapse = () => {
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
    if (onCollapseChange) {
      onCollapseChange(newCollapsed);
    }
  };

  const navItems = [
    {
      path: '/admin/dashboard',
      icon: LayoutDashboard,
      label: 'Dashboard',
      description: 'Overview & Statistics'
    },
    {
      path: '/admin/users',
      icon: Users,
      label: 'Users',
      description: 'Manage Users'
    },
    {
      path: '/admin/courses',
      icon: BookOpen,
      label: 'Courses',
      description: 'Course Management'
    },
    {
      path: '/admin/quizzes',
      icon: Target,
      label: 'Quizzes',
      description: 'Quiz Management'
    },
    {
      path: '/admin/leaderboard',
      icon: Trophy,
      label: 'Leaderboard',
      description: 'View Rankings'
    },
    {
      path: '/admin/analytics',
      icon: BarChart3,
      label: 'Analytics',
      description: 'Detailed Analytics'
    },
    {
      path: '/admin/settings',
      icon: Settings,
      label: 'Settings',
      description: 'System Settings'
    }
  ];

  return (
    <div className={`fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header with Collapse Button */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!isCollapsed && (
          <Link to="/admin/dashboard" className="flex items-center space-x-2 flex-1">
            <Shield className="h-8 w-8 text-purple-600 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-bold text-gray-900 truncate">Admin Panel</h1>
              <p className="text-sm text-gray-500 truncate">TestMancer</p>
            </div>
          </Link>
        )}
        {isCollapsed && (
          <Shield className="h-8 w-8 text-purple-600 mx-auto" />
        )}
        <button
          onClick={toggleCollapse}
          className={`p-1 rounded-md hover:bg-gray-100 transition-colors flex-shrink-0 ${
            isCollapsed ? 'mx-auto' : ''
          }`}
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <ArrowLeft className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
            isCollapsed ? 'rotate-180' : ''
          }`} />
        </button>
      </div>

      {/* User Info */}
      {user && (
        <div className={`p-4 border-b border-gray-200 ${isCollapsed ? 'flex justify-center' : ''}`}>
          {isCollapsed ? (
            <img
              src={getAvatarSrc(user.avatar)}
              alt={user.username}
              className="h-10 w-10 rounded-full border-2 border-purple-200 object-cover"
              title={`${user.username} (${user.isAdmin ? 'Administrator' : 'User'})`}
            />
          ) : (
            <div className="flex items-center space-x-3">
              <img
                src={getAvatarSrc(user.avatar)}
                alt={user.username}
                className="h-10 w-10 rounded-full border-2 border-purple-200 object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 truncate">{user.username}</p>
                <p className="text-sm text-gray-500">{user.isAdmin ? 'Administrator' : 'User'}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <div className={`space-y-1 ${isCollapsed ? 'px-2' : 'px-3'}`}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`group flex items-center ${isCollapsed ? 'justify-center px-3 py-3' : 'px-3 py-3'} rounded-lg transition-colors ${
                  active
                    ? 'bg-purple-50 text-purple-700 border-r-2 border-purple-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon className={`h-5 w-5 flex-shrink-0 ${
                  isCollapsed ? '' : 'mr-3'
                } ${
                  active ? 'text-purple-600' : 'text-gray-400 group-hover:text-gray-600'
                }`} />
                {!isCollapsed && (
                  <div className="flex-1 min-w-0">
                    <p className={`font-medium truncate ${
                      active ? 'text-purple-700' : 'text-gray-900'
                    }`}>
                      {item.label}
                    </p>
                    <p className={`text-xs truncate ${
                      active ? 'text-purple-500' : 'text-gray-500'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className={`p-4 border-t border-gray-200 ${isCollapsed ? 'flex flex-col items-center space-y-2' : ''}`}>
        <Link
          to="/dashboard"
          className={`flex items-center ${isCollapsed ? 'justify-center px-3 py-3' : 'px-3 py-2'} text-gray-700 hover:bg-gray-50 rounded-lg transition-colors ${
            isCollapsed ? '' : 'mb-2'
          }`}
          title={isCollapsed ? 'Back to User Dashboard' : undefined}
        >
          <LayoutDashboard className="h-4 w-4 flex-shrink-0" />
          {!isCollapsed && <span className="text-sm font-medium ml-3">Back to User Dashboard</span>}
        </Link>
        <button
          onClick={logout}
          className={`flex items-center ${isCollapsed ? 'justify-center px-3 py-3' : 'w-full px-3 py-2'} text-red-600 hover:bg-red-50 rounded-lg transition-colors`}
          title={isCollapsed ? 'Logout' : undefined}
        >
          <LogOut className="h-4 w-4 flex-shrink-0" />
          {!isCollapsed && <span className="text-sm font-medium ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
