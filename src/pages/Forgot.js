import React, { useEffect, useState } from 'react';
import AsideLogin from 'components/Aside/AsideLogin';
import AuthService from 'services/Auth/AuthService';
import ModalError from 'components/Modal/ModalError';
export default function Forgot() {
  const [error, setError] = useState(false);
  const [error_msg, setError_msg] = useState('');
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
    setError(false);
  }
  return (
    <main className="min-h-screen lg:flex">
      <AsideLogin />
      <section className="relative items-center justify-center bg-pale-orange p-5 pb-32 sm:flex lg:w-5/12 lg:bg-white lg:pb-5">
        <div className="relative bottom-10 z-10 w-full rounded-md bg-white px-4 py-8 lg:static lg:mt-0 mt-32">
          <h3 className="mb-1 text-lg font-semibold lg:text-2xl">
            Forgot Password ?
          </h3>
          <p className="mb-5 font-semibold">Enter your email to reset your password</p>
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
                const respon = await AuthService.forgetPassword(data);
                if (respon.statusText === 'OK') {
                  alert('Please check your email to reset your password');
                }else{
                  setError(true);
                  setError_msg(respon.data.meta.message)
                }
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
      <ModalError
        closeModal={closeModal}
        error={error}
        error_msg={error_msg}
      ></ModalError>
    </main>
  )
}
