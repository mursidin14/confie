import React, { useState } from 'react';

export default function SkillCard() {
  let skills = ['Coding', 'Design', 'Marketing', 'Sales'];
  const [modal, setModal] = useState(false);
  function handleClick() {
    setModal(!modal);
  }
  return (
    <div className="lg:relative">
      <div className="mt-4 rounded-md bg-white pt-7 pb-2 text-left shadow-md ">
        <div className="flex items-center justify-between px-8">
          <h3 className="text-base font-semibold ">My Skill</h3>
          <button
            onClick={handleClick}
            className="primary-btn h-fit w-fit px-6 py-2 text-xs"
          >
            Edit
          </button>
        </div>
        <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
        <div className="my-5">
          <div className="flex flex-wrap gap-2 px-8">
            {skills.map((skill, index) => (
              <p
                key={index}
                className="rounded-md bg-[#A1A5B7] px-5 py-1 text-xs text-white md:text-base"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Modal isOpen={modal} handleClick={handleClick} />
    </div>
  );
}

function Modal({ isOpen, handleClick }) {
  return (
    <div
      id="modal-content"
      className={`${
        isOpen ? 'top-3' : '-top-[1500px]'
      } absolute inset-0 z-50 mx-auto mt-4 h-fit max-w-4xl rounded-md bg-white pt-7 pb-2 text-left shadow-md transition-all duration-[1000ms]`}
    >
      <div className="flex items-center justify-between px-8">
        <h3 className="text-base font-semibold ">My Skill</h3>
      </div>
      <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
      <div className="my-5">
        <div className="px-8">
          <InputTag />
        </div>
      </div>
      <div className="my-5 flex justify-end gap-4 px-8">
        <button
          onClick={handleClick}
          className="rounded-md bg-[#F5F8FA] px-4 py-2 text-sm"
        >
          Cancel
        </button>
        <button className="rounded-md bg-[#FE9A00] px-4 py-2 text-sm text-white">
          Submit
        </button>
      </div>
    </div>
  );
}

function InputTag() {
  const [tags, setTags] = useState(["Node js"]);
  const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};
  const addTags = (event) => {
    if (event.target.value !== '') {
      setTags([...tags, event.target.value]);
      event.target.value = '';
    }
  };
  return (
    <div className="flex h-fit w-full flex-wrap rounded-md border-2 border-transparent bg-soft-gray py-5 px-3 focus-within:border-black">
      <ul className="flex flex-wrap">
        {tags.map((tag, index) => (
          <li
            className="m-2 flex items-center gap-3 rounded-md bg-[#A1A5B7] px-3 py-1 text-white"
            key={index}
          >
            <span>{tag}</span>
            <button className="" onClick={() => removeTags(index)}>
              x
            </button>
          </li>
        ))}
      </ul>
      <input
        name="skill"
        placeholder="Add Skill"
        onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
        className="bg-soft-gray px-3 focus:border-0 focus:outline-none"
        type="text"
      />
    </div>
  );
}
