import React from 'react';

export default function EmploymentStatus({data}) {
  return (
    <>
      <p className="mt-1 text-center text-xs sm:text-sm">{data ? data.position : '-'}</p>
      <p className={`my-3 mx-auto w-fit rounded-md  px-2 py-1 text-[10px] text-xs ${data ? 'text-[#50CD89] bg-[#50CD89]/20' : 'text-[#F1416C] bg-[#F1416C]/20'} sm:px-5 sm:text-sm`}>
      {data ? 'Bekerja' : 'Belum Bekerja'}
      </p>
    </>
  );
}
