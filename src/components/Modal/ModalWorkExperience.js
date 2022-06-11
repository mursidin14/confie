import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ProfileService from 'services/Profile/ProfileService';
import utils from 'utils/utils';
export default function ModalWorkExperience() {
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
      type: 'date',
      label: 'Tahun Mulai',
      required: true,
    },
    {
      name: 'end_date',
      type: 'date',
      label: 'Tahun Selesai',
      required: true,
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
          Tambah
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
                            <option value="onsite">On Site</option>
                            <option value="freelance">Freelance</option>
                            <option value="done">Done</option>
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
