import React, { useState }from 'react';
import BasicModal from './BasicModal';
import InputForm from 'components/Widgets/InputForm';
import { updateCompanyInformation } from 'services/Profile/ProfileService';
import { useBusinessProfileContext } from 'context/business-profile-context';
import { UpdateInputSkill } from 'components/InputSkill';
import UpdateFieldBusiness from 'components/ProfileBusiness/UpdateFieldBusiness';

export default function ModalField({ action, title, data }) {
  const { businessProfile } = useBusinessProfileContext();
  const [error, setError] = useState([]);
  const [dataInformation, setDataInformation] = useState({
    ...businessProfile,
    company_type: '',
    company_size: '',
    link_website: '',
    link_facebook_page:'',
    link_instagram: '',
  });
  React.useEffect(() => {
    if (Array.isArray(businessProfile.businessData)) {
      setDataInformation(businessProfile.businessData[0]);
    }
  }, [businessProfile]);

  
  const handleSubmit =  async () => {
    if (dataInformation.company_size === '' || dataInformation.company_type === '') {
      setError(['Company size and company type is required'])
      return
    }
    const response = await updateCompanyInformation(dataInformation)
    window.location.reload()
  };
  
  return (
    <BasicModal handleSubmit={handleSubmit} action={action} title={title}>
      <div className="my-5">
        <div className="px-8">
          <UpdateFieldBusiness />
          <section>
            {error.map((err, index) => (
              <p key={index} className="text-red-500 text-xs italic">{err}</p>
            ))}
          </section>
         
        </div>
      </div>
    </BasicModal>
  );
}
