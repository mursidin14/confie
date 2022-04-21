import React from 'react';
import ProgressBar from 'components/ProgressBar';

export default function Status(params) {
  let status = [
    {
      name: 'Kelas Aktif',
      value: '2',
    },
    {
      name: 'Kelas Selesai',
      value: '1',
    },
    {
      name: 'Lamaran Masuk',
      value: '3',
    },
  ];
  return (
    <div className="mt-5 justify-between gap-3 md:mt-0 lg:flex">
      <div className="mt-1 flex w-full gap-2 lg:w-6/12">
        {status.map((item, index) => (
          <div className="flex flex-col justify-center rounded border-2 border-dashed border-[#B5B5C3] px-4 py-1">
            <p className="text-sm font-semibold">{item.value}</p>
            <p className=" text-[10px] text-[#B5B5C3] sm:text-xs">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <ProfileCompletion />
    </div>
  );
}

function ProfileCompletion({}) {
  return (
    <div className="mt-3 w-full lg:mt-0 lg:w-6/12 ">
      <div className="flex justify-between">
        <p className="mb-2 text-left text-base text-[#B5B5C3]">
          Profile Completion
        </p>
        <p>80%</p>
      </div>
      <ProgressBar progressPercentage={80} />
    </div>
  );
}
