import React from 'react';
import BasicCard from 'components/Widgets/BasicCard';
import ModalAboutCompany from 'components/Modal/ModalAboutCompany';
import { useBusinessProfileContext } from 'context/business-profile-context';
import SkeletonCard from 'components/SkeletonCard';
export default function AboutCompany() {
  const {businessProfile } = useBusinessProfileContext();
  let isEmpty = Object.keys(businessProfile).length === 0
  return (
    <>
      {isEmpty && <SkeletonCard />}
      {!isEmpty && (
        <BasicCard>
          <section className="text-left">
            <div className="flex items-center justify-between px-8">
              <h3 className="text-base font-semibold ">Tentang Perusahaan</h3>
              <ModalAboutCompany
                title={'Tentang Perusahaan'}
                action={'Edit'}
                data={businessProfile}
              ></ModalAboutCompany>
            </div>
            <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
            <div className="px-8">
              <div className="my-5 h-[200px] rounded-md bg-[#F5F8FA] ">
                <p className="p-4 text-[#2A2F32] md:text-base">
                  {businessProfile.about}
                </p>
              </div>
            </div>
          </section>
        </BasicCard>
      )}
    </>
  );
}
