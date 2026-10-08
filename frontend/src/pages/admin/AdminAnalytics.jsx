import { useState, useEffect } from 'react';
import { adminAPI } from '../../utils/api';
import AdminSidebar from '../../components/AdminSidebar';
import Reveal from '../../components/Reveal';
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
  ResponsiveContainer
} from 'recharts';

const tooltipStyle = {
  backgroundColor: 'var(--color-surface)',
  border: '1px solid var(--color-line)',
  borderRadius: '16px',
  color: 'var(--color-ink)',
  fontSize: '12px'
};

const axisTick = { fill: 'var(--color-slate)', fontSize: 12 };

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

  const frame = `min-h-screen bg-canvas pb-20 text-ink transition-[margin] duration-300 ${
    sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
  }`;

  if (loading) {
    return (
      <>
        <AdminSidebar onCollapseChange={setSidebarCollapsed} />
        <div className={`${frame} flex items-center justify-center`}>
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" role="status" aria-label="Loading analytics" />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <AdminSidebar onCollapseChange={setSidebarCollapsed} />
        <div className={`${frame} flex items-center justify-center px-5`}>
          <div className="rounded-3xl border border-line bg-surface px-8 py-10 text-center">
            <p className="text-[15px] text-graphite">{error}</p>
            <button type="button" onClick={fetchDetailedStats} className="btn-primary mt-4">
              Try again
            </button>
          </div>
        </div>
      </>
    );
  }

  const { traffic, lastActivities, sponsorship, activeUsersByDay } = data;

  const chartData = traffic.map(item => ({
    ...item,
    formattedDate: new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }));

  const statsCards = [
    {
      title: 'Daily visitors',
      value: traffic[traffic.length - 1]?.visitors || 0,
      subValue: 'Last 24 hours',
      icon: Eye
    },
    {
      title: 'Total users',
      value: sponsorship.totalUsers,
      subValue: `${sponsorship.growthRate >= 0 ? '+' : ''}${sponsorship.growthRate}% growth`,
      icon: Users,
      trend: sponsorship.growthRate >= 0 ? 'up' : 'down'
    },
    {
      title: 'Avg. engagement',
      value: sponsorship.avgEngagement,
      subValue: 'Interactions per user',
      icon: Zap
    },
    {
      title: 'Retention rate',
      value: `${sponsorship.retentionRate}%`,
      subValue: 'Active user ratio',
      icon: Shield
    }
  ];

  const activityItems = [
    { type: 'Quiz', data: lastActivities.quiz, icon: Target },
    { type: 'Exam', data: lastActivities.exam, icon: Award },
    { type: 'CA', data: lastActivities.ca, icon: CheckCircle },
    { type: 'Chapter', data: lastActivities.chapter, icon: BookOpen }
  ];

  const growthWidth = `${Math.min(Math.max(sponsorship.growthRate, 0), 100)}%`;

  return (
    <>
      <AdminSidebar onCollapseChange={setSidebarCollapsed} />

      <main className={frame}>
        <header className="mx-auto flex max-w-6xl flex-col gap-4 px-5 pt-10 md:flex-row md:items-end md:justify-between md:px-8 md:pt-16">
          <div>
            <p className="text-sm font-medium text-accent">Admin</p>
            <h1 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
              Analytics
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-graphite">
              Visitors, completions, and how students use the platform.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-medium text-ink">
              <Calendar className="h-4 w-4 text-slate" strokeWidth={1.75} />
              Last 30 days
            </span>
            <button type="button" onClick={fetchDetailedStats} className="btn-secondary px-3" aria-label="Refresh analytics">
              <TrendingUp className="h-4 w-4" strokeWidth={1.75} />
            </button>
          </div>
        </header>

        <section className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4 md:px-8">
          {statsCards.map((card, index) => (
            <Reveal key={card.title} as="article" className="rounded-3xl border border-line bg-surface p-6" delay={index * 70}>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <card.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <p className="mt-5 text-sm text-slate">{card.title}</p>
              <p className="mt-1 text-3xl font-medium tracking-tight text-ink">{card.value}</p>
              <p className="mt-2 flex items-center text-sm text-slate">
                {card.trend === 'up' && <ChevronUp className="mr-1 h-4 w-4 text-accent" strokeWidth={1.75} />}
                {card.trend === 'down' && <ChevronDown className="mr-1 h-4 w-4 text-slate" strokeWidth={1.75} />}
                {card.subValue}
              </p>
            </Reveal>
          ))}
        </section>

        <section className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 px-5 lg:grid-cols-3 md:px-8">
          <article className="rounded-3xl border border-line bg-surface p-6 lg:col-span-2">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-lg font-medium tracking-tight text-ink">Traffic and activity</h2>
                <p className="mt-1 text-sm text-slate">Daily visitors and learning completions</p>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-fill" />
                  Visitors
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-graphite" />
                  Completions
                </span>
              </div>
            </div>
            <div className="mt-6 h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-accent-fill)" stopOpacity={0.22} />
                      <stop offset="95%" stopColor="var(--color-accent-fill)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorCompletions" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-graphite)" stopOpacity={0.18} />
                      <stop offset="95%" stopColor="var(--color-graphite)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-line)" />
                  <XAxis dataKey="formattedDate" axisLine={false} tickLine={false} tick={axisTick} minTickGap={30} />
                  <YAxis axisLine={false} tickLine={false} tick={axisTick} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Area type="monotone" dataKey="visitors" stroke="var(--color-accent-fill)" strokeWidth={2} fillOpacity={1} fill="url(#colorVisitors)" />
                  <Area type="monotone" dataKey="completions" stroke="var(--color-graphite)" strokeWidth={2} fillOpacity={1} fill="url(#colorCompletions)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </article>

          <article className="rounded-3xl border border-line bg-surface p-6">
            <h2 className="text-lg font-medium tracking-tight text-ink">Active users by day</h2>
            <div className="mt-6 h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activeUsersByDay} layout="vertical" margin={{ top: 5, right: 12, left: 8, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--color-line)" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="day" type="category" axisLine={false} tickLine={false} tick={axisTick} width={72} />
                  <Tooltip cursor={{ fill: 'transparent' }} contentStyle={tooltipStyle} />
                  <Bar dataKey="users" fill="var(--color-accent-fill)" radius={[0, 8, 8, 0]} barSize={16} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-center text-sm text-slate">Peak use is usually mid-week.</p>
          </article>
        </section>

        <section className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 px-5 lg:grid-cols-2 md:px-8">
          <article className="rounded-3xl border border-line bg-surface p-6">
            <h2 className="text-lg font-medium tracking-tight text-ink">Recent completions</h2>
            <ul className="mt-6 space-y-5">
              {activityItems.map((item) => (
                <li key={item.type} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                    <item.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0 flex-1 border-b border-line pb-4 last:border-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-medium text-ink">{item.type}</span>
                      <span className="inline-flex items-center gap-1 text-xs text-slate">
                        <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
                        {item.data ? new Date(item.data.at).toLocaleString() : 'No recent activity'}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate">
                      {item.data ? (
                        <>
                          <span className="font-medium text-accent">{item.data.username}</span> finished a {item.type.toLowerCase()}.
                        </>
                      ) : (
                        `No ${item.type.toLowerCase()} has been completed yet.`
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-line bg-surface p-6">
            <h2 className="text-lg font-medium tracking-tight text-ink">Sponsorship</h2>
            <p className="mt-1 text-sm text-slate">Figures you can share with a sponsor.</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-line bg-accent-soft p-4">
                <p className="text-sm text-accent">Interactions</p>
                <p className="mt-1 text-xl font-medium tracking-tight text-ink">{sponsorship.totalInteractions.toLocaleString()}</p>
              </div>
              <div className="rounded-2xl border border-line bg-canvas p-4">
                <p className="text-sm text-slate">Users</p>
                <p className="mt-1 text-xl font-medium tracking-tight text-ink">{sponsorship.totalUsers.toLocaleString()}</p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-sm text-graphite">
                    <BarChart2 className="h-4 w-4 text-accent" strokeWidth={1.75} />
                    Monthly growth
                  </span>
                  <span className="text-sm font-medium text-accent">
                    {sponsorship.growthRate >= 0 ? '+' : ''}{sponsorship.growthRate}%
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-canvas">
                  <div className="h-full rounded-full bg-accent-fill" style={{ width: growthWidth }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-sm text-graphite">
                    <Zap className="h-4 w-4 text-accent" strokeWidth={1.75} />
                    Engagement
                  </span>
                  <span className="text-sm font-medium text-ink">High</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-canvas">
                  <div className="h-full w-[85%] rounded-full bg-accent-fill" />
                </div>
              </div>

              <p className="rounded-2xl border border-dashed border-line bg-canvas p-4 text-sm leading-relaxed text-slate">
                Growth is {sponsorship.growthRate}% this month, with {sponsorship.avgEngagement} learning interactions per user.
              </p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default AdminAnalytics;
