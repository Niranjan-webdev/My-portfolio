import React from 'react';
import SkillCard from "./skillCard"

// Using devicons CDN for logos — no extra packages needed
const skills = [
  { name: 'React / React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
];



function SkillSet() {
    return (
      <div className="w-full px-6 md:px-16 py-12">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-lg font-[800] tracking-widest text-[#2eb89c] mb-2">- MY SKILLS</p>
          <h2 className="text-4xl font-bold italic text-[#2eb89c]">Tech Stack</h2>
          <p className="text-2xl text-gray-800 font-[500]">Powering my day-to-day development work</p>
        </div>
  
        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    );
  }

export default SkillSet;