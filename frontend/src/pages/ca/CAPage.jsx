import { useState, useEffect } from 'react';
import { useParams, useNavigate, useBlocker } from 'react-router-dom';
import { caAPI, coursesAPI, usersAPI } from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, AlertCircle, BookOpen, Play, Lock, X, AlertTriangle } from 'lucide-react';
import GemDeductionModal from '../../components/GemDeductionModal';
import Reveal from '../../components/Reveal';

const Spinner = () => (
  <div className="flex min-h-[50vh] items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" />
  </div>
);

const ConfirmLeaveModal = ({ isOpen, onConfirm, onCancel, type = 'CA' }) => {
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

const ProceedModal = ({ isOpen, onConfirm, onCancel, type = 'CA' }) => {
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

const CALockedModal = ({ isOpen, onClose, courseTitle }) => {
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
        <h2 className="mt-5 text-lg font-medium tracking-tight text-ink">This CA is already done.</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-slate">
          {courseTitle} has one continuous assessment. The score is already on your results.
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <button type="button" onClick={() => navigate('/results')} className="btn-primary w-full sm:w-auto">View results</button>
          <button type="button" onClick={() => navigate('/exam')} className="btn-secondary w-full sm:w-auto">Go to exams</button>
        </div>
      </div>
    </div>
  );
};

const CAPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { user, loadUser } = useAuth();

  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(false);

  const [showGemModal, setShowGemModal] = useState(false);
  const [pendingCourseId, setPendingCourseId] = useState(null);
  const [isDeductingGems, setIsDeductingGems] = useState(false);

  const [showLockedModal, setShowLockedModal] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState('');
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);

  const [showProceedModal, setShowProceedModal] = useState(false);

  const [ca, setCa] = useState(null);
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

  const CA_TIME_LIMIT = 900;

  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      ca && !showResults && !submitting && currentLocation.pathname !== nextLocation.pathname
  );

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

  const handleStartCA = () => {
    setShowProceedModal(false);
    navigate(`/ca/${pendingCourseId}`);
  };

  useEffect(() => {
    if (startTime) {
      const interval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        setTimeSpent(elapsed);

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
      setLoadingCourses(false);

      const courseData = await coursesAPI.getById(courseId);
      setCourse(courseData.data);

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
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="mx-auto flex min-h-[50vh] max-w-md flex-col items-center justify-center px-5 text-center">
        <AlertCircle className="h-8 w-8 text-slate" strokeWidth={1.75} />
        <h2 className="mt-4 text-lg font-medium tracking-tight text-ink">Unable to load this CA</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-slate">{error}</p>
        <button type="button" onClick={() => navigate('/dashboard')} className="btn-primary mt-6">Back to dashboard</button>
      </div>
    );
  }

  if (showResults && results) {
    return (
      <div className="bg-canvas pb-20 text-ink">
        <header className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-16">
          <p className="text-sm font-medium text-accent">Continuous assessment</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
            CA submitted.
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
          <button type="button" onClick={() => navigate('/results')} className="btn-primary group">
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

  const currentQ = ca?.questions?.[currentQuestion];
  const answeredCount = answers.filter(answer => answer !== null).length;

  if (!courseId) {
    return (
      <div className="bg-canvas pb-20 text-ink">
        <GemDeductionModal
          isOpen={showGemModal}
          onClose={() => setShowGemModal(false)}
          onConfirm={handleConfirmDeduction}
          amount={10}
          userGems={user?.gems}
          type="CA"
          isLoading={isDeductingGems}
        />
        <ProceedModal
          isOpen={showProceedModal}
          onConfirm={handleStartCA}
          onCancel={() => setShowProceedModal(false)}
          type="CA"
        />
        <CALockedModal
          isOpen={showLockedModal}
          onClose={() => setShowLockedModal(false)}
          courseTitle={selectedCourseTitle}
        />

        <header className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-16">
          <button type="button" onClick={() => navigate('/dashboard')} className="inline-flex items-center gap-2 text-sm font-medium text-graphite hover:text-ink">
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            Dashboard
          </button>
          <p className="rise-in mt-6 text-sm font-medium text-accent">Continuous assessment</p>
          <h1 className="rise-in mt-3 max-w-2xl text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]" style={{ animationDelay: '70ms' }}>
            Sit the CA for a course.
          </h1>
          <p className="rise-in mt-4 max-w-xl text-lg leading-relaxed text-graphite" style={{ animationDelay: '140ms' }}>
            30 questions, 15 minutes, once per course. It counts for 30 of the final 100.
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
                Enroll in a course before you sit its CA.
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
                    <p className="mt-4 text-sm text-slate">30 questions · 15 minutes · 10 gems</p>
                    <button
                      type="button"
                      onClick={() => handleCourseSelect(item)}
                      disabled={isCheckingStatus}
                      className="btn-primary mt-6 w-full disabled:opacity-50"
                    >
                      {isCheckingStatus ? 'Checking…' : 'Start CA'}
                    </button>
                  </Reveal>
                ))}
              </div>
              <div className="mt-8 rounded-3xl border border-line bg-surface p-6">
                <h2 className="text-lg font-medium tracking-tight text-ink">Before you start</h2>
                <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-slate">
                  <li>Questions come from the chapters in the course.</li>
                  <li>The paper closes itself when the 15 minutes end.</li>
                  <li>You can sit it once.</li>
                </ul>
              </div>
            </>
          )}
        </section>
      </div>
    );
  }

  if (!ca || !course) {
    return (
      <div>
        <GemDeductionModal
          isOpen={showGemModal}
          onClose={() => setShowGemModal(false)}
          onConfirm={handleConfirmDeduction}
          amount={10}
          userGems={user?.gems}
          type="CA"
          isLoading={isDeductingGems}
        />
        <ProceedModal
          isOpen={showProceedModal}
          onConfirm={handleStartCA}
          onCancel={() => setShowProceedModal(false)}
          type="CA"
        />
        <div className="mx-auto flex min-h-[50vh] max-w-md flex-col items-center justify-center px-5 text-center">
          <AlertCircle className="h-8 w-8 text-slate" strokeWidth={1.75} />
          <h2 className="mt-4 text-lg font-medium tracking-tight text-ink">Unable to load this CA</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-slate">
            {!ca ? 'The questions did not load.' : 'The course is missing.'}
          </p>
          <button type="button" onClick={() => navigate('/ca')} className="btn-primary mt-6">Back to CA</button>
        </div>
      </div>
    );
  }

  if (!ca.questions || ca.questions.length === 0) {
    return (
      <div className="mx-auto flex min-h-[50vh] max-w-md flex-col items-center justify-center px-5 text-center">
        <AlertCircle className="h-8 w-8 text-slate" strokeWidth={1.75} />
        <h2 className="mt-4 text-lg font-medium tracking-tight text-ink">No CA questions yet</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-slate">
          This course does not have easy or medium questions for a continuous assessment yet.
        </p>
        <button type="button" onClick={() => navigate('/ca')} className="btn-primary mt-6">Back to CA</button>
      </div>
    );
  }

  const remaining = getTimeRemaining();

  return (
    <div className="bg-canvas pb-16 text-ink">
      <ConfirmLeaveModal
        isOpen={blocker.state === "blocked"}
        onConfirm={handleConfirmLeave}
        onCancel={handleCancelLeave}
        type="CA"
      />
      <GemDeductionModal
        isOpen={showGemModal}
        onClose={() => setShowGemModal(false)}
        onConfirm={handleConfirmDeduction}
        amount={10}
        userGems={user?.gems}
        type="CA"
      />

      <div className="border-b border-line bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-4 md:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => navigate('/ca')} className="rounded-full p-2 text-graphite hover:text-ink" aria-label="Back to CA">
                <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
              </button>
              <div>
                <p className="text-sm font-medium text-ink">{course.title}</p>
                <p className="text-sm text-slate">Continuous assessment</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div>
                <p className="text-sm text-slate">Time left</p>
                <p className={`font-medium tabular-nums ${remaining < 60 ? 'text-accent' : 'text-ink'}`}>{formatTime(remaining)}</p>
              </div>
              <div>
                <p className="text-sm text-slate">Answered</p>
                <p className="font-medium text-ink">{answeredCount}/{ca.questions.length}</p>
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
            {ca.questions.map((_, index) => (
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

          <div className="mt-8 flex items-center justify-between gap-3">
            <h2 className="text-lg font-medium tracking-tight text-ink">
              Question {currentQuestion + 1} of {ca.questions.length}
            </h2>
            {currentQ?.difficulty && (
              <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium capitalize text-accent">
                {currentQ.difficulty}
              </span>
            )}
          </div>

          {currentQ ? (
            <>
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
              disabled={currentQuestion === 0}
              className="btn-secondary w-full disabled:opacity-50 sm:w-auto"
            >
              Previous
            </button>
            <p className="text-center text-sm text-slate">{answeredCount} of {ca.questions.length} answered</p>
            {currentQuestion === ca.questions.length - 1 ? (
              <button
                type="button"
                onClick={() => handleSubmit()}
                disabled={submitting || answeredCount === 0}
                className="btn-primary w-full disabled:opacity-50 sm:w-auto"
              >
                {submitting ? 'Submitting…' : 'Submit CA'}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setCurrentQuestion(Math.min(ca.questions.length - 1, currentQuestion + 1))}
                className="btn-primary w-full sm:w-auto"
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
