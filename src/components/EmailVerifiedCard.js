import { sendEmailVefification } from 'services/Profile/ProfileService'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
export default function EmailVerifiedCard() {
  const [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <>
      <article className="mb-5 items-center gap-5 rounded-md bg-[#FFF6E7] py-7 px-3 shadow-mine sm:flex sm:px-8">
        <svg
          className="h-7 w-7 sm:h-12 sm:w-12"
          width="29"
          height="17"
          viewBox="0 0 29 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M26.875 16.75H2.125C1.3 16.75 0.75 16.2 0.75 15.375V1.625C0.75 0.8 1.3 0.25 2.125 0.25H26.875C27.7 0.25 28.25 0.8 28.25 1.625V15.375C28.25 16.2 27.7 16.75 26.875 16.75Z"
            fill="#FE9A00"
          />
          <path
            d="M13.6751 10.5625C14.2251 10.975 14.9126 10.975 15.3251 10.5625L27.7001 0.662568C27.4251 0.387568 27.1501 0.25 26.7376 0.25H2.12508C1.71258 0.25 1.4376 0.387568 1.1626 0.662568L13.6751 10.5625Z"
            fill="#FE9A00"
          />
        </svg>
        <div className="text-left">
          <h3 className="text-lg font-semibold text-black">
            Email anda belum terverifikasi!
          </h3>
          <p className="text-xs lg:text-sm">
            Silahkan klik tombol atau link verifikasi pada email yang dikirimkan
            oleh confie.id ke email anda. Apabila anda tidak menerima email
            apapun, silahkan periksa atau ganti email anda pada{' '}
            <a href="/setting" className="font-semibold italic text-[#7588CD] hover:underline">
              Account Setting
            </a>{' '}
            atau kirim ulang email verifikasi{' '}
            <button
              onClick={async () => {
                await sendEmailVefification()
                setIsOpen(true)
              }}
              className="font-semibold italic text-[#7588CD] hover:underline"
            >
              klik disini
            </button>
          </p>
        </div>
      </article>
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
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left text-center align-middle shadow-xl transition-all">
                  <p className="text-lg font-semibold">Verify Your Email</p>
                  <p className="text-sm text-gray-400">
                    Check your email & click the link to activate your account.
                  </p>
                  <svg
                    className="mx-auto h-48 w-48"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 15L2 10V18H18V10L10 15Z"
                      fill="black"
                      fill-opacity="0.3"
                    />
                    <path
                      d="M1 8.06083C1 7.71247 1.1813 7.38921 1.47855 7.20755L10 2L18.5214 7.20755C18.8187 7.38921 19 7.71247 19 8.06083V18C19 18.5523 18.5523 19 18 19H2C1.44772 19 1 18.5523 1 18V8.06083Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M1 8.5L10 14L19 8.5"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <rect
                      x="18.4286"
                      y="17.4286"
                      width="2.85714"
                      height="2.14286"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.5 16C18.1193 16 17 17.1193 17 18.5C17 19.8807 18.1193 21 19.5 21C20.8807 21 22 19.8807 22 18.5C22 17.1193 20.8807 16 19.5 16ZM20.5836 18.0773C20.6036 18.0545 20.6188 18.0279 20.6283 17.9991C20.6378 17.9704 20.6415 17.94 20.6392 17.9098C20.6368 17.8796 20.6284 17.8501 20.6144 17.8232C20.6005 17.7963 20.5814 17.7724 20.5581 17.753C20.5348 17.7336 20.5079 17.7191 20.4789 17.7102C20.4499 17.7014 20.4194 17.6984 20.3893 17.7016C20.3591 17.7047 20.3299 17.7138 20.3034 17.7283C20.2768 17.7429 20.2534 17.7626 20.2345 17.7864L19.2573 18.9589L18.7516 18.453C18.7087 18.4116 18.6513 18.3886 18.5917 18.3892C18.5321 18.3897 18.4751 18.4136 18.433 18.4557C18.3909 18.4979 18.367 18.5549 18.3664 18.6145C18.3659 18.674 18.3888 18.7315 18.4302 18.7743L19.112 19.4561C19.1344 19.4785 19.1611 19.4959 19.1905 19.5073C19.22 19.5187 19.2515 19.5239 19.283 19.5224C19.3146 19.521 19.3454 19.513 19.3737 19.499C19.402 19.4849 19.4271 19.4652 19.4473 19.4409L20.5836 18.0773Z"
                      fill="#0AA824"
                    />
                  </svg>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
