import React from 'react';
import BasicCard from 'components/BasicCard';
export default function GalleryCompany({children}) {
  let img_company = [1, 2, 3];
  return (
    <BasicCard>
      <div className="flex items-center justify-between px-8">
        <h3 className="text-base font-semibold">Gallery Company</h3>
      </div>
      <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
      <div className="px-8 flex flex-wrap items-stretch sm:justify-between justify-center gap-6 my-5">
        {img_company.map((img, index) => 
            <img className="w-52" src="/company_1.png" alt="" />
        )}
      {children}
      </div>
    </BasicCard>
  );
}
