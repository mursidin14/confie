import ModalProfile from 'components/Modal/ModalProfile';
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
          <div className="image-upload w-7/12">
            <label for="file-input">
              <div className="relative w-fit">
                <div className="absolute -top-3 -right-5 w-fit cursor-pointer rounded-full bg-white p-2">
                  <svg
                    className="h-3 w-3"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.3"
                      d="M9.8083 3.82836L8.81876 4.81743L6.18059 2.17927L7.16967 1.1897C7.34467 1.01475 7.58199 0.916504 7.82945 0.916504C8.0769 0.916504 8.31422 1.01475 8.48922 1.1897L9.8083 2.50881C9.98325 2.68381 10.0816 2.9211 10.0816 3.16856C10.0816 3.41601 9.98325 3.65337 9.8083 3.82836ZM1.68984 10.0521L4.5315 9.10468L1.89334 6.46652L0.945961 9.30818C0.911201 9.41195 0.906105 9.52346 0.931249 9.62998C0.956388 9.73654 1.01077 9.83394 1.08827 9.91126C1.16578 9.98853 1.26332 10.0427 1.36992 10.0675C1.47652 10.0924 1.58795 10.0871 1.69167 10.0521H1.68984Z"
                      fill="#181C32"
                    />
                    <path
                      d="M2.55476 9.76246L1.69218 10.0503C1.58855 10.0848 1.47738 10.0898 1.37109 10.0647C1.2648 10.0396 1.16759 9.98539 1.09034 9.90816C1.01309 9.83098 0.958853 9.73381 0.933686 9.62752C0.908519 9.52124 0.913419 9.41009 0.94784 9.30646L1.23568 8.44337L2.55476 9.76246ZM1.89521 6.46475L4.53339 9.10292L8.82064 4.81567L6.18247 2.17749L1.89521 6.46475Z"
                      fill="#181C32"
                    />
                  </svg>
                </div>
                <img className="w-20 sm:w-32" src={data_profile.gender == 'L' ? "/male.jpg" : "/female.jpg"} alt="" />
              </div>
            </label>
            <input id="file-input" type="file" />
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
