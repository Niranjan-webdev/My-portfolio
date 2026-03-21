import React from 'react'

function SkillCard({ name, icon }) {
    return (
      <div className="group flex flex-col items-center justify-center gap-4 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default
                      hover:bg-gradient-to-br hover:from-[#2dd4bf] hover:to-[#0d9488]">
        {/* Icon wrapper — white circle on hover */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center
                        group-hover:bg-white transition-colors duration-300">
          <img src={icon} alt={name} className="w-10 h-10 object-contain" />
        </div>
        {/* Label — turns white on hover */}
        <span className="text-sm font-semibold text-gray-700 text-center group-hover:text-white transition-colors duration-300">
          {name}
        </span>
      </div>
    );
  }

export default SkillCard
