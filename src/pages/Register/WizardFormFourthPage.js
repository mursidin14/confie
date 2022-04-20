import React, { useState } from 'react';
import LayoutRegister from './LayoutRegister';
import InputTag from 'components/InputTag';

export default function WizardFormFourthPage(props) {
  const [skills, setSkills] = useState(['C++', 'Java', 'Python']);
  return (
    <LayoutRegister pageNumber={4}>
      <div className="mt-10 flex px-7 ">
        <div className="sm:m-auto mb-5 lg:mb-0 lg:w-8/12 w-full">
          <h2 className="my-6 text-2xl font-semibold">
            Add Your Skill And Passion
          </h2>
            <label for="" className="label">
              About Me:
            </label>
            <textarea
              className="h-[150px] w-full bg-[#F5F8FA] sm:p-5 p-4 lg:h-[200px]"
              type="text"
              name="about_me"
            />
            <label for="" className="label">
              My Skills:
            </label>
            
            <InputTag></InputTag>
            
            <div className="mt-3 flex flex-col justify-between gap-3 lg:flex-row">
            <button type='button' onClick={props.previousPage} className="secondary-btn lg:w-[150px] px-6 w-full">
                PREVIOUS
              </button>
              <button
                type='button'
                onClick={props.onSubmit}
                className="primary-btn lg:w-[150px] px-6 w-full"
              >
                CONTINUE
              </button>
            </div>
        </div>
      </div>
    </LayoutRegister>
  );
}
