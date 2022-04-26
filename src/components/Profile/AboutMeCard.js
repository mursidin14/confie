import React, { useState } from 'react'

export default function AboutMeCard() {
  const [modal, setModal] = useState(false);
  function handleClick() {
    setModal(!modal);
  }
  return (
    <div className='lg:relative '>
    <div className="mt-4 rounded-md bg-white pt-7 pb-2  text-left shadow-md ">
      <div className="flex items-center justify-between px-8">
        <h3 className="text-base font-semibold ">About Me</h3>
        <button onClick={handleClick} className="primary-btn h-fit w-fit px-6 py-2 text-xs">
          Edit
        </button>
      </div>
      <hr className="my-2 w-full border-b-[1px] border-[#3F4254]/10" />
      <div className="my-5">
      <p className="px-8 text-xs md:text-base text-[#7E8299]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          saepe modi fugiat illo harum dolores laboriosam quibusdam cumque earum
          sed fugit, vel accusantium vero, rem cupiditate laborum libero quo
          sint.
        </p>
      </div>
    </div>
    <Modal isOpen={modal} handleClick={handleClick} />
    </div>
  )
}

function Modal({isOpen, handleClick}) {
  
  return (
    <div
      id='modal-content'
      className={`${
        isOpen ? 'lg:top-3 top-[950px]' : '-top-[1500px]'
      } absolute inset-0 mt-4 h-fit rounded-md bg-white pt-7 pb-2 text-left shadow-md max-w-4xl sm:mx-auto mx-3 z-50 transition-all duration-[1000ms]`}
    >
      <div className="flex items-center justify-between px-8">
        <h3 className="text-base font-semibold ">About Me</h3>
      </div>
      <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
      <div className="my-5">
        <div className="px-8">
         <textarea className='w-full bg-[#F5F8FA] p-5 lg:h-[200px]' name="about_me"></textarea> 
         
        </div>
      </div>
      <div className="my-5 flex justify-end gap-4 px-8">
        <button onClick={handleClick} className="rounded-md bg-[#F5F8FA] px-4 py-2 text-sm">Cancel</button>
        <button className="rounded-md bg-[#FE9A00] px-4 py-2 text-white text-sm">
          Submit
        </button>
      </div>
    </div>
  );
}
