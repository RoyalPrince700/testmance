import React from 'react';

const StatItem = ({ number, label }) => (
  <div className="text-center p-2 sm:p-4 md:p-6">
    <div className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-teal-400 mb-1 sm:mb-2">
      {number}
    </div>
    <div className="text-sm sm:text-base md:text-lg font-medium text-purple-100 opacity-90">{label}</div>
  </div>
);

const Stats = () => {
  const stats = [
    { number: '1000+', label: 'Happy Students' },
    { number: '50+', label: 'Courses Available' },
    { number: '5000+', label: 'Quizzes Taken' },
    { number: '10+', label: 'Partners ' }
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 divide-x-0 md:divide-x divide-gray-800">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
