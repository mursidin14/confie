import React from 'react';
// import ProgressBar from 'components/Widgets/ProgressBar';
export default function ClassCard() {
  return (
    <div className="mt-4 rounded-md bg-white  py-7 text-left shadow-mine lg:w-6/12">
      <div className="flex justify-between px-8 pb-2">
        <h3 className="py- text-base">Kelas Aktif</h3>
        <a className='p-2 group hover:bg-gray-400/80 rounded-md transition-all' href="/kelas">
          <svg
            className='group-hover:fill-white fill-[#A1A5B7]'
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M5.35703 10.8333L14.2749 10.8333C14.7227 10.8333 15.0856 10.4602 15.0856 9.99998C15.0856 9.53974 14.7227 9.16665 14.2749 9.16665L5.35703 9.16665C4.90928 9.16665 4.54631 9.53974 4.54631 9.99998C4.54631 10.4602 4.90928 10.8333 5.35703 10.8333Z"
            />
            <path
              d="M13.0056 10.4714L9.6133 13.9583C9.2775 14.3035 9.2775 14.8632 9.6133 15.2083C9.9491 15.5535 10.4936 15.5535 10.8294 15.2083L15.3231 10.5892C15.6397 10.2638 15.6397 9.73616 15.3231 9.41074L10.8294 4.79166C10.4936 4.44648 9.9491 4.44648 9.6133 4.79166C9.2775 5.13683 9.2775 5.69648 9.6133 6.04166L13.0056 9.52857C13.2589 9.78891 13.2589 10.2111 13.0056 10.4714Z"
            />
          </svg>
        </a>
      </div>
      <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />

      {/* <section className='px-8'>
        <div className='flex items-center justify-between text-[#3F4254] my-3 py-2 border-b-2 border-[#3F4254]/20 border-dashed '>
          <div className='w-6/12'>
            <h3 className="text-base font-semibold">Digital Marketing</h3>
            <p className="text-[13px]">Ahmad Rifandi</p>
            <p className="text-[9px] ">15 Chapter</p>
          </div>
          <div className='w-5/12 flex items-center gap-3'>
            <ProgressBar progressPercentage={50} />
            <p className="text-xs ">50%</p>
          </div>
        </div>
      </section> */}
    </div>
  );
}
