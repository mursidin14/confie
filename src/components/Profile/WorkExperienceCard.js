import React, { useState } from 'react';
import Pagination from 'components/Widgets/Pagination';
import ModalWorkExperience from 'components/Modal/ModalWorkExperience';
import UpdateWorkExperience from 'components/ModalUpdate/UpdateWorkExperience';
import ProfileService from 'services/Profile/ProfileService';
import utils, { getLength } from 'utils/utils';
import SweetAlert from 'components/Widgets/SweetAlert';
export default function WorkExperienceCard({ data_profile }) {
  let workExperience = data_profile;
  const [pagination, setPagination] = useState({
    sliceOne: 0,
    sliceTwo: 4,
  });
  async function handleDelete(id) {
    const response = await ProfileService.deleteJobExperience(id);
  }

  return (
    <div className="lg:relative">
      <div className="mt-4 rounded-md bg-white pt-7 pb-2  text-left shadow-mine ">
        <div className="flex items-center justify-between px-8">
          <h3 className="text-base font-semibold ">Pengalaman Kerja</h3>
          <ModalWorkExperience></ModalWorkExperience>
        </div>
        <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
        <div className="my-5">
          <div className="overflow-auto">
            <Table
              items={workExperience.slice(
                pagination.sliceOne,
                pagination.sliceTwo
              )}
              handleDelete={handleDelete}
            ></Table>
          </div>
        </div>
        <div className="flex justify-center">
          {workExperience.length > 4 ? <Pagination
            length={workExperience.length}
            pagination={pagination}
            setPagination={setPagination}
            howMany={4}
          /> : null}
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
          <th className="w-[10%] pl-10 text-left">Posisi</th>
          <th className="w-[10%] ">Instansi</th>
          <th className="w-[6%]">Tahun Mulai</th>
          <th className="w-[6%]">Tahun Selesai</th>
          <th className="w-[16%]">Deskripsi</th>
          <th className="w-[6%]">Action</th>
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
            className="mt-3 border-b-2 border-gray-300/50 text-sm text-[#7E8299] h-32"
            key={index}
          >
            <td className="w-[10%] pl-10 text-left">{item.position}</td>
            <td className="w-[10%] ">{item.agency}</td>
            <td className="w-[6%] ">{utils.getMonthYear(item.start_date)}</td>
            <td className="w-[6%] ">
              {item.is_current ? 'Sekarang' : utils.getMonthYear(item.end_date)}
            </td>
            <td className={` w-[16%] px-8 py-4 ${getLength(item.description) ? 'text-left' : 'text-center'} lg:py-1 lg:px-3`}>
              {item.description}
            </td>
            <td className="w-[6%]">
              <div className="flex justify-center gap-2">
                <UpdateWorkExperience item={item} id={item.id}></UpdateWorkExperience>
                <SweetAlert item={item} handleDelete={handleDelete}></SweetAlert>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
