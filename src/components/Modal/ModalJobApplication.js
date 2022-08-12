import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { applyJobVacancy } from 'services/Profile/JobVacancy';
import { makeCapital } from 'utils/utils';
export default function ModalJobApplication({ item }) {
  console.log(item)
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isApply, setIsApply] = useState(false);
  const [error, setError] = useState([]);
  function closeModal() {
    if (isApply) {
      return
    }
    setIsOpen(false);
    window.location.href = `/lamaran/detail/${item.id}`;
  }
  async function handleAccept() {
    setLoading(true);
   
    const error_respon = [];
    const response = await applyJobVacancy(item.id, {
      expected_salary: item.min_salary,
      start_date_expectation_work: item.registration_end_date
    });
    if(response.status === 403){
      error_respon.push('You have already applied for this job');
      setError(error_respon);
    }
    if (response.status === 422) {
      const error_apply = response.data.data;
      Object.keys(error_apply).forEach((key) => {
        error_respon.push(error_apply[key]);
      });
      setError(error_respon);
    }
    // if (!localStorage.getItem('jobs')) {
    //   localStorage.setItem('jobs', JSON.stringify({}));
    // }
    // const jobs = JSON.parse(localStorage.getItem('jobs'));
    // if (jobs[item.users.id]){
    //   jobs[item.users.id] = [...jobs[item.users.id], item.id];
    // }else{
    //   jobs[item.users.id] = [item.id]
    // }
    setLoading(false);
    setIsApply(false);
  }
  function openModal() {
    setIsApply(true);
    setIsOpen(true);
  }
  return (
    <>
      <div className="flex">
        <button
          type="button"
          onClick={openModal}
          className="primary-btn mt-10 w-fit px-5 py-3 text-sm"
        >
          Lamar Posisi
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 overflow-y-auto"
          onClose={closeModal}
        >
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
                  {loading ? (
                    <div className="flex items-center justify-center gap-5 p-8">
                      <span className="animate-bounceOne rounded-full bg-[#7E8299] p-3"></span>
                      <span className="animate-bounceTwo rounded-full bg-[#7E8299] p-3"></span>
                      <span className="animate-bounceOne rounded-full bg-[#7E8299] p-3"></span>
                    </div>
                  ) : (
                    <>
                      {isApply && (
                        <div>
                          <div className="flex items-center justify-center p-8">
                            <svg
                              width="88"
                              height="88"
                              viewBox="0 0 88 88"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M44 0.25C19.8398 0.25 0.25 19.8398 0.25 44C0.25 68.1602 19.8398 87.75 44 87.75C68.1602 87.75 87.75 68.1602 87.75 44C87.75 19.8398 68.1602 0.25 44 0.25ZM44 80.3281C23.9414 80.3281 7.67188 64.0586 7.67188 44C7.67188 23.9414 23.9414 7.67188 44 7.67188C64.0586 7.67188 80.3281 23.9414 80.3281 44C80.3281 64.0586 64.0586 80.3281 44 80.3281Z"
                                fill="#FE9A00"
                              />
                              <path
                                d="M54.8984 24.9277C51.9688 22.3594 48.1016 20.9531 44 20.9531C39.8984 20.9531 36.0312 22.3691 33.1016 24.9277C30.0547 27.5938 28.375 31.1777 28.375 35.0156V35.7578C28.375 36.1875 28.7266 36.5391 29.1563 36.5391H33.8438C34.2734 36.5391 34.625 36.1875 34.625 35.7578V35.0156C34.625 30.709 38.834 27.2031 44 27.2031C49.166 27.2031 53.375 30.709 53.375 35.0156C53.375 38.0527 51.2266 40.8359 47.8965 42.1152C45.8262 42.9063 44.0684 44.293 42.8086 46.1094C41.5293 47.9648 40.8652 50.1914 40.8652 52.4473V54.5469C40.8652 54.9766 41.2168 55.3281 41.6465 55.3281H46.334C46.7637 55.3281 47.1152 54.9766 47.1152 54.5469V52.3301C47.1203 51.382 47.4109 50.4575 47.9492 49.6771C48.4875 48.8967 49.2484 48.2966 50.1328 47.9551C55.8945 45.7383 59.6152 40.6602 59.6152 35.0156C59.625 31.1777 57.9453 27.5938 54.8984 24.9277ZM40.0938 65.4844C40.0938 66.5204 40.5053 67.514 41.2379 68.2465C41.9704 68.9791 42.964 69.3906 44 69.3906C45.036 69.3906 46.0296 68.9791 46.7621 68.2465C47.4947 67.514 47.9063 66.5204 47.9063 65.4844C47.9063 64.4484 47.4947 63.4548 46.7621 62.7222C46.0296 61.9897 45.036 61.5781 44 61.5781C42.964 61.5781 41.9704 61.9897 41.2379 62.7222C40.5053 63.4548 40.0938 64.4484 40.0938 65.4844Z"
                                fill="#FE9A00"
                              />
                            </svg>
                          </div>
                          <p className="mx-auto w-full text-center text-[#7E8299] lg:w-[400px]">
                            Dengan ini anda mengkonfirmasi bahwa anda akan
                            melamar posisi{' '}
                            <span className="font-semibold">
                              {item.title}
                            </span>{' '}
                            pada <span className="font-semibold">{makeCapital(item.users.full_name)}</span>
                          </p>
                          <div className="mt-10 flex items-center justify-center gap-4">
                            <button
                              onClick={handleAccept}
                              className="rounded-md bg-[#50CD89] px-5 py-2 text-white"
                            >
                              Ya, Setuju
                            </button>
                            <button
                              onClick={closeModal}
                              className="rounded-md bg-[#F1416C] px-5 py-2 text-white"
                            >
                              Tidak
                            </button>
                          </div>
                        </div>
                      )}
                      {!isApply && (
                        <div>
                          <div className="flex items-center justify-center p-8">
                            {error.length === 0 && (
                              <svg
                                width="100"
                                height="100"
                                viewBox="0 0 100 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M50 93.75C38.3968 93.75 27.2688 89.1406 19.0641 80.9359C10.8594 72.7312 6.25 61.6032 6.25 50C6.25 38.3968 10.8594 27.2688 19.0641 19.0641C27.2688 10.8594 38.3968 6.25 50 6.25C61.6032 6.25 72.7312 10.8594 80.9359 19.0641C89.1406 27.2688 93.75 38.3968 93.75 50C93.75 61.6032 89.1406 72.7312 80.9359 80.9359C72.7312 89.1406 61.6032 93.75 50 93.75ZM50 100C63.2608 100 75.9785 94.7322 85.3553 85.3553C94.7322 75.9785 100 63.2608 100 50C100 36.7392 94.7322 24.0215 85.3553 14.6447C75.9785 5.26784 63.2608 0 50 0C36.7392 0 24.0215 5.26784 14.6447 14.6447C5.26784 24.0215 0 36.7392 0 50C0 63.2608 5.26784 75.9785 14.6447 85.3553C24.0215 94.7322 36.7392 100 50 100Z"
                                  fill="#50CD89"
                                />
                                <path
                                  d="M68.5624 31.0625C68.5179 31.1057 68.4761 31.1516 68.4374 31.2L46.7312 58.8563L33.6499 45.7688C32.7613 44.9408 31.586 44.49 30.3717 44.5115C29.1573 44.5329 27.9986 45.0248 27.1398 45.8837C26.281 46.7425 25.789 47.9011 25.7676 49.1155C25.7461 50.3299 26.1969 51.5052 27.0249 52.3938L43.5624 68.9375C44.0079 69.3822 44.5384 69.7327 45.1223 69.9679C45.7062 70.2031 46.3315 70.3183 46.9608 70.3067C47.5902 70.295 48.2108 70.1567 48.7855 69.9C49.3603 69.6433 49.8774 69.2735 50.3062 68.8125L75.2562 37.625C76.1057 36.7334 76.5702 35.5431 76.5492 34.3117C76.5283 33.0803 76.0235 31.9066 75.144 31.0444C74.2645 30.1822 73.0811 29.7007 71.8495 29.7041C70.6179 29.7075 69.4371 30.1955 68.5624 31.0625Z"
                                  fill="#50CD89"
                                />
                              </svg>
                            )}
                            {error.length > 0 && (
                              <svg
                                width="100"
                                height="100"
                                viewBox="0 0 100 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M62.3868 31.6579C58.549 35.4984 54.7046 39.3395 50.8709 43.1806C47.0304 39.3415 43.19 35.5004 39.3482 31.6579C34.9044 27.2162 28.019 34.1049 32.4608 38.5467C36.2999 42.3838 40.1424 46.2269 43.9768 50.0626C40.1397 53.9017 36.2979 57.7442 32.4608 61.5853C28.019 66.0257 34.9078 72.9124 39.3482 68.4733C43.1873 64.6322 47.0277 60.7918 50.8709 56.9507C54.7113 60.7918 58.549 64.6309 62.3868 68.4733C66.8292 72.9131 73.7153 66.0257 69.2769 61.5859C65.4358 57.7448 61.5953 53.9057 57.7542 50.0633C61.596 46.2228 65.4364 42.3817 69.2769 38.5406C73.7153 34.1002 66.8292 27.2115 62.3868 31.6532"
                                  fill="#F44336"
                                />
                                <path
                                  d="M50 93.75C38.3968 93.75 27.2688 89.1406 19.0641 80.9359C10.8594 72.7312 6.25 61.6032 6.25 50C6.25 38.3968 10.8594 27.2688 19.0641 19.0641C27.2688 10.8594 38.3968 6.25 50 6.25C61.6032 6.25 72.7312 10.8594 80.9359 19.0641C89.1406 27.2688 93.75 38.3968 93.75 50C93.75 61.6032 89.1406 72.7312 80.9359 80.9359C72.7312 89.1406 61.6032 93.75 50 93.75ZM50 100C63.2608 100 75.9785 94.7322 85.3553 85.3553C94.7322 75.9785 100 63.2608 100 50C100 36.7392 94.7322 24.0215 85.3553 14.6447C75.9785 5.26784 63.2608 0 50 0C36.7392 0 24.0215 5.26784 14.6447 14.6447C5.26784 24.0215 0 36.7392 0 50C0 63.2608 5.26784 75.9785 14.6447 85.3553C24.0215 94.7322 36.7392 100 50 100V100Z"
                                  fill="#F44336"
                                />
                              </svg>
                            )}
                          </div>
                          <div>
                            {error.map((item, index) => (
                              <p
                                key={index}
                                className="mx-auto w-full text-center text-[#7E8299] lg:w-[400px]"
                              >
                                {item}
                              </p>
                            ))}
                          </div>
                          {error.length === 0 && (
                            <p className="mx-auto w-full text-center text-[#7E8299] lg:w-[400px]">
                              Lamaran anda berhasil!
                            </p>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
