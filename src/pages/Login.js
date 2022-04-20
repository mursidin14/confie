import React from 'react';
import InputField from 'components/InputField';
export default function Login() {
  return (
    <main className="min-h-screen lg:flex">
      <section className="bg-pale-orange px-10 py-10 sm:px-14 sm:py-10 lg:w-7/12">
        <img className='m-auto lg:m-0' src="/logo.png" alt="" />
        <div className="mt-10 text-left sm:mt-28 sm:ml-9">
          <h1 className='hidden lg:block'>Confie.id</h1>
          <p className="mt-3 lg:w-9/12 hidden lg:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
      <section className="relative items-center justify-center p-5 sm:flex lg:w-5/12 bg-pale-orange lg:bg-white lg:pb-5 pb-32">
        <div className="lg:static relative bottom-10 z-10 w-full px-4 bg-white py-8 rounded-md">
          <h3 className='lg:text-2xl text-lg font-semibold mb-4'>Login to your Account</h3>
          <form className="" action="">
            <InputField label={'Email'} type={'email'} />
            <div className="mt-5 flex justify-between">
              <label
                className="mb-2 block text-sm font-semibold text-dark-blue"
                for=""
              >
                Password
              </label>
              <a
                href=""
                className="mb-2 block text-sm font-semibold text-dark-blue"
              >
                Forget Password?
              </a>
            </div>
            <input required className="input-form " type="password" />

            <button type="submit" className="primary-btn mt-10 text-center">
              LOGIN
            </button>
          </form>
          <p className="my-3 font-semibold">OR</p>
          <a
            className="secondary-btn flex items-center justify-center"
            href="/register"
          >
            REGISTER
          </a>
        </div>
        <img className='lg:hidden block absolute bottom-0 sm:w-[400px] w-[300px] right-0' src="/blob.png" alt=""/>
      </section>
    </main>
  );
}
