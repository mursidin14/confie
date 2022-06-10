import React from 'react';
import SalaryFilter from 'pages/Candidate/Job/SalaryFilter';

export default function SearchJob() {
  return (
    <div className="flex flex-col justify-between gap-3 rounded-md bg-white p-3 text-xs shadow-mine sm:flex-row sm:gap-7 sm:p-7 lg:text-sm">
      <input
        className="w-full rounded-md bg-[#F5F8FA] p-3 placeholder:italic sm:px-5"
        type="text"
        placeholder="Developer..."
      />
      <input
        className="w-full rounded-md bg-[#F5F8FA] p-3 placeholder:italic sm:px-5"
        type="text"
        placeholder="Makassar..."
      />
      <SalaryFilter></SalaryFilter>
      <button className="primary-btn flex w-fit items-center justify-center gap-2 rounded-md px-5 py-2">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.43744 13.6788C8.56359 13.6179 8.6699 13.5234 8.74435 13.4061C8.8188 13.2888 8.85841 13.1533 8.85871 13.015V9.02502C8.85871 8.82852 8.93869 8.63952 9.08191 8.50002L13.7448 3.95951C13.886 3.82225 13.9982 3.65877 14.0748 3.47854C14.1514 3.2983 14.191 3.1049 14.1912 2.90951V0.992514C14.1908 0.894486 14.1707 0.797499 14.1322 0.707103C14.0937 0.616707 14.0375 0.534677 13.9667 0.46571C13.8959 0.396742 13.8121 0.342191 13.7199 0.305179C13.6277 0.268167 13.529 0.249421 13.4294 0.250014H1.24091C0.819642 0.250014 0.479126 0.581514 0.479126 0.992514V2.90951C0.479126 3.30326 0.639862 3.68126 0.925529 3.95951L5.58838 8.50002C5.65903 8.56862 5.71514 8.65036 5.75346 8.74048C5.79177 8.8306 5.81153 8.92732 5.81159 9.02502V13.7575C5.81159 14.3088 6.4073 14.6673 6.91388 14.4205L8.43744 13.6788Z"
            fill="white"
          />
        </svg>

        <p>Filter</p>
      </button>
    </div>
  );
}
