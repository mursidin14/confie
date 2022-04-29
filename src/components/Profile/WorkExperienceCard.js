import React, { useState } from 'react';
import Pagination from 'components/Widgets/Pagination';
import ModalWorkExperience from 'components/Modal/ModalWorkExperience';
export default function WorkExperienceCard() {
  const [modal, setModal] = useState(false);

  let workExperience = [
    {
      id: 1,
      posisi: 'Frontend Developer',
      company: 'PT. Bintang Jaya',
      start: 'Jan 2021',
      end: 'Mar 2021',
      des: 'Managed complex projects from start to finish, Collaborated with other designers, Translated requirements intopolished, high-level designs',
      delete: './delete.png',
      edit: './edit.png',
    },
  ];
  
  return (
    <div className="lg:relative">
      <div className="mt-4 rounded-md bg-white pt-7 pb-2  text-left shadow-md ">
        <div className="flex items-center justify-between px-8">
          <h3 className="text-base font-semibold ">Pengalaman Kerja</h3>
          <ModalWorkExperience></ModalWorkExperience>
        </div>
        <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
        <div className="my-5">
          <div className="overflow-auto">
            <Table items={workExperience}></Table>
          </div>
        </div>
        <div className='flex justify-center'>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

function Table({ items }) {
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
            <td className="w-[10%] pl-10 text-left">{item.posisi}</td>
            <td className="w-[10%] ">{item.company}</td>
            <td className="w-[6%] ">{item.start}</td>
            <td className="w-[6%] ">{item.end}</td>
            <td className="w-[16%] px-8 py-4 text-left lg:py-1 lg:px-3">
              {item.des}
            </td>
            <td className="w-[6%]">
              <div className="flex justify-center gap-2">
                <a href="">
                  <svg
                    className="w-11"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 4.225C0 1.8916 1.8916 0 4.225 0H29.775C32.1084 0 34 1.8916 34 4.225V29.775C34 32.1084 32.1084 34 29.775 34H4.225C1.8916 34 0 32.1084 0 29.775V4.225Z"
                      fill="#FFF8DD"
                    />
                    <path
                      opacity="0.3"
                      d="M25.05 14.2649L23.4307 15.8833L19.1137 11.5663L20.7322 9.94705C21.0186 9.66076 21.4069 9.5 21.8119 9.5C22.2168 9.5 22.6051 9.66076 22.8915 9.94705L25.05 12.1056C25.3363 12.3919 25.4971 12.7803 25.4971 13.1852C25.4971 13.5901 25.3363 13.9785 25.05 14.2649ZM11.7652 24.4491L16.4152 22.8988L12.0982 18.5818L10.548 23.2318C10.4911 23.4016 10.4828 23.5841 10.5239 23.7584C10.565 23.9328 10.654 24.0922 10.7808 24.2187C10.9077 24.3451 11.0673 24.4337 11.2417 24.4744C11.4162 24.5152 11.5985 24.5064 11.7682 24.4491H11.7652Z"
                      fill="#FE9A00"
                    />
                    <path
                      d="M13.1805 23.975L11.769 24.446C11.5995 24.5024 11.4175 24.5106 11.2436 24.4695C11.0697 24.4284 10.9106 24.3398 10.7842 24.2134C10.6578 24.0871 10.5691 23.9281 10.5279 23.7542C10.4867 23.5803 10.4947 23.3984 10.551 23.2288L11.022 21.8165L13.1805 23.975ZM12.1013 18.5787L16.4183 22.8957L23.4338 15.8802L19.1168 11.5632L12.1013 18.5787Z"
                      fill="#FE9A00"
                    />
                  </svg>
                </a>
                <a href="">
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
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}




