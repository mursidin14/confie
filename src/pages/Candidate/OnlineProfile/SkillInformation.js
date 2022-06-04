import React from 'react'

export default function SkillInfomation({ data }) {
    return (
      <section className="mt-20">
        <p className="mb-2 text-left  text-sm font-semibold sm:mb-6 sm:text-xl">
          Skills
        </p>
        <div className="space-y-1 text-left text-xs sm:space-y-3 sm:text-sm">
          {data.map((skill, index) => (
            <p>{skill.name}</p>
          ))}
        </div>
      </section>
    );
  }
