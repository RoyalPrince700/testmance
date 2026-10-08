import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { coursesAPI, getPublishedCourses, quizzesAPI } from '../../utils/api';
import { courseSlug, isObjectId, quizCoursePath, quizPath } from '../../utils/slugs';
import { BookOpen, ArrowRight, ArrowLeft, Target, CheckCircle } from 'lucide-react';
import { chapterHasQuiz } from './quizAvailability';

const QuizCourseDetail = () => {
  const { courseSlug: slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chaptersLoading, setChaptersLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [quizAttempts, setQuizAttempts] = useState({});
  const [attemptsReady, setAttemptsReady] = useState(false);
  const [chaptersWithQuizzes, setChaptersWithQuizzes] = useState([]);

  useEffect(() => {
    if (course && (courseSlug(course) === slug || course._id === slug)) {
      const pretty = quizCoursePath(course);
      if (location.pathname !== pretty) navigate(pretty, { replace: true });
      return;
    }

    let cancelled = false;

    const loadCourseData = async () => {
      try {
        setLoading(true);
        setAttemptsReady(false);
        setQuizAttempts({});

        let courseId = slug;
        if (!isObjectId(slug)) {
          const courses = await getPublishedCourses();
          const match = courses.find((item) => courseSlug(item) === slug);
          if (!match) {
            if (!cancelled) setCourse(null);
            return;
          }
          courseId = match._id;
        }

        const [courseResponse, chaptersResponse, enrolledResponse] = await Promise.all([
          coursesAPI.getById(courseId),
          coursesAPI.getChapters(courseId),
          coursesAPI.getEnrolled().catch(() => ({ data: [] }))
        ]);

        if (cancelled) return;

        const courseData = courseResponse.data;
        const chaptersData = chaptersResponse.data || [];
        const filteredChapters = chaptersData.filter((chapter) => chapterHasQuiz(courseData.code, chapter.order));
        const enrolledCourses = enrolledResponse.data || [];

        setCourse(courseData);
        setChaptersWithQuizzes(filteredChapters);
        setIsEnrolled(enrolledCourses.some((item) => item._id === courseId || item._id === courseData._id));
      } catch (error) {
        console.error('Failed to load course data:', error);
        if (!cancelled) setCourse(null);
      } finally {
        if (!cancelled) {
          setLoading(false);
          setChaptersLoading(false);
        }
      }
    };

    loadCourseData();
    return () => {
      cancelled = true;
    };
  }, [slug, course, location.pathname, navigate]);

  useEffect(() => {
    if (!course) return;

    if (!isEnrolled || chaptersWithQuizzes.length === 0) {
      setAttemptsReady(true);
      return;
    }

    let cancelled = false;
    setAttemptsReady(false);

    const loadAttempts = async () => {
      const results = await Promise.all(chaptersWithQuizzes.map(async (chapter) => {
        try {
          const response = await quizzesAPI.getResultsByChapter(chapter._id);
          return response.data?.attempts > 0 ? chapter._id : null;
        } catch (error) {
          return null;
        }
      }));

      if (cancelled) return;

      const completions = {};
      results.forEach((id) => {
        if (id) completions[id] = true;
      });
      setQuizAttempts(completions);
      setAttemptsReady(true);
    };

    loadAttempts();
    return () => {
      cancelled = true;
    };
  }, [course, isEnrolled, chaptersWithQuizzes]);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="mx-auto max-w-6xl px-5 py-16 text-center md:px-8">
        <div className="rounded-3xl border border-line bg-surface px-6 py-16">
          <BookOpen className="mx-auto h-8 w-8 text-slate" strokeWidth={1.75} />
          <h1 className="mt-4 text-lg font-medium tracking-tight text-ink">Course not found</h1>
          <p className="mt-2 text-[15px] leading-relaxed text-slate">This course is not on the quiz hub.</p>
          <Link to="/quiz-hub" className="btn-primary mt-6">Back to quiz hub</Link>
        </div>
      </div>
    );
  }

  if (!isEnrolled && !loading) {
    return (
      <div className="bg-canvas pb-20 text-ink">
        <header className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-16">
          <Link to="/quiz-hub" className="inline-flex items-center gap-2 text-sm font-medium text-graphite hover:text-ink">
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            Quiz hub
          </Link>
          <p className="mt-8 text-sm font-medium text-accent">{course.code || 'Course'}</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
            {course.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-graphite">
            Enroll in this course before taking its quizzes.
          </p>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row">
            <Link to="/courses" className="btn-primary">Browse courses</Link>
            <Link to="/quiz-hub" className="btn-secondary">Back to quiz hub</Link>
          </div>
        </header>
      </div>
    );
  }

  const attemptedCount = chaptersWithQuizzes.filter((chapter) => quizAttempts[chapter._id]).length;

  return (
    <div className="bg-canvas pb-20 text-ink">
      <header className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-16">
        <Link to="/quiz-hub" className="inline-flex items-center gap-2 text-sm font-medium text-graphite hover:text-ink">
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
          Quiz hub
        </Link>
        <p className="rise-in mt-8 text-sm font-medium text-accent">{course.code || 'Course'}</p>
        <h1 className="rise-in mt-3 max-w-2xl text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]" style={{ animationDelay: '70ms' }}>
          {course.title}
        </h1>
        {course.description && (
          <p className="rise-in mt-4 max-w-xl text-lg leading-relaxed text-graphite" style={{ animationDelay: '140ms' }}>
            {course.description}
          </p>
        )}
      </header>

      <section className="mt-12 border-y border-line bg-surface" aria-label="Quiz progress">
        <dl className="mx-auto grid max-w-6xl grid-cols-2">
          <div className="px-5 py-8 md:px-8">
            <dt className="text-sm text-slate">Quizzes</dt>
            <dd className="mt-1 text-3xl font-medium tracking-tight text-ink md:text-4xl">{chaptersWithQuizzes.length}</dd>
          </div>
          <div className="border-l border-line px-5 py-8 md:px-8">
            <dt className="text-sm text-slate">Attempted</dt>
            <dd className="mt-1 text-3xl font-medium tracking-tight text-accent md:text-4xl">
              {attemptsReady ? attemptedCount : '…'}<span className="text-slate">/{chaptersWithQuizzes.length}</span>
            </dd>
          </div>
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16 md:px-8 md:pt-20">
        <p className="text-sm font-medium text-accent">Chapters</p>
        <h2 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
          Take a chapter quiz
        </h2>

        {chaptersLoading ? (
          <div className="flex items-center justify-center py-16">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" />
          </div>
        ) : chaptersWithQuizzes.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-line bg-surface px-6 py-16 text-center">
            <Target className="mx-auto h-8 w-8 text-slate" strokeWidth={1.75} />
            <h3 className="mt-4 text-lg font-medium tracking-tight text-ink">No quizzes yet</h3>
            <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-slate">
              This course does not have chapter quizzes yet.
            </p>
          </div>
        ) : (
          <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-surface">
            {chaptersWithQuizzes.map((chapter, index) => {
              const hasBeenAttempted = quizAttempts[chapter._id];
              return (
                <Link
                  key={chapter._id}
                  to={quizPath(course, chapter, chaptersWithQuizzes)}
                  className={`group flex items-center justify-between gap-4 px-5 py-4 md:px-6 ${
                    index < chaptersWithQuizzes.length - 1 ? 'border-b border-line' : ''
                  } hover:bg-canvas`}
                >
                  <span className="flex min-w-0 items-center gap-3">
                    {attemptsReady && hasBeenAttempted ? (
                      <CheckCircle className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
                    ) : (
                      <span className="h-4 w-4 shrink-0 rounded-full border border-line" />
                    )}
                    <span className="truncate text-sm font-medium text-ink">
                      {chapter.order ? `${chapter.order}. ` : ''}{chapter.title}
                    </span>
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-accent">
                    {attemptsReady ? (hasBeenAttempted ? 'Retake' : 'Start') : 'Open'}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.75} />
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default QuizCourseDetail;
