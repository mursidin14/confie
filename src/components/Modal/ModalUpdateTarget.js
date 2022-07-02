import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import PersonalPlanService from 'services/PersonalPlan/PersonalPlan'
import { getFullDate } from 'utils/utils'
export default function ModalUpdateTarget({ data: { title, start_date, id } }) {
  let [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState([])
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const [plan, setPlan] = useState({
    title: title,
    start_date: getFullDate(start_date)
  })
  function handleChange(e) {
    if (e.target.name === 'start_date') {
      setPlan({
        ...plan,
        [e.target.name]: new Date(e.target.value).getTime() / 1000
      })
    } else {
      setPlan({
        ...plan,
        [e.target.name]: e.target.value
      })
    }
  }
  async function submitData() {
    const response = await PersonalPlanService.updatePersonalPlanData(id, plan)
    if (response.data.meta.status === 'error') {
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
  let inputs = [
    {
      label: 'Target',
      type: 'text',
      name: 'title',
      required: true
    },
    {
      name: 'start_date',
      label: 'Tanggal Mulai',
      type: 'date',
      required: true
    }
  ]
  return (
    <>
      <svg
        onClick={openModal}
        className="h-6 w-6 cursor-pointer fill-current text-gray-500 hover:text-gray-700"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.46667 2.44667L5.55334 1.53333C5.43414 1.42136 5.27794 1.35712 5.11445 1.35282C4.95096 1.34851 4.7916 1.40445 4.66667 1.51L1.66667 4.51C1.55893 4.61865 1.49184 4.76107 1.47667 4.91333L1.33334 6.30333C1.32885 6.35215 1.33519 6.40137 1.35189 6.44746C1.3686 6.49355 1.39527 6.53539 1.43001 6.57C1.46115 6.60089 1.49809 6.62533 1.53871 6.64192C1.57932 6.65851 1.62281 6.66692 1.66667 6.66667H1.69667L3.08667 6.54C3.23894 6.52483 3.38135 6.45774 3.49001 6.35L6.49001 3.35C6.60645 3.22699 6.66937 3.06283 6.665 2.89351C6.66063 2.72419 6.58931 2.5635 6.46667 2.44667ZM3.02667 5.87333L2.02667 5.96667L2.11667 4.96667L4.00001 3.10667L4.90001 4.00667L3.02667 5.87333ZM5.33334 3.56L4.44001 2.66667L5.09001 2L6.00001 2.91L5.33334 3.56Z"
          fill="#212223"
        />
      </svg>

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
                    <h3 className="text-base font-semibold ">Edit Target</h3>
                  </div>
                  <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
                  <div className="my-5">
                    <div className="px-2 lg:px-8">
                      {inputs.map((input, index) => (
                        <InputFormProfile
                          data={plan}
                          handleChange={handleChange}
                          key={index}
                          {...input}
                        />
                      ))}
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
                      onClick={submitData}
                      className="rounded-md bg-[#FE9A00] px-4 py-2 text-sm text-white"
                    >
                      Edit
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

function InputFormProfile({ handleChange, label, data, ...inputProps }) {
  return (
    <div className=" items-center lg:flex">
      <div className="w-5/12">
        <label className="text-xs lg:text-base">{label}</label>
      </div>
      <div className="lg:w-7/12">
        <input
          value={data[inputProps.name]}
          onChange={handleChange}
          {...inputProps}
          className="input-form my-2 lg:my-5 lg:py-3 "
        />
      </div>
    </div>
  )
}
