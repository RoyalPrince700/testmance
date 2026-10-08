import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { resultsAPI, coursesAPI } from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';
import { ArrowRight, Trophy } from 'lucide-react';
import Reveal from '../../components/Reveal';
import testmancerLogo from '../../assets/testmancer-logo.png';

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
      grade: result?.grade,
      caCompletedAt: result?.caCompletedAt,
      examCompletedAt: result?.examCompletedAt,
      isComplete: result?.isComplete || false
    };
  });

  const issued = new Date().toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const universityName = user?.university?.name || (typeof user?.university === 'string' ? user.university : null);
  const details = [
    { label: 'Student', value: user?.username },
    { label: 'Level', value: user?.academicLevel ? `${user.academicLevel} level` : null },
    { label: 'University', value: universityName },
    { label: 'Department', value: user?.department }
  ].filter((item) => item.value);

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
        <p className="rise-in text-sm font-medium text-accent">Results</p>
        <h1
          className="rise-in mt-3 max-w-2xl text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]"
          style={{ animationDelay: '70ms' }}
        >
          Your statement of results.
        </h1>
        <p className="rise-in mt-4 max-w-xl text-lg leading-relaxed text-graphite" style={{ animationDelay: '140ms' }}>
          Continuous assessment is 30. The exam is 70. The grade is recorded when both are done.
        </p>
      </header>

      <section className="mx-auto max-w-6xl px-5 pt-12 md:px-8">
        {combinedResults.length === 0 ? (
          <div className="rounded-3xl border border-line bg-surface px-6 py-16 text-center">
            <Trophy className="mx-auto h-8 w-8 text-slate" strokeWidth={1.75} />
            <h2 className="mt-4 text-lg font-medium tracking-tight text-ink">No enrolled courses</h2>
            <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-slate">
              Enroll in a course and the scores show up here after you sit the CA or the exam.
            </p>
            <Link to="/courses" className="btn-primary group mt-6">
              Browse courses
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        ) : (
          <Reveal className="overflow-hidden rounded-3xl border border-line bg-surface">
            <div className="border-b border-line px-5 py-6 md:px-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <img src={testmancerLogo} alt="" className="h-7 w-auto" />
                  <p className="mt-5 text-sm font-medium text-accent">Statement of results</p>
                  <h2 className="mt-1 text-lg font-medium tracking-tight text-ink">
                    Continuous assessment and final exam
                  </h2>
                </div>
                <p className="shrink-0 text-sm text-slate">{issued}</p>
              </div>
              {details.length > 0 && (
                <dl className="mt-6 grid gap-4 border-t border-line pt-4 sm:grid-cols-2 lg:grid-cols-4">
                  {details.map((item) => (
                    <div key={item.label}>
                      <dt className="text-sm text-slate">{item.label}</dt>
                      <dd className="mt-1 text-sm font-medium text-ink">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[40rem] border-collapse text-left">
                <caption className="sr-only">
                  Course results with continuous assessment out of 30, exam out of 70, total out of 100, and grade
                </caption>
                <thead>
                  <tr className="border-b border-line bg-canvas">
                    <th scope="col" className="px-5 py-3 text-sm font-medium text-slate md:px-8">Course</th>
                    <th scope="col" className="px-4 py-3 text-center text-sm font-medium text-slate">
                      CA
                      <span className="mt-0.5 block text-xs font-normal">out of 30</span>
                    </th>
                    <th scope="col" className="px-4 py-3 text-center text-sm font-medium text-slate">
                      Exam
                      <span className="mt-0.5 block text-xs font-normal">out of 70</span>
                    </th>
                    <th scope="col" className="px-4 py-3 text-center text-sm font-medium text-slate">
                      Total
                      <span className="mt-0.5 block text-xs font-normal">out of 100</span>
                    </th>
                    <th scope="col" className="px-5 py-3 text-center text-sm font-medium text-slate md:px-8">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {combinedResults.map((result) => (
                    <tr key={result._id} className="border-b border-line last:border-b-0">
                      <th scope="row" className="px-5 py-4 text-left font-normal md:px-8">
                        <span className="block text-sm font-medium text-ink">{result.course.code}</span>
                        <span className="mt-0.5 block text-sm text-slate">{result.course.title}</span>
                      </th>
                      <td className={`px-4 py-4 text-center text-sm tabular-nums ${result.caCompletedAt ? 'font-medium text-ink' : 'text-slate'}`}>
                        {result.caCompletedAt ? result.caScore : '—'}
                      </td>
                      <td className={`px-4 py-4 text-center text-sm tabular-nums ${result.examCompletedAt ? 'font-medium text-ink' : 'text-slate'}`}>
                        {result.examCompletedAt ? result.examScore : '—'}
                      </td>
                      <td className={`px-4 py-4 text-center text-sm tabular-nums ${(result.caCompletedAt || result.examCompletedAt) ? 'font-medium text-ink' : 'text-slate'}`}>
                        {result.caCompletedAt || result.examCompletedAt ? result.totalScore : '—'}
                      </td>
                      <td className={`px-5 py-4 text-center text-sm tabular-nums md:px-8 ${result.isComplete ? 'font-medium text-accent' : 'text-slate'}`}>
                        {result.isComplete ? result.grade : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="border-t border-line px-5 py-4 text-sm text-slate md:px-8">
              A grade appears when both the CA and the exam for that course are complete.
            </p>
          </Reveal>
        )}
      </section>
    </div>
  );
};

export default ResultsPage;
