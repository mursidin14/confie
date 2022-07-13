import React, {Fragment} from 'react';
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios';
import { Helmet } from 'react-helmet';
export default function NewPassword() {
  const [newPassword, setNewPassword] = React.useState({});
  const [isOpen, setIsOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const queryString = window.location.search;
  let url = queryString.slice(5);
  async function ResetPassword() {
    setLoading(true)
    setIsOpen(true)
    url = `${url}&password=${newPassword?.password}&password_confirmation=${newPassword?.new_password_confirmation}`;
    await axios({
      method: 'POST',
      url: `${url}`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    setLoading(false)
  }
  function closeModal() {
    window.location.href = '/';
    setIsOpen(false)
  }
  return (
    <>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <main className="flex min-h-screen flex-col items-center justify-center bg-pale-orange">
        <img className="mb-10 w-[240px]" src="/logo.png" alt="" />
        <section className="relative items-center justify-center bg-pale-orange p-5 pb-32 sm:flex lg:w-5/12 lg:bg-white lg:pb-5">
          <div className="relative bottom-10 z-10 w-full rounded-md bg-white px-4 py-8 lg:static">
            <h3 className="mb-1 text-lg font-semibold lg:text-2xl">
              Enter New Password
            </h3>
            <p className="mb-5 font-semibold">
              Enter your new password to change the old one.
            </p>
            <form className="" action="">
              <label className="mt-5  mb-2 block text-left text-sm font-semibold text-dark-blue">
                New Password
              </label>
              <input
                required
                className="input-form "
                type="password"
                name="password"
                onChange={(e) => {
                  setNewPassword({
                    ...newPassword,
                    password: e.target.value,
                  });
                }}
              />
              <div className="mt-5 flex justify-between">
                <label className="mb-2 block text-sm font-semibold text-dark-blue">
                  Confirm New Password
                </label>
              </div>
              <input
                required
                className="input-form "
                type="password"
                name="new_password"
                onChange={(e) => {
                  setNewPassword({
                    ...newPassword,
                    new_password_confirmation: e.target.value,
                  });
                }}
              />

              <button
                type="submit"
                className="primary-btn mt-10 px-5 py-3 text-center"
                onClick={(e) => {
                  e.preventDefault();
                  ResetPassword();
                }}
              >
                Submit
              </button>
            </form>
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
                      <p className="text-lg font-semibold">Your Password has been reset!</p>
                      <p className="text-sm text-gray-400">
                        You can now login with your new password.
                      </p>
                      <img className='mx-auto mt-2' src="/email_approve.png" alt=""/>
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
