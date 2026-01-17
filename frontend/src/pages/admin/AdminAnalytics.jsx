import { useState, useEffect } from 'react';
import { adminAPI } from '../../utils/api';
import AdminSidebar from '../../components/AdminSidebar';
import {
  TrendingUp,
  Users,
  Eye,
  CheckCircle,
  Clock,
  Target,
  BookOpen,
  Award,
  ChevronUp,
  ChevronDown,
  BarChart2,
  Calendar,
  Zap,
  Shield
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line
} from 'recharts';

const AdminAnalytics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    fetchDetailedStats();
  }, []);

  const fetchDetailedStats = async () => {
    try {
      setLoading(true);
      const response = await adminAPI.getDetailedStats();
      setData(response.data);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch detailed stats:', err);
      setError('Failed to load detailed analytics');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <AdminSidebar onCollapseChange={setSidebarCollapsed} />
        <div className={`flex-1 flex items-center justify-center transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 dark:border-purple-400 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Analyzing platform data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <AdminSidebar onCollapseChange={setSidebarCollapsed} />
        <div className={`flex-1 flex items-center justify-center transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
          <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-red-600 dark:text-red-400 mb-4 font-medium">{error}</p>
            <button
              onClick={fetchDetailedStats}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const { traffic, lastActivities, sponsorship, activeUsersByDay } = data;

  // Format dates for charts
  const chartData = traffic.map(item => ({
    ...item,
    formattedDate: new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }));

  const statsCards = [
    {
      title: 'Daily Visitors',
      value: traffic[traffic.length - 1]?.visitors || 0,
      subValue: 'Last 24 hours',
      icon: Eye,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      title: 'Total Users',
      value: sponsorship.totalUsers,
      subValue: `${sponsorship.growthRate >= 0 ? '+' : ''}${sponsorship.growthRate}% Growth`,
      icon: Users,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      trend: sponsorship.growthRate >= 0 ? 'up' : 'down'
    },
    {
      title: 'Avg. Engagement',
      value: sponsorship.avgEngagement,
      subValue: 'Interactions/user',
      icon: Zap,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30'
    },
    {
      title: 'Retention Rate',
      value: `${sponsorship.retentionRate}%`,
      subValue: 'Active user ratio',
      icon: Shield,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30'
    }
  ];

  const activityItems = [
    { type: 'Quiz', data: lastActivities.quiz, icon: Target, color: 'text-pink-500' },
    { type: 'Exam', data: lastActivities.exam, icon: Award, color: 'text-red-500' },
    { type: 'CA', data: lastActivities.ca, icon: CheckCircle, color: 'text-indigo-500' },
    { type: 'Chapter', data: lastActivities.chapter, icon: BookOpen, color: 'text-emerald-500' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminSidebar onCollapseChange={setSidebarCollapsed} />

      <main className={`flex-1 min-w-0 p-8 transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Platform Analytics</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Comprehensive overview of website performance and user activity.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Last 30 Days</span>
              </div>
              <button 
                onClick={fetchDetailedStats}
                className="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <TrendingUp className="h-4 w-4 text-purple-600" />
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((card, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{card.title}</p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{card.value}</h3>
                    <div className="flex items-center mt-2">
                      {card.trend && (
                        card.trend === 'up' ? 
                        <ChevronUp className="h-4 w-4 text-green-500 mr-1" /> : 
                        <ChevronDown className="h-4 w-4 text-red-500 mr-1" />
                      )}
                      <span className={`text-xs font-semibold ${card.trend === 'up' ? 'text-green-500' : card.trend === 'down' ? 'text-red-500' : 'text-gray-400'}`}>
                        {card.subValue}
                      </span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl ${card.bgColor}`}>
                    <card.icon className={`h-6 w-6 ${card.color}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Main Traffic Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Traffic & Activity</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Daily visitors vs learning completions</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Visitors</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Completions</span>
                  </div>
                </div>
              </div>
              <div className="h-[350px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorCompletions" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis 
                      dataKey="formattedDate" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#9ca3af', fontSize: 12}}
                      minTickGap={30}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#9ca3af', fontSize: 12}}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="visitors" 
                      stroke="#8b5cf6" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorVisitors)" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="completions" 
                      stroke="#10b981" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorCompletions)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Usage Frequency Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 text-center">Active Users by Day</h3>
              <div className="h-[350px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={activeUsersByDay} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="day" 
                      type="category" 
                      axisLine={false} 
                      tickLine={false}
                      tick={{fill: '#6b7280', fontSize: 13, fontWeight: 500}}
                    />
                    <Tooltip 
                      cursor={{fill: 'transparent'}}
                      contentStyle={{ backgroundColor: '#1f2937', color: '#fff', borderRadius: '8px', border: 'none' }}
                    />
                    <Bar 
                      dataKey="users" 
                      fill="#6366f1" 
                      radius={[0, 4, 4, 0]} 
                      barSize={20}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                Peak usage usually occurs on mid-week days.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Last Activity Timeline */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Recent Completion Activity</h3>
              <div className="space-y-6">
                {activityItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-lg bg-gray-50 dark:bg-gray-700/50 ${item.color}`}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 border-b border-gray-100 dark:border-gray-700 pb-4 last:border-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">{item.type} Completion</span>
                        <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {item.data ? new Date(item.data.at).toLocaleString() : 'No recent activity'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.data ? (
                          <>User <span className="font-semibold text-purple-600 dark:text-purple-400">{item.data.username}</span> finished a {item.type.toLowerCase()}.</>
                        ) : (
                          `No ${item.type.toLowerCase()} has been completed yet.`
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sponsorship & Growth */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Sponsorship Overview</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Key metrics to present to potential sponsors.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
                  <p className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1">Total Interactions</p>
                  <h4 className="text-xl font-extrabold text-gray-900 dark:text-white">{sponsorship.totalInteractions.toLocaleString()}</h4>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800">
                  <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">User Base</p>
                  <h4 className="text-xl font-extrabold text-gray-900 dark:text-white">{sponsorship.totalUsers.toLocaleString()}</h4>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart2 className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Monthly Growth Rate</span>
                  </div>
                  <span className="text-sm font-bold text-green-500">+{sponsorship.growthRate}%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: `${Math.min(sponsorship.growthRate, 100)}%` }}></div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-orange-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Platform Engagement</span>
                  </div>
                  <span className="text-sm font-bold text-orange-500">High</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>

                <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-dashed border-gray-300 dark:border-gray-600">
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed italic">
                    "Platform growth has increased by {sponsorship.growthRate}% this month with an average of {sponsorship.avgEngagement} learning interactions per user. This demonstrates high stickiness and value for educational sponsors."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminAnalytics;
