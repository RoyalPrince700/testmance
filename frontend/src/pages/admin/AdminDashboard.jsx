import { useState, useEffect } from 'react';
import { adminAPI } from '../../utils/api';
import AdminSidebar from '../../components/AdminSidebar';
import Reveal from '../../components/Reveal';
import { getAvatarSrc } from '../../utils/avatarUtils';
import { Users, UserCheck, BookOpen, Target } from 'lucide-react';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const chartFills = [
  'var(--color-accent-fill)',
  'var(--color-accent-deep)',
  'var(--color-graphite)',
  'var(--color-slate)'
];

const tooltipStyle = {
  backgroundColor: 'var(--color-surface)',
  border: '1px solid var(--color-line)',
  borderRadius: '16px',
  color: 'var(--color-ink)',
  fontSize: '12px'
};

const axisTick = { fill: 'var(--color-slate)', fontSize: 12 };

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

  const frame = `min-h-screen bg-canvas pb-20 text-ink transition-[margin] duration-300 ${
    sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
  }`;

  if (loading) {
    return (
      <>
        <AdminSidebar onCollapseChange={setSidebarCollapsed} />
        <div className={`${frame} flex items-center justify-center`}>
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" role="status" aria-label="Loading dashboard" />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <AdminSidebar onCollapseChange={setSidebarCollapsed} />
        <div className={`${frame} flex items-center justify-center px-5`}>
          <div className="text-center">
            <p className="text-[15px] text-graphite">{error}</p>
            <button type="button" onClick={fetchStats} className="btn-primary mt-4">
              Try again
            </button>
          </div>
        </div>
      </>
    );
  }

  const overviewCards = [
    { title: 'Total users', value: stats?.overview?.totalUsers || 0, icon: Users, change: '+12% from last month' },
    { title: 'Active users', value: stats?.overview?.activeUsers || 0, icon: UserCheck, change: '+8% from last month' },
    { title: 'Quiz attempts', value: stats?.overview?.totalQuizAttempts || 0, icon: Target, change: '+15% from last month' },
    { title: 'Completed chapters', value: stats?.overview?.totalCompletedChapters || 0, icon: BookOpen, change: '+20% from last month' }
  ];

  const universityData = stats?.universityStats?.slice(0, 8).map(item => ({
    name: item._id?.substring(0, 15) + '...' || 'Unknown',
    users: item.count
  })) || [];

  const levelData = stats?.levelStats?.map(item => ({
    level: `Level ${item._id}`,
    users: item.count
  })) || [];

  return (
    <>
      <AdminSidebar onCollapseChange={setSidebarCollapsed} />

      <div className={frame}>
        <header className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-16">
          <p className="text-sm font-medium text-accent">Admin</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
            Dashboard
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-graphite">
            Users, quizzes, and chapters across TestMancer.
          </p>
        </header>

        <section className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4 md:px-8">
          {overviewCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} as="article" className="rounded-3xl border border-line bg-surface p-6" delay={index * 70}>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <p className="mt-5 text-sm text-slate">{card.title}</p>
                <p className="mt-1 text-3xl font-medium tracking-tight text-ink">{card.value.toLocaleString()}</p>
                <p className="mt-2 text-sm text-slate">{card.change}</p>
              </Reveal>
            );
          })}
        </section>

        <section className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 px-5 lg:grid-cols-2 md:px-8">
          <article className="rounded-3xl border border-line bg-surface p-6">
            <h2 className="text-lg font-medium tracking-tight text-ink">Users by university</h2>
            <div className="mt-6 h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={universityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-line)" vertical={false} />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} tick={axisTick} axisLine={false} tickLine={false} />
                  <YAxis tick={axisTick} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar dataKey="users" fill="var(--color-accent-fill)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </article>

          <article className="rounded-3xl border border-line bg-surface p-6">
            <h2 className="text-lg font-medium tracking-tight text-ink">Users by level</h2>
            <div className="mt-6 h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={levelData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ level, percent }) => `${level} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={80}
                    dataKey="users"
                    stroke="var(--color-surface)"
                  >
                    {levelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={chartFills[index % chartFills.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={tooltipStyle} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </article>
        </section>

        <section className="mx-auto mt-8 max-w-6xl px-5 md:px-8">
          <article className="overflow-hidden rounded-3xl border border-line bg-surface">
            <h2 className="px-6 pt-6 text-lg font-medium tracking-tight text-ink">Recent active users</h2>
            {stats?.recentActivity?.length > 0 ? (
              <ul className="mt-4 divide-y divide-line">
                {stats.recentActivity.slice(0, 5).map((user, index) => (
                  <li key={user._id || index} className="flex items-center justify-between gap-4 px-6 py-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <img
                        src={getAvatarSrc(user.avatar)}
                        alt=""
                        className="h-9 w-9 rounded-full border border-line object-cover"
                      />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-ink">{user.username}</p>
                        <p className="text-sm text-slate">{user.recentActivityCount} activities this week</p>
                      </div>
                    </div>
                    <p className="shrink-0 text-sm text-slate">Last 7 days</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="px-6 py-12 text-center text-[15px] text-slate">No recent activity.</p>
            )}
          </article>
        </section>
      </div>
    </>
  );
};

export default AdminDashboard;
