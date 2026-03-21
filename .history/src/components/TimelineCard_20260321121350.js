import React from 'react';

function TimelineCard({ item }) {
    const isLeft = item.side === 'left';
  
    const Card = (
      <div className="bg-white rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-shadow duration-200">
        {/* Header: title + date badge */}
        <div className="flex items-start justify-between gap-3 flex-wrap mb-4">
          <h3 className="text-[#2dd4bf] font-bold text-lg leading-snug m-0">
            {item.title}
          </h3>
          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap shrink-0">
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
            <div className="w-3.5 h-3.5 rounded-full bg-[#2dd4bf] shrink-0" />
            </div>
            <div />
          </>
        ) : (
          <>
            <div />
            <div className="flex justify-center pt-6 z-10">
            <div className="w-3.5 h-3.5 rounded-full bg-[#2dd4bf] shrink-0" />
            </div>
            <div className="pl-6">{Card}</div>
          </>
        )}
      </div>
    );
  }

  export default TimelineCard;