import React from 'react';
import BasicJobInformation from './BasicJobInformation';
export default function JobApplicationCard({ item }) {
  return (
    <a
      href="/lowongan/annas/detailJob/detail"
      className="rounded-md bg-white p-8 shadow-mine transition-all hover:scale-105 hover:bg-[#FFF6E7]/90"
    >
      <div>
        <div className="flex items-center justify-start gap-2">
          <div className="h-fit rounded-md bg-[#F5F8FA] p-4 ">
            <img src="/job.png" alt="" />
          </div>
          <div className="text-left">
            <a
              href="/lowongan/detailJob/detail"
              className="font-semibold hover:underline"
            >
              Junior React Developer
            </a>
            <a href="/company/upana" className="block text-sm hover:underline">
              PT. Maju Jaya {item}
            </a>
          </div>
        </div>
        <BasicJobInformation />
      </div>
    </a>
  );
}
