import React from 'react';
import LayoutBusiness from 'components/Layout/LayoutBusiness';
import { useParams } from 'react-router-dom';
import BasicCard from 'components/Widgets/BasicCard';
import ModalTeamMember from 'components/Modal/ModalTeamMember';
import Pagination from 'components/Widgets/Pagination';
import { BusinessProvider } from 'context/business-context';
import AlertEmailNotVerifiedBusiness from 'components/Modal/AlertEmailNotVerifiedBusiness';
export default function TeamMember() {
  const { id } = useParams();

  let internExperience = [
    {
      id: 1,
      name: 'Andi Pratama',
      email: 'andi.pratama@gmail.com',
      job_title: 'Staff Sales',
      date: 'Mar 2022',
      detail: '/detail',
    },
  ];

  return (
    <BusinessProvider>
      <LayoutBusiness userId={id} PageName="Team Member">
        <BasicCard>
          <section>
            <div className="flex items-center justify-between px-8">
              <h3 className="text-base font-semibold ">List Team Member</h3>
              <ModalTeamMember></ModalTeamMember>
            </div>
            <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
          </section>
          <section className="my-2 overflow-y-auto">
            <Table items={internExperience}></Table>
            <div className="mt-5 flex w-full justify-end pr-8">
              <Pagination></Pagination>
            </div>
          </section>
        </BasicCard>
        <AlertEmailNotVerifiedBusiness />
      </LayoutBusiness>
    </BusinessProvider>
  );
}

function Table({ items }) {
  return (
    <table className="w-full min-w-[700px] table-fixed text-center text-xs sm:text-base">
      <thead className="bg-[#F5F8FA] ">
        <tr className="h-[60px] text-sm text-[#181C32]">
          <th className="w-[5%] pl-10 text-left">No.</th>
          <th className="w-[10%] text-left">Nama</th>
          <th className="w-[15%]  text-left">Email</th>
          <th className="w-[6%]">Jabatan</th>
          <th className="w-[10%]">Tanggal Assign</th>
          <th className="w-[10%]">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr
            className="mt-3 h-20 border-b-2 border-gray-300/50 text-sm text-[#7E8299] last:border-b-0"
            key={index}
          >
            <td className="w-[5%] pl-10 text-left">{item.id}</td>
            <td className="w-[10%] text-left">{item.name}</td>
            <td className="w-[15%] text-left">{item.email}</td>
            <td className="w-[6%] ">{item.job_title}</td>
            <td className="w-[16%] py-4 text-center lg:py-1">{item.date}</td>
            <td className="w-[15%]">
              <a
                className="rounded-md bg-[#F5F8FA] px-5 py-3"
                href={item.detail}
              >
                Lihat Profile
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
