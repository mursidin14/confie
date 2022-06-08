import React, {useState} from 'react'
import Pagination from 'components/Widgets/Pagination';
import ModalInternship from 'components/Modal/ModalInternship';
import ProfileService from 'services/Profile/ProfileService';
import UpdateIntershipExperience from 'components/ModalUpdate/UpdateIntershipExperience';
import utils, { getLength } from 'utils/utils';
import SweetAlert from 'components/SweetAlert';
export default function InternExperienceCard({data_profile}) {

  let internExperience = data_profile
  const [pagination, setPagination] = useState({
    sliceOne: 0,
    sliceTwo: 4,
  })
  async function handleDelete(id) {
      const response = await ProfileService.deleteIntershipExperience(id)
  }

  return (
    <div className='lg:relative'>
      <div className="mt-4 rounded-md bg-white pt-7 pb-2  text-left shadow-mine ">
        <div className="flex items-center justify-between px-8">
          <h3 className="text-base font-semibold ">Pengalaman Magang</h3>
          <ModalInternship></ModalInternship>
        </div>
        <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
        <div className="my-5">
        <div className="overflow-auto">
            <Table items={internExperience.slice(pagination.sliceOne, pagination.sliceTwo)} handleDelete={handleDelete}></Table>
          </div>
        </div>
        <div className='flex justify-center'>
          {internExperience.length > 4 ? <Pagination length={internExperience.length} pagination={pagination} setPagination={setPagination}/> : null}
        </div>
      </div>
    </div>

  )
}

function Table({items, handleDelete}) {
    return (
    <table className="table-fixed text-xs sm:text-base min-w-[700px] w-full text-center">
      <thead className="bg-[#F5F8FA] ">
        <tr className="h-[60px] text-sm text-[#181C32]">
          <th className="pl-10 w-[10%] text-left">Posisi</th>
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
                <td colSpan="6" className="text-center py-4 font-semibold">
                  Tidak ada data
                </td>
              </tr>
            )}
        {items.map((item, index) => (
          <tr
            className="mt-3 text-sm h-32 border-b-2 border-gray-300/50 text-[#7E8299]"
            key={index}
          >
            <td className="pl-10 w-[10%] text-left">{item.position}</td>
            <td className="w-[10%] ">{item.agency}</td>
            <td className="w-[6%] ">{utils.getMonthYear(item.start_date)}</td>
            <td className="w-[6%] ">{item.is_current ? 'Sekarang' : utils.getMonthYear(item.end_date)}</td>
            <td className={`w-[16%] ${getLength(item.description) ? 'text-left' : 'text-center'} lg:px-3 px-8 lg:py-1 py-4`}>{item.description}</td>
            <td className="w-[6%]">
              <div className="flex justify-center gap-2">
                <UpdateIntershipExperience item={item} id={item.id}></UpdateIntershipExperience>
                <SweetAlert item={item} handleDelete={handleDelete}></SweetAlert>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    );
}



