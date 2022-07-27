import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ProfileService from 'services/Profile/ProfileService';
import utils from 'utils/utils';
export default function ModalOrganization({section}) {
  let [isOpen, setIsOpen] = useState(false);
  const [dataOrganization, setDataOrganization] = useState({});
  const [error, setError] = useState([]);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleChange(e) {
    setDataOrganization({
      ...dataOrganization,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit() {
    const data = {
      ...dataOrganization,
    };
    const response = await ProfileService.addOrganization(data);
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
      label: 'Lembaga Organisasi',
      type: 'text',
      name: 'agency',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      label: 'Jabatan / Tugas',
      name: 'position',
      type: 'text',
      required: true,
    },
  ];
  let inputs2 = [
    {
      name: 'year',
      type: 'number',
      label: 'Tahun Aktif',
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
              <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 6.5625C7.74864 6.5625 7.9871 6.46373 8.16291 6.28791C8.33873 6.1121 8.4375 5.87364 8.4375 5.625C8.4375 5.37636 8.33873 5.1379 8.16291 4.96209C7.9871 4.78627 7.74864 4.6875 7.5 4.6875C7.25136 4.6875 7.0129 4.78627 6.83709 4.96209C6.66127 5.1379 6.5625 5.37636 6.5625 5.625C6.5625 5.87364 6.66127 6.1121 6.83709 6.28791C7.0129 6.46373 7.25136 6.5625 7.5 6.5625Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M7.5 5C7.33424 5 7.17527 5.06585 7.05806 5.18306C6.94085 5.30027 6.875 5.45924 6.875 5.625C6.875 5.79076 6.94085 5.94973 7.05806 6.06694C7.17527 6.18415 7.33424 6.25 7.5 6.25C7.66576 6.25 7.82473 6.18415 7.94194 6.06694C8.05915 5.94973 8.125 5.79076 8.125 5.625C8.125 5.45924 8.05915 5.30027 7.94194 5.18306C7.82473 5.06585 7.66576 5 7.5 5ZM6.25 5.625C6.25 5.29348 6.3817 4.97554 6.61612 4.74112C6.85054 4.5067 7.16848 4.375 7.5 4.375C7.83152 4.375 8.14946 4.5067 8.38388 4.74112C8.6183 4.97554 8.75 5.29348 8.75 5.625C8.75 5.95652 8.6183 6.27446 8.38388 6.50888C8.14946 6.7433 7.83152 6.875 7.5 6.875C7.16848 6.875 6.85054 6.7433 6.61612 6.50888C6.3817 6.27446 6.25 5.95652 6.25 5.625Z" fill="white"/>
<path d="M8.25 12.8125L8.625 10.6697H9.375V9.59811C9.37397 9.36142 9.32476 9.12742 9.23036 8.91037C9.13597 8.69331 8.99836 8.49776 8.82594 8.33561C8.46727 7.99786 7.99266 7.81061 7.5 7.81248C7.00734 7.81061 6.53273 7.99786 6.17406 8.33561C6.00164 8.49776 5.86403 8.69331 5.76964 8.91037C5.67524 9.12742 5.62603 9.36142 5.625 9.59811V10.6697H6.375L6.75 12.8125H8.25V12.8125Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M5.95875 8.10939C6.37549 7.71635 6.92716 7.49823 7.5 7.50001C8.07531 7.50001 8.63 7.71751 9.04125 8.10939C9.45312 8.50126 9.6875 9.03626 9.6875 9.59782V10.6694C9.6875 10.7523 9.65458 10.8318 9.59597 10.8904C9.53737 10.949 9.45788 10.9819 9.375 10.9819H8.8875L8.55781 12.8663C8.54516 12.9387 8.50736 13.0044 8.45105 13.0517C8.39475 13.0991 8.32355 13.125 8.25 13.125H6.75C6.67645 13.125 6.60525 13.0991 6.54895 13.0517C6.49264 13.0044 6.45484 12.9387 6.44219 12.8663L6.1125 10.9819H5.625C5.54212 10.9819 5.46263 10.949 5.40403 10.8904C5.34542 10.8318 5.3125 10.7523 5.3125 10.6694V9.59814C5.3125 9.03657 5.54688 8.50126 5.95875 8.10939V8.10939ZM7.5 8.12501C7.08763 8.12319 6.69025 8.27954 6.38969 8.56189C6.24785 8.69482 6.1346 8.85527 6.05686 9.03343C5.97911 9.2116 5.9385 9.40375 5.9375 9.59814V10.3572H6.375C6.44855 10.3572 6.51975 10.3832 6.57605 10.4305C6.63236 10.4778 6.67016 10.5435 6.68281 10.6159L7.0125 12.5H7.9875L8.31719 10.6156C8.3299 10.5432 8.36774 10.4776 8.42404 10.4304C8.48033 10.3831 8.55149 10.3572 8.625 10.3572H9.0625V9.59814C9.0615 9.40375 9.02089 9.2116 8.94314 9.03343C8.8654 8.85527 8.75215 8.69482 8.61031 8.56189C8.30975 8.27954 7.91237 8.12319 7.5 8.12501V8.12501Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M7.31188 1.93812C7.36608 1.89726 7.43212 1.87515 7.5 1.87515C7.56788 1.87515 7.63392 1.89726 7.68812 1.93812L12.8225 5.81C12.8313 5.81656 12.8394 5.82344 12.8472 5.83062C13.0166 5.9881 13.1165 6.20638 13.125 6.4375V12.3516C13.1244 12.5565 13.0428 12.7529 12.8978 12.8978C12.7529 13.0427 12.5565 13.1244 12.3516 13.125H2.64844C2.44349 13.1244 2.24709 13.0427 2.10217 12.8978C1.95725 12.7529 1.87558 12.5565 1.875 12.3516V6.4375C1.875 6.43125 1.875 6.425 1.87562 6.41906C1.88875 6.19437 1.98812 5.98375 2.15281 5.83062C2.16068 5.82333 2.16892 5.81644 2.1775 5.81L7.31188 1.93812V1.93812ZM2.56875 6.29687C2.52904 6.33774 2.50465 6.39105 2.49969 6.44781V12.35C2.49985 12.3897 2.51571 12.4278 2.5438 12.4559C2.5719 12.484 2.60996 12.4998 2.64969 12.5H12.3497C12.3894 12.4997 12.4273 12.4838 12.4554 12.4557C12.4835 12.4276 12.4994 12.3897 12.4997 12.35V6.44844C12.4948 6.39171 12.4705 6.33841 12.4309 6.2975L7.5 2.57875L2.56875 6.29718V6.29687Z" fill="white"/>
</svg>



              <p>Organisation</p>
              </div>
              <p className='text-xs font-thin mt-2'>If you volunteer or participate in a good cause, why not state it?.</p>
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
                      Tambah Pengalaman Organisasi / Relawan
                    </h3>
                  </div>
                  <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
                  <div className="my-5">
                    <div className="px-2 lg:px-8">
                      {inputs.map((input, index) => (
                        <InputFormProfile
                          key={index}
                          data={dataOrganization}
                          handleChange={handleChange}
                          {...input}
                        />
                      ))}
                      {inputs2.map((input, index) => (
                        <InputFormProfile
                          key={index}
                          data={dataOrganization}
                          handleChange={handleChange}
                          {...input}
                        />
                      ))}
                      <div className={`items-center lg:flex my-3`}>
                        <div className="w-5/12">
                          <label className="text-xs lg:text-base" htmlFor="">
                            File / Dokumen
                            <p className='text-xs text-[#A1A5B7]'>Max Size: 2 MB</p>
                          </label>
                        </div>
                        <div className="lg:w-7/12">
                          <input
                            onChange={(e)=>{
                              setDataOrganization({
                                ...dataOrganization,
                                file: e.target.files[0]
                            })}}
                            type="file"
                            name='file'
                          />
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
                            value={dataOrganization.description}
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
    <div className={`items-center lg:flex`}>
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
