import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import BasicCard from 'components/BasicCard';
export default function AccountSetting() {
  const [data, setData] = useState({
    full_name: '',
    email: '',
  });
  const [loading, setLoading] = useState(true);
  let inputs = [
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      required: true,
    },
    {
      name: 'username',
      type: 'text',
      label: 'Username',
      required: true,
    },
  ];
  let inputs2 = [
    {
      name: 'new_password',
      type: 'password',
      label: 'New Password',
      required: true,
    },
    {
      name: 'confirm_password',
      type: 'password',
      label: 'Confirm New Password',
      required: true,
    },
  ];
  return (
    <Layout PageName={'Account Setting'}>
      <BasicCard>
        {inputs.map((input) => (
          <InputFormProfile key={input.name} {...input} data={data} />
        ))}
        <hr className="my-2 mx-2 border border-dashed" />
        {inputs2.map((input) => (
          <InputFormProfile key={input.name} {...input} data={data} />
        ))}
        <div className='text-right px-10 mt-3'>
          <button className='primary-btn w-fit px-5 py-2'>Update</button>
        </div>
      </BasicCard>
    </Layout>
  );
}
function InputFormProfile({ label, handleOnChange, data, ...inputProps }) {
  return (
    <div className="items-center justify-between px-10 lg:flex-row flex flex-col">
      <label className="lg:w-1/3 w-full text-left text-sm lg:text-base">{label}</label>
      <div className="my-2 lg:py-3 grow lg:w-fit w-full">
        <input
          value={data[inputProps.name]}
          onChange={handleOnChange}
          {...inputProps}
          className="input-form"
        />
        {inputProps.type === 'password' && (
          <p className="lg:text-sm text-xs italic text-[#A1A5B7] text-left my-2">
            Leave this field blank if you don’t want to change password
          </p>
        )}
      </div>
    </div>
  );
}
