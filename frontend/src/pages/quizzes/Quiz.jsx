import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { chaptersAPI, coursesAPI, getPublishedCourses, quizzesAPI } from '../../utils/api';
import { courseSlug, findChapterBySlug, isObjectId, quizCoursePath, quizPath } from '../../utils/slugs';
import { useAuth } from '../../contexts/AuthContext';
import { ArrowLeft, ArrowRight, Target } from 'lucide-react';
import { getQuizContent } from './content';
import { QuizCongratulationsModal, QuizAnswersModal } from './components';

const Quiz = () => {
  const { chapterId, courseSlug: routeCourseSlug, chapterSlug: routeChapterSlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const loadedPath = useRef('');
  const { user, loadUser } = useAuth();

  const [quiz, setQuiz] = useState(null);
  const [quizWithAnswers, setQuizWithAnswers] = useState(null); // Quiz with correct answers for review
  const [chapter, setChapter] = useState(null);
  const [course, setCourse] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [showAnswersModal, setShowAnswersModal] = useState(false);
  const [results, setResults] = useState(null);
  const [correctness, setCorrectness] = useState([]); // Array indicating which answers are correct
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const goToQuizList = () => {
    navigate(course ? quizCoursePath(course) : '/quiz-hub');
  };

  useEffect(() => {
    const path = decodeURI(location.pathname);
    if (loadedPath.current === path) return;

    let cancelled = false;

    const loadQuiz = async () => {
      try {
        setLoading(true);
        let chapterData = null;
        let courseData = null;
        let chapters = [];
        let quizContentPromise = null;

        if (routeCourseSlug && routeChapterSlug && !isObjectId(routeCourseSlug)) {
          const list = await getPublishedCourses();
          const match = list.find((item) => courseSlug(item) === routeCourseSlug);
          if (!match) {
            if (!cancelled) setQuiz(null);
            return;
          }

          courseData = match;
          const chaptersResponse = await coursesAPI.getChapters(match._id);
          chapters = chaptersResponse.data || [];
          chapterData = findChapterBySlug(chapters, routeChapterSlug);
          if (!chapterData) {
            if (!cancelled) {
              setCourse(courseData);
              setQuiz(null);
            }
            return;
          }
        } else if (isObjectId(chapterId)) {
          const chapterResponse = await chaptersAPI.getById(chapterId);
          chapterData = chapterResponse.data;
          const courseRef = chapterData.course;
          const courseId = courseRef?._id || courseRef;
          const courseCode = typeof courseRef === 'object' ? courseRef.code : null;
          quizContentPromise = getQuizContent(chapterData.title, chapterData.order, courseCode || 'GNS 311');
          if (courseId) {
            const chaptersResponse = await coursesAPI.getChapters(courseId);
            chapters = chaptersResponse.data || [];
            courseData = typeof courseRef === 'object' ? courseRef : (await coursesAPI.getById(courseId)).data;
          }
        } else {
          if (!cancelled) setQuiz(null);
          return;
        }

        const quizContent = quizContentPromise
          ? await quizContentPromise
          : await getQuizContent(chapterData.title, chapterData.order, courseData?.code || 'GNS 311');

        if (cancelled) return;

        if (!quizContent) {
          console.error('Quiz content not found for chapter:', chapterData.title);
          setChapter(chapterData);
          setCourse(courseData);
          setQuiz(null);
          setLoading(false);
          return;
        }

        setChapter(chapterData);
        setCourse(courseData);
        setQuiz(quizContent);
        setQuizWithAnswers(quizContent);
        setAnswers(new Array(quizContent.questions.length).fill(null));
        setLoading(false);

        const pretty = courseData ? quizPath(courseData, chapterData, chapters) : path;
        loadedPath.current = pretty;
        if (path !== pretty) navigate(pretty, { replace: true });
      } catch (error) {
        console.error('Failed to load quiz:', error);
        if (!cancelled) setQuiz(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadQuiz();
    return () => {
      cancelled = true;
    };
  }, [chapterId, routeCourseSlug, routeChapterSlug, location.pathname, navigate]);

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    if (!quiz) return null;

    let totalPoints = 0;
    let correctAnswers = 0;
    const totalPointsAvailable = quiz.questions.reduce((sum, q) => sum + q.points, 0);
    const correctnessArray = [];

    quiz.questions.forEach((question, index) => {
      const userAnswer = answers[index];
      const isCorrect = userAnswer !== undefined && userAnswer === question.correctAnswer;
      correctnessArray[index] = isCorrect;

      if (isCorrect) {
        totalPoints += question.points;
        correctAnswers += 1;
      }
    });

    const percentage = totalPointsAvailable > 0 ? (totalPoints / totalPointsAvailable) * 100 : 0;
    const passed = percentage >= quiz.passingScore;

    // Calculate gems (local fallback - backend handles this for first attempts)
    let gemsEarned = 0;

    // Note: Gems are only awarded on first attempt via backend
    // This is just for display if backend submission fails

    return {
      totalPoints,
      maxPoints: totalPointsAvailable,
      correctAnswers,
      totalQuestions: quiz.questions.length,
      percentage: Math.round(percentage * 100) / 100,
      passed,
      gemsEarned,
      correctness: correctnessArray
    };
  };

  const handleSubmit = async () => {
    if (submitting || !quiz || !chapter?._id) return;

    setSubmitting(true);
    try {
      // Always use chapter-based submission for consistency
      const submitResponse = await quizzesAPI.submitByChapter(chapter._id, answers, {
        title: quiz.title,
        description: quiz.description,
        questions: quiz.questions,
        passingScore: quiz.passingScore,
        timeLimit: 0
      });

      if (submitResponse.success && submitResponse.data) {
        const backendResult = submitResponse.data;
        setResults({
          totalPoints: backendResult.totalPoints,
          maxPoints: backendResult.maxPoints,
          correctAnswers: backendResult.correctAnswers,
          totalQuestions: backendResult.totalQuestions,
          percentage: backendResult.percentage,
          passed: backendResult.passed,
          gemsEarned: backendResult.gemsEarned || 0,
          isFirstAttempt: backendResult.isFirstAttempt !== false
        });

        // If backend returned questions with answers, use them for review
        if (backendResult.questions) {
          setQuizWithAnswers({
            ...quiz,
            questions: backendResult.questions
          });
        }

        setShowCongratulations(true);

        // Always reload user to get updated gems
        await loadUser();
        return;
      }
    } catch (error) {
      console.error('Failed to submit quiz:', error);
      // Check if it's an authentication error (401) - don't proceed if user is logged out
      if (error.status === 401 || (error.message && (error.message.includes('401') || error.message.includes('Not authorized') || error.message.includes('token')))) {
        setSubmitting(false);
        return;
      }

      // Show error for other failures
      console.error('Failed to submit quiz:', error);
      alert('Failed to submit quiz. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleNext = () => {
    if (quiz && currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" />
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8">
        <div className="rounded-3xl border border-line bg-surface px-6 py-16">
          <Target className="mx-auto h-8 w-8 text-slate" strokeWidth={1.75} />
          <h1 className="mt-4 text-lg font-medium tracking-tight text-ink">Quiz not found</h1>
          <p className="mt-2 text-[15px] leading-relaxed text-slate">This chapter does not have a quiz yet.</p>
          <button type="button" onClick={goToQuizList} className="btn-primary mt-6">
            Back to quizzes
          </button>
        </div>
      </div>
    );
  }

  // Show congratulations modal and answers modal
  // Show modals if congratulations is showing OR answers modal is showing (to prevent showing quiz questions)
  if ((showCongratulations && results) || showAnswersModal) {
    return (
      <>
        <QuizCongratulationsModal
          isOpen={showCongratulations && !showAnswersModal}
          onClose={() => {
            setShowCongratulations(false);
            // If answers modal is not open, navigate away
            if (!showAnswersModal) goToQuizList();
          }}
          username={user?.username || 'Student'}
          quizTitle={quiz?.title}
          score={results?.percentage}
          correctAnswers={results?.correctAnswers}
          totalQuestions={results?.totalQuestions}
          gemsEarned={results?.gemsEarned}
          passed={results?.passed}
          isFirstAttempt={results?.isFirstAttempt !== false}
          chapterId={chapter?._id}
          courseId={course?._id || chapter?.course?._id || chapter?.course}
          backPath={course ? quizCoursePath(course) : '/quiz-hub'}
          onViewAnswers={() => {
            setShowCongratulations(false);
            setShowAnswersModal(true);
          }}
        />
        <QuizAnswersModal
          isOpen={showAnswersModal}
          onClose={() => {
            setShowAnswersModal(false);
            // After closing answers modal, go back to congratulations or navigate away
            if (results) {
              setShowCongratulations(true);
            } else {
              goToQuizList();
            }
          }}
          questions={quizWithAnswers?.questions || quiz?.questions || []}
          userAnswers={answers}
          quizTitle={quiz?.title || quizWithAnswers?.title}
          correctness={correctness}
        />
      </>
    );
  }

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  // Capitalize first letter of username
  const rawUsername = user?.username || 'Student';
  const username = rawUsername.charAt(0).toUpperCase() + rawUsername.slice(1);

  // Replace "Royal Prince" with user's username if available
  const displayQuestion = question.question.replace(/Royal Prince/g, username);
  const displayOptions = question.options.map(opt => opt.replace(/Royal Prince/g, username));

  const answeredCount = answers.filter((answer) => answer !== null).length;

  return (
    <div className="bg-canvas pb-16 text-ink">
      <div className="border-b border-line bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-4 md:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <button type="button" onClick={goToQuizList} className="rounded-full p-2 text-graphite hover:text-ink" aria-label="Back to quizzes">
                <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
              </button>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">{quiz.title}</p>
                <p className="truncate text-sm text-slate">{course?.code || 'Quiz'} · {quiz.questions.length} questions</p>
              </div>
            </div>
            <p className="shrink-0 text-sm font-medium text-ink">{currentQuestion + 1}/{quiz.questions.length}</p>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-canvas">
            <div className="h-full rounded-full bg-accent-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-8 md:px-8">
        <div className="rounded-3xl border border-line bg-surface p-5 sm:p-8">
          <h2 className="text-lg font-medium tracking-tight text-ink">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-graphite">{displayQuestion}</p>
          <div className="mt-6 space-y-3">
            {displayOptions.map((option, index) => {
              const isSelected = answers[currentQuestion] === index;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleAnswerSelect(currentQuestion, index)}
                  className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-left text-[15px] leading-relaxed transition-colors ${
                    isSelected ? 'border-accent bg-accent-soft text-ink' : 'border-line text-graphite hover:bg-canvas'
                  }`}
                >
                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${isSelected ? 'border-accent-fill bg-accent-fill' : 'border-line'}`}>
                    {isSelected && <span className="h-2 w-2 rounded-full bg-on-accent" />}
                  </span>
                  {option}
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex min-w-0 flex-wrap items-center gap-3 border-t border-line pt-6">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="btn-secondary shrink-0 disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
              Previous
            </button>
            <p className="hidden text-sm text-slate sm:block">{answeredCount} of {quiz.questions.length} answered</p>
            {currentQuestion === quiz.questions.length - 1 ? (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting || answers.includes(null)}
                className="btn-primary ml-auto shrink-0 disabled:opacity-50"
              >
                {submitting ? 'Submitting...' : 'Submit quiz'}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                disabled={answers[currentQuestion] === null}
                className="btn-primary ml-auto shrink-0 disabled:opacity-50"
              >
                Next
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
