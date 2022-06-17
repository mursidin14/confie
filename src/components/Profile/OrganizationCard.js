import React, { useState } from 'react';
import Pagination from 'components/Widgets/Pagination';
import ProfileService from 'services/Profile/ProfileService';
import UpdateOrganization from 'components/ModalUpdate/UpdateOrganization';
import utils, { getLength } from 'utils/utils';
import SweetAlert from 'components/Widgets/SweetAlert';
import ModalOrganization from 'components/Modal/ModalOrganization';
export default function OrganizationCard({ data_profile }) {
  let organizationHistory = data_profile;
  const [pagination, setPagination] = useState({
    sliceOne: 0,
    sliceTwo: 4,
  })
  async function handleDelete(id) {
    const response = await ProfileService.deleteOrganization(id);
  }
  return (
    <div className="lg:relative">
      <div className="mt-4 rounded-md bg-white pt-7 pb-2  text-left shadow-mine ">
        <div className="flex items-center justify-between px-8">
          <h3 className="text-base font-semibold ">Pengalaman Organisasi / Relawan</h3>
          <ModalOrganization></ModalOrganization>
        </div>
        <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
        <div className="my-5">
          <div className="overflow-auto">
            <Table items={organizationHistory.slice(pagination.sliceOne, pagination.sliceTwo)} handleDelete={handleDelete}></Table>
          </div>
        </div>
        <div className="flex justify-center">
          {organizationHistory.length > 4 ? <Pagination length={organizationHistory.length} pagination={pagination} setPagination={setPagination} howMany={4}/> : null}
        </div>
      </div>
    </div>
  );
}

function Table({ items, handleDelete }) {
  return (
    <table className="w-full min-w-[700px] table-fixed text-center text-xs sm:text-base">
      <thead className="bg-[#F5F8FA] ">
        <tr className="h-[60px] text-sm text-[#181C32]">
          <th className="w-[20%] pl-10 text-left">Lembaga Organisasi</th>
          <th className="w-[25%] ">Jabatan/Tugas</th>
          <th className="w-[15%]">Tahun Aktif</th>
          <th className="w-[30%]">Deskripsi</th>
          <th className="w-[10%]">Action</th>
        </tr>
      </thead>
      <tbody>
      {!items.length > 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4 font-semibold text-xs italic text-[#7E8299]">
                  Tidak ada data
                </td>
              </tr>
            )}
        {items.map((item, index) => (
          <tr
            className="mt-3 h-32 border-b-2  border-gray-300/50 text-sm text-[#7E8299]"
            key={index}
          >
            <td className="w-[10%] pl-10 text-left">{item.school}</td>
            <td className="w-[10%] ">{item.major}</td>
            <td className="w-[6%] ">{(item.start_date)}</td>
            <td className="w-[20%] ">{item.description}</td>
            <td className="w-[6%]">
              <div className="flex justify-center gap-2">
                <UpdateOrganization item={item} id={item.id}/>
                <SweetAlert item={item} handleDelete={handleDelete}></SweetAlert>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
