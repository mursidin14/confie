import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ProfileService from 'services/Profile/ProfileService'
import utils from 'utils/utils'
export default function ModalPublication({ section }) {
  let [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState([])
  const [dataPublication, setDataPublication] = useState({})
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }
  function handleChange(e) {
    let { name, value } = e.target
    setDataPublication({ ...dataPublication, [name]: value })
  }
  async function handleSubmit() {
      const response = await ProfileService.addPublication(dataPublication)
      if (response.data.meta.status == 'error') {
        let errors = []
        let error = response.data.data
        for (let key in error) {
          errors.push(error[key][0])
        }
        setError(errors)
        return
      }
      window.location.reload()    
  }

  const inputs = [
    {
      name: 'title',
      type: 'text',
      label: 'Judul',
      required: true
    }
  ]
  return (
    <>
      <div className="flex items-center justify-center">
        {section ? (
          <>
            <button type="button" onClick={openModal} className="modal-section">
              <div className="flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.33333 0.666656H2C1.598 0.666656 1 0.93299 1 1.66666V6.33332C1 7.06699 1.598 7.33332 2 7.33332H7V6.66666H2.004C1.85 6.66266 1.66667 6.60199 1.66667 6.33332C1.66667 6.29966 1.66967 6.26966 1.67467 6.24232C1.712 6.05032 1.86933 6.00332 2.004 5.99999H7V1.33332C7 1.15651 6.92976 0.986943 6.80474 0.861919C6.67971 0.736894 6.51014 0.666656 6.33333 0.666656ZM6.33333 3.66666L5.66667 3.33332L5 3.66666V1.33332H6.33333V3.66666Z"
                    fill="white"
                  />
                </svg>

                <p>Publication</p>
              </div>
              <p className="mt-2 text-xs font-thin">
                Academic publications or book releases have a dedicated place
                here.
              </p>
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
                      Tambah Karya Tulis Ilmiah
                    </h3>
                  </div>
                  <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
                  <div className="my-5">
                    <div className="px-2 lg:px-8">
                      {inputs.map((input, index) => (
                        <InputFormProfile
                          data={dataPublication}
                          key={index}
                          {...input}
                          handleChange={handleChange}
                        />
                      ))}
                      <div className="my-4 lg:flex">
                        <div className="w-5/12">
                          <label className="text-xs lg:text-base" htmlFor="">
                            File
                          </label>
                        </div>
                        <div className="lg:w-7/12">
                          <input
                            type="file"
                            name="file"
                            onChange={(e) => {
                              setDataPublication({
                                ...dataPublication,
                                file: e.target.files[0]
                              })
                            }}
                          />
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
  )
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
          {...inputProps}
          className="input-form my-2 lg:my-5 lg:py-3"
          onChange={handleChange}
          value={data[inputProps.name]}
        />
      </div>
    </div>
  )
}
