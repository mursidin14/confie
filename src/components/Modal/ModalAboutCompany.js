import { useBusinessProfileContext } from 'context/business-profile-context';
import React, { useState } from 'react';
import ProfileService from 'services/Profile/ProfileService';
import BasicModal from './BasicModal';
export default function ModalAboutCompany({ action, title }) {
  const { businessProfile } = useBusinessProfileContext();
  const [error, setError] = useState([]);
  const [data, setData] = useState({
    ...businessProfile,
    about: businessProfile.about,
  });
  const handleSubmit = async () => {
    const response = await ProfileService.updateAbout(data);
    if (response.data.meta.status === 'error') {
      let errors = [];
      let error = response.data.data;
      for (let key in error) {
        errors.push(error[key][0]);
      }
      setError(errors);
      return;
    }
    window.location.reload();
  };
  return (
    <BasicModal action={action} title={title} handleSubmit={handleSubmit}>
      <div className="my-5">
        <div className="px-8">
          <textarea
            className="w-full bg-[#F5F8FA] p-5 lg:h-[200px]"
            name="about"
            value={data.about ?? ''}
            onChange={(e) => {
              setData({ ...data, about: e.target.value });
            }}
          ></textarea>
        <p className={`text-xs ${data?.about?.length > 90 ? 'text-red-500' : 'text-gray-500'}`}>Sisa Karakter: {data.about === null ? '100' : <>{100 - data?.about?.length}</>}</p>
        </div>
      </div>
      <section className="px-8 text-left text-sm text-red-500">
        {error.map((err, index) => (
          <p key={index}>{err}</p>
        ))}
      </section>
    </BasicModal>
  );
}
