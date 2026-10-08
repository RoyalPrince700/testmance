import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gem } from 'lucide-react';
import Reveal from '../../components/Reveal';

const names = ['Adaeze', 'Tunde', 'Fatima', 'Chinedu', 'Aisha', 'Kolade', 'Ngozi', 'Ibrahim'];

const campuses = [
  {
    shortName: 'UNILORIN',
    name: 'University of Ilorin',
    city: 'Ilorin',
    state: 'Kwara',
    faculty: 'Communication and Information Sciences',
    department: 'Computer Science',
    courses: ['GNS 311', 'GNS 211', 'GST 111', 'COS 101', 'BIO 101', 'ENT 211'],
  },
  {
    shortName: 'UNILAG',
    name: 'University of Lagos',
    city: 'Lagos',
    state: 'Lagos',
    faculty: 'Science',
    department: 'Computer Science',
    courses: [],
  },
  {
    shortName: 'UI',
    name: 'University of Ibadan',
    city: 'Ibadan',
    state: 'Oyo',
    faculty: 'Arts',
    department: 'English',
    courses: [],
  },
  {
    shortName: 'OAU',
    name: 'Obafemi Awolowo University',
    city: 'Ile-Ife',
    state: 'Osun',
    faculty: 'Technology',
    department: 'Computer Science and Engineering',
    courses: [],
  },
  {
    shortName: 'ABU',
    name: 'Ahmadu Bello University',
    city: 'Zaria',
    state: 'Kaduna',
    faculty: 'Life Sciences',
    department: 'Biology',
    courses: [],
  },
  {
    shortName: 'UNN',
    name: 'University of Nigeria',
    city: 'Nsukka',
    state: 'Enugu',
    faculty: 'Social Sciences',
    department: 'Economics',
    courses: [],
  },
  {
    shortName: 'UNIBEN',
    name: 'University of Benin',
    city: 'Benin City',
    state: 'Edo',
    faculty: 'Management Sciences',
    department: 'Accounting',
    courses: [],
  },
  {
    shortName: 'FUTA',
    name: 'Federal University of Technology, Akure',
    city: 'Akure',
    state: 'Ondo',
    faculty: 'Engineering',
    department: 'Civil Engineering',
    courses: [],
  },
];

const scopes = [
  { id: 'university', label: 'University' },
  { id: 'faculty', label: 'Faculty' },
  { id: 'department', label: 'Department' },
];

const rowsFor = (campusIndex, scope) => {
  const scopeShift = scope === 'university' ? 0 : scope === 'faculty' ? 2 : 5;
  const base = 980 - campusIndex * 28 - (scope === 'department' ? 120 : scope === 'faculty' ? 60 : 0);
  return [0, 1, 2, 3].map((index) => ({
    name: names[(campusIndex + scopeShift + index) % names.length],
    gems: base - index * 47,
    level: `${100 + ((campusIndex + index) % 4) * 100}`,
  }));
};

const Universities = () => {
  const [campusIndex, setCampusIndex] = useState(0);
  const [scope, setScope] = useState('university');
  const campus = campuses[campusIndex];
  const rows = rowsFor(campusIndex, scope);

  const scopeLine = scope === 'university'
    ? `Ranked by gems at ${campus.name}.`
    : scope === 'faculty'
      ? `Narrowed to ${campus.faculty}.`
      : `Narrowed to ${campus.department}.`;

  return (
    <section className="border-y border-line bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium text-accent">Campuses</p>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
            Built for more than one university.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-graphite">
            Your profile keeps the campus, faculty, department, and level. The leaderboard follows that split, so you are ranked with students at your own school.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Universities">
          {campuses.map((item, index) => {
            const selected = index === campusIndex;
            return (
              <button
                key={item.shortName}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setCampusIndex(index)}
                className={`h-9 rounded-full px-4 text-sm font-medium transition-colors ${
                  selected
                    ? 'bg-accent-fill text-on-accent'
                    : 'border border-line bg-canvas text-graphite hover:text-ink'
                }`}
              >
                {item.shortName}
              </button>
            );
          })}
        </div>

        <Reveal className="mt-6">
          <div className="grid gap-8 rounded-3xl border border-line bg-canvas p-5 sm:p-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
            <div>
              <p className="text-sm font-medium text-accent">{campus.shortName}</p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight text-ink">{campus.name}</h3>
              <p className="mt-2 text-[15px] text-slate">{campus.city}, {campus.state}</p>

              {campus.courses.length > 0 ? (
                <>
                  <p className="mt-6 text-sm font-medium text-ink">Courses on the library</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {campus.courses.map((code) => (
                      <li key={code} className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-graphite">
                        {code}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="mt-6 text-[15px] leading-relaxed text-slate">
                  Set {campus.shortName} on your profile and the board ranks you with that campus. Published courses today use University of Ilorin codes. The path is the same: chapters, quizzes, CA, and the exam.
                </p>
              )}

              <dl className="mt-6 space-y-3 border-t border-line pt-6 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="shrink-0 text-slate">Faculty</dt>
                  <dd className="min-w-0 text-right font-medium text-ink">{campus.faculty}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="shrink-0 text-slate">Department</dt>
                  <dd className="min-w-0 text-right font-medium text-ink">{campus.department}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="shrink-0 text-slate">Level</dt>
                  <dd className="font-medium text-ink">100 to 600</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                Faculty and department names show how a board narrows. Yours come from the profile you save.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Leaderboard scope">
                {scopes.map((item) => {
                  const selected = scope === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setScope(item.id)}
                      className={`h-9 rounded-full px-4 text-sm font-medium transition-colors ${
                        selected
                          ? 'bg-accent-soft text-accent'
                          : 'text-graphite hover:text-ink'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
              <p className="mt-4 text-sm text-slate">{scopeLine}</p>
              <ol className="mt-4 divide-y divide-line rounded-2xl border border-line bg-surface" aria-live="polite">
                {rows.map((row, index) => (
                  <li key={`${campus.shortName}-${scope}-${row.name}`} className="flex items-center gap-4 px-4 py-3">
                    <span className="w-5 text-sm tabular-nums text-slate">{index + 1}</span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-ink">{row.name}</p>
                      <p className="text-sm text-slate">{row.level} level</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-gem">
                      <Gem className="h-3.5 w-3.5" />
                      {row.gems}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-3 text-sm text-slate">Example board. These names are not live scores.</p>
              <Link to="/leaderboard" className="mt-4 inline-block text-sm font-medium text-accent">
                Open the leaderboard
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Universities;
