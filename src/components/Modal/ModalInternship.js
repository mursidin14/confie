import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ProfileService from 'services/Profile/ProfileService';
import utils from 'utils/utils';
export default function ModalInternship({section}) {
  let [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState([])
  const [dataInternship, setDataInternship] = useState({
  })
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  function handleChange(e) {
    let { name, value } = e.target;
    setDataInternship({ ...dataInternship, [name]: value });
  }
  async function handleSubmit() {
    console.log("Submit")
    const data = {
      ...dataInternship,
    };
    if (data['start_date']) {
      data['start_date'] = utils.timeEpoch(data['start_date']);
    }
    if (data['end_date']) {
      data['end_date'] = utils.timeEpoch(data['end_date']);
    }
    console.log("Send")
    const response = await ProfileService.addIntershipExperience(data);
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
  let inputs2 = [
    {
      name: 'start_date',
      type: 'month',
      label: 'Tahun Mulai',
      required: true,
    },
    {
      name: 'end_date',
      type: 'month',
      label: 'Tahun Selesai',
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
              <svg width="18" height="18" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.875 0.75H2.625V1.875H1.875V0.75ZM3.375 0.75H4.125V1.875H3.375V0.75ZM4.875 0.75H5.625V1.875H4.875V0.75ZM7.125 3.375H6.375V3C6.375 2.90054 6.33549 2.80516 6.26517 2.73484C6.19484 2.66451 6.09946 2.625 6 2.625H1.5C1.40054 2.625 1.30516 2.66451 1.23483 2.73484C1.16451 2.80516 1.125 2.90054 1.125 3V6.75C1.125 7.04837 1.24353 7.33452 1.4545 7.5455C1.66548 7.75647 1.95163 7.875 2.25 7.875H5.25C5.54837 7.875 5.83452 7.75647 6.0455 7.5455C6.25647 7.33452 6.375 7.04837 6.375 6.75H7.125C7.53863 6.75 7.875 6.41363 7.875 6V4.125C7.875 3.71137 7.53863 3.375 7.125 3.375ZM6.375 6V4.125H7.125L7.12575 6H6.375Z" fill="white"/>
</svg>
              <p>Internship</p>
              </div>
              <p className='text-xs font-thin mt-2'>If you have intership experience, list them.</p>
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
                      Tambah Pengalaman Magang
                    </h3>
                  </div>
                  <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
                  <div className="my-5">
                    <div className="lg:px-8 px-2">
                      {inputs.map((input, index) => (
                        <InputFormProfile data={dataInternship} key={index} {...input} handleChange={handleChange} />
                      ))}
                      {inputs2.map((input, index) => (
                        <InputFormProfile data={dataInternship} key={index} {...input} handleChange={handleChange} />
                      ))}
                      <div className="mt-4 lg:flex">
                        <div className="w-5/12">
                          <label className="text-xs lg:text-base" htmlFor="">
                            Deskripsi
                          </label>
                        </div>
                        <div className="lg:w-7/12">
                          <textarea
                            value={dataInternship.description}
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
                  <section className="text-left text-sm text-red-500 px-8">
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

function InputFormProfile({data, label, handleChange, ...inputProps }) {
  return (
    <div className={`items-center lg:flex`}>
      <div className="w-5/12">
        <label className="text-xs lg:text-base" htmlFor="">
          {label}
        </label>
      </div>
      <div className="lg:w-7/12">
        <input {...inputProps} className="input-form my-2 lg:my-5 lg:py-3" onChange={handleChange} value={data[inputProps.name]} />
      </div>
    </div>
  );
}
