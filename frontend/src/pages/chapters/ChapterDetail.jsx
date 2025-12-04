import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { chaptersAPI, coursesAPI } from '../../utils/api';
import { BookOpen } from 'lucide-react';
import { ChapterHeader, SectionViewer, ChapterNavigation } from './components';
import { getChapterContent } from './content';

const ChapterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [chapter, setChapter] = useState(null);
  const [course, setCourse] = useState(null);
  const [allChapters, setAllChapters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [progress, setProgress] = useState(null);
  const [chapterContent, setChapterContent] = useState(null);
  const [isLastSection, setIsLastSection] = useState(false);

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
          const courseResponse = await coursesAPI.getById(chapterData.course._id || chapterData.course);
          courseData = courseResponse.data;
          setCourse(courseData);

          // Load all chapters for navigation
          const chaptersResponse = await coursesAPI.getChapters(chapterData.course._id || chapterData.course);
          const chapters = chaptersResponse.data;
          setAllChapters(chapters);

          // Find current chapter index
          const index = chapters.findIndex(ch => ch._id === id);
          setCurrentIndex(index);
        }

        // Load structured content if available (after course is loaded)
        console.log('Chapter data:', {
          title: chapterData.title,
          order: chapterData.order,
          courseCode: courseData?.code
        });
        
        // Load structured content
        const structuredContent = getChapterContent(
          chapterData.title,
          chapterData.order,
          courseData?.code
        );
        console.log('Structured content found:', !!structuredContent);
        if (structuredContent) {
          console.log('Sections count:', structuredContent.sections?.length);
          setChapterContent(structuredContent);
        } else {
          console.log('No structured content found - will use fallback HTML content');
        }

        // Load progress if authenticated
        try {
          const progressResponse = await chaptersAPI.getProgress(id);
          setProgress(progressResponse.data);
          setCompleted(progressResponse.data.isCompleted);
        } catch (progressError) {
          // User might not be authenticated or chapter not completed
          console.log('Progress not available:', progressError);
        }
      } catch (error) {
        console.error('Failed to load chapter:', error);
      } finally {
        setLoading(false);
      }
    };

    loadChapterData();
  }, [id]);

  const handleMarkComplete = async () => {
    try {
      await chaptersAPI.complete(id);
      setCompleted(true);
      // Reload progress to get updated stats
      try {
        const progressResponse = await chaptersAPI.getProgress(id);
        setProgress(progressResponse.data);
      } catch (e) {
        // Ignore
      }
    } catch (error) {
      console.error('Failed to mark chapter complete:', error);
      alert('Failed to mark chapter as complete. Please try again.');
    }
  };

  const handleTakeQuiz = () => {
    if (chapter?.quiz) {
      navigate(`/quizzes/${chapter.quiz._id || chapter.quiz}`);
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
        <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Chapter not found</h3>
        <p className="text-gray-600">The chapter you're looking for doesn't exist.</p>
        <Link
          to={course ? `/courses/${course._id}` : "/dashboard"}
          className="inline-block mt-4 px-6 py-2 bg-teal-500 hover:bg-teal-600 rounded-lg text-white transition-colors"
        >
          Back to {course ? 'Course' : 'Dashboard'}
        </Link>
      </div>
    );
  }

  const prevChapter = currentIndex > 0 ? allChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex >= 0 && currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null;
  const hasQuiz = chapter.quiz && (chapter.quiz._id || chapter.quiz);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-5xl mx-auto">
      <ChapterHeader 
        chapter={chapter}
        course={course}
        completed={completed}
        onScrollTop={handleScrollTop}
      />

      {/* Use SectionViewer if structured content exists, otherwise use regular content */}
      {(() => {
        console.log('Rendering check:', {
          hasChapterContent: !!chapterContent,
          hasSections: !!chapterContent?.sections,
          sectionsLength: chapterContent?.sections?.length
        });
        
        if (chapterContent && chapterContent.sections && chapterContent.sections.length > 0) {
          return (
            <SectionViewer 
              sections={chapterContent.sections}
              onLastSection={setIsLastSection}
              onMarkComplete={handleMarkComplete}
              completed={completed}
            />
          );
        }
        
        return (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
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
                className="text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: chapter.content }}
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
      />
    </div>
  );
};

export default ChapterDetail;

