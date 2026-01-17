import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { chaptersAPI, coursesAPI, quizzesAPI } from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';
import { ArrowLeft, CheckCircle, XCircle, Trophy, Target, Sparkles } from 'lucide-react';
import { getQuizContent } from './content';
import { QuizCongratulationsModal, QuizAnswersModal } from './components';

const Quiz = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
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

  // Get course color theme (default to teal)
  const getCourseTheme = () => {
    if (!course) return 'teal';
    const courseCode = course.code || '';
    // You can customize colors per course code here
    if (courseCode.includes('GNS')) return 'teal';
    if (courseCode.includes('GST')) return 'teal';
    return 'teal'; // Default
  };

  const theme = getCourseTheme();
  const themeColors = {
    teal: {
      primary: 'teal',
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      text: 'text-teal-700',
      button: 'bg-teal-500 hover:bg-teal-600',
      buttonSecondary: 'bg-teal-100 hover:bg-teal-200 text-teal-700',
      accent: 'text-teal-600',
      progress: 'bg-teal-500',
      selected: 'border-teal-500 bg-teal-50 dark:border-teal-400 dark:bg-teal-900/30',
      icon: 'text-teal-500'
    },
    purple: {
      primary: 'purple',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-700',
      button: 'bg-purple-500 hover:bg-purple-600',
      buttonSecondary: 'bg-purple-100 hover:bg-purple-200 text-purple-700',
      accent: 'text-purple-600',
      progress: 'bg-purple-500',
      selected: 'border-purple-500 bg-purple-50 dark:border-purple-400 dark:bg-purple-900/30',
      icon: 'text-purple-500'
    }
  };

  const colors = themeColors[theme] || themeColors.teal;

  useEffect(() => {
    const loadQuiz = async () => {
      try {
        // Load chapter details first
        const chapterResponse = await chaptersAPI.getById(chapterId);
        const chapterData = chapterResponse.data;
        setChapter(chapterData);

        // Load course details
        let courseData = null;
        if (chapterData.course) {
          const courseResponse = await coursesAPI.getById(chapterData.course._id || chapterData.course);
          courseData = courseResponse.data;
          setCourse(courseData);
        }

        // Load local quiz content (required for all quizzes)
        const quizContent = await getQuizContent(
          chapterData.title,
          chapterData.order,
          courseData?.code || 'GNS 311'
        );

        if (!quizContent) {
          console.error('Quiz content not found for chapter:', chapterData.title);
          setLoading(false);
          return;
        }

        setQuiz(quizContent);
        // Store quiz with answers (from local content) for review modal
        // All quizzes now come from local content with correct answers included
        setQuizWithAnswers(quizContent);
        setAnswers(new Array(quizContent.questions.length).fill(null));
      } catch (error) {
        console.error('Failed to load quiz:', error);
      } finally {
        setLoading(false);
      }
    };

    loadQuiz();
  }, [chapterId]);

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
    if (submitting || !quiz || !chapterId || !chapter) return;

    setSubmitting(true);
    try {
      // Always use chapter-based submission for consistency
      const submitResponse = await quizzesAPI.submitByChapter(chapterId, answers, {
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
      <div className="flex items-center justify-center min-h-96 bg-white dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 dark:border-teal-400"></div>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 py-8 px-4 flex items-center justify-center">
        <div className="text-center max-w-md">
          <Target className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quiz not found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">No quiz available for this chapter.</p>
          <button
            onClick={() => {
              if (course?._id) {
                navigate(`/quiz-hub/courses/${course._id}`);
              } else {
                navigate('/quiz-hub');
              }
            }}
            className={`${colors.button} dark:${colors.button} text-white px-6 py-2 rounded-lg font-semibold transition-colors`}
          >
            Back to Quiz Hub
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
            if (!showAnswersModal) {
              if (course?._id) {
                navigate(`/quiz-hub/courses/${course._id}`);
              } else {
                navigate('/quiz-hub');
              }
            }
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
              if (course?._id) {
                navigate(`/quiz-hub/courses/${course._id}`);
              } else {
                navigate('/quiz-hub');
              }
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Mobile Back Button - Top Position */}
        <div className="block sm:hidden mb-4">
          <button
            onClick={() => {
              if (course?._id) {
                navigate(`/quiz-hub/courses/${course._id}`);
              } else {
                navigate('/quiz-hub');
              }
            }}
            className={`flex items-center space-x-2 ${colors.text} dark:${colors.text} hover:${colors.accent} dark:hover:${colors.accent} transition-colors font-medium px-4 py-2 rounded-lg border ${colors.border} dark:${colors.border} ${colors.bg} dark:${colors.bg}`}
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </button>
        </div>

        {/* Header Card */}
        <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Desktop Back Button - Hidden on mobile */}
            <button
              onClick={() => {
                if (course?._id) {
                  navigate(`/quiz-hub/courses/${course._id}`);
                } else {
                  navigate('/quiz-hub');
                }
              }}
              className={`hidden sm:flex items-center space-x-2 ${colors.text} hover:${colors.accent} transition-colors font-medium`}
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </button>

            <div className="text-left flex-1">
              <h1 className={`text-2xl font-bold ${colors.text} dark:${colors.text} mb-1`}>{quiz.title}</h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{quiz.description}</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className={`flex items-center space-x-2 ${colors.bg} dark:${colors.bg} px-4 py-2 rounded-lg border ${colors.border} dark:${colors.border}`}>
                <Target className={`h-5 w-5 ${colors.icon} dark:${colors.icon}`} />
                <span className={`font-semibold ${colors.text} dark:${colors.text}`}>{currentQuestion + 1}/{quiz.questions.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Progress</span>
            <span className={`text-sm font-bold ${colors.text} dark:${colors.text}`}>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full ${colors.progress} dark:${colors.progress} rounded-full transition-all duration-300`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-8 mb-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className={`${colors.button} dark:${colors.button} text-white px-4 py-2 rounded-lg font-bold text-lg`}>
              Q{currentQuestion + 1}
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </h2>
          </div>

          <div className="mb-8">
            <p className="text-gray-900 dark:text-white text-lg leading-relaxed font-medium">{displayQuestion}</p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {displayOptions.map((option, index) => {
              const isSelected = answers[currentQuestion] === index;
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(currentQuestion, index)}
                  className={`w-full text-left p-5 rounded-xl border-2 transition-all quiz-option ${
                    isSelected
                      ? `${colors.selected} dark:${colors.selected} ${colors.border} dark:${colors.border} shadow-md`
                      : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                      isSelected
                        ? `${colors.button} dark:${colors.button} text-white`
                        : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className={`flex-1 font-medium ${isSelected ? colors.text : 'text-gray-700 dark:text-gray-300'}`}>
                      {option}
                    </span>
                    {isSelected && (
                      <Sparkles className={`h-5 w-5 ${colors.icon} dark:${colors.icon}`} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 ${colors.buttonSecondary} rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors border-2 ${colors.border}`}
          >
            Previous
          </button>

          {currentQuestion === quiz.questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={submitting || answers.includes(null)}
              className={`px-8 py-3 ${colors.button} text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md hover:shadow-lg`}
            >
              {submitting ? 'Submitting...' : 'Submit Quiz ✨'}
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={answers[currentQuestion] === null}
              className={`px-8 py-3 ${colors.button} text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md hover:shadow-lg`}
            >
              Next Question →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
