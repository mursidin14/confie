import { Dialog, Transition } from '@headlessui/react';
import { useBusinessContext } from 'context/business-context';
import React, { Fragment } from 'react';
export default function AlertNotPremiumUser() {
  const { business } = useBusinessContext();
  const isPremium = business.premium_until === null;
  return (
    <Transition appear show={isPremium} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 overflow-y-auto"
        onClose={() => {}}
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
                    <img src="/invalid-credential.svg" width="60%" />
                  </div>
                  <p className="mx-auto w-full text-center text-[#7E8299] lg:w-[400px]">
                    Sorry, You can't access this page because you are not a
                    premium user.
                  </p>
                  <button
                    onClick={() => {
                      window.location.href = '/business';
                    }}
                    className="mt-1 w-full text-center text-xs font-semibold outline-none"
                  >
                    <p>Back to home</p>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
