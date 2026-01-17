import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, useBlocker } from 'react-router-dom';
import { caAPI, coursesAPI, usersAPI } from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';
import { ArrowLeft, CheckCircle, XCircle, Trophy, Target, Sparkles, Clock, AlertCircle, BookOpen, Play, CheckCircle2, Lock, X, LogOut, AlertTriangle } from 'lucide-react';
import GemDeductionModal from '../../components/GemDeductionModal';

const ConfirmLeaveModal = ({ isOpen, onConfirm, onCancel, type = 'CA' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-8 border-4 border-teal-500 animate-in fade-in zoom-in duration-300">
        <div className="text-center">
          <div className="bg-teal-100 dark:bg-teal-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="h-10 w-10 text-teal-600 dark:text-teal-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Abandon {type}? 🛑</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            If you leave now, your {type.toLowerCase()} will end immediately and your current progress will be recorded as your final score. 
            <br/><br/>
            <span className="font-bold text-teal-600 dark:text-teal-400 text-lg">This action cannot be undone!</span>
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={onConfirm}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
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

const ProceedModal = ({ isOpen, onConfirm, onCancel, type = 'CA' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-8 border-4 border-teal-500 animate-in fade-in zoom-in duration-300">
        <div className="text-center">
          <div className="bg-teal-50 dark:bg-teal-900/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Play className="h-10 w-10 text-teal-600 dark:text-teal-400 fill-current" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">Ready to Start? 🚀</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            You are about to start the <span className="font-bold text-teal-600 dark:text-teal-400">{type}</span>. Once you begin, the timer will start and you cannot pause.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={onConfirm}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
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

const CALockedModal = ({ isOpen, onClose, courseTitle }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full p-8 border-4 border-yellow-400 transform transition-all animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-full p-2 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center">
          <div className="bg-yellow-100 dark:bg-yellow-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="h-10 w-10 text-yellow-600 dark:text-yellow-400" />
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
            CA Already Completed! 🎓
          </h2>
          
          <div className="space-y-4 mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              You've already tackled the Continuous Assessment for 
              <span className="font-bold block mt-1 text-gray-800 dark:text-gray-200">"{courseTitle}"</span>.
            </p>
            <p className="text-md text-gray-600 dark:text-gray-400">
              In TestMancer, CA tests are a <span className="font-bold text-yellow-600 dark:text-yellow-400">one-shot challenge</span> to keep things exciting! 
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-8 border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-800 dark:text-blue-300 font-medium">
              Ready for the next step? Check your results or prepare for the Final Exam! 🚀
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate('/results')}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Trophy className="h-5 w-5" />
              View Results
            </button>
            <button
              onClick={() => navigate('/exam')}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="h-5 w-5" />
              To Final Exam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CAPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { user, loadUser } = useAuth();

  // Course selection state
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(false);

  // Gem Modal state
  const [showGemModal, setShowGemModal] = useState(false);
  const [pendingCourseId, setPendingCourseId] = useState(null);
  const [isDeductingGems, setIsDeductingGems] = useState(false);

  // Locked Modal state
  const [showLockedModal, setShowLockedModal] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState('');
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);

  // Start confirmation state
  const [showProceedModal, setShowProceedModal] = useState(false);

  const [ca, setCa] = useState(null);
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

  // CA time limit (15 minutes = 900 seconds)
  const CA_TIME_LIMIT = 900;

  // Blocker for navigation
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      ca && !showResults && !submitting && currentLocation.pathname !== nextLocation.pathname
  );

  // Handle browser back/refresh/close
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (ca && !showResults && !submitting) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [ca, showResults, submitting]);

  // Get course color theme
  const getCourseTheme = () => {
    if (!course) return 'teal';
    const courseCode = course.code || '';
    if (courseCode.includes('GNS')) return 'teal';
    if (courseCode.includes('GST')) return 'teal';
    return 'teal';
  };

  const theme = getCourseTheme();
  const themeColors = {
    teal: {
      primary: 'teal',
      bg: 'bg-teal-50 dark:bg-teal-900/10',
      border: 'border-teal-200 dark:border-teal-800',
      text: 'text-teal-700 dark:text-teal-300',
      button: 'bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-500',
      buttonSecondary: 'bg-teal-100 hover:bg-teal-200 dark:bg-teal-900/30 dark:hover:bg-teal-900/50 text-teal-700 dark:text-teal-300',
      accent: 'text-teal-600 dark:text-teal-400',
      progress: 'bg-teal-500 dark:bg-teal-400',
      selected: 'border-teal-500 bg-teal-50 dark:bg-teal-900/20',
      icon: 'text-teal-500 dark:text-teal-400'
    },
  };

  useEffect(() => {
    if (!courseId) {
      loadEnrolledCourses();
    } else {
      loadCA();
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

  const handleCourseSelect = async (course) => {
    try {
      setIsCheckingStatus(true);
      const caStatus = await caAPI.getStatus(course._id);
      
      if (caStatus.data?.isCompleted) {
        setSelectedCourseTitle(course.title);
        setShowLockedModal(true);
        return;
      }
      
      setPendingCourseId(course._id);
      setShowGemModal(true);
    } catch (error) {
      console.error('Error checking CA status:', error);
      // Fallback: let the Gem modal show and loadCA will handle it if needed
      setPendingCourseId(course._id);
      setShowGemModal(true);
    } finally {
      setIsCheckingStatus(false);
    }
  };

  const handleConfirmDeduction = async () => {
    try {
      setIsDeductingGems(true);
      await usersAPI.deductGems(10, `CA Test for course ${pendingCourseId}`);
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

  const handleStartCA = () => {
    setShowProceedModal(false);
    navigate(`/ca/${pendingCourseId}`);
  };

  useEffect(() => {
    if (startTime) {
      const interval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        setTimeSpent(elapsed);

        // Auto-submit when time is up
        if (elapsed >= CA_TIME_LIMIT) {
          handleSubmit(true);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startTime]);

  const loadCA = async () => {
    try {
      setLoading(true);
      setError(null);
      setLoadingCourses(false); // Make sure course loading is false

      // Load course details
      const courseData = await coursesAPI.getById(courseId);
      setCourse(courseData.data);

      // Load CA questions
      const caData = await caAPI.getByCourse(courseId);
      setCa(caData.data);
      setAnswers(new Array(caData.data.questions.length).fill(null));
      setStartTime(Date.now());

    } catch (error) {
      console.error('Error loading CA:', error);
      setError(error.message || 'Failed to load CA. You may have already completed it.');
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

      const response = await caAPI.submit(courseId, answers, finalTimeSpent);
      const resultData = response.data;

      setResults(resultData);
      setShowResults(true);

      // Reload user data to update stats
      await loadUser();

    } catch (error) {
      console.error('Error submitting CA:', error);
      setError('Failed to submit CA. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleConfirmLeave = async () => {
    if (blocker.state === "blocked") {
      // First submit the CA
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
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimeRemaining = () => {
    const remaining = CA_TIME_LIMIT - timeSpent;
    return Math.max(0, remaining);
  };

  const getProgressPercentage = () => {
    if (!ca) return 0;
    const answeredCount = answers.filter(answer => answer !== null).length;
    return Math.round((answeredCount / ca.questions.length) * 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading CA...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Unable to Load CA</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (showResults && results) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">CA Completed!</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{course?.title} - Continuous Assessment</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg text-center">
                <Target className="h-8 w-8 text-teal-500 dark:text-teal-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-teal-700 dark:text-teal-300">{results.score}/{results.totalQuestions}</div>
                <div className="text-sm text-teal-600 dark:text-teal-400">Questions Correct</div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center">
                <CheckCircle className="h-8 w-8 text-blue-500 dark:text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{results.percentage}%</div>
                <div className="text-sm text-blue-600 dark:text-blue-400">Score</div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg text-center">
                <Clock className="h-8 w-8 text-purple-500 dark:text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">{formatTime(results.timeSpent || timeSpent)}</div>
                <div className="text-sm text-purple-600 dark:text-purple-400">Time Spent</div>
              </div>
            </div>

            <div className="text-center mb-8">
              <button
                onClick={() => navigate('/results')}
                className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors font-semibold"
              >
                View Full Results
              </button>
            </div>

            <div className="border-t dark:border-gray-700 pt-8">
              <h3 className="text-xl font-semibold dark:text-white mb-4">Question Review</h3>
              <div className="space-y-4">
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

  const currentQ = ca?.questions?.[currentQuestion];
  const answeredCount = answers.filter(answer => answer !== null).length;

  // Course Selection Interface
  if (!courseId) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <GemDeductionModal
          isOpen={showGemModal}
          onClose={() => setShowGemModal(false)}
          onConfirm={handleConfirmDeduction}
          amount={10}
          userGems={user?.gems}
          type="CA Test"
          isLoading={isDeductingGems}
        />
        <ProceedModal
          isOpen={showProceedModal}
          onConfirm={handleStartCA}
          onCancel={() => setShowProceedModal(false)}
          type="CA Test"
        />
        <CALockedModal 
          isOpen={showLockedModal}
          onClose={() => setShowLockedModal(false)}
          courseTitle={selectedCourseTitle}
        />
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <ArrowLeft className="h-5 w-5 dark:text-gray-200" />
                </button>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Continuous Assessment</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Select a course to take your CA test</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Selection */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          {loadingCourses ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Loading your enrolled courses...</p>
            </div>
          ) : enrolledCourses.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Enrolled Courses</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">You need to enroll in courses to take CA tests.</p>
              <button
                onClick={() => navigate('/courses')}
                className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors"
              >
                Browse Courses
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Select a Course</h2>
                <p className="text-gray-600 dark:text-gray-400">Choose the course for which you want to take the Continuous Assessment test.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {enrolledCourses.map((course) => (
                  <div
                    key={course._id}
                    className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow cursor-pointer ${isCheckingStatus ? 'opacity-75 cursor-wait' : ''}`}
                    onClick={() => !isCheckingStatus && handleCourseSelect(course)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{course.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{course.code}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">{course.category}</p>
                      </div>
                      <div className="ml-4">
                        <Play className="h-8 w-8 text-teal-500 dark:text-teal-400" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">30 Questions • 15 Minutes • Easy & Medium</span>
                      <button 
                        className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors text-sm font-medium"
                        disabled={isCheckingStatus}
                      >
                        {isCheckingStatus ? 'Checking...' : 'Start CA'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">About CA Tests</h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• 30 questions from all chapters in the course</li>
                      <li>• Easy and medium difficulty questions</li>
                      <li>• 15-minute time limit with auto-submission</li>
                      <li>• Can only be taken once per course</li>
                      <li>• Contributes 30% to your final grade</li>
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

  if (!ca || !course) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <GemDeductionModal
          isOpen={showGemModal}
          onClose={() => setShowGemModal(false)}
          onConfirm={handleConfirmDeduction}
          amount={10}
          userGems={user?.gems}
          type="CA Test"
          isLoading={isDeductingGems}
        />
        <ProceedModal
          isOpen={showProceedModal}
          onConfirm={handleStartCA}
          onCancel={() => setShowProceedModal(false)}
          type="CA Test"
        />
        <div className="text-center max-w-md mx-auto p-6">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Unable to Load CA</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {!ca ? 'CA data could not be loaded.' : 'Course information is missing.'}
          </p>
          <button
            onClick={() => navigate('/ca')}
            className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors"
          >
            Return to CA Selection
          </button>
        </div>
      </div>
    );
  }

  if (!ca.questions || ca.questions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <AlertCircle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No CA Questions Available</h2>
          <div className="text-gray-600 dark:text-gray-400 mb-6">
            There are no questions available for this course's CA test. This may be because:
            <ul className="text-left mt-4 space-y-2 text-sm">
              <li>• No quizzes have been created for this course yet</li>
              <li>• The quizzes don't have easy or medium difficulty questions</li>
              <li>• The course content is still being set up</li>
            </ul>
          </div>
          <button
            onClick={() => navigate('/ca')}
            className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors"
          >
            Return to CA Selection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ConfirmLeaveModal
        isOpen={blocker.state === "blocked"}
        onConfirm={handleConfirmLeave}
        onCancel={handleCancelLeave}
        type="CA Test"
      />
      <GemDeductionModal
        isOpen={showGemModal}
        onClose={() => setShowGemModal(false)}
        onConfirm={handleConfirmDeduction}
        amount={10}
        userGems={user?.gems}
        type="CA Test"
      />
      {/* Header */}
      <div className={`bg-white dark:bg-gray-800 shadow-sm border-b ${themeColors[theme].border}`}>
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/ca')}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <ArrowLeft className="h-5 w-5 dark:text-gray-200" />
              </button>
              <div>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">{course.title}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Continuous Assessment (30 Questions)</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-600 dark:text-gray-400">Time Remaining</div>
                <div className={`font-mono text-lg font-bold ${getTimeRemaining() < 60 ? 'text-red-500 dark:text-red-400' : 'text-gray-900 dark:text-white'}`}>
                  {formatTime(getTimeRemaining())}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600 dark:text-gray-400">Progress</div>
                <div className="font-semibold text-gray-900 dark:text-white">{answeredCount}/{ca.questions.length}</div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
              <span>Progress</span>
              <span>{getProgressPercentage()}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${themeColors[theme].progress} transition-all duration-300`}
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          {/* Question Navigation */}
          <div className="flex flex-wrap gap-2 mb-6">
            {ca.questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                  index === currentQuestion
                    ? `${themeColors[theme].button} text-white`
                    : answers[index] !== null
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Current Question */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Question {currentQuestion + 1} of {ca.questions.length}
              </h2>
              {currentQ && (
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  currentQ.difficulty === 'easy' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' :
                  currentQ.difficulty === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200' :
                  'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                }`}>
                  {currentQ.difficulty}
                </span>
              )}
            </div>

            {currentQ ? (
              <>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{currentQ.question}</p>

                <div className="space-y-3">
                  {currentQ.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => handleAnswerSelect(currentQuestion, optionIndex)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    answers[currentQuestion] === optionIndex
                      ? `${themeColors[theme].selected} ${themeColors[theme].border}`
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                      answers[currentQuestion] === optionIndex
                        ? `border-teal-500 bg-teal-500`
                        : 'border-gray-300 dark:border-gray-500'
                    }`}>
                      {answers[currentQuestion] === optionIndex && (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{option}</span>
                  </div>
                </button>
              ))}
            </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500 mx-auto"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Loading question...</p>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-700 dark:text-gray-300"
            >
              Previous
            </button>

            <div className="text-sm text-gray-600 dark:text-gray-400">
              {answeredCount} of {ca.questions.length} answered
            </div>

            {currentQuestion === ca.questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={submitting || answeredCount === 0}
                className={`px-8 py-2 ${themeColors[theme].button} text-white rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold`}
              >
                {submitting ? 'Submitting...' : 'Submit CA'}
              </button>
            ) : (
              <button
                onClick={() => setCurrentQuestion(Math.min(ca.questions.length - 1, currentQuestion + 1))}
                className={`px-6 py-2 ${themeColors[theme].button} text-white rounded-lg hover:opacity-90 transition-colors`}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CAPage;