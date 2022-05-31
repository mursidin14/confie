import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ProfileService from 'services/Profile/ProfileService';
export default function ModalProfile() {
  let [isOpen, setIsOpen] = useState(false);
  let [dataProfile, setDataProfile] = useState({});
  const [error, setError] = useState([]);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  let inputs = [
    {
      label: 'Full Name',
      type: 'text',
      name: 'full_name',
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      name: 'phone_number',
      label: 'Phone Number',
      type: 'number',
      errorMessage: 'It should be a valid phone number!',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      required: true,
    },
    {
      name: 'gender',
      type: 'text',
      errorMessage: 'It should be a valid email address!',
      label: 'Gender',
      required: true,
    },
    {
      name: 'date_of_birth',
      type: 'date',
      errorMessage: 'It should be a valid email address!',
      label: 'Date of Birth',
      required: true,
    },
    {
      name: 'country',
      type: 'text',
      errorMessage: 'It should be a valid email address!',
      label: 'Country',
      required: true,
    },
    {
      name: 'province',
      type: 'text',
      errorMessage: 'It should be a valid email address!',
      label: 'Province',
      required: true,
    },
    {
      name: 'city',
      type: 'text',
      errorMessage: 'It should be a valid email address!',
      label: 'City',
      required: true,
    },
  ];
  function handleOnChange(e) {
    let { name, value } = e.target;
    if (name === 'date_of_birth') {
      setDataProfile({
        ...dataProfile,
        [name]: new Date(value).getTime() / 1000,
      });
    } else {
      setDataProfile({ ...dataProfile, [name]: value });
    }
  }
  async function handleClick() {
    let new_date = new Date(dataProfile['date_of_birth']).getTime();
    dataProfile['date_of_birth'] = parseInt(new_date);
    const response = await ProfileService.updateProfileData(dataProfile);
    if (response.data.meta.status == 'error') {
      let errors = []
      let error = response.data.data;
      for (let key in error) {
        errors.push(error[key][0]);
      }
      setError(errors);
      return
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
                    <h3 className="text-base font-semibold ">
                      Personal Infomation
                    </h3>
                  </div>
                  <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
                  <div className="my-5">
                    <div className="px-8">
                      <div className="mb-5 lg:flex">
                        <div className="w-5/12">
                          <label className="text-xs lg:text-base">Avatar</label>
                        </div>
                        <div className="image-upload w-7/12">
                          <label for="file-input">
                            <div className="relative w-fit">
                              <div className="absolute -top-3 -right-5 w-fit cursor-pointer rounded-full bg-white p-2">
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

                              <img
                                className="w-20 sm:w-32"
                                src="/person.png"
                                alt=""
                              />
                            </div>
                          </label>
                          <input id="file-input" type="file" />
                        </div>
                      </div>
                      {inputs.map((input, index) => (
                        <InputFormProfile
                          handleOnChange={handleOnChange}
                          key={index}
                          {...input}
                        />
                      ))}
                    </div>
                  </div>
                  <section className="text-left text-sm text-red-500">
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

function InputFormProfile({ label, handleOnChange, ...inputProps }) {
  return (
    <div className=" items-center lg:flex">
      <div className="w-5/12">
        <label className="text-xs lg:text-base">{label}</label>
      </div>
      <div className="lg:w-7/12">
        <input
          onChange={handleOnChange}
          {...inputProps}
          className="input-form my-2 lg:my-5 lg:py-3 "
        />
      </div>
    </div>
  );
}
