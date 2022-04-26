import React from 'react';
import InputField from 'components/InputField';
import AsideLogin from 'components/Aside/AsideLogin';
export default function Login() {
  return (
    <main className="min-h-screen lg:flex">
      <AsideLogin     />
      <section className="relative items-center justify-center p-5 sm:flex lg:w-5/12 bg-pale-orange lg:bg-white lg:pb-5 pb-32">
        <div className="lg:static relative bottom-10 z-10 w-full px-4 bg-white py-8 rounded-md">
          <h3 className='lg:text-2xl text-lg font-semibold mb-4'>Login to your Account</h3>
          <form className="" action="">
            <InputField label={'Email'} type={'email'} />
            <div className="mt-5 flex justify-between">
              <label
                className="mb-2 block text-sm font-semibold text-dark-blue"
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

    
  