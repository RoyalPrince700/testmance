import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { coursesAPI, leaderboardAPI, usersAPI, resultsAPI } from '../utils/api';
import { coursePath } from '../utils/slugs';
import { BookOpen, Trophy, Target, Award, FileText, PenTool, CheckCircle, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';

const achievements = [
  { id: 'firstChapter', icon: Award, title: 'First chapter', description: 'Completed your first chapter' },
  { id: 'firstQuiz', icon: Target, title: 'Quiz master', description: 'Took your first quiz' },
  { id: 'perfectScore', icon: Trophy, title: 'Perfect score', description: 'Got 100% on a quiz' },
];

const StatCell = ({ label, value, gem, index }) => {
  const borders = [
    index > 0 ? 'md:border-l md:border-line' : '',
    index % 2 === 1 ? 'border-l border-line' : '',
    index > 1 ? 'border-t border-line md:border-t-0' : '',
  ].join(' ');

  return (
    <Reveal as="div" className={`px-5 py-8 md:px-8 ${borders}`} delay={index * 80}>
      <dt className="text-sm text-slate">{label}</dt>
      <dd className={`mt-1 text-3xl font-medium tracking-tight md:text-4xl ${gem ? 'text-gem' : 'text-ink'}`}>
        {value}
      </dd>
    </Reveal>
  );
};

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [availableCourses, setAvailableCourses] = useState([]);
  const [userRank, setUserRank] = useState(null);
  const [courseProgress, setCourseProgress] = useState({});
  const [resultsSummary, setResultsSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const [statsResponse, enrolledCoursesResponse, rankResponse, resultsResponse] = await Promise.all([
          usersAPI.getStats(),
          coursesAPI.getEnrolled().catch(() => ({ data: [] })),
          leaderboardAPI.getUserRank(),
          resultsAPI.getAll().catch(() => ({ data: [] }))
        ]);

        setStats(statsResponse.data);
        setAvailableCourses(enrolledCoursesResponse.data || []);
        setUserRank(rankResponse.data);
        setResultsSummary(resultsResponse.data || []);

        const progressPromises = (enrolledCoursesResponse.data || []).map(async (course) => {
          try {
            const [progressResponse, chaptersResponse] = await Promise.all([
              coursesAPI.getProgress(course._id).catch(() => ({ data: { completedChapters: 0, totalChapters: 0, progressPercentage: 0, completedChapterIds: [] } })),
              coursesAPI.getChapters(course._id).catch(() => ({ data: [] }))
            ]);

            const progressData = progressResponse.data || progressResponse;
            const chapters = chaptersResponse.data || chaptersResponse || [];
            const totalChapters = Array.isArray(chapters) ? chapters.length : (progressData.totalChapters || 0);
            const completedChapterIds = progressData.completedChapterIds || [];
            const completedChapters = completedChapterIds.length;
            const progressPercentage = totalChapters > 0
              ? Math.round((completedChapters / totalChapters) * 100)
              : 0;

            return {
              courseId: course._id,
              progress: {
                progressPercentage,
                completedChapters,
                totalChapters,
                completedChapterIds
              }
            };
          } catch (error) {
            return {
              courseId: course._id,
              progress: {
                progressPercentage: 0,
                completedChapters: 0,
                totalChapters: 0,
                completedChapterIds: []
              }
            };
          }
        });

        const progressResults = await Promise.all(progressPromises);
        const progressMap = {};
        progressResults.forEach(({ courseId, progress }) => {
          if (courseId) {
            progressMap[courseId.toString()] = progress;
          }
        });
        setCourseProgress(progressMap);
      } catch (error) {
        // Silently handle errors
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      loadDashboardData();
    }
  }, [user]);

  useEffect(() => {
    if (availableCourses.length === 0 || !user) return;

    const refreshProgress = async () => {
      try {
        const progressPromises = availableCourses.map(course =>
          coursesAPI.getProgress(course._id)
            .then(response => ({ courseId: course._id, progress: response.data }))
            .catch(() => null)
        );

        const progressResults = await Promise.all(progressPromises);
        setCourseProgress(prevProgress => {
          const progressMap = { ...prevProgress };
          progressResults.forEach(result => {
            if (result && result.courseId) {
              progressMap[result.courseId.toString()] = result.progress;
            }
          });
          return progressMap;
        });
      } catch (error) {
        // Silently handle errors
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        refreshProgress();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [availableCourses, user]);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" />
      </div>
    );
  }

  const earned = achievements.filter((item) => stats?.achievements?.[item.id]);
  const rankLabel = userRank?.globalRank ? `#${userRank.globalRank}` : '—';
  const chaptersCompleted = stats?.overview?.completedChapters || 0;

  return (
    <div className="bg-canvas pb-20 text-ink">
      <header className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-16">
        <p className="rise-in text-sm font-medium text-accent">Dashboard</p>
        <h1
          className="rise-in mt-3 max-w-2xl text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]"
          style={{ animationDelay: '70ms' }}
        >
          Welcome back{user?.username ? `, ${user.username}` : ''}.
        </h1>
        <p className="rise-in mt-4 max-w-xl text-lg leading-relaxed text-graphite" style={{ animationDelay: '140ms' }}>
          Continue a course, sit a CA, or take the exam. Gems and rank update as you finish.
        </p>
      </header>

      <section className="mt-12 border-y border-line bg-surface" aria-label="Your progress">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          <StatCell label="Gems" value={user?.gems || 0} gem index={0} />
          <StatCell label="Level" value={user?.level || 1} index={1} />
          <StatCell label="Chapters" value={chaptersCompleted} index={2} />
          <StatCell label="Rank" value={rankLabel} index={3} />
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16 md:px-8 md:pt-20">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium text-accent">Enrolled</p>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
            Your courses
          </h2>
        </Reveal>

        {availableCourses.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-line bg-surface px-6 py-16 text-center">
            <BookOpen className="mx-auto h-8 w-8 text-slate" strokeWidth={1.75} />
            <h3 className="mt-4 text-lg font-medium tracking-tight text-ink">No enrolled courses</h3>
            <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-slate">
              Start with a subject, then the chapters, quizzes, and exams show up here.
            </p>
            <Link to="/courses" className="btn-primary group mt-6">
              Browse courses
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {availableCourses.map((course, index) => {
              const courseId = course._id?.toString() || course._id;
              const progressData = courseProgress[courseId] || { progressPercentage: 0, completedChapters: 0, totalChapters: 0 };
              const progress = typeof progressData.progressPercentage === 'number'
                ? progressData.progressPercentage
                : (progressData.completedChapters && progressData.totalChapters
                    ? Math.round((progressData.completedChapters / progressData.totalChapters) * 100)
                    : 0);
              const clamped = Math.min(100, Math.max(0, progress));

              return (
                <Reveal key={course._id} as="article" className="flex flex-col rounded-3xl border border-line bg-surface p-6" delay={(index % 3) * 70}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate">Progress</span>
                    <span className="font-medium text-accent">{clamped}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-canvas">
                    <div className="h-full rounded-full bg-accent-fill" style={{ width: `${clamped}%` }} />
                  </div>

                  <h3 className="mt-6 text-xl font-medium tracking-tight text-ink">{course.code || 'Course'}</h3>
                  <p className="mt-1 truncate text-base text-graphite" title={course.title}>{course.title}</p>
                  {course.description && (
                    <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-slate">{course.description}</p>
                  )}

                  <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-slate">
                    <BookOpen className="h-4 w-4" strokeWidth={1.75} />
                    {progressData.completedChapters || 0} of {progressData.totalChapters || 0} chapters
                  </p>

                  <Link to={coursePath(course)} className="btn-primary group mt-6 w-full">
                    Resume
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        )}
      </section>

      {availableCourses.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 pt-16 md:px-8 md:pt-20">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-accent">Assessments</p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
                CA and exams
              </h2>
            </div>
            <Link to="/results" className="inline-flex items-center gap-1 text-sm font-medium text-accent">
              View results
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-4">
            {availableCourses.map((course, index) => {
              const result = resultsSummary?.find(r => r.course?._id === course._id);
              const caDone = result?.caCompletedAt;
              const examDone = result?.examCompletedAt;

              return (
                <Reveal key={course._id} className="flex flex-col gap-5 rounded-3xl border border-line bg-surface p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6" delay={index * 70}>
                  <div>
                    <h3 className="text-lg font-medium tracking-tight text-ink">
                      {course.code}: {course.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate">
                      {result?.isComplete
                        ? `Completed. Grade ${result.grade}`
                        : `Score ${result?.totalScore || 0}/100`}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    {caDone ? (
                      <span className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-accent-soft px-4 text-sm font-medium text-accent sm:w-auto">
                        <CheckCircle className="h-4 w-4" strokeWidth={1.75} />
                        CA {result.caScore}/30
                      </span>
                    ) : (
                      <Link to={`/ca/${course._id}`} className="btn-primary w-full sm:w-auto">
                        <FileText className="h-4 w-4" strokeWidth={1.75} />
                        Take CA
                      </Link>
                    )}

                    {examDone ? (
                      <span className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-accent-soft px-4 text-sm font-medium text-accent sm:w-auto">
                        <CheckCircle className="h-4 w-4" strokeWidth={1.75} />
                        Exam {result.examScore}/70
                      </span>
                    ) : (
                      <Link to={`/exam/${course._id}`} className={`${caDone ? 'btn-primary' : 'btn-secondary'} w-full sm:w-auto`}>
                        <PenTool className="h-4 w-4" strokeWidth={1.75} />
                        Take exam
                      </Link>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-5 pt-16 md:px-8 md:pt-20">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium text-accent">Achievements</p>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
            Marks from the work so far.
          </h2>
        </Reveal>

        {earned.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-line bg-surface px-6 py-16 text-center">
            <Award className="mx-auto h-8 w-8 text-slate" strokeWidth={1.75} />
            <h3 className="mt-4 text-lg font-medium tracking-tight text-ink">Nothing unlocked yet</h3>
            <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-slate">
              Finish a chapter or a quiz and the first mark shows up here.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {earned.map(({ id, icon: Icon, title, description }, index) => (
              <Reveal key={id} as="article" className="rounded-3xl border border-line bg-surface p-6" delay={index * 80}>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-medium tracking-tight text-ink">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">{description}</p>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
