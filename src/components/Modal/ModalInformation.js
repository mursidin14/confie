import React, { useState }from 'react';
import BasicModal from './BasicModal';
import InputForm from 'components/Widgets/InputForm';
import { updateCompanyInformation } from 'services/Profile/ProfileService';
import { useBusinessProfileContext } from 'context/business-profile-context';

export default function ModalInformation({ action, title, data }) {
  const { businessProfile } = useBusinessProfileContext();
  const [error, setError] = useState([]);
  const [dataInformation, setDataInformation] = useState({
    ...businessProfile,
    company_size: '',
    link_website: '',
    link_facebook_page:'',
    link_instagram: '',
  });
  React.useEffect(() => {
    if (Array.isArray(businessProfile.businessData)) {
      const field = businessProfile.businessFields.map((item) => item.name);
      setDataInformation({...businessProfile.businessData[0], company_type: field});      
    }
  }, [businessProfile]);

  const handleChange = (e) => {
	const { name, value } = e.target;
    setDataInformation({
      ...dataInformation,
      [name]: value,
    });
  }
  const handleSubmit =  async () => {
    if (dataInformation.company_size === '' || dataInformation.company_type === '') {
      setError(['Company size is required'])
      return
    }
    const response = await updateCompanyInformation(dataInformation)
    if(response.status === 422){
      return
    }
    window.location.reload()
  };
  const inputs = [
   
    {
      label: 'Company Size',
      type: 'text',
      name: 'company_size',
      required: false,
	  value: dataInformation?.company_size || '-',
    },
    {
      label: 'Link Website',
      type: 'text',
      name: 'link_website',
      required: false,
	  value: dataInformation?.link_website || '-',
    },
    {
      label: 'Link Facebook Page',
      type: 'text',
      name: 'link_facebook_page',
      required: false,
	  value: dataInformation?.link_facebook_page || '-',
    },
    {
      label: 'Link Instagram',
      type: 'text',
      name: 'link_instagram',
      required: false,
	  value: data?.link_instagram || '-',
    },
  ];
  return (
    <BasicModal handleSubmit={handleSubmit} action={action} title={title}>
      <div className="my-5">
        <div className="px-8">
          {inputs.map((input, index) => (
            <InputForm key={index} {...input} data={dataInformation} handleChange={handleChange} />
          ))}
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
