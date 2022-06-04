import React, { useState } from 'react';
import Pagination from 'components/Widgets/Pagination';
import ModalWorkExperience from 'components/Modal/ModalWorkExperience';
import UpdateWorkExperience from 'components/ModalUpdate/UpdateWorkExperience';
import ProfileService from 'services/Profile/ProfileService';
import utils from 'utils/utils';
export default function WorkExperienceCard({data_profile}) {
  const [openEdit, setOpenEdit] = useState({
    id: null,
    open: false,
  });
  let workExperience = data_profile
  async function handleDelete(id) {
    const response = await ProfileService.deleteJobExperience(id);
    window.location.reload();
  }
  function handleEdit(id) {
    setOpenEdit({
      id,
      open: true,
    });
  }
  return (
    <div className="lg:relative">
      <div className="mt-4 rounded-md bg-white pt-7 pb-2  text-left shadow-md ">
        <div className="flex items-center justify-between px-8">
          <h3 className="text-base font-semibold ">Pengalaman Kerja</h3>
          <ModalWorkExperience edit={openEdit} setEdit={setOpenEdit}></ModalWorkExperience>
        </div>
        <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
        <div className="my-5">
          <div className="overflow-auto">
            <Table items={workExperience} handleDelete={handleDelete} handleEdit={handleEdit}></Table>
          </div>
        </div>
        <div className='flex justify-center'>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

function Table({ items, handleDelete, handleEdit}) {
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
        {items.map((item, index) => (
          <tr
            className="mt-3 border-b-2 border-gray-300/50 text-sm text-[#7E8299] sm:h-32 "
            key={index}
          >
            <td className="w-[10%] pl-10 text-left">{item.position}</td>
            <td className="w-[10%] ">{item.agency}</td>
            <td className="w-[6%] ">{utils.getMonthYear(item.start_date)}</td>
            <td className="w-[6%] ">{utils.getMonthYear(item.end_date)}</td>
            <td className="w-[16%] px-8 py-4 text-center lg:py-1 lg:px-3">
              {item.description}
            </td>
            <td className="w-[6%]">
              <div className="flex justify-center gap-2">
                <UpdateWorkExperience id={item.id}></UpdateWorkExperience>
                <button onClick={()=>{
                  handleDelete(item.id)
                }}>
                  <svg
                    className="w-11"
                    width="34"
                    height="34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 4.225C0 1.8916 1.8916 0 4.225 0H29.775C32.1084 0 34 1.8916 34 4.225V29.775C34 32.1084 32.1084 34 29.775 34H4.225C1.8916 34 0 32.1084 0 29.775V4.225Z"
                      fill="#FFF5F8"
                    />
                    <path
                      d="M11.75 14.75C11.75 14.3358 12.0858 14 12.5 14H21.5C21.9142 14 22.25 14.3358 22.25 14.75V21.5C22.25 22.7427 21.2427 23.75 20 23.75H14C12.7574 23.75 11.75 22.7427 11.75 21.5V14.75Z"
                      fill="#F1416C"
                    />
                    <path
                      opacity="0.5"
                      d="M11.75 11.75C11.75 11.3358 12.0858 11 12.5 11H21.5C21.9142 11 22.25 11.3358 22.25 11.75C22.25 12.1642 21.9142 12.5 21.5 12.5H12.5C12.0858 12.5 11.75 12.1642 11.75 11.75Z"
                      fill="#F1416C"
                    />
                    <path
                      opacity="0.5"
                      d="M14.75 11C14.75 10.5858 15.0858 10.25 15.5 10.25H18.5C18.9142 10.25 19.25 10.5858 19.25 11H14.75Z"
                      fill="#F1416C"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}




