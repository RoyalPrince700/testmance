import { useState, useEffect } from 'react';
import { resultsAPI, coursesAPI } from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';
import { Trophy } from 'lucide-react';

const ResultsPage = () => {
  const { user } = useAuth();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [resultsResponse, enrolledResponse] = await Promise.all([
          resultsAPI.getAll(),
          coursesAPI.getEnrolled()
        ]);
        setResults(resultsResponse.data || []);
        setEnrolledCourses(enrolledResponse.data || []);
      } catch (error) {
        console.error('Error loading data:', error);
        setResults([]);
        setEnrolledCourses([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getGradeColor = (grade) => {
    switch (grade) {
      case 'A': return 'text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-600';
      case 'B': return 'text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-600';
      case 'C': return 'text-yellow-700 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-600';
      case 'D': return 'text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 border-orange-300 dark:border-orange-600';
      case 'E': return 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-600';
      case 'F': return 'text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-600';
      default: return 'text-gray-700 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600';
    }
  };

  const combinedResults = enrolledCourses.map(course => {
    const result = results.find(r => r.course?._id === course._id);
    return {
      _id: result?._id || `temp-${course._id}`,
      course: {
        _id: course._id,
        title: course.title,
        code: course.code
      },
      caScore: result?.caScore || 0,
      examScore: result?.examScore || 0,
      totalScore: result?.totalScore || 0,
      grade: result?.grade || 'F',
      percentage: result?.percentage || 0,
      caCompletedAt: result?.caCompletedAt,
      examCompletedAt: result?.examCompletedAt,
      isComplete: result?.isComplete || false
    };
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading your results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">My Results</h1>
          <p className="text-gray-600 dark:text-gray-400">Continuous Assessment and Final Exam grades</p>
        </div>

        {/* Results List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-8 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Course
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    CA Score (30)
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Exam Score (70)
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Total (100)
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Grade
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {combinedResults.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                      <Trophy className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No enrolled courses found.</p>
                      <p className="text-sm">Enroll in courses to see your results here.</p>
                    </td>
                  </tr>
                ) : (
                  combinedResults.map((result) => (
                    <tr key={result._id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-900 dark:text-white">{result.course.code}</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{result.course.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className={`text-sm font-semibold ${result.caCompletedAt ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}>
                          {result.caScore}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className={`text-sm font-semibold ${result.examCompletedAt ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}>
                          {result.examScore}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                          {result.totalScore}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full border-2 font-bold ${getGradeColor(result.grade)}`}>
                          {result.grade}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;