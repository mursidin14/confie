import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import InputForm from 'components/Widgets/InputForm';
import {
  addTeamMember,
  invitationMember,
} from 'services/Business/TeamMember/TeamMember';
import utils from 'utils/utils';

export default function ModalTeamMember() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState([]);
  const [data, setData] = useState({
    email: '',
    position: '',
    assigned_at: '',
  });
  const [openInvitation, setOpenInvitation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successInvite, setSuccessInvite] = useState(false);
  async function handleAssign() {
    // setIsAssigned(false);
    setLoading(true);
    if (
      data['assigned_at'] === '' ||
      data['position'] === '' ||
      data['email'] === ''
    ) {
      setError(['Please fill all required fields']);
      setLoading(false);
      return;
    }
    data['assigned_at'] = utils.timeEpoch(data['assigned_at']);
    const response = await addTeamMember(data);
    if (response.data.meta.status === 'error') {
      if (response.data.meta.code === 400) {
        setError(['User is already a member of this company']);
        setLoading(false);
        return;
      }
      if (response.data.meta.code === 404) {
        setOpenInvitation(true);
        setLoading(false);
        return;
      }
      let errors = [];
      let error = response.data.data;
      for (const key in error) {
        errors.push(error[key][0]);
      }
      setError(errors);
      setLoading(false);
      return;
    }
    setSuccessInvite(true);
    setLoading(false);
    // window.location.reload();
  }
  const handleInviteMember = async () => {
    setLoading(true);
    const response = await invitationMember(data);
    if (response.status === 201) {
      setSuccessInvite(true);
    }
    setLoading(false);
    // window.location.reload();
  };
  // function handleAssignMember() {
  //   setIsOpenAccept(false);
  // }
  function closeModal() {
    setIsOpen(false);
    if (successInvite) {
      window.location.reload();
    }
    if(openInvitation){
      setOpenInvitation(false);
    }
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
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-[#FE9A00] px-5 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Assign Member
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
                  {!openInvitation && !successInvite && (
                    <>
                     
                      <div className="flex items-center justify-between px-8">
                        <h3 className="text-base font-semibold ">
                          Assign Team Member
                        </h3>
                      </div>
                      <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
                      {error.length > 0 && (
                        <section className="bg-[#FE3B00] px-4 text-left text-sm text-white py-2 rounded-md flex gap-8 my-2">
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15 1.875C7.75195 1.875 1.875 7.75195 1.875 15C1.875 22.248 7.75195 28.125 15 28.125C22.248 28.125 28.125 22.248 28.125 15C28.125 7.75195 22.248 1.875 15 1.875ZM15 25.8984C8.98242 25.8984 4.10156 21.0176 4.10156 15C4.10156 8.98242 8.98242 4.10156 15 4.10156C21.0176 4.10156 25.8984 8.98242 25.8984 15C25.8984 21.0176 21.0176 25.8984 15 25.8984Z"
                              fill="white"
                            />
                            <path
                              d="M13.5938 20.1562C13.5938 20.5292 13.7419 20.8869 14.0056 21.1506C14.2694 21.4143 14.627 21.5625 15 21.5625C15.373 21.5625 15.7306 21.4143 15.9944 21.1506C16.2581 20.8869 16.4062 20.5292 16.4062 20.1562C16.4062 19.7833 16.2581 19.4256 15.9944 19.1619C15.7306 18.8982 15.373 18.75 15 18.75C14.627 18.75 14.2694 18.8982 14.0056 19.1619C13.7419 19.4256 13.5938 19.7833 13.5938 20.1562ZM14.2969 16.875H15.7031C15.832 16.875 15.9375 16.7695 15.9375 16.6406V8.67188C15.9375 8.54297 15.832 8.4375 15.7031 8.4375H14.2969C14.168 8.4375 14.0625 8.54297 14.0625 8.67188V16.6406C14.0625 16.7695 14.168 16.875 14.2969 16.875Z"
                              fill="white"
                            />
                          </svg>
                          <ul className='mt-1'>
                            {error.map((err, index) => (
                              <li className='list-disc'>
                                <p key={index}>{err}</p>
                              </li>
                            ))}
                          </ul>
                        </section>
                      )}
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
                      <div className="mt-4 flex justify-end gap-4 px-8">
                        <button
                          onClick={closeModal}
                          className="rounded-md bg-[#F5F8FA] px-4 py-2 text-sm"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleAssign}
                          className="rounded-md bg-[#FE9A00] px-4 py-2 text-sm text-white"
                        >
                          {loading ? (
                            <>
                              <svg
                                className="inline-block animate-spin text-center"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_24_24)">
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11 16C11.5304 16 12.0391 16.2107 12.4142 16.5858C12.7893 16.9609 13 17.4696 13 18C13 18.5304 12.7893 19.0391 12.4142 19.4142C12.0391 19.7893 11.5304 20 11 20C10.4696 20 9.96086 19.7893 9.58579 19.4142C9.21071 19.0391 9 18.5304 9 18C9 17.4696 9.21071 16.9609 9.58579 16.5858C9.96086 16.2107 10.4696 16 11 16ZM4.741 13C5.40404 13 6.03993 13.2634 6.50877 13.7322C6.97761 14.2011 7.241 14.837 7.241 15.5C7.241 16.163 6.97761 16.7989 6.50877 17.2678C6.03993 17.7366 5.40404 18 4.741 18C4.07796 18 3.44207 17.7366 2.97323 17.2678C2.50439 16.7989 2.241 16.163 2.241 15.5C2.241 14.837 2.50439 14.2011 2.97323 13.7322C3.44207 13.2634 4.07796 13 4.741 13V13ZM16.319 13.5C16.8494 13.5 17.3581 13.7107 17.7332 14.0858C18.1083 14.4609 18.319 14.9696 18.319 15.5C18.319 16.0304 18.1083 16.5391 17.7332 16.9142C17.3581 17.2893 16.8494 17.5 16.319 17.5C15.7886 17.5 15.2799 17.2893 14.9048 16.9142C14.5297 16.5391 14.319 16.0304 14.319 15.5C14.319 14.9696 14.5297 14.4609 14.9048 14.0858C15.2799 13.7107 15.7886 13.5 16.319 13.5V13.5ZM18.5 9.319C18.8978 9.319 19.2794 9.47704 19.5607 9.75834C19.842 10.0396 20 10.4212 20 10.819C20 11.2168 19.842 11.5984 19.5607 11.8797C19.2794 12.161 18.8978 12.319 18.5 12.319C18.1022 12.319 17.7206 12.161 17.4393 11.8797C17.158 11.5984 17 11.2168 17 10.819C17 10.4212 17.158 10.0396 17.4393 9.75834C17.7206 9.47704 18.1022 9.319 18.5 9.319ZM2.5 6C3.16304 6 3.79893 6.26339 4.26777 6.73223C4.73661 7.20107 5 7.83696 5 8.5C5 9.16304 4.73661 9.79893 4.26777 10.2678C3.79893 10.7366 3.16304 11 2.5 11C1.83696 11 1.20107 10.7366 0.732233 10.2678C0.263392 9.79893 0 9.16304 0 8.5C0 7.83696 0.263392 7.20107 0.732233 6.73223C1.20107 6.26339 1.83696 6 2.5 6V6ZM17.786 5.207C18.0512 5.207 18.3056 5.31236 18.4931 5.49989C18.6806 5.68743 18.786 5.94178 18.786 6.207C18.786 6.47222 18.6806 6.72657 18.4931 6.91411C18.3056 7.10164 18.0512 7.207 17.786 7.207C17.5208 7.207 17.2664 7.10164 17.0789 6.91411C16.8914 6.72657 16.786 6.47222 16.786 6.207C16.786 5.94178 16.8914 5.68743 17.0789 5.49989C17.2664 5.31236 17.5208 5.207 17.786 5.207ZM8 0C8.79565 0 9.55871 0.31607 10.1213 0.87868C10.6839 1.44129 11 2.20435 11 3C11 3.79565 10.6839 4.55871 10.1213 5.12132C9.55871 5.68393 8.79565 6 8 6C7.20435 6 6.44129 5.68393 5.87868 5.12132C5.31607 4.55871 5 3.79565 5 3C5 2.20435 5.31607 1.44129 5.87868 0.87868C6.44129 0.31607 7.20435 0 8 0V0ZM15.5 3C15.6326 3 15.7598 3.05268 15.8536 3.14645C15.9473 3.24021 16 3.36739 16 3.5C16 3.63261 15.9473 3.75979 15.8536 3.85355C15.7598 3.94732 15.6326 4 15.5 4C15.3674 4 15.2402 3.94732 15.1464 3.85355C15.0527 3.75979 15 3.63261 15 3.5C15 3.36739 15.0527 3.24021 15.1464 3.14645C15.2402 3.05268 15.3674 3 15.5 3V3Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_24_24">
                                    <rect width="20" height="20" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </>
                          ) : (
                            'Assign'
                          )}
                        </button>
                      </div>
                    </>
                  )}
                  {openInvitation && !successInvite && (
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
                          {loading ? (
                            <>
                              <svg
                                className="inline-block animate-spin text-center"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_24_24)">
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11 16C11.5304 16 12.0391 16.2107 12.4142 16.5858C12.7893 16.9609 13 17.4696 13 18C13 18.5304 12.7893 19.0391 12.4142 19.4142C12.0391 19.7893 11.5304 20 11 20C10.4696 20 9.96086 19.7893 9.58579 19.4142C9.21071 19.0391 9 18.5304 9 18C9 17.4696 9.21071 16.9609 9.58579 16.5858C9.96086 16.2107 10.4696 16 11 16ZM4.741 13C5.40404 13 6.03993 13.2634 6.50877 13.7322C6.97761 14.2011 7.241 14.837 7.241 15.5C7.241 16.163 6.97761 16.7989 6.50877 17.2678C6.03993 17.7366 5.40404 18 4.741 18C4.07796 18 3.44207 17.7366 2.97323 17.2678C2.50439 16.7989 2.241 16.163 2.241 15.5C2.241 14.837 2.50439 14.2011 2.97323 13.7322C3.44207 13.2634 4.07796 13 4.741 13V13ZM16.319 13.5C16.8494 13.5 17.3581 13.7107 17.7332 14.0858C18.1083 14.4609 18.319 14.9696 18.319 15.5C18.319 16.0304 18.1083 16.5391 17.7332 16.9142C17.3581 17.2893 16.8494 17.5 16.319 17.5C15.7886 17.5 15.2799 17.2893 14.9048 16.9142C14.5297 16.5391 14.319 16.0304 14.319 15.5C14.319 14.9696 14.5297 14.4609 14.9048 14.0858C15.2799 13.7107 15.7886 13.5 16.319 13.5V13.5ZM18.5 9.319C18.8978 9.319 19.2794 9.47704 19.5607 9.75834C19.842 10.0396 20 10.4212 20 10.819C20 11.2168 19.842 11.5984 19.5607 11.8797C19.2794 12.161 18.8978 12.319 18.5 12.319C18.1022 12.319 17.7206 12.161 17.4393 11.8797C17.158 11.5984 17 11.2168 17 10.819C17 10.4212 17.158 10.0396 17.4393 9.75834C17.7206 9.47704 18.1022 9.319 18.5 9.319ZM2.5 6C3.16304 6 3.79893 6.26339 4.26777 6.73223C4.73661 7.20107 5 7.83696 5 8.5C5 9.16304 4.73661 9.79893 4.26777 10.2678C3.79893 10.7366 3.16304 11 2.5 11C1.83696 11 1.20107 10.7366 0.732233 10.2678C0.263392 9.79893 0 9.16304 0 8.5C0 7.83696 0.263392 7.20107 0.732233 6.73223C1.20107 6.26339 1.83696 6 2.5 6V6ZM17.786 5.207C18.0512 5.207 18.3056 5.31236 18.4931 5.49989C18.6806 5.68743 18.786 5.94178 18.786 6.207C18.786 6.47222 18.6806 6.72657 18.4931 6.91411C18.3056 7.10164 18.0512 7.207 17.786 7.207C17.5208 7.207 17.2664 7.10164 17.0789 6.91411C16.8914 6.72657 16.786 6.47222 16.786 6.207C16.786 5.94178 16.8914 5.68743 17.0789 5.49989C17.2664 5.31236 17.5208 5.207 17.786 5.207ZM8 0C8.79565 0 9.55871 0.31607 10.1213 0.87868C10.6839 1.44129 11 2.20435 11 3C11 3.79565 10.6839 4.55871 10.1213 5.12132C9.55871 5.68393 8.79565 6 8 6C7.20435 6 6.44129 5.68393 5.87868 5.12132C5.31607 4.55871 5 3.79565 5 3C5 2.20435 5.31607 1.44129 5.87868 0.87868C6.44129 0.31607 7.20435 0 8 0V0ZM15.5 3C15.6326 3 15.7598 3.05268 15.8536 3.14645C15.9473 3.24021 16 3.36739 16 3.5C16 3.63261 15.9473 3.75979 15.8536 3.85355C15.7598 3.94732 15.6326 4 15.5 4C15.3674 4 15.2402 3.94732 15.1464 3.85355C15.0527 3.75979 15 3.63261 15 3.5C15 3.36739 15.0527 3.24021 15.1464 3.14645C15.2402 3.05268 15.3674 3 15.5 3V3Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_24_24">
                                    <rect width="20" height="20" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </>
                          ) : (
                            'Undang Member'
                          )}
                        </button>
                      </div>
                    </>
                  )}
                  {successInvite && (
                    <>
                      {openInvitation && (
                        <div className="text-center">
                          <img
                            className="mx-auto mt-2"
                            src="/email_alert.png"
                            alt=""
                          />
                          <p className="mt-5 text-sm text-black">
                            Success to sent an invitation to{' '}
                            <span className="font-semibold text-black">
                              {data.email}
                            </span>
                          </p>
                        </div>
                      )}
                      {!openInvitation && (
                        <div className="text-center">
                          <img
                            className="mx-auto mt-2"
                            src="/email_approve.png"
                            alt=""
                          />
                          <p className="mt-5 text-sm text-black">
                            Success add{' '}
                            <span className="font-semibold text-black">
                              {data.email}
                            </span>{' '}
                            as a team member.
                          </p>
                        </div>
                      )}
                    </>
                  )}
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
