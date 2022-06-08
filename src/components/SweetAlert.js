import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
export default function SweetAlert({item, handleDelete }) {
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenAccept, setIsOpenAccept] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function closeModalAccept() {
    setIsOpenAccept(false);
    setTimeout(() => {
      let html = document.querySelector('html');
      html.removeAttribute('style');
    }, 500);
    handleDelete(item.id);
  }
  function handleAccept() {
    closeModal();
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
