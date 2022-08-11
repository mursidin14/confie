import React from 'react';
import { makeCapital } from 'utils/utils';
import BasicJobInformation from './BasicJobInformation';
export default function JobApplicationCard({ item }) {
  console.log(item);
  return (
    <div className="rounded-md bg-white p-8 shadow-mine transition-all hover:bg-[#FFF6E7]/90">
      <div>
        <div className="flex items-center justify-start gap-2">
          {item?.users?.url_photo_profile === null && (
            <div className="h-fit rounded-md bg-[#F5F8FA] p-3 ">
              <img className="w-5" src={`/job.png`} alt="" />
            </div>
          )}
          {item?.users?.url_photo_profile !== null && (
            <img
              className="w-6"
              src={`${process.env.REACT_APP_API_URL}/${item?.users?.url_photo_profile}`}
              alt=""
            />
          )}
          <div className="text-left">
            <a
              href={`/lowongan/detail-job/${item.id}`}
              className="font-semibold hover:underline"
            >
              {item.title}
            </a>
            <a
              href={`company/${item.users.slug}`}
              className="block text-sm hover:underline"
            >
              {makeCapital(item.users.full_name)}
            </a>
          </div>
        </div>
        <BasicJobInformation item={item} />
      </div>
    </div>
  );
}
