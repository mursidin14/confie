import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ProfileService from 'services/Profile/ProfileService';

export default function ModalAboutMe({ data_profile }) {
  const [dataProfile, setDataProfile] = useState({
    full_name: data_profile.full_name,
    email: data_profile.email,
    phone_number: data_profile.phone_number,
    province: data_profile.province,
    city: data_profile.city,
    date_of_birth: data_profile.date_of_birth,
    country: data_profile.country,
    about: data_profile.about,
  });
  let [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState([]);

  function handleChange(e) {
    setDataProfile({ ...dataProfile, [e.target.name]: e.target.value });
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  async function handleClick() {
    if (dataProfile.about.length > 500) {
      setError(['About me harus kurang dari 500 karakter']);
      return;
    }
    const response = await ProfileService.updateAbout(dataProfile);
    if (response.data.meta.status === 'error') {
      let errors = [];
      let error = response.data.data;
      for (let key in error) {
        errors.push(error[key][0]);
      }
      setError(errors);
      return;
    }
    window.location.reload();
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-[#FE9A00] px-5 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Edit
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
                  <div className="flex items-center justify-between px-8">
                    <h3 className="text-base font-semibold ">About Me</h3>
                  </div>
                  <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
                  <div className="my-5">
                    <div className="px-2 sm:px-8">
                      <textarea
                        onChange={handleChange}
                        className="w-full bg-[#F5F8FA] p-5 lg:h-[200px]"
                        name="about"
                        value={dataProfile.about}
                      ></textarea>
                      {dataProfile.about === null ? (
                        <><p className='text-xs text-gray-500'>Sisa Karakter: 500</p></>
                      ) : (
                        <p
                          className={`text-xs ${
                            dataProfile.about.length > 490
                              ? 'text-red-500'
                              : 'text-gray-500'
                          }`}
                        >
                          Sisa Karakter: {500 - dataProfile.about.length}
                        </p>
                      )}
                    </div>
                  </div>
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
                      onClick={handleClick}
                      className="rounded-md bg-[#FE9A00] px-4 py-2 text-sm text-white"
                    >
                      Submit
                    </button>
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
