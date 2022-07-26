import React, { useState } from 'react';
import Pagination from 'components/Widgets/Pagination';
import ProfileService from 'services/Profile/ProfileService';
import SweetAlert from 'components/Widgets/SweetAlert';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment} from 'react';
import ModalPublication from 'components/Modal/ModalPublication';
import UpdatePublicationModal from 'components/ModalUpdate/UpdatePublicationModal';
export default function PaperCard({data_profile}) {
  let papers = data_profile || []
  const [pagination, setPagination] = useState({
    sliceOne: 0,
    sliceTwo: 4,
  })
  const [isOpenAccept, setIsOpenAccept] = useState(false);
  const closeModalAccept = () => {
    setIsOpenAccept(false);
    window.location.reload();
  };
  async function handleDelete(id) {
    const response = await ProfileService.deletePublication(id)
    if(response.status === 200){
      setIsOpenAccept(true);
    }
 }
  return (
    <>
    <div className="lg:relative">
      <div className="mt-4 rounded-md bg-white pt-7 pb-2  text-left shadow-mine ">
        <div className="flex items-center justify-between px-8">
          <h3 className="text-base font-semibold ">
           Porto Karya
          </h3>
          <ModalPublication></ModalPublication>
        </div>
        <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
        <div className="my-5">
          <div className="overflow-auto">
            <Table items={papers.slice(pagination.sliceOne, pagination.sliceTwo)} handleDelete={handleDelete}></Table>
          </div>
        </div>
        <div className="flex justify-center">
          {papers.length > 4 ? <Pagination length={papers.length} howMany={4} pagination={pagination} setPagination={setPagination} /> : null}
        </div>
      </div>
    </div>
    <Transition appear show={isOpenAccept} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 overflow-y-auto"
          onClose={closeModalAccept}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div>
                    <div className="flex items-center justify-center p-8">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M50 93.75C38.3968 93.75 27.2688 89.1406 19.0641 80.9359C10.8594 72.7312 6.25 61.6032 6.25 50C6.25 38.3968 10.8594 27.2688 19.0641 19.0641C27.2688 10.8594 38.3968 6.25 50 6.25C61.6032 6.25 72.7312 10.8594 80.9359 19.0641C89.1406 27.2688 93.75 38.3968 93.75 50C93.75 61.6032 89.1406 72.7312 80.9359 80.9359C72.7312 89.1406 61.6032 93.75 50 93.75ZM50 100C63.2608 100 75.9785 94.7322 85.3553 85.3553C94.7322 75.9785 100 63.2608 100 50C100 36.7392 94.7322 24.0215 85.3553 14.6447C75.9785 5.26784 63.2608 0 50 0C36.7392 0 24.0215 5.26784 14.6447 14.6447C5.26784 24.0215 0 36.7392 0 50C0 63.2608 5.26784 75.9785 14.6447 85.3553C24.0215 94.7322 36.7392 100 50 100Z"
                          fill="#50CD89"
                        />
                        <path
                          d="M68.5624 31.0625C68.5179 31.1057 68.4761 31.1516 68.4374 31.2L46.7312 58.8563L33.6499 45.7688C32.7613 44.9408 31.586 44.49 30.3717 44.5115C29.1573 44.5329 27.9986 45.0248 27.1398 45.8837C26.281 46.7425 25.789 47.9011 25.7676 49.1155C25.7461 50.3299 26.1969 51.5052 27.0249 52.3938L43.5624 68.9375C44.0079 69.3822 44.5384 69.7327 45.1223 69.9679C45.7062 70.2031 46.3315 70.3183 46.9608 70.3067C47.5902 70.295 48.2108 70.1567 48.7855 69.9C49.3603 69.6433 49.8774 69.2735 50.3062 68.8125L75.2562 37.625C76.1057 36.7334 76.5702 35.5431 76.5492 34.3117C76.5283 33.0803 76.0235 31.9066 75.144 31.0444C74.2645 30.1822 73.0811 29.7007 71.8495 29.7041C70.6179 29.7075 69.4371 30.1955 68.5624 31.0625Z"
                          fill="#50CD89"
                        />
                      </svg>
                    </div>
                    <p className="mx-auto w-full text-center text-[#7E8299] lg:w-[400px]">
                      Data berhasil dihapus!
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

function Table({ items, handleDelete }) {
  return (
    <table className="w-full min-w-[700px] table-fixed text-center text-xs sm:text-base">
      <thead className="bg-[#F5F8FA] ">
        <tr className="h-[60px] text-sm text-[#181C32]">
          <th className="w-[30%] pl-10 text-left">Judul Karya Tulis</th>
          {/* <th className="w-[10%] ">Instansi</th> */}
          {/* <th className="w-[6%]">Tahun</th> */}
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
            <td className="w-[30%] pl-10 text-left ">{item.title}</td>
            {/* <td className="w-[10%] ">{item.agency}</td> */}
            {/* <td className="w-[6%] ">{(item.year)}</td> */}
            <td className="w-[6%]">
              <div className="flex justify-center gap-2">
                <UpdatePublicationModal item={item} id={item.id}></UpdatePublicationModal>
                <SweetAlert handleDelete={handleDelete} item={item}></SweetAlert>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
