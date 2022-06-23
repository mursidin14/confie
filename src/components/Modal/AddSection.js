import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ModalEducation from './ModalEducation';
import ModalInternship from './ModalInternship';
import ModalCertification from './ModalCertification';
import ModalOrganization from './ModalOrganization';
import ModalWorkExperience from './ModalWorkExperience';
export default function AddSection({
  action,
  awards,
  educations,
  internships,
  experiences,
  volunteers,
}) {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="mt-7 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="flex items-center justify-center gap-2 rounded-full bg-[#FE9A00] px-14 py-4 text-sm font-medium text-white shadow-md shadow-[#FE9A00]/40 transition-all hover:scale-110 hover:bg-opacity-70"
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 61 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_310_22)">
              <path
                d="M8.7714 35.4181C14.2007 35.4162 19.6352 35.4186 25.0621 35.4133C25.0631 40.8436 25.0626 46.2753 25.0621 51.7088C25.0636 57.9919 34.8033 57.9895 34.8033 51.7079C34.8019 46.28 34.8024 40.8455 34.8033 35.4219C40.2312 35.4205 45.6648 35.42 51.0941 35.4171C57.3747 35.4181 57.3733 25.6774 51.0946 25.6764C45.6638 25.6778 40.2326 25.6778 34.7991 25.6764C34.7995 20.2447 34.8005 14.8164 34.8038 9.38567C34.8019 3.10502 25.0626 3.10597 25.0617 9.38377C25.0617 14.8159 25.0626 20.2462 25.0617 25.6793C19.6295 25.6783 14.1978 25.6788 8.76618 25.6793C2.4879 25.6807 2.486 35.4209 8.76808 35.4214"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_310_22">
                <rect
                  width="43"
                  height="43"
                  fill="white"
                  transform="translate(30.5 60.9056) rotate(-135)"
                />
              </clipPath>
            </defs>
          </svg>

          <p>{action}</p>
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
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-between px-8">
                    <h3 className="text-base font-semibold ">Add Section</h3>
                  </div>
                  <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
                  <section className="grid auto-rows-[1fr] grid-cols-1 gap-3 md:grid-cols-3">
                    {experiences.length === 0 && (
                      <ModalWorkExperience section={true}></ModalWorkExperience>
                    )}
                    {educations.length === 0 && (
                      <ModalEducation section={true}></ModalEducation>
                    )}
                    {internships.length === 0 && (
                      <ModalInternship section={true}></ModalInternship>
                    )}
                    {volunteers.length === 0 && (
                      <ModalOrganization section={true}></ModalOrganization>
                    )}
                    {awards.length === 0 && (
                      <ModalCertification section={true}></ModalCertification>
                    )}
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
