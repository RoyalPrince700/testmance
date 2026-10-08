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
  PanelLeft
} from 'lucide-react';
import { getAvatarSrc } from '../utils/avatarUtils';

const navItems = [
  {
    path: '/admin/dashboard',
    icon: LayoutDashboard,
    label: 'Dashboard',
    description: 'Overview and statistics'
  },
  {
    path: '/admin/users',
    icon: Users,
    label: 'Users',
    description: 'Manage accounts'
  },
  {
    path: '/admin/courses',
    icon: BookOpen,
    label: 'Courses',
    description: 'Course management'
  },
  {
    path: '/admin/quizzes',
    icon: Target,
    label: 'Quizzes',
    description: 'Quiz management'
  },
  {
    path: '/admin/leaderboard',
    icon: Trophy,
    label: 'Leaderboard',
    description: 'View rankings'
  },
  {
    path: '/admin/analytics',
    icon: BarChart3,
    label: 'Analytics',
    description: 'Traffic and activity'
  },
  {
    path: '/admin/settings',
    icon: Settings,
    label: 'Settings',
    description: 'System settings'
  }
];

const AdminSidebar = ({ onCollapseChange }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleCollapse = () => {
    const next = !isCollapsed;
    setIsCollapsed(next);
    onCollapseChange?.(next);
  };

  return (
    <>
      <nav className="sticky top-16 z-40 border-b border-line bg-surface lg:hidden" aria-label="Admin">
        <div className="flex gap-1 overflow-x-auto px-5 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium ${
                  active ? 'bg-accent-soft text-accent' : 'text-graphite hover:text-ink'
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <aside
        className={`fixed left-0 top-16 z-40 hidden h-[calc(100vh-4rem)] flex-col border-r border-line bg-surface transition-[width] duration-300 lg:flex ${
          isCollapsed ? 'w-16' : 'w-64'
        }`}
        aria-label="Admin"
      >
        <div className={`flex items-center border-b border-line ${isCollapsed ? 'justify-center px-2 py-4' : 'justify-between px-4 py-4'}`}>
          {!isCollapsed && (
            <Link to="/admin/dashboard" className="flex min-w-0 items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <Shield className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium text-ink">Admin</span>
                <span className="block truncate text-xs text-slate">TestMancer</span>
              </span>
            </Link>
          )}
          <button
            type="button"
            onClick={toggleCollapse}
            className="rounded-full p-2 text-slate hover:text-ink"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <PanelLeft className={`h-4 w-4 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} strokeWidth={1.75} />
          </button>
        </div>

        {user && (
          <div className={`border-b border-line ${isCollapsed ? 'flex justify-center px-2 py-4' : 'px-4 py-4'}`}>
            {isCollapsed ? (
              <img
                src={getAvatarSrc(user.avatar)}
                alt=""
                className="h-9 w-9 rounded-full border border-line object-cover"
                title={user.username}
              />
            ) : (
              <div className="flex items-center gap-3">
                <img
                  src={getAvatarSrc(user.avatar)}
                  alt=""
                  className="h-9 w-9 rounded-full border border-line object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-ink">{user.username}</p>
                  <p className="truncate text-xs text-slate">{user.isAdmin ? 'Administrator' : 'User'}</p>
                </div>
              </div>
            )}
          </div>
        )}

        <nav className="flex-1 overflow-y-auto py-3">
          <div className={`space-y-1 ${isCollapsed ? 'px-2' : 'px-3'}`}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  title={isCollapsed ? item.label : undefined}
                  className={`flex items-center rounded-xl transition-colors ${
                    isCollapsed ? 'justify-center px-2 py-2.5' : 'gap-3 px-3 py-2.5'
                  } ${active ? 'bg-accent-soft font-medium text-accent' : 'text-graphite hover:bg-canvas hover:text-ink'}`}
                >
                  <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                  {!isCollapsed && (
                    <span className="min-w-0">
                      <span className="block truncate text-sm">{item.label}</span>
                      <span className={`block truncate text-xs ${active ? 'text-accent' : 'text-slate'}`}>{item.description}</span>
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className={`border-t border-line ${isCollapsed ? 'space-y-1 px-2 py-3' : 'space-y-1 px-3 py-3'}`}>
          <Link
            to="/dashboard"
            title={isCollapsed ? 'Back to dashboard' : undefined}
            className={`flex items-center rounded-xl text-graphite hover:bg-canvas hover:text-ink ${
              isCollapsed ? 'justify-center px-2 py-2.5' : 'gap-3 px-3 py-2.5'
            }`}
          >
            <LayoutDashboard className="h-4 w-4 shrink-0" strokeWidth={1.75} />
            {!isCollapsed && <span className="text-sm font-medium">Back to dashboard</span>}
          </Link>
          <button
            type="button"
            onClick={logout}
            title={isCollapsed ? 'Log out' : undefined}
            className={`flex items-center rounded-xl text-graphite hover:bg-canvas hover:text-ink ${
              isCollapsed ? 'justify-center px-2 py-2.5' : 'w-full gap-3 px-3 py-2.5'
            }`}
          >
            <LogOut className="h-4 w-4 shrink-0" strokeWidth={1.75} />
            {!isCollapsed && <span className="text-sm font-medium">Log out</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
