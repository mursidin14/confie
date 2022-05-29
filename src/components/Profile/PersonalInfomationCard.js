import ModalProfile from 'components/Modal/ModalProfile';
import React, { useEffect, useState } from 'react';

export default function PersonalInfomationCard(data_profile) {
  console.log(data_profile);
  let inputs = [
    {
      label: 'Full Name',
      value: data_profile.full_name,
    },
    {
      label: 'Phone Number',
      value: data_profile.full_name,
    },
    {
      label: 'Email',
      value: data_profile.full_name,
    },
    {
      label: 'Gender',
      value: data_profile.full_name,
    },
    {
      label: 'Date of Birth',
      value: data_profile.full_name,
    },
    {
      label: 'Country',
      value: data_profile.full_name,
    },
    {
      label: 'Province',
      value: data_profile.full_name,
    },
    {
      label: 'City',
      value: data_profile.full_name,
    },
  ];

  return (
    <div className="mt-4 rounded-md bg-white pt-7 pb-2 text-left shadow-md ">
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
          {inputs.map((input, index) => (
            <DataPersonal key={index} {...input} />
          ))}
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
        <p className="input-form my-2 lg:my-5 lg:py-3 ">{value}</p>
      </div>
    </div>
  );
}
