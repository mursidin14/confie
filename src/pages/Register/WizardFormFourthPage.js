import React, { useState } from 'react';
import LayoutRegister from './LayoutRegister';

export default function WizardFormFourthPage(props) {
  const [skills, setSkills] = useState(['C++', 'Java', 'Python']);
  return (
    <LayoutRegister pageNumber={4}>
      <div className="mt-10 flex px-7 ">
        <div className="m-auto mb-5 lg:mb-0 lg:w-8/12">
          <h2 className="my-6 text-2xl font-semibold">
            Add Your Skill And Passion
          </h2>
          <form action="">
            <label for="" className="label">
              About Me:
            </label>
            <textarea
              className="h-[150px] w-full bg-[#F5F8FA] p-5 lg:h-[200px]"
              type="text"
              name="about_me"
            />
            <label for="" className="label">
              My Skills:
            </label>
            
            <input
              onKeyDown={(e) => {
                if (e.code === 'Space') {
                  setSkills([...skills, e.target.value]);
                  e.target.value = '';
                }
              }}
              className="w-full bg-[#F5F8FA] px-5  py-3 "
              type="text"
              name="skill"
            />
            <div className='mt-2 flex gap-2 flex-wrap'>
              {skills.map((skill) => (
               <span className='bg-[#A1A5B7] text-white px-2 py-1 rounded-lg'>{skill}</span> 
              ))}
            </div>
            <div className="mt-5 flex flex-col justify-between gap-3 lg:flex-row">
              <button onClick={props.previousPage} className="secondary-btn">
                PREVIOUS
              </button>
              <button
                type="submit"
                onClick={props.onSubmit}
                className="primary-btn"
              >
                CONTINUE
              </button>
            </div>
          </form>
        </div>
      </div>
    </LayoutRegister>
  );
}
