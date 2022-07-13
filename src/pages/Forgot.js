import React, { Fragment, useEffect, useState } from 'react';
import AsideLogin from 'components/Aside/AsideLogin';
import AuthService from 'services/Auth/AuthService';
import { Dialog, Transition } from '@headlessui/react';
export default function Forgot() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [error_msg, setError_msg] = useState([]);

  useEffect(() => {
    document.title = 'Forgot Password';
  }, []);
  const [data, setData] = useState({
    email: '',
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <main className="min-h-screen lg:flex">
        <AsideLogin />
        <section className="relative items-center justify-center bg-pale-orange p-5 pb-32 sm:flex lg:w-5/12 lg:bg-white lg:pb-5">
          <div className="relative bottom-10 z-10 mt-32 w-full rounded-md bg-white px-4 py-8 lg:static lg:mt-0">
            <h3 className="mb-1 text-lg font-semibold lg:text-2xl">
              Forgot Password ?
            </h3>
            <p className="mb-5 font-semibold">
              Enter your email to reset your password
            </p>
            <form className="" action="">
              <label className="mt-5  mb-2 block text-left text-sm font-semibold text-dark-blue">
                Email
              </label>
              <input
                onChange={handleChange}
                required
                className="input-form "
                type="email"
                name="email"
              />

              <button
                type="submit"
                className="primary-btn mt-10 px-5 py-3 text-center"
                onClick={async (e) => {
                  e.preventDefault();
                  setIsOpen(true);
                  setLoading(true);
                  const respon = await AuthService.forgetPassword(data);
                  if (respon.status === 422) {
                    setError(true);
                    setError_msg(respon.data.data.email);
                  }
                  setLoading(false);
                }}
              >
                Submit
              </button>
            </form>
            <p className="my-3 font-semibold">OR</p>
            <a
              className="secondary-btn flex items-center justify-center px-5 py-3"
              href="/"
            >
              Back to Login
            </a>
          </div>
          <img
            className="absolute bottom-0 right-0 block w-[300px] sm:w-[400px] lg:hidden"
            src="/blob.png"
            alt=""
          />
        </section>
      </main>
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
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                  {loading ? (
                    <>
                      <div className="flex items-center justify-center gap-5 p-8">
                        <span className="animate-bounceOne rounded-full bg-[#7E8299] p-3"></span>
                        <span className="animate-bounceTwo rounded-full bg-[#7E8299] p-3"></span>
                        <span className="animate-bounceOne rounded-full bg-[#7E8299] p-3"></span>
                      </div>
                    </>
                  ) : (
                    <>
                      {!error && (
                        <>
                          <p className="text-lg font-semibold">
                            Your Password has been reset!
                          </p>
                          <p className="text-sm text-gray-400">
                            You can now login with your new password.
                          </p>
                          <img
                            className="mx-auto mt-2"
                            src="/email_approve.png"
                            alt=""
                          />
                        </>
                      )}
                      {error && (
                        <>
                          <p className="text-lg font-semibold">
                            Something goes wrong!
                          </p>
                          <p className="text-sm text-gray-400">
                            {error_msg}
                          </p>
                          <img
                            className="mx-auto mt-2"
                            src="/email_reject.png"
                            alt=""
                          />
                        </>
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
