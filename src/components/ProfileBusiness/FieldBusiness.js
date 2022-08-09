import React from 'react';
import BasicCard from 'components/Widgets/BasicCard';
import { useBusinessProfileContext } from 'context/business-profile-context';
import ModalField from 'components/Modal/ModalField';

export default function FieldBusiness() {
  const { businessProfile } = useBusinessProfileContext();
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    if (Array.isArray(businessProfile.businessData)) {
      const field = businessProfile.businessFields.map((item) => item.name);
      setData(field);
    }
  }, [businessProfile]);
  return (
    <>
      <BasicCard>
        <section className="text-left">
          <div className="flex items-center justify-between px-8">
            <h3 className="text-base font-semibold ">Jenis Industri</h3>
            <ModalField
              data={data}
              action={'Edit'}
              title={'Jenis Industri'}
            ></ModalField>
          </div>
          <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
          <div className="my-5 px-8">
            <div className="flex flex-wrap gap-2">
              {data.map((item, index) => (
                <p
                  key={index}
                  className="rounded-md bg-[#A1A5B7] px-5 py-1 text-xs text-white md:text-base"
                >
                  {item.toUpperCase()}
                </p>
              ))}
            </div>
          </div>
        </section>
      </BasicCard>
    </>
  );
}
