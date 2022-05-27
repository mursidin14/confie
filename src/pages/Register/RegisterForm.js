import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';
import WizardFormFourthPage from './WizardFormFourthPage';
import WizardComplete from './WizardComplete';
import AuthService from 'services/Auth/AuthService';
import { makeCapital } from 'utils/utils';

export default function Register() {
  const [error_msg, setError_msg] = useState([]);
  const [page, setPage] = useState(1);
  const [dataAccount, setDataAccount] = useState({
    role: 'personal',
    gender: 'L',
  });
  const [isOpen, setIsOpenFailed] = useState(false);
  function closeModal() {
    setIsOpenFailed(false);
  }
  // FUNCTION FOR REQUEST REGISTER
  async function nextPage() {
    if (page === 4) {
      if (typeof dataAccount['date_of_birth'] !== 'number') {
        let transform_date = dataAccount['date_of_birth']
          .split('-')
          .reverse()
          .join('');
        dataAccount['date_of_birth'] = parseInt(transform_date);
      }
      // const req = await fetch('https://confie.upanastudio.com/backend/sanctum/csrf-cookie')
      // .then(res => {
      //   const req_register = fetch(
      //     'https://confie.upanastudio.com/backend/api/register',
      //     {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'text/plain',
      //       },
      //       body: JSON.stringify(dataAccount),
      //     }
      //   )
      //   .then(res_register => {
      //     if (!res_register.ok) {
      //       console.log("Gagal register")
      //       return setIsOpenFailed(true);
      //     }
      //   });
      // });
      const respon = await AuthService.register(dataAccount);
      if (respon.statusText !== 'Created') {
        let message_error = [];
        let msg_error = respon.data.data;
        for (let key in msg_error) {
          message_error.push(msg_error[key]);
        }
        setError_msg(message_error);
        return setIsOpenFailed(true);
      }
    }
    setPage(page + 1);
  }
  function previousPage(e) {
    setPage(page - 1);
  }
  return (
    <>
      {page === 1 && (
        <WizardFormFirstPage
          onSubmit={nextPage}
          onChange={setDataAccount}
          data={dataAccount}
        />
      )}
      {page === 2 && (
        <WizardFormSecondPage
          previousPage={previousPage}
          onSubmit={nextPage}
          onChange={setDataAccount}
          data={dataAccount}
        />
      )}
      {page === 3 && (
        <WizardFormThirdPage
          previousPage={previousPage}
          onSubmit={nextPage}
          onChange={setDataAccount}
          data={dataAccount}
        />
      )}
      {page === 4 && (
        <WizardFormFourthPage
          previousPage={previousPage}
          onSubmit={nextPage}
          onChange={setDataAccount}
          data={dataAccount}
        >
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
                      <div>
                        <div className="flex items-center justify-center p-8">
                          <svg
                            className="h-24 w-24"
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.875 0.125C1.73438 0.125 0 1.85938 0 4C0 5.40781 0.753125 6.63594 1.875 7.31406V4.5C1.875 4.3625 1.9875 4.25 2.125 4.25C2.2625 4.25 2.375 4.3625 2.375 4.5V7.57344C2.83594 7.76719 3.34375 7.875 3.875 7.875C4.40625 7.875 4.91406 7.76719 5.375 7.57344V4.5C5.375 4.3625 5.4875 4.25 5.625 4.25C5.7625 4.25 5.875 4.3625 5.875 4.5V7.31406C6.99688 6.63594 7.75 5.40625 7.75 4C7.75 1.85938 6.01562 0.125 3.875 0.125ZM2.85156 3.50781C2.62031 3.30156 2.12969 3.30156 1.89844 3.50781L1.75 3.64062C1.69063 3.69219 1.60469 3.70313 1.53594 3.66563C1.46719 3.62813 1.42812 3.55 1.44062 3.47187C1.50312 3.07812 1.975 2.81406 2.37656 2.81406C2.77813 2.81406 3.25 3.07812 3.3125 3.47187C3.325 3.55 3.28594 3.62813 3.21719 3.66563C3.12656 3.71406 3.04219 3.67656 3.00312 3.64062L2.85156 3.50781V3.50781ZM3.875 6.5C3.46094 6.5 3.125 6.05156 3.125 5.5C3.125 4.94844 3.46094 4.5 3.875 4.5C4.28906 4.5 4.625 4.94844 4.625 5.5C4.625 6.05156 4.28906 6.5 3.875 6.5ZM6.21562 3.66406C6.125 3.7125 6.04063 3.675 6.00156 3.63906L5.85313 3.50625C5.62188 3.3 5.13125 3.3 4.9 3.50625L4.75 3.64062C4.69063 3.69219 4.60469 3.70313 4.53594 3.66563C4.46719 3.62813 4.42813 3.55 4.44063 3.47187C4.50313 3.07812 4.975 2.81406 5.37656 2.81406C5.77813 2.81406 6.25 3.07812 6.3125 3.47187C6.32188 3.54844 6.28437 3.62656 6.21562 3.66406Z"
                              fill="#212223"
                            />
                          </svg>
                        </div>
                        {error_msg.map((item, index) => (
                          <p
                            key={index}
                            className="mx-auto w-full text-left text-xs my-1 text-[#7E8299] lg:w-[400px]"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </WizardFormFourthPage>
      )}
      {page === 5 && (
        <WizardComplete
          previousPage={previousPage}
          onSubmit={nextPage}
          data={dataAccount}
        />
      )}
    </>
  );
}
