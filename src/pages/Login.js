import React, { useEffect, useState } from 'react';
import AsideLogin from 'components/Aside/AsideLogin';
import AuthService from 'services/Auth/AuthService';
import ModalError from 'components/Modal/ModalError';
import { Helmet } from 'react-helmet';
import Gate from 'services/Auth/Gate';
export default function Login() {
  const [error, setError] = useState(false);
  const [error_msg, setError_msg] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

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
  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };
  const eye = passwordShown ? 'eye-slash-solid.svg' : 'eye-solid.svg';
  function closeModal() {
    setError(false);
  }

  if (!Gate.Authenticate()) {
    return (
      <>
        <main className="min-h-screen lg:flex">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Login</title>
          </Helmet>
          <AsideLogin />
          <section className="gradient-login-mobile relative items-center justify-center p-5 pb-32 sm:bg-white lg:flex lg:w-5/12 lg:bg-white lg:pb-5">
            <div className="mt-3 mb-5 text-left text-white sm:mt-28 sm:ml-9 lg:hidden">
              <img className="mb-7 w-60" src="/logo-login.png" alt="" />
              <h1 className="block text-2xl sm:text-4xl lg:w-[500px]">
                Menemukan Pekerjaan Impian Jadi Lebih Mudah!
              </h1>
              <p className="text-sm sm:mt-3 sm:text-base lg:w-10/12">
                Kembangkan potensi terbaikmu dan bergabung bersama kami di
                platform pilihan pertama yang akan membantu kamu membangun karir
                impianmu!
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
                <div className="wrap--password">
                  <input
                    onChange={handleChange}
                    required
                    className="input-form "
                    type={passwordShown ? 'text' : 'password'}
                    name="password"
                  />
                  <button
                    className="wrap--password-eye"
                    onClick={togglePassword}
                  >
                    <img src={`/${eye}`} width="18px" />
                  </button>
                </div>

                <button
                  type="submit"
                  className="primary-btn mt-10 px-5 py-3 text-center"
                  onClick={async (e) => {
                    e.preventDefault();
                    const respon = await AuthService.login(data);
                    if (respon.statusText === 'OK') {
                      if (respon.data.data.roles[0].name === 'business') {
                        window.location.href = '/business';
                      } else {
                        window.location.href = `/dashboard`;
                      }
                    } else {
                      setError(true);
                      setError_msg(respon.data.meta.message);
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
            title="Login Failed"
          ></ModalError>
        </main>
      </>
    );
  }
}
