import React from 'react';
import BasicModal from './BasicModal';
export default function ModalAboutCompany({ action, title }) {
  return (
    <BasicModal action={action} title={title}>
      <div className="my-5">
        <div className="px-8">
          <textarea
            className="w-full bg-[#F5F8FA] p-5 lg:h-[200px]"
            name="about_me"
          ></textarea>
        </div>
      </div>
    </BasicModal>
  );
}
