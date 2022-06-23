import React from 'react';

export default function EmailVerifiedCard() {
  return (
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
          <a href="/setting" className="font-semibold italic text-[#7588CD]">
            Account Setting
          </a>{' '}
          atau kirim ulang email verifikasi{' '}
          <a href="" className="font-semibold italic text-[#7588CD]">
            klik disini
          </a>
        </p>
      </div>
    </article>
  );
}