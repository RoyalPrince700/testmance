import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { coursesAPI } from '../utils/api';
import { BookOpen, Star, Users, Search, Filter } from 'lucide-react';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState(['All']);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const response = await coursesAPI.getAll();
        setCourses(response.data);
        setFilteredCourses(response.data);

        // Extract unique categories
        const uniqueCategories = ['All', ...new Set(response.data.map(course => course.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Failed to load courses:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  useEffect(() => {
    let filtered = courses;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    setFilteredCourses(filtered);
  }, [courses, searchTerm, selectedCategory]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-2">Explore Courses</h1>
        <p className="text-white/70 text-lg">
          Discover and enroll in courses to boost your knowledge and earn gems!
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40 appearance-none"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Course Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
          <BookOpen className="h-8 w-8 text-blue-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">{courses.length}</p>
          <p className="text-white/70">Total Courses</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
          <Users className="h-8 w-8 text-green-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">
            {courses.reduce((sum, course) => sum + (course.totalStudents || 0), 0)}
          </p>
          <p className="text-white/70">Total Students</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
          <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">
            {courses.length > 0 ? (courses.reduce((sum, course) => sum + (course.averageRating || 0), 0) / courses.length).toFixed(1) : 0}
          </p>
          <p className="text-white/70">Avg Rating</p>
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length === 0 ? (
        <div className="text-center py-12">
          <BookOpen className="h-16 w-16 text-white/30 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No courses found</h3>
          <p className="text-white/70">
            {searchTerm || selectedCategory !== 'All'
              ? 'Try adjusting your search or filter criteria'
              : 'No courses are available at the moment'
            }
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Link
              key={course._id}
              to={`/courses/${course._id}`}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 card-hover block"
            >
              <div className="space-y-4">
                {/* Course Image/Placeholder */}
                <div className="w-full h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-white/60" />
                </div>

                {/* Course Info */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                  <p className="text-white/70 text-sm mb-3 line-clamp-2">{course.description}</p>

                  {/* Course Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                      {course.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white/70 text-sm">
                        {course.averageRating?.toFixed(1) || 'N/A'}
                      </span>
                    </div>
                  </div>

                  {/* Course Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-white/70">
                      <Users className="h-4 w-4" />
                      <span>{course.totalStudents || 0} students</span>
                    </div>
                    <div className="flex items-center space-x-1 text-white/70">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.totalChapters || 0} chapters</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
