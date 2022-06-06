import React, { useState, Fragment } from 'react';
import LayoutRegister from './LayoutRegister';
import InputTag from 'components/InputTag';
import InputSkill from 'components/InputSkill';
import { Dialog, Transition } from '@headlessui/react';

export default function WizardFormFourthPage(props) {
  let { data, onChange, children, skills, setSkills } = props;
  function handleChange(e) {
    onChange({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <LayoutRegister data={data} pageNumber={4}>
      <div className="mt-10 flex px-7 ">
        <div className="m-auto mb-5 w-full lg:mb-0 lg:w-8/12">
          <h2 className="my-6 text-2xl font-semibold">
            Add Your{' '}
            {data.role === 'personal' ? 'Skill And Passion' : 'Business Detail'}
          </h2>
          <label className="label  after:content-['*'] after:text-pink-500 after:ml-1">
            {data.role === 'personal' ? 'About Me:' : 'About the Company:'}
          </label>
          <textarea
            value={data.about}
            className="box-border h-[150px] w-full bg-[#F5F8FA] p-5 lg:h-[200px]"
            type="text"
            name="about"
            onChange={handleChange}
          />
          <label className="label">
            {data.role === 'personal' ? 'My Skill:' : 'Business Field:'}
          </label>
          <InputSkill data={data} onChange={onChange} skills={skills} setSkills={setSkills}></InputSkill>
          <div className="mt-3 flex flex-col justify-between gap-3 lg:flex-row">
            <button
              type="button"
              onClick={props.previousPage}
              className="secondary-btn w-full px-6 py-3 lg:w-[150px]"
            >
              PREVIOUS
            </button>
            <button
              type="submit"
              onClick={props.onSubmit}
              className="primary-btn w-full px-6 py-3 lg:w-[150px]"
            >
              CONTINUE
            </button>
          </div>
        </div>
      </div>
      {children}
    </LayoutRegister>
  );
}

