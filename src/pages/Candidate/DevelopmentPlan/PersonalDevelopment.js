import Layout from 'components/Layout/Layout';
import React, { useEffect, useState } from 'react';
import ProgressBar from 'components/Widgets/ProgressBar';
import ModalTarget from 'components/Modal/ModalTarget';
import PersonalPlanService from 'services/PersonalPlan/PersonalPlan';
import SweetAlert from 'components/Widgets/SweetAlert';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment} from 'react';
export default function PersonalDevelopment() {
  const [target, setTarget] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpenAccept, setIsOpenAccept] = useState(false);
  const [isVerified, setIsVerifed] = useState(true)
  const closeModalAccept = () => {
    setIsOpenAccept(false);
    window.location.reload();
  };
  const closeModalVerified = () => {

  }
  useEffect(() => {
    async function getTarget() {
      const response = await PersonalPlanService.getPersonalPlanData();
      setTarget(response.data.data);
      setLoading(false);
      const email = JSON.parse(localStorage.getItem('user')).email_verified_at
      setIsVerifed(email) 
    }
    getTarget();
  }, []);
  async function handleDelete(id) {
    const response = await PersonalPlanService.deletePersonalPlanData(id);
    if (response.status === 200) {
      setIsOpenAccept(true);
    }
  }

  return (
    <Layout PageName={'Personal Development Plan'}>
      <div className="lg:relative">
        <div className="mt-4 rounded-md bg-white pt-7 pb-2  text-left shadow-mine ">
          <div className="flex items-center justify-between px-8">
            <h3 className="text-base font-semibold ">Target Tahunan</h3>
            <ModalTarget></ModalTarget>
          </div>
          <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
          <div className="overflow-auto">
            <Table handleDelete={handleDelete} items={target} loading={loading}></Table>
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
      <Transition appear show={true} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 overflow-y-auto"
          onClose={closeModalVerified}
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
                      <img src="/email_alert.png" alt=""/>
                    </div>
                    <p className="mx-auto w-full text-center text-[#7E8299] lg:w-[400px]">
                      Your email hasn't verified!. Please verify your email address before access this page. 
                    </p>
                    <button onClick={()=>{
                      window.location.href = '/dashboard'
                    }} className='mt-1 text-xs font-semibold text-center w-full'><p>Back to home</p></button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Layout>
  );
}
function Table({ items, loading, handleDelete }) {
  return (
    <div>
      {items === 'Not found' ? (
        <div className="text-center">There's No Plan</div>
      ) : (
        <table className="w-full min-w-[700px] table-fixed text-center text-xs sm:text-base">
          <thead className="bg-[#F5F8FA] ">
            <tr className="h-[60px] text-sm text-[#181C32]">
              <th className="w-[5%] pl-10 text-left">Nama</th>
              <th className="w-[10%] ">Tanggal Mulai</th>
              <th className="w-[6%]">Progress</th>
              <th className="w-[6%]">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan="4" className="py-3 text-center text-sm">
                  Loading...
                </td>
              </tr>
            )}
            {!loading &&
              items.map((item, index) => (
                <tr
                  className="mt-3 h-20 border-b-2 border-gray-300/50 text-sm text-[#7E8299] last:border-b-0"
                  key={index}
                >
                  <td className="w-[10%] pl-10 text-left ">{item.title}</td>
                  <td className="w-[10%] ">
                    {formatDate(item.start_date * 1000)}
                  </td>
                  <td className="relative bottom-2 w-[6%] text-[#A1A5B7] ">
                    <p className="mb-2 text-left">{item.process}%</p>
                    <ProgressBar
                      progressPercentage={item.process}
                    ></ProgressBar>
                  </td>
                  <td className="w-[6%]">
                    <div className="flex justify-center gap-2">
                      <a href={`/pdp/detail/${item.id}`}>
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
                      <SweetAlert item={item} handleDelete={handleDelete}></SweetAlert>
                    </div>
                  </td>
                </tr>
              ))}
            {!items.length > 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 font-semibold text-xs italic text-[#7E8299]">
                  Tidak ada data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
