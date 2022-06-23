import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ProfileService from 'services/Profile/ProfileService';
import utils from 'utils/utils';
export default function ModalEducation({section}) {
  let [isOpen, setIsOpen] = useState(false);
  const [dataEducation, setDataEducation] = useState({
  });
  const [error, setError] = useState([]);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleChange(e) {
    setDataEducation({ ...dataEducation, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    const data = {
      ...dataEducation,
    };
    const response = await ProfileService.addEducation(data);
    if (response.data.meta.status == 'error') {
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

  let inputs = [
    {
      label: 'Sekolah/Universitas',
      type: 'text',
      name: 'school',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      name: 'major',
      label: 'Jurusan',
      type: 'text',
      required: true,
    },
  ];
  let inputs2 = [
    {
      name: 'start_date',
      type: 'number',
      label: 'Tahun Mulai',
      required: true,
      min: 0,
    },
    {
      name: 'end_date',
      type: 'number',
      label: 'Tahun Selesai',
      required: true,
      min: 0,
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center">
      {section ? (
          <>
            <button
              type="button"
              onClick={openModal}
              className="modal-section"
            >
              <div className='flex items-center gap-2'>
              <svg width="18" height="18" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.332 3.2L4 4.8L8 2.4L4 0L0 2.4H4V3.2H1.332ZM0 3.2V6.4L0.8 5.512V3.68L0 3.2ZM4 8L2 6.8L1.2 6.32V3.92L4 5.6L6.8 3.92V6.32L4 8Z" fill="white"/>
</svg>

              <p>Education</p>
              </div>
              <p className='text-xs font-thin mt-2'>Show off your primary education, college degrees, etc.</p>
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={openModal}
              className="rounded-md bg-[#FE9A00] px-5 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Tambah
            </button>
          </>
        )}
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
                      Tambah Riwayat Pendidikan
                    </h3>
                  </div>
                  <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
                  <div className="my-5">
                    <div className="px-2 lg:px-8">
                      {inputs.map((input, index) => (
                        <InputFormProfile
                          key={index}
                          data={dataEducation}
                          handleChange={handleChange}
                          {...input}
                        />
                      ))}
                      {inputs2.map((input, index) => (
                        <InputFormProfile
                          key={index}
                          data={dataEducation}
                          handleChange={handleChange}
                          {...input}
                        />
                      ))}
                      <div className="mt-4 lg:flex">
                        <div className="w-5/12">
                          <label className="text-xs lg:text-base" htmlFor="">
                            Deskripsi
                          </label>
                        </div>
                        <div className="lg:w-7/12">
                          <textarea
                            value={dataEducation.description}
                            onChange={handleChange}
                            name="description"
                            id=""
                            className="w-full rounded-md bg-soft-gray p-5"
                            rows="10"
                          ></textarea>
                        </div>
                      </div>
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
                      onClick={handleSubmit}
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

function InputFormProfile({ data, label, handleChange, ...inputProps }) {
  return (
    <div
      className={`items-center lg:flex`}
    >
      <div className="w-5/12">
        <label className="text-xs lg:text-base" htmlFor="">
          {label}
        </label>
      </div>
      <div className="lg:w-7/12">
        <input
          onChange={handleChange}
          {...inputProps}
          className="input-form my-2 lg:my-5 lg:py-3 "
          value={data[inputProps.name]}
        />
      </div>
    </div>
  );
}
