import React from 'react';
import BasicCard from 'components/Widgets/BasicCard';
import ModalProfileBusiness from 'components/Modal/ModalProfileBusiness';

export default function BasicProfileBusiness({ input, index }) {
  let inputs = [
    {
      label: 'Nama Perusahaan',
    },
    {
      label: 'Email Perusahaan',
    },
    {
      label: 'Negara',
    },
    {
      label: 'Provinsi',
    },
    {
      label: 'Kota',
    },
    {
      label: 'Alamat Perusahaan',
    },
    {
      label: 'Tahun Berdiri',
    },

  ];
  return (
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
            <div className="mb-5 lg:flex">
              <div className="w-5/12">
                <label className="text-xs after:text-pink-500 after:content-['*'] lg:text-base">
                  Logo Perusahaan
                </label>
              </div>
              <div className="w-7/12">
                <img className="w-20 sm:w-32" src="/person.png" alt="" />
              </div>
            </div>
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
  );
}

function DataPersonal({ label }) {
  return (
    <div className=" items-center lg:flex ">
      <div className="w-5/12">
        <label className="text-xs after:text-pink-500 after:content-['*'] lg:text-base">
          {label}
        </label>
      </div>
      <div className="lg:w-7/12">
        <p className="input-form my-2 lg:my-5 lg:py-3 "></p>
      </div>
    </div>
  );
}
