import React from 'react';
import BasicModal from './BasicModal';
import InputForm from 'components/Widgets/InputForm';
import { updateCompanyInformation } from 'services/Profile/ProfileService';

export default function ModalInformation({ action, title }) {
  const [dataInformation, setDataInformation] = React.useState({
    company_type: '',
    company_size: '',
    link_website: '',
    link_facebook_page: '',
    link_instagram: '',
  });
  const handleChange = (e) => {
    setDataInformation({
      ...dataInformation,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit =  async () => {
    await updateCompanyInformation(dataInformation)
    window.location.reload()
  };
  const inputs = [
    {
      label: 'Jenis Industri',
      type: 'text',
      name: 'company_type',
      required: true,
    },
    {
      label: 'Company Size',
      type: 'text',
      name: 'company_size',
      required: false,
    },
    {
      label: 'Link Website',
      type: 'text',
      name: 'link_website',
      required: false,
    },
    {
      label: 'Link Facebook Page',
      type: 'text',
      name: 'link_facebook_page',
      required: false,
    },
    {
      label: 'Link Instagram',
      type: 'text',
      name: 'link_instagram',
      required: false,
    },
  ];
  return (
    <BasicModal handleSubmit={handleSubmit} action={action} title={title}>
      <div className="my-5">
        <div className="px-8">
          {inputs.map((input, index) => (
            <InputForm key={index} {...input} data={dataInformation} handleChange={handleChange} />
          ))}
        </div>
      </div>
    </BasicModal>
  );
}
