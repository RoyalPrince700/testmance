import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { chaptersAPI, coursesAPI } from '../../utils/api';
import { BookOpen } from 'lucide-react';
import { ChapterHeader, SectionViewer, ChapterNavigation, CongratulationsModal } from './components';
import { getChapterContent } from './content';
import { getQuizContent } from '../quizzes/content';
import { useAuth } from '../../contexts/AuthContext';

const ChapterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  useEffect(() => {
    const loadChapterData = async () => {
      try {
        // Load chapter details
        const chapterResponse = await chaptersAPI.getById(id);
        const chapterData = chapterResponse.data;
        setChapter(chapterData);

        // Load course details first (needed for content lookup)
        let courseData = null;
        if (chapterData.course) {
          const courseId = chapterData.course._id || chapterData.course;
          const [courseResponse, enrolledResponse] = await Promise.all([
            coursesAPI.getById(courseId),
            coursesAPI.getEnrolled().catch(() => ({ data: [] }))
          ]);
          
          courseData = courseResponse.data;
          setCourse(courseData);

          // Check if user is enrolled in this course
          const enrolledCourses = enrolledResponse.data || [];
          const enrolled = enrolledCourses.some(c => c._id === courseId || c._id === courseData._id);
          setIsEnrolled(enrolled);

          // Load all chapters for navigation
          const chaptersResponse = await coursesAPI.getChapters(courseId);
          const chapters = chaptersResponse.data;
          setAllChapters(chapters);

          // Find current chapter index
          const index = chapters.findIndex(ch => ch._id === id);
          setCurrentIndex(index);
        }

        // Load structured content if available (after course is loaded)

        // Load structured content
        const structuredContent = await getChapterContent(
          chapterData.title,
          chapterData.order,
          courseData?.code
        );
        if (structuredContent) {
          setChapterContent(structuredContent);
        }

        // Load progress if authenticated
        try {
          const progressResponse = await chaptersAPI.getProgress(id);
          setProgress(progressResponse.data);
          const wasCompleted = progressResponse.data.isCompleted;
          setCompleted(wasCompleted);
          setWasCompletedBefore(wasCompleted); // Track if it was already completed
        } catch (progressError) {
          // User might not be authenticated or chapter not completed
          setWasCompletedBefore(false);
        }
      } catch (error) {
        console.error('Failed to load chapter:', error);
      } finally {
        setLoading(false);
      }
    };

    loadChapterData();
  }, [id]);

  useEffect(() => {
    const checkQuiz = async () => {
      if (chapter && course) {
        const quiz = await getQuizContent(chapter.title, chapter.order, course.code);
        setHasQuiz(quiz !== null);
      }
    };
    checkQuiz();
  }, [chapter, course]);

  const handleMarkComplete = async () => {
    // Prevent multiple clicks - disable immediately
    if (isCompleting || completed) {
      return;
    }

    setIsCompleting(true);
    
    try {
      const response = await chaptersAPI.complete(id);
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
        const progressResponse = await chaptersAPI.getProgress(id);
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
    if (chapter?._id) {
      navigate(`/quizzes/${chapter._id}`);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  if (!chapter) {
    return (
      <div className="text-center py-12">
        <BookOpen className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Chapter not found</h3>
        <p className="text-gray-600 dark:text-gray-400">The chapter you're looking for doesn't exist.</p>
        <Link
          to={course ? `/courses/${course._id}` : "/dashboard"}
          className="inline-block mt-4 px-6 py-2 bg-teal-500 hover:bg-teal-600 rounded-lg text-white transition-colors"
        >
          Back to {course ? 'Course' : 'Dashboard'}
        </Link>
      </div>
    );
  }

  if (!isEnrolled && !loading && course) {
    return (
      <div className="text-center py-12">
        <BookOpen className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Course Not Enrolled</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">You need to enroll in this course to access its chapters.</p>
        <div className="flex gap-4 justify-center">
          <Link
            to={`/courses/${course._id}`}
            className="inline-block px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors"
          >
            Enroll in Course
          </Link>
          <Link
            to="/courses"
            className="inline-block px-6 py-2 bg-gray-500 hover:bg-gray-600 rounded-lg text-white transition-colors"
          >
            Browse Courses
          </Link>
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
    <div className="max-w-5xl mx-auto">
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
        courseId={courseId}
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
            />
          );
        }
        
        return (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-6">
            <div className="prose prose-lg max-w-none">
              <div className="mb-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 text-sm">
                <strong>Debug Info:</strong>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>Chapter title: "{chapter.title}"</li>
                  <li>Has chapterContent: {chapterContent ? 'Yes' : 'No'}</li>
                  <li>Sections count: {chapterContent?.sections?.length || 0}</li>
                </ul>
              </div>
              <div
                className="text-gray-800 dark:text-gray-200 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: chapter.content.replace(/Royal Prince/g, username) }}
              />
            </div>
          </div>
        );
      })()}

      {/* Chapter Navigation - Hide Mark Complete if using structured content (shown in SectionViewer instead) */}
      <ChapterNavigation
        prevChapter={prevChapter}
        nextChapter={nextChapter}
        completed={completed}
        hasQuiz={hasQuiz}
        onMarkComplete={handleMarkComplete}
        onTakeQuiz={handleTakeQuiz}
        showMarkComplete={!chapterContent || !chapterContent.sections}
        isCompleting={isCompleting}
      />
    </div>
  );
};

export default ChapterDetail;

