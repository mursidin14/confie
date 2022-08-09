import React, { useState } from 'react';
import BasicModal from './BasicModal';
import { updateCompanyInformation } from 'services/Profile/ProfileService';
import { useBusinessProfileContext } from 'context/business-profile-context';
import UpdateFieldBusiness from 'components/ProfileBusiness/UpdateFieldBusiness';

export default function ModalField({ action, title, data }) {
  const { businessProfile } = useBusinessProfileContext();
  const [error, setError] = useState([]);
  const [dataInformation, setDataInformation] = useState({
    ...businessProfile,
    company_type: [],
    company_size: '',
    link_website: '',
    link_facebook_page: '',
    link_instagram: '',
  });
  React.useEffect(() => {
    if (Array.isArray(businessProfile.businessData)) {
      const field = businessProfile.businessFields.map((item) => item.name);
      setDataInformation({...businessProfile.businessData[0], company_type: field});  
    }
  }, [businessProfile]);

  const handleSubmit = async () => {
    if (
      dataInformation.company_size === '' ||
      dataInformation.company_type === ''
    ) {
      setError(['Company size and company type is required']);
      return;
    }
    const response = await updateCompanyInformation(dataInformation);
    window.location.reload();
  };

  return (
    <BasicModal handleSubmit={handleSubmit} action={action} title={title}>
      <div className="my-5">
        <div className="px-8">
          <UpdateFieldBusiness
            skills={dataInformation.company_type.map((item) => {
              return {
                name: item,
              };
            })}
            data={dataInformation}
            onChange={setDataInformation}
          />
          <section>
            {error.map((err, index) => (
              <p key={index} className="text-xs italic text-red-500">
                {err}
              </p>
            ))}
          </section>
        </div>
      </div>
    </BasicModal>
  );
}
