import React from 'react';
export default function Login() {
  return (
    <main className="min-h-screen lg:flex">
      <section className="bg-pale-orange px-10 py-10 sm:px-14 sm:py-10 lg:w-7/12">
        <img src="/logo.png" alt="" />
        <div className="mt-10 text-left sm:mt-28 sm:ml-9">
          <h1 >Confie.id</h1>
          <p className="mt-3 lg:w-9/12">
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
      <section className="items-center justify-center lg:p-10 px-10 py-5 sm:flex lg:w-5/12">
        <div className="w-full px-4">
          <h2>Login to your Account</h2>
          <form className="" action="">
          <label
                className="text-left mb-2 block text-sm font-semibold text-dark-blue"
                for=""
              >Email</label>
            <input required className="input-form " type="email" />

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
      </section>
    </main>
  );
}
