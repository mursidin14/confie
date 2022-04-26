import React, { useEffect, useState } from 'react';

export default function PersonalInfomationCard() {
  const [modal, setModal] = useState(false);
  let inputs = [
    {
      label: 'Full Name',
    },
    {
      label: 'Phone Number',
    },
    {
      label: 'Email',
    },
    {
      label: 'Gender',
    },
    {
      label: 'Date of Birth',
    },
    {
      label: 'Country',
    },
    {
      label: 'Province',
    },
    {
      label: 'City',
    },
  ];
  function handleClick() {
    setModal(!modal);
  }


  return (
    <div className='lg:relative'>
      <div className="mt-4 rounded-md bg-white pt-7 pb-2  text-left shadow-md ">
        <div className="flex items-center justify-between px-8">
          <h3 className="text-base font-semibold ">Personal Infomation</h3>
          <button
            onClick={handleClick}
            className="primary-btn h-fit w-fit px-6 py-2 text-xs"
          >
            Edit
          </button>
        </div>
        <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
        <div className="my-5">
          <div className="px-8">
            <div className="mb-5 lg:flex">
              <div className="w-5/12">
                <label className="text-xs lg:text-base" >
                  Avatar
                </label>
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
      <Modal isOpen={modal} handleClick={handleClick} />
    </div>
  );
}

function DataPersonal({ label }) {
  return (
    <div className=" items-center lg:flex ">
      <div className="w-5/12">
        <label className="text-xs lg:text-base" >
          {label}
        </label>
      </div>
      <div className="lg:w-7/12">
        <p className="input-form my-2 lg:my-5 lg:py-3 "></p>
      </div>
    </div>
  );
}

function InputFormProfile({ label, ...inputProps }) {
  return (
    <div className=" items-center lg:flex">
      <div className="w-5/12">
        <label className="text-xs lg:text-base" >
          {label}
        </label>
      </div>
      <div className="lg:w-7/12">
        <input {...inputProps} className="input-form my-2 lg:my-5 lg:py-3 " />
      </div>
    </div>
  );
}

function Modal({isOpen, handleClick}) {
  let inputs = [
    {
      label: 'Full Name',
      type: 'text',
      name: 'full_name',
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      name: 'phone_number',
      label: 'Phone Number',
      type: 'number',
      errorMessage: 'It should be a valid phone number!',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      required: true,
    },
    {
      name: 'gender',
      type: 'text',
      errorMessage: 'It should be a valid email address!',
      label: 'Gender',
      required: true,
    },
    {
      name: 'date_of_birth',
      type: 'date',
      errorMessage: 'It should be a valid email address!',
      label: 'Date of Birth',
      required: true,
    },
    {
      name: 'country',
      type: 'text',
      errorMessage: 'It should be a valid email address!',
      label: 'Country',
      required: true,
    },
    {
      name: 'province',
      type: 'text',
      errorMessage: 'It should be a valid email address!',
      label: 'Province',
      required: true,
    },
    {
      name: 'city',
      type: 'text',
      errorMessage: 'It should be a valid email address!',
      label: 'City',
      required: true,
    },
    
    
  ];
  return (
    <div
      className={`${
        isOpen ? 'top-3' : '-top-[1200px]'
      } absolute inset-0 mt-4 h-fit rounded-md bg-white pt-7 pb-2 text-left shadow-md max-w-4xl lg:mx-auto z-50 transition-all duration-[1000ms] mx-2`}
    >
      <div className="flex items-center justify-between px-8">
        <h3 className="text-base font-semibold ">Personal Infomation</h3>
      </div>
      <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
      <div className="my-5">
        <div className="px-8">
          <div className="mb-5 lg:flex">
            <div className="w-5/12">
              <label className="text-xs lg:text-base">
                Avatar
              </label>
            </div>
            <div className="w-7/12">
              <img className="w-20 sm:w-32" src="/person.png" alt="" />
            </div>
          </div>
          {inputs.map((input, index) => (
            <InputFormProfile key={index} {...input} />
          ))}
        </div>
      </div>
      <div className="my-5 flex justify-end gap-4 px-8">
        <button onClick={handleClick} className="rounded-md bg-[#F5F8FA] px-4 py-2 text-sm">Cancel</button>
        <button className="rounded-md bg-[#FE9A00] px-4 py-2 text-white text-sm">
          Submit
        </button>
      </div>
    </div>
  );
}
