import React from 'react';
import BasicCard from 'components/Widgets/BasicCard';
import ModalAboutCompany from 'components/Modal/ModalAboutCompany';
export default function AboutCompany() {
  return (
    <BasicCard>
      <section className="text-left">
        <div className="flex items-center justify-between px-8">
          <h3 className="text-base font-semibold ">Tentang Perusahaan</h3>
          <ModalAboutCompany title={"Tentang Perusahaan"} action={"Edit"}></ModalAboutCompany>
        </div>
        <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
        <div className='px-8'>
            <div className="my-5 bg-[#F5F8FA] h-[200px] rounded-md ">
              <p className="text-xs text-[#2A2F32] md:text-base p-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur saepe modi fugiat illo harum dolores laboriosam
                quibusdam cumque earum sed fugit, vel accusantium vero, rem
                cupiditate laborum libero quo sint.
              </p>
            </div>
        </div>
      </section>
    </BasicCard>
  );
}
