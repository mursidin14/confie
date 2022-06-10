import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import BasicCard from 'components/Widgets/BasicCard';
import Skeleton from 'react-loading-skeleton';
import ProfileService from 'services/Profile/ProfileService';
import 'react-loading-skeleton/dist/skeleton.css';

export default function AccountSetting() {
  const [data, setData] = useState({});
  const [dataUpdate, setDataUpdate] = useState({})
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response_profile = await ProfileService.getProfileData();
      setData(response_profile.data.data);
      setLoading(false);
    }
    fetchData();
  }, []);
  function handleOnChange(e) {
    const { name, value } = e.target;
    setDataUpdate({ ...data, [name]: value });
  }
  async function handleUpdate() {
    const response = await ProfileService.updateProfileData(data);
    console.log(response)
  }
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
      {loading ? (
        <Skeleton />
      ) : (
        <BasicCard>
          {inputs.map((input) => (
            <InputFormProfile key={input.name} {...input} data={data} handleOnChange={handleOnChange} />
          ))}
          <hr className="my-2 mx-2 border border-dashed" />
          {inputs2.map((input) => (
            <InputFormProfile key={input.name} {...input} data={data} handleOnChange={handleOnChange} />
          ))}
          <div className="mt-3 px-10 text-right">
            <button onClick={handleUpdate} className="primary-btn w-fit px-5 py-2">Update</button>
          </div>
        </BasicCard>
      )}
    </Layout>
  );
}
function InputFormProfile({ label, handleOnChange, data, ...inputProps }) {
  return (
    <div className="flex flex-col items-center justify-between px-10 lg:flex-row">
      <label className="w-full text-left text-sm lg:w-1/3 lg:text-base">
        {label}
      </label>
      <div className="my-2 w-full grow lg:w-fit lg:py-3">
        <input
          value={data[inputProps.name] === undefined ? '' : data[inputProps.name]}
          onChange={handleOnChange}
          {...inputProps}
          className="input-form"
        />
        {inputProps.type === 'password' && (
          <p className="my-2 text-left text-xs italic text-[#A1A5B7] lg:text-sm">
            Leave this field blank if you don’t want to change password
          </p>
        )}
      </div>
    </div>
  );
}
function SkeletonCard() {
  return (
    <div className="my-3 rounded-md bg-white py-7 px-3 shadow-mine sm:px-8">
      <div className="flex items-start gap-3 lg:items-stretch">
        <Skeleton width={200} height={150} />
        <div className="hidden flex-col justify-between sm:flex">
          <Skeleton width={200} height={20} />
          <Skeleton width={200} height={100} />
          <Skeleton width={200} height={50} />
        </div>
        <div className="flex flex-col justify-between sm:hidden">
          <Skeleton width={100} height={20} />
          <Skeleton width={100} height={100} />
          <Skeleton width={100} height={50} />
        </div>
      </div>
    </div>
  );
}
