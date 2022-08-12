import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import PersonalPlanService from 'services/PersonalPlan/PersonalPlan';
import { getFullDate } from 'utils/utils';
import { changeTimeInterview } from 'services/Business/JobVacancy/JobVacancy';
export default function ModalUpdateInterviewTime({idJob, idCandidate, data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState([]);
  const [timeInterview, setTimeInterview] = useState({
    interview_time: data
  });
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  function handleChange(e) {
    setTimeInterview({
      ...timeInterview,
      interview_time: e.target.value,
    });
  }
  async function submitData() {
    timeInterview.interview_time = new Date(timeInterview.interview_time).getTime() / 1000;
    const response = await changeTimeInterview(idJob, idCandidate, timeInterview)
    if (response.data.meta.status === 'error') {
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

  return (
    <>
      <button
        className="w-fit rounded bg-[#F5F8FA] px-4 py-3 text-[#7E8299] transition-all hover:bg-[#d6d7d8]"
        onClick={openModal}
      >
        Edit
      </button>

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
                      Edit Waktu Interview
                    </h3>
                  </div>
                  <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
                  <div className=" items-center lg:flex">
                    <div className="w-5/12">
                      <label className="text-xs lg:text-base">Waktu Interview</label>
                    </div>
                    <div className="lg:w-7/12">
                      <input
                        onChange={handleChange}
                        className="input-form my-2 lg:my-5 lg:py-3"
                        name='interview_time'
                        type="date"
                        value={timeInterview.interview_time ?? ''}
                      />
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
  );
}
