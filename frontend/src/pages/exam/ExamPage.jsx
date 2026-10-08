import { useState, useEffect } from 'react';
import { useParams, useNavigate, useBlocker } from 'react-router-dom';
import { examAPI, coursesAPI, caAPI, usersAPI } from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, AlertTriangle, BookOpen, Play, Lock, X } from 'lucide-react';
import GemDeductionModal from '../../components/GemDeductionModal';
import Reveal from '../../components/Reveal';

const Spinner = () => (
  <div className="flex min-h-[50vh] items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" />
  </div>
);

const ConfirmLeaveModal = ({ isOpen, onConfirm, onCancel, type = 'Exam' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/40 p-4">
      <div className="w-full max-w-md rounded-3xl border border-line bg-surface p-6 sm:p-8" role="dialog" aria-modal="true">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
          <AlertTriangle className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <h2 className="mt-5 text-lg font-medium tracking-tight text-ink">Leave this {type}?</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-slate">
          Leaving now submits what you have answered. That score is final.
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <button type="button" onClick={onCancel} className="btn-primary w-full sm:w-auto">Stay and finish</button>
          <button type="button" onClick={onConfirm} className="btn-secondary w-full sm:w-auto">End and leave</button>
        </div>
      </div>
    </div>
  );
};

const ProceedModal = ({ isOpen, onConfirm, onCancel, type = 'Exam' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4">
      <div className="w-full max-w-md rounded-3xl border border-line bg-surface p-6 sm:p-8" role="dialog" aria-modal="true">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
          <Play className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <h2 className="mt-5 text-lg font-medium tracking-tight text-ink">Start the {type}?</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-slate">
          The timer starts when you continue, and it does not pause.
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <button type="button" onClick={onConfirm} className="btn-primary w-full sm:w-auto">Start</button>
          <button type="button" onClick={onCancel} className="btn-secondary w-full sm:w-auto">Not yet</button>
        </div>
      </div>
    </div>
  );
};

const ExamLockedModal = ({ isOpen, onClose, courseTitle }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4">
      <div className="relative w-full max-w-md rounded-3xl border border-line bg-surface p-6 sm:p-8" role="dialog" aria-modal="true">
        <button type="button" onClick={onClose} className="absolute right-4 top-4 rounded-full p-2 text-slate hover:text-ink" aria-label="Close">
          <X className="h-4 w-4" strokeWidth={1.75} />
        </button>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
          <Lock className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <h2 className="mt-5 text-lg font-medium tracking-tight text-ink">This exam is already done.</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-slate">
          {courseTitle} has one final exam. The score is already on your results.
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <button type="button" onClick={() => navigate('/results')} className="btn-primary w-full sm:w-auto">View results</button>
          <button type="button" onClick={onClose} className="btn-secondary w-full sm:w-auto">Back</button>
        </div>
      </div>
    </div>
  );
};

const CARequiredModal = ({ isOpen, onClose, courseTitle, courseId }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4">
      <div className="relative w-full max-w-md rounded-3xl border border-line bg-surface p-6 sm:p-8" role="dialog" aria-modal="true">
        <button type="button" onClick={onClose} className="absolute right-4 top-4 rounded-full p-2 text-slate hover:text-ink" aria-label="Close">
          <X className="h-4 w-4" strokeWidth={1.75} />
        </button>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
          <AlertTriangle className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <h2 className="mt-5 text-lg font-medium tracking-tight text-ink">Sit the CA first.</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-slate">
          {courseTitle} needs a continuous assessment before the exam. The CA is 30 of the final 100.
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <button type="button" onClick={() => navigate(`/ca/${courseId}`)} className="btn-primary w-full sm:w-auto">Take CA</button>
          <button type="button" onClick={onClose} className="btn-secondary w-full sm:w-auto">Not now</button>
        </div>
      </div>
    </div>
  );
};

const ExamPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { user, loadUser } = useAuth();

  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(false);

  const [exam, setExam] = useState(null);
  const [course, setCourse] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [timeSpent, setTimeSpent] = useState(0);
  const [error, setError] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  const [showCAModal, setShowCAModal] = useState(false);
  const [pendingCourse, setPendingCourse] = useState(null);
  const [checkingCA, setCheckingCA] = useState(false);

  const [showGemModal, setShowGemModal] = useState(false);
  const [isDeductingGems, setIsDeductingGems] = useState(false);

  const [showLockedModal, setShowLockedModal] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState('');

  const [showProceedModal, setShowProceedModal] = useState(false);

  const EXAM_TIME_LIMIT = 2400;

  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      exam && !showResults && !submitting && currentLocation.pathname !== nextLocation.pathname
  );

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

      const caStatus = await caAPI.getStatus(selectedCourse._id);
      if (!caStatus.data?.isCompleted) {
        setPendingCourse(selectedCourse);
        setShowCAModal(true);
        return;
      }

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
      await loadUser();
      setShowGemModal(false);
      setShowProceedModal(true);
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

        if (EXAM_TIME_LIMIT - elapsed <= 600 && EXAM_TIME_LIMIT - elapsed > 0) {
          setShowWarning(true);
        }

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
      setLoadingCourses(false);

      const caStatus = await caAPI.getStatus(courseId);
      if (!caStatus.data?.isCompleted) {
        const courseData = await coursesAPI.getById(courseId);
        setCourse(courseData.data);
        setPendingCourse(courseData.data);
        setShowCAModal(true);
        setLoading(false);
        return;
      }

      const courseData = await coursesAPI.getById(courseId);
      setCourse(courseData.data);

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
      await handleSubmit(false, true);
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

  const closeCAModal = () => {
    setShowCAModal(false);
    if (courseId) navigate('/exam');
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="mx-auto flex min-h-[50vh] max-w-md flex-col items-center justify-center px-5 text-center">
        <AlertTriangle className="h-8 w-8 text-slate" strokeWidth={1.75} />
        <h2 className="mt-4 text-lg font-medium tracking-tight text-ink">Unable to load this exam</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-slate">{error}</p>
        <button type="button" onClick={() => navigate('/exam')} className="btn-primary mt-6">Back to exams</button>
      </div>
    );
  }

  if (showResults && results) {
    return (
      <div className="bg-canvas pb-20 text-ink">
        <header className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-16">
          <p className="text-sm font-medium text-accent">Final exam</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
            Exam submitted.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-graphite">{course?.title}</p>
        </header>

        <section className="mt-12 border-y border-line bg-surface">
          <dl className="mx-auto grid max-w-6xl grid-cols-3">
            <div className="px-5 py-8 md:px-8">
              <dt className="text-sm text-slate">Correct</dt>
              <dd className="mt-1 text-3xl font-medium tracking-tight text-ink">{results.score}/{results.totalQuestions}</dd>
            </div>
            <div className="border-l border-line px-5 py-8 md:px-8">
              <dt className="text-sm text-slate">Score</dt>
              <dd className="mt-1 text-3xl font-medium tracking-tight text-ink">{results.percentage}%</dd>
            </div>
            <div className="border-l border-line px-5 py-8 md:px-8">
              <dt className="text-sm text-slate">Time</dt>
              <dd className="mt-1 text-3xl font-medium tracking-tight text-ink">{formatTime(results.timeSpent || timeSpent)}</dd>
            </div>
          </dl>
        </section>

        <section className="mx-auto max-w-6xl px-5 pt-12 md:px-8">
          <p className="max-w-xl text-[15px] leading-relaxed text-slate">
            The grade uses this exam for 70 and the CA for 30. Both scores are on the results page.
          </p>
          <button type="button" onClick={() => navigate('/results')} className="btn-primary group mt-6">
            View results
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <h2 className="mt-12 text-lg font-medium tracking-tight text-ink">Question review</h2>
          <div className="mt-4 grid gap-3">
            {results.questions.map((question, index) => (
              <article key={index} className={`rounded-2xl border p-4 ${question.isCorrect ? 'border-accent bg-accent-soft' : 'border-line bg-surface'}`}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-medium text-ink">Question {index + 1}</h3>
                  {question.isCorrect ? (
                    <CheckCircle className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
                  ) : (
                    <XCircle className="h-4 w-4 shrink-0 text-slate" strokeWidth={1.75} />
                  )}
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-graphite">{question.question}</p>
                <p className="mt-2 text-sm text-slate">
                  Your answer: {question.userAnswer !== null ? question.options[question.userAnswer] : 'Not answered'}
                </p>
                {!question.isCorrect && (
                  <p className="mt-1 text-sm font-medium text-accent">
                    Correct answer: {question.options[question.correctAnswer]}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>
      </div>
    );
  }

  const currentQ = exam?.questions?.[currentQuestion];
  const answeredCount = answers.filter(answer => answer !== null).length;
  const timeRemaining = getTimeRemaining();

  if (!courseId) {
    return (
      <div className="bg-canvas pb-20 text-ink">
        <GemDeductionModal
          isOpen={showGemModal}
          onClose={() => setShowGemModal(false)}
          onConfirm={handleConfirmDeduction}
          amount={20}
          userGems={user?.gems}
          type="exam"
          isLoading={isDeductingGems}
        />
        <ProceedModal
          isOpen={showProceedModal}
          onConfirm={handleStartExam}
          onCancel={() => setShowProceedModal(false)}
          type="exam"
        />
        <ExamLockedModal
          isOpen={showLockedModal}
          onClose={() => setShowLockedModal(false)}
          courseTitle={selectedCourseTitle}
        />
        <CARequiredModal
          isOpen={showCAModal}
          onClose={() => setShowCAModal(false)}
          courseTitle={pendingCourse?.title || 'This course'}
          courseId={pendingCourse?._id}
        />

        <header className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-16">
          <button type="button" onClick={() => navigate('/dashboard')} className="inline-flex items-center gap-2 text-sm font-medium text-graphite hover:text-ink">
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            Dashboard
          </button>
          <p className="rise-in mt-6 text-sm font-medium text-accent">Final exam</p>
          <h1 className="rise-in mt-3 max-w-2xl text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]" style={{ animationDelay: '70ms' }}>
            Sit the exam for a course.
          </h1>
          <p className="rise-in mt-4 max-w-xl text-lg leading-relaxed text-graphite" style={{ animationDelay: '140ms' }}>
            70 questions, 40 minutes, once per course. The CA has to be finished first. The exam counts for 70 of the final 100.
          </p>
        </header>

        <section className="mx-auto max-w-6xl px-5 pt-12 md:px-8">
          {loadingCourses ? (
            <Spinner />
          ) : enrolledCourses.length === 0 ? (
            <div className="rounded-3xl border border-line bg-surface px-6 py-16 text-center">
              <BookOpen className="mx-auto h-8 w-8 text-slate" strokeWidth={1.75} />
              <h2 className="mt-4 text-lg font-medium tracking-tight text-ink">No enrolled courses</h2>
              <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-slate">
                Enroll in a course before you sit its exam.
              </p>
              <button type="button" onClick={() => navigate('/courses')} className="btn-primary group mt-6">
                Browse courses
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          ) : (
            <>
              <div className="grid gap-4 md:grid-cols-2">
                {enrolledCourses.map((item, index) => (
                  <Reveal key={item._id} as="article" className="flex flex-col rounded-3xl border border-line bg-surface p-6" delay={(index % 2) * 70}>
                    <h2 className="text-xl font-medium tracking-tight text-ink">{item.code || 'Course'}</h2>
                    <p className="mt-1 text-base text-graphite">{item.title}</p>
                    {item.category && <p className="mt-3 text-sm text-slate">{item.category}</p>}
                    <p className="mt-4 text-sm text-slate">70 questions · 40 minutes · 20 gems</p>
                    <button
                      type="button"
                      onClick={() => handleCourseSelect(item)}
                      disabled={checkingCA}
                      className="btn-primary mt-6 w-full disabled:opacity-50"
                    >
                      {checkingCA ? 'Checking…' : 'Start exam'}
                    </button>
                  </Reveal>
                ))}
              </div>
              <div className="mt-8 rounded-3xl border border-line bg-surface p-6">
                <h2 className="text-lg font-medium tracking-tight text-ink">Before you start</h2>
                <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-slate">
                  <li>Questions come from the chapters in the course.</li>
                  <li>The paper closes itself when the 40 minutes end.</li>
                  <li>You can move between questions until you submit.</li>
                  <li>You can sit it once, after the CA.</li>
                </ul>
              </div>
            </>
          )}
        </section>
      </div>
    );
  }

  if (!exam || !course) {
    return (
      <div>
        <GemDeductionModal
          isOpen={showGemModal}
          onClose={() => setShowGemModal(false)}
          onConfirm={handleConfirmDeduction}
          amount={20}
          userGems={user?.gems}
          type="exam"
          isLoading={isDeductingGems}
        />
        <ProceedModal
          isOpen={showProceedModal}
          onConfirm={handleStartExam}
          onCancel={() => setShowProceedModal(false)}
          type="exam"
        />
        <ExamLockedModal
          isOpen={showLockedModal}
          onClose={() => setShowLockedModal(false)}
          courseTitle={selectedCourseTitle}
        />
        <CARequiredModal
          isOpen={showCAModal}
          onClose={closeCAModal}
          courseTitle={pendingCourse?.title || 'This course'}
          courseId={pendingCourse?._id}
        />
        {!showCAModal && <Spinner />}
      </div>
    );
  }

  return (
    <div className="bg-canvas pb-16 text-ink">
      <ConfirmLeaveModal
        isOpen={blocker.state === "blocked"}
        onConfirm={handleConfirmLeave}
        onCancel={handleCancelLeave}
        type="exam"
      />
      <GemDeductionModal
        isOpen={showGemModal}
        onClose={() => setShowGemModal(false)}
        onConfirm={handleConfirmDeduction}
        amount={20}
        userGems={user?.gems}
        type="exam"
      />

      {showWarning && timeRemaining > 0 && (
        <div className="border-b border-line bg-accent-soft px-5 py-2 text-center text-sm font-medium text-accent">
          {Math.ceil(timeRemaining / 60)} minutes remaining
        </div>
      )}

      <div className="border-b border-line bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-4 md:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => navigate('/exam')} disabled={submitting} className="rounded-full p-2 text-graphite hover:text-ink disabled:opacity-50" aria-label="Back to exams">
                <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
              </button>
              <div>
                <p className="text-sm font-medium text-ink">{course.title}</p>
                <p className="text-sm text-slate">Final exam · {exam.questions.length} questions</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div>
                <p className="text-sm text-slate">Time left</p>
                <p className={`font-medium tabular-nums ${timeRemaining < 600 ? 'text-accent' : 'text-ink'}`}>{formatTime(timeRemaining)}</p>
              </div>
              <div>
                <p className="text-sm text-slate">Answered</p>
                <p className="font-medium text-ink">{answeredCount}/{exam.questions.length}</p>
              </div>
            </div>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-canvas">
            <div className="h-full rounded-full bg-accent-fill" style={{ width: `${getProgressPercentage()}%` }} />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-8 md:px-8">
        <div className="rounded-3xl border border-line bg-surface p-5 sm:p-8">
          <div className="flex flex-wrap gap-2">
            {exam.questions.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentQuestion(index)}
                className={`h-8 w-8 rounded-full text-sm font-medium ${
                  index === currentQuestion
                    ? 'bg-accent-fill text-on-accent'
                    : answers[index] !== null
                    ? 'bg-accent-soft text-accent'
                    : 'border border-line text-slate hover:text-ink'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {currentQ ? (
            <>
              <div className="mt-8 flex items-center justify-between gap-3">
                <h2 className="text-lg font-medium tracking-tight text-ink">
                  Question {currentQuestion + 1} of {exam.questions.length}
                </h2>
                {currentQ.difficulty && (
                  <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium capitalize text-accent">
                    {currentQ.difficulty}
                  </span>
                )}
              </div>
              <p className="mt-4 text-lg leading-relaxed text-graphite">{currentQ.question}</p>
              <div className="mt-6 space-y-3">
                {currentQ.options.map((option, optionIndex) => {
                  const selected = answers[currentQuestion] === optionIndex;
                  return (
                    <button
                      key={optionIndex}
                      type="button"
                      onClick={() => handleAnswerSelect(currentQuestion, optionIndex)}
                      className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-left text-[15px] leading-relaxed transition-colors ${
                        selected ? 'border-accent bg-accent-soft text-ink' : 'border-line text-graphite hover:bg-canvas'
                      }`}
                    >
                      <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${selected ? 'border-accent-fill bg-accent-fill' : 'border-line'}`}>
                        {selected && <span className="h-2 w-2 rounded-full bg-on-accent" />}
                      </span>
                      {option}
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <Spinner />
          )}

          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0 || submitting}
              className="btn-secondary w-full disabled:opacity-50 sm:w-auto"
            >
              Previous
            </button>
            <p className="text-center text-sm text-slate">
              {answeredCount} of {exam.questions.length} answered
            </p>
            {currentQuestion === exam.questions.length - 1 ? (
              <button
                type="button"
                onClick={() => handleSubmit(false)}
                disabled={submitting}
                className="btn-primary w-full disabled:opacity-50 sm:w-auto"
              >
                {submitting ? 'Submitting…' : 'Submit exam'}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setCurrentQuestion(Math.min(exam.questions.length - 1, currentQuestion + 1))}
                disabled={submitting}
                className="btn-primary w-full disabled:opacity-50 sm:w-auto"
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

export default ExamPage;
