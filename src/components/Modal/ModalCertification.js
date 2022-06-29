import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ProfileService from 'services/Profile/ProfileService';
import utils from 'utils/utils';
export default function ModalCertification({section}) {
  const [dataCertificate, setDataCertificate] = useState({});
  let [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState([]);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function handleChange(e) {
      setDataCertificate({ ...dataCertificate, [e.target.name]: e.target.value });
  }
  async function handleSubmit() {
    const data = {
      ...dataCertificate,
    };
    const response = await ProfileService.addCertificate(data);
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
      label: 'Nama Sertifikasi/Penghargaan',
      type: 'text',
      name: 'name',
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      name: 'agency',
      label: 'Instansi Pemberi',
      type: 'text',
      errorMessage: 'It should be a valid phone number!',
      required: true,
    },
    {
      name: 'link',
      type: 'text',
      errorMessage: 'It should be a valid email address!',
      label: 'Link Penghargaan/Sertifikat',
      required: true,
    },
    {
      name: 'year',
      type: 'number',
      errorMessage: 'It should be a valid email address!',
      label: 'Tahun',
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
<path d="M4 0L4.8345 0.432L5.7635 0.573L6.1845 1.413L6.853 2.073L6.7 3L6.853 3.927L6.1845 4.587L5.7635 5.427L4.8345 5.568L4 6L3.1655 5.568L2.2365 5.427L1.8155 4.587L1.147 3.927L1.3 3L1.147 2.073L1.8155 1.413L2.2365 0.573L3.1655 0.432L4 0Z" fill="white"/>
<path d="M2 5.897V8L4 7.5L6 8V5.897L4.991 6.05L4 6.563L3.009 6.05L2 5.897Z" fill="white"/>
</svg>

              <p>Awards / Certification</p>
              </div>
              <p className='text-xs font-thin mt-2'>Awards / Certification like student competitions or industry accolades belong here.</p>
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
                      Tambah Sertifikasi & Penghargaan
                    </h3>
                  </div>
                  <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
                  <div className="my-5">
                    <div className="lg:px-8 px-2">
                      {inputs.map((input, index) => (
                        <InputFormProfile key={index} handleChange={handleChange} {...input} />
                      ))}
                      <div className="my-4 lg:flex">
                        <div className="w-5/12">
                          <label className="text-xs lg:text-base" htmlFor="">
                            File
                          </label>
                        </div>
                        <div className="lg:w-7/12">
                          <input type="file" name='file' onChange={(e)=>{
                            setDataCertificate({...dataCertificate, file: e.target.files[0]})
                          }}/>
                        </div>
                      </div>
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
        <input {...inputProps} className="input-form my-2 lg:my-5 lg:py-3 " onChange={handleChange} />
      </div>
    </div>
  );
}
