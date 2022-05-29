import ModalAboutMe from 'components/Modal/ModalAboutMe';
import React, { useState } from 'react';

export default function AboutMeCard({ data_profile }) {
  return (
    <div className="lg:relative ">
      <div className="mt-4 rounded-md bg-white pt-7 pb-2  text-left shadow-md ">
        <div className="flex items-center justify-between px-8">
          <h3 className="text-base font-semibold ">About Me</h3>
          <ModalAboutMe></ModalAboutMe>
        </div>
        <hr className="my-2 w-full border-b-[1px] border-[#3F4254]/10" />
        <div className="my-5">
          <p className="px-8 text-xs text-[#7E8299] md:text-base">
            {data_profile.about}
          </p>
        </div>
      </div>
    </div>
  );
}
