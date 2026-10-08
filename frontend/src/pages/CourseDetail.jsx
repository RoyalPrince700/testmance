import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { coursesAPI } from '../utils/api';
import { chapterPath, coursePath, courseSlug, isObjectId } from '../utils/slugs';
import { getChapterMotion, getMotionResource } from '../motion/catalog.js';
import { BookOpen, ArrowRight, ArrowLeft, CheckCircle, Play } from 'lucide-react';

const CourseMotion = lazy(() => import('../components/CourseMotion.jsx'));
const MotionDialog = lazy(() => import('../components/MotionDialog.jsx'));

const CourseDetail = () => {
  const { courseSlug: slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [course, setCourse] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chaptersLoading, setChaptersLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [enrolling, setEnrolling] = useState(false);
  const [chapterFilm, setChapterFilm] = useState(null);

  useEffect(() => {
    if (course && (courseSlug(course) === slug || course._id === slug)) {
      const pretty = coursePath(course);
      if (location.pathname !== pretty) {
        navigate(pretty, { replace: true });
      }
      return;
    }

    const loadCourseData = async () => {
      try {
        setLoading(true);
        setChaptersLoading(true);

        let courseId = slug;
        if (!isObjectId(slug)) {
          const list = await coursesAPI.getAll();
          const match = (list.data || []).find((item) => courseSlug(item) === slug);
          if (!match) {
            setCourse(null);
            return;
          }
          courseId = match._id;
        }

        const [courseResponse, chaptersResponse, progressResponse, enrolledResponse] = await Promise.all([
          coursesAPI.getById(courseId),
          coursesAPI.getChapters(courseId),
          coursesAPI.getProgress(courseId).catch(() => ({ data: { completedChapters: 0, totalChapters: 0, progressPercentage: 0, completedChapterIds: [] } })),
          coursesAPI.getEnrolled().catch(() => ({ data: [] }))
        ]);

        const courseData = courseResponse.data;
        setCourse(courseData);
        setChapters(chaptersResponse.data);
        setProgress(progressResponse.data);

        const enrolledCourses = enrolledResponse.data || [];
        const enrolled = enrolledCourses.some(c => c._id === courseId || c._id === courseData._id);
        setIsEnrolled(enrolled);

      } catch (error) {
        console.error('Failed to load course data:', error);
        setCourse(null);
      } finally {
        setLoading(false);
        setChaptersLoading(false);
      }
    };

    loadCourseData();
  }, [slug, course, location.pathname, navigate]);

  const completedChapterIds = progress?.completedChapterIds || [];
  const completedCount = completedChapterIds.length;
  const totalChapters = chapters.length;
  const progressPercentage = totalChapters > 0 ? Math.round((completedCount / totalChapters) * 100) : 0;

  const isChapterCompleted = (chapterId) => {
    const chapterIdStr = typeof chapterId === 'string' ? chapterId : chapterId.toString();
    return completedChapterIds.some(id => id.toString() === chapterIdStr);
  };

  const handleEnroll = async () => {
    if (!course || enrolling) return;
    try {
      setEnrolling(true);
      await coursesAPI.enroll(course._id);
      setIsEnrolled(true);
    } catch (error) {
      console.error('Failed to enroll:', error);
      alert(error.message || 'Failed to enroll in course');
    } finally {
      setEnrolling(false);
    }
  };

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
          <p className="mt-2 text-[15px] leading-relaxed text-slate">This course is not on TestMancer.</p>
          <Link to="/courses" className="btn-primary mt-6">Browse courses</Link>
        </div>
      </div>
    );
  }

  if (!isEnrolled && !loading) {
    return (
      <div className="bg-canvas pb-20 text-ink">
        <header className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-16">
          <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-medium text-graphite hover:text-ink">
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            Courses
          </Link>
          <p className="mt-8 text-sm font-medium text-accent">{course.code || 'Course'}</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
            {course.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-graphite">
            {course.description || 'Enroll to open the chapters and start reading.'}
          </p>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row">
            <button type="button" onClick={handleEnroll} disabled={enrolling} className="btn-primary disabled:opacity-50">
              {enrolling ? 'Enrolling...' : 'Enroll'}
            </button>
            <Link to="/courses" className="btn-secondary">Back to courses</Link>
          </div>
        </header>
        {getMotionResource(course.code) && (
          <Suspense fallback={null}>
            <CourseMotion courseCode={course.code} />
          </Suspense>
        )}
      </div>
    );
  }

  return (
    <div className="bg-canvas pb-20 text-ink">
      <header className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-16">
        <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-medium text-graphite hover:text-ink">
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
          Courses
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

      {getMotionResource(course.code) && (
        <Suspense fallback={null}>
          <CourseMotion courseCode={course.code} />
        </Suspense>
      )}

      <section className="mt-12 border-y border-line bg-surface" aria-label="Course progress">
        <dl className="mx-auto grid max-w-6xl grid-cols-2">
          <div className="px-5 py-8 md:px-8">
            <dt className="text-sm text-slate">Chapters</dt>
            <dd className="mt-1 text-3xl font-medium tracking-tight text-ink md:text-4xl">
              {completedCount}<span className="text-slate">/{totalChapters}</span>
            </dd>
          </div>
          <div className="border-l border-line px-5 py-8 md:px-8">
            <dt className="text-sm text-slate">Complete</dt>
            <dd className="mt-1 text-3xl font-medium tracking-tight text-accent md:text-4xl">{progressPercentage}%</dd>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-canvas">
              <div className="h-full rounded-full bg-accent-fill" style={{ width: `${progressPercentage}%` }} />
            </div>
          </div>
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16 md:px-8 md:pt-20">
        <p className="text-sm font-medium text-accent">Chapters</p>
        <h2 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
          Read through the course
        </h2>

        {chaptersLoading ? (
          <div className="flex items-center justify-center py-16">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" />
          </div>
        ) : chapters.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-line bg-surface px-6 py-16 text-center">
            <BookOpen className="mx-auto h-8 w-8 text-slate" strokeWidth={1.75} />
            <h3 className="mt-4 text-lg font-medium tracking-tight text-ink">No chapters yet</h3>
            <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-slate">
              This course does not have chapters to read yet.
            </p>
          </div>
        ) : (
          <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-surface">
            {chapters.map((chapter, index) => {
              const isCompleted = isChapterCompleted(chapter._id);
              const film = getChapterMotion(course.code, chapter.order);
              const to = chapterPath(course, chapter, chapters);
              return (
                <div
                  key={chapter._id}
                  className={`flex items-center justify-between gap-4 px-5 py-4 hover:bg-canvas md:px-6 ${
                    index < chapters.length - 1 ? 'border-b border-line' : ''
                  }`}
                >
                  <Link to={to} className="flex min-w-0 flex-1 items-center gap-3">
                    {isCompleted ? (
                      <CheckCircle className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
                    ) : (
                      <span className="h-4 w-4 shrink-0 rounded-full border border-line" />
                    )}
                    <span className="truncate text-sm font-medium text-ink">
                      {chapter.order ? `${chapter.order}. ` : ''}{chapter.title}
                    </span>
                  </Link>
                  <span className="flex shrink-0 items-center gap-4">
                    {film && (
                      <button
                        type="button"
                        onClick={() => setChapterFilm(film)}
                        className="inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-accent"
                      >
                        <Play className="h-4 w-4" strokeWidth={1.75} />
                        Video
                      </button>
                    )}
                    <Link to={to} className="group inline-flex items-center gap-1 text-sm font-medium text-accent">
                      Read
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.75} />
                    </Link>
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {chapterFilm && (
        <Suspense fallback={null}>
          <MotionDialog resource={chapterFilm} onClose={() => setChapterFilm(null)} />
        </Suspense>
      )}
    </div>
  );
};

export default CourseDetail;
