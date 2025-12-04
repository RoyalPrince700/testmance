import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { quizzesAPI } from '../utils/api';
import { useAuth } from '../contexts/AuthContext';
import { ArrowLeft, CheckCircle, XCircle, Trophy, Clock, Target } from 'lucide-react';

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, loadUser } = useAuth();

  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const loadQuiz = async () => {
      try {
        const response = await quizzesAPI.getById(id);
        setQuiz(response.data);
        setAnswers(new Array(response.data.questions.length).fill(null));
        setTimeLeft(response.data.timeLimit * 60); // Convert minutes to seconds
      } catch (error) {
        console.error('Failed to load quiz:', error);
      } finally {
        setLoading(false);
      }
    };

    loadQuiz();
  }, [id]);

  // Timer effect
  useEffect(() => {
    if (timeLeft === null || showResults) return;

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
  }, [timeLeft, showResults]);

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

  const handleSubmit = async () => {
    if (submitting) return;

    setSubmitting(true);
    try {
      const response = await quizzesAPI.submit(id, answers);
      setResults(response.data);
      setShowResults(true);
      await loadUser(); // Refresh user data to get updated gems/XP
    } catch (error) {
      console.error('Failed to submit quiz:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
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
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Quiz not found</h2>
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  if (showResults && results) {
    return (
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            {results.passed ? (
              <div className="bg-green-500/20 p-4 rounded-full">
                <CheckCircle className="h-16 w-16 text-green-400" />
              </div>
            ) : (
              <div className="bg-red-500/20 p-4 rounded-full">
                <XCircle className="h-16 w-16 text-red-400" />
              </div>
            )}
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {results.passed ? 'Congratulations! 🎉' : 'Keep Trying! 💪'}
          </h1>
          <p className="text-white/70">
            You {results.passed ? 'passed' : 'didn\'t pass'} the quiz
          </p>
        </div>

        {/* Results */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{results.percentage}%</div>
              <div className="text-white/70">Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{results.correctAnswers}/{results.totalQuestions}</div>
              <div className="text-white/70">Correct Answers</div>
            </div>
          </div>

          {results.gemsEarned > 0 && (
            <div className="bg-yellow-500/20 rounded-lg p-4 mb-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Trophy className="h-6 w-6 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">
                  +{results.gemsEarned} Gems Earned!
                </span>
              </div>
            </div>
          )}

          {results.xpEarned > 0 && (
            <div className="bg-blue-500/20 rounded-lg p-4 text-center">
              <div className="text-blue-400 font-semibold">
                +{results.xpEarned} XP Earned!
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex space-x-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex-1 bg-white/20 hover:bg-white/30 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
          >
            Back to Dashboard
          </button>
          <button
            onClick={() => window.location.reload()}
            className="flex-1 bg-white text-purple-600 py-3 px-6 rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center space-x-2 text-white/70 hover:text-white"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>

        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">{quiz.title}</h1>
          <p className="text-white/70">{quiz.description}</p>
        </div>

        <div className="flex items-center space-x-4 text-white">
          {timeLeft !== null && quiz.timeLimit > 0 && (
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span className="font-mono">{formatTime(timeLeft)}</span>
            </div>
          )}
          <div className="flex items-center space-x-2">
            <Target className="h-5 w-5" />
            <span>{currentQuestion + 1}/{quiz.questions.length}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/20 rounded-full h-2 mb-8">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Question */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-8">
        <h2 className="text-xl font-semibold text-white mb-6">
          Question {currentQuestion + 1}
        </h2>

        <div className="mb-8">
          <p className="text-white text-lg leading-relaxed">{question.question}</p>
        </div>

        {/* Options */}
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(currentQuestion, index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all quiz-option ${
                answers[currentQuestion] === index
                  ? 'border-blue-400 bg-blue-500/20 text-white'
                  : 'border-white/30 bg-white/5 text-white/80 hover:border-white/50 hover:bg-white/10'
              }`}
            >
              <span className="font-semibold mr-3">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>

        {currentQuestion === quiz.questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={submitting || answers.includes(null)}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {submitting ? 'Submitting...' : 'Submit Quiz'}
          </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={answers[currentQuestion] === null}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
