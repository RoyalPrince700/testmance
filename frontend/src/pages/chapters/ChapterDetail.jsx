import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { chaptersAPI, coursesAPI } from '../../utils/api';
import { chapterPath, coursePath, courseSlug, findChapterBySlug, isObjectId, quizPath } from '../../utils/slugs';
import { BookOpen } from 'lucide-react';
import { ChapterHeader, SectionViewer, ChapterNavigation, CongratulationsModal } from './components';
import { getChapterContent } from './content';
import { chapterHasQuiz } from '../quizzes/quizAvailability';
import { useAuth } from '../../contexts/AuthContext';

const ChapterDetail = () => {
  const { id, courseSlug: routeCourseSlug, chapterSlug: routeChapterSlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, loadUser } = useAuth();
  const [chapter, setChapter] = useState(null);
  const [course, setCourse] = useState(null);
  const [allChapters, setAllChapters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [wasCompletedBefore, setWasCompletedBefore] = useState(false);
  const [progress, setProgress] = useState(null);
  const [chapterContent, setChapterContent] = useState(null);
  const [isLastSection, setIsLastSection] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [gemsEarned, setGemsEarned] = useState(3);
  const [isCompleting, setIsCompleting] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [hasQuiz, setHasQuiz] = useState(false);
  const loadedPath = useRef('');

  useEffect(() => {
    const path = decodeURI(location.pathname);
    if (loadedPath.current === path) return;

    let cancelled = false;

    const loadChapterData = async () => {
      try {
        setLoading(true);
        let chapterId = id;
        let chapterData = null;
        let courseData = null;
        let chapters = [];

        if (routeCourseSlug && routeChapterSlug && !isObjectId(routeCourseSlug)) {
          const list = await coursesAPI.getAll();
          const match = (list.data || []).find((item) => courseSlug(item) === routeCourseSlug);
          if (!match) {
            if (!cancelled) {
              setChapter(null);
              setCourse(null);
            }
            return;
          }

          const [courseResponse, chaptersResponse, enrolledResponse] = await Promise.all([
            coursesAPI.getById(match._id),
            coursesAPI.getChapters(match._id),
            coursesAPI.getEnrolled().catch(() => ({ data: [] }))
          ]);

          courseData = courseResponse.data;
          chapters = chaptersResponse.data || [];
          const found = findChapterBySlug(chapters, routeChapterSlug);
          if (!found) {
            if (!cancelled) {
              setCourse(courseData);
              setAllChapters(chapters);
              setChapter(null);
            }
            return;
          }

          const chapterResponse = await chaptersAPI.getById(found._id);
          chapterData = chapterResponse.data;
          chapterId = found._id;

          const enrolledCourses = enrolledResponse.data || [];
          if (!cancelled) {
            setIsEnrolled(enrolledCourses.some(c => c._id === match._id || c._id === courseData._id));
          }
        } else if (isObjectId(id)) {
          const chapterResponse = await chaptersAPI.getById(id);
          chapterData = chapterResponse.data;
          chapterId = chapterData._id;

          if (chapterData.course) {
            const courseId = chapterData.course._id || chapterData.course;
            const [courseResponse, enrolledResponse, chaptersResponse] = await Promise.all([
              coursesAPI.getById(courseId),
              coursesAPI.getEnrolled().catch(() => ({ data: [] })),
              coursesAPI.getChapters(courseId)
            ]);
            courseData = courseResponse.data;
            chapters = chaptersResponse.data || [];
            const enrolledCourses = enrolledResponse.data || [];
            if (!cancelled) {
              setIsEnrolled(enrolledCourses.some(c => c._id === courseId || c._id === courseData._id));
            }
          }
        } else {
          if (!cancelled) setChapter(null);
          return;
        }

        if (cancelled || !chapterData) return;

        const structuredContent = await getChapterContent(
          chapterData.title,
          chapterData.order,
          courseData?.code
        );
        if (cancelled) return;

        let wasCompleted = false;
        let progressData = null;
        try {
          const progressResponse = await chaptersAPI.getProgress(chapterId);
          progressData = progressResponse.data;
          wasCompleted = Boolean(progressResponse.data?.isCompleted);
        } catch (progressError) {
          wasCompleted = false;
        }

        if (cancelled) return;

        setChapter(chapterData);
        setCourse(courseData);
        setAllChapters(chapters);
        setCurrentIndex(chapters.findIndex(ch => String(ch._id) === String(chapterId)));
        setChapterContent(structuredContent || null);
        setProgress(progressData);
        setCompleted(wasCompleted);
        setWasCompletedBefore(wasCompleted);
        setLoading(false);

        const pretty = courseData ? chapterPath(courseData, chapterData, chapters) : path;
        loadedPath.current = pretty;
        if (path !== pretty) {
          navigate(pretty, { replace: true });
        }
      } catch (error) {
        console.error('Failed to load chapter:', error);
        if (!cancelled) setChapter(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadChapterData();
    return () => {
      cancelled = true;
    };
  }, [id, routeCourseSlug, routeChapterSlug, location.pathname, navigate]);

  useEffect(() => {
    if (chapter && course) {
      setHasQuiz(chapterHasQuiz(course.code, chapter.order));
    }
  }, [chapter, course]);

  const handleMarkComplete = async () => {
    // Prevent multiple clicks - disable immediately
    if (isCompleting || completed) {
      return;
    }

    setIsCompleting(true);
    
    try {
      const response = await chaptersAPI.complete(chapter._id);
      setCompleted(true);
      
      // Get gems earned from response
      if (response.data?.data?.gemsEarned) {
        setGemsEarned(response.data.data.gemsEarned);
      }
      
      // Show congratulations modal - this is a first completion since API call succeeded
      // wasCompletedBefore tracks if it was completed before this attempt
      setShowCongratulations(true);
      
      // Reload progress to get updated stats and refresh user data
      try {
        const progressResponse = await chaptersAPI.getProgress(chapter._id);
        setProgress(progressResponse.data);
        // Reload user data to ensure gems are synced immediately
        await loadUser();
      } catch (e) {
        // Ignore
      }
    } catch (error) {
      console.error('Failed to mark chapter complete:', error);
      // Check if error is because chapter was already completed
      if (error.response?.status === 400 && error.response?.data?.message?.includes('already completed')) {
        setWasCompletedBefore(true);
        setCompleted(true);
        setGemsEarned(3); // They already earned 3 gems
        setShowCongratulations(true);
      } else {
        alert('Failed to mark chapter as complete. Please try again.');
      }
    } finally {
      setIsCompleting(false);
    }
  };

  const handleTakeQuiz = () => {
    if (chapter?._id && course) {
      navigate(quizPath(course, chapter, allChapters));
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" />
      </div>
    );
  }

  if (!chapter) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8">
        <div className="rounded-3xl border border-line bg-surface px-6 py-16">
          <BookOpen className="mx-auto h-8 w-8 text-slate" strokeWidth={1.75} />
          <h1 className="mt-4 text-lg font-medium tracking-tight text-ink">Chapter not found</h1>
          <p className="mt-2 text-[15px] leading-relaxed text-slate">This chapter is not on the course.</p>
          <Link to={course ? coursePath(course) : '/dashboard'} className="btn-primary mt-6">
            Back to {course ? 'course' : 'dashboard'}
          </Link>
        </div>
      </div>
    );
  }

  if (!isEnrolled && !loading && course) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8">
        <div className="rounded-3xl border border-line bg-surface px-6 py-16">
          <BookOpen className="mx-auto h-8 w-8 text-slate" strokeWidth={1.75} />
          <h1 className="mt-4 text-lg font-medium tracking-tight text-ink">Enroll to read this chapter</h1>
          <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-slate">
            This chapter is part of {course.code || course.title}. Enroll in the course to open it.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row">
            <Link to={coursePath(course)} className="btn-primary">
              Enroll in course
            </Link>
            <Link to="/courses" className="btn-secondary">
              Browse courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const prevChapter = currentIndex > 0 ? allChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex >= 0 && currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null;

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const chapterId = chapter?._id;
  const courseId = course?._id || chapter?.course?._id || chapter?.course;

  const rawUsername = user?.username || 'Student';
  const username = rawUsername.charAt(0).toUpperCase() + rawUsername.slice(1);

  return (
    <div className="mx-auto max-w-3xl px-5 py-10 md:px-8 md:py-16">
      {/* Congratulations Modal */}
      <CongratulationsModal
        isOpen={showCongratulations}
        onClose={() => setShowCongratulations(false)}
        username={username}
        chapterTitle={chapter?.title}
        chapterOrder={chapter?.order}
        isFirstCompletion={!wasCompletedBefore}
        hasQuiz={hasQuiz}
        quizId={chapterId}
        quizTo={course && chapter ? quizPath(course, chapter, allChapters) : null}
        courseId={courseId}
        backPath={course ? coursePath(course) : null}
        gemsEarned={gemsEarned}
      />

      <ChapterHeader 
        chapter={chapter}
        course={course}
        completed={completed}
        onScrollTop={handleScrollTop}
      />

      {/* Use SectionViewer if structured content exists, otherwise use regular content */}
      {(() => {
        if (chapterContent && chapterContent.sections && chapterContent.sections.length > 0) {
          return (
            <SectionViewer 
              sections={chapterContent.sections}
              onLastSection={setIsLastSection}
              onMarkComplete={handleMarkComplete}
              completed={completed}
              isCompleting={isCompleting}
              hasQuiz={hasQuiz}
              onTakeQuiz={handleTakeQuiz}
            />
          );
        }
        
        return (
          <article className="rounded-3xl border border-line bg-surface p-6 md:p-8">
            <div
              className="chapter-body text-lg leading-relaxed text-graphite"
              dangerouslySetInnerHTML={{ __html: (chapter.content || '').replace(/Royal Prince/g, username) }}
            />
          </article>
        );
      })()}

      {/* Chapter Navigation - Hide Mark Complete if using structured content (shown in SectionViewer instead) */}
      <ChapterNavigation
        prevChapter={prevChapter}
        nextChapter={nextChapter}
        course={course}
        chapters={allChapters}
        completed={completed}
        hasQuiz={hasQuiz && !(chapterContent && chapterContent.sections && chapterContent.sections.length > 0)}
        onMarkComplete={handleMarkComplete}
        onTakeQuiz={handleTakeQuiz}
        showMarkComplete={!chapterContent || !chapterContent.sections}
        isCompleting={isCompleting}
      />
    </div>
  );
};

export default ChapterDetail;

