import ModalProfile from 'components/Modal/ModalProfile';
import React, { useEffect, useState } from 'react';



export default function PersonalInfomationCard({data_profile}) {
  

  return (
    <div className="rounded-md bg-white pt-7 pb-2 text-left shadow-mine ">
      <div className="flex items-center justify-between px-8">
        <h3 className="text-base font-semibold ">Personal Infomation</h3>
        <ModalProfile></ModalProfile>
      </div>
      <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
      <div className="my-5">
        <div className="px-8">
          <div className="mb-5 lg:flex">
            <div className="w-5/12">
              <label className="text-xs lg:text-base">Avatar</label>
            </div>
            <div className="w-7/12">
              <img className="w-20 sm:w-32" src="/person.png" alt="" />
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

function DataPersonal({ label, value }) {
  return (
    <div className=" items-center lg:flex ">
      <div className="w-5/12">
        <label className="text-xs lg:text-base">{label}</label>
      </div>
      <div className="lg:w-7/12">
        <p className="w-full rounded-md bg-soft-gray px-5 py-3 my-2 lg:my-5 ">{value}</p>
      </div>
    </div>
  );
}


