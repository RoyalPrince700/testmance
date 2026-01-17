import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, useBlocker } from 'react-router-dom';
import { examAPI, coursesAPI, caAPI, usersAPI } from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';
import { ArrowLeft, CheckCircle, XCircle, Trophy, Target, Sparkles, Clock, AlertTriangle, BookOpen, Play, CheckCircle2, Lock, X, LogOut } from 'lucide-react';
import GemDeductionModal from '../../components/GemDeductionModal';

const ConfirmLeaveModal = ({ isOpen, onConfirm, onCancel, type = 'Exam' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-8 border-4 border-red-500 animate-in fade-in zoom-in duration-300">
        <div className="text-center">
          <div className="bg-red-100 dark:bg-red-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Abandon {type}? 🛑</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            If you leave now, your {type.toLowerCase()} will end immediately and your current progress will be recorded as your final score. 
            <br/><br/>
            <span className="font-bold text-red-600 text-lg">This action cannot be undone!</span>
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={onConfirm}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <LogOut className="h-5 w-5" />
              End {type} & Leave
            </button>
            <button
              onClick={onCancel}
              className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-bold py-3 px-6 rounded-xl transition-all"
            >
              Stay and Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProceedModal = ({ isOpen, onConfirm, onCancel, type = 'Exam' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-8 border-4 border-red-500 animate-in fade-in zoom-in duration-300">
        <div className="text-center">
          <div className="bg-red-50 dark:bg-red-900/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Play className="h-10 w-10 text-red-600 dark:text-red-400 fill-current" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">Ready to Start? 🚀</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            You are about to start the <span className="font-bold text-red-600">{type}</span>. Once you begin, the timer will start and you cannot pause.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={onConfirm}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="h-5 w-5" />
              Proceed to {type}
            </button>
            <button
              onClick={onCancel}
              className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-bold py-3 px-6 rounded-xl transition-all"
            >
              Wait, Not Yet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExamLockedModal = ({ isOpen, onClose, courseTitle }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full p-8 border-4 border-red-500 transform transition-all animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-full p-2 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center">
          <div className="bg-red-100 dark:bg-red-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="h-10 w-10 text-red-600 dark:text-red-400" />
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
            Exam Already Completed! 🎖️
          </h2>

          <div className="space-y-4 mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              You've already finished the Final Exam for
              <span className="font-bold block mt-1 text-gray-800 dark:text-gray-200">"{courseTitle}"</span>.
            </p>
            <p className="text-md text-gray-600 dark:text-gray-400">
              The Final Exam is a <span className="font-bold text-red-600 dark:text-red-400">single-attempt assessment</span>. Great job on completing it!
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 mb-8 border border-green-200 dark:border-green-800">
            <p className="text-sm text-green-800 font-medium">
              You can check your detailed breakdown and final grade in the results section. 🥂
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate('/results')}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Trophy className="h-5 w-5" />
              View Final Grade
            </button>
            <button
              onClick={onClose}
              className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-bold py-3 px-6 rounded-xl transition-all"
            >
              Back to Selection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CARequiredModal = ({ isOpen, onClose, username, courseTitle, courseId }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full p-8 border-4 border-red-500 transform transition-all">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-full p-2 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center">
          <div className="bg-red-100 dark:bg-red-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-400" />
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
            Hold up, {username}! 🛑
          </h2>

          <div className="space-y-4 mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We love the enthusiasm, but you're trying to jump straight to the finish line! 🏁
            </p>
            <p className="text-md text-gray-600 dark:text-gray-400">
              You need to complete the <span className="font-bold text-red-600 dark:text-red-400">Continuous Assessment (CA)</span> for
              <span className="font-bold block mt-1 text-gray-800 dark:text-gray-200">"{courseTitle}"</span>
              before you can unlock this final exam.
            </p>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 mb-8 border border-yellow-200 dark:border-yellow-800">
            <p className="text-sm text-yellow-800 font-medium">
              Pro tip: The CA helps you prepare for the big one! It's worth 30% of your total grade. 😉
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate(`/ca/${courseId}`)}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Play className="h-5 w-5 fill-current" />
              Take CA Now
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-bold py-4 px-6 rounded-xl transition-all"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExamPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { user, loadUser } = useAuth();

  // Course selection state
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(false);

  const [exam, setExam] = useState(null);
  const [course, setCourse] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false); // Don't show loading initially
  const [submitting, setSubmitting] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [timeSpent, setTimeSpent] = useState(0);
  const [error, setError] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  
  // CA Requirement state
  const [showCAModal, setShowCAModal] = useState(false);
  const [pendingCourse, setPendingCourse] = useState(null);
  const [checkingCA, setCheckingCA] = useState(false);

  // Gem Modal state
  const [showGemModal, setShowGemModal] = useState(false);
  const [isDeductingGems, setIsDeductingGems] = useState(false);

  // Locked Modal state
  const [showLockedModal, setShowLockedModal] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState('');

  // Start confirmation state
  const [showProceedModal, setShowProceedModal] = useState(false);

  // Exam time limit (40 minutes = 2400 seconds)
  const EXAM_TIME_LIMIT = 2400;

  // Blocker for navigation
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      exam && !showResults && !submitting && currentLocation.pathname !== nextLocation.pathname
  );

  // Handle browser back/refresh/close
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (exam && !showResults && !submitting) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [exam, showResults, submitting]);

  useEffect(() => {
    if (!courseId) {
      loadEnrolledCourses();
    } else {
      loadExam();
    }
  }, [courseId]);

  const loadEnrolledCourses = async () => {
    try {
      setLoadingCourses(true);
      const response = await coursesAPI.getEnrolled();
      // response is { success: true, count: X, data: [...] }
      setEnrolledCourses(response.data || []);
    } catch (error) {
      console.error('Error loading enrolled courses:', error);
      setEnrolledCourses([]);
    } finally {
      setLoadingCourses(false);
    }
  };

  const handleCourseSelect = async (selectedCourse) => {
    try {
      setCheckingCA(true);
      
      // Check CA status
      const caStatus = await caAPI.getStatus(selectedCourse._id);
      if (!caStatus.data?.isCompleted) {
        setPendingCourse(selectedCourse);
        setShowCAModal(true);
        return;
      }

      // Check Exam status
      const examStatus = await examAPI.getStatus(selectedCourse._id);
      if (examStatus.data?.isCompleted) {
        setSelectedCourseTitle(selectedCourse.title);
        setShowLockedModal(true);
        return;
      }
      
      setPendingCourse(selectedCourse);
      setShowGemModal(true);
    } catch (error) {
      console.error('Error checking assessment status:', error);
      setPendingCourse(selectedCourse);
      setShowGemModal(true);
    } finally {
      setCheckingCA(false);
    }
  };

  const handleConfirmDeduction = async () => {
    try {
      setIsDeductingGems(true);
      await usersAPI.deductGems(20, `Final Exam for course ${pendingCourse._id}`);
      await loadUser(); // Refresh gems in navbar
      setShowGemModal(false);
      setShowProceedModal(true); // Show proceed modal instead of navigating
    } catch (error) {
      console.error('Error deducting gems:', error);
      alert(error.message || 'Failed to deduct gems. Please try again.');
    } finally {
      setIsDeductingGems(false);
    }
  };

  const handleStartExam = () => {
    setShowProceedModal(false);
    navigate(`/exam/${pendingCourse._id}`);
  };

  useEffect(() => {
    if (startTime) {
      const interval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        setTimeSpent(elapsed);

        // Show warning when 10 minutes remaining
        if (EXAM_TIME_LIMIT - elapsed <= 600 && EXAM_TIME_LIMIT - elapsed > 0) {
          setShowWarning(true);
        }

        // Auto-submit when time is up
        if (elapsed >= EXAM_TIME_LIMIT) {
          handleSubmit(true);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startTime, timeSpent]);

  const loadExam = async () => {
    try {
      setLoading(true);
      setError(null);
      setLoadingCourses(false); // Make sure course loading is false

      // Check CA status first
      const caStatus = await caAPI.getStatus(courseId);
      if (!caStatus.data?.isCompleted) {
        const courseData = await coursesAPI.getById(courseId);
        setCourse(courseData.data);
        setPendingCourse(courseData.data);
        setShowCAModal(true);
        setLoading(false);
        return;
      }

      // Load course details
      const courseData = await coursesAPI.getById(courseId);
      setCourse(courseData.data);

      // Load exam questions
      const examData = await examAPI.getByCourse(courseId);
      setExam(examData.data);
      setAnswers(new Array(examData.data.questions.length).fill(null));
      setStartTime(Date.now());

    } catch (error) {
      console.error('Error loading exam:', error);
      setError(error.message || 'Failed to load exam. You may have already completed it.');
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = async (autoSubmit = false, forceSubmit = false) => {
    if (submitting) return;

    // Check if exam should be submitted
    if (!autoSubmit && !forceSubmit) {
      const unansweredCount = answers.filter(answer => answer === null).length;
      if (unansweredCount > 0) {
        if (!confirm(`You have ${unansweredCount} unanswered questions. Are you sure you want to submit?`)) {
          return;
        }
      }
    }

    try {
      setSubmitting(true);
      const finalTimeSpent = Math.floor((Date.now() - (startTime || Date.now())) / 1000);

      const response = await examAPI.submit(courseId, answers, finalTimeSpent);
      const resultData = response.data;

      setResults(resultData);
      setShowResults(true);

      // Reload user data to update stats
      await loadUser();

    } catch (error) {
      console.error('Error submitting exam:', error);
      setError('Failed to submit exam. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleConfirmLeave = async () => {
    if (blocker.state === "blocked") {
      // First submit the exam
      await handleSubmit(false, true); // forceSubmit = true
      // Then proceed with navigation
      blocker.proceed();
    }
  };

  const handleCancelLeave = () => {
    if (blocker.state === "blocked") {
      blocker.reset();
    }
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimeRemaining = () => {
    const remaining = EXAM_TIME_LIMIT - timeSpent;
    return Math.max(0, remaining);
  };

  const getProgressPercentage = () => {
    if (!exam) return 0;
    const answeredCount = answers.filter(answer => answer !== null).length;
    return Math.round((answeredCount / exam.questions.length) * 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-red-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-16 w-16 text-red-500 mx-auto mb-4 animate-pulse" />
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading Final Exam...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-red-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Unable to Load Exam</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
          <button
            onClick={() => navigate('/exam')}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Return to Exam Selection
          </button>
        </div>
      </div>
    );
  }

  if (showResults && results) {
    return (
      <div className="min-h-screen bg-red-50 dark:bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border-2 border-red-200 dark:border-red-800">
            <div className="text-center mb-8">
              <Trophy className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Final Exam Completed!</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{course?.title} - Final Assessment</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg text-center border border-red-200 dark:border-red-800">
                <Target className="h-8 w-8 text-red-500 dark:text-red-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-red-700 dark:text-red-300">{results.score}/{results.totalQuestions}</div>
                <div className="text-sm text-red-600 dark:text-red-400">Questions Correct</div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center border border-blue-200 dark:border-blue-800">
                <CheckCircle className="h-8 w-8 text-blue-500 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{results.percentage}%</div>
                <div className="text-sm text-blue-600 dark:text-blue-400">Final Score</div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg text-center border border-purple-200 dark:border-purple-800">
                <Clock className="h-8 w-8 text-purple-500 dark:text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">{formatTime(results.timeSpent || timeSpent)}</div>
                <div className="text-sm text-purple-600 dark:text-purple-400">Time Spent</div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-2" />
                <span className="text-yellow-800 dark:text-yellow-200 font-medium">Important:</span>
              </div>
              <p className="text-yellow-700 dark:text-yellow-300 mt-1">
                Your final grade will be calculated based on your combined CA (30%) and Exam (70%) scores.
                Check your results page for your overall grade.
              </p>
            </div>

            <div className="text-center mb-8">
              <button
                onClick={() => navigate('/results')}
                className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold"
              >
                View Full Results & Grade
              </button>
            </div>

            <div className="border-t dark:border-gray-700 pt-8">
              <h3 className="text-xl font-semibold dark:text-white mb-4">Exam Review</h3>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {results.questions.map((question, index) => (
                  <div key={index} className="border dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium dark:text-gray-200 flex-1">Question {index + 1}</h4>
                      {question.isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 ml-2" />
                      )}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">{question.question}</p>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Your answer: {question.userAnswer !== null ? question.options[question.userAnswer] : 'Not answered'}
                    </div>
                    {!question.isCorrect && (
                      <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                        Correct answer: {question.options[question.correctAnswer]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = exam?.questions?.[currentQuestion];
  const answeredCount = answers.filter(answer => answer !== null).length;
  const timeRemaining = getTimeRemaining();

  // Course Selection Interface
  if (!courseId) {
    return (
      <div className="min-h-screen bg-red-50 dark:bg-gray-900">
        <GemDeductionModal
          isOpen={showGemModal}
          onClose={() => setShowGemModal(false)}
          onConfirm={handleConfirmDeduction}
          amount={20}
          userGems={user?.gems}
          type="Final Exam"
          isLoading={isDeductingGems}
        />
        <ProceedModal
          isOpen={showProceedModal}
          onConfirm={handleStartExam}
          onCancel={() => setShowProceedModal(false)}
          type="Final Exam"
        />
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 shadow-lg border-b-4 border-red-500">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <ArrowLeft className="h-5 w-5 dark:text-gray-200" />
                </button>
                <div>
                  <h1 className="text-2xl font-bold text-red-700 dark:text-red-400">Final Exam</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Select a course to take your final exam</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Selection */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          {loadingCourses ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Loading your enrolled courses...</p>
            </div>
          ) : enrolledCourses.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Enrolled Courses</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">You need to enroll in courses to take final exams.</p>
              <button
                onClick={() => navigate('/courses')}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Browse Courses
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Select a Course</h2>
                <p className="text-gray-600 dark:text-gray-400">Choose the course for which you want to take the final exam.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {enrolledCourses.map((course) => (
                  <div
                    key={course._id}
                    className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 border-red-100 dark:border-red-800 p-6 hover:shadow-xl transition-shadow cursor-pointer ${checkingCA ? 'opacity-75 cursor-wait' : ''}`}
                    onClick={() => !checkingCA && handleCourseSelect(course)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{course.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{course.code}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">{course.category}</p>
                      </div>
                      <div className="ml-4">
                        <Play className="h-8 w-8 text-red-500 dark:text-red-400" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">70 Questions • 40 Minutes • Medium & Difficult</span>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
                        disabled={checkingCA}
                      >
                        {checkingCA ? 'Checking...' : 'Start Exam'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modals */}
              <CARequiredModal
                isOpen={showCAModal}
                onClose={() => {
                  setShowCAModal(false);
                  if (courseId) navigate('/exam'); // If on a direct exam URL, go back to selection
                }}
                username={user?.username || 'Student'}
                courseTitle={pendingCourse?.title || 'this course'}
                courseId={pendingCourse?._id}
              />

              <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Important Exam Information</h4>
                    <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                      <li>• 70 questions from all chapters in the course</li>
                      <li>• Medium and difficult difficulty questions</li>
                      <li>• 40-minute time limit with auto-submission</li>
                      <li>• Can only be taken once per course</li>
                      <li>• Contributes 70% to your final grade</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (!exam || !course) {
    return (
      <div className="min-h-screen bg-red-50 dark:bg-gray-900 flex items-center justify-center">
        <GemDeductionModal
          isOpen={showGemModal}
          onClose={() => setShowGemModal(false)}
          onConfirm={handleConfirmDeduction}
          amount={20}
          userGems={user?.gems}
          type="Final Exam"
          isLoading={isDeductingGems}
        />
        <ProceedModal
          isOpen={showProceedModal}
          onConfirm={handleStartExam}
          onCancel={() => setShowProceedModal(false)}
          type="Final Exam"
        />
        <ExamLockedModal
          isOpen={showLockedModal}
          onClose={() => setShowLockedModal(false)}
          courseTitle={selectedCourseTitle}
        />
        <CARequiredModal 
          isOpen={showCAModal}
          onClose={() => {
            setShowCAModal(false);
            navigate('/exam');
          }}
          username={user?.username || 'Student'}
          courseTitle={pendingCourse?.title || 'this course'}
          courseId={pendingCourse?._id}
        />
        {!showCAModal && (
          <div className="text-center">
            <BookOpen className="h-16 w-16 text-red-500 mx-auto mb-4 animate-pulse" />
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Preparing your exam...</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-red-50 dark:bg-gray-900">
      <ConfirmLeaveModal
        isOpen={blocker.state === "blocked"}
        onConfirm={handleConfirmLeave}
        onCancel={handleCancelLeave}
        type="Final Exam"
      />
      <GemDeductionModal
        isOpen={showGemModal}
        onClose={() => setShowGemModal(false)}
        onConfirm={handleConfirmDeduction}
        amount={20}
        userGems={user?.gems}
        type="Final Exam"
      />
      {/* Warning Banner */}
      {showWarning && timeRemaining > 0 && (
        <div className="bg-yellow-500 text-white text-center py-2 px-4">
          <div className="flex items-center justify-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            <span className="font-semibold">Warning: {Math.ceil(timeRemaining / 60)} minutes remaining!</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-lg border-b-4 border-red-500">
        <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate('/exam')}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  disabled={submitting}
                >
                  <ArrowLeft className="h-5 w-5 dark:text-gray-200" />
                </button>
                <div>
                <h1 className="text-2xl font-bold text-red-700 dark:text-red-400">{course.title}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">FINAL EXAM - {exam.questions.length} Questions</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Time Remaining</div>
                <div className={`font-mono text-xl font-bold ${timeRemaining < 600 ? 'text-red-600 dark:text-red-400' : 'text-gray-900 dark:text-white'}`}>
                  {formatTime(timeRemaining)}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Progress</div>
                <div className="font-semibold text-lg text-gray-900 dark:text-white">{answeredCount}/{exam.questions.length}</div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
              <span>Exam Progress</span>
              <span>{getProgressPercentage()}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className="h-3 bg-red-500 rounded-full transition-all duration-300"
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 border-2 border-red-100 dark:border-red-800">
          {/* Question Navigation */}
          <div className="flex flex-wrap gap-2 mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            {exam.questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                  index === currentQuestion
                    ? 'bg-red-500 text-white'
                    : answers[index] !== null
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Current Question */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Question {currentQuestion + 1} of {exam.questions.length}
              </h2>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                currentQ.difficulty === 'easy' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' :
                currentQ.difficulty === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200' :
                'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
              }`}>
                {currentQ.difficulty.toUpperCase()}
              </span>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-6">
              <p className="text-lg text-gray-800 dark:text-gray-200 font-medium">{currentQ.question}</p>
            </div>

            <div className="space-y-4">
              {currentQ.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => handleAnswerSelect(currentQuestion, optionIndex)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    answers[currentQuestion] === optionIndex
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-200'
                      : 'border-gray-200 dark:border-gray-600 hover:border-red-300 hover:bg-red-25 dark:hover:bg-red-900/10'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                      answers[currentQuestion] === optionIndex
                        ? 'border-red-500 bg-red-500'
                        : 'border-gray-300 dark:border-gray-500'
                    }`}>
                      {answers[currentQuestion] === optionIndex && (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-lg">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center border-t dark:border-gray-700 pt-6">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0 || submitting}
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-gray-700 dark:text-gray-300"
            >
              Previous
            </button>

            <div className="text-center">
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                {answeredCount} of {exam.questions.length} answered
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {exam.questions.length - answeredCount} remaining
              </div>
            </div>

            {currentQuestion === exam.questions.length - 1 ? (
              <button
                onClick={() => handleSubmit(false)}
                disabled={submitting}
                className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-bold text-lg"
              >
                {submitting ? 'Submitting Exam...' : 'Submit Final Exam'}
              </button>
            ) : (
              <button
                onClick={() => setCurrentQuestion(Math.min(exam.questions.length - 1, currentQuestion + 1))}
                disabled={submitting}
                className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
              >
                Next
              </button>
            )}
          </div>

          {/* Exam Rules Reminder */}
          <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-2 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Exam Rules:</h4>
                <ul className="text-sm text-yellow-700 dark:text-yellow-300 mt-1 space-y-1">
                  <li>• This is a timed exam with a 40-minute limit</li>
                  <li>• You can navigate between questions freely</li>
                  <li>• Answers can be changed until final submission</li>
                  <li>• Exam will auto-submit when time runs out</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPage;