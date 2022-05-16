import React from 'react'
import BasicCard from 'components/BasicCard'
import ModalInformation from 'components/Modal/ModalInformation'
export default function Information() {
  let inputs = [
    {
      label: 'Jenis Industri',
      require: true
    },
    {
      label: 'Company Size',
      require: false
    },
    {
      label: 'Link Website',
      require: false
    },
    {
      label: 'Link Facebook page',
      require: false
    },
    {
      label: 'Link Instagram',
      require: false
    },
  ];
  return (
    <BasicCard>
      <section className="text-left">
        <div className="flex items-center justify-between px-8">
          <h3 className="text-base font-semibold ">Informasi Lengkap</h3>
          <ModalInformation
            action={'Edit'}
            title={'Informasi Lengkap'}
          ></ModalInformation>
        </div>
        <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
        <div className="my-5 px-8">
            {inputs.map((input, index) => (
              <DataPersonal key={index} {...input} />
            ))}
        </div>
      </section>
    </BasicCard>
  )
}
function DataPersonal({ label, require }) {
  return (
    <div className=" items-center lg:flex ">
      <div className="w-5/12">
        <label className={`text-xs lg:text-base after:content-['*'] ${require ?'after:text-pink-500' : 'after:text-white'}`}>
          {label}
        </label>
      </div>
      <div className="lg:w-7/12">
        <p className="input-form my-2 lg:my-5 lg:py-3 "></p>
      </div>
    </div>
  );
}