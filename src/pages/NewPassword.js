import React from 'react'

export default function NewPassword() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-pale-orange">
        <img className='w-[240px] mb-10' src="/logo.png" alt=""/>
       <section className="relative items-center justify-center bg-pale-orange p-5 pb-32 sm:flex lg:w-5/12 lg:bg-white lg:pb-5">
        <div className="relative bottom-10 z-10 w-full rounded-md bg-white px-4 py-8 lg:static">
          <h3 className="mb-1 text-lg font-semibold lg:text-2xl">
            Enter New Password
          </h3>
          <p className="mb-5 font-semibold">Enter your new password to change the old one.</p>
          <form className="" action="">
            <label className="mt-5  mb-2 block text-left text-sm font-semibold text-dark-blue">
              New Password
            </label>
            <input
              required
              className="input-form "
              type="password"
              name="new_password"
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
              name="confirm_new_password"
            />

            <button
              type="submit"
              className="primary-btn mt-10 px-5 py-3 text-center"
              
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
  )
}
