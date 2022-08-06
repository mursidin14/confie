import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import InputForm from 'components/Widgets/InputForm';
import {
  updateTeamMember,
} from 'services/Business/TeamMember/TeamMember';
import utils from 'utils/utils';

export default function UpdateTeamMember({ dataItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState([]);
  const [data, setData] = useState({
    email: dataItem.email,
    position: dataItem.current_job.position,
    assigned_at: utils.getYearMonthDay(dataItem.current_job.assigned_at),
  });
  const [isAssigned, setIsAssigned] = useState(false);
  async function handleUpdate() {
    setIsAssigned(true);
    if (
      data['assigned_at'] === '' ||
      data['position'] === '' ||
      data['email'] === ''
    ) {
      setError(['Please fill all required fields']);
      return;
    }
    data['assigned_at'] = utils.timeEpoch(data['assigned_at']);
    const response = await updateTeamMember(dataItem.id, data);
    if (response.data.meta.status === 'error') {
      if (response.data.meta.code === 400) {
        setError(['User is already a member of this company']);
        return;
      }
      if (response.data.meta.code === 404) {
        setError(['User Not Found']);
        return;
      }
      let errors = [];
      let error = response.data.data;
      for (const key in error) {
        errors.push(error[key][0]);
      }
      setError(errors);
      return;
    }
  }
  // const handleInviteMember = async () => {
  //   delete data['position'];
  //   const response = await invitationMember(data);
  //   console.log(response);
  // };
  // function handleAssignMember() {
  //   setIsOpenAccept(false);
  // }
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const inputs = [
    {
      label: 'Email',
      name: 'email',
      required: true,
      type: 'email',
    },
    {
      label: 'Jabatan',
      name: 'position',
      required: true,
      type: 'text',
    },
    {
      label: 'Tanggal Assign',
      name: 'assigned_at',
      required: true,
      type: 'date',
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center">
        <button type="button" onClick={openModal}>
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
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                  {!isAssigned && (
                    <>
                      <div className="flex items-center justify-between px-8">
                        <h3 className="text-base font-semibold ">
                          Update Team Member
                        </h3>
                      </div>
                      <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
                      {inputs.map((input, index) => (
                        <InputForm
                          key={index}
                          data={data}
                          handleChange={(e) =>
                            setData({
                              ...data,
                              [e.target.name]: e.target.value,
                            })
                          }
                          {...input}
                        />
                      ))}
                      <section className="px-8 text-left text-sm text-red-500">
                        {error.map((err, index) => (
                          <p key={index}>{err}</p>
                        ))}
                      </section>
                      <div className="mt-4 flex justify-end gap-4 px-8">
                        <button
                          onClick={closeModal}
                          className="rounded-md bg-[#F5F8FA] px-4 py-2 text-sm"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleUpdate}
                          className="rounded-md bg-[#FE9A00] px-4 py-2 text-sm text-white"
                        >
                          Update
                        </button>
                      </div>
                    </>
                  )}

                  {/* {error.length === 0 && isAssigned && (
                    <>
                      <div className="flex items-center justify-center p-8">
                        <svg
                          width="100"
                          height="70"
                          viewBox="0 0 80 70"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M78.9969 65.2344L42.4344 1.95312C41.8894 1.0127 40.949 0.546875 39.9998 0.546875C39.0506 0.546875 38.1014 1.0127 37.5652 1.95312L1.00272 65.2344C-0.0783393 67.1152 1.27518 69.4531 3.43729 69.4531H76.5623C78.7244 69.4531 80.0779 67.1152 78.9969 65.2344ZM37.1873 26.5625C37.1873 26.1758 37.5037 25.8594 37.8904 25.8594H42.1092C42.4959 25.8594 42.8123 26.1758 42.8123 26.5625V42.7344C42.8123 43.1211 42.4959 43.4375 42.1092 43.4375H37.8904C37.5037 43.4375 37.1873 43.1211 37.1873 42.7344V26.5625ZM39.9998 57.5C38.8958 57.4775 37.8447 57.0231 37.0719 56.2344C36.2991 55.4457 35.8663 54.3855 35.8663 53.2812C35.8663 52.177 36.2991 51.1168 37.0719 50.3281C37.8447 49.5394 38.8958 49.085 39.9998 49.0625C41.1038 49.085 42.1549 49.5394 42.9277 50.3281C43.7005 51.1168 44.1333 52.177 44.1333 53.2812C44.1333 54.3855 43.7005 55.4457 42.9277 56.2344C42.1549 57.0231 41.1038 57.4775 39.9998 57.5Z"
                            fill="#A1A5B7"
                          />
                        </svg>
                      </div>
                      <p className="mx-auto w-full text-center text-[#7E8299] lg:w-[400px]">
                        User belum terdaftar dalam Confie.id
                      </p>
                      <div className="flex justify-center">
                        <button
                          onClick={handleInviteMember}
                          className="my-6 rounded-md bg-[#FE9A00] px-4 py-2 text-sm text-white"
                        >
                          Undang Member
                        </button>
                      </div>
                    </>
                  )} */}

                  {/* {loading && (
                    <>
                      <div className="flex items-center justify-center gap-5 p-8">
                        <span className="animate-bounceOne rounded-full bg-[#7E8299] p-3"></span>
                        <span className="animate-bounceTwo rounded-full bg-[#7E8299] p-3"></span>
                        <span className="animate-bounceOne rounded-full bg-[#7E8299] p-3"></span>
                      </div>
                    </>
                  )} */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* <Transition appear show={isOpenAccept} as={Fragment}>
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
                        height="70"
                        viewBox="0 0 80 70"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M78.9969 65.2344L42.4344 1.95312C41.8894 1.0127 40.949 0.546875 39.9998 0.546875C39.0506 0.546875 38.1014 1.0127 37.5652 1.95312L1.00272 65.2344C-0.0783393 67.1152 1.27518 69.4531 3.43729 69.4531H76.5623C78.7244 69.4531 80.0779 67.1152 78.9969 65.2344ZM37.1873 26.5625C37.1873 26.1758 37.5037 25.8594 37.8904 25.8594H42.1092C42.4959 25.8594 42.8123 26.1758 42.8123 26.5625V42.7344C42.8123 43.1211 42.4959 43.4375 42.1092 43.4375H37.8904C37.5037 43.4375 37.1873 43.1211 37.1873 42.7344V26.5625ZM39.9998 57.5C38.8958 57.4775 37.8447 57.0231 37.0719 56.2344C36.2991 55.4457 35.8663 54.3855 35.8663 53.2812C35.8663 52.177 36.2991 51.1168 37.0719 50.3281C37.8447 49.5394 38.8958 49.085 39.9998 49.0625C41.1038 49.085 42.1549 49.5394 42.9277 50.3281C43.7005 51.1168 44.1333 52.177 44.1333 53.2812C44.1333 54.3855 43.7005 55.4457 42.9277 56.2344C42.1549 57.0231 41.1038 57.4775 39.9998 57.5Z"
                          fill="#A1A5B7"
                        />
                      </svg>
                    </div>
                    <p className="mx-auto w-full text-center text-[#7E8299] lg:w-[400px]">
                      User belum terdaftar dalam Confie.id
                    </p>
                    <div className="flex justify-center">
                      <button
                        onClick={handleAssignMember}
                        className="my-6 rounded-md bg-[#FE9A00] px-4 py-2 text-sm text-white"
                      >
                        Undang Member
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition> */}
    </>
  );
}
