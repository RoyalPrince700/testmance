import { useEffect, useState } from 'react';
import { X, CheckCircle, XCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const QuizAnswersModal = ({ 
  isOpen, 
  onClose, 
  questions = [],
  userAnswers = [],
  quizTitle
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentQuestionIndex(0); // Reset to first question when modal opens
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !questions.length) return null;

  const currentQuestion = questions[currentQuestionIndex];
  const userAnswer = userAnswers[currentQuestionIndex];
  const isCorrect = userAnswer === currentQuestion.correctAnswer;
  const totalQuestions = questions.length;

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Quiz Review</h2>
            {quizTitle && (
              <p className="text-sm text-gray-600 mt-1">{quizTitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 rounded-full p-2 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Question Navigation */}
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
            <div className="flex gap-1">
              {questions.map((_, index) => {
                const userAns = userAnswers[index];
                const correct = userAns === questions[index].correctAnswer;
                return (
                  <button
                    key={index}
                    onClick={() => goToQuestion(index)}
                    className={`w-8 h-8 rounded text-xs font-medium transition-colors ${
                      index === currentQuestionIndex
                        ? 'bg-teal-500 text-white'
                        : correct
                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                        : 'bg-red-100 text-red-700 hover:bg-red-200'
                    }`}
                    title={`Question ${index + 1}: ${correct ? 'Correct' : 'Incorrect'}`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-teal-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-3xl mx-auto">
            {/* Question Header */}
            <div className="flex items-start gap-3 mb-6">
              <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg ${
                isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {isCorrect ? <CheckCircle className="h-6 w-6" /> : <XCircle className="h-6 w-6" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-gray-600">
                    Question {currentQuestionIndex + 1}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {isCorrect ? 'Correct' : 'Incorrect'}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {currentQuestion.question}
                </h3>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option, index) => {
                const isUserAnswer = userAnswer === index;
                const isCorrectAnswer = index === currentQuestion.correctAnswer;
                let optionStyle = 'border-gray-200 bg-gray-50';
                
                if (isCorrectAnswer) {
                  optionStyle = 'border-green-500 bg-green-50';
                } else if (isUserAnswer && !isCorrectAnswer) {
                  optionStyle = 'border-red-500 bg-red-50';
                }

                return (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border-2 ${optionStyle} transition-colors`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                        isCorrectAnswer
                          ? 'bg-green-500 text-white'
                          : isUserAnswer && !isCorrectAnswer
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <div className="flex-1">
                        <span className={`font-medium ${
                          isCorrectAnswer
                            ? 'text-green-900'
                            : isUserAnswer && !isCorrectAnswer
                            ? 'text-red-900'
                            : 'text-gray-700'
                        }`}>
                          {option}
                        </span>
                        {isCorrectAnswer && (
                          <span className="ml-2 text-green-700 font-semibold text-sm">
                            ✓ Correct Answer
                          </span>
                        )}
                        {isUserAnswer && !isCorrectAnswer && (
                          <span className="ml-2 text-red-700 font-semibold text-sm">
                            ✗ Your Answer
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Explanation */}
            {currentQuestion.explanation && (
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Explanation:</h4>
                <p className="text-blue-800">{currentQuestion.explanation}</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-white border-2 border-gray-300 hover:bg-gray-50 text-gray-700"
          >
            <ChevronLeft className="h-5 w-5" />
            Previous
          </button>

          <span className="text-sm text-gray-600">
            {currentQuestionIndex + 1} / {totalQuestions}
          </span>

          <button
            onClick={handleNext}
            disabled={currentQuestionIndex === totalQuestions - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-teal-500 hover:bg-teal-600 text-white"
          >
            Next
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizAnswersModal;

