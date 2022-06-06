import React, { useState } from 'react';

export default function Pagination({ length, pagination, setPagination }) {
  let lengthData = length;
  const [page, setPage] = useState(1);
  let active = `bg-[#FE9A00] px-5 py-2 rounded-md text-white`;
  function handleDecrement() {
    if (page > 1) {
      setPage(page - 1);
    }
    setPagination({
      sliceOne: pagination.sliceOne - 3,
      sliceTwo: pagination.sliceTwo - 3,
    });
  }
  function handleIncrement() {
    setPage(page + 1);
    setPagination({
      sliceOne: pagination.sliceOne + 3,
      sliceTwo: pagination.sliceTwo + 3,
    });
  }
  return (
    <div className="my-4 flex items-center gap-7">
      <svg
        className={`${
          page === 1 ? 'fill-[#B5B5C3]' : 'fill-[#5E6278]'
        } transform: rotate-180 cursor-pointer `}
        onClick={handleDecrement}
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.90303 4.59653C6.05756 4.84126 6.02863 5.15559 5.80703 5.37282L1.30727 9.78356C1.02895 10.0564 0.554241 10.0738 0.246996 9.8224C-0.0602491 9.57103 -0.083694 9.1461 0.194631 8.87327L4.20889 4.93844L0.233766 1.36613C-0.0584642 1.10351 -0.0575493 0.678394 0.235806 0.416606C0.529161 0.154814 1.00388 0.155491 1.29611 0.418109L5.77789 4.44573C5.82883 4.49151 5.87054 4.54239 5.90303 4.59653Z"
        />
      </svg>

      <button
        onClick={() => {
          setPage(page);
          setPagination({
            sliceOne: pagination.sliceOne + 3 * page,
            sliceTwo: pagination.sliceTwo + 3 * page,
          });
        }}
        className={`${page === page ? active : ''}`}
      >
        {page}
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
          setPagination({
            sliceOne: pagination.sliceOne + 3 * (page + 1),
            sliceTwo: pagination.sliceTwo + 3 * (page + 1),
          });
        }}
        className={`${page === page + 1 ? active : ''}`}
      >
        {page + 1}
      </button>
      <button
        onClick={() => {
          setPage(page + 2);
          setPagination({
            sliceOne: pagination.sliceOne + 3 * (page + 2),
            sliceTwo: pagination.sliceTwo + 3 * (page + 2),
          });
        }}
        className={`${page === page + 2 ? active : ''}`}
      >
        {page + 2}
      </button>
      <svg
        className={`${
          page === 3 ? 'fill-[#B5B5C3]' : 'fill-[#5E6278]'
        } cursor-pointer`}
        onClick={handleIncrement}
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.90303 4.59653C6.05756 4.84126 6.02863 5.15559 5.80703 5.37282L1.30727 9.78356C1.02895 10.0564 0.554241 10.0738 0.246996 9.8224C-0.0602491 9.57103 -0.083694 9.1461 0.194631 8.87327L4.20889 4.93844L0.233766 1.36613C-0.0584642 1.10351 -0.0575493 0.678394 0.235806 0.416606C0.529161 0.154814 1.00388 0.155491 1.29611 0.418109L5.77789 4.44573C5.82883 4.49151 5.87054 4.54239 5.90303 4.59653Z"
        />
      </svg>
    </div>
  );
}
