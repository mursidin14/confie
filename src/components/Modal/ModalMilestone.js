import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import PersonalPlanService from 'services/PersonalPlan/PersonalPlan';
import QuarterPlan from 'components/QuarterPlan';
export default function ModalMilestone({ idDetail }) {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const [milestone, setMilestone] = useState({});
  function handleChange(e) {
    setMilestone({
      ...milestone,
      [e.target.name]: e.target.value,
    });
  }
  async function submitData() {
    const response = await PersonalPlanService.addQuarterlyPlanData(idDetail, milestone);
    window.location.reload()
  }
  let inputs = [
    {
      label: 'Quarter',
      type: 'text',
      name: 'quarter',
      required: true,
    },
    {
      label: 'Target milestone',
      type: 'text',
      name: 'target_title',
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
                      Tambah Milestone
                    </h3>
                  </div>
                  <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
                  <div className="my-5">
                    <div className="px-8">
                      {inputs.map((input, index) => (
                        <InputFormProfile
                          handleChange={handleChange}
                          key={index}
                          {...input}
                        />
                      ))}
                    </div>
                  </div>

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

function InputFormProfile({ handleChange, label, ...inputProps }) {
  return (
    <div className=" items-center lg:flex">
      <div className="w-5/12">
        <label className="text-xs lg:text-base">{label}</label>
      </div>
      <div className="lg:w-7/12">
        <input
          onChange={handleChange}
          {...inputProps}
          className="input-form my-2 lg:my-5 lg:py-3 "
        />
      </div>
    </div>
  );
}
