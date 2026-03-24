import React from 'react';
import TimelineCard from './TimelineCard';

const timelineData = [
  {
    date: '02.2026 – Present',
    title: 'Associate Engineer',
    company: 'Syneos Health',
    companyInitials: 'SH',
    bullets: [
      'Development, continuous improvement, and structural co-design of scalable web applications with a focus on frontend architecture (React, TypeScript).',
      'Invloved in product development that renders dashboards seamlesly with the json passed to it.',
      'Close collaboration with engineering, UI/UX, and DevOps in an agile Scrum environment, including code reviews and active shared responsibility for code quality and application stability.',
    ],
    side: 'left',
  },
  {
    date: '03.2024 – 01.2026',
    title: 'Fullstack Software Developer',
    company: 'DealerCenter Digital GmbH',
    companyInitials: 'DC',
    bullets: [
      'Development and continuous improvement of frontend-oriented applications and UI workflows using React, TypeScript, and Node.js.',
      'Design and operation of scalable backend systems with a focus on automated ETL pipelines in the vehicle data domain, including data ingestion, transformation, and normalization.',
      'Automation using Puppeteer and Jenkins, containerization with Docker, and structured data processing with XML and JSON.',
    ],
    side: 'right',
  },
  {
    date: '06.2022 – 02.2024',
    title: 'Junior Frontend Developer',
    company: 'Webcraft Studio',
    companyInitials: 'WS',
    bullets: [
      'Built and maintained responsive web interfaces using React and SCSS across multiple client projects.',
      'Collaborated with designers to implement pixel-perfect UI components and ensure cross-browser compatibility.',
      'Contributed to internal tooling and documentation improvements that reduced onboarding time for new developers.',
    ],
    side: 'left',
  },
];

function TimeLine() {
  return (
    <div className="relative w-full py-12 mt-[3rem] px-[6rem]">
      {/* Central vertical line */}
      <div className="absolute left-1/2  top-0 bottom-0 w-[2px] bg-[#2eb89c] -translate-x-1/2" />

      <div className="flex flex-col gap-16 relative">
        {timelineData.map((item, i) => (
          <TimelineCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default TimeLine;