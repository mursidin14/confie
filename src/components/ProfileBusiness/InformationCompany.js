import React from 'react';
import BasicCard from 'components/Widgets/BasicCard';
import ModalInformation from 'components/Modal/ModalInformation';
import { useBusinessProfileContext } from 'context/business-profile-context';
export default function Information() {
  const { businessProfile } = useBusinessProfileContext();
  const [data, setData] = React.useState({
    company_size: '',
    company_type: '',
    link_facebook_page: '',
    link_instagram: '',
    link_website: '',
  });
  React.useEffect(() => {
    if (Array.isArray(businessProfile.businessData)) {
      const field = businessProfile.businessFields.map((item) => item.name);
      setData(businessProfile.businessData[0]);
    }
  }, [businessProfile]);
  const inputs = [
    {
      label: 'Company Size',
      require: false,
      value: data?.company_size || '-',
    },
    {
      label: 'Link Website',
      require: false,
      value: data?.link_website || '-',
    },
    {
      label: 'Link Facebook page',
      require: false,
      value: data?.link_facebook_page || '-',
    },
    {
      label: 'Link Instagram',
      require: false,
      value: data?.link_instagram || '-',
    },
  ];
  return (
    <BasicCard>
      <section className="text-left">
        <div className="flex items-center justify-between px-8">
          <h3 className="text-base font-semibold ">Informasi Tambahan</h3>
          <ModalInformation
            data={data}
            action={'Edit'}
            title={'Informasi Tambahan'}
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
  );
}
function DataPersonal({ label, require, value }) {
  return (
    <div className=" my-4 items-center lg:flex">
      <div className="w-5/12">
        <label
          className={`text-xs after:content-['*'] lg:text-base ${
            require ? 'after:text-pink-500' : 'after:text-white'
          }`}
        >
          {label}
        </label>
      </div>
      <div className="lg:w-7/12">
        <p className="w-full rounded-md bg-soft-gray p-5 py-3">{value}</p>
      </div>
    </div>
  );
}
