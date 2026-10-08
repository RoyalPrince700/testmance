import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { coursesAPI } from '../utils/api';
import { coursePath } from '../utils/slugs';
import { BookOpen, Star, Users, Search, CheckCircle } from 'lucide-react';
import Reveal from '../components/Reveal';
import Footer from './HomeSections/Footer';

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

        if (isAuthenticated) {
          promises.push(coursesAPI.getEnrolled().catch(() => ({ data: [] })));
        } else {
          promises.push(Promise.resolve({ data: [] }));
        }

        const [coursesResponse, enrolledResponse] = await Promise.all(promises);

        setCourses(coursesResponse.data);
        setFilteredCourses(coursesResponse.data);

        const uniqueCategories = ['All', ...new Set(coursesResponse.data.map(course => course.category))];
        setCategories(uniqueCategories);

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

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(course =>
        (course.code && course.code.toLowerCase().includes(searchLower)) ||
        (course.title && course.title.toLowerCase().includes(searchLower)) ||
        (course.description && course.description.toLowerCase().includes(searchLower))
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    setFilteredCourses(filtered);
  }, [courses, searchTerm, selectedCategory]);

  const handleEnroll = async (courseId, e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/courses', message: 'Please login or register to enroll in courses' } });
      return;
    }

    if (enrolling.has(courseId)) return;

    try {
      setEnrolling(prev => new Set(prev).add(courseId));
      await coursesAPI.enroll(courseId);
      setEnrolledCourseIds(prev => new Set(prev).add(courseId));

      const coursesResponse = await coursesAPI.getAll();
      setCourses(coursesResponse.data);
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

      const coursesResponse = await coursesAPI.getAll();
      setCourses(coursesResponse.data);
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
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" />
      </div>
    );
  }

  return (
    <div className="bg-canvas pt-10 md:pt-16">
      <div className="mx-auto mb-16 max-w-6xl px-5 md:mb-24 md:px-8">
        <p className="rise-in text-sm font-medium text-accent">Courses</p>
        <h1 className="rise-in mt-3 max-w-2xl text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]" style={{ animationDelay: '70ms' }}>
          Pick a subject and enroll.
        </h1>
        <p className="rise-in mt-4 max-w-xl text-lg leading-relaxed text-graphite" style={{ animationDelay: '140ms' }}>
          {courses.length} {courses.length === 1 ? 'course' : 'courses'} listed here. Open one, work through the chapters, and track how far you have gone.
        </p>

        <div className="rise-in mt-8 space-y-4" style={{ animationDelay: '210ms' }}>
          <div className="relative max-w-xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
            <input
              type="search"
              placeholder="Search by code or title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-11 w-full rounded-full border border-line bg-surface pl-11 pr-4 text-sm text-ink placeholder:text-slate focus:border-accent focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {categories.map((category) => {
              const selected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={selected}
                  className={`h-9 rounded-full px-4 text-sm font-medium transition-colors ${
                    selected
                      ? 'bg-accent-fill text-on-accent'
                      : 'border border-line bg-surface text-graphite hover:text-ink'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="mt-16 border-t border-line py-16 text-center">
            <BookOpen className="mx-auto h-8 w-8 text-slate" strokeWidth={1.75} />
            <h2 className="mt-4 text-lg font-medium tracking-tight text-ink">No courses found</h2>
            <p className="mt-2 text-[15px] text-slate">
              {searchTerm || selectedCategory !== 'All'
                ? 'Try another search or category.'
                : 'No courses are available yet.'}
            </p>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course, index) => {
              const isEnrolled = enrolledCourseIds.has(course._id);
              const isEnrolling = enrolling.has(course._id);

              return (
                <Reveal key={course._id} as="article" className="flex flex-col rounded-3xl border border-line bg-surface p-6" delay={(index % 3) * 70}>
                  <Link to={coursePath(course)} className="block flex-1">
                    <h2 className="text-xl font-medium tracking-tight text-ink">{course.code || 'Course'}</h2>
                    <h3 className="mt-1 truncate text-base text-graphite" title={course.title}>{course.title}</h3>
                    <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-slate">{course.description}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                        {course.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-slate">
                        <Star className="h-3.5 w-3.5" strokeWidth={1.75} />
                        {typeof course.averageRating === 'number' ? course.averageRating.toFixed(1) : 'N/A'}
                      </span>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-line pt-4 text-sm text-slate">
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="h-4 w-4" strokeWidth={1.75} />
                        {course.totalStudents || 0} enrolled
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <BookOpen className="h-4 w-4" strokeWidth={1.75} />
                        {course.totalChapters || 0} chapters
                      </span>
                    </div>
                  </Link>

                  <div className="mt-4">
                    {isAuthenticated && isEnrolled ? (
                      <button
                        type="button"
                        onClick={(e) => handleUnenroll(course._id, e)}
                        disabled={isEnrolling}
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-accent-soft text-sm font-medium text-accent transition-transform duration-150 hover:bg-canvas disabled:cursor-not-allowed disabled:opacity-50 active:translate-y-px"
                      >
                        <CheckCircle className="h-4 w-4" />
                        {isEnrolling ? 'Unenrolling...' : 'Enrolled'}
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => handleEnroll(course._id, e)}
                        disabled={isEnrolling}
                        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isEnrolling ? 'Enrolling...' : isAuthenticated ? 'Enroll' : 'Sign in to enroll'}
                      </button>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
