import ModalProfile from 'components/Modal/ModalProfile';
import EditProfilePhoto from 'components/Profile/EditProfilePhoto';
import React from 'react';
import { makeCapital, getDate, getGender } from 'utils/utils';
export default function PersonalInfomationCard({ data_profile }) {
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
      value: getGender(data_profile.gender),
    },
    {
      label: 'Date of Birth',
      value: getDate(data_profile.date_of_birth),
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
    <>
    <div className="rounded-md bg-white pt-7 pb-2 text-left shadow-mine ">
      <div className="flex items-center justify-between px-8">
        <h3 className="text-base font-semibold ">Personal Infomation</h3>
        <ModalProfile data_profile={data_profile}></ModalProfile>
      </div>
      <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
      <div className="my-5">
        <div className="px-8">
          <EditProfilePhoto data_profile={data_profile}></EditProfilePhoto>
          {inputs.map((input, index) => (
            <DataPersonal key={index} {...input} />
          ))}
        </div>
      </div>
    </div>
    </>

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
