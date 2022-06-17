import React, { useState } from 'react';
import ModalSkill from 'components/Modal/ModalSkill';
export default function SkillCard({data_skills}) {
  const skills = data_skills;
  
  return (
    <div className="lg:relative">
      <div className="mt-4 rounded-md bg-white pt-7 pb-2 text-left shadow-mine ">
        <div className="flex items-center justify-between px-8">
          <h3 className="text-base font-semibold ">My Skill</h3>
          <ModalSkill skills={skills}></ModalSkill>
        </div>
        <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
        <div className="my-5">
          <div className="flex flex-wrap gap-2 px-8">
            {skills.map((skill, index) => (
              <p
                key={index}
                className="rounded-md bg-[#A1A5B7] px-5 py-1 text-xs text-white md:text-base"
              >
                {skill.name.toUpperCase()}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

