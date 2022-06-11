import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import Pagination from 'components/Widgets/Pagination';
import SelectBox from 'components/SelecBox';
import ProfileService from 'services/Profile/ProfileService';
import ModalError from 'components/Modal/ModalError';
export default function Application() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  let datas = [
    {
      no: 1,
      name_job: 'Frontend Developer',
      company: 'PT. Bintang Jaya',
      date_application: 'Jan 2021',
      status: {
        rejected: false,
        name: 'Lamaran Diterima',
      },
      detail: '/detailApplication',
    },
    {
      no: 2,
      name_job: 'Frontend Developer',
      company: 'PT. Bintang Jaya',
      date_application: 'Jan 2021',
      status: {
        rejected: false,
        name: 'Lamaran Diterima',
      },
      detail: '/detailApplication',
    },
    {
      no: 3,
      name_job: 'Frontend Developer',
      company: 'PT. Bintang Jaya',
      date_application: 'Jan 2021',
      status: {
        rejected: false,
        name: 'Lamaran Diterima',
      },
      detail: '/detailApplication',
    },
    {
      no: 4,
      name_job: 'Frontend Developer',
      company: 'PT. Bintang Jaya',
      date_application: 'Jan 2021',
      status: {
        rejected: false,
        name: 'Lamaran Diterima',
      },
      detail: '/detailApplication',
    },
    {
      no: 5,
      name_job: 'Frontend Developer',
      company: 'PT. Bintang Jaya',
      date_application: 'Jan 2021',
      status: {
        rejected: false,
        name: 'Lamaran Diterima',
      },
      detail: '/detailApplication',
    },
    {
      no: 6,
      name_job: 'Frontend Developer',
      company: 'PT. Bintang Jaya',
      date_application: 'Jan 2021',
      status: {
        rejected: false,
        name: 'Lamaran Diterima',
      },
      detail: '/detailApplication',
    },
    {
      no: 7,
      name_job: 'Frontend Developer',
      company: 'PT. Bintang Jaya',
      date_application: 'Jan 2021',
      status: {
        rejected: false,
        name: 'Lamaran Diterima',
      },
      detail: '/detailApplication',
    },
  ];
  const closeError = () => {
    window.location.href = '/dashboard';
  }
  const [pagination, setPagination] = useState({
    sliceOne: 0,
    sliceTwo: 4,
  });
  useEffect(() => {
    async function fetchData() {
      const response_profile = await ProfileService.getProfileData();
      if (response_profile.data.meta.email_verified_at == null) {
        setError(true);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {!loading && !error && (
        <Layout PageName={'Lamaran Saya'}>
          <div className="rounded-md bg-white p-6 shadow-mine">
            <div className="w-full items-center justify-between lg:flex">
              <div className="flex w-fit items-center justify-between gap-3 rounded-md border-2 border-dashed border-[#009EF7] bg-[#F1FAFF] p-2 lg:p-3">
                <svg
                  width="18"
                  height="21"
                  viewBox="0 0 18 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.25"
                    d="M0 3.57874C0 2.09629 1.34314 0.894531 3 0.894531H12.7574C13.553 0.894531 14.3161 1.17733 14.8787 1.68072L17.1213 3.6873C17.6839 4.19068 18 4.87342 18 5.58532V17.8945C18 19.377 16.6569 20.5788 15 20.5788H3C1.34314 20.5788 0 19.377 0 17.8945V3.57874Z"
                    fill="#00A3FF"
                  />
                  <path
                    d="M8.61712 8.12061C8.49916 8.1643 8.38865 8.22901 8.2928 8.31481L5.2928 10.999C4.90228 11.3484 4.90228 11.9149 5.2928 12.2644C5.68332 12.6138 6.31649 12.6138 6.70701 12.2644L7.99989 11.1075V15.2106C7.99989 15.7048 8.44761 16.1054 8.9999 16.1054C9.55219 16.1054 9.99988 15.7048 9.99988 15.2106V11.1075L11.2928 12.2644C11.6833 12.6138 12.3165 12.6138 12.707 12.2644C13.0975 11.9149 13.0975 11.3484 12.707 10.999L9.70701 8.31481C9.41234 8.05116 8.97959 7.98645 8.61712 8.12061Z"
                    fill="#00A3FF"
                  />
                </svg>
                <p className="text-xs lg:text-sm">
                  <span>2</span> Lamaran Dalam Proses
                </p>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs lg:mt-0 lg:justify-end lg:text-sm">
                <SelectBox
                  menus={[
                    { name: 'All Time' },
                    { name: 'Today' },
                    { name: 'Last Week' },
                    { name: 'Last Month' },
                  ]}
                ></SelectBox>
                <SelectBox
                  menus={[
                    { name: 'All Status' },
                    { name: 'Lamaran Diterima' },
                    { name: 'Seleksi Berkas' },
                    { name: 'Tes Online' },
                    { name: 'Wawancara' },
                    { name: 'SELESAI' },
                  ]}
                ></SelectBox>
                <button className="primary-btn flex w-fit items-center justify-center gap-2 rounded-md px-5 py-3 text-xs lg:text-sm">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.43744 13.6788C8.56359 13.6179 8.6699 13.5234 8.74435 13.4061C8.8188 13.2888 8.85841 13.1533 8.85871 13.015V9.02502C8.85871 8.82852 8.93869 8.63952 9.08191 8.50002L13.7448 3.95951C13.886 3.82225 13.9982 3.65877 14.0748 3.47854C14.1514 3.2983 14.191 3.1049 14.1912 2.90951V0.992514C14.1908 0.894486 14.1707 0.797499 14.1322 0.707103C14.0937 0.616707 14.0375 0.534677 13.9667 0.46571C13.8959 0.396742 13.8121 0.342191 13.7199 0.305179C13.6277 0.268167 13.529 0.249421 13.4294 0.250014H1.24091C0.819642 0.250014 0.479126 0.581514 0.479126 0.992514V2.90951C0.479126 3.30326 0.639862 3.68126 0.925529 3.95951L5.58838 8.50002C5.65903 8.56862 5.71514 8.65036 5.75346 8.74048C5.79177 8.8306 5.81153 8.92732 5.81159 9.02502V13.7575C5.81159 14.3088 6.4073 14.6673 6.91388 14.4205L8.43744 13.6788Z"
                      fill="white"
                    />
                  </svg>
                  <p>Filter</p>
                </button>
              </div>
            </div>
            <div className="overflow-auto">
              <Table
                items={datas.slice(pagination.sliceOne, pagination.sliceTwo)}
              ></Table>
            </div>
            <div className="mr-2 flex w-full justify-center lg:justify-end">
              <Pagination
                length={datas.length}
                pagination={pagination}
                setPagination={setPagination}
                howMany={4}
              />
            </div>
          </div>
        </Layout>
      )}
      {!loading && error && <ModalError error={error} closeModal={closeError} error_msg={`u haven't verify ur email`}></ModalError>}
    </>
  );
}

function Table({ items }) {
  return (
    <table className="mt-5 w-full min-w-[700px] table-fixed text-center text-xs sm:text-base">
      <thead className=" ">
        <tr className="border-b-solid h-[60px] border-b text-sm text-[#B5B5C3] ">
          <th className="w-[5%] pl-3 text-left">NO</th>
          <th className="w-[20%] pl-10 text-left">LOWONGAN KERJA</th>
          <th className="w-[20%]">PERUSAHAAN</th>
          <th className="w-[20%]">TANGGAL LAMARAN</th>
          <th className="w-[20%]">STATUS</th>
          <th className="w-[15%]">DETAIL</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr className="mt-3 h-32 text-sm text-[#7E8299]" key={index}>
            <td className="w-[5%] pl-3 text-left">{item.no}</td>
            <td className="w-[20%] pl-10 text-left">{item.name_job}</td>
            <td className="w-[20%]">{item.company}</td>
            <td className="w-[20%]">{item.date_application}</td>
            <td className="w-[20%]">
              <div
                className={`mx-auto w-fit rounded px-4 py-3 ${
                  item.status.rejected
                    ? 'bg-[#FFF5F8] text-[#F1416C]'
                    : 'bg-[#E8FFF3] text-[#50CD89]'
                }`}
              >
                <p className="">{item.status.name}</p>
              </div>
            </td>
            <td className="w-[15%]">
              <a
                className="rounded-md bg-[#F5F8FA] px-5 py-3"
                href={item.detail}
              >
                View
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
