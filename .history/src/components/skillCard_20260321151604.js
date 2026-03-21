import React from 'react'

function SkillCard({ name, icon }) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 bg-[#f8fafc] shadow-xl backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-default">
        <img src={icon} alt={name} className="w-14 h-14 object-contain" />
        <span className="text-sm font-semibold text-gray-700 text-center">{name}</span>
      </div>
    );
  }

export default SkillCard
