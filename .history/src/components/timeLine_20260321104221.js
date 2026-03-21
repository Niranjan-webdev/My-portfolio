import React from 'react';

const timelineData = [
  {
    date: '02.2026 – Present',
    title: 'Fullstack Software Developer',
    company: 'FJD Information Technologies AG',
    companyInitials: 'FJD',
    bullets: [
      'Development, continuous improvement, and structural co-design of scalable web applications with a focus on frontend architecture (React, TypeScript).',
      'Design, implementation, and maintenance of backend services and REST APIs with strong emphasis on clear interfaces, maintainability, and security.',
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

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

  .tl-root {
    font-family: 'DM Sans', sans-serif;
    position: relative;
    width: 100%;
    padding: 48px 0 64px;
    box-sizing: border-box;
  }

  /* Central vertical line */
  .tl-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #d1d5db;
    transform: translateX(-50%);
  }

  .tl-items {
    display: flex;
    flex-direction: column;
    gap: 64px;
    position: relative;
  }

  .tl-item {
    display: grid;
    grid-template-columns: 1fr 48px 1fr;
    align-items: start;
    position: relative;
  }

  /* Dot on the line */
  .tl-dot {
    grid-column: 2;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 24px;
    position: relative;
    z-index: 2;
  }

  .tl-dot-inner {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #2dd4bf;
    border: 3px solid #fff;
    box-shadow: 0 0 0 2px #2dd4bf;
    flex-shrink: 0;
  }

  /* Card base */
  .tl-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 28px 32px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.05);
    transition: box-shadow 0.2s ease;
  }

  .tl-card:hover {
    box-shadow: 0 6px 28px rgba(0,0,0,0.11), 0 2px 6px rgba(0,0,0,0.06);
  }

  /* Left-side card */
  .tl-item.left .tl-card-wrap {
    grid-column: 1;
    padding-right: 24px;
  }
  .tl-item.left .tl-empty {
    grid-column: 3;
  }

  /* Right-side card */
  .tl-item.right .tl-card-wrap {
    grid-column: 3;
    padding-left: 24px;
  }
  .tl-item.right .tl-empty {
    grid-column: 1;
  }

  .tl-card-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }

  .tl-job-title {
    font-size: 1.15rem;
    font-weight: 700;
    color: #2dd4bf;
    margin: 0 0 12px 0;
    line-height: 1.3;
  }

  .tl-date-badge {
    background: #f3f4f6;
    color: #6b7280;
    font-size: 0.8rem;
    font-weight: 500;
    padding: 4px 12px;
    border-radius: 999px;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .tl-company {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 18px;
  }

  .tl-company-logo {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: #1e3a5f;
    color: #fff;
    font-size: 0.65rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.03em;
    flex-shrink: 0;
  }

  .tl-company-name {
    font-size: 0.95rem;
    font-weight: 700;
    color: #111827;
  }

  .tl-bullets {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .tl-bullets li {
    display: flex;
    gap: 10px;
    font-size: 0.875rem;
    color: #374151;
    line-height: 1.6;
  }

  .tl-bullet-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #2dd4bf;
    flex-shrink: 0;
    margin-top: 7px;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .tl-item {
      grid-template-columns: 24px 1fr;
      grid-template-rows: auto;
    }

    .tl-line {
      left: 12px;
    }

    .tl-dot {
      grid-column: 1;
      padding-top: 22px;
    }

    .tl-item.left .tl-card-wrap,
    .tl-item.right .tl-card-wrap {
      grid-column: 2;
      padding-left: 16px;
      padding-right: 0;
    }

    .tl-item.left .tl-empty,
    .tl-item.right .tl-empty {
      display: none;
    }
  }
`;

function TimelineCard({ item }) {
  return (
    <div className={`tl-item ${item.side}`}>
      {item.side === 'left' ? (
        <>
          <div className="tl-card-wrap">
            <div className="tl-card">
              <div className="tl-card-header">
                <h3 className="tl-job-title">{item.title}</h3>
                <span className="tl-date-badge">{item.date}</span>
              </div>
              <div className="tl-company">
                <div className="tl-company-logo">{item.companyInitials}</div>
                <span className="tl-company-name">{item.company}</span>
              </div>
              <ul className="tl-bullets">
                {item.bullets.map((b, i) => (
                  <li key={i}>
                    <span className="tl-bullet-dot" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tl-dot"><div className="tl-dot-inner" /></div>
          <div className="tl-empty" />
        </>
      ) : (
        <>
          <div className="tl-empty" />
          <div className="tl-dot"><div className="tl-dot-inner" /></div>
          <div className="tl-card-wrap">
            <div className="tl-card">
              <div className="tl-card-header">
                <h3 className="tl-job-title">{item.title}</h3>
                <span className="tl-date-badge">{item.date}</span>
              </div>
              <div className="tl-company">
                <div className="tl-company-logo">{item.companyInitials}</div>
                <span className="tl-company-name">{item.company}</span>
              </div>
              <ul className="tl-bullets">
                {item.bullets.map((b, i) => (
                  <li key={i}>
                    <span className="tl-bullet-dot" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function TimeLine() {
  return (
    <>
      <style>{styles}</style>
      <div className="tl-root">
        <div className="tl-line" />
        <div className="tl-items">
          {timelineData.map((item, i) => (
            <TimelineCard key={i} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TimeLine;