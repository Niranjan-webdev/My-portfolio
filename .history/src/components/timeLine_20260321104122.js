import React from 'react';

// const timelineData = [
//   {
//     date: '02.2026 – Present',
//     title: 'Fullstack Software Developer',
//     company: 'FJD Information Technologies AG',
//     companyInitials: 'FJD',
//     bullets: [
//       'Development, continuous improvement, and structural co-design of scalable web applications with a focus on frontend architecture (React, TypeScript).',
//       'Design, implementation, and maintenance of backend services and REST APIs with strong emphasis on clear interfaces, maintainability, and security.',
//       'Close collaboration with engineering, UI/UX, and DevOps in an agile Scrum environment, including code reviews and active shared responsibility for code quality and application stability.',
//     ],
//     side: 'left',
//   },
//   {
//     date: '03.2024 – 01.2026',
//     title: 'Fullstack Software Developer',
//     company: 'DealerCenter Digital GmbH',
//     companyInitials: 'DC',
//     bullets: [
//       'Development and continuous improvement of frontend-oriented applications and UI workflows using React, TypeScript, and Node.js.',
//       'Design and operation of scalable backend systems with a focus on automated ETL pipelines in the vehicle data domain, including data ingestion, transformation, and normalization.',
//       'Automation using Puppeteer and Jenkins, containerization with Docker, and structured data processing with XML and JSON.',
//     ],
//     side: 'right',
//   },
//   {
//     date: '06.2022 – 02.2024',
//     title: 'Junior Frontend Developer',
//     company: 'Webcraft Studio',
//     companyInitials: 'WS',
//     bullets: [
//       'Built and maintained responsive web interfaces using React and SCSS across multiple client projects.',
//       'Collaborated with designers to implement pixel-perfect UI components and ensure cross-browser compatibility.',
//       'Contributed to internal tooling and documentation improvements that reduced onboarding time for new developers.',
//     ],
//     side: 'left',
//   },
// ];

function TimelineCard({ item }) {
  const isLeft = item.side === 'left';

  const Card = (
    <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Header: title + date badge */}
      <div className="flex items-start justify-between gap-3 flex-wrap mb-4">
        <h3 className="text-[#2dd4bf] font-bold text-lg leading-snug m-0">
          {item.title}
        </h3>
        <span className="bg-gray-100 text-gray-500 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap shrink-0">
          {item.date}
        </span>
      </div>

      {/* Company */}
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-8 h-8 rounded-lg bg-[#1e3a5f] text-white text-[0.65rem] font-bold flex items-center justify-center tracking-wide shrink-0">
          {item.companyInitials}
        </div>
        <span className="text-sm font-bold text-gray-900">{item.company}</span>
      </div>

      {/* Bullets */}
      <ul className="flex flex-col gap-2.5 p-0 m-0 list-none">
        {item.bullets.map((b, i) => (
          <li key={i} className="flex gap-2.5 text-sm text-gray-600 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] shrink-0 mt-[7px]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="grid grid-cols-[1fr_48px_1fr] items-start relative">
      {isLeft ? (
        <>
          <div className="pr-6">{Card}</div>
          <div className="flex justify-center pt-6 z-10">
            <div className="w-3.5 h-3.5 rounded-full bg-[#2dd4bf] border-[3px] border-white ring-2 ring-[#2dd4bf] shrink-0" />
          </div>
          <div />
        </>
      ) : (
        <>
          <div />
          <div className="flex justify-center pt-6 z-10">
            <div className="w-3.5 h-3.5 rounded-full bg-[#2dd4bf] border-[3px] border-white ring-2 ring-[#2dd4bf] shrink-0" />
          </div>
          <div className="pl-6">{Card}</div>
        </>
      )}
    </div>
  );
}

function TimeLine() {
  return (
    <div className="relative w-full py-12">
      {/* Central vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

      <div className="flex flex-col gap-16 relative">
        {timelineData.map((item, i) => (
          <TimelineCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default TimeLine;