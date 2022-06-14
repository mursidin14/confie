import ModalProfile from 'components/Modal/ModalProfile';
import React from 'react';
import ProfileService from 'services/Profile/ProfileService';
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
  const uploadPhoto = async (e) => {
    e.preventDefault();
    const data = {
      photo_profile: e.target.files[0],
      _method: 'put'
    };
    console.log(data)
    const response = await ProfileService.updateProfilePicture(data);
    console.log(response);
  };
  return (
    <div className="rounded-md bg-white pt-7 pb-2 text-left shadow-mine ">
      <div className="flex items-center justify-between px-8">
        <h3 className="text-base font-semibold ">Personal Infomation</h3>
        <ModalProfile data_profile={data_profile}></ModalProfile>
      </div>
      <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
      <div className="my-5">
        <div className="px-8">
          <div className="mb-5 mt-10 lg:flex">
            <div className="w-5/12">
              <label className="text-xs lg:text-base">Avatar</label>
            </div>
            <div className="image-upload w-7/12">
              <div className="relative w-fit">
                <label for="file-input">
                  <div className="absolute -top-3 -right-5 w-fit cursor-pointer rounded-full border bg-white p-2">
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
                </label>
                <img
                  className="w-20 sm:w-32"
                  src={true ? '/male.jpg' : '/female.jpg'}
                  alt=""
                />
                <button className="absolute -bottom-3 -right-5 w-fit cursor-pointer rounded-full border bg-white p-2">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.73477 4.98867L9.87977 0.854754C9.96169 0.759359 10.0045 0.63665 9.99963 0.511148C9.99477 0.385647 9.9426 0.266597 9.85355 0.177788C9.76451 0.0889785 9.64514 0.0369516 9.5193 0.032104C9.39346 0.0272564 9.27042 0.0699452 9.17477 0.151639L5.02977 4.28555L0.884772 0.146653C0.79062 0.0527525 0.662923 0 0.529772 0C0.396621 0 0.268924 0.0527525 0.174772 0.146653C0.0806199 0.240553 0.0277259 0.367908 0.0277259 0.500703C0.0277259 0.633498 0.0806199 0.760854 0.174772 0.854754L4.32477 4.98867L0.174772 9.12258C0.122431 9.16729 0.0799207 9.2223 0.0499091 9.28416C0.0198974 9.34603 0.00303234 9.41341 0.000372596 9.48209C-0.00228715 9.55077 0.00931558 9.61925 0.0344529 9.68324C0.0595901 9.74723 0.0977193 9.80535 0.146447 9.85395C0.195174 9.90254 0.253448 9.94057 0.31761 9.96564C0.381773 9.99071 0.450439 10.0023 0.519298 9.99963C0.588158 9.99698 0.655724 9.98016 0.717757 9.95022C0.779789 9.92029 0.834948 9.8779 0.879772 9.8257L5.02977 5.69178L9.17477 9.8257C9.27042 9.90739 9.39346 9.95008 9.5193 9.94523C9.64514 9.94038 9.76451 9.88836 9.85355 9.79955C9.9426 9.71074 9.99477 9.59169 9.99963 9.46619C10.0045 9.34068 9.96169 9.21798 9.87977 9.12258L5.73477 4.98867Z"
                      fill="#181C32"
                    />
                  </svg>
                </button>
              </div>
              <p className="mt-4 text-xs sm:text-sm text-[#A1A5B7]">
                Allowed file types: png, jpg, jpeg.
              </p>
              <input id="file-input" type="file" onChange={uploadPhoto} />
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
