import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ProfileService from 'services/Profile/ProfileService';
import utils, { getTodayDate } from 'utils/utils';
export default function ModalWorkExperience({ section }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dataWorkExperience, setDataWorkExperience] = useState({
    is_current: false,
    status: 'onsite',
  });
  const [error, setError] = useState([]);
  function closeModal() {
    setIsOpen(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setDataWorkExperience({ ...dataWorkExperience, [name]: value });
  }

  function openModal() {
    setIsOpen(true);
  }
  async function handleSubmit() {
    const data = {
      ...dataWorkExperience,
    };
    if (data['start_date']) {
      data['start_date'] = utils.timeEpoch(data['start_date']);
    }
    if (data['end_date']) {
      data['end_date'] = utils.timeEpoch(data['end_date']);
    }

    const response = await ProfileService.addJobExperience(data);
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
      label: 'Posisi',
      type: 'text',
      name: 'position',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      name: 'agency',
      label: 'Instansi',
      type: 'text',
      required: true,
    },
  ];
  let inputs_2 = [
    {
      name: 'start_date',
      type: 'month',
      label: 'Tahun Mulai',
      max: getTodayDate,
      required: true,
    },
    {
      name: 'end_date',
      type: 'month',
      label: 'Tahun Selesai',
      max: getTodayDate,
      required: true,
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
              <svg width="18" height="18" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.625 2.01816H7.79883V1.53026C7.79883 1.13106 7.66634 0.794705 7.40137 0.521183C7.13639 0.247662 6.81055 0.110901 6.42383 0.110901H4.57617C4.18945 0.110901 3.86361 0.247662 3.59863 0.521183C3.33366 0.794705 3.20117 1.13106 3.20117 1.53026V2.01816H1.375C0.988281 2.01816 0.662435 2.15122 0.397461 2.41735C0.132487 2.68348 0 3.02354 0 3.43751V5.32259C0 5.63308 0.150391 5.78832 0.451172 5.78832V9.58066C0.451172 9.832 0.544271 10.0538 0.730469 10.246C0.916667 10.4382 1.13151 10.5343 1.375 10.5343H9.625C9.86849 10.5343 10.0833 10.4382 10.2695 10.246C10.4557 10.0538 10.5488 9.832 10.5488 9.58066V5.78832C10.8496 5.78832 11 5.63308 11 5.32259V3.43751C11 3.02354 10.8675 2.68348 10.6025 2.41735C10.3376 2.15122 10.0117 2.01816 9.625 2.01816ZM4.125 1.53026C4.125 1.39719 4.16797 1.2863 4.25391 1.19759C4.33984 1.10888 4.44727 1.06453 4.57617 1.06453H6.42383C6.55273 1.06453 6.66016 1.10888 6.74609 1.19759C6.83203 1.2863 6.875 1.39719 6.875 1.53026V2.01816H4.125V1.53026ZM1.375 9.58066V5.78832H4.125V7.20768C4.125 7.4738 4.21452 7.69927 4.39355 7.88409C4.57259 8.0689 4.79102 8.1613 5.04883 8.1613H5.95117C6.20898 8.1613 6.42741 8.0689 6.60645 7.88409C6.78548 7.69927 6.875 7.4738 6.875 7.20768V5.78832H9.625V9.58066H1.375ZM5.04883 7.20768V5.78832H5.95117V7.20768H5.04883ZM10.0762 4.85687H0.923828V3.43751C0.923828 3.11225 1.07422 2.94961 1.375 2.94961H9.625C9.92578 2.94961 10.0762 3.11225 10.0762 3.43751V4.85687Z" fill="white"/>
</svg>
              <p>Professional Experience</p>
              </div>
              <p className='text-xs font-thin mt-2'>A place to highlight your professional experience.</p>
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
                      Tambah Pengalaman Kerja
                    </h3>
                  </div>
                  <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
                  <div className="my-5">
                    <div className="px-2 lg:px-8">
                      {inputs.map((input, index) => (
                        <InputFormProfile
                          key={index}
                          data={dataWorkExperience}
                          handleChange={handleChange}
                          {...input}
                        />
                      ))}
                      <div className="mt-4 lg:flex">
                        <div className="sm:w-5/12">
                          <label className="text-xs lg:text-base" htmlFor="">
                            Bekerja saat ini
                          </label>
                        </div>
                        <div className="flex items-center gap-3 lg:w-7/12">
                          <input
                            onChange={() => {
                              setDataWorkExperience({
                                ...dataWorkExperience,
                                is_current: !dataWorkExperience['is_current'],
                              });
                            }}
                            type="checkbox"
                            checked={dataWorkExperience.is_current === true}
                          />
                          <label htmlFor="">Ya</label>
                        </div>
                      </div>
                      {inputs_2.map((input, index) => (
                        <InputFormProfile
                          key={index}
                          data={dataWorkExperience}
                          handleChange={handleChange}
                          {...input}
                        />
                      ))}
                      <div className="my-4 lg:flex">
                        <div className="w-5/12">
                          <label className="text-xs lg:text-base" htmlFor="">
                            File
                          </label>
                        </div>
                        <div className="lg:w-7/12">
                          <input type="file" name='file' onChange={(e)=>{
                            setDataWorkExperience({
                              ...dataWorkExperience,
                              file: e.target.files[0]
                            })
                          }}/>
                        </div>
                      </div>
                      <div className="mt-4 lg:flex">
                        <div className="w-5/12">
                          <label className="text-xs lg:text-base" htmlFor="">
                            Status
                          </label>
                        </div>
                        <div className="lg:w-7/12">
                          <select
                            value={dataWorkExperience.status}
                            className="h-fit w-full rounded-md bg-soft-gray p-5 text-sm"
                            name="status"
                            id="status"
                            onChange={(e) => {
                              const { name, value } = e.target;
                              setDataWorkExperience({
                                ...dataWorkExperience,
                                [name]: value,
                              });
                            }}
                          >
                            <option value="onsite">Full Time</option>
                            <option value="freelance">Part Time</option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-4 lg:flex">
                        <div className="w-5/12">
                          <label className="text-xs lg:text-base" htmlFor="">
                            Deskripsi
                          </label>
                        </div>
                        <div className="lg:w-7/12">
                          <textarea
                            value={dataWorkExperience.description}
                            onChange={handleChange}
                            name="description"
                            id=""
                            className="w-full rounded-md bg-soft-gray p-5"
                            rows="5"
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
    <div className={`items-center lg:flex`}>
      <div className="w-5/12">
        <label className="text-xs lg:text-base" htmlFor="">
          {label}
        </label>
      </div>
      <div className="lg:w-7/12">
        <input
          disabled={
            data.is_current == true && inputProps.name == 'end_date'
              ? true
              : false
          }
          {...inputProps}
          value={data[inputProps.name]}
          className={`input-form my-2 lg:my-5 lg:py-3 ${
            data.is_current == true && inputProps.name == 'end_date'
              ? 'bg-[#cbcbcc]'
              : 'bg-soft-gray'
          } transition-all`}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
