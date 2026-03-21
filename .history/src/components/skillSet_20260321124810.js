import React from 'react';

// Using devicons CDN for logos — no extra packages needed
const skills = [
  { name: 'React / React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
];

function SkillCard({ name, icon }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-default">
      <img src={icon} alt={name} className="w-14 h-14 object-contain" />
      <span className="text-sm font-semibold text-gray-700 text-center">{name}</span>
    </div>
  );
}

function SkillSet() {
  return (
    <div className="w-full px-16 py-12">
      {/* Section header */}
      <div className="text-center mb-12">
        <p className="text-sm font-bold tracking-widest text-[#2dd4bf] mb-2">- MY SKILLS</p>
        <h2 className="text-4xl font-bold italic text-[#2dd4bf] mb-3">Tech Stack</h2>
        <p className="text-xl text-gray-800 font-medium">Powering my day-to-day development work</p>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-5 gap-5 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}

export default SkillSet;