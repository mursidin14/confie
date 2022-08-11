import React from 'react';
import { makeCapital } from 'utils/utils';
import BasicJobInformation from './BasicJobInformation';
export default function JobApplicationCard({ isPublic, item }) {
  return (
    <a href={`/lowongan/detail-job/${item.id}`}>
      <div className="rounded-md bg-white p-8 shadow-mine transition-all hover:bg-[#FFF6E7]/90">
        <div>
          <div className="flex items-center justify-start gap-2">
            {item?.users?.url_photo_profile === null && (
            <img className="w-10" src={`/company_default.png`} alt="" />
            )}
            {item?.users?.url_photo_profile !== null && (
              <img
                className="w-10"
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
              {!isPublic && (
                <a
                  href={`company/${item.users.slug}`}
                  className="block text-sm hover:underline"
                >
                  {makeCapital(item.users.full_name)}
                </a>
              )}
            </div>
          </div>
          <BasicJobInformation item={item} />
        </div>
      </div>
    </a>
  );
}
