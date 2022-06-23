import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
export default function SweetAlert({item, handleDelete }) {
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenAccept, setIsOpenAccept] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  
  function handleAccept() {
    closeModal();
    handleDelete(item.id);
    setIsOpenAccept(true);
  }
  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <button
        onClick={openModal}
      >
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

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 overflow-y-auto"
          onClose={closeModal}
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
                        width="88"
                        height="88"
                        viewBox="0 0 88 88"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M44 0.25C19.8398 0.25 0.25 19.8398 0.25 44C0.25 68.1602 19.8398 87.75 44 87.75C68.1602 87.75 87.75 68.1602 87.75 44C87.75 19.8398 68.1602 0.25 44 0.25ZM44 80.3281C23.9414 80.3281 7.67188 64.0586 7.67188 44C7.67188 23.9414 23.9414 7.67188 44 7.67188C64.0586 7.67188 80.3281 23.9414 80.3281 44C80.3281 64.0586 64.0586 80.3281 44 80.3281Z"
                          fill="#FE9A00"
                        />
                        <path
                          d="M54.8984 24.9277C51.9688 22.3594 48.1016 20.9531 44 20.9531C39.8984 20.9531 36.0312 22.3691 33.1016 24.9277C30.0547 27.5938 28.375 31.1777 28.375 35.0156V35.7578C28.375 36.1875 28.7266 36.5391 29.1563 36.5391H33.8438C34.2734 36.5391 34.625 36.1875 34.625 35.7578V35.0156C34.625 30.709 38.834 27.2031 44 27.2031C49.166 27.2031 53.375 30.709 53.375 35.0156C53.375 38.0527 51.2266 40.8359 47.8965 42.1152C45.8262 42.9063 44.0684 44.293 42.8086 46.1094C41.5293 47.9648 40.8652 50.1914 40.8652 52.4473V54.5469C40.8652 54.9766 41.2168 55.3281 41.6465 55.3281H46.334C46.7637 55.3281 47.1152 54.9766 47.1152 54.5469V52.3301C47.1203 51.382 47.4109 50.4575 47.9492 49.6771C48.4875 48.8967 49.2484 48.2966 50.1328 47.9551C55.8945 45.7383 59.6152 40.6602 59.6152 35.0156C59.625 31.1777 57.9453 27.5938 54.8984 24.9277ZM40.0938 65.4844C40.0938 66.5204 40.5053 67.514 41.2379 68.2465C41.9704 68.9791 42.964 69.3906 44 69.3906C45.036 69.3906 46.0296 68.9791 46.7621 68.2465C47.4947 67.514 47.9063 66.5204 47.9063 65.4844C47.9063 64.4484 47.4947 63.4548 46.7621 62.7222C46.0296 61.9897 45.036 61.5781 44 61.5781C42.964 61.5781 41.9704 61.9897 41.2379 62.7222C40.5053 63.4548 40.0938 64.4484 40.0938 65.4844Z"
                          fill="#FE9A00"
                        />
                      </svg>
                    </div>
                    <p className="mx-auto w-full text-center text-[#7E8299] lg:w-[400px]">
                      Apakah anda yakin ingin menghapus data ini?
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-4">
                      <button
                        onClick={handleAccept}
                        className="rounded-md bg-[#50CD89] px-5 py-2 text-white"
                      >
                        Ya, Setuju
                      </button>
                      <button
                        onClick={closeModal}
                        className="rounded-md bg-[#F1416C] px-5 py-2 text-white"
                      >
                        Tidak
                      </button>
                    </div>
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
