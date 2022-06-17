import React, { useState } from 'react';

export default function Pagination({ length, pagination, setPagination, howMany }) {
  let lengthPage = 0
  const lengthData = Math.ceil(length / howMany)
  if(length > 4){
     lengthPage = Math.ceil(length / howMany);
  }else{
    lengthPage = 3;
  }
  const [page, setPage] = useState(1);

  const sliceOne = page < 3 || lengthPage == 3 ? 0 : page - 2
  const sliceTwo = page < 3 || lengthPage == 3 ? 3 : page + 1

  const page_number = lengthData <= 3 ? [1, 2, 3] : Array.from({ length: lengthPage }, (v, k) => k + 1).slice(sliceOne, sliceTwo)
  let active = `bg-[#FE9A00] px-5 py-2 rounded-md text-white`;
  function handleDecrement() {
    if (page > 1) {
      setPage(page - 1);
    }
    setPagination({
      sliceOne: pagination.sliceOne - howMany,
      sliceTwo: pagination.sliceTwo - howMany,
    });
  }
  function handleIncrement() {
    if (page < lengthPage ) {
      setPage(page + 1);
      setPagination({
        sliceOne: pagination.sliceOne + howMany,
        sliceTwo: pagination.sliceTwo + howMany,
      });
    }
  }
  return (
    <div className="my-4 flex items-center gap-7">
      <button disabled={page === 1} onClick={handleDecrement}>
        <svg
          className={`${
            page === 1 ? 'fill-[#B5B5C3]' : 'fill-[#5E6278]'
          } transform: rotate-180 cursor-pointer `}
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
      </button>
      <button
        disabled
        onClick={() => {
          setPage(page);
          setPagination({
            sliceOne: pagination.sliceOne + 3 * page,
            sliceTwo: pagination.sliceTwo + 3 * page,
          });
        }}
        className={`${page === 1 ? active : ''}`}
      >
        {page_number[2] === undefined ? page_number[0] - 1 : page_number[0]}
      </button>
      <button
        disabled
        onClick={() => {
          setPage(page + 1);
          setPagination({
            sliceOne: pagination.sliceOne + 3 * 1,
            sliceTwo: pagination.sliceTwo + 3 * 1,
          });
        }}
        className={`${page > 1 && page < lengthPage || page === 2 ? active : ''}`}
      >
        {page_number[2] === undefined ? page_number[1] - 1 : page_number[1]}
      </button>
      <button
        disabled
        onClick={() => {
          setPage(page + 2);
          setPagination({
            sliceOne: pagination.sliceOne + 3 * 2,
            sliceTwo: pagination.sliceTwo + 3 * 2,
          });
        }}
        className={`${page === lengthPage && lengthData > 2 ? active : ''}`}
      >
        {page_number[2] === undefined ? page_number[1] : page_number[2]}
      </button>
      <button onClick={handleIncrement} disabled={lengthPage > lengthData}>
        <svg
          className={`${
            lengthPage === page ? 'fill-[#B5B5C3]' : 'fill-[#5E6278]'
          } cursor-pointer`}
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
      </button>
    </div>
  );
}
