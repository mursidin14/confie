import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ProfileService from 'services/Profile/ProfileService';
export default function EditProfilePhoto({ data_profile }) {
  const [isDelete, setIsDelete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAccept, setIsOpenAccept] = useState(false);
  const [error, setError] = useState(false);
  const [dataProfile, setDataProfile] = React.useState({
    photo_profile: null,
  });

  function closeModal() {
    setIsOpen(false);
  }
  function closeModalAccept() {
    setIsOpenAccept(false);
    setTimeout(() => {
      let html = document.querySelector('html');
      html.removeAttribute('style');
    }, 500);
    window.location.reload();
  }
  async function handleEditPhoto() {
    closeModal();
    if (isDelete) {
      const response = await ProfileService.deletePhotoProfile();
      if (response?.data?.meta?.code === 200) {
        setIsOpenAccept(true);
        return;
      }
      setError(true);
      setIsOpenAccept(true);
      return;
    }

    const response = await ProfileService.updateProfilePicture(dataProfile);
    if (response?.data?.meta?.code === 200) {
      setIsOpenAccept(true);
      return;
    }
    setError(true);
    setIsOpenAccept(true);
  }
  function openModal() {
    setIsOpen(true);
  }
  const deletePhoto = async () => {
    setIsDelete(true);
    openModal();
  };
  const uploadPhoto = (e) => {
    e.preventDefault();
    setDataProfile({
      photo_profile: e.target.files[0],
      _method: 'put',
    });
    openModal();
  };
  return (
    <>
      <div className="mb-5 mt-10 lg:flex">
        <div className="w-5/12">
          <label className="text-xs lg:text-base">Avatar</label>
        </div>
        <div className="image-upload w-7/12">
          <div className="relative w-fit">
            <label for="file-input">
              <div className="absolute -top-3 -right-5 w-fit cursor-pointer rounded-full border bg-white p-2">
                <svg
                  className="h-3 w-3"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M9.8083 3.82836L8.81876 4.81743L6.18059 2.17927L7.16967 1.1897C7.34467 1.01475 7.58199 0.916504 7.82945 0.916504C8.0769 0.916504 8.31422 1.01475 8.48922 1.1897L9.8083 2.50881C9.98325 2.68381 10.0816 2.9211 10.0816 3.16856C10.0816 3.41601 9.98325 3.65337 9.8083 3.82836ZM1.68984 10.0521L4.5315 9.10468L1.89334 6.46652L0.945961 9.30818C0.911201 9.41195 0.906105 9.52346 0.931249 9.62998C0.956388 9.73654 1.01077 9.83394 1.08827 9.91126C1.16578 9.98853 1.26332 10.0427 1.36992 10.0675C1.47652 10.0924 1.58795 10.0871 1.69167 10.0521H1.68984Z"
                    fill="#181C32"
                  />
                  <path
                    d="M2.55476 9.76246L1.69218 10.0503C1.58855 10.0848 1.47738 10.0898 1.37109 10.0647C1.2648 10.0396 1.16759 9.98539 1.09034 9.90816C1.01309 9.83098 0.958853 9.73381 0.933686 9.62752C0.908519 9.52124 0.913419 9.41009 0.94784 9.30646L1.23568 8.44337L2.55476 9.76246ZM1.89521 6.46475L4.53339 9.10292L8.82064 4.81567L6.18247 2.17749L1.89521 6.46475Z"
                    fill="#181C32"
                  />
                </svg>
              </div>
            </label>
            <img
              className="h-20 w-20 rounded-md object-cover sm:h-32 sm:w-32"
              src={
                data_profile.url_photo_profile
                  ? `/backend/${data_profile.url_photo_profile}`
                  : data_profile.gender == 'L'
                  ? '/male.jpg'
                  : '/female.jpg'
              }
              alt=""
            />
            <button
              onClick={deletePhoto}
              className="absolute -bottom-3 -right-5 w-fit cursor-pointer rounded-full border bg-white p-2"
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.73477 4.98867L9.87977 0.854754C9.96169 0.759359 10.0045 0.63665 9.99963 0.511148C9.99477 0.385647 9.9426 0.266597 9.85355 0.177788C9.76451 0.0889785 9.64514 0.0369516 9.5193 0.032104C9.39346 0.0272564 9.27042 0.0699452 9.17477 0.151639L5.02977 4.28555L0.884772 0.146653C0.79062 0.0527525 0.662923 0 0.529772 0C0.396621 0 0.268924 0.0527525 0.174772 0.146653C0.0806199 0.240553 0.0277259 0.367908 0.0277259 0.500703C0.0277259 0.633498 0.0806199 0.760854 0.174772 0.854754L4.32477 4.98867L0.174772 9.12258C0.122431 9.16729 0.0799207 9.2223 0.0499091 9.28416C0.0198974 9.34603 0.00303234 9.41341 0.000372596 9.48209C-0.00228715 9.55077 0.00931558 9.61925 0.0344529 9.68324C0.0595901 9.74723 0.0977193 9.80535 0.146447 9.85395C0.195174 9.90254 0.253448 9.94057 0.31761 9.96564C0.381773 9.99071 0.450439 10.0023 0.519298 9.99963C0.588158 9.99698 0.655724 9.98016 0.717757 9.95022C0.779789 9.92029 0.834948 9.8779 0.879772 9.8257L5.02977 5.69178L9.17477 9.8257C9.27042 9.90739 9.39346 9.95008 9.5193 9.94523C9.64514 9.94038 9.76451 9.88836 9.85355 9.79955C9.9426 9.71074 9.99477 9.59169 9.99963 9.46619C10.0045 9.34068 9.96169 9.21798 9.87977 9.12258L5.73477 4.98867Z"
                  fill="#181C32"
                />
              </svg>
            </button>
          </div>
          <p className="mt-4 text-xs text-[#A1A5B7] sm:text-sm">
            Allowed file types: png, jpg, jpeg.
          </p>
          <input id="file-input" type="file" onChange={uploadPhoto} />
        </div>
      </div>
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
                      {isDelete
                        ? 'Apakah anda ingin menghapus photo ini?'
                        : 'Apakah Anda ingin mengubah foto ini?'}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-4">
                      <button
                        onClick={handleEditPhoto}
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
                      {!error ? (
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
                      ) : (
                        <svg
                          width="100"
                          height="100"
                          viewBox="0 0 100 100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M62.3868 31.6579C58.549 35.4984 54.7046 39.3395 50.8709 43.1806C47.0304 39.3415 43.19 35.5004 39.3482 31.6579C34.9044 27.2162 28.019 34.1049 32.4608 38.5467C36.2999 42.3838 40.1424 46.2269 43.9768 50.0626C40.1397 53.9017 36.2979 57.7442 32.4608 61.5853C28.019 66.0257 34.9078 72.9124 39.3482 68.4733C43.1873 64.6322 47.0277 60.7918 50.8709 56.9507C54.7113 60.7918 58.549 64.6309 62.3868 68.4733C66.8292 72.9131 73.7153 66.0257 69.2769 61.5859C65.4358 57.7448 61.5953 53.9057 57.7542 50.0633C61.596 46.2228 65.4364 42.3817 69.2769 38.5406C73.7153 34.1002 66.8292 27.2115 62.3868 31.6532"
                            fill="#F44336"
                          />
                          <path
                            d="M50 93.75C38.3968 93.75 27.2688 89.1406 19.0641 80.9359C10.8594 72.7312 6.25 61.6032 6.25 50C6.25 38.3968 10.8594 27.2688 19.0641 19.0641C27.2688 10.8594 38.3968 6.25 50 6.25C61.6032 6.25 72.7312 10.8594 80.9359 19.0641C89.1406 27.2688 93.75 38.3968 93.75 50C93.75 61.6032 89.1406 72.7312 80.9359 80.9359C72.7312 89.1406 61.6032 93.75 50 93.75ZM50 100C63.2608 100 75.9785 94.7322 85.3553 85.3553C94.7322 75.9785 100 63.2608 100 50C100 36.7392 94.7322 24.0215 85.3553 14.6447C75.9785 5.26784 63.2608 0 50 0C36.7392 0 24.0215 5.26784 14.6447 14.6447C5.26784 24.0215 0 36.7392 0 50C0 63.2608 5.26784 75.9785 14.6447 85.3553C24.0215 94.7322 36.7392 100 50 100V100Z"
                            fill="#F44336"
                          />
                        </svg>
                      )}
                    </div>
                    <p className="mx-auto w-full text-center text-[#7E8299] lg:w-[400px]">
                      {error
                        ? 'Data anda tidak berhasil diubah'
                        : 'Data anda berhasil diubah!'}
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
