import React, { useEffect, useState } from 'react';
import AsideLogin from 'components/Aside/AsideLogin';
import AuthService from 'services/Auth/AuthService';
import ModalError from 'components/Modal/ModalError';
import { Helmet } from 'react-helmet';
export default function Login() {
  const [error, setError] = useState(false);
  const [error_msg, setError_msg] = useState('');
  
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  function closeModal() {
    setError(false);
  }

  return (
    <main className="min-h-screen lg:flex">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
      <AsideLogin />
      <section className="gradient-login-mobile sm:bg-white relative items-center justify-center p-5 pb-32 lg:flex lg:w-5/12 lg:bg-white lg:pb-5">
      <div className="mt-3 text-left sm:mt-28 sm:ml-9 text-white mb-5 lg:hidden">
      <img className="w-60 mb-7" src="/logo-login.png" alt="" />
        <h1 className="block lg:w-[500px] text-2xl sm:text-4xl">
          Menemukan Pekerjaan Impian Jadi Lebih Mudah!
        </h1>
        <p className="sm:mt-3 lg:w-10/12 text-sm sm:text-base">
        Kembangkan potensi terbaikmu dan bergabung bersama kami di platform
pilihan pertama yang akan membantu kamu membangun karir impianmu!
        </p>
      </div>
      <div className="z-10 w-full rounded-md bg-white px-4 py-8 lg:static">
          <h3 className="mb-4 text-lg font-semibold lg:text-2xl">
            Login to your Account
          </h3>
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
            <div className="mt-5 flex justify-between">
              <label className="mb-2 block text-sm font-semibold text-dark-blue">
                Password
              </label>
              <a
                href="/forgot"
                className="mb-2 block text-sm font-semibold text-dark-blue"
              >
                Forget Password?
              </a>
            </div>
            <input
              onChange={handleChange}
              required
              className="input-form "
              type="password"
              name="password"
            />

            <button
              type="submit"
              className="primary-btn mt-10 px-5 py-3 text-center"
              onClick={async (e) => {
                e.preventDefault();
                const respon = await AuthService.login(data);
                if (respon.statusText === 'OK') {
                  if(respon.data.data.roles[0].name === 'business'){
                    window.location.href = '/business';
                  }else{
                    window.location.href = `/dashboard`;
                  }
                }else{
                  setError(true);
                  setError_msg(respon.data.meta.message)
                }
              }}
            >
              LOGIN
            </button>
          </form>
          <p className="my-3 font-semibold">OR</p>
          <a
            className="secondary-btn flex items-center justify-center px-5 py-3"
            href="/register"
          >
            REGISTER
          </a>
      </div>
      </section>
      <ModalError
        closeModal={closeModal}
        error={error}
        error_msg={error_msg}
      ></ModalError>
    </main>
  );
}
