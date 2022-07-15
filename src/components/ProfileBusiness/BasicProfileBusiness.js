import React from 'react';
import BasicCard from 'components/Widgets/BasicCard';
import ModalProfileBusiness from 'components/Modal/ModalProfileBusiness';
import { useBusinessProfileContext } from 'context/business-profile-context';
import SkeletonCard from 'components/SkeletonCard';
import  utils, { getYear } from 'utils/utils';
import EditLogoCompany from './EditLogoCompany';

export default function BasicProfileBusiness({ input, index }) {
  const { businessProfile } = useBusinessProfileContext();
  let isEmpty = Object.keys(businessProfile).length === 0
  let inputs = [
    {
      label: 'Nama Perusahaan',
      value: businessProfile.full_name,
    },
    {
      label: 'Email Perusahaan',
      value: businessProfile.email,
    },
    {
      label: 'Negara',
      value: utils.makeCapital(businessProfile.country),
    },
    {
      label: 'Provinsi',
      value: utils.makeCapital(businessProfile.province_name),
    },
    {
      label: 'Kota',
      value: utils.makeCapital(businessProfile.city_name),
    },
    {
      label: 'Alamat Perusahaan',
      value: utils.makeCapital(businessProfile.address),
    },
    {
      label: 'Tahun Berdiri',
      value: getYear(businessProfile.date_of_birth),
    },
  ];
  return (
    <>
      {isEmpty && <SkeletonCard />}
      {!isEmpty && (
        <BasicCard>
          <section className="text-left">
            <div className="flex items-center justify-between px-8">
              <h3 className="text-base font-semibold ">Informasi Dasar</h3>
              <ModalProfileBusiness
                action={'Edit'}
                title={'Informasi Dasar'}
              ></ModalProfileBusiness>
            </div>
            <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
            <div className="my-5">
              <div className="px-8">
                <EditLogoCompany />
                <div className="mb-5 lg:flex">
                  <div className="lg:w-5/12">
                    <label className="text-xs after:text-pink-500 after:content-['*'] lg:text-base">
                      Banner Perusahaan
                    </label>
                  </div>
                  <div className="w-7/12">
                    <img src="/banner.png" alt="" />
                  </div>
                </div>
                {inputs.map((input, index) => (
                  <DataPersonal key={index} {...input} />
                ))}
              </div>
            </div>
          </section>
        </BasicCard>
      )}
    </>
  );
}

function DataPersonal({ label, value }) {
  return (
    <div className=" items-center lg:flex ">
      <div className="w-5/12">
        <label className="text-xs after:text-pink-500 after:content-['*'] lg:text-base">
          {label}
        </label>
      </div>
      <div className="lg:w-7/12">
        <p className="w-full rounded-md bg-soft-gray px-5 py-3 my-2 lg:my-5 text-justify">{value}</p>
      </div>
    </div>
  );
}
