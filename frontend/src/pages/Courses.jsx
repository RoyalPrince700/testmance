import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { coursesAPI } from '../utils/api';
import { BookOpen, Star, Users, Search, Filter, CheckCircle, PlusCircle } from 'lucide-react';

const Courses = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [enrolledCourseIds, setEnrolledCourseIds] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState(['All']);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const promises = [coursesAPI.getAll()];
        
        // Only fetch enrolled courses if user is authenticated
        if (isAuthenticated) {
          promises.push(coursesAPI.getEnrolled().catch(() => ({ data: [] })));
        } else {
          promises.push(Promise.resolve({ data: [] }));
        }
        
        const [coursesResponse, enrolledResponse] = await Promise.all(promises);
        
        setCourses(coursesResponse.data);
        setFilteredCourses(coursesResponse.data);

        // Extract unique categories
        const uniqueCategories = ['All', ...new Set(coursesResponse.data.map(course => course.category))];
        setCategories(uniqueCategories);

        // Set enrolled course IDs (only if authenticated)
        if (isAuthenticated && enrolledResponse.data) {
          const enrolledIds = new Set(enrolledResponse.data.map(course => course._id));
          setEnrolledCourseIds(enrolledIds);
        }
      } catch (error) {
        console.error('Failed to load courses:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, [isAuthenticated]);

  useEffect(() => {
    let filtered = courses;

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(course =>
        (course.code && course.code.toLowerCase().includes(searchLower)) ||
        (course.title && course.title.toLowerCase().includes(searchLower)) ||
        (course.description && course.description.toLowerCase().includes(searchLower))
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    setFilteredCourses(filtered);
  }, [courses, searchTerm, selectedCategory]);

  const handleEnroll = async (courseId, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Check if user is authenticated
    if (!isAuthenticated) {
      // Redirect to login page, with return URL to come back to courses
      navigate('/login', { state: { from: '/courses', message: 'Please login or register to enroll in courses' } });
      return;
    }
    
    if (enrolling.has(courseId)) return;

    try {
      setEnrolling(prev => new Set(prev).add(courseId));
      await coursesAPI.enroll(courseId);
      setEnrolledCourseIds(prev => new Set(prev).add(courseId));
      
      // Refresh courses to get updated student count
      const coursesResponse = await coursesAPI.getAll();
      setCourses(coursesResponse.data);
      setFilteredCourses(coursesResponse.data);
    } catch (error) {
      console.error('Failed to enroll:', error);
      alert(error.message || 'Failed to enroll in course');
    } finally {
      setEnrolling(prev => {
        const newSet = new Set(prev);
        newSet.delete(courseId);
        return newSet;
      });
    }
  };

  const handleUnenroll = async (courseId, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (enrolling.has(courseId)) return;

    try {
      setEnrolling(prev => new Set(prev).add(courseId));
      await coursesAPI.unenroll(courseId);
      setEnrolledCourseIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(courseId);
        return newSet;
      });
      
      // Refresh courses to get updated student count
      const coursesResponse = await coursesAPI.getAll();
      setCourses(coursesResponse.data);
      setFilteredCourses(coursesResponse.data);
    } catch (error) {
      console.error('Failed to unenroll:', error);
      alert(error.message || 'Failed to unenroll from course');
    } finally {
      setEnrolling(prev => {
        const newSet = new Set(prev);
        newSet.delete(courseId);
        return newSet;
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Explore Courses</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-1">
          Discover and enroll in courses to boost your knowledge and earn gems!
        </p>
        <p className="text-gray-500 dark:text-gray-500 text-sm">
          {courses.length} {courses.length === 1 ? 'course' : 'courses'} available
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-800"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-800 appearance-none min-w-[150px]"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-white dark:bg-gray-700">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length === 0 ? (
        <div className="text-center py-12">
          <BookOpen className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No courses found</h3>
          <p className="text-gray-600 dark:text-gray-400">
            {searchTerm || selectedCategory !== 'All'
              ? 'Try adjusting your search or filter criteria'
              : 'No courses are available at the moment'
            }
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const isEnrolled = enrolledCourseIds.has(course._id);
            const isEnrolling = enrolling.has(course._id);

            return (
              <div
                key={course._id}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-all relative group"
              >
                <Link
                  to={`/courses/${course._id}`}
                  className="block"
                >
                  {/* Course Info */}
                  <div>
                    <div className="mb-2">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{course.code || 'N/A'}</h2>
                      <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 truncate" title={course.title}>{course.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{course.description}</p>

                    {/* Course Meta */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 px-2 py-1 rounded">
                        {course.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                          {course.averageRating?.toFixed(1) || 'N/A'}
                        </span>
                      </div>
                    </div>

                    {/* Course Stats */}
                    <div className="flex items-center justify-between text-sm mb-4 border-t dark:border-gray-700 pt-4">
                      <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                        <Users className="h-4 w-4" />
                        <span>{course.totalStudents || 0} enrolled</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                        <BookOpen className="h-4 w-4" />
                        <span>{course.totalChapters || 0} chapters</span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Enrollment Button */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {isAuthenticated && isEnrolled ? (
                    <button
                      onClick={(e) => handleUnenroll(course._id, e)}
                      disabled={isEnrolling}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 rounded-lg hover:bg-teal-200 dark:hover:bg-teal-900/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span>{isEnrolling ? 'Unenrolling...' : 'Enrolled'}</span>
                    </button>
                  ) : (
                    <button
                      onClick={(e) => handleEnroll(course._id, e)}
                      disabled={isEnrolling}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-sm"
                    >
                      <PlusCircle className="h-4 w-4" />
                      <span>{isEnrolling ? 'Enrolling...' : isAuthenticated ? 'Enroll Now' : 'Enroll (Login Required)'}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Courses;
