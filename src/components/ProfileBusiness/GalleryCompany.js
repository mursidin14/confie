import React from 'react';
import BasicCard from 'components/Widgets/BasicCard';
import { useBusinessProfileContext } from 'context/business-profile-context';
import EditGallery from './EditGallery';
export default function GalleryCompany() {
  const {
    businessProfile: { galleries },
  } = useBusinessProfileContext();
  
  return (
    <BasicCard>
      <div className="flex items-center justify-between px-8">
        <h3 className="text-base font-semibold">Gallery Company</h3>
      </div>
      <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
      <div className="my-5 flex flex-wrap items-stretch justify-center gap-6 px-8 sm:justify-between">
        {galleries !== undefined && (
          <>
            {galleries.map((img, index) => (
              <img key={index} className="w-52" src="/company_1.png" alt="" />
            ))}
          </>
        )}
        <EditGallery />
      </div>
    </BasicCard>
  );
}
