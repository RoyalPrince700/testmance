import { useState, useEffect } from 'react';
import { adminAPI } from '../../utils/api';
import AdminSidebar from '../../components/AdminSidebar';
import {
  Users,
  UserCheck,
  BookOpen,
  Target,
  Trophy,
  TrendingUp,
  Calendar,
  Award
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const response = await adminAPI.getStats();
      setStats(response.data);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch admin stats:', err);
      setError('Failed to load dashboard statistics');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <AdminSidebar onCollapseChange={setSidebarCollapsed} />
        <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-all duration-300 ${
          sidebarCollapsed ? 'ml-16' : 'ml-64'
        }`}>
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 dark:border-purple-400 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading dashboard...</p>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <AdminSidebar onCollapseChange={setSidebarCollapsed} />
        <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-all duration-300 ${
          sidebarCollapsed ? 'ml-16' : 'ml-64'
        }`}>
          <div className="text-center">
            <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
            <button
              onClick={fetchStats}
              className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-4 py-2 rounded-lg"
            >
              Try Again
            </button>
          </div>
        </div>
      </>
    );
  }

  const overviewCards = [
    {
      title: 'Total Users',
      value: stats?.overview?.totalUsers || 0,
      icon: Users,
      color: 'bg-blue-500',
      change: '+12%'
    },
    {
      title: 'Active Users',
      value: stats?.overview?.activeUsers || 0,
      icon: UserCheck,
      color: 'bg-green-500',
      change: '+8%'
    },
    {
      title: 'Quiz Attempts',
      value: stats?.overview?.totalQuizAttempts || 0,
      icon: Target,
      color: 'bg-purple-500',
      change: '+15%'
    },
    {
      title: 'Completed Chapters',
      value: stats?.overview?.totalCompletedChapters || 0,
      icon: BookOpen,
      color: 'bg-orange-500',
      change: '+20%'
    }
  ];

  // Prepare chart data
  const universityData = stats?.universityStats?.slice(0, 8).map(item => ({
    name: item._id?.substring(0, 15) + '...' || 'Unknown',
    users: item.count
  })) || [];

  const levelData = stats?.levelStats?.map(item => ({
    level: `Level ${item._id}`,
    users: item.count
  })) || [];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7c7c', '#8dd1e1', '#d084d0'];

  return (
    <>
      <AdminSidebar onCollapseChange={setSidebarCollapsed} />

      <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-all duration-300 ${
        sidebarCollapsed ? 'ml-16' : 'ml-64'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Admin Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400">Welcome back! Here's what's happening with TestMancer.</p>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {overviewCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{card.title}</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{card.value.toLocaleString()}</p>
                      <p className="text-sm text-green-600 dark:text-green-400 mt-1">{card.change} from last month</p>
                    </div>
                    <div className={`p-3 rounded-lg ${card.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* University Distribution */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Users by University</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={universityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    fontSize={12}
                  />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="users" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Level Distribution */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Users by Level</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={levelData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ level, percent }) => `${level} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="users"
                  >
                    {levelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Active Users</h3>
            <div className="space-y-4">
              {stats?.recentActivity?.slice(0, 5).map((user, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-600 last:border-b-0">
                  <div className="flex items-center space-x-3">
                    <img
                      src={user.avatar || '/default-avatar.png'}
                      alt={user.username}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{user.username}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{user.recentActivityCount} activities this week</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Active</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">Last 7 days</p>
                  </div>
                </div>
              ))}
              {(!stats?.recentActivity || stats.recentActivity.length === 0) && (
                <p className="text-gray-500 dark:text-gray-400 text-center py-8">No recent activity found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
