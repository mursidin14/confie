import ModalProfile from 'components/Modal/ModalProfile';
import React, { useEffect, useState } from 'react';

export default function PersonalInfomationCard({ data_profile }) {
  function makeCapital(name) {
    name = name.toLowerCase()
    let nameArray = name.split(' ');
    if (nameArray.length > 1) {
      let capitalName = '';
      nameArray.forEach((name) => {
        capitalName += name.slice(0, 1).toUpperCase() + name.slice(1) + ' ';
      });
      return capitalName;
    }
    return name.slice(0, 1).toUpperCase() + name.slice(1);
  }
  function formatDate(date) {
    return new Date(date).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
  let inputs = [
    {
      label: 'Full Name',
      value: makeCapital(data_profile.full_name),
    },
    {
      label: 'Phone Number',
      value: data_profile.phone_number,
    },
    {
      label: 'Email',
      value: data_profile.email,
    },
    {
      label: 'Gender',
      value: data_profile.gender,
    },
    {
      label: 'Date of Birth',
      value: formatDate(data_profile.date_of_birth * 1000),
    },
    {
      label: 'Country',
      value: makeCapital(data_profile.country),
    },
    {
      label: 'Province',
      value: makeCapital(data_profile.province_name),
    },
    {
      label: 'City',
      value: makeCapital(data_profile.city_name),
    },
  ];

  return (
    <div className="rounded-md bg-white pt-7 pb-2 text-left shadow-mine ">
      <div className="flex items-center justify-between px-8">
        <h3 className="text-base font-semibold ">Personal Infomation</h3>
        <ModalProfile data_profile={data_profile}></ModalProfile>
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
        <p className="my-2 w-full rounded-md bg-soft-gray px-5 py-3 lg:my-5 ">
          {value}
        </p>
      </div>
    </div>
  );
}
