
import React from 'react';
import BasicModal from './BasicModal';
import InputForm from 'components/Widgets/InputForm';

export default function ModalInformation({ action, title }) {
    let inputs = [
        {
          label: 'Jenis Industri',
          type: 'text',
          name: 'full_name',
          errorMessage:
            "Name should be 3-16 characters and shouldn't include any special character!",
          pattern: '^[A-Za-z0-9]{3,16}$',
          required: true,
        },
        {
          label: 'Company Size',
          type: 'number',
          name: 'full_name',
          errorMessage:
            "Name should be 3-16 characters and shouldn't include any special character!",
          pattern: '^[A-Za-z0-9]{3,16}$',
          required: false,
        },
        {
          label: 'Link Website',
          type: 'text',
          name: 'full_name',
          errorMessage:
            "Name should be 3-16 characters and shouldn't include any special character!",
          pattern: '^[A-Za-z0-9]{3,16}$',
          required: false,
        },
        {
          label: 'Link Facebook Page',
          type: 'text',
          name: 'full_name',
          errorMessage:
            "Name should be 3-16 characters and shouldn't include any special character!",
          pattern: '^[A-Za-z0-9]{3,16}$',
          required: false,
        },
        {
          label: 'Link Instagram        ',
          type: 'text',
          name: 'full_name',
          errorMessage:
            "Name should be 3-16 characters and shouldn't include any special character!",
          pattern: '^[A-Za-z0-9]{3,16}$',
          required: false,
        },
        
      ];
  return (
    <BasicModal action={action} title={title}>
      <div className="my-5">
        <div className="px-8">
        {inputs.map((input, index) => (
            <InputForm key={index} {...input} />
          ))}
        </div>
      </div>
    </BasicModal>
  );
}