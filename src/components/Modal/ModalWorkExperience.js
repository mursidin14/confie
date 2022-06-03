import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ProfileService from 'services/Profile/ProfileService';
import utils from 'utils/utils';
export default function ModalWorkExperience() {
  let [isOpen, setIsOpen] = useState(false);
  const [dataWorkExperience, setDataWorkExperience] = useState({
    is_current: false,
  });
  const [error, setError] = useState([]);
  function closeModal() {
    setIsOpen(false);
  }

  function handleChange(e) {
    let { name, value } = e.target;
    if (name == 'start_date' || name == 'end_date') {
      value = utils.timeEpoch(value);
      setDataWorkExperience({ ...dataWorkExperience, [name]: value });
    }else{
      setDataWorkExperience({ ...dataWorkExperience, [name]: value });
    }
    console.log(dataWorkExperience);
  }


  function openModal() {
    setIsOpen(true);
  }
  async function handleSubmit() {
    let data = {
      ...dataWorkExperience
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
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      name: 'agency',
      label: 'Instansi',
      type: 'text',
      errorMessage: 'It should be a valid phone number!',
      required: true,
    },
  ];
  let inputs_2 = [
    {
      name: 'start_date',
      type: 'date',
      errorMessage: 'It should be a valid email address!',
      label: 'Tahun Mulai',
      required: true,
    },
    {
      name: 'end_date',
      type: 'date',
      errorMessage: 'It should be a valid email address!',
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
                    <div className="px-8">
                      {inputs.map((input, index) => (
                        <InputFormProfile {...input} />
                      ))}
                      <div className="mt-4 lg:flex">
                        <div className="sm:w-5/12">
                          <label className="text-xs lg:text-base" for="">
                            Bekerja saat ini
                          </label>
                        </div>
                        <div className="flex items-center gap-3 lg:w-7/12">
                          <input onChange={()=>{
                            setDataWorkExperience({...dataWorkExperience, is_current: !dataWorkExperience['is_current']})
                          }} type="checkbox" />
                          <label for="">Ya</label>
                        </div>
                      </div>
                      {inputs_2.map((input, index) => (
                        <InputFormProfile handleChange={handleChange} {...input} />
                      ))}
                      <div className="mt-4 lg:flex">
                        <div className="w-5/12">
                          <label className="text-xs lg:text-base" for="">
                            Deskripsi
                          </label>
                        </div>
                        <div className="lg:w-7/12">
                          <textarea
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
                    <button onClick={handleSubmit} className="rounded-md bg-[#FE9A00] px-4 py-2 text-sm text-white">
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

function InputFormProfile({ label, handleChange, ...inputProps }) {
  return (
    <div className=" items-center lg:flex">
      <div className="w-5/12">
        <label className="text-xs lg:text-base" for="">
          {label}
        </label>
      </div>
      <div className="lg:w-7/12">
        <input {...inputProps} className="input-form my-2 lg:my-5 lg:py-3" onChange={handleChange} />
      </div>
    </div>
  );
}
