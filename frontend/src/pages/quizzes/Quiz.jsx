import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { chaptersAPI, coursesAPI, quizzesAPI } from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';
import { ArrowLeft, CheckCircle, XCircle, Trophy, Clock, Target, Sparkles } from 'lucide-react';
import { getQuizContent } from './content';
import { QuizCongratulationsModal, QuizAnswersModal } from './components';

const Quiz = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const { user, loadUser } = useAuth();

  const [quiz, setQuiz] = useState(null);
  const [quizWithAnswers, setQuizWithAnswers] = useState(null); // Quiz with correct answers for review
  const [quizId, setQuizId] = useState(null); // Backend quiz ID
  const [chapter, setChapter] = useState(null);
  const [course, setCourse] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [showAnswersModal, setShowAnswersModal] = useState(false);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  // Get course color theme (default to teal)
  const getCourseTheme = () => {
    if (!course) return 'teal';
    const courseCode = course.code || '';
    // You can customize colors per course code here
    if (courseCode.includes('GNS')) return 'teal';
    if (courseCode.includes('GST')) return 'purple';
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
      selected: 'border-teal-500 bg-teal-50',
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
      selected: 'border-purple-500 bg-purple-50',
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

        // Try to load quiz from backend first
        let quizContent = null;
        let backendQuizId = null;
        
        try {
          if (chapterData.quiz) {
            // Try to get quiz by chapter ID
            const quizResponse = await quizzesAPI.getByChapter(chapterId);
            if (quizResponse.success && quizResponse.data) {
              backendQuizId = quizResponse.data._id;
              quizContent = {
                _id: quizResponse.data._id,
                title: quizResponse.data.title,
                description: quizResponse.data.description,
                questions: quizResponse.data.questions,
                passingScore: quizResponse.data.passingScore,
                timeLimit: quizResponse.data.timeLimit || 0,
                gemsReward: 0 // Not used anymore, gems based on correct answers
              };
            } else if (chapterData.quiz._id) {
              // Fallback: use quiz ID from chapter
              backendQuizId = chapterData.quiz._id;
            }
          }
        } catch (error) {
          console.log('Backend quiz not found, using local quiz:', error);
        }

        // Fallback to local quiz content if backend quiz not found
        let localQuizContent = null;
        if (!quizContent) {
          localQuizContent = getQuizContent(
            chapterData.title,
            chapterData.order,
            courseData?.code || 'GNS 311'
          );
          
          if (localQuizContent) {
            quizContent = localQuizContent;
          }
          
          // If chapter has a quiz ID, use it for submission
          if (chapterData.quiz && chapterData.quiz._id) {
            backendQuizId = chapterData.quiz._id;
          }
        }

        if (!quizContent) {
          console.error('Quiz not found for chapter:', chapterData.title);
          setLoading(false);
          return;
        }

        setQuiz(quizContent);
        // Store quiz with answers (from local content) for review modal
        // If we have local quiz content, use it (it has correct answers)
        // Otherwise, we'll need to fetch answers after submission
        if (localQuizContent) {
          setQuizWithAnswers(localQuizContent);
        } else {
          // For backend quiz, we'll need to fetch with answers after submission
          // For now, store the quiz content - we'll handle answers separately
          setQuizWithAnswers(quizContent);
        }
        setQuizId(backendQuizId);
        setAnswers(new Array(quizContent.questions.length).fill(null));
        setTimeLeft((quizContent.timeLimit || 0) * 60); // Convert minutes to seconds
      } catch (error) {
        console.error('Failed to load quiz:', error);
      } finally {
        setLoading(false);
      }
    };

    loadQuiz();
  }, [chapterId]);

  // Timer effect
  useEffect(() => {
    if (timeLeft === null || showCongratulations || !quiz) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, showCongratulations, quiz]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

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

    quiz.questions.forEach((question, index) => {
      const userAnswer = answers[index];
      if (userAnswer !== undefined && userAnswer === question.correctAnswer) {
        totalPoints += question.points;
        correctAnswers += 1;
      }
    });

    const percentage = totalPointsAvailable > 0 ? (totalPoints / totalPointsAvailable) * 100 : 0;
    const passed = percentage >= quiz.passingScore;

    // Calculate gems and XP (local fallback - backend handles this for first attempts)
    let gemsEarned = 0;
    let xpEarned = 0;

    // Note: Gems are only awarded on first attempt via backend
    // This is just for display if backend submission fails
    // XP based on percentage (10 XP per 10% score)
    xpEarned = Math.floor(percentage / 10);

    return {
      totalPoints,
      maxPoints: totalPointsAvailable,
      correctAnswers,
      totalQuestions: quiz.questions.length,
      percentage: Math.round(percentage * 100) / 100,
      passed,
      gemsEarned,
      xpEarned
    };
  };

  const handleSubmit = async () => {
    if (submitting || !quiz) return;

    setSubmitting(true);
    try {
      // If we have a backend quiz ID, submit to backend
      if (quizId) {
        try {
          const submitResponse = await quizzesAPI.submit(quizId, answers);
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
              xpEarned: backendResult.xpEarned || 0,
              isFirstAttempt: backendResult.isFirstAttempt !== false
            });
            setShowCongratulations(true);
            
            // Always reload user to get updated gems and XP
            await loadUser();
            return;
          }
        } catch (error) {
          console.error('Failed to submit to backend, trying chapter submission:', error);
          // Check if it's an authentication error (401) - don't proceed if user is logged out
          if (error.status === 401 || (error.message && (error.message.includes('401') || error.message.includes('Not authorized') || error.message.includes('token')))) {
            setSubmitting(false);
            return;
          }
          // Fall through to try chapter-based submission
        }
      }
      
      // If no backend quiz ID but we have chapter, try submitting by chapter ID
      if (chapterId && chapter) {
        try {
          const submitResponse = await quizzesAPI.submitByChapter(chapterId, answers, {
            title: quiz.title,
            description: quiz.description,
            questions: quiz.questions,
            passingScore: quiz.passingScore,
            timeLimit: quiz.timeLimit
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
              xpEarned: backendResult.xpEarned || 0,
              isFirstAttempt: backendResult.isFirstAttempt !== false
            });
            setShowCongratulations(true);
            
            // Always reload user to get updated gems and XP
            await loadUser();
            return;
          }
        } catch (error) {
          console.error('Failed to submit by chapter, using local calculation:', error);
          // Check if it's an authentication error (401) - don't proceed if user is logged out
          if (error.status === 401 || (error.message && (error.message.includes('401') || error.message.includes('Not authorized') || error.message.includes('token')))) {
            setSubmitting(false);
            return;
          }
          // Fall through to local calculation
        }
      }
      
      // Fallback to local calculation if no backend quiz or submission failed
      const scoreResult = calculateScore();
      
      if (!scoreResult) {
        console.error('Failed to calculate score');
        return;
      }
      
      // For local calculation, assume first attempt (since we can't check without backend)
      // Note: Gems won't actually be awarded without backend submission
      setResults({
        ...scoreResult,
        isFirstAttempt: true
      });
      setShowCongratulations(true);
      
      // Try to reload user anyway (in case backend submission succeeded but response was lost)
      await loadUser();
    } catch (error) {
      console.error('Failed to submit quiz:', error);
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
      <div className="flex items-center justify-center min-h-96 bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="min-h-screen bg-white py-8 px-4 flex items-center justify-center">
        <div className="text-center max-w-md">
          <Target className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quiz not found</h2>
          <p className="text-gray-600 mb-6">No quiz available for this chapter.</p>
          <button
            onClick={() => navigate(chapter ? `/chapters/${chapter._id}` : '/dashboard')}
            className={`${colors.button} text-white px-6 py-2 rounded-lg font-semibold transition-colors`}
          >
            {chapter ? 'Back to Chapter' : 'Back to Dashboard'}
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
              navigate(chapter ? `/chapters/${chapter._id}` : '/dashboard');
            }
          }}
          username={user?.username || 'Student'}
          quizTitle={quiz?.title}
          score={results?.percentage}
          correctAnswers={results?.correctAnswers}
          totalQuestions={results?.totalQuestions}
          gemsEarned={results?.gemsEarned}
          xpEarned={results?.xpEarned}
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
              navigate(chapter ? `/chapters/${chapter._id}` : '/dashboard');
            }
          }}
          questions={quizWithAnswers?.questions || quiz?.questions || []}
          userAnswers={answers}
          quizTitle={quiz?.title || quizWithAnswers?.title}
        />
      </>
    );
  }

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <button
              onClick={() => navigate(chapter ? `/chapters/${chapter._id}` : '/dashboard')}
              className={`flex items-center space-x-2 ${colors.text} hover:${colors.accent} transition-colors font-medium`}
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </button>

            <div className="text-center flex-1">
              <h1 className={`text-2xl font-bold ${colors.text} mb-1`}>{quiz.title}</h1>
              <p className="text-gray-600 text-sm">{quiz.description}</p>
            </div>

            <div className="flex items-center space-x-4">
              {timeLeft !== null && quiz.timeLimit > 0 && (
                <div className={`flex items-center space-x-2 ${colors.bg} px-4 py-2 rounded-lg border ${colors.border}`}>
                  <Clock className={`h-5 w-5 ${colors.icon}`} />
                  <span className={`font-mono font-semibold ${colors.text}`}>{formatTime(timeLeft)}</span>
                </div>
              )}
              <div className={`flex items-center space-x-2 ${colors.bg} px-4 py-2 rounded-lg border ${colors.border}`}>
                <Target className={`h-5 w-5 ${colors.icon}`} />
                <span className={`font-semibold ${colors.text}`}>{currentQuestion + 1}/{quiz.questions.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Progress</span>
            <span className={`text-sm font-bold ${colors.text}`}>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${colors.progress} rounded-full transition-all duration-300`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg p-8 mb-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className={`${colors.button} text-white px-4 py-2 rounded-lg font-bold text-lg`}>
              Q{currentQuestion + 1}
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </h2>
          </div>

          <div className="mb-8">
            <p className="text-gray-900 text-lg leading-relaxed font-medium">{question.question}</p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = answers[currentQuestion] === index;
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(currentQuestion, index)}
                  className={`w-full text-left p-5 rounded-xl border-2 transition-all quiz-option ${
                    isSelected
                      ? `${colors.selected} ${colors.border} shadow-md`
                      : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                      isSelected 
                        ? `${colors.button} text-white` 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className={`flex-1 font-medium ${isSelected ? colors.text : 'text-gray-700'}`}>
                      {option}
                    </span>
                    {isSelected && (
                      <Sparkles className={`h-5 w-5 ${colors.icon}`} />
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
