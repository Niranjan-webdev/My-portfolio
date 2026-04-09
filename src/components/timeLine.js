import React from 'react';
import TimelineCard from './TimelineCard';
import useWindowSize from '../hooks/useWindowSize';

const timelineData = [
  {
    date: '03.2023 – Present',
    title: 'Associate Engineer',
    company: 'Syneos Health',
    companyInitials: 'SH',
    bullets: [
      'Revamped and optimized the codebase of a live production application, improving performance, readability, and long-term maintainability while minimizing regression issues.',
      'Refactored and streamlined existing dashboard components and business logic, improving overall application performance, reducing complexity, and making the codebase easier to maintain and extend.'
    ],
    side: 'left',
  },
  {
    date: '08.2022 – 02.2023',
    title: 'Associate Developer Trainee',
    company: 'Syneos Health',
    companyInitials: 'SH',
   bullets: [
  'Built a JSON-driven dashboard builder enabling non-technical users to create real-time dashboards independently.',
  'Developed reusable React chart components with Apache ECharts, improving efficiency and standardizing visualizations.',
   'Integrated third-party libraries to enhance dashboard interactivity, performance, and overall user experience.'
],
    side: 'right',
  },
  {
    date: '09.2021 – 11.2021',
    title: 'UI Developer Intern',
    company: 'Alchem Digitals',
    companyInitials: 'AD',
    bullets: [
      'interactive Built a strong foundation in frontend development by working with HTML, CSS, JavaScript, and React.js to develop interactive and responsive web interfaces.',
      'Actively contributed to webpage development through hands-on practice projects, including blog-style applications, improving proficiency in implementing basic UI designs and component-based layouts.',
      
    ],
    side: 'left',
  },
];

function TimeLine() {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  // Mobile: plain stacked cards, no timeline
  if (isMobile) {
    return (
      <div className="w-full py-8 px-6 flex flex-col gap-6">
        {timelineData.map((item, i) => (
          <TimelineCard key={i} item={item} isMobile={isMobile} />
        ))}
      </div>
    );
  }

  // Desktop: untouched
  return (
    <div className="relative w-full py-12 mt-[3rem] px-[6rem]">
      {/* Central vertical line */}
      <div className="absolute left-1/2  top-0 bottom-0 w-[2px] bg-[#2eb89c] -translate-x-1/2" />

      <div className="flex flex-col gap-16 relative">
        {timelineData.map((item, i) => (
          <TimelineCard key={i} item={item} isMobile={isMobile} />
        ))}
      </div>
    </div>
  );
}

export default TimeLine;