import React, { useState } from 'react';
import Pagination from 'components/Widgets/Pagination';
import ModalCertification from 'components/Modal/ModalCertification';
import UpdateCertificationModal from 'components/ModalUpdate/UpdateCertificationModal';
import ProfileService from 'services/Profile/ProfileService';
import utils from 'utils/utils';
import SweetAlert from 'components/SweetAlert';

export default function CertificationCard({data_profile}) {
  let certification = data_profile || []
  const [pagination, setPagination] = useState({
    sliceOne: 0,
    sliceTwo: 4,
  })
  async function handleDelete(id) {
    const response = await ProfileService.deleteCertificate(id)
 }
  return (
    <div className="lg:relative">
      <div className="mt-4 rounded-md bg-white pt-7 pb-2  text-left shadow-mine ">
        <div className="flex items-center justify-between px-8">
          <h3 className="text-base font-semibold ">
            Sertifikasi & Penghargaan
          </h3>
          <ModalCertification></ModalCertification>
        </div>
        <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
        <div className="my-5">
          <div className="overflow-auto">
            <Table items={certification.slice(pagination.sliceOne, pagination.sliceTwo)} handleDelete={handleDelete}></Table>
          </div>
        </div>
        <div className="flex justify-center">
          {certification.length > 4 ? <Pagination length={certification.length} pagination={pagination} setPagination={setPagination} /> : null}
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
          <th className="w-[10%] pl-10 text-left">Nama</th>
          <th className="w-[10%] ">Instansi</th>
          <th className="w-[6%]">Tahun</th>
          <th className="w-[6%]">Action</th>
        </tr>
      </thead>
      <tbody>
      {!items.length > 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 font-semibold text-xs italic text-[#7E8299]">
                  Tidak ada data
                </td>
              </tr>
            )}
        {items.map((item, index) => (
          <tr
            className="mt-3 h-20 border-b-2 border-gray-300/50 text-sm text-[#7E8299]"
            key={index}
          >
            <td className="w-[10%] pl-10 text-left ">{item.name}</td>
            <td className="w-[10%] ">{item.agency}</td>
            <td className="w-[6%] ">{(item.year)}</td>
            <td className="w-[6%]">
              <div className="flex justify-center gap-2">
                <UpdateCertificationModal item={item} id={item.id}></UpdateCertificationModal>
                <SweetAlert handleDelete={handleDelete} item={item}></SweetAlert>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
