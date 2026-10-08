import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { coursesAPI } from '../../utils/api';
import { quizCoursePath } from '../../utils/slugs';
import { ArrowRight, BookOpen, Target } from 'lucide-react';
import Reveal from '../../components/Reveal';

const QuizHub = () => {
  const { user } = useAuth();
  const [availableCourses, setAvailableCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const enrolledCoursesResponse = await coursesAPI.getEnrolled();
        setAvailableCourses(enrolledCoursesResponse.data || []);
      } catch (error) {
        console.error('Failed to load enrolled courses:', error);
        setAvailableCourses([]);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      loadCourses();
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" />
      </div>
    );
  }

  return (
    <div className="bg-canvas pb-20 text-ink">
      <header className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-16">
        <p className="rise-in text-sm font-medium text-accent">Quiz hub</p>
        <h1
          className="rise-in mt-3 max-w-2xl text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]"
          style={{ animationDelay: '70ms' }}
        >
          Practice the chapters you are enrolled in.
        </h1>
        <p className="rise-in mt-4 max-w-xl text-lg leading-relaxed text-graphite" style={{ animationDelay: '140ms' }}>
          Open a course, take the chapter quizzes, and earn gems as the answers land.
        </p>
      </header>

      <section className="mx-auto max-w-6xl px-5 pt-12 md:px-8">
        {availableCourses.length === 0 ? (
          <div className="rounded-3xl border border-line bg-surface px-6 py-16 text-center">
            <Target className="mx-auto h-8 w-8 text-slate" strokeWidth={1.75} />
            <h2 className="mt-4 text-lg font-medium tracking-tight text-ink">No enrolled courses</h2>
            <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-slate">
              Enroll in a course first. Its quizzes show up here.
            </p>
            <Link to="/courses" className="btn-primary group mt-6">
              Browse courses
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {availableCourses.map((course, index) => (
              <Reveal key={course._id} as="article" className="flex flex-col rounded-3xl border border-line bg-surface p-6" delay={(index % 3) * 70}>
                <h2 className="text-xl font-medium tracking-tight text-ink">{course.code || 'Course'}</h2>
                <p className="mt-1 truncate text-base text-graphite" title={course.title}>{course.title}</p>
                {course.description && (
                  <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-slate">{course.description}</p>
                )}
                <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-slate">
                  <BookOpen className="h-4 w-4" strokeWidth={1.75} />
                  Chapter quizzes
                </p>
                <Link to={quizCoursePath(course)} className="btn-primary group mt-6 w-full">
                  Take quizzes
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default QuizHub;
