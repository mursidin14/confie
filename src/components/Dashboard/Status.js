import React from 'react';
import ProgressBar from 'components/Widgets/ProgressBar';

const getProfileCompletion = (my_profile) => {
  let profile_completion = 0;
  const profile = [
    'about',
    'certificates',
    'city_name',
    'country',
    'date_of_birth',
    'educations',
    'email',
    'experiences',
    'full_name',
    'gender',
    'internships',
    'phone_number',
    'province_name',
    'skills',
  ];
  const total_data = 14;
  profile.forEach((item) => {
    if (
      (Array.isArray(my_profile[item]) && my_profile[item].length > 0) ||
      (Array.isArray(my_profile[item]) === false && my_profile[item] !== '')
    ) {
      profile_completion += 1;
    }
  });
  return Math.round((profile_completion / total_data) * 100);
};


export default function Status({data}) {
  let status = [
    {
      name: 'Kelas Aktif',
      value: '2',
    },
    {
      name: 'Kelas Selesai',
      value: '1',
    },
    {
      name: 'Lamaran Masuk',
      value: '3',
    },
  ];
  return (
    <div className="mt-7 justify-between gap-3 md:mt-0 lg:flex">
      <div className="mt-3 flex w-full gap-2 lg:w-6/12">
        {status.map((item, index) => (
          <div className="flex flex-col justify-center rounded border-2 border-dashed border-[#B5B5C3] px-4 py-1">
            <p className="text-sm font-semibold">{item.value}</p>
            <p className=" text-[10px] text-[#B5B5C3] sm:text-xs">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <ProfileCompletion data={data} />
    </div>
  );
}

function ProfileCompletion({data}) {
  return (
    <div className="mt-3 w-full lg:mt-0 lg:w-6/12 ">
      <div className="flex justify-between">
        <p className="mb-2 text-left text-base text-[#B5B5C3]">
          Profile Completion
        </p>
        <p>{getProfileCompletion(data)}%</p>
      </div>
      <ProgressBar progressPercentage={getProfileCompletion(data)} />
    </div>
  );
}
