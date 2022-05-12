import React from 'react';
import BasicJobInformation from './BasicJobInformation';
export default function JobApplicationCard() {
  return (
    <a href="/lowongan/annas/detailJob/detail" className="rounded-md bg-white p-8 shadow-mine">
      <div>
        <div className="flex items-center justify-start gap-2">
          <div className="h-fit rounded-md bg-[#F5F8FA] p-4 ">
            <img src="/job.png" alt="" />
          </div>
          <div className="text-left">
            <a href="/lowongan/annas/detailJob/detail" className="font-semibold hover:underline">Junior React Developer</a>
            <p className="text-sm">PT. Maju Jaya</p>
          </div>
        </div>
        <BasicJobInformation    />
      </div>
    </a>
  );
}

   